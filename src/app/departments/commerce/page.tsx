import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  Target,
  Award,
  Users,
  Lightbulb,
  Briefcase,
  Zap,
  Mail,
  GraduationCap
} from 'lucide-react';

import { DynamicSection } from '@/components/dynamic-section';

export default function CommerceDepartmentPage() {

  // ... (existing code) ...

  const sidebarContent = (
    <DynamicSection
      pageId="dept-commerce-sidebar"
      defaultImageUrl="/images/departments/commerce/group_photo.jpg"
      render={(data) => (
        <div className="w-full relative rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 bg-slate-100">
          {data.imageUrl && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={data.imageUrl}
              alt="Department of Commerce Faculty and Activities"
              className="w-full h-auto object-cover"
            />
          )}
          {data.content && (
            <div
              className="p-4 prose prose-sm dark:prose-invert max-w-none bg-white/90"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          )}
        </div>
      )}
      onlyContent={false} // We handle rendering via render prop
    />
  );
  const whyBcomContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-black">
        <h2 className="text-xl font-bold text-primary">Why B.COM?</h2>
        <ul className="space-y-2 list-disc pl-5">
          <li>The Commerce stream builds strong fundamentals in accounting, finance, taxation, economics, and business management while developing digital, analytical, and communication skills.</li>
          <li>Employability for commerce graduates has risen, with the India Skills Report 2026 placing it at 62.81 percent. Growth in banking, fintech, compliance, and business analytics continues to drive demand for graduates with both subject knowledge and digital capability.</li>
          <li>Commerce remains a relevant and stable career pathway, offering strong opportunities for students who combine academic learning with industry aligned skills.</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Career Options</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-white border-2 border-primary text-black">
            <CardHeader><CardTitle className="text-base text-primary">Accounting and Finance</CardTitle></CardHeader>
            <CardContent><ul className="list-disc pl-5 text-sm"><li>Accountant</li><li>Financial Analyst</li><li>Auditor</li><li>Payroll Executive</li><li>Investment Advisor</li><li>Stock Market and Trading Assistant</li></ul></CardContent>
          </Card>
          <Card className="bg-white border-2 border-primary text-black">
            <CardHeader><CardTitle className="text-base text-primary">Taxation and Compliance</CardTitle></CardHeader>
            <CardContent><ul className="list-disc pl-5 text-sm"><li>Tax Consultant</li><li>GST Executive</li><li>Compliance Assistant</li></ul></CardContent>
          </Card>
          <Card className="bg-white border-2 border-primary text-black">
            <CardHeader><CardTitle className="text-base text-primary">Banking and Insurance</CardTitle></CardHeader>
            <CardContent><ul className="list-disc pl-5 text-sm"><li>Banking Associate</li><li>Loan Officer</li><li>Insurance Advisor or Claims Executive</li></ul></CardContent>
          </Card>
          <Card className="bg-white border-2 border-primary text-black">
            <CardHeader><CardTitle className="text-base text-primary">Business and Corporate Roles</CardTitle></CardHeader>
            <CardContent><ul className="list-disc pl-5 text-sm"><li>HR Assistant</li><li>Marketing and Sales Executive</li><li>Administrative Executive</li><li>Customer Relationship Executive</li></ul></CardContent>
          </Card>
          <Card className="bg-white border-2 border-primary text-black">
            <CardHeader><CardTitle className="text-base text-primary">Operations and Support Services</CardTitle></CardHeader>
            <CardContent><ul className="list-disc pl-5 text-sm"><li>BPO and KPO Executive</li><li>Supply Chain and Logistics Coordinator</li><li>E-commerce Operations Executive</li></ul></CardContent>
          </Card>
          <Card className="bg-white border-2 border-primary text-black">
            <CardHeader><CardTitle className="text-base text-primary">Entrepreneurship</CardTitle></CardHeader>
            <CardContent><ul className="list-disc pl-5 text-sm"><li>Entrepreneur</li><li>Small Business Owner</li></ul></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  // 2. Highlights
  const highlightsContent = (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">HIGHLIGHTS</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {[
              "Practical Learning: Students build real world understanding through case work, simulations, field activities, and hands on exposure to financial and business processes.",
              "Add on programmes: Along with the university curriculum, the department offers self-financed Tally training and other industry focused courses to build job ready skills.",
              "Strong Faculty: A dedicated team of experienced Associate and Assistant Professors guide students with expertise and commitment.",
              "Industry Alignment: The program bridges academic concepts with real industry needs, creating a learning environment that prepares students for current market demands.",
              "Clubs and Cells: The Commerce Club and Entrepreneur Cell encourage creativity, leadership, and entrepreneurial thinking beyond the classroom."
            ].map((item, i) => {
              const [title, desc] = item.split(':');
              return (
                <li key={i} className="flex gap-3 text-base text-black">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>{title}:</strong>{desc}</span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 3. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-white text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6 text-black">
        <Target className="h-8 w-8 stroke-[3px] text-primary" /> VISION & MISSION
      </h3>
      <div className="text-black italic text-lg space-y-4 leading-relaxed">
        <p className="not-italic font-semibold text-primary">In keeping with the ideals of the college and our founder, our attempt is to:</p>
        <ul className="text-left space-y-2 list-disc pl-8 inline-block not-italic">
          <li>Nurture competent, ethical, and socially responsible commerce graduates ready for a dynamic global business environment.</li>
          <li>Deliver quality education through innovative teaching, practical exposure, and continuous academic enrichment.</li>
          <li>Build strong analytical, communication, and entrepreneurial skills for careers in finance, accounting, management, and business.</li>
          <li>Integrate technology driven learning such as Tally, GST, financial analytics, and digital commerce tools.</li>
          <li>Promote research mindset and critical inquiry through case studies, seminars, projects, and experiential activities.</li>
          <li>Instil values, professionalism, and social responsibility to prepare students for meaningful contributions to society and industry.</li>
          <li>Strengthen industry–institution linkages for internships, training, industrial visits, and career opportunities.</li>
        </ul>
      </div>
    </div>
  );

  // 4. Skill Set
  const skillsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">SKILL-SET ACQUIRED</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li><strong>Financial Literacy:</strong> Strong understanding of accounting principles, financial statements, budgeting, and cost analysis.</li>
            <li><strong>Business Fundamentals:</strong> Knowledge of marketing, management, economics, and business law that supports informed decision making.</li>
            <li><strong>Analytical Ability:</strong> Skill in interpreting data, solving problems, and evaluating business performance.</li>
            <li><strong>Digital Competence:</strong> Working knowledge of tools like Tally, GST software, spreadsheets, and basic financial analytics.</li>
            <li><strong>Communication Skills:</strong> Clear writing, presentation, and interpersonal skills required in corporate and business settings.</li>
            <li><strong>Research Skills:</strong> Ability to conduct surveys, analyze case studies, prepare reports, and apply research methods.</li>
            <li><strong>Entrepreneurial Mindset:</strong> Understanding of business planning, opportunity assessment, and small business management.</li>
            <li><strong>Professional Ethics:</strong> Awareness of corporate responsibility, workplace ethics, and compliance standards.</li>
            <li><strong>Teamwork and Leadership:</strong> Experience working in groups, leading activities, and managing collaborative tasks.</li>
            <li><strong>Practical Exposure:</strong> Insights gained through assignments, projects, internships, and industry interactions.</li>
          </ul>
        </CardContent>
      </Card>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-black mb-2">PROGRAMME OFFERED</h3>
        <Badge className="text-lg py-2 px-4 bg-primary text-white">B.COM General</Badge>
      </div>
    </div>
  );

  // 5. Paper Titles
  const matrixContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-8 text-black">COURSE MATRIX: CORE PAPERS</h2>
      <div className="bg-white p-6 rounded-xl border-2 border-primary">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8 border border-primary/20">
            {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, i) => (
              <TabsTrigger key={i} value={`sem${i + 1}`} className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">{sem}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sem1"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>FINANCIAL ACCOUNTING</li><li>PRINCIPLES OF MARKETING</li><li>BUSINESS ENVIRONMENT</li><li>INDIAN FINANCIAL SYSTEM</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>ADVANCED FINANCIAL ACCOUNTING</li><li>HUMAN RESOURCE MANAGEMENT</li><li>BUSINESS REGULATION</li><li>CORPORATE ADMINISTRATION</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORPORATE ACCOUNTING</li><li>QUANTITATIVE ANALYSIS FOR BUSINESS DECISION I</li><li>COST ACCOUNTING</li><li>EMPLOYEE PERFORMANCE MANAGEMENT</li><li>CORPORATE COMMUNICATION SKILLS</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>ADVANCED CORPORATE ACCOUNTING</li><li>QUANTITATIVE ANALYSIS FOR BUSINESS DECISION II</li><li>RESEARCH METHODOLOGY</li><li>EMPLOYEE WELFARE AND SOCIAL SECURITY</li><li>BANKING PRACTISE</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>ADVANCED ACCOUNTING</li><li>FINANCIAL MANAGEMENT</li><li>INCOME TAX I</li><li>GOODS AND SERVICES TAX</li><li>COSTING METHODS</li><li>SURVEY PROJECTS</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>INDIAN ACCOUNTING STANDARDS</li><li>MANAGEMENT ACCOUNTING</li><li>INCOME TAX II</li><li>BUSINESS TAXATION</li><li>AUDITING</li><li>INTERNSHIP</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 6. Outcomes
  const outcomesContent = (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-2 border-primary text-black h-full">
          <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><Award className="h-6 w-6" /> PROGRAM OUTCOME</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gain fundamental knowledge of accounting, finance, taxation, and business management.</li>
              <li>Develop financial literacy and the ability to analyse business performance.</li>
              <li>Apply critical thinking to solve business and economic problems.</li>
              <li>Communicate effectively in professional and academic settings.</li>
              <li>Use digital tools, accounting software, and technology for business operations.</li>
              <li>Demonstrate ethical behaviour and awareness of social and corporate responsibilities.</li>
              <li>Develop research and analytical skills for informed decision-making.</li>
              <li>Acquire entrepreneurial skills to identify, plan, and manage business opportunities.</li>
              <li>Work effectively in teams and demonstrate leadership qualities.</li>
              <li>Become career-ready graduates with the mindset for higher education and lifelong learning.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white border-2 border-primary text-black h-full">
          <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><GraduationCap className="h-6 w-6" /> COURSE OUTCOME</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Understand fundamental concepts in accounting, finance, taxation, economics, and business law.</li>
              <li>Apply accounting principles to prepare, analyse, and interpret financial statements.</li>
              <li>Demonstrate the ability to use budgeting, costing, and managerial tools for business decision-making.</li>
              <li>Analyse market behaviour, consumer patterns, and economic trends using basic statistical methods.</li>
              <li>Communicate business information effectively through reports, presentations, and documentation.</li>
              <li>Use digital tools, spreadsheets, and accounting software for business and financial operations.</li>
              <li>Apply business laws, regulatory frameworks, and ethical principles in organisational contexts.</li>
              <li>Demonstrate problem-solving skills in practical business situations through case studies and projects.</li>
              <li>Develop entrepreneurial thinking and the ability to create, plan, and manage small business ventures.</li>
              <li>Prepare for careers in banking, accounting, taxation, finance, marketing, and pursue higher studies or professional courses.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 7. Activities
  const activitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">DEPARTMENTAL ACTIVITIES</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <h4 className="font-bold text-primary">Industrial Visit - SIPM</h4>
            <p className="text-sm">Students visited South Indian Paper Mills (SIPM) to observe real-time paper manufacturing and understand how raw materials move through each stage of production. The visit helped connect classroom concepts with industrial practice.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary">Magic Bus Training Programme</h4>
            <p className="text-sm">The Magic Bus Training Programme helped students build confidence, communication skills, and problem-solving abilities. Professional facilitators guided learners through life skills and employability modules that support career readiness.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary">NISM Certification</h4>
            <p className="text-sm">Students completed the NISM Certification on Investor Awareness, which strengthened their understanding of capital markets, financial products, and responsible investing. The training covered equity, debt, mutual funds, derivatives, SEBI regulations, stock exchanges, and the functioning of financial intermediaries.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-primary">FICCI FLO Add-on Programme (Tally & GST)</h4>
            <p className="text-sm">Through the FICCI FLO Add-on Programme, students received hands-on training in Basic Tally, Advanced Tally, and GST.</p>
            <ul className="list-disc pl-5 text-sm">
              <li>The Basic Tally module taught ledger creation, voucher entry, and digital bookkeeping.</li>
              <li>The Advanced Tally module covered cost centres, budgets, payroll, inventory, bank reconciliation, and MIS reports.</li>
              <li>The GST module explained registration, returns, input tax credit, invoicing, and filing GSTR-1 and GSTR-3B with practical exercises.</li>
            </ul>
            <p className="text-sm mt-1">This programme strengthened accounting skills and boosted employability in finance, taxation, and office operations.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">FACULTY PROFILE</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "YASHODHA.S.M", role: "Head Of Department, Department of Commerce", qual: "M.Com(IB), M.Com(A&T), MBA(FIN), PGDFM, UGC-NET, K-SET" },
          { name: "Ms.Savitha.G.M", role: "Assistant Professor", qual: "MBA, MPhil" },
          { name: "Mr.Mohhamed Nawaz", role: "Assistant Professor", qual: "M.Com, UGC-NET,K-SET, (PhD)" },
          { name: "Ms.Gayathri.K", role: "Assistant Professor", qual: "M.Com, MBA" },
          { name: "Ms.Angel Jaya Kirubha", role: "Assistant Professor", qual: "" }
        ].map((faculty, i) => (
          <Card key={i} className="text-center bg-white border-2 border-primary text-black hover:bg-primary/5 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg text-black">{faculty.name}</CardTitle>
              <CardDescription className="text-primary font-medium">{faculty.role}</CardDescription>
            </CardHeader>
            <CardContent>
              {faculty.qual && <p className="text-xs text-black font-semibold">{faculty.qual}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );


  const sections = [
    { id: "why-bcom", label: "Why B.COM?", content: whyBcomContent },
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "skills", label: "Skill Set Acquired", content: skillsContent },
    { id: "matrix", label: "Paper Titles", content: matrixContent },
    { id: "outcomes", label: "Outcomes", content: outcomesContent },
    { id: "activities", label: "Activities", content: activitiesContent },
    { id: "faculty", label: "Faculty Profile", content: facultyContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Commerce"
      pageId="dept-commerce"
      tagline="Welcome to the Department of Commerce. The Commerce Department at RBANM’s First Grade College has been shaping capable and confident graduates since 1984. It offers a strong undergraduate program built on practical learning and steady innovation. The goal is clear: to improve every year and deliver education that meets global standards. Teaching blends traditional lectures with student centred methods that build real understanding. Role-plays, simulations, group work, discussions, debates, and case-based learning make the classroom active and engaging. The department also takes pride in practices that support all round development. Students gain exposure through service learning, peer mentoring, mental health and wellness initiatives, social outreach, research paper opportunities, a bridge course for non-commerce learners, and skill enhancement programs aligned with industry expectations."
      sidebarContent={sidebarContent}
      sections={sections}
    />
  );
}
