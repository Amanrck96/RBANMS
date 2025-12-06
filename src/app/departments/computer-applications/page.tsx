import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Users,
  Target,
  Mail,
  Lightbulb,
  Cpu,
  Globe,
  Rocket,
  Monitor,
  Heart,
  Briefcase,
  Server,
  Award
} from 'lucide-react';

export default function BCADepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        At the Department of Computer Applications, technology is not just a subject, it's a gateway to innovation. Here, our classrooms transform into dynamic learning spaces where concepts meet creativity, and every student becomes both a problem-solver and a creator. We believe studying Computer Applications is not merely about coding or completing assignments; it’s about shaping analytical minds that design, develop, question, and innovate.
      </p>
      <p>
        We nurture an inclusive and vibrant environment where every student’s curiosity is valued and encouraged.
      </p>
      <p>
        Beyond textbooks, we integrate hands-on lab sessions, coding workshops, project-based learning, industry interactions, technical quizzes, seminars, hackathons, and tech-driven events—making the study of Computer Applications as engaging, relevant, and future-focused as the digital world itself.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision
      </h3>
      <p className="text-muted-foreground italic">
        "To build technically skilled, innovative, and ethically grounded computer professionals ready to adapt to the rapidly evolving digital world."
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
          <span className="font-medium text-sm">rbanmsfgc.bca@gmail.com</span>
        </div>
      </div>

      {/* Highlights Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Well-equipped Labs (66+ Systems)",
            "Highly Qualified & Supportive Faculty",
            "Project-Based Learning & Hackathons",
            "Industry Exposure & Internships",
            "Add-on Courses (Web Dev, DevOps)"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Competency Training Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Competency Areas</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "C/C++", "Java", "Python", "Web Tech", "SQL", "Data Structures", "AI Basics", "Cloud Computing"
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
          Build a strong foundation in computer science, develop software development skills, enhance problem-solving, and prepare for IT careers with awareness of emerging technologies like AI/Cloud.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Rocket className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Program Outcomes</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Demonstrate strong understanding of CS fundamentals, design algorithms, develop software applications, adapt to emerging tech, and exhibit professional ethics.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Computer Applications"
      tagline="Technology is not just a subject, it's a gateway to innovation."
      activeTab="computer-applications"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Course Matrix */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Course Matrix (BCA)</h2>
        <div className="bg-slate-50 p-6 rounded-xl border">
          <Tabs defaultValue="sem1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8">
              <TabsTrigger value="sem1" className="py-2">Sem I</TabsTrigger>
              <TabsTrigger value="sem2" className="py-2">Sem II</TabsTrigger>
              <TabsTrigger value="sem3" className="py-2">Sem III</TabsTrigger>
              <TabsTrigger value="sem4" className="py-2">Sem IV</TabsTrigger>
              <TabsTrigger value="sem5" className="py-2">Sem V</TabsTrigger>
              <TabsTrigger value="sem6" className="py-2">Sem VI</TabsTrigger>
            </TabsList>

            {[
              { id: "sem1", title: "Semester I", items: ["Discrete Structures", "Problem Solving Techniques / Programming in C", "Computer Architecture"] },
              { id: "sem2", title: "Semester II", items: ["Data Structures", "Object-Oriented Programming (Java)", "Operating Systems"] },
              { id: "sem3", title: "Semester III", items: ["Database Management Systems (DBMS)", "Cyber Security", "Python", "Computer Networks"] },
              { id: "sem4", title: "Semester IV", items: ["Artificial Intelligence", "Design an analysis of Algorithm", "Ethical Hacking", "Internet Technologies"] },
              { id: "sem5", title: "Semester V (NEP)", items: ["Artificial Intelligence", "Data Analytics", "Web Programming", "Data Analytics Lab (practical)", "Web Programming Lab (practical)"] },
              { id: "sem6", title: "Semester VI (NEP)", items: ["Machine Learning", "Mobile Application Development", "Project Work (major/core project)", "Machine Learning Lab (practical)", "Mobile Application Development Lab (practical)"] }
            ].map((sem) => (
              <TabsContent key={sem.id} value={sem.id}>
                <Card>
                  <CardHeader><CardTitle>{sem.title}</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {sem.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded border">
                          <Code className="h-4 w-4 text-primary" /> {item}
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

      {/* Certificate Courses & Facilities */}
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Certificate Courses</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Web Development & Cloud DevOps</CardTitle>
                <CardDescription>Collab with SwipeGen (Final Year)</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A 30-hour course focusing on industry-ready skills: modern web technologies, cloud deployment, DevOps practices, and hands-on projects.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Web Development Foundation</CardTitle>
                <CardDescription>Foundation Course (1st & 2nd Year)</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A 30-hour foundation course emphasizing core web development skills and career readiness tools like communication and aptitude.
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Facilities</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2 text-xl"><Server className="h-5 w-5 text-primary" /> Laboratories</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Two state-of-the-art labs with 66+ systems.</p>
                <p>High-performance i5/14th-gen systems for projects.</p>
                <p>Networked, server-based infrastructure.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2 text-xl"><Code className="h-5 w-5 text-primary" /> Software Training</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Faculty train students in Power BI, Jupyter Notebook, Advanced Excel, IDLE, Code Blocks, Visual Studio, and Android Studio.
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Techtantra */}
      <section className="bg-slate-900 text-white p-8 rounded-xl text-center">
        <Badge className="bg-purple-600 hover:bg-purple-500 mb-4 px-4 py-1">THE BCA FORUM</Badge>
        <h2 className="text-4xl font-bold mb-4">Techtantra</h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Official launch on 5th April, 2025. A series of events with competitions in Gaming, Photography, Video Editing, and more.
        </p>
      </section>

      {/* Faculty Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Moka Nanditha Varma", qual: "B. Tech, M. Tech (Ph.D)", role: "HOD, Assistant Professor", email: "nanditha.moka@gmail.com" },
            { name: "Vijaya Lakshmi", qual: "B.E, M. Tech", role: "Assistant Professor", email: "vijayalakshmi.rbanmsfgc@gmail.com" },
            { name: "S Divya", qual: "BCA, MCA (Ph.D)", role: "Assistant Professor", email: "dhivya.valli@gmail.com" },
            { name: "Shirley Nesamani", qual: "MCA, Diploma in Health", role: "Assistant Professor", email: "rbanmsfgc.shirley@gmail.com" },
            { name: "Md Ziya Hakim", qual: "BCA, MCA", role: "Assistant Professor", email: "ziyahakim89@gmail.com" }
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
                <div className="flex justify-center gap-1 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" /> {faculty.email}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </DepartmentLayout>
  );
}
