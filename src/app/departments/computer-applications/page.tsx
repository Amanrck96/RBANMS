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
  Gamepad2
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
              Shaping Future <span className="text-yellow-400">Tech Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Where technology meets innovation. We nurture analytical minds to design, develop, question, and innovate for a digital future.
            </p>
          </div>
        </div>
        {/* Abstract Shapes/Pattern Overlay could go here */}
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department</h2>
            <p className="text-muted-foreground leading-relaxed">
              At the Department of Computer Applications, technology is not just a subject, it's a gateway to innovation. Here, our classrooms transform into dynamic learning spaces where concepts meet creativity, and every student becomes both a problem-solver and a creator.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe studying Computer Applications is not merely about coding or completing assignments; it’s about shaping analytical minds that design, develop, question, and innovate. We nurture an inclusive and vibrant environment where every student’s curiosity is valued and encouraged.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond textbooks, we integrate hands-on lab sessions, coding workshops, project-based learning, industry interactions, technical quizzes, seminars, hackathons, and tech-driven events—making the study of Computer Applications as engaging, relevant, and future-focused as the digital world itself.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Code className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-blue-900">Coding Workshops</span>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Cpu className="h-8 w-8 text-indigo-600" />
                <span className="font-semibold text-indigo-900">IoT Sessions</span>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Globe className="h-8 w-8 text-purple-600" />
                <span className="font-semibold text-purple-900">Web Development</span>
              </CardContent>
            </Card>
            <Card className="bg-teal-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Rocket className="h-8 w-8 text-teal-600" />
                <span className="font-semibold text-teal-900">Hackathons</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Department Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Industry-Focused Curriculum", desc: "Aligned with AI, ML, Cloud, and Web Development." },
              { icon: Users, title: "Experienced Faculty", desc: "Dedicated to academic excellence and practical learning." },
              { icon: Monitor, title: "High-Performance Labs", desc: "Well-equipped with updated software and systems." },
              { icon: Lightbulb, title: "Skill Development", desc: "Workshops and seminars by industry experts." },
              { icon: Target, title: "Practical Exposure", desc: "Regular coding practices, hackathons, and quizzes." },
              { icon: GraduationCap, title: "Career Support", desc: "Internships, placement support, and soft skills training." },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-blue-600" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2"><span className="text-blue-600">•</span> To build technically skilled and industry-ready computer professionals.</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> To cultivate innovative thinking, problem-solving abilities, and creativity.</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> To promote ethical values, teamwork, and social responsibility.</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> To prepare students to adapt to emerging technologies.</li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> To contribute to industry and society through quality education.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Rocket className="h-6 w-6 text-indigo-600" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2"><span className="text-indigo-600">•</span> To provide quality education through a blend of theory and practice.</li>
                <li className="flex gap-2"><span className="text-indigo-600">•</span> To enhance technical skills through labs, projects, and internships.</li>
                <li className="flex gap-2"><span className="text-indigo-600">•</span> To foster a culture of innovation, critical thinking, and learning.</li>
                <li className="flex gap-2"><span className="text-indigo-600">•</span> To develop ethically responsible and competent IT professionals.</li>
                <li className="flex gap-2"><span className="text-indigo-600">•</span> To promote research, entrepreneurship, and problem-solving.</li>
                <li className="flex gap-2"><span className="text-indigo-600">•</span> To create an inclusive learning environment for every student.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programmes Offered */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Programmes Offered</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "C, C++, Java, Python",
              "HTML, CSS, JavaScript, PHP",
              "SQL, DBMS",
              "Operating Systems, Networks",
              "Data Structures & Algorithms",
              "Machine Learning & AI Basics",
              "Software Engineering & Testing",
              "Cloud Computing",
              "Mobile App Development"
            ].map((prog, i) => (
              <Badge key={i} variant="secondary" className="text-base py-2 px-4">
                {prog}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Courses */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certificate Courses</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Web Development & Cloud DevOps</CardTitle>
              <CardDescription>In collaboration with SwipeGen</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A 30-hour Certification Course for BCA Final Year students. Focuses on industry-ready skills, modern web technologies, cloud deployment, and DevOps practices.
              </p>
              <Badge>For Final Year</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-700">Web Development & Career Prep</CardTitle>
              <CardDescription>Foundation Course</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A 30-hour foundation course for BCA I and II Year students. Emphasizes core web development skills and career readiness tools like communication and interview prep.
              </p>
              <Badge>For 1st & 2nd Year</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Matrix */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">BCA Course Matrix</h2>
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
                    <ul className="list-disc pl-5 space-y-2">
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
                    <ul className="list-disc pl-5 space-y-2">
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
                    <ul className="list-disc pl-5 space-y-2">
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
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Artificial Intelligence</li>
                      <li>Design and Analysis of Algorithms</li>
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
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Artificial Intelligence</li>
                      <li>Data Analytics</li>
                      <li>Web Programming</li>
                      <li>Data Analytics Lab (Practical)</li>
                      <li>Web Programming Lab (Practical)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="sem6">
                <Card>
                  <CardHeader><CardTitle>Semester VI (NEP)</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Machine Learning</li>
                      <li>Mobile Application Development</li>
                      <li>Project Work (Major/Core)</li>
                      <li>Machine Learning Lab (Practical)</li>
                      <li>Mobile Application Development Lab (Practical)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Objectives & Outcomes */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Course Objectives</h3>
            <ul className="space-y-4">
              {[
                "Build a strong foundation in computer science and programming.",
                "Develop skills in software development, web technologies, and databases.",
                "Enhance problem-solving, analytical, and logical thinking abilities.",
                "Prepare students for IT industry careers with hands-on projects.",
                "Foster awareness of emerging technologies like AI, Cloud, and DevOps.",
                "Promote professional ethics, teamwork, and lifelong learning."
              ].map((obj, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-muted-foreground">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Programme Outcomes</h3>
            <ul className="space-y-4">
              {[
                { title: "Apply Knowledge", desc: "Understand CS fundamentals and software principles." },
                { title: "Problem Solving", desc: "Design algorithms and implement effective solutions." },
                { title: "Professional Competence", desc: "Develop and deploy apps using modern tools." },
                { title: "Emerging Tech", desc: "Skills in AI, Cloud, DevOps, and Data Analytics." },
                { title: "Ethics & Communication", desc: "Exhibit professional ethics and teamwork." },
                { title: "Project Skills", desc: "Execute projects demonstrating creativity." }
              ].map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">{outcome.title}:</strong> {outcome.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-slate-900 text-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-purple-600 hover:bg-purple-500 mb-4">Student Activities</Badge>
            <h2 className="text-3xl font-bold">The BCA Forum: Techtantra</h2>
            <p className="text-slate-300 mt-4">Launching April 5th, 2025</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 text-slate-100">
              <CardHeader>
                <Gamepad2 className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle>Gaming</CardTitle>
              </CardHeader>
              <CardContent>
                Contests and tournaments involving popular or specially themed games.
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-slate-100">
              <CardHeader>
                <Camera className="h-10 w-10 text-pink-400 mb-2" />
                <CardTitle>Photography</CardTitle>
              </CardHeader>
              <CardContent>
                Capturing creative moments, showcasing skills with a competitive edge.
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 text-slate-100">
              <CardHeader>
                <Video className="h-10 w-10 text-blue-400 mb-2" />
                <CardTitle>Video Editing</CardTitle>
              </CardHeader>
              <CardContent>
                Editing videos to a theme or for creative storytelling.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Infrastructure & Beyond Classroom */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Infrastructure & Labs</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Monitor className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">State-of-the-art Labs</h4>
                  <p className="text-muted-foreground text-sm">Two labs with 66 systems, networked and server-managed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Cpu className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">High Performance</h4>
                  <p className="text-muted-foreground text-sm">New i5, 16GB RAM, 14th-gen systems for advanced projects.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lightbulb className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Skill Development</h4>
                  <p className="text-muted-foreground text-sm">IoT sessions, Data Analytics workshops, and more.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Learning Beyond Classroom</h2>
            <ul className="space-y-4">
              <li className="p-4 bg-slate-50 rounded-lg border">
                <span className="font-semibold block mb-1">Industrial Visit</span>
                <span className="text-sm text-muted-foreground">HTCS Cloud Solutions (April 29, 2025) - Networking & Real-time environments.</span>
              </li>
              <li className="p-4 bg-slate-50 rounded-lg border">
                <span className="font-semibold block mb-1">Educational Visit</span>
                <span className="text-sm text-muted-foreground">Science Gallery & Innovation (Nov 6, 2025) - Research & Emerging Tech.</span>
              </li>
              <li className="p-4 bg-slate-50 rounded-lg border">
                <span className="font-semibold block mb-1">Expert Talks</span>
                <span className="text-sm text-muted-foreground">Seminars by industry experts and add-on courses.</span>
              </li>
            </ul>
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
                qual: "B. Tech, M. Tech (pursuing PhD)",
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
                qual: "BCA, MCA (pursuing PhD)",
                role: "Assistant Professor",
                email: "dhivya.valli@gmail.com"
              },
              {
                name: "Shirley Nesamani",
                qual: "MCA, Diploma in Health",
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
