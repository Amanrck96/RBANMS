import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Mail,
  Mic2,
  Drama,
  PenTool
} from 'lucide-react';

export default function EnglishDepartmentPage() {

  // 1. Highlights (Intro + List)
  const highlightsContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Welcome to English & Communications</h2>
        <p>
          At the Department of English, words are not just letters, they are doorways. Here, our classrooms become lively arenas where lecture meets critical thinking and every student becomes both a reader and explorer. We believe studying English is not merely about mastering grammar or passing exams, it’s about shaping minds that question, analyze and express.
        </p>
        <p>
          We foster an inclusive and vibrant community where every student’s curiosity is welcome. Beyond textbooks, we integrate interactive sessions, creative writing workshops, group discussions, debates, public speaking activities, theatre and occasional literary events, making the study of English as dynamic and alive as the language itself.
        </p>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-xl">Department Highlights</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "We blend academic attitude with creative freedom.",
              "Holistic student development (confidence, empathy, ethics).",
              "We value every voice, from beginner to eager reader.",
              "Community and collaboration (Peer discussions, clubs)."
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

  // 2. Facilities
  const facilitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Facilities</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            {[
              "A server-based Design Studio",
              "A Tech room for Sound",
              "Access to three performance arenas: small indoor auditorium, amphitheatre, large auditorium"
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

  // 3. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        <Target className="h-8 w-8 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-lg space-y-6 leading-relaxed">
        <div>
          <p className="font-semibold text-foreground not-italic mb-2">Vision</p>
          <p>In keeping with the ideals of the college and our founder, we envision:</p>
          <ul className="text-left space-y-1 list-disc pl-8 inline-block mt-2">
            <li>Study of language and literature goes hand in hand with critical reflection and social awareness.</li>
            <li>Graduates are not only proficient in English but also grounded in ethical values, cultural sensitivity and global outlook.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground not-italic mb-2">Mission</p>
          <ul className="text-left space-y-1 list-disc pl-8 inline-block">
            <li>Nurturing linguistic and literary competence.</li>
            <li>Cultivating critical thinkers and creative minds.</li>
            <li>Promoting values of inclusivity, empathy, and respect.</li>
            <li>Preparing students for diverse paths.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // 4. Programmes
  const programmesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Programmes</h2>
      <div className="flex flex-wrap gap-4">
        {["General English", "Additional English", "Employability Skills", "Business Communication"].map((prog, i) => (
          <Badge key={i} className="text-lg py-3 px-6 hover:bg-primary hover:text-white transition-colors cursor-default">{prog}</Badge>
        ))}
      </div>
    </div>
  );

  // 5. Certificate Courses
  const certCoursesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Certificate Courses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Campus to Corporate</CardTitle>
            <CardDescription>10-day Certificate Course</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>For final-year (6th Sem) students. Bridges the gap between campus life and industry expectations. Covers written tests, GDs, interviews, and resume writing.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Communication & Soft Skills</CardTitle>
            <CardDescription>4-month Course</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>For 5th sem BCA and BA. Emphasises public speaking, presentation, research, and written English. Helps develop professional-level soft skills.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Theatre</CardTitle>
            <CardDescription>5 months</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>Immerses students in dramatic arts through acting, voice, and body-language workshops. Builds confidence, empathy, and teamwork.</p>
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
        <p className="mb-4 text-muted-foreground italic">NOTE: English is a compulsory subject for all under-graduate streams (BA, BCA, B.Com, BBA) throughout the first four semesters.</p>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white shadow-sm mb-8">
            <TabsTrigger value="general" className="py-2">General English</TabsTrigger>
            <TabsTrigger value="additional" className="py-2">Additional English</TabsTrigger>
            <TabsTrigger value="business" className="py-2">Business Comm</TabsTrigger>
            <TabsTrigger value="employability" className="py-2">Employability</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card><CardHeader><CardTitle>BA</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground"><li>Sem 1: Radiance - I</li><li>Sem 2: Radiance - II</li><li>Sem 3: Radiance - III</li><li>Sem 4: Radiance - IV</li></ul></CardContent></Card>
              <Card><CardHeader><CardTitle>BCA</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground"><li>Sem 1: Alchemy - I</li><li>Sem 2: Alchemy - II</li><li>Sem 3: Alchemy - III</li><li>Sem 4: Alchemy - IV</li></ul></CardContent></Card>
              <Card><CardHeader><CardTitle>B.COM</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground"><li>Sem 1: Embolden - I</li><li>Sem 2: Embolden - II</li><li>Sem 3: Embolden - III</li><li>Sem 4: Embolden - IV</li></ul></CardContent></Card>
              <Card><CardHeader><CardTitle>BBA</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-sm text-muted-foreground"><li>Sem 1: Edify - I</li><li>Sem 2: Edify - II</li><li>Sem 3: Edify - III</li><li>Sem 4: Edify - I</li></ul></CardContent></Card>
            </div>
          </TabsContent>
          <TabsContent value="additional">
            <Card>
              <CardHeader><CardTitle>All Streams (BA/BBA/BCA/B.COM)</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">Sem 1: Sceptre - I</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="business">
            <Card>
              <CardHeader><CardTitle>BBA</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">Sem 3: Business Communication Skills</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="employability">
            <Card>
              <CardHeader><CardTitle>BBA / B.COM</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">Sem 5: Employability Skills</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 7. Course Objectives
  const objContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-yellow-400" />
          <h3 className="text-3xl font-bold">Course Objectives</h3>
          <ul className="text-slate-300 leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li>Develop proficiency in Listening, Speaking, Reading and Writing (LSRW).</li>
            <li>Cultivate inclusivity, equality and sensitivity.</li>
            <li>Nurture creativity and self-expression.</li>
            <li>Strengthen critical reading and writing skills.</li>
            <li>Enhance public-speaking and interpersonal skills.</li>
            <li>Deepen awareness of social responsibilities.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Programme Outcomes
  const outcomesContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <BookOpen className="h-16 w-16 mx-auto text-white" />
          <h3 className="text-3xl font-bold">Programme Outcomes</h3>
          <ul className="text-primary-foreground/90 leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li>Demonstrate improved proficiency in all four language skills.</li>
            <li>Appreciate richness of language and communication.</li>
            <li>Apply creative and critical thinking to express ideas.</li>
            <li>Use digital learning tools effectively.</li>
            <li>Write well-structured professional documents.</li>
            <li>Exhibit ethical awareness and social responsibility.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 9. Natya
  const natyaContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Natya</h2>
      <Card className="bg-pink-50 border-pink-200 dark:bg-pink-900/10">
        <CardHeader><CardTitle className="text-pink-700 dark:text-pink-400 flex items-center gap-2"><Mic2 className="h-6 w-6" /> Welcome to Natya</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-lg">A creative club founded by Prof. Simran, open to everyone who seeks a space to express art, emotion, and ideas. Natya’s core belief is that every voice deserves to shine.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-bold mb-2 text-lg">Why Natya?</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>A safe, inclusive space embracing diversity.</li>
                <li>Build confidence and master public speaking.</li>
                <li>Opportunities in acting, event-management, and marketing.</li>
                <li>Platform to experiment and improvised without fear.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">Skills You’ll Develop</h4>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Confidence & Stage Presence</li>
                <li>Leadership & Event Management</li>
                <li>Technical Know-how</li>
                <li>Creativity & Adaptability</li>
                <li>Empathy & Respect</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 10. Fourth Wall
  const fourthWallContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Fourth Wall</h2>
      <Card className="bg-purple-50 border-purple-200 dark:bg-purple-900/10">
        <CardHeader><CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2"><Drama className="h-6 w-6" /> The Theatre Club</CardTitle></CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-lg">
          <p>Named for the idea of “breaking the fourth wall”, this performing arts club is led by Prof. Tony Paul. It blends theatre as an expressive art form and an extension of literary study.</p>
          <p><strong>Multilingual Approach:</strong> Performances often weave together English with regional languages (Kannada, Tamil, Telugu), celebrating linguistic diversity.</p>
          <p><strong>Fusion:</strong> Blends literature with popular culture (classic texts, cinema, music, memes).</p>
          <p>Students take on roles in acting, backstage management, costume, sound design, lighting, and scripting, gaining a complete understanding of performance production.</p>
        </CardContent>
      </Card>
    </div>
  );

  // 11. Phoenix
  const phoenixContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Phoenix Club</h2>
      <Card className="bg-orange-50 border-orange-200 dark:bg-orange-900/10">
        <CardHeader><CardTitle className="text-orange-700 dark:text-orange-400 flex items-center gap-2"><PenTool className="h-6 w-6" /> The Editorial Committee</CardTitle></CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-lg">
          <p>Founded by Prof. Rashi Tibrewal, this is a creative space for students who wish to think, write, imagine, design, and express. </p>
          <p><strong>Our Work:</strong> The team behind “Phoenix”, the college annual magazine (2024–25). It has grown into a vibrant, multi-year community.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-bold mb-2">Why Join?</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Explore content writing, photography, design, and marketing.</li>
                <li>Access to a Design Room with design software.</li>
                <li>Platform to grow confidence and contribute to the college magazine.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Skills</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Content writing & proofreading</li>
                <li>Design skills (Canva, etc.)</li>
                <li>Photography & Visual storytelling</li>
                <li>Planning & Leadership</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 12. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Our Faculty</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Ms. Simran", role: "Head of Dept, Assistant Professor", qual: "M.A English, KSET", email: "s.simranwrites@gmail.com" },
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
              <span className="flex items-center justify-center gap-1 text-xs text-muted-foreground"><Mail className="h-3 w-3" /> {faculty.email}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // 13. Contact
  const contactContent = (
    <div className="max-w-lg mx-auto text-center" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
        <Mail className="h-5 w-5" /> departmentofenglishrbanms@gmail.com
      </p>
    </div>
  );

  const sections = [
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "facilities", label: "Facilities", content: facilitiesContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "programmes", label: "Programmes", content: programmesContent },
    { id: "certificate-courses", label: "Certificate Courses", content: certCoursesContent },
    { id: "matrix", label: "Course Matrix", content: matrixContent },
    { id: "objectives", label: "Course Objectives", content: objContent },
    { id: "outcomes", label: "Programme Outcome", content: outcomesContent },
    { id: "natya", label: "Natya", content: natyaContent },
    { id: "fourth-wall", label: "Fourth Wall", content: fourthWallContent },
    { id: "phoenix", label: "Phoenix", content: phoenixContent },
    { id: "faculty", label: "Faculty Profile", content: facultyContent },
    { id: "contact", label: "Contact", content: contactContent },
  ];

  return (
    <DepartmentLayout
      title="Department of English & Communications"
      tagline="Words are not just letters, they are doorways."
      sections={sections}
    />
  );
}
