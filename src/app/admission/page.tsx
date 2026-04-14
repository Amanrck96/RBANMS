"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload } from "lucide-react";
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
      contactNumber: "",
      email: "",
      gender: "",
      nationality: "Indian",
      caste: "",
      religion: "",
      physicallyChallenged: "",
      karnatakaStudent: "",
      collegeAttended: "",
      collegePlace: "",
      qualifyingExam: "",
      noOfAttempts: "",
      monthYearPassing: "",
      combination: "",
      languageDetails: "",
      
      dob: "",
      village: "",
      taluk: "",
      district: "",
      state: "",
      motherTongue: "",
      bloodGroup: "",
      languagesKnown: "",
      
      permanentAddress: "",
      pinCode: "",
      addressContact: "",
      
      guardianName: "",
      guardianAddress: "",
      guardianContact: "",
      guardianEmail: "",
      
      fatherName: "",
      fatherQual: "",
      fatherOcc: "",
      fatherIncome: "",
      fatherContact: "",
      fatherEmail: "",
      
      motherName: "",
      motherQual: "",
      motherOcc: "",
      motherIncome: "",
      motherContact: "",
      motherEmail: "",
      
      noOfDependents: "",
      noOfBrothers: "",
      noOfSisters: "",
      workHostelAddress: "",
      stayingWith: "",
      
      marksDetails: [
        { examination: "SSLC / 10th", board: "", registerNo: "", year: "", maxMarks: "", obtainedMarks: "", percentage: "" },
        { examination: "PUC / 12th", board: "", registerNo: "", year: "", maxMarks: "", obtainedMarks: "", percentage: "" },
        { examination: "Any Other (Specify)", board: "", registerNo: "", year: "", maxMarks: "", obtainedMarks: "", percentage: "" }
      ],
      
      extraCurricular: "",
      
      docs: {
        sslc: false,
        puc: false,
        tc: false,
        migration: false,
        caste: false,
        income: false,
        aadhaar: false,
        photos: false
      },
      
      infoCorrect: false,
      studentSignature: "",
      parentSignature: "",
      declarationDate: new Date().toISOString().split('T')[0],
      
      admissionNo: "",
      feesDue: "",
      admissionApproved: "",
      remarks: ""
    }
  });

  const marksArray = useFieldArray({ control, name: "marksDetails" });

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
    if (!data.infoCorrect) {
      toast({ title: "Declaration Required", description: "Please check the declaration box before submitting.", variant: "destructive" });
      return;
    }
    
    setIsSubmitting(true);
    try {
      let generatedPdfBase64 = null;
      if (formRef.current) {
        const submitBtn = document.getElementById('submit-btn-wrapper');
        if (submitBtn) submitBtn.style.display = 'none';

        // --- FORCE DESKTOP LAYOUT FOR PDF ---
        // Temporarily override media-query classes so the PDF always renders
        // with the desktop grid regardless of actual window width
        const styleTag = document.createElement('style');
        styleTag.id = '__pdf_override__';
        styleTag.innerHTML = `
          .pdf-page-section .grid { display: grid !important; }
          .pdf-page-section .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .pdf-page-section .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          .pdf-page-section .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
          .pdf-page-section .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
          .pdf-page-section .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
          .pdf-page-section .md\\:flex-row { flex-direction: row !important; }
          .pdf-page-section .md\\:w-2\\/3 { width: 66.666% !important; }
          .pdf-page-section .md\\:w-1\\/3 { width: 33.333% !important; }
          .pdf-page-section .md\\:w-auto { width: auto !important; }
          .pdf-page-section .md\\:items-center { align-items: center !important; }
          .pdf-page-section .md\\:items-end { align-items: flex-end !important; }
          .pdf-page-section .md\\:flex-row { flex-direction: row !important; }
          .pdf-page-section .md\\:inline-block { display: inline-block !important; }
          .pdf-page-section .sm\\:flex-row { flex-direction: row !important; }
          .pdf-page-section .sm\\:items-center { align-items: center !important; }
          .pdf-page-section .sm\\:w-32 { width: 8rem !important; }
          .pdf-page-section .sm\\:w-40 { width: 10rem !important; }
          .pdf-page-section .sm\\:w-60 { width: 15rem !important; }
          .pdf-page-section .sm\\:mb-0 { margin-bottom: 0 !important; }
          .pdf-page-section .sm\\:mt-2 { margin-top: 0.5rem !important; }
          .pdf-page-section .sm\\:ml-2 { margin-left: 0.5rem !important; }
          .pdf-page-section .md\\:mb-0 { margin-bottom: 0 !important; }
          .pdf-page-section table td input { display: block; width: 100%; padding: 6px 4px; text-align: center; }
        `;
        document.head.appendChild(styleTag);

        const originalFormStyle = formRef.current.style.cssText;
        formRef.current.style.width = '1024px';
        formRef.current.style.maxWidth = '1024px';
        formRef.current.style.margin = '0 auto';
        // ------------------------------------

        try {
          const pages = Array.from(formRef.current.querySelectorAll('.pdf-page-section'));
          const pdf = new jsPDF('p', 'mm', 'a4');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          
          if (pages.length > 0) {
            const pdfHeight = pdf.internal.pageSize.getHeight();
            for (let i = 0; i < pages.length; i++) {
               const pageEl = pages[i] as HTMLElement;
               const canvas = await html2canvas(pageEl, { scale: 1.5, backgroundColor: '#FFFDE8', windowWidth: 1024 });
               const imgData = canvas.toDataURL('image/jpeg', 0.8);
               let imgHeightInPdf = (canvas.height * pdfWidth) / canvas.width;
               let finalWidth = pdfWidth;
               let xOffset = 0;
               
               if (imgHeightInPdf > pdfHeight) {
                  imgHeightInPdf = pdfHeight;
                  finalWidth = (canvas.width * pdfHeight) / canvas.height;
                  xOffset = (pdfWidth - finalWidth) / 2;
               }
               
               if (i > 0) pdf.addPage();
               pdf.addImage(imgData, 'JPEG', xOffset, 0, finalWidth, imgHeightInPdf);
            }
          } else {
             const canvas = await html2canvas(formRef.current, { scale: 1.5, backgroundColor: '#FFFDE8', windowWidth: 1024 });
             const imgData = canvas.toDataURL('image/jpeg', 0.75);
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
          }
          generatedPdfBase64 = pdf.output('datauristring').split(',')[1];
        } catch(e) {
          console.error("PDF Generate Error", e);
        }

        // --- RESTORE AFTER PDF ---
        formRef.current.style.cssText = originalFormStyle;
        const oldTag = document.getElementById('__pdf_override__');
        if (oldTag) oldTag.remove();
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

  const labelClass = "text-sm font-bold uppercase tracking-wider text-black block mb-1 leading-relaxed";
  const inputClass = "w-full bg-transparent border-b border-black outline-none pt-1 pb-3 focus:border-b-2 text-black placeholder:text-black/40 mt-1";
  const sectionTitleClass = "text-xl font-extrabold uppercase tracking-[0.1em] text-black border-b-2 border-black inline-block pb-2 mb-6 lg:mb-8 pt-6 mt-2 leading-relaxed";

  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#FDFBF7]">
      <SiteHeader />
      
      <main className="flex-grow py-8 px-2 md:px-8">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8">
          
          {/* Page 1 Wrap */}
          <div className="pdf-page-section bg-[#FFFDE8] border-2 border-black p-6 md:p-12 shadow-2xl text-black">
          {/* Header Section */}
          <div className="mb-6 border-b-4 border-black pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1 flex flex-col justify-center items-center h-full w-full">
                <div className="w-full max-w-[590px] flex justify-center items-center overflow-hidden">
                  <img src="/images/logo-wide.png" alt="RBANMS College Logo" className="w-full h-auto object-contain" style={{ aspectRatio: '590/149' }} />
                </div>
                <div className="text-center mt-3 space-y-1 w-full border-t-2 border-black pt-3 max-w-2xl mx-auto">
                  <p className="text-sm font-bold text-black uppercase tracking-wide">Phone: 080-25512976 | Email: info@rbanmsfgc.edu.in</p>
                  <p className="text-sm font-bold text-black uppercase tracking-wide">Website: www.rbanmsfgc.edu.in</p>
                  <h2 className="text-2xl font-extrabold uppercase mt-6 pt-4 tracking-widest text-black">APPLICATION FORM</h2>
                </div>
              </div>

              <div 
                className="w-[3.5cm] h-[4.5cm] border-2 border-black flex flex-col items-center justify-center text-center p-1 flex-shrink-0 bg-white relative cursor-pointer hover:bg-gray-50 overflow-hidden"
                onClick={() => photoInputRef.current?.click()}
                title="Click to upload photo"
              >
                {photoPreview ? (
                   <img src={photoPreview} alt="Passport Size" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <Upload className="w-4 h-4 mb-2 text-gray-400" />
                    <span className="text-[10px] font-bold text-gray-800 uppercase leading-loose italic">Affix Passport<br/>Size Photograph</span>
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
            
            <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-4">
              <div className="text-left flex flex-col md:flex-row md:items-center w-full md:w-auto pt-2">
                <span className={`${labelClass} text-lg mb-2 md:mb-0 mr-2`}>Application No:</span> 
                {appNumber ? (
                  <input type="text" className="w-full sm:w-60 font-bold text-xl sm:text-2xl text-black border-b-2 border-black tracking-widest px-2 pb-1 bg-transparent outline-none pointer-events-none" value={appNumber} readOnly />
                ) : (
                  <span className="md:ml-2 font-bold text-gray-500 tracking-wider italic">(Auto)</span>
                )}
              </div>
              <div className="text-left w-full md:w-auto">
                <div className="font-bold flex flex-col sm:flex-row sm:items-center">
                  <span className="w-full sm:w-32 uppercase text-sm mb-1 sm:mb-0">Admission No:</span>
                  <input type="text" className="w-full sm:w-40 border-b border-black bg-transparent outline-none sm:ml-2" readOnly />
                </div>
                <div className="font-bold flex flex-col sm:flex-row sm:items-center mt-3 sm:mt-2">
                  <span className="w-full sm:w-32 uppercase text-sm mb-1 sm:mb-0">Fees Due:</span>
                  <input type="text" className="w-full sm:w-40 border-b border-black bg-transparent outline-none sm:ml-2" readOnly />
                </div>
              </div>
            </div>
            <div className="uppercase text-xs font-bold mt-4 md:mt-2 tracking-widest">FOR OFFICE USE ONLY</div>
          </div>

          <div className="mb-10">
            <h2 className={sectionTitleClass}>COURSE (TICK WHICHEVER IS APPLICABLE)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {[
                'BCA',
                'BBA',
                'B.Com',
                'BA (Economics, History, Political Science)',
                'BA (Journalism, History, Economics)',
                'BA (Physical Education, History, Political Science)',
                'M.Com'
              ].map((course, i) => (
                <label key={course} className="flex items-start space-x-3 cursor-pointer">
                  <span className="font-bold">{i + 1}.</span>
                  <input type="radio" value={course} {...register('courseApplied', { required: true })} className="w-5 h-5 mt-0.5 accent-black border-black shrink-0" />
                  <span className="font-bold text-sm leading-tight uppercase tracking-wide">{course}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-10 space-y-4">
            <h2 className={sectionTitleClass}>STUDENT DETAILS</h2>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-1">
                <label className={labelClass}>Full Name:</label>
                <div className="text-[10px] italic mb-1">(In Block Letters as per SSLC Certificate)</div>
                <input {...register('fullName', { required: true })} className={`${inputClass} uppercase`} />
              </div>
              <div className="space-y-1 pt-4">
                <label className={labelClass}>Email ID:</label>
                <input type="email" {...register('email')} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1"><label className={labelClass}>Contact Number:</label><input {...register('contactNumber')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Gender:</label>
                <select {...register('gender')} className="w-full bg-transparent border-b border-black pt-1 pb-3 outline-none uppercase font-bold mt-1">
                  <option value="">--</option><option value="Male">MALE</option><option value="Female">FEMALE</option>
                </select>
              </div>
              <div className="space-y-1"><label className={labelClass}>Nationality:</label><input {...register('nationality')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Caste:</label><input {...register('caste')} className={inputClass} /></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1"><label className={labelClass}>Religion:</label><input {...register('religion')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Physically Challenged (Yes/No):</label>
                 <select {...register('physicallyChallenged')} className="w-full bg-transparent border-b border-black pt-1 pb-3 outline-none uppercase font-bold mt-1">
                    <option value="">--</option><option value="Yes">YES</option><option value="No">NO</option>
                  </select>
              </div>
              <div className="space-y-1">
                 <label className={labelClass}>Karnataka Resident:</label>
                 <div className="flex items-center gap-4 mt-2">
                   <label className="flex items-center space-x-2 font-bold uppercase cursor-pointer">
                     <input type="radio" value="Karnataka" {...register('karnatakaStudent')} className="w-4 h-4 accent-black shrink-0" />
                     <span>Karnataka</span>
                   </label>
                   <label className="flex items-center space-x-2 font-bold uppercase cursor-pointer">
                     <input type="radio" value="Non-Karnataka" {...register('karnatakaStudent')} className="w-4 h-4 accent-black shrink-0" />
                     <span>Non-Karnataka</span>
                   </label>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dashed border-black/30">
              <div className="space-y-1"><label className={labelClass}>College Last Attended:</label><input {...register('collegeAttended')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Place:</label><input {...register('collegePlace')} className={inputClass} /></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1"><label className={labelClass}>Qualifying Exam:</label>
                <div className="text-[10px] italic">(PUC/CBSE/ISC/Other)</div>
                <input {...register('qualifyingExam')} className={inputClass} />
              </div>
              <div className="space-y-1"><label className={labelClass}>No. of Attempts:</label><input {...register('noOfAttempts')} className={`${inputClass} mt-3.5`} /></div>
              <div className="space-y-1"><label className={labelClass}>Month & Year of Passing:</label><input type="month" {...register('monthYearPassing')} className={`${inputClass} mt-3.5`} /></div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1"><label className={labelClass}>Combination:</label><input {...register('combination')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Language:</label><input {...register('languageDetails')} className={inputClass} /></div>
            </div>
          </div>

          </div>
          
          {/* Page 2 Wrap */}
          <div className="pdf-page-section bg-[#FFFDE8] border-2 border-black p-6 md:p-12 shadow-2xl text-black">
          <div className="mb-10 space-y-4">
            <h2 className={sectionTitleClass}>BIRTH DETAILS</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div className="space-y-1"><label className={labelClass}>Date of Birth:</label><input type="date" {...register('dob')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Village:</label><input {...register('village')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Taluk:</label><input {...register('taluk')} className={inputClass} /></div>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div className="space-y-1"><label className={labelClass}>District:</label><input {...register('district')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>State:</label><input {...register('state')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Mother Tongue:</label><input {...register('motherTongue')} className={inputClass} /></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="space-y-1"><label className={labelClass}>Languages Known:</label><input {...register('languagesKnown')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Blood Group:</label>
                 <select {...register('bloodGroup')} className="w-full bg-transparent border-b border-black pt-1 pb-3 outline-none uppercase font-bold mt-1 text-black">
                   <option value="">-- SELECT --</option>
                   <option value="A+ve">A+ve</option>
                   <option value="A-ve">A-ve</option>
                   <option value="B+ve">B+ve</option>
                   <option value="B-ve">B-ve</option>
                   <option value="AB+ve">AB+ve</option>
                   <option value="AB-ve">AB-ve</option>
                   <option value="O+ve">O+ve</option>
                   <option value="O-ve">O-ve</option>
                 </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-4">
               <h2 className={sectionTitleClass}>PERMANENT ADDRESS</h2>
               <div className="space-y-1"><label className={labelClass}>Permanent Address:</label><textarea {...register('permanentAddress')} rows={3} className="w-full bg-transparent border-b border-black outline-none resize-none py-1 focus:border-b-2"></textarea></div>
               <div className="space-y-1"><label className={labelClass}>Pin Code:</label><input {...register('pinCode')} className={inputClass} /></div>
               <div className="space-y-1"><label className={labelClass}>Contact Number:</label><input {...register('addressContact')} className={inputClass} /></div>
            </div>
            <div className="space-y-4">
               <h2 className={sectionTitleClass}>LOCAL ADDRESS (GUARDIAN IF ANY)</h2>
               <div className="space-y-1"><label className={labelClass}>Name:</label><input {...register('guardianName')} className={inputClass} /></div>
               <div className="space-y-1"><label className={labelClass}>Address:</label><textarea {...register('guardianAddress')} rows={2} className="w-full bg-transparent border-b border-black outline-none resize-none py-1 focus:border-b-2"></textarea></div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1"><label className={labelClass}>Contact Number:</label><input {...register('guardianContact')} className={inputClass} /></div>
                  <div className="space-y-1"><label className={labelClass}>Email:</label><input {...register('guardianEmail')} className={inputClass} /></div>
               </div>
            </div>
          </div>

          <div className="mb-10 space-y-6">
            <h2 className={sectionTitleClass} style={{ marginTop: 0 }}>PARENT / GUARDIAN DETAILS</h2>
            
            <div className="border border-black p-4 pt-6 rounded-sm space-y-4 relative mt-10">
              <div className="absolute -top-4 left-4 bg-[#FFFDE8] px-2 py-1 z-10 font-bold uppercase tracking-widest text-sm leading-relaxed">Father's Details</div>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Name:</label><input {...register('fatherName')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Qualification:</label><input {...register('fatherQual')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Occupation:</label><input {...register('fatherOcc')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Income:</label><input {...register('fatherIncome')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Contact:</label><input {...register('fatherContact')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Email:</label><input type="email" {...register('fatherEmail')} className={inputClass} /></div>
              </div>
            </div>

            <div className="border border-black p-4 pt-6 rounded-sm space-y-4 relative mt-10">
              <div className="absolute -top-4 left-4 bg-[#FFFDE8] px-2 py-1 z-10 font-bold uppercase tracking-widest text-sm leading-relaxed">Mother's Details</div>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Name:</label><input {...register('motherName')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Qualification:</label><input {...register('motherQual')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Occupation:</label><input {...register('motherOcc')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Income:</label><input {...register('motherIncome')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Contact:</label><input {...register('motherContact')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Email:</label><input type="email" {...register('motherEmail')} className={inputClass} /></div>
              </div>
            </div>
          </div>

          </div>

          {/* Page 3 Wrap */}
          <div className="pdf-page-section bg-[#FFFDE8] border-2 border-black p-6 md:p-12 shadow-2xl text-black">
          <div className="mb-8 space-y-5">
            <h2 className={sectionTitleClass}>OTHER DETAILS</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-1"><label className={labelClass}>No. of Dependents:</label><input {...register('noOfDependents')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>No. of Brothers:</label><input {...register('noOfBrothers')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>No. of Sisters:</label><input {...register('noOfSisters')} className={inputClass} /></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1"><label className={labelClass}>Work / Hostel Address:</label><input {...register('workHostelAddress')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Staying With:</label><input {...register('stayingWith')} className={inputClass} /></div>
            </div>
          </div>

          <div className="mb-8">
             <h2 className={sectionTitleClass}>DETAILS OF QUALIFYING EXAMINATION</h2>
             <div className="mt-4 w-full">
               <table className="w-full border-collapse border-2 border-black table-fixed">
                 <thead className="bg-black">
                   <tr>
                     <th className="border border-gray-600 px-2 py-3 text-left uppercase text-xs font-bold !text-white" style={{width:'22%'}}>Examination</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white" style={{width:'13%'}}>Board / University</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white" style={{width:'15%'}}>Register Number</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white" style={{width:'13%'}}>Year of Passing</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white" style={{width:'13%'}}>Maximum Marks</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white" style={{width:'13%'}}>Marks Obtained</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white" style={{width:'11%'}}>Percentage</th>
                   </tr>
                 </thead>
                 <tbody>
                    {marksArray.fields.map((item, idx) => (
                      <tr key={item.id} className="even:bg-black/[0.03]">
                        <td className="border border-black px-2 py-3 bg-black/5 font-bold text-sm">{item.examination}</td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.board`)} className="w-full block bg-transparent outline-none py-2 px-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.registerNo`)} className="w-full block bg-transparent outline-none py-2 px-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.year`)} className="w-full block bg-transparent outline-none py-2 px-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.maxMarks`)} className="w-full block bg-transparent outline-none py-2 px-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.obtainedMarks`)} className="w-full block bg-transparent outline-none py-2 px-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.percentage`)} className="w-full block bg-transparent outline-none py-2 px-2 text-center focus:bg-white" /></td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
          </div>

          <div className="mb-8">
             <h2 className={sectionTitleClass}>DOCUMENTS TO BE SUBMITTED</h2>
             <div className="grid grid-cols-2 gap-3 mt-3 font-bold uppercase text-sm">
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.sslc')} className="w-4 h-4 shrink-0 accent-black" /><span>SSLC Marks Card Copy</span></label>
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.puc')} className="w-4 h-4 shrink-0 accent-black" /><span>PUC / 12th Marks Card Copy</span></label>
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.tc')} className="w-4 h-4 shrink-0 accent-black" /><span>Transfer Certificate</span></label>
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.migration')} className="w-4 h-4 shrink-0 accent-black" /><span>Migration Certificate (if applicable)</span></label>
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.caste')} className="w-4 h-4 shrink-0 accent-black" /><span>Caste Certificate (if applicable)</span></label>
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.income')} className="w-4 h-4 shrink-0 accent-black" /><span>Income Cert. (Mandatory for EWS)</span></label>
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.aadhaar')} className="w-4 h-4 shrink-0 accent-black" /><span>Aadhaar Copy</span></label>
                <label className="flex items-center gap-3 cursor-pointer px-3 py-2 border border-black/20 bg-black/[0.02]"><input type="checkbox" {...register('docs.photos')} className="w-4 h-4 shrink-0 accent-black" /><span>Passport Size Photographs – 5 copies</span></label>
             </div>
          </div>

          <div className="border border-black p-8 mb-8 bg-white">
            <h2 className="text-xl font-extrabold uppercase tracking-widest text-center mb-5 border-b-2 border-black pb-3">DECLARATION</h2>
            <p className="text-sm text-justify leading-relaxed font-medium mb-5">
              I hereby declare that the above information furnished is true and correct to the best of my knowledge. I agree to abide by the rules and regulations of the institution.
            </p>

            <div className="flex items-center gap-3 mb-6 bg-black/5 px-4 py-3 border border-black/20">
               <input type="checkbox" {...register('infoCorrect')} id="infoCorrect" className="w-5 h-5 shrink-0 accent-black cursor-pointer" />
               <label htmlFor="infoCorrect" className="font-bold uppercase text-sm tracking-wide cursor-pointer">I confirm the declaration above.</label>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="col-span-1 flex flex-col">
                <input {...register('studentSignature')} placeholder="Sign here" className="bg-transparent outline-none text-base border-b-2 border-black mb-1 px-2 py-1 w-full" />
                <span className={labelClass}>Signature of Student</span>
              </div>
              <div className="col-span-1 flex flex-col">
                <div className="border-b-2 border-black mb-1 py-1 h-9"></div>
                <span className={labelClass}>Date: <input type="date" {...register('declarationDate')} className="bg-transparent outline-none font-bold text-sm" /></span>
              </div>
              <div className="col-span-1 flex flex-col">
                <input {...register('parentSignature')} placeholder="Sign here" className="bg-transparent outline-none text-base border-b-2 border-black mb-1 px-2 py-1 w-full" />
                <span className={labelClass}>Signature of Parent/Guardian</span>
              </div>
            </div>
          </div>

          <div className="bg-black/5 border border-black p-6 space-y-4 mb-8">
            <h3 className="font-extrabold text-xl uppercase tracking-wider">REFUND POLICY (AS PER UNIVERSITY NORMS)</h3>
            <ol className="list-decimal list-inside space-y-2 font-bold text-sm">
              <li>Registration / Application Fee is Non-Refundable</li>
              <li>Tuition Fee for the year is Non-Refundable once classes commence</li>
            </ol>
          </div>

          </div>
          {/* End Page 3 Wrap */}

          <div id="submit-btn-wrapper" className="flex justify-center mt-12">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-black text-white text-xl font-bold uppercase tracking-widest px-16 py-5 border-4 border-black hover:bg-transparent hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center transform active:-translate-x-1 active:-translate-y-1 w-full md:w-auto"
            >
              {isSubmitting ? <><Loader2 className="mr-3 animate-spin" /> Processing Data...</> : "SUBMIT APPLICATION"}
            </button>
          </div>
          
        </form>
      </main>

      <SiteFooter />
    </div>
  );
}
