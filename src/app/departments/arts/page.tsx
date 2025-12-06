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
  Globe,
  Award,
  Search,
  PenTool
} from 'lucide-react';

export default function ArtsDepartmentPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Department of Arts</h1>
      <h2 className="text-xl font-semibold text-primary mb-2">We explore the World Through History, Economics and Political Science</h2>
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
    <div id="vision" className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Vision & Mission
      </h3>
      <div className="text-muted-foreground italic text-sm space-y-2">
        <p>In keeping with the ideals of the college and our founder, the Department of Arts attempts:</p>
        <ul className="text-left space-y-1 list-disc pl-5">
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

  const sidebarContent = (
    <>
      <div id="highlights" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Highlights</h4>
        <ul className="space-y-3">
          {[
            "Well-defined curriculum (History, Economics, Pol Science)",
            "Emphasis on analytical reasoning & evidence-based learning",
            "Applied learning (projects, field activities, policy reviews)",
            "Exposure to contemporary issues through seminars",
            "Focus on research aptitude & communication skills",
            "Supportive learning environment"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div id="courses" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Courses</h4>
        <ul className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
          <li>B.A. with History, Economics, and Political Science</li>
          <li>B.A. with Physical Education, History, and Political Science (Applied for)</li>
          <li>B.A. with Journalism, History, and Economics (Applied for)</li>
          <li>Compulsory Course in Constitutional Values</li>
        </ul>
      </div>

      <div id="contact" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Contact</h4>
        <p className="text-sm text-muted-foreground">hodartsrbanms@gmail.com</p>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card id="objectives" key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
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
    </Card>,
    <Card id="outcomes" key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
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
  ];

  const navItems = [
    { label: "Highlights", href: "#highlights" },
    { label: "Skills", href: "#skills" },
    { label: "Vision", href: "#vision" },
    { label: "Courses", href: "#courses" },
    { label: "History", href: "#history" },
    { label: "Economics", href: "#economics" },
    { label: "Pol Science", href: "#pol-science" },
    { label: "Activities", href: "#activities" },
    { label: "Faculty", href: "#faculty" },
  ];

  return (
    <DepartmentLayout
      title="Department of Arts"
      tagline="We explore the World Through History, Economics and Political Science"
      activeTab="arts"
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
      navItems={navItems}
    >

      {/* Skills Developed */}
      <section id="skills" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Skills Developed</h2>
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
      </section>

      {/* History */}
      <section id="history" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-2"><History className="h-8 w-8" /> History</h2>
        <Card className="mb-6">
          <CardContent className="pt-6 text-muted-foreground">
            History emphasises the value of context, continuity, and transformation. Students investigate various historical periods, significant figures, and influential movements, gaining the tools to assess contemporary realities and anticipate future challenges through a historical lens.
          </CardContent>
        </Card>
        <h3 className="text-xl font-bold mb-4">Course Matrix – History</h3>
        <div className="bg-slate-50 p-6 rounded-xl border">
          <ul className="space-y-4">
            {[
              { sem: "1", title: "History of Ancient India" },
              { sem: "2", title: "History of Medieval India" },
              { sem: "3", title: "History of Modern Indian Uprisings upto 1857", electives: ["Builders of Modern India"] },
              { sem: "4", title: "History of Modern India 1858 to 1947", electives: ["Cultural History of India"] },
              { sem: "5", title: "History of Modern World 1500 to 1945", electives: ["History of Tourism", "Aspects of Archaeology and Musicology"] },
              { sem: "6", title: "History of Karnataka upto 1956", electives: ["History of Contemporary India Since 1947", "History of Science & Technology"] },
            ].map((sem, i) => (
              <li key={i} className="grid md:grid-cols-[100px_1fr] gap-4 border-b last:border-0 pb-4 last:pb-0">
                <span className="font-bold text-primary">Sem {sem.sem}</span>
                <div>
                  <p className="font-medium text-slate-800">{sem.title}</p>
                  {sem.electives && (
                    <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                      {sem.electives.map((e, j) => <li key={j}>{e}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Economics */}
      <section id="economics" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-2"><TrendingUp className="h-8 w-8" /> Economics</h2>
        <Card className="mb-6">
          <CardContent className="pt-6 text-muted-foreground">
            Economics helps individuals, businesses, and governments make informed decisions about limited resources. It develops crucial analytical and problem-solving skills, provides a framework for understanding how markets and economies work, and offers insights into personal finance, public policy, and diverse career opportunities.
          </CardContent>
        </Card>
        <h3 className="text-xl font-bold mb-4">Course Matrix – Economics</h3>
        <div className="bg-slate-50 p-6 rounded-xl border">
          <ul className="space-y-4">
            {[
              { sem: "1", title: "Micro Economics" },
              { sem: "2", title: "Macro Economics" },
              { sem: "3", title: "Public Economics" },
              { sem: "4", title: "History of Modern India 1858 to 1947" },
              { sem: "5", title: "Basic Quantitative Techniques / International Economics" },
              { sem: "6", title: "Statistics for Economics / Agricultural Economics" },
            ].map((sem, i) => (
              <li key={i} className="grid md:grid-cols-[100px_1fr] gap-4 border-b last:border-0 pb-4 last:pb-0">
                <span className="font-bold text-primary">Sem {sem.sem}</span>
                <div><p className="font-medium text-slate-800">{sem.title}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Political Science */}
      <section id="pol-science" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4 flex items-center gap-2"><Landmark className="h-8 w-8" /> Political Science</h2>
        <Card className="mb-6">
          <CardContent className="pt-6 text-muted-foreground">
            Political Science enables learners to interpret complex societal issues, propose solutions, and engage in meaningful dialogue. It equips them with analytical skills to evaluate political systems, policies, and institutions, fostering informed citizenship.
          </CardContent>
        </Card>
        <h3 className="text-xl font-bold mb-4">Course Matrix – Political Science</h3>
        <div className="bg-slate-50 p-6 rounded-xl border">
          <ul className="space-y-4">
            {[
              { sem: "1", title: "Foundational Concepts in Political Science" },
              { sem: "2", title: "Western Political Thought" },
              { sem: "3", title: "Indian Polity and Contemporary Issues", electives: ["Human Rights OR Good Governance in India"] },
              { sem: "4", title: "Parliamentary System in India", electives: ["Indian Political Thought OR Gender and Politics", "Socio-Economic and Political Survey"] },
              { sem: "5", title: "Principles of Public Administration AND International Relations", electives: ["Legislative Procedures And Practices"] },
              { sem: "6", title: "Public Policy and Administration in India", electives: ["International Institutions and Foreign Policy"] },
            ].map((sem, i) => (
              <li key={i} className="grid md:grid-cols-[100px_1fr] gap-4 border-b last:border-0 pb-4 last:pb-0">
                <span className="font-bold text-primary">Sem {sem.sem}</span>
                <div>
                  <p className="font-medium text-slate-800">{sem.title}</p>
                  {sem.electives && (
                    <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                      {sem.electives.map((e, j) => <li key={j}>{e}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-muted-foreground bg-yellow-50 p-3 border border-yellow-200 rounded-md">
          <strong>Compulsory Paper:</strong> Constitutional Values (Sem 1 & 2) for all streams (BA/B.Com/BBA/BCA).
        </p>
      </section>

      {/* Activities */}
      <section id="activities" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Activities</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Seminar on Contemporary Economic Issues and Interdisciplinary Themes</li>
              <li>Educational Visits</li>
              <li>Annual Inter-Departmental “ECO-WIZZ” Quiz Competition</li>
              <li>Annual Mock Budget Session</li>
              <li>Field Trips</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Our Faculty</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{faculty.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{faculty.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-relaxed text-justify">{faculty.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </DepartmentLayout>
  );
}
