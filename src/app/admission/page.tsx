"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Trash2, Upload } from "lucide-react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function AdmissionPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appNumber, setAppNumber] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    // Fetch the preview application number on load
    fetch('/api/admission')
      .then(res => res.json())
      .then(data => {
        if (data.applicationNumber) {
          setAppNumber(data.applicationNumber);
        }
      })
      .catch(err => console.error("Could not fetch app number", err));
  }, []);

  const { register, control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      courseApplied: "",
      fullName: "",
      gender: "",
      percentage: "",
      dob: "",
      age: "",
      birthPlace: "",
      taluk: "",
      district: "",
      state: "",
      physicallyChallenged: "",
      karnatakaStudent: "",
      outsiderState: "",
      passportNumber: "",
      passportIssueDate: "",
      passportValidityDate: "",
      caste: "",
      community: "",
      category: "",
      nationality: "Indian",
      religion: "",
      motherTongue: "",
      collegeAttended: "",
      qualifyingExam: "",
      mediumOfInstruction: "",
      noOfAttempts: "",
      monthYearPassing: "",
      address: "",
      pinCode: "",
      mobile: "",
      email: "",
      bloodGroup: "",
      fatherName: "",
      fatherQual: "",
      fatherOcc: "",
      motherName: "",
      motherQual: "",
      motherOcc: "",
      permanentAddress: "",
      parentEmail: "",
      guardianName: "",
      guardianContact: "",
      guardianEmail: "",
      marksDetails: [{ subject: "", maxMarks: "", obtainedMarks: "", registerNo: "" }],
      documents: [{ documentName: "", date: "", documentNumber: "", mode: "In Person" }],
      extraCurricular: "",
      howKnown: "",
      studentSignature: "",
      parentSignature: "",
      declarationDate: new Date().toISOString().split('T')[0],
      // Office Use
      admissionNo: "",
      feesDue: "",
      admitTo: ""
    }
  });

  const marksArray = useFieldArray({ control, name: "marksDetails" });
  const docsArray = useFieldArray({ control, name: "documents" });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast({ title: "Error", description: "Image size must be less than 2MB", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      let generatedPdfBase64 = null;
      if (formRef.current) {
        const submitBtn = document.getElementById('submit-btn-wrapper');
        if (submitBtn) submitBtn.style.display = 'none';
        
        // --- PREPARE FOR PDF ---
        const inputs = Array.from(formRef.current.querySelectorAll('input, textarea, select')) as any[];
        const replacements: any[] = [];

        inputs.forEach((input) => {
          if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.checked) input.setAttribute('checked', 'checked');
            else input.removeAttribute('checked');
            return;
          }
          if (input.type === 'file') return;
          
          const div = document.createElement('div');
          const style = window.getComputedStyle(input);
          
          div.style.cssText = style.cssText;
          div.style.height = 'auto';
          div.style.minHeight = style.height;
          div.style.display = 'flex';
          div.style.alignItems = 'flex-end'; // Align to bottom similar to border-b inputs
          div.style.border = 'none';
          div.style.borderBottom = style.borderBottom; 
          div.style.backgroundColor = 'transparent';
          div.style.paddingBottom = '4px'; // Prevent bottom clipping
          div.style.boxSizing = 'border-box';
          div.style.overflow = 'hidden';
          
          if (input.tagName.toLowerCase() === 'textarea') {
            div.innerText = input.value;
            div.style.whiteSpace = 'pre-wrap';
            div.style.alignItems = 'flex-start';
          } else if (input.tagName.toLowerCase() === 'select') {
             div.innerText = input.options[input.selectedIndex]?.text || '';
          } else {
             div.innerText = input.value;
             div.style.justifyContent = style.textAlign === 'center' ? 'center' : (style.textAlign === 'right' ? 'flex-end' : 'flex-start');
          }

          input.parentNode?.insertBefore(div, input);
          input.style.display = 'none';
          replacements.push({ input, div });
        });
        // -----------------------

        try {
          // scale: 1.5 and quality: 0.7 keeps good quality but reduces size from ~15MB to ~2-3MB
          const canvas = await html2canvas(formRef.current, { scale: 1.5, backgroundColor: '#FFFDE8' });
          const imgData = canvas.toDataURL('image/jpeg', 0.75);
          const pdf = new jsPDF('p', 'mm', 'a4');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          
          let heightLeft = pdfHeight;
          let position = 0;

          pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
          heightLeft -= pageHeight;

          while (heightLeft > 0) {
            position = heightLeft - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pageHeight;
          }
          generatedPdfBase64 = pdf.output('datauristring').split(',')[1];
        } catch(e) {
          console.error("PDF Generate Error", e);
        }

        // --- RESTORE AFTER PDF ---
        replacements.forEach(({ input, div }) => {
          div.parentNode?.removeChild(div);
          input.style.display = '';
        });
        // -------------------------

        if (submitBtn) submitBtn.style.display = 'flex';
      }

      const payload = { ...data, photoBase64: photoPreview, generatedPdfBase64 };
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const result = await response.json();
      
      // If we got base64 PDF back, let's trigger a download so user knows PDF is generated
      if (result.pdfBase64) {
        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${result.pdfBase64}`;
        link.download = `Admission_Application_${result.applicationNumber}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setIsSubmitting(false);
      setAppNumber(result.applicationNumber);

      if (result.sheetSuccess === true || result.emailSuccess === true) {
        toast({
          title: "Application Submitted Successfully",
          description: `Your Application No is ${result.applicationNumber}. PDF Downloaded & Sent to College Admin!`,
        });
      } else {
        toast({
          title: "Saved Locally!",
          description: `Dev Info: Sheets: ${result.sheetErrorMsg || 'Auth Missing'}. Email: ${result.emailErrorMsg || 'Auth Missing'}`,
          variant: "destructive",
          duration: 15000
        });
      }

    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "An error occurred while submitting your application.",
        variant: "destructive"
      });
    }
  };

  const borderClass = "border border-black p-2";
  const labelClass = "text-sm font-bold uppercase tracking-wider text-black";
  const inputClass = "w-full bg-transparent border-b border-black outline-none py-1 focus:border-b-2 text-black placeholder:text-black/40";

  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#FDFBF7]">
      <SiteHeader />
      
      <main className="flex-grow py-8 px-2 md:px-8">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-[#FFFDE8] border-2 border-black p-4 md:p-8 shadow-xl text-black">
          
          {/* Header Section */}
          <div className="mb-6 border-b-4 border-black pb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Logo */}
              <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-white p-2 border border-black/20 rounded">
                <img src="/images/logo-full.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              
              {/* Center Text */}
              <div className="text-center flex-1">
                <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-black">RBANM's First Grade College</h1>
                <p className="text-sm font-bold uppercase mt-1">#12, Annaswamy Mudaliar Road, Bangalore - 560 042</p>
                <p className="text-sm font-semibold mt-1">Phone: 080-25512976 | Web: www.rbanmsfgc.edu.in</p>
              </div>

              {/* Photo Box */}
              <div 
                className="w-[3.5cm] h-[4.5cm] border-2 border-black flex flex-col items-center justify-center text-center p-1 flex-shrink-0 bg-white relative cursor-pointer hover:bg-gray-50 overflow-hidden"
                onClick={() => photoInputRef.current?.click()}
                title="Click to upload photo"
              >
                {photoPreview ? (
                   <img src={photoPreview} alt="Passport Size" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <Upload className="w-4 h-4 mb-1 text-gray-400" />
                    <span className="text-[10px] font-bold text-gray-800 uppercase leading-tight">Affix Recent<br/>Passport Size<br/>Photo Here</span>
                  </>
                )}
                <input 
                  type="file" 
                  ref={photoInputRef}
                  accept="image/png, image/jpeg, image/jpg"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-end border-t border-black pt-4">
              <div className="text-left inline-block bg-[#FFFDE8]">
                <span className={`${labelClass} text-lg`}>Application No:</span> 
                {appNumber ? (
                  <span className="ml-2 font-bold text-2xl text-red-600 tracking-widest bg-yellow-200 px-2 py-1 outline outline-2 outline-red-600">{appNumber}</span>
                ) : (
                  <span className="ml-2 font-bold text-red-600 tracking-wider italic">(Auto Generated on Submit)</span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Course Selection */}
            <div className="border-2 border-black p-4">
              <h2 className={`${labelClass} mb-3`}>Course Applied For</h2>
              <div className="space-y-2">
                {[
                  'Bachelor of Arts (B.A.) - Economics, with History & Political Science',
                  'Bachelor of Arts (B.A.) - Physical Education with History & Political Science',
                  'Bachelor of Arts (B.A.) - Journalism & Mass Communication, History and Economics.',
                  'Bachelor of Commerce (B.Com)',
                  'Bachelor of Business Administration (B.B.A)',
                  'Bachelor of Computer Applications (B.C.A)',
                  'Master of Commerce (M.Com)'
                ].map(course => (
                  <label key={course} className="flex items-start space-x-3 cursor-pointer">
                    <input type="radio" value={course} {...register('courseApplied', { required: true })} className="w-5 h-5 mt-1 accent-black border-black shrink-0" />
                    <span className="font-bold text-sm leading-tight">{course}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Office Use */}
            <div className="border-2 border-black p-4">
              <h2 className={`${labelClass} text-center border-b border-black pb-2 mb-2`}>For Office Use Only</h2>
              <div className="space-y-3 mt-4">
                <div>
                  <span className={labelClass}>Admission No: </span>
                  <input type="text" className={inputClass} readOnly />
                </div>
                <div>
                  <span className={labelClass}>Fees Due: </span>
                  <input type="text" className={inputClass} readOnly />
                </div>
                <div>
                  <span className={labelClass}>Admit To: </span>
                  <input type="text" className={inputClass} readOnly />
                </div>
              </div>
            </div>
          </div>

          {/* Page 1 Split: Left Details & Right Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black mb-4">
            {/* Left Side Details */}
            <div className="p-4 border-r-0 md:border-r-2 border-black space-y-4">
              <div className="space-y-1">
                <label className={labelClass}>Student Full Name</label>
                <input {...register('fullName', { required: true })} className={inputClass} />
              </div>
              
              <div className="flex gap-4">
                <div className="space-y-1 flex-1">
                  <label className={labelClass}>Gender</label>
                  <select {...register('gender', { required: true })} className="w-full bg-transparent border-b border-black py-1 outline-none uppercase font-bold">
                    <option value="">--</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                  </select>
                </div>
                <div className="space-y-1 flex-1">
                  <label className={labelClass}>Percentage</label>
                  <input {...register('percentage')} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className={labelClass}>DOB</label>
                  <input type="date" {...register('dob')} className={inputClass} />
                </div>
                <div className="space-y-1">
                  <label className={labelClass}>Age</label>
                  <input {...register('age')} className={inputClass} />
                </div>
              </div>

              <div className="space-y-1">
                <label className={labelClass}>Place of Birth</label>
                <div className="grid grid-cols-2 gap-2">
                  <input {...register('birthPlace')} placeholder="City/Village" className={inputClass} />
                  <input {...register('taluk')} placeholder="Taluk" className={inputClass} />
                  <input {...register('district')} placeholder="District" className={inputClass} />
                  <input {...register('state')} placeholder="State" className={inputClass} />
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="space-y-1 flex-1">
                  <label className={labelClass}>Physically Chlg</label>
                  <select {...register('physicallyChallenged')} className="w-full bg-transparent border-b border-black py-1 outline-none uppercase font-bold">
                    <option value="">--</option><option value="Yes">YES</option><option value="No">NO</option>
                  </select>
                </div>
                <div className="space-y-1 flex-1">
                  <label className={labelClass}>Karnataka Stdnt</label>
                  <select {...register('karnatakaStudent')} className="w-full bg-transparent border-b border-black py-1 outline-none uppercase font-bold">
                    <option value="">--</option><option value="Yes">YES</option><option value="No">NO</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                  <label className={labelClass}>If outsider (State Name)</label>
                  <input {...register('outsiderState')} className={inputClass} />
              </div>

              <div className="border border-black p-2 mt-4 space-y-2">
                <label className={labelClass}>Passport Details</label>
                <input {...register('passportNumber')} placeholder="Passport No" className={inputClass} />
                <div className="flex gap-2">
                  <input type="date" {...register('passportIssueDate')} title="Issue Date" className={inputClass} />
                  <input type="date" {...register('passportValidityDate')} title="Valid Date" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Right Side Details */}
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1"><label className={labelClass}>Caste</label><input {...register('caste')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Community</label><input {...register('community')} className={inputClass} /></div>
                
                <div className="space-y-1"><label className={labelClass}>Category</label>
                  <select {...register('category')} className="w-full bg-transparent border-b border-black py-1 outline-none uppercase font-bold">
                    <option value="">--</option><option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="GM">GM</option>
                  </select>
                </div>
                <div className="space-y-1"><label className={labelClass}>Nationality</label><input {...register('nationality')} className={inputClass} /></div>
                
                <div className="space-y-1"><label className={labelClass}>Religion</label><input {...register('religion')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Mother Tongue</label><input {...register('motherTongue')} className={inputClass} /></div>
              </div>

              <div className="space-y-1">
                <label className={labelClass}>College Last Attended</label>
                <input {...register('collegeAttended')} className={inputClass} />
              </div>
              
              <div className="space-y-1">
                <label className={labelClass}>Qualifying Exam Passed</label>
                <input {...register('qualifyingExam')} placeholder="PUC / CBSE / ISC" className={inputClass} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1"><label className={labelClass}>Medium of Inst.</label><input {...register('mediumOfInstruction')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>No of Attempts</label><input {...register('noOfAttempts')} className={inputClass} /></div>
              </div>

              <div className="space-y-1">
                <label className={labelClass}>Month & Year of Passing</label>
                <input type="month" {...register('monthYearPassing')} className={inputClass} />
              </div>
            </div>
          </div>

          {/* Page 2: Address & Parents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black mb-4">
            {/* Address */}
            <div className="p-4 border-r-0 md:border-r-2 border-black space-y-4">
               <h2 className={`${labelClass} border-b border-black pb-1`}>Address for Communication</h2>
               <textarea {...register('address')} rows={3} className="w-full bg-transparent border border-black p-2 outline-none resize-none"></textarea>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1"><label className={labelClass}>Pin Code</label><input {...register('pinCode')} className={inputClass} /></div>
                 <div className="space-y-1"><label className={labelClass}>Blood Group</label><input {...register('bloodGroup')} className={inputClass} /></div>
               </div>
               
               <div className="space-y-1"><label className={labelClass}>Mobile Number</label><input {...register('mobile')} className={inputClass} /></div>
               <div className="space-y-1"><label className={labelClass}>Email ID</label><input {...register('email')} className={inputClass} /></div>
            </div>

            {/* Parents & Guardian Details */}
            <div className="p-4 space-y-4">
               <h2 className={`${labelClass} border-b border-black pb-1`}>Parents Details</h2>
               <div className="space-y-1"><label className={labelClass}>Father's Name & Qual.</label>
                 <div className="flex gap-2"><input {...register('fatherName')} placeholder="Name" className={inputClass} /><input {...register('fatherQual')} placeholder="Qualification" className={inputClass} /></div>
               </div>
               <div className="space-y-1"><label className={labelClass}>Father's Occupation</label><input {...register('fatherOcc')} className={inputClass} /></div>
               
               <div className="space-y-1"><label className={labelClass}>Mother's Name & Qual.</label>
                 <div className="flex gap-2"><input {...register('motherName')} placeholder="Name" className={inputClass} /><input {...register('motherQual')} placeholder="Qualification" className={inputClass} /></div>
               </div>
               <div className="space-y-1"><label className={labelClass}>Mother's Occupation</label><input {...register('motherOcc')} className={inputClass} /></div>

               <div className="space-y-1"><label className={labelClass}>Permanent Address & Email</label>
                 <input {...register('permanentAddress')} placeholder="Address" className={inputClass} />
                 <input {...register('parentEmail')} placeholder="Email" className={inputClass} />
               </div>

               <div className="border border-black p-2 space-y-2 mt-2">
                 <h2 className={labelClass}>Guardian Details (If any)</h2>
                 <input {...register('guardianName')} placeholder="Name" className={inputClass} />
                 <div className="flex gap-2"><input {...register('guardianContact')} placeholder="Contact" className={inputClass} /><input {...register('guardianEmail')} placeholder="Email" className={inputClass} /></div>
               </div>
            </div>
          </div>

          {/* Marks Table */}
          <div className="border-2 border-black mb-4 p-4">
             <div className="flex justify-between items-center border-b border-black pb-2 mb-4">
                <h2 className={labelClass}>Marks in Qualifying Examination</h2>
                <button type="button" onClick={() => marksArray.append({ subject: "", maxMarks: "", obtainedMarks: "", registerNo: "" })} className="text-xs bg-black text-[#FFFDE8] py-1 px-3 uppercase font-bold flex items-center">
                  <Plus className="w-3 h-3 mr-1" /> Add Subject
                </button>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full border-collapse border border-black text-sm">
                 <thead>
                   <tr className="bg-black/5">
                     <th className="border border-black px-2 py-2 text-left uppercase">Subject</th>
                     <th className="border border-black px-2 py-2 text-center uppercase">Max Marks</th>
                     <th className="border border-black px-2 py-2 text-center uppercase">Obtained</th>
                     <th className="border border-black px-2 py-2 text-center uppercase">Reg No / Year</th>
                     <th className="border border-black px-2 py-2 text-center uppercase w-12">Del</th>
                   </tr>
                 </thead>
                 <tbody>
                    {marksArray.fields.map((item, idx) => (
                      <tr key={item.id}>
                        <td className="border border-black p-1"><input {...register(`marksDetails.${idx}.subject`)} className="w-full bg-transparent outline-none" /></td>
                        <td className="border border-black p-1"><input {...register(`marksDetails.${idx}.maxMarks`)} className="w-full bg-transparent outline-none text-center" /></td>
                        <td className="border border-black p-1"><input {...register(`marksDetails.${idx}.obtainedMarks`)} className="w-full bg-transparent outline-none text-center" /></td>
                        <td className="border border-black p-1"><input {...register(`marksDetails.${idx}.registerNo`)} className="w-full bg-transparent outline-none text-center" /></td>
                        <td className="border border-black p-1 text-center">
                          <button type="button" onClick={() => marksArray.remove(idx)}><Trash2 className="w-4 h-4 text-red-700" /></button>
                        </td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
          </div>

          {/* Documents Table */}
          <div className="border-2 border-black mb-4 p-4">
             <div className="flex justify-between items-center border-b border-black pb-2 mb-4">
                <h2 className={labelClass}>Documents Submitted</h2>
                <button type="button" onClick={() => docsArray.append({ documentName: "", date: "", documentNumber: "", mode: "In Person" })} className="text-xs bg-black text-[#FFFDE8] py-1 px-3 uppercase font-bold flex items-center">
                  <Plus className="w-3 h-3 mr-1" /> Add Document
                </button>
             </div>
             <p className="text-xs italic mb-2">e.g. Marks Card, Caste Certificate, Conduct Certificate, Migration, Eligibility, etc.</p>
             <div className="overflow-x-auto">
               <table className="w-full border-collapse border border-black text-sm">
                 <thead>
                   <tr className="bg-black/5">
                     <th className="border border-black px-2 py-2 text-left uppercase">Document Name</th>
                     <th className="border border-black px-2 py-2 text-center uppercase">Date</th>
                     <th className="border border-black px-2 py-2 text-center uppercase">Number</th>
                     <th className="border border-black px-2 py-2 text-center uppercase">Mode</th>
                     <th className="border border-black px-2 py-2 text-center w-12">Del</th>
                   </tr>
                 </thead>
                 <tbody>
                    {docsArray.fields.map((item, idx) => (
                      <tr key={item.id}>
                        <td className="border border-black p-1"><input {...register(`documents.${idx}.documentName`)} className="w-full bg-transparent outline-none" /></td>
                        <td className="border border-black p-1"><input type="date" {...register(`documents.${idx}.date`)} className="w-full bg-transparent outline-none" /></td>
                        <td className="border border-black p-1"><input {...register(`documents.${idx}.documentNumber`)} className="w-full bg-transparent outline-none text-center" /></td>
                        <td className="border border-black p-1">
                          <select {...register(`documents.${idx}.mode`)} className="w-full bg-transparent outline-none text-center">
                            <option value="In Person">In Person</option><option value="Post">Post</option>
                          </select>
                        </td>
                        <td className="border border-black p-1 text-center">
                          <button type="button" onClick={() => docsArray.remove(idx)}><Trash2 className="w-4 h-4 text-red-700" /></button>
                        </td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
          </div>

          {/* Page 3: Extra Details & Declaration */}
          <div className="border-2 border-black mb-4 p-4 space-y-6">
            <div className="space-y-1">
              <label className={labelClass}>Extra Curricular Activities / Sports</label>
              <input {...register('extraCurricular')} className={inputClass} />
            </div>

            <div className="space-y-2">
              <label className={labelClass}>How did you come to know about RBANM's First Grade College?</label>
              <div className="flex gap-6 flex-wrap">
                {['Banners in your locality', 'Pamphlets/Hand Bills', 'Web Site', 'Other'].map(opt => (
                  <label key={opt} className="flex items-center space-x-2 cursor-pointer font-bold uppercase text-sm">
                    <input type="radio" value={opt} {...register('howKnown')} className="w-4 h-4 accent-black" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-black">
               <h2 className={`${labelClass} mb-2 text-center text-lg`}>Declaration</h2>
               <p className="text-sm text-justify leading-relaxed mb-6 font-medium">
                  I hereby declare that the particulars furnished above are true to the best of my knowledge and belief. I agree to abide by the rules and regulations of the college. I understand that my admission is provisional and subject to the approval of Bangalore University. I shall attend classes regularly and ensure a minimum of 75% attendance.
               </p>
               
               <div className="flex justify-between items-end mt-12 pb-4">
                  <div className="flex flex-col border-t border-black w-48 pt-1 text-center">
                    <span className={labelClass}>Date</span>
                    <input type="date" {...register('declarationDate')} className="bg-transparent outline-none text-center" />
                  </div>
                  <div className="flex flex-col border-t border-black w-48 pt-1 text-center">
                     <input {...register('studentSignature')} placeholder="Type name to sign" className="bg-transparent outline-none text-center font-signature text-lg border-b border-dashed border-black/30 mb-1" />
                     <span className={labelClass}>Signature of Student</span>
                  </div>
                  <div className="flex flex-col border-t border-black w-48 pt-1 text-center">
                     <input {...register('parentSignature')} placeholder="Type name to sign" className="bg-transparent outline-none text-center font-signature text-lg border-b border-dashed border-black/30 mb-1" />
                     <span className={labelClass}>Signature of Parent/Guardian</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Submit Button */}
          <div id="submit-btn-wrapper" className="flex justify-center mt-8">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-black text-[#FFFDE8] text-xl font-bold uppercase tracking-widest px-12 py-4 border-4 border-black hover:bg-transparent hover:text-black transition-all"
            >
              {isSubmitting ? <span className="flex items-center"><Loader2 className="mr-2 animate-spin" /> Processing...</span> : "Submit Application"}
            </button>
          </div>
          
        </form>
      </main>

      <SiteFooter />
    </div>
  );
}
