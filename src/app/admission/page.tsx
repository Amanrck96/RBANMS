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
          div.style.alignItems = 'flex-end';
          div.style.border = 'none';
          div.style.borderBottom = style.borderBottom; 
          div.style.backgroundColor = 'transparent';
          div.style.paddingBottom = '4px';
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

        // --- ENFORCE DESKTOP LAYOUT FOR PDF ---
        const originalClasses: { el: Element, className: string }[] = [];
        const allElements = formRef.current.querySelectorAll('*');
        allElements.forEach((el) => {
           let c = el.getAttribute('class') || '';
           if (typeof c === 'string' && c.length > 0) {
              originalClasses.push({ el, className: c });
              if (c.includes('md:grid-cols') || c.includes('lg:grid-cols')) c = c.replace(/\bgrid-cols-\d+\b/g, '');
              if (c.includes('md:flex-row') || c.includes('lg:flex-row')) c = c.replace(/\bflex-col\b/g, '');
              if (c.includes('md:w-') || c.includes('lg:w-')) c = c.replace(/\bw-(full|auto|\d+\/\d+)\b/g, '');
              if (c.includes('md:items-') || c.includes('lg:items-')) c = c.replace(/\bitems-(start|center|end|baseline|stretch)\b/g, '');
              if (c.includes('md:justify-') || c.includes('lg:justify-')) c = c.replace(/\bjustify-(start|center|end|between|around|evenly)\b/g, '');
              if (c.includes('md:p-') || c.includes('lg:p-')) c = c.replace(/\bp-\d+\b/g, '');
              if (c.includes('md:gap-') || c.includes('lg:gap-')) c = c.replace(/\bgap-\d+\b/g, '');
              c = c.replace(/\bmd:([a-zA-Z0-9_-]+)\b/g, '$1');
              c = c.replace(/\blg:([a-zA-Z0-9_-]+)\b/g, '$1');
              el.setAttribute('class', c.trim());
           }
        });

        const originalFormStyle = formRef.current.style.cssText;
        formRef.current.style.width = '1024px';
        formRef.current.style.maxWidth = '1024px';
        formRef.current.style.margin = '0 auto';
        // ------------------------------------

        try {
          const canvas = await html2canvas(formRef.current, { scale: 1.5, backgroundColor: '#FFFDE8', windowWidth: 1024 });
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
        formRef.current.style.cssText = originalFormStyle;
        originalClasses.forEach(({ el, className }) => {
           el.setAttribute('class', className);
        });
        replacements.forEach(({ input, div }) => {
          if(div.parentNode) div.parentNode.removeChild(div);
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

  const labelClass = "text-sm font-bold uppercase tracking-wider text-black";
  const inputClass = "w-full bg-transparent border-b border-black outline-none py-1 focus:border-b-2 text-black placeholder:text-black/40";
  const sectionTitleClass = "text-xl font-extrabold uppercase tracking-[0.1em] text-black border-b-2 border-black inline-block mb-6 lg:mb-8 pt-4";

  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#FDFBF7]">
      <SiteHeader />
      
      <main className="flex-grow py-8 px-2 md:px-8">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-[#FFFDE8] border-2 border-black p-6 md:p-12 shadow-2xl text-black">
          
          {/* Header Section */}
          <div className="mb-6 border-b-4 border-black pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-white p-2 border border-black/20 rounded">
                <img src="/images/logo-full.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              
              <div className="text-center flex-1">
                <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#000000]">RBANM'S FIRST GRADE COLLEGE</h1>
                <p className="text-sm font-bold uppercase mt-2">12, Annaswamy Mudaliar Road, Bengaluru – 560042</p>
                <p className="text-sm font-semibold mt-1">Phone: 080-25512976</p>
                <p className="text-sm font-semibold">Email: info@rbanmsfgc.edu.in</p>
                <p className="text-sm font-semibold">Website: www.rbanmsfgc.edu.in</p>
                <h2 className="text-2xl font-extrabold uppercase mt-6 tracking-widest">APPLICATION FORM</h2>
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
            
            <div className="mt-8 flex justify-between items-end">
              <div className="text-left inline-block">
                <span className={`${labelClass} text-lg`}>Application No:</span> 
                {appNumber ? (
                  <span className="ml-2 font-bold text-xl text-black border-b-2 border-black tracking-widest px-2">{appNumber}</span>
                ) : (
                  <span className="ml-2 font-bold text-gray-500 tracking-wider italic">(Auto)</span>
                )}
              </div>
              <div className="text-left">
                <div className="font-bold flex items-center"><span className="w-32 uppercase text-sm">Admission No:</span><input type="text" className="w-40 border-b border-black bg-transparent outline-none ml-2" readOnly /></div>
                <div className="font-bold flex items-center mt-2"><span className="w-32 uppercase text-sm">Fees Due:</span><input type="text" className="w-40 border-b border-black bg-transparent outline-none ml-2" readOnly /></div>
              </div>
            </div>
            <div className="uppercase text-xs font-bold mt-2 tracking-widest">FOR OFFICE USE ONLY</div>
          </div>

          <div className="mb-10">
            <h2 className={sectionTitleClass}>COURSE (TICK WHICHEVER IS APPLICABLE)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {[
                'B.C.A.',
                'B.B.A.',
                'B.Com',
                'B.A. (Political Science, Economics, History)',
                'B.A. (Journalism, History, Economics)',
                'B.A. (Physical Education, History, Political Science)',
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
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3 space-y-1">
                <label className={labelClass}>Name of Student:</label>
                <div className="text-[10px] italic mb-1">(In Block Letters as per SSLC Certificate)</div>
                <input {...register('fullName', { required: true })} className={`${inputClass} uppercase`} />
              </div>
              <div className="w-full md:w-1/3 space-y-1 pt-4">
                <label className={labelClass}>Email Id:</label>
                <input type="email" {...register('email')} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-1"><label className={labelClass}>Contact Number:</label><input {...register('contactNumber')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Sex:</label>
                <select {...register('gender')} className="w-full bg-transparent border-b border-black py-1 outline-none uppercase font-bold">
                  <option value="">--</option><option value="Male">MALE</option><option value="Female">FEMALE</option>
                </select>
              </div>
              <div className="space-y-1"><label className={labelClass}>Nationality:</label><input {...register('nationality')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Caste:</label><input {...register('caste')} className={inputClass} /></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1"><label className={labelClass}>Religion:</label><input {...register('religion')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Physically Challenged:</label>
                 <select {...register('physicallyChallenged')} className="w-full bg-transparent border-b border-black py-1 outline-none uppercase font-bold">
                    <option value="">--</option><option value="Yes">YES</option><option value="No">NO</option>
                  </select>
              </div>
              <div className="space-y-1 flex items-end pb-1 gap-6">
                 <label className="flex items-center space-x-2 font-bold uppercase"><input type="radio" value="Yes" {...register('karnatakaStudent')} className="w-4 h-4 accent-black" /><span>Karnataka</span></label>
                 <label className="flex items-center space-x-2 font-bold uppercase"><input type="radio" value="No" {...register('karnatakaStudent')} className="w-4 h-4 accent-black" /><span>Non-Karnataka</span></label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-dashed border-black/30">
              <div className="space-y-1"><label className={labelClass}>Name of College Last Attended:</label><input {...register('collegeAttended')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Place:</label><input {...register('collegePlace')} className={inputClass} /></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1"><label className={labelClass}>Qualifying Examination Passed:</label>
                <div className="text-[10px] italic">(PUC/CBSE/ISC/Other)</div>
                <input {...register('qualifyingExam')} className={inputClass} />
              </div>
              <div className="space-y-1"><label className={labelClass}>Number of Attempts:</label><input {...register('noOfAttempts')} className={`${inputClass} mt-3.5`} /></div>
              <div className="space-y-1"><label className={labelClass}>Month & Year of Passing:</label><input type="month" {...register('monthYearPassing')} className={`${inputClass} mt-3.5`} /></div>
            </div>
          </div>

          <div className="mb-10 space-y-4">
            <h2 className={sectionTitleClass}>BIRTH DETAILS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1"><label className={labelClass}>Date of Birth:</label><input type="date" {...register('dob')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Village:</label><input {...register('village')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Taluk:</label><input {...register('taluk')} className={inputClass} /></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1"><label className={labelClass}>District:</label><input {...register('district')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>State:</label><input {...register('state')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Mother Tongue:</label><input {...register('motherTongue')} className={inputClass} /></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1"><label className={labelClass}>Language Spoken:</label><input {...register('languagesKnown')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Blood Group:</label><input {...register('bloodGroup')} className={inputClass} /></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
               <h2 className={sectionTitleClass}>PERMANENT ADDRESS</h2>
               <div className="space-y-1"><label className={labelClass}>Address:</label><textarea {...register('permanentAddress')} rows={3} className="w-full bg-transparent border-b border-black outline-none resize-none py-1 focus:border-b-2"></textarea></div>
               <div className="space-y-1"><label className={labelClass}>Pin Code:</label><input {...register('pinCode')} className={inputClass} /></div>
               <div className="space-y-1"><label className={labelClass}>Contact No:</label><input {...register('addressContact')} className={inputClass} /></div>
            </div>
            <div className="space-y-4">
               <h2 className={sectionTitleClass}>LOCAL ADDRESS (GUARDIAN IF ANY)</h2>
               <div className="space-y-1"><label className={labelClass}>Name:</label><input {...register('guardianName')} className={inputClass} /></div>
               <div className="space-y-1"><label className={labelClass}>Address:</label><textarea {...register('guardianAddress')} rows={2} className="w-full bg-transparent border-b border-black outline-none resize-none py-1 focus:border-b-2"></textarea></div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1"><label className={labelClass}>Contact No:</label><input {...register('guardianContact')} className={inputClass} /></div>
                  <div className="space-y-1"><label className={labelClass}>Email:</label><input {...register('guardianEmail')} className={inputClass} /></div>
               </div>
            </div>
          </div>

          <div className="mb-10 space-y-6">
            <h2 className={sectionTitleClass}>PARENT / GUARDIAN DETAILS</h2>
            
            <div className="border border-black p-4 rounded-sm space-y-4 relative">
              <div className="absolute -top-3 left-4 bg-[#FFFDE8] px-2 font-bold uppercase tracking-widest text-sm">Father's Details</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Name:</label><input {...register('fatherName')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Qualification:</label><input {...register('fatherQual')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Occupation:</label><input {...register('fatherOcc')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Annual Income:</label><input {...register('fatherIncome')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Contact Number:</label><input {...register('fatherContact')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Email ID:</label><input type="email" {...register('fatherEmail')} className={inputClass} /></div>
              </div>
            </div>

            <div className="border border-black p-4 rounded-sm space-y-4 relative mt-8">
              <div className="absolute -top-3 left-4 bg-[#FFFDE8] px-2 font-bold uppercase tracking-widest text-sm">Mother's Details</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Name:</label><input {...register('motherName')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Qualification:</label><input {...register('motherQual')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Occupation:</label><input {...register('motherOcc')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1"><label className={labelClass}>Annual Income:</label><input {...register('motherIncome')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Contact Number:</label><input {...register('motherContact')} className={inputClass} /></div>
                <div className="space-y-1"><label className={labelClass}>Email ID:</label><input type="email" {...register('motherEmail')} className={inputClass} /></div>
              </div>
            </div>
          </div>

          <div className="mb-10 space-y-4">
            <h2 className={sectionTitleClass}>OTHER DETAILS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1"><label className={labelClass}>No. of Dependents:</label><input {...register('noOfDependents')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>No. of Brothers:</label><input {...register('noOfBrothers')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>No. of Sisters:</label><input {...register('noOfSisters')} className={inputClass} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1"><label className={labelClass}>Work / Hostel Address:</label><input {...register('workHostelAddress')} className={inputClass} /></div>
              <div className="space-y-1"><label className={labelClass}>Recently Staying With:</label><input {...register('stayingWith')} className={inputClass} /></div>
            </div>
          </div>

          <div className="mb-10">
             <h2 className={sectionTitleClass}>DETAILS OF QUALIFYING EXAMINATION</h2>
             <div className="overflow-x-auto mt-4 w-full">
               <table className="w-full border-collapse border-2 border-black">
                 <thead className="bg-black">
                   <tr>
                     <th className="border border-gray-600 px-2 py-3 text-left w-1/4 uppercase text-xs font-bold !text-white">Examination</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white">Board / University</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white">Register Number</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white">Year of Passing</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white">Maximum Marks</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white">Marks Obtained</th>
                     <th className="border border-gray-600 px-2 py-3 text-center uppercase text-xs font-bold !text-white">Percentage</th>
                   </tr>
                 </thead>
                 <tbody>
                    {marksArray.fields.map((item, idx) => (
                      <tr key={item.id} className="hover:bg-gray-50/50">
                        <td className="border border-black p-2 bg-black/5 font-bold">{item.examination}</td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.board`)} className="w-full h-full bg-transparent outline-none p-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.registerNo`)} className="w-full h-full bg-transparent outline-none p-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.year`)} className="w-full h-full bg-transparent outline-none p-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.maxMarks`)} className="w-full h-full bg-transparent outline-none p-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.obtainedMarks`)} className="w-full h-full bg-transparent outline-none p-2 text-center focus:bg-white" /></td>
                        <td className="border border-black p-0"><input {...register(`marksDetails.${idx}.percentage`)} className="w-full h-full bg-transparent outline-none p-2 text-center focus:bg-white" /></td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
             <div className="mt-6 flex flex-col space-y-2">
               <label className={labelClass}>Extra Curricular Activities/Sports – (Inter-school/State/National Level):</label>
               <input {...register('extraCurricular')} className={inputClass} />
             </div>
          </div>

          <div className="mb-10">
             <h2 className={sectionTitleClass}>DOCUMENTS TO BE SUBMITTED</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 font-bold uppercase text-sm">
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.sslc')} className="w-5 h-5 accent-black border-black" /><span>SSLC Marks Card Copy</span></label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.puc')} className="w-5 h-5 accent-black border-black" /><span>PUC / 12th Marks Card Copy</span></label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.tc')} className="w-5 h-5 accent-black border-black" /><span>Transfer Certificate</span></label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.migration')} className="w-5 h-5 accent-black border-black" /><span>Migration Certificate (if applicable)</span></label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.caste')} className="w-5 h-5 accent-black border-black" /><span>Caste Certificate (if applicable)</span></label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.income')} className="w-5 h-5 accent-black border-black" /><span>Income Cert. (Mandatory for EWS)</span></label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.aadhaar')} className="w-5 h-5 accent-black border-black" /><span>Aadhaar Copy</span></label>
                <label className="flex items-center space-x-3 cursor-pointer p-2 border border-black/10 hover:bg-black/5 transition-colors"><input type="checkbox" {...register('docs.photos')} className="w-5 h-5 accent-black border-black" /><span>Passport Size Photographs – 5 copies</span></label>
             </div>
          </div>

          <div className="border border-black p-6 md:p-10 mb-8 bg-white relative">
            <h2 className="text-2xl font-extrabold uppercase tracking-widest text-center mb-6">DECLARATION</h2>
            <p className="text-sm text-justify leading-loose font-medium mb-6">
              I hereby declare that the above information furnished is true and correct to the best of my knowledge. I agree to abide by the rules and regulations of the institution.
            </p>
            
            <div className="flex items-center space-x-3 mb-8 bg-red-50 p-4 border border-red-200">
               <input type="checkbox" {...register('infoCorrect')} id="infoCorrect" className="w-6 h-6 accent-red-600 border-red-600 cursor-pointer" />
               <label htmlFor="infoCorrect" className="font-bold text-red-700 cursor-pointer">I confirm the declaration above.</label>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mt-12 pb-4">
              <div className="flex flex-col w-64 pt-1">
                 <input {...register('studentSignature')} placeholder="Type name to sign" className="bg-transparent outline-none font-signature text-2xl border-b border-black mb-2 px-2" />
                 <span className={labelClass}>Signature of Student</span>
              </div>
              <div className="flex flex-col w-64 pt-1">
                 <input {...register('parentSignature')} placeholder="Type name to sign" className="bg-transparent outline-none font-signature text-2xl border-b border-black mb-2 px-2" />
                 <span className={labelClass}>Signature of Parent/Guardian</span>
              </div>
            </div>
            <div className="flex flex-col w-48 pt-1 mt-6">
              <input type="date" {...register('declarationDate')} className="bg-transparent outline-none border-b border-black mb-2 px-2 py-1 font-bold" />
              <span className={labelClass}>Date</span>
            </div>
          </div>

          <div className="bg-black/5 border border-black p-6 space-y-4 mb-8">
            <h3 className="font-extrabold text-xl uppercase tracking-wider">REFUND POLICY (AS PER UNIVERSITY NORMS)</h3>
            <ol className="list-decimal list-inside space-y-2 font-bold text-sm">
              <li>Registration / Application Fee is Non-Refundable</li>
              <li>Tuition Fee for the year is Non-Refundable once classes commence</li>
            </ol>
          </div>

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
