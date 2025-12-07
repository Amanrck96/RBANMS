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
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Welcome to the Dept. of Computer Applications</h2>
        <p>
          Established in 2001, the Department of Computer Applications (BCA) at RBANM’s First Grade College has been a hub for grooming tech-savvy professionals for over two decades.
        </p>
        <p>
          We don't just teach code; we teach how to think through problems. Our curriculum is designed to build a strong foundation in computer science while keeping pace with rapid industry changes. From programming basics to advanced web development, we cover it all.
        </p>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-xl">Department Highlights</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "Modern Industry-Aligned Curriculum (NEP 2020 Compliant)",
              "Hands-on Practical Sessions (Labs)",
              "Certificate Courses in emerging tech (Python, Web Dev, etc.)",
              "Competency Training (Soft skills & Aptitude)",
              "Experienced Faculty",
              "Placement Support"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-muted-foreground">
                <span className="text-primary font-bold">•</span> {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h4 className="text-xl font-bold mb-4">Programme Offered</h4>
        <Badge className="text-lg py-2 px-6">BCA (Bachelor of Computer Applications)</Badge>
      </div>
    </div>
  );

  // 2. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        <Target className="h-8 w-8 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-lg space-y-4 leading-relaxed">
        <p>In keeping with the ideals of the college and our founder, our attempt is to:</p>
        <ul className="text-left space-y-2 list-disc pl-8 inline-block">
          <li>Empower students with strong technical and analytical skills.</li>
          <li>Foster creativity and innovation in software development.</li>
          <li>Bridge the gap between academic learning and IT industry requirements.</li>
          <li>Develop ethical and socially responsible IT professionals.</li>
          <li>Promote research and continuous learning.</li>
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
          <CardHeader><CardTitle className="flex items-center gap-2"><Monitor className="h-5 w-5" /> Computer Labs</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            Two well-equipped laboratories with 60 advanced systems, high-speed internet, and latest software tools for programming and design.
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Server className="h-5 w-5" /> Digital Library</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            Access to e-books, journals, and technical resources to support academic projects and research.
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5" /> ICT Classrooms</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            Projector-enabled classrooms for interactive learning and technical demonstrations.
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
        <CardContent className="pt-6 space-y-4 text-muted-foreground text-lg">
          <p>We believe in holistic development. Along with technical skills, we provide focused training to enhance employability:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Soft Skills:</strong> Communication, Teamwork, Leadership.</li>
            <li><strong>Aptitude Training:</strong> Logical reasoning, quantitative ability.</li>
            <li><strong>Group Discussions:</strong> Building confidence and clarity of thought.</li>
            <li><strong>Mock Interviews:</strong> Preparing for the real recruitment process.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 5. Certificate Courses
  const certCoursesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Certificate Courses</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>Python Programming</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">Foundations of Python, data structures, and basic scripting.</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Web Development</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">HTML, CSS, JavaScript basics for building static websites.</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>AI & ML Basics</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">Introduction to Artificial Intelligence and Machine Learning concepts.</CardContent>
        </Card>
      </div>
    </div>
  );

  // 6. Course Matrix
  const matrixContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 mb-8">Course Matrix (BCA)</h2>
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
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Fundamentals of Computers</li><li>Problem Solving using C</li><li>Mathematical Foundation</li><li>Discrete Structures</li><li>C Programming Lab</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem2">
            <Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Data Structures using C</li><li>Object Oriented Concepts using Java</li><li>Database Management Systems</li><li>Computer Architecture</li><li>Data Structures Lab</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem3">
            <Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Operating Systems</li><li>Python Programming</li><li>Computer Networks</li><li>Software Engineering</li><li>Python Lab</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem4">
            <Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Web Programming</li><li>Design and Analysis of Algorithms</li><li>Artificial Intelligence</li><li>Probabilty and Statistics</li><li>Web Lab</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem5">
            <Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Cloud Computing</li><li>Machine Learning</li><li>Mini Project</li><li>Elective 1 (IoT / Data Mining)</li><li>Elective 2 (Cyber Security / Digital Marketing)</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem6">
            <Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Major Project</li><li>Mobile Application Development</li><li>Full Stack Development</li><li>Internship</li></ul></CardContent></Card>
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
          <h3 className="text-3xl font-bold">Course Objectives</h3>
          <ul className="text-slate-300 leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li>To provide a strong foundation in computer fundamentals.</li>
            <li>To develop problem-solving interaction through programming.</li>
            <li>To expose students to modern software tools and technologies.</li>
            <li>To prepare students for higher studies (MCA, M.Sc.) and IT careers.</li>
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
            <li>Proficiency in programming languages (C, Java, Python).</li>
            <li>Ability to design and develop software applications.</li>
            <li>Understanding of databases, networking, and OS.</li>
            <li>Critical thinking and analytical skills.</li>
            <li>Readiness for the IT industry and entrepreneurship.</li>
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
          { name: "Ms. Ramya.A", role: "Head of Dept", qual: "MCA, M.Phil, (Ph.d)", email: "hodbcarbanms@gmail.com" },
          { name: "Ms. Deepa H.K", role: "Assistant Professor", qual: "M.Sc(Comp.), M.Tech(IT)", email: "deepahk28@gmail.com" },
          { name: "Mr. Chandrashekar.B", role: "Assistant Professor", qual: "MCA, M.Tech", email: "chandrashekar.b1990@gmail.com" },
          { name: "Ms. Swetha M", role: "Assistant Professor", qual: "MCA", email: "swethagowda1019@gmail.com" },
          { name: "Mrs. Aruna Devi", role: "Assistant Professor", qual: "MCA", email: "arunadevik123@gmail.com" }
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
  ];

  return (
    <DepartmentLayout
      title="Department of Computer Applications"
      tagline="Grooming tech-savvy professionals since 2001."
      sections={sections}
    />
  );
}
