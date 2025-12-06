import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Briefcase,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Award,
  Globe,
  PieChart,
  BarChart,
  Mail,
  BookOpen,
  Rocket
} from 'lucide-react';

export default function ManagementDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        At RBANM’s First Grade College, the Department of Management blends the art of people management with the science of market dynamics.
      </p>
      <p>
        Bachelor of Business Administration (BBA) program, with dual specializations in Human Resources and Marketing, equips students with the skills to lead, innovate, and adapt in today’s evolving business environment.
      </p>
      <p>
        The curriculum integrates theoretical knowledge with practical exposure, ensuring graduates are prepared for both corporate and entrepreneurial roles. Through interactive learning, real-world projects, and mentorship from experienced faculty, students develop the confidence and competence required to excel in competitive global markets.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-sm space-y-2">
        <p><strong>Diversity & Inclusion:</strong> Cultivate a campus culture that celebrates diverse backgrounds and fosters innovation.</p>
        <p><strong>Equality:</strong> Ensure equal access to resources and opportunities for every student.</p>
        <p><strong>Career Opportunities:</strong> Strengthen industry partnerships for meaningful professional success.</p>
        <p><strong>Inclusive Excellence:</strong> Embed inclusivity across curriculum to prepare graduates for diverse workplaces.</p>
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
            "Dual Specialization (HR & Marketing)",
            "Mentorship from active practitioners",
            "Career Pathways Guidance",
            "Add-on Certifications (HR Analytics, SEO)"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Why BBA? */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Why BBA?</h4>
        <div className="text-sm text-muted-foreground space-y-2">
          <p><strong>Integrated Curriculum:</strong> Core business fundamentals + focused HR/Marketing courses.</p>
          <p><strong>Industry-Ready:</strong> Design HR policies and Marketing strategies.</p>
          <p><strong>Global Perspective:</strong> International case studies.</p>
        </div>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Lightbulb className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Objectives</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Develop comprehensive business competencies with dual specialization, fostering strategic thinking, leadership, and ethical responsibility in HR and Marketing.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Programme Outcomes</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Proficiency in Business Acumen, HR Expertise, Marketing Competence, Strategic Thinking, and Effective Communication.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Management Studies"
      tagline="Navigating the Future of Business."
      activeTab="management"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >

      {/* Skill Set */}
      <section id="skills">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Skill Set Acquired</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Strategic Thinking", desc: "Analyse complex business situations." },
            { title: "Leadership", desc: "Lead people and manage projects." },
            { title: "Communication", desc: "Proficiency in written and verbal business communication." },
            { title: "Analytical Ability", desc: "Interpret data and evaluate performance." },
            { title: "Marketing Orientation", desc: "Understand consumer behavior and sales processes." },
            { title: "HR Management", desc: "Expertise in recruitment and performance evaluation." }
          ].map((skill, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-slate-800">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
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

            <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Principles of Management</li><li>Market Analysis</li><li>Statistics for Business - I</li><li>Financial Accounting</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>HR Management</li><li>Indian Financial System</li><li>Statistics for Business - II</li><li>Corporate Accounting</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Cost Accounting</li><li>Organizational Behaviour</li><li>Principles Of Marketing</li><li>Entrepreneurship</li><li>Business Communication</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Business Law & Practice</li><li>Research Methodology</li><li>Financial Management</li><li>CRM</li><li>Technology for Business</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Production & Ops Management</li><li>Income Tax - I</li><li>Banking Law</li><li>Electives: Consumer Behaviour / HRD</li><li>Employability Skills</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Business Law</li><li>Income Tax - II</li><li>International Business</li><li>Electives: Advertising / Compensation Mgmt</li><li>GST / Event Mgmt + Internship</li></ul></CardContent></Card></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Activities */}
      <section id="activities">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-xl">Student Development</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Award className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground"><strong>Certificate Training:</strong> Industry specific training courses with NSDC certification.</span>
                </li>
                <li className="flex gap-3">
                  <Users className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground"><strong>Industry Visits:</strong> Exposure to established business houses.</span>
                </li>
                <li className="flex gap-3">
                  <Rocket className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground"><strong>Entrepreneurship Lectures:</strong> In collaboration with AICTE Cell to inspire innovation.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-xl">Career Opportunities</CardTitle></CardHeader>
            <CardContent>
              <h4 className="font-semibold text-sm mb-2">Roles for Graduates:</h4>
              <div className="flex flex-wrap gap-2">
                {["Digital Marketing Coordinator", "Brand Executive", "HR Executive", "Talent Acquisition Specialist", "Sales Executive", "Employer Branding Manager"].map((role, i) => (
                  <Badge key={i} variant="outline" className="text-xs">{role}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Faculty Section */}
      <section id="faculty">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Prof. Priya K", role: "Head of Dept", qual: "MBA, MMM, (Ph.D)", email: "priyamahesh09@gmail.com", phone: "9880213203" },
            { name: "Prof. Pavithra S", role: "Assistant Professor", qual: "M.Com", email: "pavithrabalaji036@gmail.com", phone: "9916844662" },
            { name: "Prof. Banuprakash H. V.", role: "Assistant Professor", qual: "M.Sc. Mathematics", email: "banuprakash1989@gmail.com", phone: "7259248824" },
            { name: "Prof. Akshaya Kumari M.", role: "Assistant Professor", qual: "M.Com, (Ph.D)", email: "akshaya199310@gmail.com", phone: "8296476934" }
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
                <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {faculty.email}</span>
                  <span className="flex items-center gap-1">Ph: {faculty.phone}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </DepartmentLayout>
  );
}
