import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  History,
  TrendingUp,
  Landmark,
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Award,
  PenTool,
  Globe
} from 'lucide-react';

export default function ArtsDepartmentPage() {

  // 1. Highlights
  const highlightsContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Welcome to the Department of Arts</h2>
        <h3 className="text-xl font-semibold text-primary">We explore the World Through History, Economics and Political Science</h3>
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

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-xl">Department Highlights</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Well-defined curriculum (History, Economics, Pol Science)",
                "Emphasis on analytical reasoning & evidence-based learning",
                "Applied learning (projects, field activities, policy reviews)",
                "Exposure to contemporary issues through seminars",
                "Focus on research aptitude & communication skills",
                "Supportive learning environment"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-base text-muted-foreground">
                  <span className="text-primary font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h4 className="text-xl font-bold border-b pb-2">Programmes Offered</h4>
          <ul className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
            <li>B.A. with History, Economics, and Political Science</li>
            <li>B.A. with Physical Education, History, and Political Science (Applied for)</li>
            <li>B.A. with Journalism, History, and Economics (Applied for)</li>
            <li>Compulsory Course in Constitutional Values</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // 2. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        <Target className="h-8 w-8 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-lg space-y-4 leading-relaxed">
        <p>In keeping with the ideals of the college and our founder, the Department of Arts attempts:</p>
        <ul className="text-left space-y-2 list-disc pl-8 inline-block">
          <li>To develop an academic environment where the social sciences are learned with intellectual discipline, analytical rigor and a deep appreciation for cultural and societal diversity.</li>
          <li>To nurture confident thinkers, informed decision-makers and responsible contributors to national and global communities.</li>
          <li>To deliver high-quality education in History, Economics and Political Science through structured curriculum and active learning practices.</li>
          <li>To cultivate students’ capacities for research, interpretation, logical reasoning and ethical decision-making.</li>
          <li>To encourage interdisciplinary understanding that prepares learners for contemporary social, economic and political challenges.</li>
          <li>To promote research, entrepreneurship, and problem-solving for real-world challenges.</li>
        </ul>
      </div>
    </div>
  );

  // 3. Skills
  const skillsContent = (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Skills Developed</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
          <CardContent className="space-y-4">
            <Lightbulb className="h-12 w-12 mx-auto text-yellow-400" />
            <h3 className="text-2xl font-bold">Objectives</h3>
            <ul className="text-slate-300 leading-relaxed text-sm text-left list-disc pl-5 space-y-2">
              <li>Strengthen understanding of economic concepts & real-world applications.</li>
              <li>Enhance analytical and problem-solving abilities.</li>
              <li>Develop employability skills (finance, policy, research).</li>
              <li>Promote independent learning & professional readiness.</li>
              <li>Encourage holistic academic growth (technical skills + ethics).</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
          <CardContent className="space-y-4">
            <Award className="h-12 w-12 mx-auto text-white" />
            <h3 className="text-2xl font-bold">Programme Outcomes</h3>
            <ul className="text-primary-foreground/90 leading-relaxed text-sm text-left list-disc pl-5 space-y-2">
              <li>Disciplinary Knowledge</li>
              <li>Application of Theory</li>
              <li>Critical Thinking & Research Skills</li>
              <li>Interpersonal & Communication Skills</li>
              <li>Employability & Entrepreneurship</li>
              <li>Global Competencies</li>
              <li>Social Consciousness & Ethics</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          "Critical thinking and problem analysis",
          "Public speaking and academic communication",
          "Understanding of real-world issues",
          "Linking concepts with socio-political contexts",
          "Observation and documentation skills",
          "Data interpretation and statistical awareness",
          "Research orientation and analytical thinking",
          "Industry awareness and observational learning"
        ].map((skill, i) => (
          <Card key={i} className="bg-slate-50 border-slate-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full"><PenTool className="h-4 w-4 text-primary" /></div>
              <p className="text-sm font-medium">{skill}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // 4. History
  const historyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 flex items-center gap-2"><History className="h-8 w-8" /> History</h2>
      <Card>
        <CardContent className="pt-6 text-muted-foreground text-lg leading-relaxed">
          History emphasises the value of context, continuity, and transformation. Students investigate various historical periods, significant figures, and influential movements, gaining the tools to assess contemporary realities and anticipate future challenges through a historical lens.
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8 mb-4">Course Matrix</h3>
      <div className="bg-slate-50 p-6 rounded-xl border">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8">
            {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, i) => (
              <TabsTrigger key={i} value={`sem${i + 1}`} className="py-2">{sem}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>History of Ancient India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>History of Medieval India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>History of Modern Indian Uprisings upto 1857</li><li>Elective: Builders of Modern India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>History of Modern India 1858 to 1947</li><li>Elective: Cultural History of India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>History of Modern World 1500 to 1945</li><li>Electives: History of Tourism, Aspects of Archaeology and Musicology</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>History of Karnataka upto 1956</li><li>Electives: History of Contemporary India Since 1947, History of Science & Technology</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 5. Economics
  const economicsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 flex items-center gap-2"><TrendingUp className="h-8 w-8" /> Economics</h2>
      <Card>
        <CardContent className="pt-6 text-muted-foreground text-lg leading-relaxed">
          Economics helps individuals, businesses, and governments make informed decisions about limited resources. It develops crucial analytical and problem-solving skills, provides a framework for understanding how markets and economies work, and offers insights into personal finance, public policy, and diverse career opportunities.
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8 mb-4">Course Matrix</h3>
      <div className="bg-slate-50 p-6 rounded-xl border">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8">
            {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, i) => (
              <TabsTrigger key={i} value={`sem${i + 1}`} className="py-2">{sem}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Micro Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Macro Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Public Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>History of Modern India 1858 to 1947 (Economics context)</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Basic Quantitative Techniques / International Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Statistics for Economics / Agricultural Economics</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 6. Pol Science
  const polScienceContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 flex items-center gap-2"><Landmark className="h-8 w-8" /> Political Science</h2>
      <Card>
        <CardContent className="pt-6 text-muted-foreground text-lg leading-relaxed">
          Political Science enables learners to interpret complex societal issues, propose solutions, and engage in meaningful dialogue. It equips them with analytical skills to evaluate political systems, policies, and institutions, fostering informed citizenship.
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8 mb-4">Course Matrix</h3>
      <div className="bg-slate-50 p-6 rounded-xl border">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8">
            {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, i) => (
              <TabsTrigger key={i} value={`sem${i + 1}`} className="py-2">{sem}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sem1"><Card><CardHeader><CardTitle>Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Foundational Concepts in Political Science</li><li>Compulsory: Constitutional Values</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card><CardHeader><CardTitle>Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Western Political Thought</li><li>Compulsory: Constitutional Values</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card><CardHeader><CardTitle>Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Indian Polity and Contemporary Issues</li><li>Elective: Human Rights OR Good Governance in India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card><CardHeader><CardTitle>Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Parliamentary System in India</li><li>Electives: Indian Political Thought OR Gender and Politics, Socio-Economic and Political Survey</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card><CardHeader><CardTitle>Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Principles of Public Administration AND International Relations</li><li>Elective: Legislative Procedures And Practices</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card><CardHeader><CardTitle>Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5 text-muted-foreground"><li>Public Policy and Administration in India</li><li>Elective: International Institutions and Foreign Policy</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 7. Activities
  const activitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Activities</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-lg">
            <li>Seminar on Contemporary Economic Issues and Interdisciplinary Themes</li>
            <li>Educational Visits</li>
            <li>Annual Inter-Departmental “ECO-WIZZ” Quiz Competition</li>
            <li>Annual Mock Budget Session</li>
            <li>Field Trips</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 8. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Our Faculty</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Dr. Sudhakara Karakoti",
            role: "Professor & Head of Dept (Political Science)",
            desc: "MA (Gold Medalist), M.Phil, Ph.D from JNU. Former Assistant Professor in Ethiopia and Delhi University. Research areas: Public policy, Social Inclusion, International Relations."
          },
          {
            name: "Dr. Avinash V",
            role: "Assistant Professor (History)",
            desc: "Ph.D from Mangalore University. Former HOD. Published various research papers in National and International journals."
          },
          {
            name: "Mehnaaz Safura",
            role: "Assistant Professor (Economics) & IQAC Coordinator",
            desc: "Ph.D. candidate, M.A. Economics. 5+ years teaching. Focuses on women’s entrepreneurship and green economics."
          },
          {
            name: "Mr. Kashinatha",
            role: "Assistant Professor (History)",
            desc: "MA History, KSET & NET qualified. Research: Karnataka History, Freedom Movement, and British Administration."
          },
          {
            name: "Ms. Anusha Chari",
            role: "Assistant Professor (Economics)",
            desc: "MA Economics (Goa University), NCC ‘C’ cert holder. Expertise: Indian Economy, Agricultural Economics, Econometrics."
          }
        ].map((faculty, i) => (
          <Card key={i} className="hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg text-center">{faculty.name}</CardTitle>
              <CardDescription className="text-primary font-medium text-center">{faculty.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground leading-relaxed text-justify">{faculty.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const sections = [
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "skills", label: "Skills Developed", content: skillsContent },
    { id: "history", label: "History", content: historyContent },
    { id: "economics", label: "Economics", content: economicsContent },
    { id: "pol-science", label: "Political Science", content: polScienceContent },
    { id: "activities", label: "Activities", content: activitiesContent },
    { id: "faculty", label: "Faculty", content: facultyContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Arts"
      tagline="Welcome to our department, a vibrant community where every voice is heard and every story matters. We believe that learning is a shared journey of discovery, where diverse perspectives come together to spark creativity and understanding. Whether you are here to master a new skill, explore rich traditions, or shape your future career, you will find a supportive environment that nurtures your growth and inspires you to reach your full potential."
      sections={sections}
    />
  );
}
