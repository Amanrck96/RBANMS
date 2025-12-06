import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Briefcase,
  Users,
  Globe,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Rocket,
  Mail,
  Phone
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
      <p className="text-muted-foreground italic">
        "To cultivate a campus culture that celebrates diverse backgrounds, ensures equal access, and strengthens industry partnerships to translate academic achievement into meaningful professional success."
      </p>
      <div className="pt-2">
      </div>
    </div>
  );

  const sidebarContent = (
    <>
      {/* Contact Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Contact</h4>
        <div className="flex items-center gap-3 text-muted-foreground p-3 bg-white rounded shadow-sm">
          <Mail className="h-5 w-5 text-primary" />
          <span className="font-medium text-sm">priyamahesh09@gmail.com</span>
        </div>
      </div>

      {/* Highlights Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Dual Specialization (HR & Marketing)",
            "Integrated Curriculum & Practical Exposure",
            "Industry-Ready Skills",
            "Mentorship from Practitioners",
            "Certifications (HR Analytics, Digital Mktg)"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Skill Set Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Skill Set Acquired</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Strategic Thinking", "Leadership", "Communication", "Data Analysis", "Consumer Behavior", "Recruitment"
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
        <h3 className="text-2xl font-bold">Objectives</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Develop comprehensive business competencies with dual specialization in Human Resources and Marketing. Apply foundational knowledge to solve real-world problems.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Rocket className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Career Opportunities</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Talent Acquisition, Brand Management, Digital Marketing, HR Business Partner, Sales & Business Development.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Management Studies"
      tagline="Blending the Art of People Management with the Science of Market Dynamics."
      activeTab="management"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Course Matrix */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Course Matrix (BBA)</h2>
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

            {[
              { id: "sem1", title: "Semester 1", items: ["Principles of Management", "Market Analysis for Business Decisions", "Statistics for Business Decisions – I", "Financial Accounting"] },
              { id: "sem2", title: "Semester 2", items: ["Human Resource Management and Practices", "Indian Financial System", "Statistics for Business Decisions – II", "Corporate Accounting"] },
              { id: "sem3", title: "Semester 3", items: ["Cost Accounting", "Organizational Behaviour", "Statistics for Business Decisions", "Principles Of Marketing", "Entrepreneurship and start-up Ecosystem", "Business Communication"] },
              { id: "sem4", title: "Semester 4", items: ["Business Law & Practice", "Research Methodology", "Financial Management", "Customer Relationship Management", "Technology for Business"] },
              { id: "sem5", title: "Semester 5", items: ["Production and Operations Management", "Income Tax – I", "Banking Law and Practice", "Elective Group I – Consumer Behaviour & Market Research", "Elective Group II – Human Resource Development", "Employability Skills"] },
              { id: "sem6", title: "Semester 6", items: ["Business Law", "Income Tax - II", "International Business", "Elective Group I – Advertising & Media Management", "Elective Group II – Compensation & Performance Management", "Goods & Service Tax OR Event Management", "Internship"] }
            ].map((sem) => (
              <TabsContent key={sem.id} value={sem.id}>
                <Card>
                  <CardHeader><CardTitle>{sem.title}</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {sem.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded border">
                          <Briefcase className="h-4 w-4 text-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Activities */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Activities</h2>
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

      {/* Faculty Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            { name: "Prof. Priya K", role: "Head of the Department", email: "priyamahesh09@gmail.com", phone: "9880213203", desc: "Over 27 years of teaching experience. Holds an MBA in Finance and Master’s in Marketing Management. Currently pursuing Ph.D." },
            { name: "Prof. Pavithra S", role: "Assistant Professor", email: "pavithrabalaji036@gmail.com", phone: "9916844662", desc: "Over 16 years of teaching experience. M.Com in Accounting and Taxation. IQAC Coordinator." },
            { name: "Prof. Banuprakash H. V.", role: "Assistant Professor", email: "banuprakash1989@gmail.com", phone: "7259248824", desc: "M.Sc. in Mathematics. Associated since 2015. Associate NCC Officer and Exam Committee In-Charge." },
            { name: "Prof. Akshaya Kumari M.", role: "Assistant Professor", email: "akshaya199310@gmail.com", phone: "8296476934", desc: "M.Com (Accounting and Taxation), pursuing Ph.D. Over 10 years of experience. Active in research and curriculum development." }
          ].map((faculty, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{faculty.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{faculty.role}</CardDescription>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      {faculty.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {faculty.email}</span>}
                      {faculty.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {faculty.phone}</span>}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{faculty.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </DepartmentLayout>
  );
}
