import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen,
  Languages,
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
  Calendar,
  Library
} from 'lucide-react';

export default function LanguagesDepartmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-700 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-400 text-black hover:bg-yellow-300 border-none">
              Department of Languages
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Celebrating <span className="text-yellow-300">Linguistic Diversity</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-2xl leading-relaxed">
              Fostering a deep appreciation for regional languages, literature, and culture.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department of Languages</h2>
            <p className="text-muted-foreground leading-relaxed">
              At RBANM’s First Grade College, Language Study is offered as a second language, other than the compulsory course in English. This is as prescribed by Bengaluru City University for students across all streams of BA, BCA, B.COM, and BBA.
            </p>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">The language options offered are:</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base py-1 px-4">Tamil</Badge>
                <Badge variant="secondary" className="text-base py-1 px-4">Kannada</Badge>
                <Badge variant="secondary" className="text-base py-1 px-4">Hindi</Badge>
                <Badge variant="secondary" className="text-base py-1 px-4">Additional English</Badge>
              </div>
              <p className="text-sm text-muted-foreground italic">
                (Additional English is only for eligible students, conducted by the Department of English)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-orange-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Languages className="h-8 w-8 text-orange-600" />
                <span className="font-semibold text-orange-900">Multilingual</span>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <BookOpen className="h-8 w-8 text-red-600" />
                <span className="font-semibold text-red-900">Literature</span>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Drama className="h-8 w-8 text-yellow-600" />
                <span className="font-semibold text-yellow-900">Culture</span>
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

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-orange-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-orange-600" /> Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  In keeping with the ideals of the college and our founder, the Department of Languages attempts to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Build a society where every individual is empowered with knowledge, skills, and values.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Provide quality education, promote innovation and ethical values.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Help students appreciate regional languages, literature, and culture.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Build confident and creative learners with strong communication skills.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Encourage values of respect, empathy, and responsibility.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Inspire students to understand and contribute to India’s rich heritage.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Support students’ overall growth through meaningful learning experiences.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Develop strong language skills and literary understanding among students.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Encourage critical thinking, cultural sensitivity, and creative expression.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Foster an inclusive learning environment built on respect and empathy.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Prepare learners for academic, cultural, and professional growth.</li>
                  <li className="flex gap-2"><span className="text-orange-600">•</span> Inspire lifelong appreciation of regional literature, heritage, and social responsibility.</li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Target className="h-6 w-6 text-red-600" /> Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-red-600">1.</span> <span><strong>To develop listening and speaking skills:</strong> So that learners can communicate clearly, correctly, and effectively.</span></li>
                    <li className="flex gap-2"><span className="text-red-600">2.</span> <span><strong>To improve reading skills:</strong> Enabling students to understand, interpret, and enjoy various forms of regional literature — stories, poems, essays, etc.</span></li>
                    <li className="flex gap-2"><span className="text-red-600">3.</span> <span><strong>To develop writing abilities:</strong> Helping learners construct simple to complex sentences and write letters, essays, dialogues, and creative pieces.</span></li>
                    <li className="flex gap-2"><span className="text-red-600">4.</span> <span><strong>To build vocabulary and understanding of grammar:</strong> Ensuring accuracy and correct usage of the language.</span></li>
                    <li className="flex gap-2"><span className="text-red-600">5.</span> <span><strong>To introduce learners to Indian culture and literature:</strong> Understanding Indian society, values, and traditions through regional literature.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Undergraduate Curriculum", desc: "Comprehensive programme aligned with university guidelines, focusing on regional literature, grammar, and communication." },
            { icon: Users, title: "Student-centric teaching", desc: "Interactive teaching methods such as presentations, group discussions, and literary analysis sessions." },
            { icon: Award, title: "Qualified Faculty", desc: "Faculty members with strong academic backgrounds, active participation in seminars, conferences, and research publications." },
            { icon: Drama, title: "Literary & Cultural Activities", desc: "Creates a hands-on, practice-based experience of Indian culture." },
            { icon: Heart, title: "Supportive Environment", desc: "Regular remedial classes held for those who are challenged by the curriculum." },
            { icon: Library, title: "Strong Library Resources", desc: "Access to a well-equipped library with a rich collection of Hindi literature, reference books, journals, and e-resources." },
            { icon: Lightbulb, title: "Research Orientation", desc: "Students encouraged to present papers, participate in workshops, and engage in literary projects." },
            { icon: Briefcase, title: "Career Guidance", desc: "Guidance for careers in teaching, civil services, media, and communication fields." },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <item.icon className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Language Programmes */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Language Programmes</h2>
          <Tabs defaultValue="hindi" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hindi">Hindi</TabsTrigger>
              <TabsTrigger value="kannada">Kannada</TabsTrigger>
              <TabsTrigger value="tamil">Tamil</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="hindi">
                <Card>
                  <CardHeader><CardTitle className="text-orange-700">Hindi</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      The programme in Hindi is dedicated to the study, preservation, and promotion of the Hindi language, literature, and culture. It plays a vital role in fostering linguistic knowledge and literary appreciation among students. Through academic programs, research activities, and cultural events, the department encourages a deep understanding of Hindi as both a classical and modern language.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="kannada">
                <Card>
                  <CardHeader><CardTitle className="text-red-700">Kannada</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      The programme in Kannada is committed to promoting the rich literary, linguistic, and cultural heritage of the Kannada language. Through dynamic teaching practices, creative activities, and artistic engagements, the department fosters a deep appreciation for Kannada literature and its diverse traditions. We strive to build strong language skills, encourage critical thinking, and nurture a sense of pride in Karnataka’s cultural identity among students.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tamil">
                <Card>
                  <CardHeader><CardTitle className="text-yellow-700">Tamil</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The programme in Tamil is designed to offer an in-depth understanding of Tamil language, literature, culture, and history. Students are introduced to the richness of Tamil studies, ranging from Sangam literature to modern writings. The curriculum provides a strong foundation in linguistics, grammar, literary analysis, and the evolution of the Tamil language, helping students gain both theoretical knowledge and analytical skills.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Through the program, students develop research ability, critical thinking skills, translation competence, and creative writing skills. The department organizes seminars, workshops, guest lectures, and cultural events to enhance experiential learning. Graduates from the department are well-prepared for careers such as teaching, writing, research, journalism, translation, and various cultural and academic fields. Above all, the programme nurtures pride and love for Tamil and its culture.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Events</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-center text-muted-foreground mb-8">
            Dedicated to enriching students’ linguistic and cultural experiences, the Language Department regularly hosts events that highlight regional literature, art, and tradition. Our annual activities reflect our commitment to preserving heritage and inspiring creativity.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-orange-50 border-none">
              <CardContent className="p-6 text-center">
                <Calendar className="h-10 w-10 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Literature Week</h3>
                <p className="text-sm text-muted-foreground">
                  Celebrated with daily events throughout the week, including Essay writing, Debate, and Poetry writing competitions, aimed at enhancing students’ linguistic and literary skills.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-none">
              <CardContent className="p-6 text-center">
                <Globe className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">International Language Day</h3>
                <p className="text-sm text-muted-foreground">
                  On 22 February, highlighting the significance of multilingualism and cultural diversity.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-none">
              <CardContent className="p-6 text-center">
                <Star className="h-10 w-10 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Cultural Celebrations</h3>
                <p className="text-sm text-muted-foreground">
                  Hindi Diwas and Kannada Rajyotsava are grand celebrations in college.
                </p>
              </CardContent>
            </Card>
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
                name: "Dr. Sunil Kumar",
                qual: "M.A. , B.Ed ,Ph.D.",
                role: "Head of the Department Languages - Hindi",
                email: "sunilkumarshetty1977@gmail.com"
              },
              {
                name: "Abhimanyu Shinde",
                qual: "M.A., B. Ed",
                role: "Asst. Professor, Dept. of Languages - Hindi",
                email: "abhimanyushinde14@gmail.com"
              },
              {
                name: "Pushpa Latha. K R",
                qual: "MA. B.Ed., NET, SLET",
                role: "Asst. Professor, Dept. of Languages - Kannada",
                email: "pushpalatha.rbanmsfgc.gmail.com"
              },
              {
                name: "Dr. Narayanaswamy K",
                qual: "MA. Kannada., MA MCJ., UGC NET-JRF., PhD",
                role: "Asst. Professor, Dept. of Languages - Kannada",
                email: "narayankkyasamballi.gmail.com"
              },
              {
                name: "Ms. Sivapriya Kannan",
                qual: "",
                role: "Asst. Professor, Dept of Languages - Tamil",
                email: "priyakannan.8892@gmail.com"
              }
            ].map((faculty, i) => (
              <Card key={i} className="text-center hover:border-orange-400 transition-colors">
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{faculty.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">{faculty.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  {faculty.qual && <p className="text-sm text-muted-foreground mb-2">{faculty.qual}</p>}
                  <a href={`mailto:${faculty.email}`} className="text-sm text-muted-foreground hover:text-orange-600 flex items-center justify-center gap-2">
                    <Mail className="h-3 w-3" /> {faculty.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-12 bg-orange-900 text-white text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">For more information about the Department of Languages</p>
          {/* Email not explicitly provided in the main contact section, but faculty emails are there. 
              The user text didn't specify a general department email for Languages, unlike English. 
              I'll leave it generic or use the college contact if needed, but for now I'll omit a specific mailto button if none provided.
              Wait, the user text says "Contact" button but doesn't list a specific email under "Contact" for Languages, 
              it just lists faculty emails. I will skip the specific email button here.
          */}
        </div>
      </section>
    </div>
  );
}
