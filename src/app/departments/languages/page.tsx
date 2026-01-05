import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
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
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-black">
        <Card className="bg-white border-2 border-primary">
          <CardHeader><CardTitle className="text-xl text-black">HIGHLIGHTS</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Well-designed Undergraduate Curriculum: Offers a comprehensive programme aligned with university guidelines, focusing on regional literature, grammar, and communication.",
                "Student-centric teaching: Use of interactive teaching methods such as presentations, group discussions, and literary analysis sessions.",
                "Qualified & Dedicated Faculty: Faculty members with strong academic backgrounds, active participation in seminars, conferences, and research publications.",
                "Literary & Cultural Activities: creates a hands-on, practice-based experience of Indian culture",
                "Supportive Learning Environment: regular remedial classes held for those who are challenged by the curriculum",
                "Strong Library Resources: Access to a well-equipped library with a rich collection of Hindi literature, reference books, journals, and e-resources.",
                "Research Orientation: Students encouraged to present papers, participate in workshops, and engage in literary projects.",
                "Career Guidance & Counselling: Guidance for careers in teaching, civil services, media, and communication fields."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-base text-black">
                  <span className="text-primary font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 2. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-white text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6 text-black">
        <Target className="h-8 w-8 stroke-[3px] text-primary" /> VISION & MISSION
      </h3>
      <div className="text-black text-lg space-y-4 leading-relaxed">
        <p>In keeping with the ideals of the college and our founder, of the Department of Languages attempts to:</p>
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
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">OBJECTIVES</h3>
          <ul className="text-black leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li><strong>To develop listening and speaking skills:</strong> So that learners can communicate clearly, correctly, and effectively.</li>
            <li><strong>To improve reading skills:</strong> Enabling students to understand, interpret, and enjoy various forms of regional literature — stories, poems, essays, etc.</li>
            <li><strong>To develop writing abilities:</strong> Helping learners construct simple to complex sentences and write letters, essays, dialogues, and creative pieces.</li>
            <li><strong>To build vocabulary and understanding of grammar:</strong> Ensuring accuracy and correct usage of the language.</li>
            <li><strong>To introduce learners to Indian culture and literature:</strong> Understanding Indian society, values, and traditions through regional literature</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 4. Outcomes
  const outcomesContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Target className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">PROGRAMME OUTCOME</h3>
          <ul className="text-black leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            {/* Note: Programme Outcomes text was not distinct in the prompt for Languages, it seems like Objectives cover it or it was implicit.
                However, looking at the previous file, there were outcomes. The prompt provided 'Vision & Mission', 'Objectives', 'Highlights' for Languages.
                Wait, looking at the prompt text again...
                "OBJECTIVES ... 1... 5"
                "HIGHLIGHTS ... "
                It does not explicitly label "PROGRAMME OUTCOMES" for Languages in the prompt text I see in the turn history.
                The prompt has buttons: "Highlights, Vision & Mission, Course Objectives, Programme Outcome, Hindi, Kannada, Tamil, Events, Faculty Profile, Contact".
                But under Language text, I see Vision, Objectives, Highlights, Hindi, Kannada, Tamil, Events, Faculty.
                I don't see specific "Programme Outcomes" text block.
                I will retain the layout but I might have to omit or infer outcomes if not provided.
                Actually, looking closer... "OBJECTIVES 1. ... 5."
                Then "HIGHLIGHTS ...".
                Maybe I missed it? No.
                I will assume the user considers Objectives as enough or I should leave Outcomes empty?
                Or maybe I can check if I can reuse the old ones?
                The prompt says "update as it is contant which i now give you".
                If I don't see Outcomes content, I shouldn't invent it.
                I will remove the Programme Outcome section if I don't have text, OR check if I missed it.
                Wait, the prompt list buttons: "Buttons: Highlights, Vision & Mission, Course Objectives, Programme Outcome, ..."
                So it expects the section.
                If I look at English, it had "PROGRAMME OUTCOMES 1...".
                If Languages doesn't have it in the text block, it's a gap.
                However, I must assume "Objectives" might serve double duty or I should use a placeholder/keep old one?
                "update as it is content which i now give you".
                The old file had outcomes: "Proficiency in listening...".
                I will keep the old outcomes as a fallback because the button exists, but I won't change the text if not provided.
                Actually, I'll prefer to allow the user to provide it later if missing, or use the Objectives as a base if needed.
                Let's stick to old content for OUTCOMES if not provided, to avoid breaking the button navigation, but style it correctly.
            */}
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
      <Card className="border-2 border-primary bg-white">
        <CardHeader><CardTitle className="text-3xl text-primary">HINDI</CardTitle></CardHeader>
        <CardContent className="text-black text-lg leading-relaxed">
          The programme in Hindi is dedicated to the study, preservation, and promotion of the Hindi language, literature, and culture. It plays a vital role in fostering linguistic knowledge and literary appreciation among students. Through academic programs, research activities, and cultural events, the department encourages a deep understanding of Hindi as both a classical and modern language.
        </CardContent>
      </Card>
    </div>
  );

  // 6. Kannada
  const kannadaContent = (
    <div className="space-y-6">
      <Card className="border-2 border-primary bg-white">
        <CardHeader><CardTitle className="text-3xl text-primary">KANNADA</CardTitle></CardHeader>
        <CardContent className="text-black text-lg leading-relaxed">
          The programme in Kannada is committed to promoting the rich literary, linguistic, and cultural heritage of the Kannada language. Through dynamic teaching practices, creative activities, and artistic engagements, the department fosters a deep appreciation for Kannada literature and its diverse traditions. We strive to build strong language skills, encourage critical thinking, and nurture a sense of pride in Karnataka’s cultural identity among students.
        </CardContent>
      </Card>
    </div>
  );

  // 7. Tamil
  const tamilContent = (
    <div className="space-y-6">
      <Card className="border-2 border-primary bg-white">
        <CardHeader><CardTitle className="text-3xl text-primary">TAMIL</CardTitle></CardHeader>
        <CardContent className="text-black text-lg space-y-4 leading-relaxed">
          <p>The programme in Tamil is designed to offer an in-depth understanding of Tamil language, literature, culture, and history. Students are introduced to the richness of Tamil studies, ranging from Sangam literature to modern writings.</p>
          <p>The curriculum provides a strong foundation in linguistics, grammar, literary analysis, and the evolution of the Tamil language, helping students gain both theoretical knowledge and analytical skills.</p>
          <p>Through the program, students develop research ability, critical thinking skills, translation competence, and creative writing skills. The department organizes seminars, workshops, guest lectures, and cultural events to enhance experiential learning. Graduates from the department are well-prepared for careers such as teaching, writing, research, journalism, translation, and various cultural and academic fields. Above all, the programme nurtures pride and love for Tamil and its culture.</p>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Events
  const eventsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">EVENTS</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6 text-black space-y-4 text-lg">
          <p>Dedicated to enriching students’ linguistic and cultural experiences, the Language Department regularly hosts events that highlight regional literature, art, and tradition. Our annual activities reflect our commitment to preserving heritage and inspiring creativity.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Literature Week:</strong> is celebrated with daily events throughout the week, including Essay writing, Debate, and Poetry writing competitions, aimed at enhancing students’ linguistic and literary skills.</li>
            <li><strong>International Language Day:</strong> on 22 February is for highlighting the significance of multilingualism and cultural diversity.</li>
            <li><strong>Celebrations:</strong> Hindi Diwas and Kannada Rajyotsava are grand celebrations in college.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 9. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">OUR FACULTY</h2>
      <div className="mb-6 relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/departments/languages-faculty.jpg"
          alt="Department of Languages Faculty and Staff"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Dr. Sunil Kumar", role: "Head of the Department Languages, Asst. Professor - Hindi", qual: "M.A. , B.Ed ,Ph.D.", email: "sunilkumarshetty1977@gmail.com" },
          { name: "Abhimanyu Shinde", role: "Asst. Professor, Dept. of Languages - Hindi", qual: "M.A., B. Ed", email: "abhimanyushinde14@gmail.com" },
          { name: "Pushpa Latha. K R", role: "Asst. Professor, Dept. of Languages - Kannada", qual: "MA. B.Ed., NET, SLET", email: "pushpalatha.rbanmsfgc.gmail.com" },
          { name: "Dr. Narayanaswamy K", role: "Asst. Professor, Dept. of Languages - Kannada", qual: "MA. Kannada., MA MCJ., UGC NET-JRF., PhD", email: "narayankkyasamballi.gmail.com" },
          { name: "Ms. Sivapriya Kannan", role: "Asst. Professor, Dept of Languages - Tamil", qual: "", email: "priyakannan.8892@gmail.com" }
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
              <span className="flex items-center justify-center gap-1 text-xs text-black"><Mail className="h-3 w-3" /> {faculty.email}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // 10. Contact
  const contactContent = (
    <div className="max-w-lg mx-auto text-center" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-black">CONTACT</h2>
      <p className="text-lg text-black flex items-center justify-center gap-2">
        <Mail className="h-5 w-5 text-primary" /> sunilkumarshetty1977@gmail.com
      </p>
    </div>
  );

  const sidebarContent = (
    <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
      <Image
        src="/images/departments/languages-faculty.jpg"
        alt="Department of Languages Faculty"
        fill
        className="object-cover"
        priority
      />
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
      pageId="dept-languages"
      tagline="Welcome to the Department of Languages. At RBANM’s First Grade College, Language Study is offered as a second language, other than the compulsory course in English. This is as prescribed by Bengaluru City University for students across all steams of BA, BCA, B.COM, and BBA. The language option offered are: Tamil, Kannada, Hindi, Additional English (only for eligible students, conducted by the Department of English)"
      sidebarContent={sidebarContent}
      sections={sections}
    />
  );
}
