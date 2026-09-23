'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Building2 } from 'lucide-react';

interface DepartmentContactProps {
  departmentName: string;
  departmentEmail?: string; // kept for API compatibility but not used directly
  hodName?: string;
  hodPhone?: string;
}

const COLLEGE_EMAIL = 'info@rbanmsfgc.edu.in';

export function DepartmentContact({
  departmentName,
  hodName,
  hodPhone
}: DepartmentContactProps) {
  return (
    <div className="max-w-4xl mx-auto py-6" id="contact">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#800000] font-headline uppercase tracking-wide">
          Contact Information
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Reach out to the {departmentName} or the central college administration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Central RBANMS Contact Card */}
        <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow bg-white">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Building2 className="h-5 w-5 text-[#800000]" />
              <h3 className="font-bold text-base text-slate-900">RBANMS First Grade College</h3>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#800000] shrink-0 mt-1" />
                <span>
                  Opposite Ulsoor Lake, 12 Annasawmy Mudaliar Road, Bangalore - 560042
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#800000] shrink-0" />
                <div>
                  <span className="font-semibold">Email: </span>
                  <a href={`mailto:${COLLEGE_EMAIL}`} className="text-[#800000] hover:underline">
                    {COLLEGE_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#800000] shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <div>
                    <span className="font-semibold">Landline: </span>
                    <a href="tel:08025512976" className="hover:text-[#800000]">080-25512976</a> / <a href="tel:08048533572" className="hover:text-[#800000]">080-48533572</a>
                  </div>
                  <div>
                    <span className="font-semibold">Mobile: </span>
                    <a href="tel:7349251497" className="hover:text-[#800000]">7349251497</a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Specific Card */}
        <Card className="border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow bg-white">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Mail className="h-5 w-5 text-[#800000]" />
              <h3 className="font-bold text-base text-slate-900">{departmentName} Helpdesk</h3>
            </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#800000] shrink-0" />
                  <div>
                    <span className="font-semibold">General Enquiry: </span>
                    <a href={`mailto:${COLLEGE_EMAIL}`} className="text-[#800000] hover:underline font-bold">
                      {COLLEGE_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-[#800000] shrink-0 mt-1" />
                  <div className="flex flex-col space-y-1">
                    <div>
                      <span className="font-semibold">Landline: </span>
                      <a href="tel:08025512976" className="hover:text-[#800000]">080-25512976</a> / <a href="tel:08048533572" className="hover:text-[#800000]">080-48533572</a>
                    </div>
                    <div>
                      <span className="font-semibold">Mobile: </span>
                      <a href="tel:7349251497" className="hover:text-[#800000]">7349251497</a>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 leading-relaxed mt-2">
                  For admission guidance, curriculum queries, and general administration, please reach out to the college general office during working hours (9:00 AM – 4:30 PM).
                </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



