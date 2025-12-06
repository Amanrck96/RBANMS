import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Landmark,
  Scale,
  BookOpen,
  Globe,
  Users,
  Target,
  Lightbulb,
  Award,
  Scroll,
  PenTool,
  Brain,
  History,
  TrendingUp,
  Map,
  Mail
} from 'lucide-react';

export default function ArtsDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        In the Department of Arts, learning becomes a journey into understanding societies, ideas, systems and human thought. Our classrooms are vibrant spaces where curiosity meets scholarship, where discussions evolve into insights and every student grows into an observer, analyst and responsible citizen.
      </p>
      <p>
        Pursuing Arts is not just about studying past events, economic structures or political institutions, it is about developing the ability to interpret change, evaluate issues and engage meaningfully with the world. To that end, we cultivate an inclusive and lively academic environment where every student’s perspective is valued and intellectual exploration encouraged.
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
      <div className="text-muted-foreground italic text-sm space-y-2 text-left">
        <p>“To develop an academic environment where the social sciences are learned with intellectual discipline, analytical rigor and a deep appreciation for cultural and societal diversity.”</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>To nurture confident thinkers, informed decision-makers and responsible contributors.</li>
          <li>To deliver high-quality education in History, Economics and Political Science.</li>
          <li>To cultivate capacities for research, interpretation, logical reasoning and ethical decision-making.</li>
          <li>To promote research, entrepreneurship, and problem-solving for real-world challenges.</li>
        </ul>
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
            "In-depth knowledge: History, Economics, Political Science",
            "Emphasis on analytical reasoning",
            "Applied learning: Projects, field activities, policy reviews",
            "Exposure to contemporary issues",
            "Research aptitude & Communication skills",
            "Supportive & disciplined learning environment"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Developed */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Skills Developed</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Critical Thinking", "Public Speaking", "Data Interpretation", "Research Orientation", "Industry Awareness", "Observation"
          ].map((skill, i) => (
            <Badge key={i} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </div>

      {/* Courses Offered */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Courses</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>1. B.A. (History, Economics, Political Science)</li>
          <li>2. B.A. (Physical Education, History, Political Science)</li>
          <li>3. B.A. (Journalism, History, Economics)</li>
          <li className="italic text-xs mt-2">*Compulsory Course in Constitutional Values for all streams.</li>
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
          Strengthen practical understanding, enhance analytical abilities, develop employability skills, and encourage holistic academic growth through hands-on activities.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Programme Outcomes</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Acquire disciplinary knowledge, apply theoretical insights to real challenges, assess global developments, and develop critical thinking and interpersonal skills.
        </p>
      </CardContent>
    </Card>
  ];

  return (
    <DepartmentLayout
      title="Department of Arts"
      tagline="We explore the World Through History, Economics and Political Science."
      activeTab="arts"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
    >
      {/* Subject Sections */}
      <section id="subjects" className="space-y-12">
        {/* History */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 rounded-lg"><History className="h-8 w-8 text-orange-600" /></div>
            <h2 className="text-3xl font-bold text-slate-800">History</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            History emphasises the value of context, continuity, and transformation. Students investigate various historical periods, significant figures, and influential movements, gaining the tools to assess contemporary realities and anticipate future challenges through a historical lens.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-bold mb-4">Course Matrix - History</h3>
            <Tabs defaultValue="h_sem1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-4">
                <TabsTrigger value="h_sem1">Sem 1</TabsTrigger>
                <TabsTrigger value="h_sem2">Sem 2</TabsTrigger>
                <TabsTrigger value="h_sem3">Sem 3</TabsTrigger>
                <TabsTrigger value="h_sem4">Sem 4</TabsTrigger>
                <TabsTrigger value="h_sem5">Sem 5</TabsTrigger>
                <TabsTrigger value="h_sem6">Sem 6</TabsTrigger>
              </TabsList>
              <TabsContent value="h_sem1"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - History of Ancient India</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="h_sem2"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - History of Medieval India</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="h_sem3"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - History of Modern Indian Uprisings upto 1857</li><li>Elective - Builders of Modern India</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="h_sem4"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - History of Modern India 1858 to 1947</li><li>Elective - Cultural History of India</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="h_sem5"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - History of Modern World 1500 to 1945</li><li>CORE - History of Tourism</li><li>Elective - Aspects of Archaeology and Musicology</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="h_sem6"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - History of Karnataka upto 1956</li><li>Elective - History of Contemporary India / History of Sci & Tech</li></ul></CardContent></Card></TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Economics */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg"><TrendingUp className="h-8 w-8 text-green-600" /></div>
            <h2 className="text-3xl font-bold text-slate-800">Economics</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Economics helps individuals, businesses, and governments make informed decisions about limited resources. It develops crucial analytical and problem-solving skills, provides a framework for understanding how markets and economies work, and offers insights into personal finance, public policy, and career opportunities.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-bold mb-4">Course Matrix - Economics</h3>
            <Tabs defaultValue="e_sem1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-4">
                <TabsTrigger value="e_sem1">Sem 1</TabsTrigger>
                <TabsTrigger value="e_sem2">Sem 2</TabsTrigger>
                <TabsTrigger value="e_sem3">Sem 3</TabsTrigger>
                <TabsTrigger value="e_sem4">Sem 4</TabsTrigger>
                <TabsTrigger value="e_sem5">Sem 5</TabsTrigger>
                <TabsTrigger value="e_sem6">Sem 6</TabsTrigger>
              </TabsList>
              <TabsContent value="e_sem1"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Micro Economics</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="e_sem2"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Macro Economics</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="e_sem3"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Public Economics</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="e_sem4"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - History of Modern India 1858 to 1947</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="e_sem5"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Basic Quantitative Techniques / International Economics</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="e_sem6"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Statistics for Economics / Agricultural Economics</li></ul></CardContent></Card></TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Political Science */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg"><Scale className="h-8 w-8 text-blue-600" /></div>
            <h2 className="text-3xl font-bold text-slate-800">Political Science</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Political Science enables learners to interpret complex societal issues, propose solutions, and engage in meaningful dialogue on matters of public concern. It equips them with the analytical and critical skills needed to evaluate political systems, policies, and institutions.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-bold mb-4">Course Matrix - Political Science</h3>
            <Tabs defaultValue="p_sem1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-4">
                <TabsTrigger value="p_sem1">Sem 1</TabsTrigger>
                <TabsTrigger value="p_sem2">Sem 2</TabsTrigger>
                <TabsTrigger value="p_sem3">Sem 3</TabsTrigger>
                <TabsTrigger value="p_sem4">Sem 4</TabsTrigger>
                <TabsTrigger value="p_sem5">Sem 5</TabsTrigger>
                <TabsTrigger value="p_sem6">Sem 6</TabsTrigger>
              </TabsList>
              <TabsContent value="p_sem1"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Foundational Concepts</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="p_sem2"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Western Political Thought</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="p_sem3"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Indian Polity and Contemporary Issues</li><li>Elective - Human Rights / Good Governance</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="p_sem4"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Parliamentary System in India</li><li>Elective - Indian Political Thought / Gender and Politics</li><li>Skill - Socio-Economic and Political Survey</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="p_sem5"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Principles of Public Administration</li><li>CORE - International Relations and Issues</li><li>Skill - Legislative Procedures And Practices</li></ul></CardContent></Card></TabsContent>
              <TabsContent value="p_sem6"><Card><CardContent className="pt-6"><ul className="list-disc pl-5 text-muted-foreground"><li>CORE - Public Policy and Administration in India</li><li>International Institutions and Foreign Policy</li></ul></CardContent></Card></TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Common Papers */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-lg"><BookOpen className="h-8 w-8 text-red-600" /></div>
            <h2 className="text-3xl font-bold text-slate-800">Common Papers</h2>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-bold mb-4">Constitutional Values (For BA / B.Com / BBA / BCA)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader><CardTitle className="text-lg">Semester 1</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">COMPULSORY PAPER - Constitutional Values – I</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="text-lg">Semester 2</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">COMPULSORY PAPER - Constitutional Values – II</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Activities</h2>
        <Card>
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">The Department of Arts conducts many events and activities for students, including:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Seminar on Contemporary Economic Issues",
                "Educational Visits",
                "Annual “ECO-WIZZ” Quiz Competition",
                "Annual Mock Budget Session",
                "Field Trips",
                "Model Parliaments"
              ].map((act, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-sm">{act}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Faculty Section */}
      <section id="faculty">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">Dr. Sudhakara Karakoti</CardTitle>
              <CardDescription className="text-primary font-medium">Head of Department, Professor (Political Science)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Education:</strong> MA, M.Phil, Ph.D (JNU)</p>
              <p><strong>About:</strong> Gold medalist from Osmania University. Former Asst Professor at Delhi University and Wollega University (Ethiopia). Author of books on social exclusion. Expertise in Public Policy, Human Rights, and Governance.</p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">Dr. Avinash V</CardTitle>
              <CardDescription className="text-primary font-medium">Assistant Professor (History)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Education:</strong> MA, Ph.D (Mangalore University)</p>
              <p><strong>About:</strong> Served as Head of Dept (2021-23). Published various research papers in National and International journals.</p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">Mehnaaz Safura</CardTitle>
              <CardDescription className="text-primary font-medium">Assistant Professor (Economics)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Education:</strong> MA, BA, Ph.D candidate</p>
              <p><strong>About:</strong> IQAC Coordinator. Teaches International Trade, Public Economics. Research focus on women’s entrepreneurship and green economics.</p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">Mr. Kashinatha</CardTitle>
              <CardDescription className="text-primary font-medium">Assistant Professor (History)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Education:</strong> MA History, KSET, NET</p>
              <p><strong>About:</strong> Expertise in Karnataka History & Culture, Indian History, and Archaeological Sources. Presented papers in national seminars.</p>
            </CardContent>
          </Card>
          <Card className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">Ms. Anusha Chari</CardTitle>
              <CardDescription className="text-primary font-medium">Assistant Professor (Economics)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Education:</strong> MA Economics (Goa University), NCC ‘C’ Certificate</p>
              <p><strong>About:</strong> Expertise in Indian Economy, Agricultural Economics, Econometrics. Committed to discipline and excellence.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 p-4 bg-slate-100 rounded text-center">
          <p className="flex items-center justify-center gap-2 text-muted-foreground font-medium"><Mail className="h-5 w-5" /> Contact: hodartsrbanms@gmail.com</p>
        </div>
      </section>
    </DepartmentLayout>
  );
}
