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
  Rocket,
  Mail,
  Zap
} from 'lucide-react';

export default function ManagementDepartmentPage() {

  // 1. Why BBA? (Welcome + Why)
  const whyBbaContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Welcome to the Department of Management Studies</h2>
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

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
          <CardHeader><CardTitle className="text-2xl text-yellow-400 flex items-center justify-center gap-2"><Zap className="h-6 w-6" /> Why BBA?</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300 text-left">
            <p><strong>Integrated Curriculum:</strong> Core business fundamentals + focused courses (recruitment, branding, consumer behavior).</p>
            <p><strong>Industry-Ready Skills:</strong> Design HR policies and Marketing strategies.</p>
            <p><strong>Practical Exposure:</strong> Live projects, internships, workshops.</p>
            <p><strong>Global Perspective:</strong> International insights and case studies.</p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2">Career Options</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-1 text-primary">Marketing Roles</h4>
              <div className="flex flex-wrap gap-2">
                {["Digital Marketing Coordinator", "Brand Executive", "Market Research Analyst"].map((role, i) => (
                  <Badge key={i} variant="outline" className="text-xs">{role}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-primary">HR Roles</h4>
              <div className="flex flex-wrap gap-2">
                {["Talent Acquisition Specialist", "HR Executive", "Types of Training"].map((role, i) => (
                  <Badge key={i} variant="outline" className="text-xs">{role}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. Skill Set
  const skillSetContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Skill Set Acquired</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Strategic Thinking", desc: "Ability to analyse complex business situations and make informed decisions." },
          { title: "Leadership & Team Management", desc: "Skills to lead people, manage projects, and foster collaboration." },
          { title: "Professional Communication", desc: "Proficiency in written and verbal communication suited to corporate contexts." },
          { title: "Analytical Ability", desc: "Competence in interpreting data, evaluating performance, and applying business analytics." },
          { title: "Marketing & Customer Orientation", desc: "Understanding of consumer behavior, sales processes, and digital marketing." },
          { title: "Human Resource Management", desc: "Expertise in recruitment, performance evaluation, employee engagement." }
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
    </div>
  );

  // 3. Highlights
  const highlightsContent = (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Department Highlights</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {[
              "Dual Specialization (HR & Marketing)",
              "Mentorship from active practitioners",
              "Career Pathways: Talent Acquisition, Brand Management, etc.",
              "Certifications: HR Analytics, SEO, Social Media Marketing"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-base text-muted-foreground items-start">
                <span className="text-primary font-bold text-xl">•</span> {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 4. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        <Target className="h-8 w-8 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-lg space-y-6 leading-relaxed">
        <p className="font-semibold not-italic text-foreground">We work within our Institutional Objectives of:</p>
        <div className="grid gap-4 text-left">
          <p><strong>Diversity & Inclusion:</strong> Cultivate a campus culture that celebrates diverse backgrounds, ideas, and perspectives, fostering innovation and collaboration.</p>
          <p><strong>Equality:</strong> Ensure equal access to academic resources, opportunities, and support services for every student, irrespective of gender, ethnicity, or socioeconomic status.</p>
          <p><strong>Career Opportunities:</strong> Strengthen industry partnerships and placement networks to translate academic achievement into meaningful professional success.</p>
          <p><strong>Inclusive Excellence:</strong> Embed inclusivity across curriculum design, faculty engagement, and student activities to prepare graduates who excel in diverse workplaces.</p>
        </div>
      </div>
    </div>
  );

  // 5. Course Matrix
  const matrixContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-8">Course Matrix</h2>
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

          <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Principles of Management</li><li>Market Analysis for Business Decisions</li><li>Statistics for Business Decisions – I</li><li>Financial Accounting</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Human Resource Management and Practices</li><li>Indian Financial System</li><li>Statistics for Business Decisions – II</li><li>Corporate Accounting</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Cost Accounting</li><li>Organizational Behaviour</li><li>Statistics for Business Decisions</li><li>Principles Of Marketing</li><li>Entrepreneurship and start-up Ecosystem</li><li>Business Communication</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Business Law & Practice</li><li>Research Methodology</li><li>Financial Management</li><li>Customer Relationship Management</li><li>Technology for Business</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Production and Operations Management</li><li>Income Tax – I</li><li>Banking Law and Practice</li><li>Elective 1: Consumer Behaviour & Market Research</li><li>Elective 2: Human Resource Development</li><li>Employability Skills</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Business Law</li><li>Income Tax - II</li><li>International Business</li><li>Elective 1: Advertising & Media Management</li><li>Elective 2: Compensation & Performance Management</li><li>GST OR Event Management</li><li>Internship</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 6. Objectives
  const objContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-yellow-400" />
          <h3 className="text-3xl font-bold">Objectives</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            The BBA program at RBANMs First Grade College under Bengaluru City University is designed to develop comprehensive business competencies with dual specialization in Human Resources and Marketing.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  // 7. Outcomes
  const outcomesContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Award className="h-16 w-16 mx-auto text-white" />
          <h3 className="text-3xl font-bold">Programme Outcome</h3>
          <ul className="text-primary-foreground/90 leading-relaxed text-lg text-center list-none space-y-2">
            <li>PO1: Business Acumen</li>
            <li>PO2: HR Expertise</li>
            <li>PO3: Marketing Competence</li>
            <li>PO4: Strategic Thinking</li>
            <li>PO5: Communication & Collaboration</li>
            <li>PO6: Problem-Solving & Adaptability</li>
            <li>PO7: Ethics & Social Responsibility</li>
            <li>PO8: Leadership & Teamwork</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Activities
  const activitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Activities</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Award className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground"><strong>Certificate Training Program:</strong> Industry specific training courses with NSDC certification.</span>
            </li>
            <li className="flex gap-3">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground"><strong>Industry Visits:</strong> To get a better feel of the profession.</span>
            </li>
            <li className="flex gap-3">
              <TrendingUp className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground"><strong>Educational Trips:</strong> Exploring innovation and AI applications.</span>
            </li>
            <li className="flex gap-3">
              <Briefcase className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground"><strong>Internship opportunities:</strong> Hands-on experience in corporate environments.</span>
            </li>
            <li className="flex gap-3">
              <Rocket className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground"><strong>Entrepreneurship Lectures:</strong> In collaboration with AICTE Cell.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 9. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Our Faculty</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Prof. Priya K", role: "Head of Dept", qual: "MBA, MMM, (Ph.D)", email: "priyamahesh09@gmail.com", phone: "9880213203" },
          { name: "Prof. Pavithra S", role: "Assistant Professor", qual: "M.Com (Accounting & Taxation)", email: "pavithrabalaji036@gmail.com", phone: "9916844662" },
          { name: "Prof. Banuprakash H. V.", role: "Assistant Professor", qual: "M.Sc. Mathematics, B.Ed", email: "banuprakash1989@gmail.com", phone: "7259248824" },
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
    </div>
  );

  const sections = [
    { id: "why-bba", label: "Why BBA?", content: whyBbaContent },
    { id: "skills", label: "Skill Set Acquired", content: skillSetContent },
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "matrix", label: "Course Matrix", content: matrixContent },
    { id: "objectives", label: "Objectives", content: objContent },
    { id: "outcomes", label: "Programme Outcome", content: outcomesContent },
    { id: "activities", label: "Activities", content: activitiesContent },
    { id: "faculty", label: "Faculty Profile", content: facultyContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Management Studies"
      tagline="Blends the art of people management with the science of market dynamics."
      sections={sections}
    />
  );
}
