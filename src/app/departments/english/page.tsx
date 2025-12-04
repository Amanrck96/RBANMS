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
  Briefcase,
  Monitor,
  Speaker,
  Music
} from 'lucide-react';

export default function EnglishDepartmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Department of English & Communications
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
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department of English & Communications</h2>
            <p className="text-muted-foreground leading-relaxed">
              At the Department of English, words are not just letters, they are doorways. Here, our classrooms become lively arenas where lecture meets critical thinking and every student becomes both reader and explorer. We believe studying English is not merely about mastering grammar or passing exams, it’s about shaping minds that question, analyze and express.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We foster an inclusive and vibrant community where every student’s curiosity is welcome.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond textbooks, we integrate interactive sessions, creative writing workshops, group discussions, debates, public speaking activities, theatre and occasional literary events, making the study of English as dynamic and alive as the language itself.
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
          <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Creative Freedom", desc: "We blend academic attitude with creative freedom. From structured syllabus-based learning to open-ended literary discussions." },
              { icon: Heart, title: "Holistic Development", desc: "We believe in holistic student development. Not just scholastic success but nurturing confidence, empathy, ethics, and sensitivity." },
              { icon: Mic, title: "Valuing Every Voice", desc: "We value every voice. Be it a beginner or an eager reader, each student’s journey matters." },
              { icon: Users, title: "Community & Collaboration", desc: "We foster community and collaboration. Peer discussions, group projects, clubs, seminars, interactive workshops." },
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

      {/* Facilities Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Facilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center hover:bg-emerald-50 transition-colors">
            <CardHeader>
              <Monitor className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
              <CardTitle>Design Studio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A server-based Design Studio</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:bg-emerald-50 transition-colors">
            <CardHeader>
              <Speaker className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
              <CardTitle>Sound Tech Room</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A Tech room for Sound</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:bg-emerald-50 transition-colors">
            <CardHeader>
              <Drama className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
              <CardTitle>Performance Arenas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Access to three performance arenas: a small indoor auditorium, an amphitheatre, and a large auditorium</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-emerald-600" /> Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  In keeping with the ideals of the college and our founder, we envision an environment where:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex gap-2"><span className="text-emerald-600">•</span> Study of language and literature goes hand in hand with critical reflection and social awareness.</li>
                  <li className="flex gap-2"><span className="text-emerald-600">•</span> Graduates are not only proficient in English but also grounded in ethical values, cultural sensitivity and global outlook.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  To realize this vision, our English Department commits to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-emerald-600">•</span> Nurturing linguistic and literary competence</li>
                  <li className="flex gap-2"><span className="text-emerald-600">•</span> Cultivating critical thinkers and creative minds</li>
                  <li className="flex gap-2"><span className="text-emerald-600">•</span> Promoting values of inclusivity, empathy, and respect</li>
                  <li className="flex gap-2"><span className="text-emerald-600">•</span> Preparing students for diverse paths</li>
                </ul>
              </CardContent>
            </Card>

            {/* Programmes Offered in the same section grid */}
            <Card className="border-l-4 border-l-teal-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="h-6 w-6 text-teal-600" /> Programmes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  {["General English", "Additional English", "Employability Skills", "Business Communication"].map((prog, i) => (
                    <Badge key={i} variant="outline" className="text-lg py-2 px-6 border-emerald-600 text-emerald-800 bg-emerald-50">
                      {prog}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
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
                A focused short-term programme designed for final-year (6th Semester) students across streams to help bridge the gap between campus life and the expectations of industry. Through intensive sessions on written tests, group discussions, interviews, basic English grammar, résumé and cover letter writing. The course aims to equip students with the confidence, clarity of communication, and professional presentation skills they need to successfully navigate placement drives and job-selection processes.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">Communication Skill & Soft Skills</CardTitle>
              <CardDescription>4-month Course</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">
                This extended certificate course for 5th semester BCA and BA, emphasises building strong communication, public speaking, presentation (PPT) skills, research ability, group discussion experience, and polished written English, including résumé, portfolio and cover letter construction. The classes happen thrice a week. By fostering interpersonal skills, teamwork, clarity of thought and self-confidence, the course helps students develop professional-level soft skills that are highly valued in any corporate or collaborative work environment.
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
                This creative and experiential course immerses students in dramatic arts through acting, role-play, voice and body-language workshops, improvisation, rehearsals and stage performances. Beyond artistic exposure, through theatre students build confidence, enhance vocal and non-verbal communication, improve body language and presence, deepen empathy and emotional intelligence, and learn teamwork, leadership and spontaneity, all of which contribute to their overall personality development and make them more effective communicators in both personal and professional spheres.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Matrix */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Course Matrix</h2>
          <p className="text-center text-muted-foreground mb-8 italic max-w-2xl mx-auto">
            NOTE: In RBANM’s First Grade College, English is a compulsory subject for all under-graduate streams, BA, BCA, B.Com, BBA, throughout the first, second, third and fourth semesters, without exception.
          </p>
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
                        <p className="text-sm text-muted-foreground">BBA - Semester 3: Business Communication Skills</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-emerald-700">Employability Skills</h4>
                        <p className="text-sm text-muted-foreground">BBA / B.COM - Semester 5: Employability Skills</p>
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
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Target className="h-6 w-6" /> OBJECTIVES</h3>
            <ul className="space-y-4">
              {[
                "To develop students’ proficiency in Listening, Speaking, Reading and Writing (LSRW), enabling them to communicate clearly and confidently in diverse situations.",
                "To cultivate inclusivity, equality and sensitivity by exposing students to varied perspectives and fostering respect for diverse voices.",
                "To nurture creativity and self-expression through tasks that encourage articulation of personal experiences, ideas, and viewpoints.",
                "To build competence in using digital resources and modern tools for learning, research, presentation, and self-improvement.",
                "To strengthen critical reading and writing skills, enabling analytical thought, clarity, coherence and ethical usage of language.",
                "To enhance public-speaking, presentation (oral and written) and interpersonal skills — preparing students for academic, social, and professional interactions.",
                "To deepen awareness of social responsibilities, ethical behaviour and moral sensitivity, encouraging students to become conscientious individuals and responsible citizens.",
                "To foster analytical and creative thinking, enabling students to interpret texts, ideas or situations with insight, empathy and righteousness."
              ].map((obj, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-muted-foreground text-sm">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Award className="h-6 w-6" /> PROGRAMME OUTCOMES</h3>
            <ul className="space-y-4">
              {[
                "Demonstrate improved proficiency in all four language skills (listening, speaking, reading, writing), with clarity, confidence and sensitivity to context.",
                "Appreciate and respect the richness of language and communication, showing inclusivity, equality and sensitivity in use of English.",
                "Apply creative and critical thinking to express their ideas, experiences or viewpoints effectively, whether in writing, speech or presentations.",
                "Use digital learning tools, resources and modern methods to research, prepare and present content in a professional and ethical manner.",
                "Write well-structured, coherent and thoughtful resumes, cover letters, portfolios, presentations and other professional documents, reflecting clarity, correctness, and ethical awareness.",
                "Communicate confidently in group discussions, interviews, public speaking or group activities, demonstrating interpersonal skills, teamwork, respect, and empathy.",
                "Read, analyze and interpret texts critically, recognizing literary, rhetorical or communicative devices, and respond with insight and sensitivity.",
                "Present ideas or opinions effectively through oral or written medium, demonstrating strong presentation skills, clarity, and persuasive communication.",
                "Exhibit ethical awareness, social responsibility, and moral sensitivity, respecting diversity, practicing equality and inclusivity in communication and conduct.",
                "Use analytical skills to solve communication problems, adapt language to varied contexts, and approach challenges thoughtfully, creatively and righteously."
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
                    <p className="text-slate-400 mt-2">Welcome to Natya</p>
                    <p className="text-xs text-slate-500 mt-4">Founded by Prof. Simran</p>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <p className="text-slate-300">
                    Welcome to Natya, a creative club founded by Prof. Simran, open to everyone who seeks a space to express art, emotion, and ideas, irrespective of background or prior experience. Here, we strip away all labels and come together simply as artists. Natya’s core belief is that every voice deserves to shine.
                  </p>
                  <p className="text-slate-300">
                    Whether you dream of acting under the spotlight, or prefer working quietly behind the scenes, at Natya there’s a place for you. Come, join the family of artists, because here, everyone is an artist.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Why Natya?</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>A safe, inclusive space where diversity, equality, sensitivity and mutual respect are embraced.</li>
                        <li>A place to build confidence and master public speaking, whether you’re on stage or behind the mic.</li>
                        <li>Opportunities to learn and grow, from acting and anchoring to event-management, technical support, and marketing.</li>
                        <li>A platform to experiment, create, improvise, to express your feelings, ideas and stories without fear.</li>
                        <li>A community where teamwork, collaboration, leadership and shared passion drive every performance and activity.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">What Skills You’ll Develop</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>Confidence, expressive speech and strong stage presence</li>
                        <li>Leadership, team-work, planning and event-management skills</li>
                        <li>Technical know-how: handling audio/lighting/equipment, marketing/promotion, behind-the-scenes coordination</li>
                        <li>Creativity, quick thinking and adaptability through acting, improvisation, and collaborative production</li>
                        <li>Empathy, sensitivity and respect, both on stage and off</li>
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
                    <p className="text-slate-400 mt-2">The Theatre Club</p>
                    <p className="text-xs text-slate-500 mt-4">Led by Prof. Tony Paul</p>
                  </div>
                </div>
                <div className="md:w-2/3 md:order-1 space-y-4">
                  <p className="text-slate-300">
                    The Theatre Club named Fourth Wall for the idea of “breaking the fourth wall” to dissolve the barriers between audience and stage is a performing arts club led by Prof. Tony Paul. The club was created as a space for students to engage with theatre as both an expressive art form and an extension of literary study.
                  </p>
                  <p className="text-slate-300">
                    One of our signature features is our multilingual approach. Performances often weave together English with regional languages such as Kannada, Tamil, Telugu, and others, celebrating the linguistic diversity of our campus and making our productions inclusive and culturally resonant.
                  </p>
                  <p className="text-slate-300">
                    Fourth Wall is also interested in blending literature with elements of popular culture, drawing from classic texts, cinema, music and even Gen Z memes. This fusion allows the club to create performances that are accessible and creatively bold. Through sessions, rehearsals, and stage events, the club nurtures essential skills such as communication, collaboration, critical thinking, and creative expression.
                  </p>
                  <p className="text-slate-300">
                    Students are not limited to acting alone, members take on roles in backstage management, costume, sound design, lighting, and scripting. This holistic involvement ensures that students gain a complete understanding of how a performance comes together, while also discovering their individual strengths and creative interests.
                  </p>
                  <p className="text-slate-300">
                    Fourth Wall aims to help students step out of their shells, discover their voices, and grow more confident in expressing themselves. The club wishes to create a safe, supportive environment where students can become more comfortable in their own skin both on stage and in everyday life.
                  </p>
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
                    The Editorial Committee, calling itself the Phoenix Club, is a creative and intellectual space founded by Prof. Rashi Tibrewal, built keeping in mind every student who wishes to think, write, imagine, design, and express. Here, labels fade away, and what remains is a shared love for ideas, words, visuals, and stories.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">Why the Editorial Committee?</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>Opportunities to explore multiple creative avenues ranging from content writing, proofreading, and photography to layout design, marketing, and editorial planning.</li>
                        <li>A safe, inspiring space that encourages diversity, equality, thoughtful dialogue and mutual respect, and where everyone’s voice is heard.</li>
                        <li>A platform to grow your confidence through writing, editing, designing, and collaborative storytelling, whether you’re crafting an article or shaping the visual identity of a publication.</li>
                        <li>We recently inaugurated our Design Room, equipped with systems loaded with design software.</li>
                        <li>A chance to experiment, innovate, brainstorm, and contribute meaningfully to the college’s creative landscape, especially through our annual magazine.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-2">The skills you will shake hands with:</h4>
                      <ul className="list-disc pl-5 text-sm text-slate-400 space-y-1">
                        <li>Content writing, proofreading, and crisp, expressive communication</li>
                        <li>Design skills through Canva, digital tools and hands-on layout creation</li>
                        <li>Photography, visual storytelling and creative direction</li>
                        <li>Planning, teamwork, coordination and editorial leadership</li>
                        <li>Creative thinking, adaptability and problem-solving in fast-paced publishing cycles</li>
                        <li>Sensitivity, responsibility and integrity - qualities at the heart of every good editor</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-blue-400 mb-2">Our Work</h4>
                    <p className="text-slate-300 text-sm">
                      The Editorial Committee is proud to be the team behind “Phoenix”, the most recent edition of the college annual magazine, published in the academic year 2024–25. What began as a dedicated space for the final-year editorial team has now grown into a vibrant, multi-year community with newly recruited members from both 1st and 2nd years.
                    </p>
                  </div>
                  <p className="text-slate-300 text-sm italic mt-4">
                    What makes the Editorial Committee truly special is the fun, energy and camaraderie that flows through every discussion, draft, design, and photoshoot. Whether you are someone who loves to play with ideas, enjoys designing in silence, spots typos from a mile away, or just wants to explore creativity, there is a place for you here. If you have ever felt the spark to write, create, design, edit, or simply be part of something meaningful, come join the Editorial family. Here, every thought matters, every voice counts, and every student is a storyteller.
                  </p>
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
                name: "Ms. Simran",
                qual: "M.A English, KSET",
                role: "Assistant Professor, Head, Dept of English & Communication",
                email: "s.simranwrites@gmail.com"
              },
              {
                name: "Rashi Tibrewal",
                qual: "M.A. English, KSET",
                role: "Assistant Professor, Dept of English & Communication",
                email: "rashi30tibrewal@gmail.com"
              },
              {
                name: "Tony Chembakassery Paul",
                qual: "M.A English, KSET",
                role: "Assistant Professor, Dept of English & Communication",
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
