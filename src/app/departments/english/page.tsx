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
  Lightbulb
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
        "To envision an environment where study of language and literature goes hand in hand with critical reflection and social awareness. Graduates are not only proficient in English but also grounded in ethical values."
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
            "Creative Freedom & Literary Discussions",
            "Holistic Development (Confidence, Empathy)",
            "Valuing Every Voice",
            "Community & Collaboration"
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
            "Design Studio (Server-based)",
            "Sound Tech Room",
            "Performance Arenas (Auditorium, Amphitheatre)"
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
          Develop proficiency in LSRW skills, cultivate inclusivity, nurture creativity, and build competence in using digital resources for learning and research.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Program Outcomes</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Demonstrate improved language proficiency, appreciate communication richness, apply critical thinking, and exhibit ethical awareness in professional contexts.
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
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Programmes & Course Matrix</h2>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {["General English", "Additional English", "Employability Skills", "Business Communication"].map((prog, i) => (
              <Badge key={i} variant="outline" className="text-lg py-2 px-6 border-primary/20 bg-primary/5">
                {prog}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground mt-4 italic">
            NOTE: English is a compulsory subject for all under-graduate streams (BA, BCA, B.Com, BBA) throughout the first four semesters.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-white shadow-sm mb-8">
              <TabsTrigger value="general" className="py-2">General English</TabsTrigger>
              <TabsTrigger value="additional" className="py-2">Additional English</TabsTrigger>
              <TabsTrigger value="skills" className="py-2">Skill Enhancement</TabsTrigger>
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

            <TabsContent value="skills">
              <Card>
                <CardHeader><CardTitle>Skill Enhancement Courses</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Business Communication Skills</h4>
                    <p className="text-sm text-muted-foreground">BBA - Semester 3</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Employability Skills</h4>
                    <p className="text-sm text-muted-foreground">BBA / B.COM - Semester 5</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certificate Courses */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Certificate Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Campus to Corporate", duration: "10-day Course", desc: "Short-term programme for final-year students to bridge the gap between campus and industry. Covers resume writing, interviews, and soft skills." },
            { title: "Communication & Soft Skills", duration: "4-month Course", desc: "For 5th sem BCA/BA. Emphasizes public speaking, research, and written English. Classes thrice a week." },
            { title: "Theatre", duration: "5-month Course", desc: "Immersive course in dramatic arts: acting, voice, improvisation, and stage performance. Builds confidence and emotional intelligence." }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                <CardDescription>{item.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Activities */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Student Activities & Clubs</h2>
        <div className="space-y-8">
          {/* NATYA */}
          <Card className="bg-slate-900 border-slate-800 text-slate-100">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 bg-purple-900/30 p-6 rounded-xl text-center border border-purple-500/30">
                  <Drama className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-purple-300">NATYA</h3>
                  <p className="text-sm text-purple-200/70 mt-2">Founded by Prof. Simran</p>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    A creative club open to everyone who seeks a space to express art, emotion, and ideas. Whether you dream of acting or working behind the scenes, Natya is a safe, inclusive space for all.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Why Natya?</h4>
                      <ul className="list-disc pl-5 text-slate-400 space-y-1">
                        <li>Inclusive space embracing diversity</li>
                        <li>Build confidence & public speaking</li>
                        <li>Learn event management & marketing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Skills Developed</h4>
                      <ul className="list-disc pl-5 text-slate-400 space-y-1">
                        <li>Expressive speech & stage presence</li>
                        <li>Leadership & Teamwork</li>
                        <li>Technical support & Creativity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FOURTH WALL */}
          <Card className="bg-slate-900 border-slate-800 text-slate-100">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 bg-orange-900/30 p-6 rounded-xl text-center border border-orange-500/30">
                  <Users className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-orange-300">FOURTH WALL</h3>
                  <p className="text-sm text-orange-200/70 mt-2">The Theatre Club<br />Led by Prof. Tony Paul</p>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    "Breaking the fourth wall" to dissolve barriers. A multilingual performance arts club blending literature with pop culture, regional languages, and bold creativity.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                    <li>Multilingual approach (Kannada, Tamil, Telugu, English)</li>
                    <li>Blends classic texts with cinema, music, and memes</li>
                    <li>Holistic involvement: acting, scripting, sound, lighting, costume</li>
                    <li>Focus on self-expression and confidence building</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PHOENIX CLUB */}
          <Card className="bg-slate-900 border-slate-800 text-slate-100">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 bg-blue-900/30 p-6 rounded-xl text-center border border-blue-500/30">
                  <PenTool className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-300">PHOENIX CLUB</h3>
                  <p className="text-sm text-blue-200/70 mt-2">Editorial Committee<br />Founded by Prof. Rashi Tibrewal</p>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    A space to think, write, imagine, and design. The team behind "Phoenix", the college annual magazine.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Activities</h4>
                      <ul className="list-disc pl-5 text-slate-400 space-y-1">
                        <li>Content writing & Proofreading</li>
                        <li>Photography & Visual Storytelling</li>
                        <li>Layout Design (Canva/Software)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Skills</h4>
                      <ul className="list-disc pl-5 text-slate-400 space-y-1">
                        <li>Editorial Leadership</li>
                        <li>Creative Thinking & Design</li>
                        <li>Coordination & Planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Ms. Simran", role: "Head of Department", qual: "M.A English, KSET", email: "s.simranwrites@gmail.com" },
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
