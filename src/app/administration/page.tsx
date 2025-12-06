import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, UserCog, Briefcase } from 'lucide-react';

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-gray-700 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Administration
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Backbone of <span className="text-yellow-400">Our College</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed">
              Efficient, responsive, and dedicated to supporting our academic environment.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Dedicated Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our non-teaching staff serve as the backbone of the college. Their steady work keeps our academic environment organized, responsive, and efficient. From administrative support to campus maintenance and student services, they handle essential operations with professionalism and care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Their diligence ensures that classrooms are ready, records are accurate, processes run smoothly, and every member of the community gets the support they need. Much of their work happens behind the scenes, yet it is vital to the college’s daily functioning and long-term growth.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
              <UserCog className="h-24 w-24 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Lists */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Staff Details</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Management Staff */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-slate-800">
                  <Users className="h-5 w-5" /> Management Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-100 font-semibold text-slate-700">
                      <tr>
                        <th className="p-3 rounded-tl-lg">Name</th>
                        <th className="p-3 rounded-tr-lg">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="p-3">Mrs. DEEPA . V</td><td className="p-3">Head - Office Admin</td></tr>
                      <tr><td className="p-3">Mr. KUMAR R.H</td><td className="p-3">Accounts Officer</td></tr>
                      <tr><td className="p-3">Mr. PRASANT KUMAR BISWAL</td><td className="p-3">Maintenance In Charge</td></tr>
                      <tr><td className="p-3">Mr. BHASKARAN. M</td><td className="p-3">Office Assistant</td></tr>
                      <tr><td className="p-3">Mr. PUTTARAJU. H. E</td><td className="p-3">Librarian</td></tr>
                      <tr><td className="p-3">Mr. SHIVANNA. N</td><td className="p-3">Sports Attender & Gardener</td></tr>
                      <tr><td className="p-3">Mr. PANDY SELVAN</td><td className="p-3">Office Attender</td></tr>
                      <tr><td className="p-3">Mr. EMMANUEL SHREYAS. S</td><td className="p-3">Reception</td></tr>
                      <tr><td className="p-3">Mrs. ARPITHA S</td><td className="p-3">Office Assistant</td></tr>
                      <tr><td className="p-3">Ms. MARY CELESTINA. J</td><td className="p-3">IQAC Assistant</td></tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Aided Staff */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-slate-800">
                  <Briefcase className="h-5 w-5" /> Aided Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-100 font-semibold text-slate-700">
                      <tr>
                        <th className="p-3 rounded-tl-lg">Name</th>
                        <th className="p-3 rounded-tr-lg">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="p-3">Mr. RAMESH</td><td className="p-3">Accounts Officer</td></tr>
                      <tr><td className="p-3">Mr. SRINIVAS E</td><td className="p-3">Office Assistant</td></tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}