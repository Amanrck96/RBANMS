import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen,
  Code,
  Cpu,
  Globe,
  GraduationCap,
  Laptop,
  Lightbulb,
  Users,
  Target,
  Rocket,
  Brain,
  Database,
  Cloud,
  Smartphone,
  Mail,
  Calendar,
  Award,
  Monitor,
  Video,
  Camera,
  Gamepad2,
  Server,
  Heart,
  Briefcase
} from 'lucide-react';

export default function BCADepartmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Department of Computer Applications
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Technology is not just a subject, <span className="text-yellow-400">it's a gateway to innovation.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Where concepts meet creativity, and every student becomes both a problem-solver and a creator.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department of Computer Applications</h2>
            <p className="text-muted-foreground leading-relaxed">
              At the Department of Computer Applications, technology is not just a subject, it's a gateway to innovation. Here, our classrooms transform into dynamic learning spaces where concepts meet creativity, and every student becomes both a problem-solver and a creator. We believe studying Computer Applications is not merely about coding or completing assignments; it’s about shaping analytical minds that design, develop, question, and innovate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We nurture an inclusive and vibrant environment where every student’s curiosity is valued and encouraged.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond textbooks, we integrate hands-on lab sessions, coding workshops, project-based learning, industry interactions, technical quizzes, seminars, hackathons, and tech-driven events—making the study of Computer Applications as engaging, relevant, and future-focused as the digital world itself.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Code className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-blue-900">Coding</span>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Cpu className="h-8 w-8 text-indigo-600" />
                <span className="font-semibold text-indigo-900">Innovation</span>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Globe className="h-8 w-8 text-purple-600" />
                <span className="font-semibold text-purple-900">Web Tech</span>
              </CardContent>
            </Card>
            <Card className="bg-teal-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Rocket className="h-8 w-8 text-teal-600" />
                <span className="font-semibold text-teal-900">Future Ready</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "Well-equipped Labs", desc: "Two, well-equipped Computer Labs with updated software and high-performance systems for the exclusive use of BCA students." },
              { icon: Users, title: "Highly Qualified Faculty", desc: "A team of well-trained and qualified faculty members, proficient in teaching and mentoring students in both foundational and emerging technologies." },
              { icon: BookOpen, title: "Faculty Development", desc: "Faculty have conducted Faculty Enrichment Programs to train peers on Microsoft Excel and Word." },
              { icon: Heart, title: "Student-Centric", desc: "Supportive and motivating faculty committed to student success. Emphasis on both academic excellence and holistic development." },
              { icon: Briefcase, title: "Industry Exposure", desc: "Internship opportunities, regular coding practices, hackathons, technical quizzes, and project exhibitions." },
              { icon: Lightbulb, title: "Learning beyond Classroom", desc: "Talks and seminars by Industry experts, Add-on Courses, Industry Visits and Internships." },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <Card className="border-l-4 border-l-blue-600 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-blue-600" /> Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              In keeping with the ideals of the college and our founder, the Department attempts to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2"><span className="text-blue-600">•</span> Build technically skilled and industry-ready computer professionals.</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Cultivate innovative thinking, problem-solving abilities, and creativity in students.</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Prepare students to adapt to emerging technologies in a rapidly evolving digital world.</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Provide quality education in computer science through a balanced blend of theory and practical learning.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Facilities</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Server className="h-5 w-5 text-blue-600" /> Computer Labs</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2"><span className="text-blue-600">•</span> Two state-of-the-art computer laboratories with a total of 66 systems.</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> Server-based infrastructure with two servers managing 25 systems each, plus an additional 16 standalone desktop systems.</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> All systems are networked and maintained for optimal performance, providing a user-friendly environment for learning.</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> New high-performance generation computers with i5 processors, 16 GB RAM, and 14th-generation configurations have been added. A total of 15 systems is now available for curriculum-based activities and student project work.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Code className="h-5 w-5 text-blue-600" /> Software & Training</h3>
              <p className="text-muted-foreground mb-2">Faculty members regularly update their knowledge and train students in:</p>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Jupyter Notebook", "Advanced Excel", "IDLE", "Code Blocks", "Visual Studio", "Mobile Android Studio"].map((tool, i) => (
                  <Badge key={i} variant="secondary">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competency Training */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Competency Training</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Programming Languages: C, C++, Java, Python",
            "Web Technologies: HTML, CSS, JavaScript, PHP",
            "Database Management: SQL, DBMS",
            "Computer Fundamentals: Operating Systems, Computer Networks",
            "Data Structures & Algorithms",
            "Machine Learning & Artificial Intelligence (AI Basics)",
            "Software Engineering & Software Testing",
            "Cloud Computing & Emerging Technologies",
            "Mobile Application Development",
            "Mini Projects & Final Year Major Project",
            "Skill Enhancement Courses (SEC) & Open Elective Courses (OEC)"
          ].map((item, i) => (
            <Badge key={i} variant="outline" className="text-base py-2 px-4 border-blue-200 bg-blue-50 text-blue-800">
              {item}
            </Badge>
          ))}
        </div>
      </section>

      {/* Certificate Courses */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Certificate Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Web Development & Cloud DevOps</CardTitle>
                <CardDescription>In collaboration with SwipeGen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A 30-hour Certification Course on Web Development and Cloud DevOps is being offered for BCA Final Year students.
                  The course focuses on industry-ready skills, including modern web technologies, cloud deployment, DevOps practices, and hands-on project experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Web Development & Career Prep Foundation Course</CardTitle>
                <CardDescription>Foundation Course</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A 30-hour foundation course on Web Development and Career Preparation is being offered for BCA I and II Year students.
                  This program emphasizes core web development skills and equips students with essential career readiness tools, such as communication, aptitude, and interview preparation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Matrix */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Course Matrix</h2>
        <Tabs defaultValue="sem1" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto">
            <TabsTrigger value="sem1" className="py-2">Sem I</TabsTrigger>
            <TabsTrigger value="sem2" className="py-2">Sem II</TabsTrigger>
            <TabsTrigger value="sem3" className="py-2">Sem III</TabsTrigger>
            <TabsTrigger value="sem4" className="py-2">Sem IV</TabsTrigger>
            <TabsTrigger value="sem5" className="py-2">Sem V</TabsTrigger>
            <TabsTrigger value="sem6" className="py-2">Sem VI</TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="sem1">
              <Card>
                <CardHeader><CardTitle>Semester I</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Discrete Structures</li>
                    <li>Problem Solving Techniques / Programming in C</li>
                    <li>Computer Architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sem2">
              <Card>
                <CardHeader><CardTitle>Semester II</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Data Structures</li>
                    <li>Object-Oriented Programming (Java)</li>
                    <li>Operating Systems</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sem3">
              <Card>
                <CardHeader><CardTitle>Semester III</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Database Management Systems (DBMS)</li>
                    <li>Cyber Security</li>
                    <li>Python</li>
                    <li>Computer Networks</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sem4">
              <Card>
                <CardHeader><CardTitle>Semester IV</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Artificial Intelligence</li>
                    <li>Design an analysis of Algorithm</li>
                    <li>Ethical Hacking</li>
                    <li>Internet Technologies</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sem5">
              <Card>
                <CardHeader><CardTitle>Semester V (NEP)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Artificial Intelligence</li>
                    <li>Data Analytics</li>
                    <li>Web Programming</li>
                    <li>Data Analytics Lab (practical)</li>
                    <li>Web Programming Lab (practical)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sem6">
              <Card>
                <CardHeader><CardTitle>Semester VI (NEP)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Machine Learning</li>
                    <li>Mobile Application Development</li>
                    <li>Project Work (major/core project)</li>
                    <li>Machine Learning Lab (practical)</li>
                    <li>Mobile Application Development Lab (practical)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* Objectives & Outcomes */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">OBJECTIVES</h3>
              <ul className="space-y-4">
                {[
                  "Build a strong foundation in computer science and programming.",
                  "Develop skills in software development, web technologies, and databases.",
                  "Enhance problem-solving, analytical, and logical thinking abilities.",
                  "Prepare students for IT industry careers with hands-on projects and training.",
                  "Foster awareness of emerging technologies like AI, Cloud, and DevOps.",
                  "Promote professional ethics, teamwork, and lifelong learning."
                ].map((obj, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                    <span className="text-muted-foreground text-sm">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">PROGRAMME OUTCOMES</h3>
              <ul className="space-y-4">
                {[
                  { title: "Apply Knowledge", desc: "Demonstrate strong understanding of computer science fundamentals, programming, and software development principles." },
                  { title: "Problem Solving & Critical Thinking", desc: "Analyse problems, design algorithms, and implement effective computing solutions." },
                  { title: "Professional Competence", desc: "Develop, test, and deploy software applications using current tools and technologies." },
                  { title: "Adapt to Emerging Technologies", desc: "Gain awareness and skills in AI, Cloud Computing, DevOps, Data Analytics, and Web/Mobile Development." },
                  { title: "Ethics & Communication", desc: "Exhibit professional ethics, teamwork, communication skills, and lifelong learning." },
                  { title: "Project & Research Skills", desc: "Execute projects, research work, and practical assignments demonstrating creativity and innovation." }
                ].map((outcome, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="h-2 w-2 mt-2 rounded-full bg-green-500 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong className="text-foreground">{outcome.title}:</strong> {outcome.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-slate-900 text-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-600 hover:bg-purple-500 mb-4">THE BCA FORUM</Badge>
            <h2 className="text-3xl font-bold">Techtantra</h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              The event “Techtantra” is officially launched on 5th April, 2025. The launch sets the tone for the series of events to follow, with competitions in Gaming, Photography, Video Editing, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Faculty</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Moka Nanditha Varma",
                qual: "B. Tech, M. Tech (pursuing PhD in Jain University)",
                role: "HOD, Assistant Professor",
                email: "nanditha.moka@gmail.com"
              },
              {
                name: "Vijaya Lakshmi",
                qual: "B.E, M. Tech",
                role: "Assistant Professor",
                email: "vijayalakshmi.rbanmsfgc@gmail.com"
              },
              {
                name: "S Divya",
                qual: "BCA, MCA (pursuing PhD in Vels University)",
                role: "Assistant Professor",
                email: "dhivya.valli@gmail.com"
              },
              {
                name: "Shirley Nesamani",
                qual: "MCA, Diploma in Health and Integrative Lifestyle",
                role: "Assistant Professor",
                email: "rbanmsfgc.shirley@gmail.com"
              },
              {
                name: "Md Ziya Hakim",
                qual: "BCA, MCA",
                role: "Assistant Professor",
                email: "ziyahakim89@gmail.com"
              }
            ].map((faculty, i) => (
              <Card key={i} className="text-center hover:border-blue-400 transition-colors">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{faculty.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{faculty.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{faculty.qual}</p>
                  <a href={`mailto:${faculty.email}`} className="text-sm text-muted-foreground hover:text-blue-600 flex items-center justify-center gap-2">
                    <Mail className="h-3 w-3" /> {faculty.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-12 bg-blue-900 text-white text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">For more information about the BCA Department</p>
          <a
            href="mailto:rbanmsfgc.bca@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            <Mail className="h-5 w-5" /> rbanmsfgc.bca@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
