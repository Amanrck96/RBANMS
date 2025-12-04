import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen,
  Briefcase,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  BarChart,
  UserCheck,
  Building,
  Mail,
  Phone,
  Calendar,
  Rocket
} from 'lucide-react';

export default function ManagementDepartmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Department of Management Studies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Blending the Art of People Management <span className="text-yellow-400">with the Science of Market Dynamics.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Equipping students with the skills to lead, innovate, and adapt in today’s evolving business environment.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department of Management Studies</h2>
            <p className="text-muted-foreground leading-relaxed">
              At RBANM’s First Grade College, the Department of Management blends the art of people management with the science of market dynamics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Bachelor of Business Administration (BBA) program, with dual specializations in Human Resources and Marketing, equips students with the skills to lead, innovate, and adapt in today’s evolving business environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The curriculum integrates theoretical knowledge with practical exposure, ensuring graduates are prepared for both corporate and entrepreneurial roles. Through interactive learning, real-world projects, and mentorship from experienced faculty, students develop the confidence and competence required to excel in competitive global markets.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Users className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-blue-900">HR Management</span>
              </CardContent>
            </Card>
            <Card className="bg-cyan-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <TrendingUp className="h-8 w-8 text-cyan-600" />
                <span className="font-semibold text-cyan-900">Marketing</span>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Lightbulb className="h-8 w-8 text-indigo-600" />
                <span className="font-semibold text-indigo-900">Innovation</span>
              </CardContent>
            </Card>
            <Card className="bg-teal-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Globe className="h-8 w-8 text-teal-600" />
                <span className="font-semibold text-teal-900">Global Outlook</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why BBA? */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why BBA?</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            The BBA program is designed to provide a strong foundation in business management while developing specialized expertise in Human Resources and Marketing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Integrated Curriculum", desc: "Balanced mix of core business fundamentals and focused courses in recruitment, employee relations, brand management, digital marketing, and consumer behavior." },
              { icon: Briefcase, title: "Industry-Ready Skills", desc: "Learn to design HR policies that drive performance and create marketing strategies that engage diverse audiences." },
              { icon: Building, title: "Practical Exposure", desc: "Participate in live projects, internships with leading corporations, and workshops conducted by industry professionals." },
              { icon: Globe, title: "Global Perspective", desc: "Gain international insights through case studies and exchange opportunities that highlight global HR and marketing practices." },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Set Acquired */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skill Set Acquired</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-4">
            {[
              "Strategic Thinking and Problem-Solving: Ability to analyse complex business situations and make informed decisions.",
              "Leadership and Team Management: Skills to lead people, manage projects, and foster collaboration in organizational settings.",
              "Professional Communication: Proficiency in written and verbal communication suited to corporate and managerial contexts."
            ].map((skill, i) => (
              <li key={i} className="flex gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                <span className="text-muted-foreground">{skill}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {[
              "Analytical and Quantitative Ability: Competence in interpreting data, evaluating performance, and applying business analytics.",
              "Marketing and Customer Orientation: Understanding of consumer behavior, sales processes, and digital marketing tools.",
              "Human Resource Management: Expertise in recruitment, performance evaluation, employee engagement, and workplace relations."
            ].map((skill, i) => (
              <li key={i} className="flex gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-cyan-500 shrink-0" />
                <span className="text-muted-foreground">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Award className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Dual Specialization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Earn a degree that combines expertise in Human Resources and Marketing—a valuable blend that enhances career versatility.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Receive personalized academic and professional guidance from faculty who are active practitioners in their respective fields.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Rocket className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Career Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Prepare for roles such as Talent Acquisition Specialist, Employer Branding Manager, Digital Marketing Coordinator, and HR Business Partner.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Award className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Access optional add-on certifications in HR Analytics, Search Engine Optimization (SEO), and Social Media Marketing to strengthen employability.</p>
              </CardContent>
            </Card>
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
            <p className="text-muted-foreground mb-4">We work within our Institutional Objectives of:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Diversity & Inclusion:</strong> Cultivate a campus culture that celebrates diverse backgrounds, ideas, and perspectives, fostering innovation and collaboration.</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Equality:</strong> Ensure equal access to academic resources, opportunities, and support services for every student, irrespective of gender, ethnicity, or socioeconomic status.</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Career Opportunities:</strong> Strengthen industry partnerships and placement networks to translate academic achievement into meaningful professional success.</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <strong>Inclusive Excellence:</strong> Embed inclusivity across curriculum design, faculty engagement, and student activities to prepare graduates who excel in diverse workplaces.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Course Matrix */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Course Matrix</h2>
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
                      <li>Principles of Management</li>
                      <li>Market Analysis for Business Decisions</li>
                      <li>Statistics for Business Decisions – I</li>
                      <li>Financial Accounting</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem2">
                <Card>
                  <CardHeader><CardTitle>Semester 2</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Human Resource Management and Practices</li>
                      <li>Indian Financial System</li>
                      <li>Statistics for Business Decisions – II</li>
                      <li>Corporate Accounting</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem3">
                <Card>
                  <CardHeader><CardTitle>Semester 3</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Cost Accounting</li>
                      <li>Organizational Behaviour</li>
                      <li>Statistics for Business Decisions</li>
                      <li>Principles Of Marketing</li>
                      <li>Entrepreneurship and start-up Ecosystem</li>
                      <li>Business Communication</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem4">
                <Card>
                  <CardHeader><CardTitle>Semester 4</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Business Law & Practice</li>
                      <li>Research Methodology</li>
                      <li>Financial Management</li>
                      <li>Customer Relationship Management</li>
                      <li>Technology for Business</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem5">
                <Card>
                  <CardHeader><CardTitle>Semester 5</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Production and Operations Management</li>
                      <li>Income Tax – I</li>
                      <li>Banking Law and Practice</li>
                      <li>Elective Group I – Consumer Behaviour & Market Research</li>
                      <li>Elective Group II – Human Resource Development</li>
                      <li>Employability Skills</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem6">
                <Card>
                  <CardHeader><CardTitle>Semester 6</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Business Law</li>
                      <li>Income Tax - II</li>
                      <li>International Business</li>
                      <li>Elective Group I – Advertising & Media Management</li>
                      <li>Elective Group II – Compensation & Performance Management</li>
                      <li>Goods & Service Tax OR Event Management</li>
                      <li>Internship</li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold text-blue-700 mb-2">Electives - Semester VI</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        <li>Marketing: Advertising and Media Management</li>
                        <li>Human Resource Management: Compensation and Performance Management</li>
                      </ul>
                    </div>
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
            <h3 className="text-2xl font-bold mb-6">OBJECTIVES</h3>
            <p className="text-muted-foreground mb-4">
              The BBA program at RBANMs First Grade College under Bengaluru City University is designed to develop comprehensive business competencies with dual specialization in Human Resources and Marketing.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">PROGRAMME OUTCOMES (POs)</h3>
            <ul className="space-y-4">
              {[
                { title: "PO1: Business Acumen", desc: "Apply foundational business knowledge to solve real‑world problems." },
                { title: "PO2: HR Expertise", desc: "Demonstrate proficiency in recruitment, talent management, employee relations, and performance management." },
                { title: "PO3: Marketing Competence", desc: "Develop and implement effective marketing strategies using digital tools and analytics." },
                { title: "PO4: Strategic Thinking", desc: "Integrate HR and marketing insights to formulate business strategies." },
                { title: "PO5: Communication & Collaboration", desc: "Communicate and collaborate effectively with diverse stakeholders." },
                { title: "PO6: Problem‑Solving & Adaptability", desc: "Analyze complex issues, think critically, and adapt to changing environments." },
                { title: "PO7: Ethics & Social Responsibility", desc: "Uphold ethical standards and demonstrate social responsibility in HR and marketing decisions." },
                { title: "PO8: Leadership & Teamwork", desc: "Lead cross‑functional teams and inspire individuals to achieve shared goals." }
              ].map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    <strong className="text-foreground">{outcome.title}</strong> – {outcome.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Marketing Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Digital Marketing Coordinator</li>
                  <li>Brand / Product Executive</li>
                  <li>Market Research Analyst</li>
                  <li>Social Media Executive</li>
                  <li>Advertising / Campaign Executive</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Human Resource Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Talent Acquisition Specialist</li>
                  <li>HR Executive</li>
                  <li>HR Business Partner (Entry Level)</li>
                  <li>Training & Development Executive</li>
                  <li>Employee Relations / HR Operations Executive</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Cross-Functional Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Employer Branding Manager</li>
                  <li>Sales & Business Development Executive</li>
                  <li>Customer Success Executive</li>
                  <li>HR Analytics / Marketing Analytics Associate (with additional certifications)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Certificate Training Program", desc: "Industry specific training courses with NSDC certification to enhance employability." },
            { title: "Industry Visits", desc: "Students are taken to established business houses to get a better feel of the profession." },
            { title: "Educational Trips", desc: "Help students explore innovation, product design, and the application of AI in modern technology." },
            { title: "Internships", desc: "Opportunities facilitated for students to gain hands-on experience in corporate environments." },
            { title: "Entrepreneurship Lectures", desc: "Organized in collaboration with the AICTE Cell to inspire entrepreneurial thinking." }
          ].map((item, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Faculty</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Prof. Priya K</CardTitle>
                    <CardDescription className="text-blue-600 font-medium text-lg">Head of the Department – Management</CardDescription>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> priyamahesh09@gmail.com</span>
                      <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> 9880213203</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prof. K. Priya Mahesh is a dedicated academic professional with over 27 years of teaching experience in the Department of Commerce and Management. She holds an MBA in Finance and a Master’s in Marketing Management, and is currently pursuing a Ph.D. at Annamalai University. She is known for her dynamic teaching style and institutional leadership. Under her guidance, the Department has achieved excellence in academics, industry collaboration, and student development. She has led initiatives in Career counselling, commerce lab design & development, IQAC, women empowerment programs, and student-centric activities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Prof. Pavithra S</CardTitle>
                    <CardDescription className="text-blue-600 font-medium text-lg">Assistant Professor</CardDescription>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> pavithrabalaji036@gmail.com</span>
                      <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> 9916844662</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prof. Pavithra S brings over 16 years of teaching experience and holds an M.Com in Accounting and Taxation. She teaches courses for both B.Com and BBA programs, integrating conceptual knowledge with real-world business applications. She also serves as the IQAC Coordinator, leading quality assurance initiatives across the institution, and coordinates the Cultural Committee, promoting an active and inclusive campus life. Additionally, she is a member of the Attendance Committee, committed to academic discipline and student participation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Prof. Banuprakash H. V.</CardTitle>
                    <CardDescription className="text-blue-600 font-medium text-lg">Assistant Professor</CardDescription>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> banuprakash1989@gmail.com</span>
                      <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> 7259248824</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prof. Banuprakash H. V. holds a B.Ed. and an M.Sc. in Mathematics and has been associated with RBANM’s First Grade College since 2015. He has made significant contributions to both academic and co-curricular development. He has served as the Red Cross Unit Program Officer (2017–2019) and Naval NCC Unit Caretaker (2019–2023), and was commissioned as an Associate NCC Officer (Sub-Lieutenant) in 2023, securing 7th rank in the PRCN course. He is currently a member of the Internal Quality Assurance Cell (IQAC) and serves as Examination Committee In-Charge. His technical proficiency includes MS Office, basic operating systems, and programming languages such as C, C++, Java, Visual Basic, HTML, and Scilab.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Prof. Akshaya Kumari M.</CardTitle>
                    <CardDescription className="text-blue-600 font-medium text-lg">Assistant Professor</CardDescription>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> akshaya199310@gmail.com</span>
                      <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> 8296476934</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prof. Akshaya Kumari M. holds a Master’s in Commerce (Accounting and Taxation) from Bangalore University and is currently pursuing a Ph.D. at Annamalai University. With over 10 years of teaching experience, she combines academic rigor with practical insight. She actively mentors students in internship and research projects, has presented papers at national and international conferences, and contributes to curriculum development, academic audits, and departmental initiatives. Her teaching philosophy emphasizes interactive and student-centric learning, bridging theoretical understanding with practical application.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
