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
      <Card className="bg-white border-2 border-primary">
        <CardHeader><CardTitle className="text-xl text-black">HIGHLIGHTS</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "Two, well-equipped Computer Labs with updated software and high-performance systems for the exclusive use of BCA students.",
              "Highly Qualified Faculty: A team of well-trained and qualified faculty members, proficient in teaching and mentoring students in both foundational and emerging technologies.",
              "Faculty Development Initiatives: Faculty have conducted Faculty Enrichment Programs to train peers on Microsoft Excel and Word, especially for AQAR documentation and other institutional work.",
              "Student-Centric Learning Environment: Supportive and motivating faculty committed to student success. Emphasis on both academic excellence and holistic development through extra-curricular activities and training programs.",
              "Internship opportunities that provide real-time exposure to IT environments and professional work culture.",
              "Regular coding practices, hackathons, technical quizzes, and project exhibitions to enhance problem-solving and creativity.",
              "Workshops, seminars, and guest lectures by industry experts to bridge the gap between academics and industry needs.",
              "Learning beyond Classroom: Talks and seminars by Industry experts, Add-on Courses addressing Industry needs, Industry Visits and Internships"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-black">
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
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-white text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6 text-black">
        <Target className="h-8 w-8 stroke-[3px] text-primary" /> VISION
      </h3>
      <div className="text-black italic text-lg space-y-4 leading-relaxed">
        <p>In keeping with the ideals of the college and our founder, of the Department of Languages attempts :</p>
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
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">FACILITIES</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-2 border-primary text-black">
          <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><Monitor className="h-5 w-5" /> Well-Equipped Computer Labs</CardTitle></CardHeader>
          <CardContent className="text-black space-y-2">
            <p>Two state-of-the-art computer laboratories with a total of 66 systems.</p>
            <p>Server-based infrastructure with two servers managing 25 systems each, plus an additional 16 standalone desktop systems.</p>
            <p>All systems are networked and maintained for optimal performance, providing a user-friendly environment for learning</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-2 border-primary text-black">
          <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><Cpu className="h-5 w-5" /> High-Performance Systems</CardTitle></CardHeader>
          <CardContent className="text-black">
            <p>New high-performance generation computers with i5 processors, 16 GB RAM, and 14th-generation configurations have been added. A total of 15 systems is now available for curriculum-based activities and student project work.</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 bg-white border-2 border-primary text-black">
          <CardHeader><CardTitle className="flex items-center gap-2 text-primary"><CodeIcon className="h-5 w-5" /> Software & Tools</CardTitle></CardHeader>
          <CardContent className="text-black">
            <p className="mb-2">Faculty members regularly update their knowledge and train students in:</p>
            <div className="flex flex-wrap gap-2">
              {["Power BI", "Jupyter Notebook", "Advanced Excel", "IDLE", "Code Blocks", "Visual Studio", "Mobile Android Studio"].map((tool, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary">{tool}</Badge>
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
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">COMPETENCY TRAINING</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6 space-y-4">
          <ul className="list-disc pl-5 text-black space-y-1 text-lg">
            <li>Programming Languages: C, C++, Java, Python</li>
            <li>Web Technologies: HTML, CSS, JavaScript, PHP</li>
            <li>Database Management: SQL, DBMS</li>
            <li>Computer Fundamentals: Operating Systems, Computer Networks</li>
            <li>Data Structures & Algorithms</li>
            <li>Machine Learning & Artificial Intelligence (AI Basics)</li>
            <li>Software Engineering & Software Testing</li>
            <li>Cloud Computing & Emerging Technologies</li>
            <li>Mobile Application Development</li>
            <li>Mini Projects & Final Year Major Project</li>
            <li>Skill Enhancement Courses (SEC) & Open Elective Courses (OEC)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 5. Certificate Courses
  const certCoursesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">CERTIFICATE COURSES</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-2 border-primary text-black">
          <CardHeader>
            <CardTitle className="text-primary">Web Development & Cloud DevOps</CardTitle>
            <CardDescription className="text-black font-semibold">1. In collaboration with SwipeGen</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-black">
            <p>A 30-hour Certification Course on Web Development and Cloud DevOps is being offered for BCA Final Year students. The course focuses on industry-ready skills, including modern web technologies, cloud deployment, DevOps practices, and hands-on project experience.</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-2 border-primary text-black">
          <CardHeader>
            <CardTitle className="text-primary">Web Development & Career Prep</CardTitle>
            <CardDescription className="text-black font-semibold">2. Foundation Course</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-black">
            <p>A 30-hour foundation course on Web Development and Career Preparation is being offered for BCA I and II Year students. This program emphasizes core web development skills and equips students with essential career readiness tools, such as communication, aptitude, and interview preparation.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 6. Course Matrix
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

          <TabsContent value="sem1">
            <Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 1</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5"><li>Discrete Structures</li><li>Problem Solving Techniques / Programming in C</li><li>Computer Architecture</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem2">
            <Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 2</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5"><li>Data Structures</li><li>Object-Oriented Programming (Java)</li><li>Operating Systems</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem3">
            <Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 3</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5"><li>Database Management Systems (DBMS)</li><li>Cyber Security</li><li>Python</li><li>Computer Networks</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem4">
            <Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 4</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5"><li>Artificial Intelligence</li><li>Design an analysis of Algorithm</li><li>Ethical Hacking</li><li>Internet Technologies</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem5">
            <Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 5 (NEP)</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5"><li>Artificial Intelligence</li><li>Data Analytics</li><li>Web Programming</li><li>Data Analytics Lab (practical)</li><li>Web Programming Lab (practical)</li></ul></CardContent></Card>
          </TabsContent>
          <TabsContent value="sem6">
            <Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 6 (NEP)</CardTitle></CardHeader>
              <CardContent><ul className="list-disc pl-5"><li>Machine Learning</li><li>Mobile Application Development</li><li>Project Work (major/core project)</li><li>Machine Learning Lab (practical)</li><li>Mobile Application Development Lab (practical)</li></ul></CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 7. Objectives
  const objContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">OBJECTIVES</h3>
          <ul className="text-black leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
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
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Award className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">PROGRAMME OUTCOME</h3>
          <ul className="text-black leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li><strong>Apply Knowledge:</strong> Demonstrate strong understanding of computer science fundamentals, programming, and software development principles.</li>
            <li><strong>Problem Solving & Critical Thinking:</strong> Analyse problems, design algorithms, and implement effective computing solutions.</li>
            <li><strong>Professional Competence:</strong> Develop, test, and deploy software applications using current tools and technologies.</li>
            <li><strong>Adapt to Emerging Technologies:</strong> Gain awareness and skills in AI, Cloud Computing, DevOps, Data Analytics, and Web/Mobile Development.</li>
            <li><strong>Ethics & Communication:</strong> Exhibit professional ethics, teamwork, communication skills, and lifelong learning.</li>
            <li><strong>Project & Research Skills:</strong> Execute projects, research work, and practical assignments demonstrating creativity and innovation.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 9. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">OUR FACULTY</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Moka Nanditha Varma", role: "HOD, Assistant Professor", qual: "B. Tech, M. Tech (pursuing PhD in Jain University)", email: "nanditha.moka@gmail.com" },
          { name: "Vijaya Lakshmi", role: "Assistant Professor", qual: "B.E, M. Tech", email: "vijayalakshmi.rbanmsfgc@gmail.com" },
          { name: "S Divya", role: "Assistant Professor", qual: "BCA, MCA (pursuing PhD in Vels University)", email: "dhivya.valli@gmail.com" },
          { name: "Shirley Nesamani", role: "Assistant Professor", qual: "MCA, Diploma in Health and Integrative Lifestyle", email: "rbanmsfgc.shirley@gmail.com" },
          { name: "Md Ziya Hakim", role: "Assistant Professor", qual: "BCA, MCA", email: "ziyahakim89@gmail.com" }
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
              <span className="flex items-center justify-center gap-1 text-xs text-black"><Code2 className="h-3 w-3" /> {faculty.email}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // 10. The BCA Forum
  const bcaForumContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">THE BCA FORUM</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2">Techtantra</h3>
          <p className="text-black">The event “Techtantra” is officially launched on 5th April, 2025. The launch sets the tone for the series of events to follow, with competitions in Gaming, Photography, Video Editing, and more.</p>
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
    { id: "forum", label: "BCA Forum", content: bcaForumContent }, // Renamed label? 'BCA Forum' in prompt
  ];

  return (
    <DepartmentLayout
      title="Department of Computer Applications"
      tagline="Welcome to the Department of Computer Applications. At the Department of Computer Applications, technology is not just a subject, it's a gateway to innovation. Here, our classrooms transform into dynamic learning spaces where concepts meet creativity, and every student becomes both a problem-solver and a creator. We believe studying Computer Applications is not merely about coding or completing assignments; it’s about shaping analytical minds that design, develop, question, and innovate. We nurture an inclusive and vibrant environment where every student’s curiosity is valued and encouraged. Beyond textbooks, we integrate hands-on lab sessions, coding workshops, project-based learning, industry interactions, technical quizzes, seminars, hackathons, and tech-driven events—making the study of Computer Applications as engaging, relevant, and future-focused as the digital world itself."
      sections={sections}
      ctaContent={<div className="text-center"><p className="font-bold">Contact:</p><p>rbanmsfgc.bca@gmail.com</p></div>}
    />
  );
}
