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

  // 1. Highlights
  const highlightsContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Overview</h2>
        <p>
          At RBANM’s First Grade College, Language Study is offered as a second language, other than the compulsory course in English. This is as prescribed by Bengaluru City University for students across all steams of BA, BCA, B.COM, and BBA.
        </p>
        <p className="font-semibold text-foreground">The language options offered are:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tamil</li>
          <li>Kannada</li>
          <li>Hindi</li>
          <li>Additional English (conducted by Department of English)</li>
        </ul>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-xl">Department Highlights</CardTitle></CardHeader>
        <CardContent>
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
              <li key={i} className="flex gap-3 text-base text-muted-foreground">
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
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        <Target className="h-8 w-8 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-lg space-y-4 leading-relaxed">
        <p>In keeping with the ideals of the college and our founder, the Department of Languages attempts to:</p>
        <ul className="text-left space-y-2 list-disc pl-8 inline-block">
          <li>Build a society where every individual is empowered with knowledge, skills, and values, becoming self-reliant, responsible, and an active contributor to nation-building.</li>
          <li>Provide quality education, promote innovation and ethical values, and support every individual in realizing their full potential through holistic development.</li>
          <li>Help students appreciate regional languages, literature, and culture.</li>
          <li>Build confident and creative learners with strong communication skills.</li>
          <li>Encourage values of respect, empathy, and responsibility.</li>
          <li>Inspire students to understand and contribute to India’s rich heritage.</li>
          <li>Support students’ overall growth through meaningful learning experiences.</li>
          <li>Develop strong language skills and literary understanding among students.</li>
          <li>Encourage critical thinking, cultural sensitivity, and creative expression.</li>
          <li>Foster an inclusive learning environment built on respect and empathy.</li>
          <li>Prepare learners for academic, cultural, and professional growth.</li>
          <li>Inspire lifelong appreciation of regional literature, heritage, and social responsibility.</li>
        </ul>
      </div>
    </div>
  );

  // 3. Objectives
  const objContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-yellow-400" />
          <h3 className="text-3xl font-bold">Course Objectives</h3>
          <ul className="text-slate-300 leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li><strong>Listening & Speaking:</strong> Communicate clearly, correctly, and effectively.</li>
            <li><strong>Reading Skills:</strong> Understand and interpret regional literature.</li>
            <li><strong>Writing Abilities:</strong> Construct simple to complex sentences, essays, etc.</li>
            <li><strong>Vocabulary & Grammar:</strong> Ensure accuracy and correct usage.</li>
            <li><strong>Culture & Literature:</strong> Understand Indian society and traditions.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 4. Outcomes
  const outcomesContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Target className="h-16 w-16 mx-auto text-white" />
          <h3 className="text-3xl font-bold">Programme Outcome</h3>
          <ul className="text-primary-foreground/90 leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li>Proficiency in listening, speaking, reading, and writing in Indian languages.</li>
            <li>Appreciation of literary texts and cultural contexts.</li>
            <li>Development of creative writing and translation skills.</li>
            <li>Understanding of Indian society and traditions through literature.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 5. Hindi
  const hindiContent = (
    <div className="space-y-6">
      <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-900/10 dark:border-orange-800">
        <CardHeader><CardTitle className="text-3xl text-orange-600">Hindi</CardTitle></CardHeader>
        <CardContent className="text-muted-foreground text-lg leading-relaxed">
          The programme in Hindi is dedicated to the study, preservation, and promotion of the Hindi language, literature, and culture. It plays a vital role in fostering linguistic knowledge and literary appreciation among students. Through academic programs, research activities, and cultural events, the department encourages a deep understanding of Hindi as both a classical and modern language.
        </CardContent>
      </Card>
    </div>
  );

  // 6. Kannada
  const kannadaContent = (
    <div className="space-y-6">
      <Card className="border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10 dark:border-yellow-800">
        <CardHeader><CardTitle className="text-3xl text-yellow-600">Kannada</CardTitle></CardHeader>
        <CardContent className="text-muted-foreground text-lg leading-relaxed">
          The programme in Kannada is committed to promoting the rich literary, linguistic, and cultural heritage of the Kannada language. Through dynamic teaching practices, creative activities, and artistic engagements, the department fosters a deep appreciation for Kannada literature and its diverse traditions. We strive to build strong language skills, encourage critical thinking, and nurture a sense of pride in Karnataka’s cultural identity among students.
        </CardContent>
      </Card>
    </div>
  );

  // 7. Tamil
  const tamilContent = (
    <div className="space-y-6">
      <Card className="border-red-200 bg-red-50/50 dark:bg-red-900/10 dark:border-red-800">
        <CardHeader><CardTitle className="text-3xl text-red-600">Tamil</CardTitle></CardHeader>
        <CardContent className="text-muted-foreground text-lg space-y-4 leading-relaxed">
          <p>The programme in Tamil is designed to offer an in-depth understanding of Tamil language, literature, culture, and history. Students are introduced to the richness of Tamil studies, ranging from Sangam literature to modern writings.</p>
          <p>Through the program, students develop research ability, critical thinking skills, translation competence, and creative writing skills. The department organizes seminars, workshops, guest lectures, and cultural events to enhance experiential learning.</p>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Events
  const eventsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Events</h2>
      <Card className="bg-slate-50 border-none">
        <CardContent className="pt-6 text-muted-foreground space-y-4 text-lg">
          <p>Dedicated to enriching students’ linguistic and cultural experiences, the Language Department regularly hosts events that highlight regional literature, art, and tradition.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Literature Week:</strong> Celebrated with daily events like Essay writing, Debate, and Poetry competitions.</li>
            <li><strong>International Language Day (22 Feb):</strong> Highlighting multilingualism and cultural diversity.</li>
            <li><strong>Celebrations:</strong> Hindi Diwas and Kannada Rajyotsava are grand celebrations in college.</li>
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
    </div>
  );

  // 10. Contact
  const contactContent = (
    <div className="max-w-lg mx-auto text-center" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
        <Mail className="h-5 w-5" /> sunilkumarshetty1977@gmail.com
      </p>
    </div>
  );

  const sections = [
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "objectives", label: "Course Objectives", content: objContent },
    { id: "outcomes", label: "Programme Outcome", content: outcomesContent },
    { id: "hindi", label: "Hindi", content: hindiContent },
    { id: "kannada", label: "Kannada", content: kannadaContent },
    { id: "tamil", label: "Tamil", content: tamilContent },
    { id: "events", label: "Events", content: eventsContent },
    { id: "faculty", label: "Faculty Profile", content: facultyContent },
    { id: "contact", label: "Contact", content: contactContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Languages"
      tagline="Welcome to our department, a vibrant community where every voice is heard and every story matters. We believe that learning is a shared journey of discovery, where diverse perspectives come together to spark creativity and understanding. Whether you are here to master a new skill, explore rich traditions, or shape your future career, you will find a supportive environment that nurtures your growth and inspires you to reach your full potential."
      sections={sections}
    />
  );
}
