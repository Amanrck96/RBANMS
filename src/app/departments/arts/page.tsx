import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Users,
  Target,
  Mail,
  Lightbulb,
  Award,
  Globe,
  History,
  Scale,
  Landmark
} from 'lucide-react';

export default function ArtsDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        In the Department of Arts, learning becomes a journey into understanding societies, ideas, systems and human thought. Our classrooms are vibrant spaces where curiosity meets scholarship, where discussions evolve into insights and every student grows into an observer, analyst and responsible citizen.
      </p>
      <p>
        Pursuing Arts is not just about studying past events, economic structures or political institution, it is about developing the ability to interpret change, evaluate issues and engage meaningfully with the world. To that end, we cultivate an inclusive and lively academic environment where every student’s perspective is valued and intellectual exploration encouraged.
      </p>
      <p>
        Beyond traditional teaching, we enrich learning through field visits, interactive sessions, projects, seminars, debates, group discussions, model parliaments, economic simulations and cross-disciplinary academic events, making the study of Arts dynamic, relevant and engaging.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <p className="text-muted-foreground italic">
        "To develop an academic environment where the social sciences are learned with intellectual discipline, analytical rigor and a deep appreciation for cultural and societal diversity."
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
          <span className="font-medium text-sm">hodartsrbanms@gmail.com</span>
        </div>
      </div>

      {/* Highlights Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Well-defined curriculum (History, Economics, Pol. Science)",
            "Emphasis on analytical reasoning",
            "Applied learning through projects & field activities",
            "Exposure to contemporary issues via seminars",
            "Focus on research aptitude & communication",
            "Supportive learning environment"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Panel */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Skills Developed</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Critical Thinking", "Public Speaking", "Data Interpretation", "Research Orientation", "Social Awareness"
          ].map((skill, i) => (
            <span key={i} className="bg-white border rounded px-2 py-1 text-xs font-semibold text-slate-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Lightbulb className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Objectives</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          To strengthen students’ practical understanding of economic concepts, enhance analytical abilities, and develop employability-oriented skills relevant to finance, policy, and research.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Programme Outcome</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Acquire domain specific knowledge, assess global developments, carry out simple research, and gain critical thinking skills to evaluate real world challenges.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Arts"
      tagline="Exploring the World Through History, Economics and Political Science."
      activeTab="arts"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Full Width Sections: Courses, Activities, Faculty */}

      {/* Course Matrices */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Course Matrices</h2>
        <div className="bg-slate-50 p-6 rounded-xl border">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto mb-8 bg-white shadow-sm h-auto p-1">
              <TabsTrigger value="history" className="py-2">History</TabsTrigger>
              <TabsTrigger value="economics" className="py-2">Economics</TabsTrigger>
              <TabsTrigger value="polscience" className="py-2">Political Science</TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="space-y-4">
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">Investigate various historical periods, significant figures, and influential movements to assess contemporary realities.</p>
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 font-bold text-slate-700"><tr><th className="p-4">Sem</th><th className="p-4">Paper Title</th></tr></thead>
                  <tbody className="divide-y">
                    {[
                      { sem: 1, title: "CORE - History of Ancient India" },
                      { sem: 2, title: "CORE - History of Medieval India" },
                      { sem: 3, title: "CORE - History of Modern Indian Uprisings upto 1857" },
                      { sem: 4, title: "CORE - History of Modern India 1858 to 1947" },
                      { sem: 5, title: "CORE - History of Modern World 1500 to 1945" },
                      { sem: 6, title: "CORE - History of Karnataka upto 1956" }
                    ].map((r, i) => <tr key={i}><td className="p-4 font-medium text-slate-500 text-center w-20">{r.sem}</td><td className="p-4">{r.title}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="economics" className="space-y-4">
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">Framework for understanding how markets work, personal finance, and public policy.</p>
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 font-bold text-slate-700"><tr><th className="p-4">Sem</th><th className="p-4">Paper Title</th></tr></thead>
                  <tbody className="divide-y">
                    {[
                      { sem: 1, title: "CORE - Micro Economics" },
                      { sem: 2, title: "CORE - Macro Economics" },
                      { sem: 3, title: "CORE - Public Economics" },
                      { sem: 4, title: "CORE - History of Modern India 1858 to 1947" },
                      { sem: 5, title: "CORE - Basic Quantitative Techniques" },
                      { sem: 6, title: "CORE - Statistics for Economics" }
                    ].map((r, i) => <tr key={i}><td className="p-4 font-medium text-slate-500 text-center w-20">{r.sem}</td><td className="p-4">{r.title}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="polscience" className="space-y-4">
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">Equipping with analytical skills to evaluate political systems, policies, and institutions.</p>
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 font-bold text-slate-700"><tr><th className="p-4">Sem</th><th className="p-4">Paper Title</th></tr></thead>
                  <tbody className="divide-y">
                    {[
                      { sem: 1, title: "CORE - Foundational Concepts" },
                      { sem: 2, title: "CORE - Western Political Thought" },
                      { sem: 3, title: "CORE - Indian Polity and Contemporary Issues" },
                      { sem: 4, title: "CORE - Parliamentary System in India" },
                      { sem: 5, title: "CORE - Principles of Public Administration" },
                      { sem: 6, title: "CORE - Public Policy and Administration in India" }
                    ].map((r, i) => <tr key={i}><td className="p-4 font-medium text-slate-500 text-center w-20">{r.sem}</td><td className="p-4">{r.title}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Activities Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Seminar on Contemporary Economic Issues",
            "Educational Visits",
            "Annual “ECO-WIZZ” Quiz Competition",
            "Annual Mock Budget Session",
            "Field Trips & Document Studies"
          ].map((act, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-2">
                  <BookOpen className="h-5 w-5 text-primary shrink-0 mt-1" /> {act}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dr. Sudhakara Karakoti */}
          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dr. Sudhakara Karakoti</CardTitle>
                  <CardDescription className="text-primary font-medium">Professor & HOD, Political Science</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">PhD (JNU), M.Phil (JNU)</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Mail className="h-3 w-3" /> hodartsrbanms@gmail.com</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground line-clamp-4 hover:line-clamp-none transition-all">
              Awarded National Merit Scholarship. Obtained M.Phil and Ph.D from JNU, New Delhi. Served as Assistant Professor in Delhi, Ethiopia, and Bangalore. Research areas: Public policy, Rural Development, Social Inclusion, Social Movements, Human Rights, International Relations, Law and Governance.
            </CardContent>
          </Card>

          {/* Dr. Avinash V */}
          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dr. Avinash V</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor, History</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">PhD (Mangalore University)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Served as HOD (2021-2023). Published various research papers in National and International journals. Specializes in History.
            </CardContent>
          </Card>

          {/* Mehnaaz Safura */}
          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mehnaaz Safura</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor, Economics</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">PhD Candidate, M.A, IQAC Coordinator</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Over 5 years of teaching experience. Teaches International Trade, Public Economics. Research focuses on women’s entrepreneurship and green economics.
            </CardContent>
          </Card>

          {/* Mr. Kashinatha */}
          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mr. Kashinatha</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor, History</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">MA, KSET, NET</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Research areas include Karnataka History & Culture, Freedom Movement. Cleared both KSET and NET in 2020.
            </CardContent>
          </Card>

          {/* Ms. Anusha Chari */}
          <Card>
            <CardHeader>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ms. Anusha Chari</CardTitle>
                  <CardDescription className="text-primary font-medium">Assistant Professor, Economics</CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">B.A, M.A</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              NCC ‘C’ Certificate holder. Expertise in Indian Economy, Agricultural Economics, Environmental Economics, Microeconomics.
            </CardContent>
          </Card>
        </div>
      </section>
    </DepartmentLayout>
  );
}
