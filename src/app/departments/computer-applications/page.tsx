import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Monitor,
  Cpu,
  Globe,
  Code as CodeIcon,
  Server,
  Terminal,
  Users,
  Lightbulb,
  Target,
  Award,
  Code2
} from 'lucide-react';

export default function ComputerApplicationsDeptPage() {

  // 1. Highlights
  const highlightsContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Welcome to the Department of Computer Applications</h2>
        <p>
          We believe studying Computer Applications is not merely about coding or completing assignments; it’s about shaping analytical minds that design, develop, question, and innovate.
        </p>
        <p>
          We nurture an inclusive and vibrant environment where every student’s curiosity is valued and encouraged.
        </p>
        <p>
          Beyond textbooks, we integrate hands-on lab sessions, coding workshops, project-based learning, industry interactions, technical quizzes, seminars, hackathons, and tech-driven events—making the study of Computer Applications as engaging, relevant, and future-focused as the digital world itself.
        </p>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-xl">Highlights</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "Two, well-equipped Computer Labs with updated software and high-performance systems for the exclusive use of BCA students.",
              "Highly Qualified Faculty proficient in teaching and mentoring students in both foundational and emerging technologies.",
              "Faculty Development Initiatives: Faculty Enrichment Programs to train peers on Microsoft Excel and Word.",
              "Student-Centric Learning Environment: Supportive faculty, emphasis on holistic development.",
              "Internship opportunities providing real-time exposure to IT environments.",
              "Regular coding practices, hackathons, technical quizzes, and project exhibitions.",
              "Workshops, seminars, and guest lectures by industry experts.",
              "Learning beyond Classroom: Talks by Industry experts, Add-on Courses, Industry Visits."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-muted-foreground">
                <span className="text-primary font-bold">•</span> {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 2. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        <Target className="h-8 w-8 stroke-[3px]" /> Vision
      </h3>
      <div className="text-muted-foreground italic text-lg space-y-4 leading-relaxed">
        <p>In keeping with the ideals of the college and our founder, the Department attempts to:</p>
        <ul className="text-left space-y-2 list-disc pl-8 inline-block">
          <li>Build technically skilled and industry-ready computer professionals.</li>
          <li>Cultivate innovative thinking, problem-solving abilities, and creativity in students.</li>
          <li>Prepare students to adapt to emerging technologies in a rapidly evolving digital world.</li>
          <li>Provide quality education in computer science through a balanced blend of theory and practical learning.</li>
        </ul>
      </div>
    </div>
  );

  // 3. Facilities
  const facilitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Facilities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Monitor className="h-5 w-5" /> Well-Equipped Computer Labs</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground space-y-2">
            <p>Two state-of-the-art computer laboratories with a total of 66 systems.</p>
            <p>Server-based infrastructure with two servers managing 25 systems each, plus 16 standalone systems.</p>
            <p>All systems network and maintained for optimal performance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5" /> High-Performance Systems</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            <p>New high-performance generation computers with i5 processors, 16 GB RAM, and 14th-generation configurations. Total of 15 systems available for project work.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader><CardTitle className="flex items-center gap-2"><CodeIcon className="h-5 w-5" /> Software & Tools</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            <p className="mb-2">Faculty members regularly update their knowledge and train students in:</p>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "Jupyter Notebook", "Advanced Excel", "IDLE", "Code Blocks", "Visual Studio", "Mobile Android Studio"].map((tool, i) => (
                <Badge key={i} variant="secondary">{tool}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 4. Competency Training
  const compTrainingContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Competency Training</h2>
      <Card className="bg-slate-50 border-slate-200">
        <CardContent className="pt-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Programming & Web</h4>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                <li>Languages: C, C++, Java, Python</li>
                <li>Web: HTML, CSS, JavaScript, PHP</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Core & Data</h4>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                <li>Database: SQL, DBMS</li>
                <li>Fundamentals: OS, Computer Networks</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Advanced Tech</h4>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                <li>Machine Learning & AI Basics</li>
                <li>Cloud Computing & Emerging Tech</li>
                <li>Mobile App Development</li>
                <li>Software Engineering & Testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Projects & Electives</h4>
              <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                <li>Mini Projects & Major Project</li>
                <li>Skill Enhancement (SEC) & Open Electives (OEC)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 5. Certificate Courses
  const certCoursesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Certificate Courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Web Development & Cloud DevOps</CardTitle>
            <CardDescription>In collaboration with SwipeGen</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p><strong>For BCA Final Year.</strong> 30-hour Certification Course focusing on industry-ready skills: modern web technologies, cloud deployment, DevOps practices, and hands-on project experience.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Web Development & Career Prep</CardTitle>
            <CardDescription>Foundation Course</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p><strong>For BCA I and II Year.</strong> 30-hour foundation course emphasizing core web development skills and career readiness tools like communication, aptitude, and interview preparation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 6. Course Matrix
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

          <TabsContent value="sem1">
            <Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Discrete Structures</li><li>Problem Solving Techniques / Programming in C</li><li>Computer Architecture</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem2">
            <Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Data Structures</li><li>Object-Oriented Programming (Java)</li><li>Operating Systems</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem3">
            <Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Database Management Systems (DBMS)</li><li>Cyber Security</li><li>Python</li><li>Computer Networks</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem4">
            <Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Artificial Intelligence</li><li>Design an analysis of Algorithm</li><li>Ethical Hacking</li><li>Internet Technologies</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem5">
            <Card><CardHeader><CardTitle>Semester 5 (NEP)</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Artificial Intelligence</li><li>Data Analytics</li><li>Web Programming</li><li>Data Analytics Lab</li><li>Web Programming Lab</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem6">
            <Card><CardHeader><CardTitle>Semester 6 (NEP)</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Machine Learning</li><li>Mobile Application Development</li><li>Project Work (major/core project)</li><li>Machine Learning Lab</li><li>Mobile Application Development Lab</li></ul></CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 7. Objectives
  const objContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-yellow-400" />
          <h3 className="text-3xl font-bold">Objectives</h3>
          <ul className="text-slate-300 leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li>Build a strong foundation in computer science and programming.</li>
            <li>Develop skills in software development, web technologies, and databases.</li>
            <li>Enhance problem-solving, analytical, and logical thinking abilities.</li>
            <li>Prepare students for IT industry careers with hands-on projects and training.</li>
            <li>Foster awareness of emerging technologies like AI, Cloud, and DevOps.</li>
            <li>Promote professional ethics, teamwork, and lifelong learning.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Outcomes
  const outcomesContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Award className="h-16 w-16 mx-auto text-white" />
          <h3 className="text-3xl font-bold">Programme Outcome</h3>
          <ul className="text-primary-foreground/90 leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li><strong>Apply Knowledge:</strong> Understand mechanics of CS and software development.</li>
            <li><strong>Problem Solving & Critical Thinking:</strong> Analyse problems, design algorithms.</li>
            <li><strong>Professional Competence:</strong> Develop, test, and deploy software applications.</li>
            <li><strong>Adapt to Emerging Technologies:</strong> Awareness of AI, Cloud, DevOps.</li>
            <li><strong>Ethics & Communication:</strong> Exhibit professional ethics and teamwork.</li>
            <li><strong>Project & Research Skills:</strong> Execute projects demonstrating creativity.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 9. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Our Faculty</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Moka Nanditha Varma", role: "HOD, Assistant Professor", qual: "B. Tech, M. Tech (pursuing PhD)", email: "nanditha.moka@gmail.com" },
          { name: "Vijaya Lakshmi", role: "Assistant Professor", qual: "B.E, M. Tech", email: "vijayalakshmi.rbanmsfgc@gmail.com" },
          { name: "S Divya", role: "Assistant Professor", qual: "BCA, MCA (pursuing PhD)", email: "dhivya.valli@gmail.com" },
          { name: "Shirley Nesamani", role: "Assistant Professor", qual: "MCA, Dip Health & Lifestyle", email: "rbanmsfgc.shirley@gmail.com" },
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
    </div>
  );

  // 10. The BCA Forum
  const bcaForumContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">The BCA Forum</h2>
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2">Techtantra</h3>
          <p className="text-muted-foreground">The event “Techtantra” is officially launched on 5th April, 2025. The launch sets the tone for the series of events to follow, with competitions in Gaming, Photography, Video Editing, and more.</p>
        </CardContent>
      </Card>
    </div>
  );

  const sections = [
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "facilities", label: "Facilities", content: facilitiesContent },
    { id: "competency-training", label: "Competency Training", content: compTrainingContent },
    { id: "certificate-courses", label: "Certificate Courses", content: certCoursesContent },
    { id: "matrix", label: "Course Matrix", content: matrixContent },
    { id: "objectives", label: "Objectives", content: objContent },
    { id: "outcomes", label: "Programme Outcome", content: outcomesContent },
    { id: "faculty", label: "Faculty Profile", content: facultyContent },
    { id: "forum", label: "BCA Forum", content: bcaForumContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Computer Applications"
      tagline="Welcome to our department, a vibrant community where every voice is heard and every story matters. We believe that learning is a shared journey of discovery, where diverse perspectives come together to spark creativity and understanding. Whether you are here to master a new skill, explore rich traditions, or shape your future career, you will find a supportive environment that nurtures your growth and inspires you to reach your full potential."
      sections={sections}
      ctaContent={<div className="text-center"><p className="font-bold">Contact:</p><p>rbanmsfgc.bca@gmail.com</p></div>}
    />
  );
}
