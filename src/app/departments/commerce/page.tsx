import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Building,
  Mail,
  TrendingUp,
  BarChart,
  BookOpen,
  CheckCircle,
  FileText
} from 'lucide-react';

export default function CommerceDepartmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Department of Commerce
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shaping Capable and Confident <span className="text-yellow-400">Graduates Since 1984</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              A strong undergraduate program built on practical learning, steady innovation, and global standards.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department of Commerce</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Commerce Department at RBANM’s First Grade College has been shaping capable and confident graduates since 1984. It offers a strong undergraduate program built on practical learning and steady innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The goal is clear: to improve every year and deliver education that meets global standards. Teaching blends traditional lectures with student centred methods that build real understanding. Role-plays, simulations, group work, discussions, debates, and case-based learning make the classroom active and engaging.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The department also takes pride in practices that support all round development. Students gain exposure through service learning, peer mentoring, mental health and wellness initiatives, social outreach, research paper opportunities, and skill enhancement programs aligned with industry expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-blue-900">Practical Learning</span>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
                <span className="font-semibold text-indigo-900">Industry Skills</span>
              </CardContent>
            </Card>
            <Card className="bg-cyan-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Users className="h-8 w-8 text-cyan-600" />
                <span className="font-semibold text-cyan-900">Mentorship</span>
              </CardContent>
            </Card>
            <Card className="bg-sky-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Globe className="h-8 w-8 text-sky-600" />
                <span className="font-semibold text-sky-900">Global Standards</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why B.COM? */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why B.COM?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Strong Fundamentals", desc: "Builds strong fundamentals in accounting, finance, taxation, economics, and business management while developing digital, analytical, and communication skills." },
              { title: "High Employability", desc: "Employability for commerce graduates has risen significantly. Growth in banking, fintech, compliance, and business analytics continues to drive demand." },
              { title: "Stable Career Pathway", desc: "Commerce remains a relevant and stable career pathway, offering strong opportunities for students who combine academic learning with industry aligned skills." }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Practical Learning", desc: "Students build real world understanding through case work, simulations, field activities, and hands on exposure to financial and business processes." },
            { title: "Add on programmes", desc: "Along with the university curriculum, the department offers self-financed Tally training and other industry focused courses to build job ready skills." },
            { title: "Strong Faculty", desc: "A dedicated team of experienced Associate and Assistant Professors guide students with expertise and commitment." },
            { title: "Industry Alignment", desc: "The program bridges academic concepts with real industry needs, creating a learning environment that prepares students for current market demands." },
            { title: "Clubs and Cells", desc: "The Commerce Club and Entrepreneur Cell encourage creativity, leadership, and entrepreneurial thinking beyond the classroom." }
          ].map((highlight, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" /> {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{highlight.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skill Set Acquired</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Financial Literacy", desc: "Strong understanding of accounting principles, financial statements, budgeting, and cost analysis." },
              { title: "Business Fundamentals", desc: "Knowledge of marketing, management, economics, and business law that supports informed decision making." },
              { title: "Analytical Ability", desc: "Skill in interpreting data, solving problems, and evaluating business performance." },
              { title: "Digital Competence", desc: "Working knowledge of tools like Tally, GST software, spreadsheets, and basic financial analytics." },
              { title: "Communication Skills", desc: "Clear writing, presentation, and interpersonal skills required in corporate and business settings." },
              { title: "Research Skills", desc: "Ability to conduct surveys, analyze case studies, prepare reports, and apply research methods." },
              { title: "Entrepreneurial Mindset", desc: "Understanding of business planning, opportunity assessment, and small business management." },
              { title: "Professional Ethics", desc: "Awareness of corporate responsibility, workplace ethics, and compliance standards." },
              { title: "Teamwork and Leadership", desc: "Experience working in groups, leading activities, and managing collaborative tasks." },
              { title: "Practical Exposure", desc: "Insights gained through assignments, projects, internships, and industry interactions." }
            ].map((skill, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <Card className="border-l-4 border-l-blue-600 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-blue-600" /> Vision & Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">In keeping with the ideals of the college and our founder, our attempt is to:</p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Nurture competent, ethical, and socially responsible commerce graduates ready for a dynamic global business environment.",
                "Deliver quality education through innovative teaching, practical exposure, and continuous academic enrichment.",
                "Build strong analytical, communication, and entrepreneurial skills for careers in finance, accounting, management, and business.",
                "Integrate technology driven learning such as Tally, GST, financial analytics, and digital commerce tools.",
                "Promote research mindset and critical inquiry through case studies, seminars, projects, and experiential activities.",
                "Instil values, professionalism, and social responsibility to prepare students for meaningful contributions to society and industry.",
                "Strengthen industry–institution linkages for internships, training, industrial visits, and career opportunities."
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-blue-600">•</span> {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Course Matrix */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Course Matrix (B.COM General)</h2>
          <Tabs defaultValue="sem1" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto">
              <TabsTrigger value="sem1" className="py-2">Sem 1</TabsTrigger>
              <TabsTrigger value="sem2" className="py-2">Sem 2</TabsTrigger>
              <TabsTrigger value="sem3" className="py-2">Sem 3</TabsTrigger>
              <TabsTrigger value="sem4" className="py-2">Sem 4</TabsTrigger>
              <TabsTrigger value="sem5" className="py-2">Sem 5</TabsTrigger>
              <TabsTrigger value="sem6" className="py-2">Sem 6</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="sem1">
                <Card>
                  <CardHeader><CardTitle>Semester 1</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>1.1 FINANCIAL ACCOUNTING</li>
                      <li>1.2 PRINCIPLES OF MARKETING</li>
                      <li>1.3 BUSINESS ENVIRONMENT</li>
                      <li>1.4 INDIAN FINANCIAL SYSTEM</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem2">
                <Card>
                  <CardHeader><CardTitle>Semester 2</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>2.1 ADVANCED FINANCIAL ACCOUNTING</li>
                      <li>2.2 HUMAN RESOURCE MANAGEMENT</li>
                      <li>2.3 BUSINESS REGULATION</li>
                      <li>2.4(a) CORPORATE ADMINISTRATION</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem3">
                <Card>
                  <CardHeader><CardTitle>Semester 3</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>3.1 CORPORATE ACCOUNTING</li>
                      <li>3.2 QUANTITATIVE ANALYSIS FOR BUSINESS DECISION I</li>
                      <li>3.3 COST ACCOUNTING</li>
                      <li>3.4(E1) EMPLOYEE PERFORMANCE MANAGEMENT</li>
                      <li>3.5 CORPORATE COMMUNICATION SKILLS</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem4">
                <Card>
                  <CardHeader><CardTitle>Semester 4</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>4.1 ADVANCED CORPORATE ACCOUNTING</li>
                      <li>4.2 QUANTITATIVE ANALYSIS FOR BUSINESS DECISION II</li>
                      <li>4.3 RESEARCH METHODOLOGY</li>
                      <li>4.4(E2) EMPLOYEE WELFARE AND SOCIAL SECURITY</li>
                      <li>4.5 BANKING PRACTISE</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem5">
                <Card>
                  <CardHeader><CardTitle>Semester 5</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>5.1 ADVANCED ACCOUNTING</li>
                      <li>5.2 FINANCIAL MANAGEMENT</li>
                      <li>5.3 INCOME TAX I</li>
                      <li>5.4 GOODS AND SERVICES TAX</li>
                      <li>5.5 COSTING METHODS</li>
                      <li>5.6 SURVEY PROJECTS</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem6">
                <Card>
                  <CardHeader><CardTitle>Semester 6</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>6.1 INDIAN ACCOUNTING STANDARDS</li>
                      <li>6.2 MANAGEMENT ACCOUNTING</li>
                      <li>6.3 INCOME TAX II</li>
                      <li>6.4 BUSINESS TAXATION</li>
                      <li>6.5 AUDITING</li>
                      <li>6.6 INTERNSHIP</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Objectives & Outcomes */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Program Outcome</h3>
            <ul className="space-y-4">
              {[
                "Gain fundamental knowledge of accounting, finance, taxation, and business management.",
                "Develop financial literacy and the ability to analyse business performance.",
                "Apply critical thinking to solve business and economic problems.",
                "Communicate effectively in professional and academic settings.",
                "Use digital tools, accounting software, and technology for business operations.",
                "Demonstrate ethical behaviour and awareness of social and corporate responsibilities.",
                "Develop research and analytical skills for informed decision-making.",
                "Acquire entrepreneurial skills to identify, plan, and manage business opportunities.",
                "Work effectively in teams and demonstrate leadership qualities.",
                "Become career-ready graduates with the mindset for higher education and lifelong learning."
              ].map((obj, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-muted-foreground">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Course Outcome</h3>
            <ul className="space-y-4">
              {[
                "Understand fundamental concepts in accounting, finance, taxation, economics, and business law.",
                "Apply accounting principles to prepare, analyse, and interpret financial statements.",
                "Demonstrate the ability to use budgeting, costing, and managerial tools for business decision-making.",
                "Analyse market behaviour, consumer patterns, and economic trends using basic statistical methods.",
                "Communicate business information effectively through reports, presentations, and documentation.",
                "Use digital tools, spreadsheets, and accounting software for business and financial operations.",
                "Apply business laws, regulatory frameworks, and ethical principles in organisational contexts.",
                "Demonstrate problem-solving skills in practical business situations through case studies and projects.",
                "Develop entrepreneurial thinking and the ability to create, plan, and manage small business ventures.",
                "Prepare for careers in banking, accounting, taxation, finance, marketing, and pursue higher studies or professional courses."
              ].map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career Options */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Career Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Accounting & Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Accountant</li>
                  <li>Financial Analyst</li>
                  <li>Auditor</li>
                  <li>Payroll Executive</li>
                  <li>Investment Advisor</li>
                  <li>Stock Market and Trading Assistant</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Taxation & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Tax Consultant</li>
                  <li>GST Executive</li>
                  <li>Compliance Assistant</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Banking & Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Banking Associate</li>
                  <li>Loan Officer</li>
                  <li>Insurance Advisor or Claims Executive</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Business & Corporate Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>HR Assistant</li>
                  <li>Marketing and Sales Executive</li>
                  <li>Administrative Executive</li>
                  <li>Customer Relationship Executive</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Operations & Support Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>BPO and KPO Executive</li>
                  <li>Supply Chain and Logistics Coordinator</li>
                  <li>E-commerce Operations Executive</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Entrepreneurship</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Entrepreneur</li>
                  <li>Small Business Owner</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Departmental Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Industrial Visits", desc: "Students visited South Indian Paper Mills (SIPM) to observe real-time paper manufacturing and understand how raw materials move through each stage of production. The visit helped connect classroom concepts with industrial practice." },
            { title: "Training Programs", desc: "The Magic Bus Training Programme helped students build confidence, communication skills, and problem-solving abilities. Professional facilitators guided learners through life skills and employability modules." },
            { title: "NISM Certification", desc: "Students completed the NISM Certification on Investor Awareness, which strengthened their understanding of capital markets, financial products, and responsible investing, covering equity, debt, mutual funds, and SEBI regulations." },
            { title: "FICCI FLO Add-on Programme", desc: "Students received hands-on training in Basic Tally, Advanced Tally, and GST. Modules covered ledger creation, digital bookkeeping, payroll, inventory, and GST filing, boosting employability in finance and taxation." }
          ].map((item, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Faculty</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">YASHODHA.S.M</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">Head Of Department</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">M.Com(IB), M.Com(A&T), MBA(FIN), PGDFM, UGC-NET, K-SET</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ms. Savitha.G.M</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">Assistant Professor</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">MBA, MPhil</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Mr. Mohhamed Nawaz</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">Assistant Professor</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">M.Com, UGC-NET, K-SET, (PhD)</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ms. Gayathri.K</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">Assistant Professor</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">M.Com, MBA</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ms. Angel Jaya Kirubha</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">Assistant Professor</CardDescription>
                    <p className="text-sm text-muted-foreground mt-1"></p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
