import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  Briefcase,
  Calculator,
  PieChart,
  Users,
  Target,
  Award,
  BookOpen,
  DollarSign,
  Globe,
  FileText
} from 'lucide-react';

export default function CommerceDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        The Commerce Department at RBANM’s First Grade College has been shaping capable and confident graduates since 1984. It offers a strong undergraduate program built on practical learning and steady innovation. The goal is clear: to improve every year and deliver education that meets global standards.
      </p>
      <p>
        Teaching blends traditional lectures with student-centred methods that build real understanding. Role-plays, simulations, group work, discussions, debates, and case-based learning make the classroom active and engaging.
      </p>
      <p>
        The department also takes pride in practices that support all-round development. Students gain exposure through service learning, peer mentoring, mental health initiatives, and skill enhancement programs aligned with industry expectations.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-sm space-y-2 text-left">
        <p>“To nurture competent, ethical, and socially responsible commerce graduates ready for a dynamic global business environment.”</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Deliver quality education through innovative teaching and practical exposure.</li>
          <li>Build strong analytical, communication, and entrepreneurial skills.</li>
          <li>Integrate technology-driven learning (Tally, GST, Analytics).</li>
          <li>Instil values and professional ethics.</li>
          <li>Strengthen industry-institution linkages.</li>
        </ul>
      </div>
    </div>
  );

  const sidebarContent = (
    <>
      {/* Highlights Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Practical Learning: Case work, simulations, field activities",
            "Add-on programmes: Tally training, Industry courses",
            "Strong Faculty: Experienced Associate & Assistant Professors",
            "Industry Alignment: Bridges academic concepts with market needs",
            "Clubs: Commerce Club & Entrepreneur Cell"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Why B.Com? */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Why B.Com?</h4>
        <div className="text-sm text-muted-foreground space-y-2">
          <p><strong>Strong Fundamentals:</strong> Accounting, Finance, Taxation, Management.</p>
          <p><strong>High Employability:</strong> 62.81% employability rate (India Skills Report 2026).</p>
          <p><strong>Stable Pathway:</strong> Relevant career opportunities in Banking, Fintech, and Analytics.</p>
        </div>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Calculator className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Skill Set</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Financial Literacy, Analytical Ability, Digital Competence (Tally/GST), and Entrepreneurial Mindset combined with Professional Ethics.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Outcomes</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Prepare, analyse, and interpret financial statements. Demonstrate problem-solving in business situations. Be career-ready for Banking, Finance, and Taxation.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Commerce"
      tagline="Shaping capable and confident graduates since 1984."
      activeTab="commerce"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Career Options */}
      <section id="careers">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Career Options</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { field: "Accounting & Finance", roles: "Accountant, Financial Analyst, Auditor, Investment Advisor" },
            { field: "Taxation & Compliance", roles: "Tax Consultant, GST Executive, Compliance Assistant" },
            { field: "Banking & Insurance", roles: "Banking Associate, Loan Officer, Insurance Advisor" },
            { field: "Business Roles", roles: "HR Assistant, Marketing Executive, Administrative Executive" },
            { field: "Operations", roles: "Supply Chain Coordinator, E-commerce Ops, BPO/KPO Executive" },
            { field: "Entrepreneurship", roles: "Small Business Owner, Entrepreneur" }
          ].map((item, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary">{item.field}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.roles}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Course Matrix */}
      <section id="matrix">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Course Matrix</h2>
        <div className="bg-slate-50 p-6 rounded-xl border">
          <Tabs defaultValue="sem1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8">
              <TabsTrigger value="sem1" className="py-2">Sem 1</TabsTrigger>
              <TabsTrigger value="sem2" className="py-2">Sem 2</TabsTrigger>
              <TabsTrigger value="sem3" className="py-2">Sem 3</TabsTrigger>
              <TabsTrigger value="sem4" className="py-2">Sem 4</TabsTrigger>
              <TabsTrigger value="sem5" className="py-2">Sem 5</TabsTrigger>
              <TabsTrigger value="sem6" className="py-2">Sem 6</TabsTrigger>
            </TabsList>

            <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Financial Accounting</li><li>Principles of Marketing</li><li>Business Environment</li><li>Indian Financial System</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Advanced Financial Accounting</li><li>Human Resource Management</li><li>Business Regulation</li><li>Corporate Administration</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Corporate Accounting</li><li>Quantitative Analysis - I</li><li>Cost Accounting</li><li>Employee Performance Mgmt</li><li>Corporate Communication Skills</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Advanced Corporate Accounting</li><li>Quantitative Analysis - II</li><li>Research Methodology</li><li>Employee Welfare & Social Security</li><li>Banking Practise</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Advanced Accounting</li><li>Financial Management</li><li>Income Tax - I</li><li>Goods and Services Tax</li><li>Costing Methods</li><li>Survey Projects</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Indian Accounting Standards</li><li>Management Accounting</li><li>Income Tax - II</li><li>Business Taxation</li><li>Auditing</li><li>Internship</li></ul></CardContent></Card></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Activities */}
      <section id="activities">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Departmental Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Industrial Visit: South Indian Paper Mills", desc: "Students observed real-time paper manufacturing to connect classroom concepts with industrial practice." },
            { title: "Magic Bus Training Programme", desc: "Life skills and employability modules to build confidence and problem-solving abilities." },
            { title: "NISM Certification", desc: "Training on Investor Awareness covering capital markets, mutual funds, and SEBI regulations." },
            { title: "FICCI FLO Add-on Programme", desc: "Hands-on training in Basic Tally, Advanced Tally, and GST filing (GSTR-1, GSTR-3B)." }
          ].map((act, i) => (
            <Card key={i} className="hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{act.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{act.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Faculty Section */}
      <section id="faculty">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Mrs. Yashodha S.M", role: "Head of Dept", qual: "M.Com(IB), M.Com(A&T), MBA(FIN), PGDFM, UGC-NET, K-SET" },
            { name: "Ms. Savitha G.M", role: "Assistant Professor", qual: "MBA, M.Phil" },
            { name: "Mr. Mohhamed Nawaz", role: "Assistant Professor", qual: "M.Com, UGC-NET, K-SET, (PhD)" },
            { name: "Ms. Gayathri K", role: "Assistant Professor", qual: "M.Com, MBA" },
            { name: "Ms. Angel Jaya Kirubha", role: "Assistant Professor", qual: "" }
          ].map((faculty, i) => (
            <Card key={i} className="text-center hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{faculty.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{faculty.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-2">{faculty.qual}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </DepartmentLayout>
  );
}
