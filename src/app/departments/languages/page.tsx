import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Languages,
  BookOpen,
  Calendar,
  Users,
  Lightbulb,
  Target,
  Mail
} from 'lucide-react';

export default function LanguagesDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        Welcome to the Department of Languages.
      </p>
      <p>
        At RBANM’s First Grade College, Language Study is offered as a second language, other than the compulsory course in English. This is as prescribed by Bengaluru City University for students across all steams of BA, BCA, B.COM, and BBA.
      </p>
      <p className="font-semibold">The language options offered are:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Tamil</li>
        <li>Kannada</li>
        <li>Hindi</li>
        <li>Additional English (conducted by Department of English)</li>
      </ul>
    </div>
  );

  const ctaContent = (
    <div id="vision" className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-sm space-y-2">
        <p>In keeping with the ideals of the college and our founder, the Department of Languages attempts to:</p>
        <ul className="text-left space-y-1 list-disc pl-5">
          <li>Build a society where every individual is empowered with knowledge, skills, and values.</li>
          <li>Provide quality education and promote innovation.</li>
          <li>Help students appreciate regional languages, literature, and culture.</li>
          <li>Build confident and creative learners with strong communication skills.</li>
          <li>Encourage values of respect, empathy, and responsibility.</li>
          <li>Develop strong language skills and literary understanding.</li>
          <li>Foster an inclusive learning environment.</li>
        </ul>
      </div>
    </div>
  );

  const sidebarContent = (
    <>
      {/* Highlights Panel */}
      <div id="highlights" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Well-designed Undergraduate Curriculum",
            "Student-centric teaching (interactive methods)",
            "Qualified & Dedicated Faculty",
            "Literary & Cultural Activities",
            "Supportive Learning Environment (remedial classes)",
            "Strong Library Resources",
            "Research Orientation",
            "Career Guidance & Counselling"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div id="contact" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Contact</h4>
        <p className="text-sm text-muted-foreground">sunilkumarshetty1977@gmail.com</p>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card id="objectives" key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Lightbulb className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Objectives</h3>
        <ul className="text-slate-300 leading-relaxed text-sm text-left list-disc pl-5 space-y-2">
          <li><strong>Listening & Speaking:</strong> Communicate clearly, correctly, and effectively.</li>
          <li><strong>Reading Skills:</strong> Understand and interpret regional literature.</li>
          <li><strong>Writing Abilities:</strong> Construct simple to complex sentences, essays, etc.</li>
          <li><strong>Vocabulary & Grammar:</strong> Ensure accuracy and correct usage.</li>
          <li><strong>Culture & Literature:</strong> Understand Indian society and traditions.</li>
        </ul>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Calendar className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Events Preview</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Literature Week, International Language Day, Hindi Diwas, Kannada Rajyotsava.
        </p>
      </CardContent>
    </Card>
  ];

  const navItems = [
    { label: "Highlights", href: "#highlights" },
    { label: "Vision", href: "#vision" },
    { label: "Objectives", href: "#objectives" },
    { label: "Hindi", href: "#hindi" },
    { label: "Kannada", href: "#kannada" },
    { label: "Tamil", href: "#tamil" },
    { label: "Events", href: "#events" },
    { label: "Faculty", href: "#faculty" },
    { label: "Contact", href: "#contact" },
  ];


  return (
    <DepartmentLayout
      title="Department of Languages"
      tagline="Fostering linguistic knowledge and literary appreciation."
      activeTab="languages"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
      navItems={navItems}
    >

      {/* Language Sections */}
      <section id="languages-detail" className="space-y-8 scroll-mt-24">
        <Card id="hindi" className="scroll-mt-24">
          <CardHeader><CardTitle className="text-2xl text-orange-600">Hindi</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            The programme in Hindi is dedicated to the study, preservation, and promotion of the Hindi language, literature, and culture. It plays a vital role in fostering linguistic knowledge and literary appreciation among students. Through academic programs, research activities, and cultural events, the department encourages a deep understanding of Hindi as both a classical and modern language.
          </CardContent>
        </Card>

        <Card id="kannada" className="scroll-mt-24">
          <CardHeader><CardTitle className="text-2xl text-yellow-600">Kannada</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground">
            The programme in Kannada is committed to promoting the rich literary, linguistic, and cultural heritage of the Kannada language. Through dynamic teaching practices, creative activities, and artistic engagements, the department fosters a deep appreciation for Kannada literature and its diverse traditions. We strive to build strong language skills, encourage critical thinking, and nurture a sense of pride in Karnataka’s cultural identity among students.
          </CardContent>
        </Card>

        <Card id="tamil" className="scroll-mt-24">
          <CardHeader><CardTitle className="text-2xl text-red-600">Tamil</CardTitle></CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>The programme in Tamil is designed to offer an in-depth understanding of Tamil language, literature, culture, and history. Students are introduced to the richness of Tamil studies, ranging from Sangam literature to modern writings.</p>
            <p>Through the program, students develop research ability, critical thinking skills, translation competence, and creative writing skills. The department organizes seminars, workshops, guest lectures, and cultural events to enhance experiential learning.</p>
          </CardContent>
        </Card>
      </section>

      {/* Events */}
      <section id="events" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Events</h2>
        <Card className="bg-slate-50 border-none">
          <CardContent className="pt-6 text-muted-foreground space-y-4">
            <p>Dedicated to enriching students’ linguistic and cultural experiences, the Language Department regularly hosts events that highlight regional literature, art, and tradition.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Literature Week:</strong> Celebrated with daily events like Essay writing, Debate, and Poetry competitions.</li>
              <li><strong>International Language Day (22 Feb):</strong> Highlighting multilingualism and cultural diversity.</li>
              <li><strong>Celebrations:</strong> Hindi Diwas and Kannada Rajyotsava are grand celebrations in college.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Dr. Sunil Kumar", role: "Head of Dept (Hindi)", qual: "M.A. , B.Ed ,Ph.D.", email: "sunilkumarshetty1977@gmail.com" },
            { name: "Abhimanyu Shinde", role: "Asst. Professor (Hindi)", qual: "M.A., B. Ed", email: "abhimanyushinde14@gmail.com" },
            { name: "Pushpa Latha. K R", role: "Asst. Professor (Kannada)", qual: "MA. B.Ed., NET, SLET", email: "pushpalatha.rbanmsfgc.gmail.com" },
            { name: "Dr. Narayanaswamy K", role: "Asst. Professor (Kannada)", qual: "MA., PHD, UGC NET-JRF", email: "narayankkyasamballi.gmail.com" },
            { name: "Ms. Sivapriya Kannan", role: "Asst. Professor (Tamil)", qual: "", email: "priyakannan.8892@gmail.com" }
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
      </section>
    </DepartmentLayout>
  );
}
