'use client';

import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { DynamicSection } from '@/components/dynamic-section';

export default function AdministrationPage() {

  const introContent = (
    <div className="space-y-6 text-black text-justify text-lg leading-relaxed">
      <Card className="bg-white border-2 border-primary">
        <CardContent className="pt-6">
          <p className="mb-4">
            Our non-teaching staff serve as the backbone of the college. Their steady work keeps our academic environment organized, responsive, and efficient. From administrative support to campus maintenance and student services, they handle essential operations with professionalism and care.
          </p>
          <p>
            Their diligence ensures that classrooms are ready, records are accurate, processes run smoothly, and every member of the community gets the support they need. Much of their work happens behind the scenes, yet it is vital to the college’s daily functioning and long-term growth.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const staffList = [
    { name: "Mrs. DEEPA . V", designation: "Head - Office Admin" },
    { name: "Mr. KUMAR R.H", designation: "Accounts Officer" },
    { name: "Mr. PRASANT KUMAR BISWAL", designation: "Maintenance In Charge" },
    { name: "Mr. BHASKARAN. M", designation: "Office Assistant" },
    { name: "Mr. PUTTARAJU. H. E", designation: "Librarian" },
    { name: "Mr. SHIVANNA. N", designation: "Sports Attender & Gardener" },
    { name: "Mr. PANDY SELVAN", designation: "Office Attender" },
    { name: "Mr. EMMANUEL SHREYAS. S", designation: "Reception" },
    { name: "Mrs. ARPITHA S", designation: "Office Assistant" },
    { name: "Ms. MARY CELESTINA. J", designation: "IQAC Assistant" },
    { name: "Mr. RAMESH", designation: "Accounts Officer" },
    { name: "Mr. SRINIVAS E", designation: "Office Assistant" },
  ];

  const staffContent = (
    <Card className="bg-white border-2 border-primary">
      <CardHeader className="border-b border-primary/20">
        <CardTitle className="flex items-center gap-2 text-xl text-black">
          <Users className="h-6 w-6 text-primary" /> Staff Details
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-base text-left text-black">
            <thead className="bg-primary/10 font-bold text-black border-b-2 border-primary">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Designation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/20">
              {staffList.map((staff, index) => (
                <tr key={index}>
                  <td className="p-3 font-medium">{staff.name}</td>
                  <td className="p-3">{staff.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  const photosContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-black text-xl flex items-center gap-2">
            <ImageIcon className="text-primary" /> Group Photographs
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Group Photo 1</span>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Group Photo 2</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const sections = [
    { id: 'overview', label: 'Overview', content: introContent },
    { id: 'staff-list', label: 'Staff List', content: staffContent },
    { id: 'photos', label: 'Staff Photos', content: photosContent },
  ];

  return (
    <DynamicSection
      pageId="administration"
      render={(data) => (
        <DepartmentLayout
          title={data.title || "Administration"}
          tagline={data.imageUrl ? undefined : (data.content ? "The Backbone of Our College" : "The Backbone of Our College. Efficient, responsive, and dedicated to supporting our academic environment.")}
          heroImage={data.imageUrl}
          sections={data.content ? [
            { id: 'custom', label: 'Updates', content: <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} /> },
            ...sections
          ] : sections}
        />
      )}
    />
  );
}