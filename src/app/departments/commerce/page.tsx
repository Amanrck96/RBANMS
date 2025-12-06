import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  Target,
  Award,
  Briefcase,
  Users,
  BarChart,
  Calculator,
  BookOpen,
  PieChart,
  FileText
} from 'lucide-react';

export default function CommerceDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Department of Commerce</h1>
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
    <div id="vision" className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-sm space-y-2">
        <p>In keeping with the ideals of the college and our founder, our attempt is to:</p>
        <ul className="text-left space-y-1 list-disc pl-5">
          <li>Nurture competent, ethical, and socially responsible commerce graduates ready for a dynamic global business environment.</li>
          <li>Deliver quality education through innovative teaching, practical exposure, and continuous academic enrichment.</li>
          <li>Build strong analytical, communication, and entrepreneurial skills for careers in finance, accounting, management, and business.</li>
          <li>Integrate technology driven learning such as Tally, GST, financial analytics, and digital commerce tools.</li>
          <li>Promote research mindset and critical inquiry.</li>
          <li>Instil values, professionalism, and social responsibility.</li>
        </ul>
      </div>
    </div>
  );

  const sidebarContent = (
    <>
      <div id="highlights" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Practical Learning (Case work, simulations, field activities)",
            "Add on programmes (Tally training, Industry focused courses)",
            "Strong Faculty (Experienced Professors)",
            "Industry Alignment (Bridges academic concepts with market needs)",
            "Clubs and Cells (Commerce Club, Entrepreneur Cell)"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div id="programmes" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Programme Offered</h4>
        <div className="flex flex-col gap-2">
          <Badge className="w-fit text-sm py-1">B.COM General</Badge>
        </div>
      </div>

      <div id="contact" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Contact</h4>
        <p className="text-sm text-muted-foreground">hodcommercerbanms@gmail.com</p>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card id="whybcom" key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <TrendingUp className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Why B.COM?</h3>
        <ul className="text-slate-300 leading-relaxed text-sm text-left list-disc pl-5 space-y-2">
          <li>Builds strong fundamentals in accounting, finance, taxation.</li>
          <li>High employability (62.81% per India Skills Report 2026).</li>
          <li>Demand in banking, fintech, compliance, and analytics.</li>
          <li>A relevant and stable career pathway combining academic learning with skills.</li>
        </ul>
      </CardContent>
    </Card>,
    <Card id="outcomes" key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Programme Outcome</h3>
        <ul className="text-primary-foreground/90 leading-relaxed text-sm text-left list-disc pl-5 space-y-1">
          <li>Fundamenals of accounting & finance.</li>
          <li>Financial literacy & analysis.</li>
          <li>Effective communication.</li>
          <li>Digital tools & Tally/GST usage.</li>
          <li>Ethical behaviour & social responsibility.</li>
          <li>Entrepreneurial skills.</li>
          <li>Career-ready mindset.</li>
        </ul>
      </CardContent>
    </Card>
  ];

  const navItems = [
    { label: "Highlights", href: "#highlights" },
    { label: "Skills", href: "#skills" },
    { label: "Vision", href: "#vision" },
    { label: "Careers", href: "#careers" },
    { label: "Matrix", href: "#matrix" },
    { label: "COs", href: "#course-outcomes" },
    { label: "Activities", href: "#activities" },
    { label: "Faculty", href: "#faculty" },
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
      navItems={navItems}
    >

      {/* Skill Set */}
      <section id="skills" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Skill Set Acquired</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Financial Literacy", d: "Accounting, statements, budgeting" },
            { t: "Business Fundamentals", d: "Marketing, management, law" },
            { t: "Analytical Ability", d: "Interpreting data, solving problems" },
            { t: "Digital Competence", d: "Tally, GST, spreadsheets" },
            { t: "Communication", d: "Writing, presentation, interpersonal" },
            { t: "Research Skills", d: "Surveys, case studies, reports" },
            { t: "Entrepreneurial Mindset", d: "Planning, opportunity assessment" },
            { t: "Professional Ethics", d: "Responsibility, compliance" }
          ].map((skill, i) => (
            <Card key={i} className="bg-slate-50 border-slate-200">
              <CardContent className="p-4">
                <h4 className="font-bold text-slate-800 text-sm mb-1">{skill.t}</h4>
                <p className="text-xs text-muted-foreground">{skill.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Career Options */}
      <section id="careers" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Career Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-lg">Accounting & Finance</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Accountant, Financial Analyst, Auditor, Payroll Executive, Investment Advisor, Stock Market Assistant.</p></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-lg">Taxation & Compliance</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Tax Consultant, GST Executive, Compliance Assistant.</p></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-lg">Banking & Insurance</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Banking Associate, Loan Officer, Insurance Advisor.</p></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-lg">Business Roles</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">HR Assistant, Marketing Executive, Admin Executive, Customer Relationship.</p></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-lg">Operations</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">BPO/KPO Executive, Supply Chain, Logistics, E-commerce Operations.</p></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-lg">Entrepreneurship</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Entrepreneur, Small Business Owner.</p></CardContent>
          </Card>
        </div>
      </section>

      {/* Course Matrix */}
      <section id="matrix" className="scroll-mt-24">
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
            <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Corporate Accounting</li><li>Quantitative Analysis for Business Decision I</li><li>Cost Accounting</li><li>Employee Performance Management</li><li>Corporate Communication Skills</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Advanced Corporate Accounting</li><li>Quantitative Analysis for Business Decision II</li><li>Research Methodology</li><li>Employee Welfare and Social Security</li><li>Banking Practise</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Advanced Accounting</li><li>Financial Management</li><li>Income Tax I</li><li>Goods and Services Tax</li><li>Costing Methods</li><li>Survey Projects</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Indian Accounting Standards</li><li>Management Accounting</li><li>Income Tax II</li><li>Business Taxation</li><li>Auditing</li><li>Internship</li></ul></CardContent></Card></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Course Outcomes */}
      <section id="course-outcomes" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Course Outcomes</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Understand accounting, finance, taxation, economics, business law.</li>
              <li>Apply accounting principles to prepare/analyse financial statements.</li>
              <li>Use budgeting, costing, and managerial tools.</li>
              <li>Analyse market behaviour and economic trends.</li>
              <li>Communicate business information effectively.</li>
              <li>Use digital tools (Tally, GST, spreadsheets).</li>
              <li>Apply business laws and ethical principles.</li>
              <li>Solve practical business problems.</li>
              <li>Develop entrepreneurial thinking.</li>
              <li>Prepare for careers in banking, finance, marketing etc.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Activities */}
      <section id="activities" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Activities</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader><CardTitle className="text-lg">Industrial Visits</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Students visited South Indian Paper Mills (SIPM) to observe real-time paper manufacturing and understand production stages.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Training Programs</CardTitle></CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>
                <span className="font-bold text-slate-800 block">Magic Bus Training Programme</span>
                <p>Built confidence, communication skills, and problem-solving abilities for career readiness.</p>
              </div>
              <div>
                <span className="font-bold text-slate-800 block">NISM Certification</span>
                <p>Investor Awareness training on capital markets, financial products, and responsible investing.</p>
              </div>
              <div>
                <span className="font-bold text-slate-800 block">FICCI FLO Add-on Programme</span>
                <p>Hands-on training in Basic Tally, Advanced Tally, and GST (Registration, returns, input tax credit).</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Yashodha S.M", role: "Head of Dept", qual: "M.Com(IB), M.Com(A&T), MBA(FIN), PGDFM" },
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
