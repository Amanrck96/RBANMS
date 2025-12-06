import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Feather,
  Mic,
  Users,
  Globe,
  Award,
  Sparkles,
  Heart,
  Drama,
  PenTool,
  Monitor,
  Speaker,
  Target,
  Mail,
  Lightbulb,
  Music,
  Camera
} from 'lucide-react';

export default function EnglishDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        At the Department of English, words are not just letters, they are doorways. Here, our classrooms become lively arenas where lecture meets critical thinking and every student becomes both reader and explorer. We believe studying English is not merely about mastering grammar or passing exams, it’s about shaping minds that question, analyze and express.
      </p>
      <p>
        We foster an inclusive and vibrant community where every student’s curiosity is welcome.
      </p>
      <p>
        Beyond textbooks, we integrate interactive sessions, creative writing workshops, group discussions, debates, public speaking activities, theatre and occasional literary events, making the study of English as dynamic and alive as the language itself.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <p className="text-muted-foreground italic">
        "In keeping with the ideals of the college and our founder, we envision an environment where study of language and literature goes hand in hand with critical reflection and social awareness."
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
          <span className="font-medium text-sm">departmentofenglishrbanms@gmail.com</span>
        </div>
      </div>

      {/* Highlights Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Academic attitude with creative freedom",
            "Holistic student development",
            "Valuing every voice",
            "Community and collaboration"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Facilities Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Facilities</h4>
        <ul className="space-y-3">
          {[
            "Server-based Design Studio",
            "Tech room for Sound",
            "3 Performance Arenas (Auditoriums)"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Lightbulb className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Objectives</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Develop proficiency in LSRW skills, cultivate inclusivity, nurture creativity, and build competence in using digital resources for learning.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Programme Outcomes</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Demonstrate improved proficiency in all language skills, appreciate communication richness, and apply creative thinking effectively.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of English & Communications"
      tagline="Words are not just letters, they are doorways."
      activeTab="english"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Programmes & Matrix */}
      <section id="programmes">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Programmes</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {["General English", "Additional English", "Employability Skills", "Business Communication"].map((prog, i) => (
            <Badge key={i} variant="outline" className="text-lg py-2 px-6 border-primary/20 bg-primary/5">
              {prog}
            </Badge>
          ))}
        </div>

        <p className="text-center text-muted-foreground mb-8 italic max-w-2xl mx-auto">
          NOTE: In RBANM’s First Grade College, English is a compulsory subject for all under-graduate streams, BA, BCA, B.Com, BBA, throughout the first, second, third and fourth semesters, without exception.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border">
          <h3 className="text-xl font-bold mb-6 text-center">Course Matrix</h3>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white shadow-sm mb-8">
              <TabsTrigger value="general" className="py-2">General English</TabsTrigger>
              <TabsTrigger value="additional" className="py-2">Additional English</TabsTrigger>
              <TabsTrigger value="comm" className="py-2">Communication</TabsTrigger>
              <TabsTrigger value="employ" className="py-2">Employability</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { stream: "BA", papers: ["Sem 1: Radiance - I", "Sem 2: Radiance - II", "Sem 3: Radiance - III", "Sem 4: Radiance - IV"] },
                  { stream: "BCA", papers: ["Sem 1: Alchemy - I", "Sem 2: Alchemy - II", "Sem 3: Alchemy - III", "Sem 4: Alchemy - IV"] },
                  { stream: "B.COM", papers: ["Sem 1: Embolden - I", "Sem 2: Embolden - II", "Sem 3: Embolden - III", "Sem 4: Embolden - IV"] },
                  { stream: "BBA", papers: ["Sem 1: Edify - I", "Sem 2: Edify - II", "Sem 3: Edify - III", "Sem 4: Edify - I"] }
                ].map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2"><CardTitle className="text-lg text-primary">{item.stream}</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        {item.papers.map((paper, j) => <li key={j}>{paper}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="additional">
              <Card>
                <CardHeader><CardTitle>Additional English (BA / BBA / BCA / B.COM)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Semester 1: Sceptre - I</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comm">
              <Card>
                <CardHeader><CardTitle>Business Communication Skills (BBA)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Semester 3: Business Communication Skills</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employ">
              <Card>
                <CardHeader><CardTitle>Employability Skills (BBA / B.COM)</CardTitle></CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Semester 5: Employability Skills</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certificate Courses */}
      <section id="certifications">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Certificate Courses</h2>
        <div className="grid md:grid-cols-1 gap-6">
          {[
            { title: "Campus to Corporate", duration: "10-day Certificate Course", desc: "A focused short-term programme designed for final-year (6th Semester) students across streams to help bridge the gap between campus life and the expectations of industry. Through intensive sessions on written tests, group discussions, interviews, basic English grammar, résumé and cover letter writing. The course aims to equip students with the confidence, clarity of communication, and professional presentation skills they need to successfully navigate placement drives and job-selection processes." },
            { title: "Communication Skill & Soft Skills", duration: "4-month Course", desc: "This extended certificate course for 5th semester BCA and BA, emphasises building strong communication, public speaking, presentation (PPT) skills, research ability, group discussion experience, and polished written English, including résumé, portfolio and cover letter construction. The classes happen thrice a week. By fostering interpersonal skills, teamwork, clarity of thought and self-confidence, the course helps students develop professional-level soft skills that are highly valued in any corporate or collaborative work environment." },
            { title: "Theatre", duration: "5 months", desc: "This creative and experiential course immerses students in dramatic arts through acting, role-play, voice and body-language workshops, improvisation, rehearsals and stage performances. Beyond artistic exposure, through theatre students build confidence, enhance vocal and non-verbal communication, improve body language and presence, deepen empathy and emotional intelligence, and learn teamwork, leadership and spontaneity, all of which contribute to their overall personality development and make them more effective communicators in both personal and professional spheres." }
          ].map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                <CardDescription className="text-lg font-medium">{item.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Activities */}
      <section id="activities">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Student Activities & Clubs</h2>
        <div className="space-y-12">
          {/* NATYA */}
          <Card className="bg-slate-900 border-slate-800 text-slate-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-purple-900/40 p-10 flex flex-col items-center justify-center text-center border-r border-slate-700">
                <Drama className="h-20 w-20 text-purple-400 mb-6" />
                <h3 className="text-3xl font-bold text-purple-300 tracking-tight">NATYA</h3>
                <p className="text-purple-200/70 mt-4">Founded by Prof. Simran</p>
              </div>
              <div className="md:w-2/3 p-10 space-y-6">
                <h4 className="text-2xl font-bold text-white">Welcome to Natya</h4>
                <p className="text-slate-300 leading-relaxed">
                  Natya is a creative club open to everyone who seeks a space to express art, emotion, and ideas. Here, we strip away all labels and come together simply as artists. Whether you dream of acting under the spotlight or working behind the scenes, there is a place for you.
                </p>
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h5 className="font-semibold text-purple-400 mb-2 uppercase tracking-wide text-sm">Why Natya?</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" /> Safe, inclusive space</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" /> Build confidence & speaking skills</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" /> Event management & technical skills</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-400 mb-2 uppercase tracking-wide text-sm">Skills Developed</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" /> Expressive speech & stage presence</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" /> Leadership & Teamwork</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" /> Creativity & Adaptability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* FOURTH WALL */}
          <Card className="bg-slate-900 border-slate-800 text-slate-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-orange-900/40 p-10 flex flex-col items-center justify-center text-center border-r border-slate-700 md:order-2">
                <Users className="h-20 w-20 text-orange-400 mb-6" />
                <h3 className="text-3xl font-bold text-orange-300 tracking-tight">FOURTH WALL</h3>
                <p className="text-orange-200/70 mt-4">The Theatre Club<br />Led by Prof. Tony Paul</p>
              </div>
              <div className="md:w-2/3 p-10 space-y-6 md:order-1">
                <h4 className="text-2xl font-bold text-white">Breaking the Fourth Wall</h4>
                <p className="text-slate-300 leading-relaxed">
                  A performing arts club creating a space for students to engage with theatre as both an expressive art form and an extension of literary study.
                </p>
                <div className="space-y-4">
                  <p className="text-slate-300 text-sm"><strong className="text-orange-400">Multilingual Approach:</strong> Performances often weave English with Kannada, Tamil, Telugu, making productions inclusive and culturally resonant.</p>
                  <p className="text-slate-300 text-sm"><strong className="text-orange-400">Pop Culture Fusion:</strong> Blending literature with cinema, music, and memes to create bold, accessible performances.</p>
                  <p className="text-slate-300 text-sm"><strong className="text-orange-400">Holistic Involvement:</strong> Acting, backstage management, costume, sound, lighting, and scripting.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* PHOENIX CLUB */}
          <Card className="bg-slate-900 border-slate-800 text-slate-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-900/40 p-10 flex flex-col items-center justify-center text-center border-r border-slate-700">
                <PenTool className="h-20 w-20 text-blue-400 mb-6" />
                <h3 className="text-3xl font-bold text-blue-300 tracking-tight">PHOENIX CLUB</h3>
                <p className="text-blue-200/70 mt-4">Editorial Committee<br />Founded by Prof. Rashi Tibrewal</p>
              </div>
              <div className="md:w-2/3 p-10 space-y-6">
                <h4 className="text-2xl font-bold text-white">Think, Write, Design</h4>
                <p className="text-slate-300 leading-relaxed">
                  An intellectual space for students who wish to think, write, imagine, design, and express. The team behind "Phoenix", the college annual magazine.
                </p>
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-2 uppercase tracking-wide text-sm">Activities</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Content writing & Proofreading</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Photography & Visual Storytelling</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Design Room with software access</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-2 uppercase tracking-wide text-sm">Skills</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Editorial Leadership</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Creative Thinking & Design (Canva)</li>
                      <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" /> Responsibility & Integrity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Ms. Simran", role: "Assistant Professor, Head", qual: "M.A English, KSET", email: "s.simranwrites@gmail.com" },
            { name: "Rashi Tibrewal", role: "Assistant Professor", qual: "M.A. English, KSET", email: "rashi30tibrewal@gmail.com" },
            { name: "Tony Chembakassery Paul", role: "Assistant Professor", qual: "M.A English, KSET", email: "tony17paul@gmail.com" }
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
