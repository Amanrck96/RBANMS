import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
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
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-black">
        <p>The BBA program is designed to provide a strong foundation in business management while developing specialized expertise in Human Resources and Marketing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-6">
          <CardHeader><CardTitle className="text-2xl text-primary flex items-center justify-center gap-2"><Zap className="h-6 w-6" /> Key Features</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm text-black text-left">
            <p><strong>Integrated Curriculum:</strong> A balanced mix of core business fundamentals and focused courses in recruitment, employee relations, brand management, digital marketing, and consumer behavior.</p>
            <p><strong>Industry-Ready Skills:</strong> Learn to design HR policies that drive performance and create marketing strategies that engage diverse audiences.</p>
            <p><strong>Practical Exposure:</strong> Participate in live projects, internships with leading corporations, and workshops conducted by industry professionals.</p>
            <p><strong>Global Perspective:</strong> Gain international insights through case studies and exchange opportunities that highlight global HR and marketing practices.</p>
          </CardContent>
        </Card>

        <Card className="bg-white text-black border-2 border-primary flex flex-col p-6">
          <CardHeader><CardTitle className="text-xl text-primary font-bold mb-2">Career Opportunities</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">Graduates of the BBA program with dual specializations in Human Resources and Marketing are equipped to pursue diverse roles across corporate, consulting, and entrepreneurial environments.</p>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-primary">Marketing Roles</h4>
              <div className="flex flex-wrap gap-2">
                {["Digital Marketing Coordinator", "Brand / Product Executive", "Market Research Analyst", "Social Media Executive", "Advertising / Campaign Executive"].map((role, i) => (
                  <Badge key={i} variant="outline" className="text-xs text-black border-black">{role}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-primary">Human Resource Roles</h4>
              <div className="flex flex-wrap gap-2">
                {["Talent Acquisition Specialist", "HR Executive", "HR Business Partner (Entry Level)", "Training & Development Executive", "Employee Relations / HR Operations Executive"].map((role, i) => (
                  <Badge key={i} variant="outline" className="text-xs text-black border-black">{role}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1 text-primary">Cross-Functional Roles</h4>
              <div className="flex flex-wrap gap-2">
                {["Employer Branding Manager", "Sales & Business Development Executive", "Customer Success Executive", "HR Analytics / Marketing Analytics Associate"].map((role, i) => (
                  <Badge key={i} variant="outline" className="text-xs text-black border-black">{role}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 2. Skill Set
  const skillSetContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">SKILL-SET ACQUIRED</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <p className="mb-4 text-lg">The BBA program at RBANM’s First Grade College equips students with a comprehensive set of professional and managerial skills essential for success in today’s business landscape.</p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li><strong>Strategic Thinking and Problem-Solving:</strong> Ability to analyse complex business situations and make informed decisions.</li>
            <li><strong>Leadership and Team Management:</strong> Skills to lead people, manage projects, and foster collaboration in organizational settings.</li>
            <li><strong>Professional Communication:</strong> Proficiency in written and verbal communication suited to corporate and managerial contexts.</li>
            <li><strong>Analytical and Quantitative Ability:</strong> Competence in interpreting data, evaluating performance, and applying business analytics.</li>
            <li><strong>Marketing and Customer Orientation:</strong> Understanding of consumer behavior, sales processes, and digital marketing tools.</li>
            <li><strong>Human Resource Management:</strong> Expertise in recruitment, performance evaluation, employee engagement, and workplace relations.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 3. Highlights
  const highlightsContent = (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">HIGHLIGHTS</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {[
              "Dual Specialization: Earn a degree that combines expertise in Human Resources and Marketing—a valuable blend that enhances career versatility.",
              "Mentorship: Receive personalized academic and professional guidance from faculty who are active practitioners in their respective fields.",
              "Career Pathways: Prepare for roles such as Talent Acquisition Specialist, Employer Branding Manager, Digital Marketing Coordinator, and HR Business Partner.",
              "Certifications: Access optional add-on certifications in HR Analytics, Search Engine Optimization (SEO), and Social Media Marketing to strengthen employability."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-base text-black items-start">
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
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-white text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6 text-black">
        <Target className="h-8 w-8 stroke-[3px] text-primary" /> VISION & MISSION
      </h3>
      <div className="text-black italic text-lg space-y-6 leading-relaxed">
        <p className="font-semibold not-italic text-primary">We work within our Institutional Objectives of:</p>
        <div className="grid gap-4 text-left">
          <p><strong>Diversity & Inclusion:</strong> Cultivate a campus culture that celebrates diverse backgrounds, ideas, and perspectives, fostering innovation and collaboration.</p>
          <p><strong>Equality:</strong> Ensure equal access to academic resources, opportunities, and support services for every student, irrespective of gender, ethnicity, or socioeconomic status.</p>
          <p><strong>Career Opportunities:</strong> Strengthen industry partnerships and placement networks to translate academic achievement into meaningful professional success.</p>
          <p><strong>Inclusive Excellence:</strong> Embed inclusivity across curriculum design, faculty engagement, and student activities to prepare graduates who excel in diverse workplaces.</p>
        </div>
      </div>
    </div>
  );

  // 5. Paper Titles
  const matrixContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-8 text-black">COURSE MATRIX</h2>
      <div className="bg-white p-6 rounded-xl border-2 border-primary">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8 border border-primary/20">
            <TabsTrigger value="sem1" className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">Sem 1</TabsTrigger>
            <TabsTrigger value="sem2" className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">Sem 2</TabsTrigger>
            <TabsTrigger value="sem3" className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">Sem 3</TabsTrigger>
            <TabsTrigger value="sem4" className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">Sem 4</TabsTrigger>
            <TabsTrigger value="sem5" className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">Sem 5</TabsTrigger>
            <TabsTrigger value="sem6" className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">Sem 6</TabsTrigger>
          </TabsList>

          <TabsContent value="sem1"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>Principles of Management</li><li>Market Analysis for Business Decisions</li><li>Statistics for Business Decisions – I</li><li>Financial Accounting</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>Human Resource Management and Practices</li><li>Indian Financial System</li><li>Statistics for Business Decisions – II</li><li>Corporate Accounting</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>Cost Accounting</li><li>Organizational Behaviour</li><li>Statistics for Business Decisions</li><li>Principles Of Marketing</li><li>Entrepreneurship and start-up Ecosystem</li><li>Business Communication</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>Business Law & Practice</li><li>Research Methodology</li><li>Financial Management</li><li>Customer Relationship Management</li><li>Technology for Business</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>Production and Operations Management</li><li>Income Tax – I</li><li>Banking Law and Practice</li><li>Elective Group I – Consumer Behaviour & Market Research</li><li>Elective Group II – Human Resource Development</li><li>Employability Skills</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>Business Law</li><li>Income Tax - II</li><li>International Business</li><li>Elective Group I –Advertising & Media Management</li><li>Elective Group II – Compensation & Performance Management</li><li>Goods & Service Tax OR Event Management</li><li>Internship</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 6. Objectives
  const objContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">OBJECTIVES</h3>
          <p className="text-black leading-relaxed text-lg">
            The BBA program at RBANMs First Grade College under Bengaluru City University is designed to develop comprehensive business competencies with dual specialization in Human Resources and Marketing.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  // 7. Outcomes
  const outcomesContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Award className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">PROGRAMME OUTCOMES</h3>
          <ul className="text-black leading-relaxed text-sm text-left list-none space-y-3">
            <li><strong>PO1: Business Acumen</strong> – Apply foundational business knowledge to solve real‑world problems.</li>
            <li><strong>PO2: HR Expertise</strong> – Demonstrate proficiency in recruitment, talent management, employee relations, and performance management.</li>
            <li><strong>PO3: Marketing Competence</strong> – Develop and implement effective marketing strategies using digital tools and analytics.</li>
            <li><strong>PO4: Strategic Thinking</strong> – Integrate HR and marketing insights to formulate business strategies.</li>
            <li><strong>PO5: Communication & Collaboration</strong> – Communicate and collaborate effectively with diverse stakeholders.</li>
            <li><strong>PO6: Problem‑Solving & Adaptability</strong> – Analyze complex issues, think critically, and adapt to changing environments.</li>
            <li><strong>PO7: Ethics & Social Responsibility</strong> – Uphold ethical standards and demonstrate social responsibility in HR and marketing decisions.</li>
            <li><strong>PO8: Leadership & Teamwork</strong> – Lead cross‑functional teams and inspire individuals to achieve shared goals.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Activities
  const activitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">ACTIVITIES</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Award className="h-5 w-5 text-primary shrink-0" />
              <span className="text-black"><strong>Certificate Training Program:</strong> Many Industry specific training courses are conducted, with NSDC certification, to enhance employbility of graduating students.</span>
            </li>
            <li className="flex gap-3">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <span className="text-black"><strong>Industry Visits:</strong> Students are taken to established business houses to get a better feel of the profession that waits for them.</span>
            </li>
            <li className="flex gap-3">
              <TrendingUp className="h-5 w-5 text-primary shrink-0" />
              <span className="text-black"><strong>Educational Trips:</strong> help students explore innovation, product design, and the application of AI in modern technology</span>
            </li>
            <li className="flex gap-3">
              <Briefcase className="h-5 w-5 text-primary shrink-0" />
              <span className="text-black"><strong>Internship opportunities:</strong> are facilitated for students to gain hands-on experience in corporate environments.</span>
            </li>
            <li className="flex gap-3">
              <Rocket className="h-5 w-5 text-primary shrink-0" />
              <span className="text-black"><strong>Entrepreneurship and Innovation Lectures:</strong> organized in collaboration with the AICTE Cell, inspire students to develop entrepreneurial thinking and innovative business ideas.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 9. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">OUR FACULTY</h2>
      <div className="mb-6 relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/departments/management-faculty.jpg"
          alt="Department of Management Faculty"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Prof. Priya K", role: "Head of the Department – Management", qual: "MBA, MMM, (Ph.D)", email: "priyamahesh09@gmail.com", phone: "9880213203" },
          { name: "Prof. Pavithra S", role: "Assistant Professor", qual: "M.Com (Accounting & Taxation)", email: "pavithrabalaji036@gmail.com", phone: "9916844662" },
          { name: "Prof. Banuprakash H. V.", role: "Assistant Professor", qual: "M.Sc. Mathematics, B.Ed", email: "banuprakash1989@gmail.com", phone: "7259248824" },
          { name: "Prof. Akshaya Kumari M.", role: "Assistant Professor", qual: "M.Com, (Ph.D)", email: "akshaya199310@gmail.com", phone: "8296476934" }
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
              <p className="text-xs text-black mb-2 font-semibold">{faculty.qual}</p>
              <div className="flex flex-col items-center gap-1 text-xs text-black">
                <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {faculty.email}</span>
                <span className="flex items-center gap-1">Ph: {faculty.phone}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const sidebarContent = (
    <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
      <Image
        src="/images/departments/management-faculty.jpg"
        alt="Department of Management Faculty"
        fill
        className="object-cover"
        priority
      />
    </div>
  );

  const sections = [
    { id: "why-bba", label: "Why BBA?", content: whyBbaContent },
    { id: "skills", label: "Skill Set Acquired", content: skillSetContent },
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "matrix", label: "MATRIX", content: matrixContent },
    { id: "objectives", label: "Objectives", content: objContent },
    { id: "outcomes", label: "Programme Outcome", content: outcomesContent },
    { id: "activities", label: "Activities", content: activitiesContent },
    { id: "faculty", label: "Faculty Profile", content: facultyContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Management Studies"
      pageId="dept-management"
      tagline="Welcome to the Department of Management Studies. At RBANM’s First Grade College, the Department of Management blends the art of people management with the science of market dynamics. Bachelor of Business Administration (BBA) program, with dual specializations in Human Resources and Marketing, equips students with the skills to lead, innovate, and adapt in today’s evolving business environment. The curriculum integrates theoretical knowledge with practical exposure, ensuring graduates are prepared for both corporate and entrepreneurial roles. Through interactive learning, real-world projects, and mentorship from experienced faculty, students develop the confidence and competence required to excel in competitive global markets."
      sidebarContent={sidebarContent}
      sections={sections}
    />
  );
}
