import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserCog, Briefcase } from 'lucide-react';

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

  const managementContent = (
    <Card className="bg-white border-2 border-primary">
      <CardHeader className="border-b border-primary/20">
        <CardTitle className="flex items-center gap-2 text-xl text-black">
          <Users className="h-6 w-6 text-primary" /> Management Staff
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
              <tr><td className="p-3 font-medium">Mrs. DEEPA . V</td><td className="p-3">Head - Office Admin</td></tr>
              <tr><td className="p-3 font-medium">Mr. KUMAR R.H</td><td className="p-3">Accounts Officer</td></tr>
              <tr><td className="p-3 font-medium">Mr. PRASANT KUMAR BISWAL</td><td className="p-3">Maintenance In Charge</td></tr>
              <tr><td className="p-3 font-medium">Mr. BHASKARAN. M</td><td className="p-3">Office Assistant</td></tr>
              <tr><td className="p-3 font-medium">Mr. PUTTARAJU. H. E</td><td className="p-3">Librarian</td></tr>
              <tr><td className="p-3 font-medium">Mr. SHIVANNA. N</td><td className="p-3">Sports Attender & Gardener</td></tr>
              <tr><td className="p-3 font-medium">Mr. PANDY SELVAN</td><td className="p-3">Office Attender</td></tr>
              <tr><td className="p-3 font-medium">Mr. EMMANUEL SHREYAS. S</td><td className="p-3">Reception</td></tr>
              <tr><td className="p-3 font-medium">Mrs. ARPITHA S</td><td className="p-3">Office Assistant</td></tr>
              <tr><td className="p-3 font-medium">Ms. MARY CELESTINA. J</td><td className="p-3">IQAC Assistant</td></tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  const aidedContent = (
    <Card className="bg-white border-2 border-primary h-fit">
      <CardHeader className="border-b border-primary/20">
        <CardTitle className="flex items-center gap-2 text-xl text-black">
          <Briefcase className="h-6 w-6 text-primary" /> Aided Staff
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
              <tr><td className="p-3 font-medium">Mr. RAMESH</td><td className="p-3">Accounts Officer</td></tr>
              <tr><td className="p-3 font-medium">Mr. SRINIVAS E</td><td className="p-3">Office Assistant</td></tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  const sections = [
    { id: 'overview', label: 'Overview', content: introContent },
    { id: 'management-staff', label: 'Management Staff', content: managementContent },
    { id: 'aided-staff', label: 'Aided Staff', content: aidedContent },
  ];

  return (
    <DepartmentLayout
      title="Administration"
      tagline="The Backbone of Our College. Efficient, responsive, and dedicated to supporting our academic environment."
      sections={sections}
    />
  );
}