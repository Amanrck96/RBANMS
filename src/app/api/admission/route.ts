import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

// Define path for local counter file
const COUNTER_FILE = path.join(process.cwd(), 'application_counter.json');
const START_NUMBER = 1;

// Ensure counter file exists
if (!fs.existsSync(COUNTER_FILE)) {
  fs.writeFileSync(COUNTER_FILE, JSON.stringify({ currentNumber: START_NUMBER }));
}

export async function GET() {
  try {
    const counterData = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf-8'));
    const sequentialId = counterData.currentNumber;
    const date = new Date();
    const appNum = `RFGC-${date.getFullYear()}-${String(sequentialId).padStart(4, '0')}`;
    return NextResponse.json({ applicationNumber: appNum });
  } catch (err) {
    return NextResponse.json({ applicationNumber: "" });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // 1. Generate Application Number Sequentially
    const counterData = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf-8'));
    const sequentialId = counterData.currentNumber;
    
    // Increment and save for the next application
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ currentNumber: sequentialId + 1 }));

    const date = new Date();
    const formattedId = String(sequentialId).padStart(4, '0');
    const appNum = `RFGC-${date.getFullYear()}-${formattedId}`;
    const admissionNumber = `ADM-${formattedId}`;
    
    // Prepare auth client
    let authClient: any = null;
    const hasGoogleCreds = process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY;
    
    if (hasGoogleCreds) {
      try {
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        authClient = new google.auth.JWT({
          email: process.env.GOOGLE_CLIENT_EMAIL,
          key: privateKey,
          scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive'
          ]
        });
      } catch (authErr) {
        console.error("Google Auth Setup Error:", authErr);
      }
    } else {
      console.warn("*****************************************************************************");
      console.warn("WARNING: GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY not found in env.");
      console.warn("To enable Auto Google Sheet Entry and Google Drive Save, you MUST add them.");
      console.warn("Returning generated PDF to user instead.");
      console.warn("*****************************************************************************");
    }

    let sheetSuccess = false;
    let driveSuccess = false;
    let driveLink = "";
    
    // (Google Sheet logic moved down below Google Drive logic)

    let pdfBase64 = data.generatedPdfBase64 || "";
    let buffer: Buffer | null = null;
    
    if (pdfBase64) {
      buffer = Buffer.from(pdfBase64, 'base64');
    } else {
      // 3. Generate PDF manually with pdf-lib as fallback
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      let page = pdfDoc.addPage();
      const { width, height } = page.getSize();
      let y = height - 50;

      const drawText = (text: string, isBold: boolean = false, size: number = 10, xPos: number = 50) => {
        if (y < 50) {
          page = pdfDoc.addPage();
          y = height - 50;
        }
        page.drawText(String(text), {
          x: xPos,
          y: y,
          size: size,
          font: isBold ? boldFont : font,
          color: rgb(0, 0, 0),
        });
      };

      const nextLine = (space = 15) => { y -= space; };

      // Draw Passport Photo Box on top right
      page.drawRectangle({
        x: width - 120,
        y: height - 150,
        width: 90,
        height: 120,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });

      if (data.photoBase64) {
        try {
          const base64Data = data.photoBase64.split(',')[1];
          const isPng = data.photoBase64.includes('image/png');
          const photoImage = isPng 
            ? await pdfDoc.embedPng(Buffer.from(base64Data, 'base64'))
            : await pdfDoc.embedJpg(Buffer.from(base64Data, 'base64'));
            
          page.drawImage(photoImage, { x: width - 120, y: height - 150, width: 90, height: 120 });
        } catch (e) {
          console.error("Failed to embed photo:", e);
          page.drawText('Affix Passport', { x: width - 110, y: height - 85, size: 8, font: font });
          page.drawText('Size Photo', { x: width - 105, y: height - 95, size: 8, font: font });
        }
      } else {
        page.drawText('Affix Passport', { x: width - 110, y: height - 85, size: 8, font: font });
        page.drawText('Size Photo', { x: width - 105, y: height - 95, size: 8, font: font });
      }

      drawText('RBANMS FIRST GRADE COLLEGE', true, 16, width / 2 - 130);
      nextLine(20);
      drawText(`ADMISSION APPLICATION FORM`, true, 12, width / 2 - 100);
      nextLine(30);

      drawText(`Application No: ${appNum}`, true, 12, width / 2 - 80);
      drawText(`Admission No: ${admissionNumber}`, true, 12, 50);
      nextLine(35);

      drawText(`COURSE: ${data.courseApplied || ''}`, true, 12);
      nextLine(20);

      const breakText = (text: string, maxLen: number) => {
        const result = [];
        let current = "";
        const words = String(text || " - ").split(" ");
        for (const word of words) {
          if ((current + " " + word).length > maxLen) {
            result.push(current);
            current = word;
          } else {
            current = current ? current + " " + word : word;
          }
        }
        if (current) result.push(current);
        return result;
      };

      const printLine = (label: string, value: any, x1 = 50, x2 = 200, maxLenContext = 55) => {
        drawText(label + ':', true, 10, x1);
        const valLines = String(value || ' - ').split('\n').map(l => l.trim()).filter(Boolean);
        let lines: string[] = [];
        valLines.forEach((line: string) => {
          lines.push(...breakText(line, maxLenContext));
        });
        if (lines.length === 0) lines = [' - '];
        
        lines.forEach((line, idx) => {
          drawText(line, false, 10, x2);
          if (idx < lines.length - 1) {
            nextLine();
          }
        });
      };

      printLine('Student Full Name', data.fullName); nextLine();
      printLine('Gender', data.gender); printLine('Percentage', data.percentage, 300, 400); nextLine();
      printLine('Date of Birth', data.dob); printLine('Age', data.age, 300, 400); nextLine();
      printLine('Place of Birth', data.birthPlace); printLine('State', data.state, 300, 400); nextLine();
      printLine('Nationality', data.nationality); printLine('Religion', data.religion, 300, 400); nextLine();
      printLine('Caste', data.caste); printLine('Category', data.category, 300, 400); nextLine();
      printLine('Mother Tongue', data.motherTongue); nextLine();
      
      nextLine(10);
      drawText('Contact Details', true, 12); nextLine(20);
      printLine('Mobile', data.mobile); printLine('Email', data.email, 300, 400); nextLine();
      printLine('Address', data.address); nextLine();
      printLine('Pin Code', data.pinCode); printLine('Blood Group', data.bloodGroup, 300, 400); nextLine();
      
      nextLine(10);
      drawText('Parents Details', true, 12); nextLine(20);
      printLine("Father's Name", data.fatherName); printLine("Mother's Name", data.motherName, 300, 400); nextLine();
      printLine('Guardian Name', data.guardianName); nextLine();

      nextLine(10);
      drawText('Marks Details', true, 12); nextLine(20);
      if(Array.isArray(data.marksDetails)) {
        data.marksDetails.filter((m: any) => m.subject).forEach((m: any) => {
          drawText(`${m.subject}  |  Max: ${m.maxMarks}  |  Obt: ${m.obtainedMarks}  |  Reg: ${m.registerNo}`, false, 10, 60);
          nextLine();
        });
      }

      nextLine(10);
      drawText('Documents Submitted', true, 12); nextLine(20);
      if(Array.isArray(data.documents)) {
        data.documents.filter((d: any) => d.documentName).forEach((d: any) => {
          drawText(`${d.documentName}  |  No: ${d.documentNumber}  |  Mode: ${d.mode}`, false, 10, 60);
          nextLine();
        });
      }
      
      nextLine(10);
      drawText('Extra Info', true, 12); nextLine(20);
      printLine('Extra Curricular', data.extraCurricular); nextLine();
      printLine('How Known', data.howKnown); nextLine();

      const pdfBytes = await pdfDoc.save();
      pdfBase64 = Buffer.from(pdfBytes).toString('base64');
      buffer = Buffer.from(pdfBytes);
    }

    // 4. Google Drive Save (If Credentials Exist)
    const FOLDER_ID = '1PsiG8iXfX9QG-bYfSpgPclHEpXfyqr1x';
    let driveErrorMsg = "";
    if (authClient && pdfBase64) {
      // Ensure buffer is always set from pdfBase64 (handles client-generated PDF case)
      const uploadBuffer = Buffer.from(pdfBase64, 'base64');

      try {
        const drive = google.drive({ version: 'v3', auth: authClient });
        
        const stream = require('stream');
        const bufferStream = new stream.PassThrough();
        bufferStream.end(uploadBuffer);

        const fileMetadata = {
          name: `Admission_${appNum}_${data.fullName}.pdf`,
          parents: [FOLDER_ID]
        };
        const media = {
          mimeType: 'application/pdf',
          body: bufferStream
        };

        const file = await drive.files.create({
          requestBody: fileMetadata,
          media: media,
          fields: 'id'
        });
        
        console.log("Saved to Google Drive:", file.data.id);
        driveLink = 'https://drive.google.com/file/d/' + file.data.id + '/view?usp=sharing';
        driveSuccess = true;
      } catch (driveErr: any) {
        driveErrorMsg = driveErr.message || String(driveErr);
        console.error("Error creating file in drive", driveErr);
        driveLink = "DriveError: " + driveErrorMsg;
        driveSuccess = false;
      }
    } else if (!pdfBase64) {
      driveLink = "DriveSkipped: PDF was empty";
    } else if (!authClient) {
      driveLink = "DriveSkipped: No Google credentials";
    }

    // 5. Google Sheet Entry (Moved here to include PDF Link)
    const SPREADSHEET_ID = '1dUp8MTWqPjZM6gBsHFOu8P97SPT0Ke92VhiXxrLiLfk';
    if (authClient) {
      try {
        const sheets = google.sheets({ version: 'v4', auth: authClient });
        let marksStr = "";
        if (Array.isArray(data.marksDetails)) {
          marksStr = data.marksDetails.filter((m: any) => m.subject).map((m: any) => `${m.subject}: ${m.obtainedMarks}/${m.maxMarks} (Reg: ${m.registerNo})`).join(" | ");
        }
        let docsStr = "";
        if (Array.isArray(data.documents)) {
          docsStr = data.documents.filter((d: any) => d.documentName).map((d: any) => `${d.documentName} No:${d.documentNumber}`).join(" | ");
        }

        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: 'Sheet1!A:AA',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [
              [
                appNum,
                admissionNumber,
                data.courseApplied || '',
                data.fullName || '',
                data.gender || '',
                data.percentage || '',
                data.dob || '',
                data.age || '',
                data.birthPlace || '',
                data.state || '',
                data.nationality || '',
                data.religion || '',
                data.caste || '',
                data.category || '',
                data.motherTongue || '',
                data.mobile || '',
                data.email || '',
                String(data.address || '').replace(/\n/g, ', '),
                data.fatherName || '',
                data.motherName || '',
                data.guardianName || '',
                marksStr,
                docsStr,
                data.declarationDate || '',
                data.extraCurricular || '',
                data.howKnown || '',
                driveLink
              ]
            ]
          }
        });
        console.log("Appended to Google Sheets");
        sheetSuccess = true;
      } catch (sheetErr) {
        console.error("Error writing to sheet", sheetErr);
      }
    }

    // NEW FREE SOLUTION: Send PDF via Email using existing Nodemailer details setup
    let emailSuccess = false;
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        // Send to Admin
        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: [process.env.ADMIN_EMAIL || process.env.GMAIL_USER, data.email].filter(Boolean).join(','),
          subject: `New Admission Application - ${appNum} (${data.fullName})`,
          text: `A new admission application has been submitted by ${data.fullName} for ${data.courseApplied}. \n\nApplication No: ${appNum}\n\nPlease find the PDF attached.`,
          attachments: [
            {
              filename: `Admission_${appNum}_${data.fullName}.pdf`,
              content: buffer,
              contentType: 'application/pdf'
            }
          ]
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully with PDF");
        emailSuccess = true;
      } catch (emailErr) {
        console.error("Email sending failed:", emailErr);
      }
    }

    return NextResponse.json({ 
      success: true, 
      applicationNumber: appNum,
      pdfBase64: pdfBase64,
      sheetSuccess,
      driveSuccess,
      emailSuccess,
      driveErrorMsg
    });

  } catch (error) {
    console.error("Admission API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
