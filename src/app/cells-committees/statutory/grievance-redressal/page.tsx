'use client';

import { CellPageContent } from '@/components/cells/cell-page-content';
import Image from 'next/image';

export default function GrievanceRedressalPage() {
  const overviewContent = (
    <div className="p-6 bg-white rounded-lg shadow-sm border space-y-4 text-black">
      <h2 className="text-2xl font-bold text-primary">Overview</h2>
      <p className="text-lg leading-relaxed">
        The Grievance Redressal Cell provides a transparent mechanism for students to voice concerns and complaints, ensuring timely resolution and maintaining institutional harmony. Students and staff can reach out to the committee members for any assistance or to address their grievances.
      </p>
    </div>
  );

  const membersContent = (
    <div className="bg-white p-6 rounded-lg border shadow-sm text-black space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h3 className="text-2xl font-bold text-primary">OFFICE ORDER</h3>
        <span className="font-semibold text-lg">2/02/2025</span>
      </div>
      <p className="text-lg leading-relaxed text-justify">
        The <strong>Grievance Redressal Cell</strong> for the A. Y. 2025-26 (Even Semester) is reconstituted. The names of the reconstituted Grievance Redressal Cell members are mentioned below.
      </p>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-primary/5 text-primary border-b-2 border-primary/20">
              <th className="p-4 font-bold whitespace-nowrap">Sl. No.</th>
              <th className="p-4 font-bold">Name of the Staff member</th>
              <th className="p-4 font-bold">Designation and Department</th>
              <th className="p-4 font-bold">Position</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-medium">01</td>
              <td className="p-4">Dr. R. Shanti Iyer</td>
              <td className="p-4">Principal</td>
              <td className="p-4 font-semibold text-primary">Chairperson</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-medium">02</td>
              <td className="p-4">Ms. Yashodha</td>
              <td className="p-4">Professor, Dept. of Commerce</td>
              <td className="p-4">Member (For general Grievances)</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-medium">03</td>
              <td className="p-4">Mr. Md. Ziya S Hakim</td>
              <td className="p-4">Asst. Professor, Dept. of Computer Applications</td>
              <td className="p-4">Member (For Internal Exam related Grievances)</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-medium">04</td>
              <td className="p-4">Ms. Deepa V</td>
              <td className="p-4">Office Administration</td>
              <td className="p-4">Member (For University Exam & other related Grievances)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-lg text-justify leading-relaxed mt-4">
        The Grievance Redressal Cell is hereby informed to conduct a meeting to discuss on working plans for the academic year 2025-26.
      </p>

      <div className="mt-8 border-t pt-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Original Office Order Document</h3>
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden border shadow-md bg-slate-50 p-2">
          {/* Note: Save the provided image as office-order.png in the public/images/cells/ folder */}
          <img
            src="/images/cells/office-order.png"
            alt="Grievance Redressal Cell Office Order"
            className="w-full h-auto object-contain rounded"
          />
        </div>
      </div>
    </div>
  );

  const sections = [
    { id: "overview", label: "Overview", content: overviewContent },
    { id: "members", label: "Members", content: membersContent }
  ];

  return (
    <CellPageContent
      pageId="cell-grievance"
      defaultTitle="Grievance Redressal Cell"
      defaultContent="Providing a transparent mechanism for students to voice concerns and complaints, ensuring timely resolution and maintaining institutional harmony."
      sections={sections}
    />
  );
}
