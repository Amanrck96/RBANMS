import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Languages,
  Users,
  Target,
  Lightbulb,
  Drama,
  Globe,
  Star,
  Calendar,
  Award,
  Library,
  Mail
} from 'lucide-react';

export default function LanguagesDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
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
          (Additional English is conducted by the Department of English for eligible students)
        </p>
      </div>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <p className="text-muted-foreground italic">
        "To build a society where every individual is empowered with knowledge, skills, and values. To help students appreciate regional languages, literature, and culture, and foster an inclusive learning environment."
      </p>
      <div className="pt-2">
      </div>
    </div>
  );

  const sidebarContent = (
    <>
      {/* Highlights Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Comprehensive Undergraduate Curriculum",
            "Student-Centric Teaching Methods",
            "Literary & Cultural Activities",
            "Research Orientation",
            "Strong Library Resources"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Objectives Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Objectives</h4>
        <ul className="space-y-3">
          {[
            "Develop Listening & Speaking Skills",
            "Improve Reading & Writing Abilities",
            "Build Vocabulary & Grammar",
            "Understand Indian Culture",
            "Appreciate Regional Literature"
          ].map((obj, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {obj}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Languages className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Linguistic Diversity</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          We celebrate multilingualism by offering Kannada, Hindi, and Tamil, fostering a deep appreciation for regional identity and communication.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <BookOpen className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Literature & Culture</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Through stories, poems, and essays, students explore the rich heritage of Indian society, values, and traditions.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Languages"
      tagline="Celebrating Linguistic Diversity."
      activeTab="languages"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Language Programmes */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Language Programmes</h2>
        <div className="bg-slate-50 p-6 rounded-xl border">
          <Tabs defaultValue="hindi" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-white shadow-sm mb-8">
              <TabsTrigger value="hindi" className="py-2">Hindi</TabsTrigger>
              <TabsTrigger value="kannada" className="py-2">Kannada</TabsTrigger>
              <TabsTrigger value="tamil" className="py-2">Tamil</TabsTrigger>
            </TabsList>

            <TabsContent value="hindi">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader><CardTitle className="text-2xl text-primary">Hindi</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Dedicated to the study, preservation, and promotion of Hindi language, literature, and culture. Fosters linguistic knowledge and literary appreciation through academic programs and cultural events.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="kannada">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader><CardTitle className="text-2xl text-primary">Kannada</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Committed to promoting the rich literary, linguistic, and cultural heritage of Kannada. Fosters appreciation for Kannada literature and traditions through dynamic teaching and creative activities.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tamil">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader><CardTitle className="text-2xl text-primary">Tamil</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Offers in-depth understanding of Tamil language, literature (Sangam to modern), and culture. Develops research ability, translation competence, and creative writing skills.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Literature Week</h3>
              <p className="text-sm text-muted-foreground">Essay writing, Debate, and Poetry competitions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">International Language Day</h3>
              <p className="text-sm text-muted-foreground">Celebrating multilingualism on 22 February.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Cultural Celebrations</h3>
              <p className="text-sm text-muted-foreground">Grand celebrations for Hindi Diwas and Kannada Rajyotsava.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Sunil Kumar", role: "Head of Dept - Hindi", qual: "M.A., B.Ed, Ph.D.", email: "sunilkumarshetty1977@gmail.com" },
            { name: "Abhimanyu Shinde", role: "Asst. Professor - Hindi", qual: "M.A., B.Ed", email: "abhimanyushinde14@gmail.com" },
            { name: "Pushpa Latha. K R", role: "Asst. Professor - Kannada", qual: "MA, B.Ed., NET, SLET", email: "pushpalatha.rbanmsfgc.gmail.com" },
            { name: "Dr. Narayanaswamy K", role: "Asst. Professor - Kannada", qual: "MA, PhD, NET-JRF", email: "narayankkyasamballi.gmail.com" },
            { name: "Ms. Sivapriya Kannan", role: "Asst. Professor - Tamil", qual: "", email: "priyakannan.8892@gmail.com" }
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
                {faculty.qual && <p className="text-xs text-muted-foreground mb-2">{faculty.qual}</p>}
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
