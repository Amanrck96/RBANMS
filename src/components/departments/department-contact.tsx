'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

interface DepartmentContactProps {
  departmentName: string;
  departmentEmail?: string;
  hodName?: string;
  hodPhone?: string;
}

export function DepartmentContact({
  departmentName,
  departmentEmail,
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
                  <a href="mailto:info@rbanmsfgc.edu.in" className="text-[#800000] hover:underline">
                    info@rbanmsfgc.edu.in
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
              {departmentEmail && (
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#800000] shrink-0" />
                  <div>
                    <span className="font-semibold">Department Email: </span>
                    <a href={`mailto:${departmentEmail}`} className="text-[#800000] hover:underline font-medium">
                      {departmentEmail}
                    </a>
                  </div>
                </div>
              )}

              {hodName && (
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1 mt-2">
                  <div className="text-xs uppercase tracking-wider font-bold text-[#800000]">Head of Department</div>
                  <div className="font-semibold text-slate-900">{hodName}</div>
                  {hodPhone && (
                    <div className="text-xs text-slate-600 flex items-center gap-1.5 pt-1">
                      <Phone className="h-3.5 w-3.5 text-[#800000]" />
                      <a href={`tel:${hodPhone}`} className="hover:underline">{hodPhone}</a>
                    </div>
                  )}
                </div>
              )}

              <div className="text-xs text-slate-500 leading-relaxed pt-2">
                For curriculum details, syllabus inquiries, and academic mentorship, students and parents can contact the department desk directly during college working hours (9:00 AM - 4:30 PM).
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
