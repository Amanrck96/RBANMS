import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  Users,
  Target,
  Mail,
  Lightbulb,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function CommerceDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        The Commerce Department at RBANM’s First Grade College has been shaping capable and confident graduates since 1984. It offers a strong undergraduate program built on practical learning and steady innovation.
      </p>
      <p>
        The goal is clear: to improve every year and deliver education that meets global standards. Teaching blends traditional lectures with student centred methods that build real understanding. Role-plays, simulations, group work, discussions, debates, and case-based learning make the classroom active and engaging.
      </p>
      <p>
        The department also takes pride in practices that support all round development. Students gain exposure through service learning, peer mentoring, mental health and wellness initiatives, social outreach, research paper opportunities, a bridge course for non-commerce learners, and skill enhancement programs aligned with industry expectations.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <p className="text-muted-foreground italic">
        "To nurture competent, ethical, and socially responsible commerce graduates ready for a dynamic global business environment."
      </p>
      <div className="pt-2">
        <Button variant="outline" className="font-semibold">
          View Full Vision
        </Button>
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
            "Practical Learning (Case studies, Simulations)",
            "Add-on programmes (Tally, Industry courses)",
            "Strong Faculty Team",
            "Industry Alignment & Job Readiness",
            "Active Commerce Club & Entrepreneur Cell"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Career Pathways Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Career Pathways</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Accountant", "Financial Analyst", "Tax Consultant", "Banking Associate", "HR Assistant", "Entrepreneur"
          ].map((skill, i) => (
            <span key={i} className="bg-white border rounded px-2 py-1 text-xs font-semibold text-slate-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Lightbulb className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Skills Set Acquired</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Financial Literacy, Business Fundamentals, Analytical Ability, Digital Competence (Tally/GST), Communication Skills, and Entrepreneurial Mindset.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <TrendingUp className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Program Outcomes</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Develop financial literacy, critical thinking, ethical behavior, and readiness for careers in banking, finance, taxation, and business management.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Commerce"
      tagline="Shaping Capable and Confident Graduates Since 1984."
      activeTab="commerce"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Course Matrices */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Course Matrix (B.Com)</h2>
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

            {/* Semester Content Mapping */}
            {[
              { id: "sem1", title: "Semester 1", subjects: ["1.1 FINANCIAL ACCOUNTING", "1.2 PRINCIPLES OF MARKETING", "1.3 BUSINESS ENVIRONMENT", "1.4 INDIAN FINANCIAL SYSTEM"] },
              { id: "sem2", title: "Semester 2", subjects: ["2.1 ADVANCED FINANCIAL ACCOUNTING", "2.2 HUMAN RESOURCE MANAGEMENT", "2.3 BUSINESS REGULATION", "2.4(a) CORPORATE ADMINISTRATION"] },
              { id: "sem3", title: "Semester 3", subjects: ["3.1 CORPORATE ACCOUNTING", "3.2 QUANTITATIVE ANALYSIS FOR BUSINESS DECISION I", "3.3 COST ACCOUNTING", "3.4(E1) EMPLOYEE PERFORMANCE MANAGEMENT", "3.5 CORPORATE COMMUNICATION SKILLS"] },
              { id: "sem4", title: "Semester 4", subjects: ["4.1 ADVANCED CORPORATE ACCOUNTING", "4.2 QUANTITATIVE ANALYSIS FOR BUSINESS DECISION II", "4.3 RESEARCH METHODOLOGY", "4.4(E2) EMPLOYEE WELFARE AND SOCIAL SECURITY", "4.5 BANKING PRACTISE"] },
              { id: "sem5", title: "Semester 5", subjects: ["5.1 ADVANCED ACCOUNTING", "5.2 FINANCIAL MANAGEMENT", "5.3 INCOME TAX I", "5.4 GOODS AND SERVICES TAX", "5.5 COSTING METHODS", "5.6 SURVEY PROJECTS"] },
              { id: "sem6", title: "Semester 6", subjects: ["6.1 INDIAN ACCOUNTING STANDARDS", "6.2 MANAGEMENT ACCOUNTING", "6.3 INCOME TAX II", "6.4 BUSINESS TAXATION", "6.5 AUDITING", "6.6 INTERNSHIP"] }
            ].map((sem) => (
              <TabsContent key={sem.id} value={sem.id} className="space-y-4">
                <ul className="grid md:grid-cols-2 gap-4">
                  {sem.subjects.map((sub, i) => (
                    <li key={i} className="bg-white p-4 rounded border flex items-center gap-3 shadow-sm">
                      <span className="bg-primary/10 text-primary font-bold px-2 py-1 rounded text-xs">Core</span>
                      <span className="text-sm font-medium">{sub}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Activities Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Departmental Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Industrial Visits", desc: "Visit to South Indian Paper Mills (SIPM) to observe real-time manufacturing." },
            { title: "Training Programs", desc: "Magic Bus Training Programme for life skills and employability." },
            { title: "NISM Certification", desc: "Investor Awareness certification covering capital markets and SEBI regulations." },
            { title: "Add-on Courses", desc: "FICCI FLO programme: Basic Tally, Advanced Tally, and GST training." }
          ].map((act, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-2">
                  <Briefcase className="h-5 w-5 text-primary shrink-0 mt-1" /> {act.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{act.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">YASHODHA.S.M</CardTitle>
                  <CardDescription className="text-primary font-medium">Head Of Department</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">M.Com(IB), M.Com(A&T), MBA(FIN), PGDFM, UGC-NET, K-SET</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ms.Savitha.G.M</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">MBA, MPhil</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mr.Mohhamed Nawaz</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">M.Com, UGC-NET,K-SET, (PhD)</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ms.Gayathri.K</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">M.Com, MBA</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ms.Angel Jaya Kirubha</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </DepartmentLayout>
  );
}
