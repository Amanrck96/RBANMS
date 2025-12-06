import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Monitor,
  Cpu,
  Code,
  Globe,
  Database,
  Terminal,
  Server,
  Users,
  Award,
  BookOpen,
  Target,
  Mail,
  Lightbulb,
  Zap
} from 'lucide-react';

export default function ComputerApplicationsPage() {
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
        "To build technically skilled and industry-ready computer professionals. To cultivate innovative thinking, problem-solving abilities, and prepare students to adapt to emerging technologies in a rapidly evolving digital world."
      </p>
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
            "Two well-equipped Computer Labs (66 systems)",
            "Highly Qualified Faculty",
            "Faculty Development Initiatives",
            "Student-Centric Learning Environment",
            "Internship opportunities & Industry Interactions",
            "Regular coding practices & hackathons"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Competency Training */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Competency Training</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "C/C++", "Java", "Python", "HTML/CSS/JS", "PHP", "SQL", "DBMS", "OS", "Networks", "Data Structures", "ML/AI Basics", "Software Engg", "Cloud Computing"
          ].map((skill, i) => (
            <span key={i} className="bg-white border rounded px-2 py-1 text-xs font-semibold text-slate-600">{skill}</span>
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
          Build a strong foundation in computer science, develop software skills, enhance problem-solving, and prepare students for IT careers with hands-on projects.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Programme Outcome</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Demonstrate strong understanding of CS fundamentals, solve problems, develop software, adapt to emerging technologies, and exhibit professional ethics.
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
      {/* Facilities Section */}
      <section id="facilities">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Facilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Monitor className="h-6 w-6 text-primary" /> Computer Labs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground text-sm">
              <p>• Two state-of-the-art computer laboratories with a total of 66 systems.</p>
              <p>• Server-based infrastructure with two servers managing 25 systems each, plus an additional 16 standalone desktop systems.</p>
              <p>• New high-performance generation computers with i5 processors, 16 GB RAM, and 14th-generation configurations (15 systems).</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Terminal className="h-6 w-6 text-primary" /> Software & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground text-sm">
              <p>Faculty members regularly update their knowledge and train students in:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Power BI", "Jupyter Notebook", "Advanced Excel", "IDLE", "Code Blocks", "Visual Studio", "Android Studio"].map((t, i) => (
                  <Badge key={i} variant="outline">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificate Courses */}
      <section id="certificates">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Certificate Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Web Development & Cloud DevOps", desc: "Collaborative 30-hour course with SwipeGen for Final Year students. Focuses on modern web tech, cloud deployment, and DevOps practices." },
            { title: "Web Development & Career Prep", desc: "30-hour foundation course for I and II Year students. emphasizes core web development skills and career readiness tools like communication and interview prep." }
          ].map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.desc}</p>
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

            <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Discrete Structures</li><li>Problem Solving Techniques / Programming in C</li><li>Computer Architecture</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Data Structures</li><li>Object-Oriented Programming (Java)</li><li>Operating Systems</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Database Management Systems (DBMS)</li><li>Cyber Security</li><li>Python</li><li>Computer Networks</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Artificial Intelligence</li><li>Design an analysis of Algorithm</li><li>Ethical Hacking</li><li>Internet Technologies</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5 (NEP)</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Artificial Intelligence</li><li>Data Analytics & Lab</li><li>Web Programming & Lab</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6 (NEP)</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Machine Learning & Lab</li><li>Mobile Application Development & Lab</li><li>Project Work</li></ul></CardContent></Card></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Forum / Activities */}
      <section id="forum">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">The BCA Forum</h2>
        <Card className="bg-slate-900 border-slate-800 text-slate-100 p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center">
              <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-yellow-300">TECHTANTRA</h3>
              <p className="text-sm text-slate-400 mt-2">Official Launch: 5th April, 2025</p>
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <p className="text-lg text-slate-200">
                The launch sets the tone for the series of events to follow, with competitions in Gaming, Photography, Video Editing, and more.
              </p>
            </div>
          </div>
        </Card>
      </section>


      {/* Faculty Section */}
      <section id="faculty">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Moka Nanditha Varma", role: "HOD, Assistant Professor", qual: "B. Tech, M. Tech (Ph.D pursuing)", email: "nanditha.moka@gmail.com" },
            { name: "Vijaya Lakshmi", role: "Assistant Professor", qual: "B.E, M. Tech", email: "vijayalakshmi.rbanmsfgc@gmail.com" },
            { name: "S Divya", role: "Assistant Professor", qual: "BCA, MCA (Ph.D pursuing)", email: "dhivya.valli@gmail.com" },
            { name: "Shirley Nesamani", role: "Assistant Professor", qual: "MCA, Diploma in Health and Integrative Lifestyle", email: "rbanmsfgc.shirley@gmail.com" },
            { name: "Md Ziya Hakim", role: "Assistant Professor", qual: "BCA, MCA", email: "ziyahakim89@gmail.com" }
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
