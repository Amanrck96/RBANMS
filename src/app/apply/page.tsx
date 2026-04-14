"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ApplyPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Google Form IDs
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeVDttIH43oimRe5XlVIlcFmS9pprmCChiVJ-EqBOzwzRL5vg/formResponse";
  const ENTRY_IDS = {
    name: "entry.1818681582",
    phone: "entry.1241924600",
    email: "entry.553026809",
    course: "entry.1609840044",
    fromBengaluru: "entry.fromBengaluru"
  };

  const [selectedCourse, setSelectedCourse] = useState("");
  const [fromBengaluru, setFromBengaluru] = useState("");

  const courses = [
    "Bachelor of Arts (B.A.) - Economics, with History & Political Science",
    "Bachelor of Arts (B.A.) - " + String.fromCharCode(0x2060) + "Physical Education with History & Political Science",
    "Bachelor of Arts (B.A.) - Journalism & Mass Communication, History and Economics.",
    "Bachelor of Commerce (B.Com)",
    "Bachelor of Business Administration (B.B.A)",
    "Bachelor of Computer Applications (B.C.A)",
    "Master of Commerce (M.Com)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    if (!selectedCourse) {
      toast({
        title: "Error",
        description: "Please select a course.",
        variant: "destructive",
      });
      e.preventDefault();
      return;
    }
    
    setIsSubmitting(true);

    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
          'send_to': 'AW-17909091166/_uPRCPv70_4bEN6W3NtC'
      });
    }

    // The form will submit to the hidden iframe
    
    // We'll wait a bit and then show success
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We will get back to you soon.",
      });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <SiteHeader />
      
      <main className="flex-grow">
        {/* Banner Section */}
        <div className="bg-white text-slate-900 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-slate-900">RBANMS First Grade College</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Start your journey towards a bright future with quality education and excellent career opportunities.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-12 mb-20 relative z-10">
          <Card className="max-w-2xl mx-auto shadow-2xl border-none">
            <CardHeader className="bg-white rounded-t-xl border-b pb-8">
              <CardTitle className="text-2xl font-bold text-center text-slate-800">Application Form</CardTitle>
              <CardDescription className="text-center text-slate-500 pt-2">
                Please provide your details below and we'll contact you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-20 h-20 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h2>
                  <p className="text-slate-600 mb-8">
                    Your application has been received successfully. Our admissions team will contact you on your provided phone number or email.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      onClick={() => router.push('/admission')}
                      className="bg-[#B22222] hover:bg-[#8B0000] text-white px-8 py-3 text-base font-bold"
                    >
                      Continue Application →
                    </Button>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Fill another form
                    </Button>
                  </div>
                </div>
              ) : (
                <form 
                  ref={formRef}
                  action={FORM_URL}
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name</Label>
                    <Input 
                      id="name" 
                      name={ENTRY_IDS.name}
                      placeholder="Enter your full name" 
                      required 
                      className="border-slate-200 focus:ring-[#B22222] focus:border-[#B22222] py-6"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name={ENTRY_IDS.phone}
                        type="tel"
                        placeholder="10-digit mobile number" 
                        required 
                        className="border-slate-200 focus:ring-[#B22222] focus:border-[#B22222] py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address</Label>
                      <Input 
                        id="email" 
                        name={ENTRY_IDS.email}
                        type="email"
                        placeholder="yourname@example.com" 
                        required 
                        className="border-slate-200 focus:ring-[#B22222] focus:border-[#B22222] py-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-slate-700 font-semibold">Course Interested In</Label>
                    <Select onValueChange={setSelectedCourse} required>
                      <SelectTrigger className="border-slate-200 focus:ring-[#B22222] focus:border-[#B22222] py-6">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name={ENTRY_IDS.course} value={selectedCourse} />
                  </div>

                  {/* Bengaluru Question */}
                  <div className="space-y-3 border border-slate-200 rounded-lg p-4 bg-slate-50">
                    <Label className="text-slate-700 font-semibold">
                      Are you from Bengaluru and looking for a college in Bengaluru?
                    </Label>
                    <div className="flex gap-6 pt-1">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="fromBengaluru"
                          value="Yes"
                          checked={fromBengaluru === "Yes"}
                          onChange={() => setFromBengaluru("Yes")}
                          className="w-4 h-4 accent-[#B22222]"
                        />
                        <span className="font-semibold text-slate-700 group-hover:text-[#B22222] transition-colors">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="fromBengaluru"
                          value="No"
                          checked={fromBengaluru === "No"}
                          onChange={() => setFromBengaluru("No")}
                          className="w-4 h-4 accent-[#B22222]"
                        />
                        <span className="font-semibold text-slate-700 group-hover:text-[#B22222] transition-colors">No</span>
                      </label>
                    </div>
                    <input type="hidden" name={ENTRY_IDS.fromBengaluru} value={fromBengaluru} />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#B22222] hover:bg-[#8B0000] text-white py-6 text-lg font-bold transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-slate-400 mt-4 italic">
                    By submitting this form, you agree to be contacted by RBANMS First Grade College regarding admissions.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Hidden iframe to handle Google Form submission without redirect */}
      <iframe name="hidden_iframe" id="hidden_iframe" className="hidden"></iframe>
      
      <SiteFooter />
    </div>
  );
}
