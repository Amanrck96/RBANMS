import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen,
  Feather,
  Mic,
  Users,
  Globe,
  Award,
  Star,
  Heart,
  Drama,
  PenTool,
  Camera,
  Mail,
  Lightbulb,
  Target,
  Sparkles,
  MessageCircle,
  Briefcase
} from 'lucide-react';

export default function EnglishDepartmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Department of English
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Words are not just letters, <span className="text-yellow-400">they are doorways.</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl leading-relaxed">
              Where lecture meets critical thinking and every student becomes both reader and explorer. Shaping minds that question, analyze, and express.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department</h2>
            <p className="text-muted-foreground leading-relaxed">
              At the Department of English, our classrooms become lively arenas where concepts meet creativity. We believe studying English is not merely about mastering grammar or passing exams, it’s about shaping minds that question, analyze and express.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We foster an inclusive and vibrant community where every student’s curiosity is welcome. Beyond textbooks, we integrate interactive sessions, creative writing workshops, group discussions, debates, public speaking activities, theatre and occasional literary events, making the study of English as dynamic and alive as the language itself.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-emerald-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Feather className="h-8 w-8 text-emerald-600" />
                <span className="font-semibold text-emerald-900">Creative Writing</span>
              </CardContent>
            </Card>
            <Card className="bg-teal-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Drama className="h-8 w-8 text-teal-600" />
                <span className="font-semibold text-teal-900">Theatre Arts</span>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Mic className="h-8 w-8 text-amber-600" />
                <span className="font-semibold text-amber-900">Public Speaking</span>
              </CardContent>
            </Card>
            <Card className="bg-rose-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Users className="h-8 w-8 text-rose-600" />
                <span className="font-semibold text-rose-900">Community</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Department Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Creative Freedom", desc: "Blending academic attitude with open-ended literary discussions." },
              { icon: Heart, title: "Holistic Development", desc: "Nurturing confidence, empathy, ethics, and sensitivity." },
              { icon: Mic, title: "Valuing Every Voice", desc: "From beginners to eager readers, every student's journey matters." },
              { icon: Users, title: "Community", desc: "Peer discussions, group projects, clubs, and interactive workshops." },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-emerald-600 mb-2" />
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

      {/* Vision & Mission */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-emerald-600" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Study of language and literature goes hand in hand with critical reflection and social awareness.</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Graduates are grounded in ethical values, cultural sensitivity and global outlook.</li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span> Moulding scholars who are intellectually strong and socially conscious.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-teal-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-teal-600" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2"><span className="text-teal-600">•</span> Nurturing linguistic and literary competence.</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Cultivating critical thinkers and creative minds.</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Promoting values of inclusivity, empathy, and respect.</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Preparing students for diverse paths.</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Encouraging life-long literary engagement and social responsibility.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programmes Offered */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Programmes Offered</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["General English", "Additional English", "Employability Skills", "Business Communication"].map((prog, i) => (
              <Badge key={i} variant="outline" className="text-lg py-2 px-6 border-emerald-600 text-emerald-800 bg-emerald-50">
                {prog}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            Note: In RBANM’s First Grade College, English is a compulsory subject for all under-graduate streams (BA, BCA, B.Com, BBA) throughout the first four semesters.
          </p>
        </div>
      </section>

      {/* Certificate Courses */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certificate Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">Campus to Corporate</CardTitle>
              <CardDescription>10-day Certificate Course</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">
                Designed for final-year students to bridge the gap between campus life and industry expectations. Covers written tests, GDs, interviews, grammar, résumé, and cover letter writing.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">Communication & Soft Skills</CardTitle>
              <CardDescription>4-month Course</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">
                For 5th semester BCA and BA. Emphasises public speaking, presentation skills, research, GDs, and polished written English. Classes held thrice a week.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">Theatre</CardTitle>
              <CardDescription>5 months</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">
                Immerses students in dramatic arts through acting, role-play, voice workshops, and improvisation. Builds confidence, body language, empathy, and teamwork.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Matrix */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Course Matrix</h2>
          <Tabs defaultValue="general" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General English</TabsTrigger>
              <TabsTrigger value="additional">Additional English</TabsTrigger>
              <TabsTrigger value="skills">Skill Enhancement</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="general">
                <Card>
                  <CardHeader><CardTitle>General English Papers</CardTitle></CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-2">BA</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                          <li>Sem 1: Radiance - I</li>
                          <li>Sem 2: Radiance - II</li>
                          <li>Sem 3: Radiance - III</li>
                          <li>Sem 4: Radiance - IV</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-2">BCA</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                          <li>Sem 1: Alchemy - I</li>
                          <li>Sem 2: Alchemy - II</li>
                          <li>Sem 3: Alchemy - III</li>
                          <li>Sem 4: Alchemy - IV</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-2">B.COM</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                          <li>Sem 1: Embolden - I</li>
                          <li>Sem 2: Embolden - II</li>
                          <li>Sem 3: Embolden - III</li>
                          <li>Sem 4: Embolden - IV</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-700 mb-2">BBA</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                          <li>Sem 1: Edify - I</li>
                          <li>Sem 2: Edify - II</li>
                          <li>Sem 3: Edify - III</li>
                          <li>Sem 4: Edify - I</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="additional">
                <Card>
                  <CardHeader><CardTitle>Additional English</CardTitle></CardHeader>
                  <CardContent>
                    <p className="font-medium">BA / BBA / BCA / B.COM</p>
                    <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                      <li>Semester 1: Sceptre - I</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="skills">
                <Card>
                  <CardHeader><CardTitle>Skill Enhancement Courses</CardTitle></CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-emerald-700">Business Communication Skills</h4>
                        <p className="text-sm text-muted-foreground">BBA - Semester 3</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-emerald-700">Employability Skills</h4>
                        <p className="text-sm text-muted-foreground">BBA / B.COM - Semester 5</p>
                      </div>
                    </div>
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
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Target className="h-6 w-6" /> Course Objectives</h3>
            <ul className="space-y-4">
              {[
                "Develop proficiency in Listening, Speaking, Reading and Writing (LSRW).",
                "Cultivate inclusivity and sensitivity to diverse perspectives.",
                "Nurture creativity and self-expression.",
                "Build competence in digital resources and modern tools.",
                "Strengthen critical reading and writing skills.",
                "Enhance public-speaking and interpersonal skills.",
                "Deepen awareness of social responsibilities and ethics.",
                "Foster analytical and creative thinking."
              ].map((obj, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-muted-foreground text-sm">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award className="h-6 w-6" /> Programme Outcomes</h3>
            <ul className="space-y-4">
              {[
                "Demonstrate improved proficiency in all four language skills.",
                "Appreciate and respect the richness of language and communication.",
                "Apply creative and critical thinking to express ideas effectively.",
                "Use digital learning tools for professional presentation.",
                "Write well-structured resumes, cover letters, and portfolios.",
                "Communicate confidently in groups and public speaking.",
                "Critically analyze and interpret texts.",
                "Present ideas effectively through oral or written media.",
                "Exhibit ethical awareness and social responsibility.",
                "Use analytical skills to solve communication problems."
              ].map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-muted-foreground text-sm">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-slate-900 text-white px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Student Activities & Clubs</h2>

          <div className="space-y-12">
            {/* NATYA */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-purple-900/50 p-6 rounded-lg h-full flex flex-col items-center justify-center text-center">
                    <Drama className="h-16 w-16 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-bold text-purple-300">NATYA</h3>
                    <p className="text-slate-400 mt-2">An Open Stage</p>
                    <p className="text-xs text-slate-500 mt-4">Founded by Prof. Simran</p>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <p className="text-slate-300">
                    A creative club open to everyone who seeks a space to express art, emotion, and ideas. Here, we strip away all labels and come together simply as artists.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Why Natya?</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>Safe, inclusive space.</li>
                        <li>Build confidence & public speaking.</li>
                        <li>Learn acting, anchoring, event management.</li>
                        <li>Experiment and improvise without fear.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Skills Developed</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>Confidence & stage presence.</li>
                        <li>Leadership & teamwork.</li>
                        <li>Technical know-how (audio/lighting).</li>
                        <li>Creativity & quick thinking.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOURTH WALL */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 md:order-2">
                  <div className="bg-orange-900/50 p-6 rounded-lg h-full flex flex-col items-center justify-center text-center">
                    <Users className="h-16 w-16 text-orange-400 mb-4" />
                    <h3 className="text-2xl font-bold text-orange-300">FOURTH WALL</h3>
                    <p className="text-slate-400 mt-2">Theatre Club</p>
                    <p className="text-xs text-slate-500 mt-4">Led by Prof. Tony Paul</p>
                  </div>
                </div>
                <div className="md:w-2/3 md:order-1 space-y-4">
                  <p className="text-slate-300">
                    A performing arts club that "breaks the fourth wall" to dissolve barriers between audience and stage. We engage with theatre as both an expressive art form and an extension of literary study.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-orange-400">Key Features</h4>
                    <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                      <li><strong className="text-slate-300">Multilingual Approach:</strong> Weaving English with Kannada, Tamil, Telugu, etc.</li>
                      <li><strong className="text-slate-300">Pop Culture Fusion:</strong> Blending classic texts with cinema, music, and memes.</li>
                      <li><strong className="text-slate-300">Holistic Involvement:</strong> Acting, backstage, costume, sound, lighting, and scripting.</li>
                    </ul>
                    <p className="text-sm text-slate-400 mt-2">
                      Aims to help students step out of their shells, discover their voices, and grow confident.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PHOENIX CLUB */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-900/50 p-6 rounded-lg h-full flex flex-col items-center justify-center text-center">
                    <PenTool className="h-16 w-16 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold text-blue-300">PHOENIX CLUB</h3>
                    <p className="text-slate-400 mt-2">The Editorial Committee</p>
                    <p className="text-xs text-slate-500 mt-4">Founded by Prof. Rashi Tibrewal</p>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <p className="text-slate-300">
                    A creative and intellectual space for those who wish to think, write, imagine, design, and express. The team behind "Phoenix", the college annual magazine.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Why Join?</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>Explore content writing, editing, design.</li>
                        <li>Access to Design Room with software.</li>
                        <li>Contribute to the annual magazine.</li>
                        <li>Grow confidence through storytelling.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Skills Gained</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>Content writing & proofreading.</li>
                        <li>Design (Canva, layout tools).</li>
                        <li>Photography & visual storytelling.</li>
                        <li>Editorial leadership & teamwork.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Faculty</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Simran",
                qual: "M.A English, KSET",
                role: "Assistant Professor",
                email: "s.simranwrites@gmail.com"
              },
              {
                name: "Rashi Tibrewal",
                qual: "M.A. English, KSET",
                role: "Assistant Professor",
                email: "rashi30tibrewal@gmail.com"
              },
              {
                name: "Tony Chembakassery Paul",
                qual: "M.A English, KSET",
                role: "Assistant Professor",
                email: "tony17paul@gmail.com"
              }
            ].map((faculty, i) => (
              <Card key={i} className="text-center hover:border-emerald-400 transition-colors">
                <CardHeader>
                  <div className="w-20 h-20 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">{faculty.name}</CardTitle>
                  <CardDescription className="text-emerald-600 font-medium">{faculty.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{faculty.qual}</p>
                  <a href={`mailto:${faculty.email}`} className="text-sm text-muted-foreground hover:text-emerald-600 flex items-center justify-center gap-2">
                    <Mail className="h-3 w-3" /> {faculty.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-12 bg-emerald-900 text-white text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">For more information about the Department of English</p>
          <a
            href="mailto:departmentofenglishrbanms@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
          >
            <Mail className="h-5 w-5" /> departmentofenglishrbanms@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
