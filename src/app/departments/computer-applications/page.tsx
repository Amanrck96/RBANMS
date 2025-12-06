import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Lightbulb,
  Award,
  Users,
  Code2,
} from 'lucide-react';

export default function ComputerApplicationsDeptPage() {
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
    <div id="vision" className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Lightbulb className="h-6 w-6 stroke-[3px]" /> Vision
      </h3>
      <div className="text-muted-foreground italic text-sm space-y-2">
        <p>In keeping with the ideals of the college and our founder, the Department attempts to:</p>
        <ul className="text-left space-y-1 list-disc pl-5">
          <li>Build technically skilled and industry-ready computer professionals.</li>
          <li>Cultivate innovative thinking, problem-solving abilities, and creativity in students.</li>
          <li>Prepare students to adapt to emerging technologies in a rapidly evolving digital world.</li>
          <li>Provide quality education in computer science through a balanced blend of theory and practical learning.</li>
        </ul>
      </div>
    </div>
  );

  const sidebarContent = (
    <>
      {/* Highlights Panel */}
      <div id="highlights" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Two, well-equipped Computer Labs",
            "Highly Qualified Faculty",
            "Faculty Enrichment Programs",
            "Student-Centric Learning Environment",
            "Internship opportunities",
            "Regular coding practices & hackathons",
            "Industry Visits and Internships"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div id="competency" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Competency Training</h4>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>C, C++, Java, Python, HTML, CSS, JavaScript, PHP, SQL, DBMS, AI Basics, Cloud Computing, Mobile App Development.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Contact</h4>
        <p className="text-sm text-muted-foreground">rbanmsfgc.bca@gmail.com</p>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card id="objectives" key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Lightbulb className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Objectives</h3>
        <ul className="text-slate-300 leading-relaxed text-sm text-left list-disc pl-5 space-y-2">
          <li>Build a strong foundation in computer science and programming.</li>
          <li>Develop skills in software development, web technologies, and databases.</li>
          <li>Enhance problem-solving, analytical, and logical thinking abilities.</li>
          <li>Prepare students for IT industry careers.</li>
          <li>Foster awareness of emerging technologies like AI, Cloud, and DevOps.</li>
        </ul>
      </CardContent>
    </Card>,
    <Card id="outcomes" key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Programme Outcomes</h3>
        <ul className="text-primary-foreground/90 leading-relaxed text-sm text-left list-disc pl-5 space-y-2">
          <li>Apply Knowledge of CS fundamentals.</li>
          <li>Problem Solving & Critical Thinking.</li>
          <li>Professional Competence in software development.</li>
          <li>Adapt to Emerging Technologies (AI, Cloud, DevOps).</li>
          <li>Ethics & Communication.</li>
          <li>Project & Research Skills.</li>
        </ul>
      </CardContent>
    </Card>
  ];

  const navItems = [
    { label: "Highlights", href: "#highlights" },
    { label: "Vision", href: "#vision" },
    { label: "Facilities", href: "#facilities" },
    { label: "Competency", href: "#competency" },
    { label: "Certificates", href: "#certificate-courses" },
    { label: "Matrix", href: "#matrix" },
    { label: "Objectives", href: "#objectives" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "Faculty", href: "#faculty" },
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
      navItems={navItems}
    >

      {/* Facilities */}
      <section id="facilities" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Facilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-xl">Computer Labs</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>Two state-of-the-art computer laboratories with a total of 66 systems.</p>
              <p>Server-based infrastructure with two servers.</p>
              <p>New high-performance generation computers with i5 processors, 16 GB RAM.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-xl">Software Training</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Faculty train students in:</p>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Jupyter Notebook", "Advanced Excel", "IDLE", "Code Blocks", "Visual Studio", "Android Studio"].map((tool, i) => (
                  <Badge key={i} variant="secondary">{tool}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificate Courses */}
      <section id="certificate-courses" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Certificate Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Web Development & Cloud DevOps</CardTitle>
              <CardDescription>In collaboration with SwipeGen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>For BCA Final Year students (30 hours).</p>
              <p>Focuses on modern web technologies, cloud deployment, DevOps practices, and hands-on project experience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web Development & Career Prep</CardTitle>
              <CardDescription>Foundation Course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>For BCA I and II Year students (30 hours).</p>
              <p>Emphasizes core web development skills and career readiness tools like communication and aptitude.</p>
            </CardContent>
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

            <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Discrete Structures</li><li>Problem Solving Techniques / Programming in C</li><li>Computer Architecture</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Data Structures</li><li>Object-Oriented Programming (Java)</li><li>Operating Systems</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Database Management Systems (DBMS)</li><li>Cyber Security</li><li>Python</li><li>Computer Networks</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Artificial Intelligence</li><li>Design and analysis of Algorithm</li><li>Ethical Hacking</li><li>Internet Technologies</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5 (NEP)</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Artificial Intelligence</li><li>Data Analytics</li><li>Web Programming</li><li>Labs: Data Analytics, Web Programming</li></ul></CardContent></Card></TabsContent>
            <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6 (NEP)</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Machine Learning</li><li>Mobile Application Development</li><li>Project Work</li><li>Labs: Machine Learning, Mobile App Development</li></ul></CardContent></Card></TabsContent>
          </Tabs>
        </div>
      </section>

      {/* The BCA Forum */}
      <section id="forum" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">The BCA Forum</h2>
        <Card>
          <CardHeader><CardTitle>Techtantra</CardTitle></CardHeader>
          <CardContent>
            <p className="text-muted-foreground">The event “Techtantra” is officially launched on 5th April, 2025. The launch sets the tone for the series of events to follow, with competitions in Gaming, Photography, Video Editing, and more.</p>
          </CardContent>
        </Card>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Moka Nanditha Varma", role: "HOD, Assistant Professor", qual: "B. Tech, M. Tech (pursuing PhD)", email: "nanditha.moka@gmail.com" },
            { name: "Vijaya Lakshmi", role: "Assistant Professor", qual: "B.E, M. Tech", email: "vijayalakshmi.rbanmsfgc@gmail.com" },
            { name: "S Divya", role: "Assistant Professor", qual: "BCA, MCA (pursuing PhD)", email: "dhivya.valli@gmail.com" },
            { name: "Shirley Nesamani", role: "Assistant Professor", qual: "MCA, Diploma", email: "rbanmsfgc.shirley@gmail.com" },
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
                <span className="flex items-center justify-center gap-1 text-xs text-muted-foreground"><Code2 className="h-3 w-3" /> {faculty.email}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </DepartmentLayout>
  );
}
