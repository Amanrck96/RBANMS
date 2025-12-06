import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Mail,
  Landmark,
  Scale,
  History
} from 'lucide-react';

export default function ArtsDepartmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-700 to-red-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Department of Arts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Exploring the World Through <span className="text-yellow-400">History, Economics and Political Science</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-100 max-w-2xl leading-relaxed">
              Where learning becomes a journey into understanding societies, ideas, systems and human thought.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome to the Department of Arts</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the Department of Arts, learning becomes a journey into understanding societies, ideas, systems and human thought. Our classrooms are vibrant spaces where curiosity meets scholarship, where discussions evolve into insights and every student grows into an observer, analyst and responsible citizen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pursuing Arts is not just about studying past events, economic structures or political institution, it is about developing the ability to interpret change, evaluate issues and engage meaningfully with the world. To that end, we cultivate an inclusive and lively academic environment where every student’s perspective is valued and intellectual exploration encouraged.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond traditional teaching, we enrich learning through field visits, interactive sessions, projects, seminars, debates, group discussions, model parliaments, economic simulations and cross-disciplinary academic events, making the study of Arts dynamic, relevant and engaging.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-orange-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <History className="h-8 w-8 text-orange-600" />
                <span className="font-semibold text-orange-900">History</span>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Landmark className="h-8 w-8 text-red-600" />
                <span className="font-semibold text-red-900">Economics</span>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Scale className="h-8 w-8 text-yellow-600" />
                <span className="font-semibold text-yellow-900">Political Science</span>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Globe className="h-8 w-8 text-amber-600" />
                <span className="font-semibold text-amber-900">Global Perspective</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Courses Offered</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" /> Undergraduate Programmes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>1. B.A. with History, Economics, and Political Science</li>
                  <li>2. B.A. with Physical Education, History, and Political Science (Applied for)</li>
                  <li>3. B.A. with Journalism, History, and Economics (Applied for)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> Additional Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>4. Compulsory Course in Constitutional Values, for all streams</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "A well-defined curriculum that provides in-depth knowledge across History, Economics, and Political Science.",
            "Emphasis on analytical reasoning, conceptual understanding and evidence-based learning.",
            "Opportunities for applied learning through project work, field activities, policy reviews, document studies and academic presentations.",
            "Exposure to relevant contemporary issues through seminars, expert interactions and interdisciplinary discussions.",
            "Focus on developing research aptitude, communication skills and independent academic inquiry.",
            "Supportive learning environment that encourages student participation, academic discipline, and consistent growth."
          ].map((highlight, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="h-2 w-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                <p className="text-muted-foreground">{highlight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills Developed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Critical thinking and problem analysis",
              "Public speaking and academic communication",
              "Understanding of real-world issues",
              "Ability to link concepts with socio-political contexts",
              "Observation and documentation skills",
              "Data interpretation and statistical awareness",
              "Research orientation and analytical thinking",
              "Industry awareness and observational learning"
            ].map((skill, index) => (
              <Card key={index} className="bg-white text-center hover:bg-orange-50 transition-colors">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <Lightbulb className="h-8 w-8 text-orange-500 mb-3" />
                  <span className="font-medium text-sm">{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <Card className="border-l-4 border-l-orange-600 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-orange-600" /> Vision & Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">In keeping with the ideals of the college and our founder, the Department of Arts attempts:</p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "To develop an academic environment where the social sciences are learned with intellectual discipline, analytical rigor and a deep appreciation for cultural and societal diversity.",
                "To nurture confident thinkers, informed decision-makers and responsible contributors to national and global communities.",
                "To deliver high-quality education in History, Economics and Political Science through structured curriculum and active learning practices.",
                "To cultivate students’ capacities for research, interpretation, logical reasoning and ethical decision-making.",
                "To encourage interdisciplinary understanding that prepares learners for contemporary social, economic and political challenges.",
                "To promote research, entrepreneurship, and problem-solving for real-world challenges."
              ].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-orange-600">•</span> {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Course Matrices (Tabs for Subjects) */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Course Matrices</h2>
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8 h-auto p-1">
              <TabsTrigger value="history" className="py-2">History</TabsTrigger>
              <TabsTrigger value="economics" className="py-2">Economics</TabsTrigger>
              <TabsTrigger value="polscience" className="py-2">Political Science</TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              {/* History Content */}
              <div className="space-y-6">
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">History</h3>
                  <p className="text-muted-foreground">History emphasises the value of context, continuity, and transformation. Students investigate various historical periods, significant figures, and influential movements, gaining the tools to assess contemporary realities and anticipate future challenges through a historical lens.</p>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden border">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold">
                        <tr>
                          <th className="p-4 border-b whitespace-nowrap">Stream</th>
                          <th className="p-4 border-b whitespace-nowrap">Semester</th>
                          <th className="p-4 border-b">Paper Title</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="p-4">BA</td><td className="p-4">1</td><td className="p-4">CORE - History of Ancient India</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">2</td><td className="p-4">CORE - History of Medieval India</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">3</td><td className="p-4">CORE - History of Modern Indian Uprisings upto 1857<br /><span className="text-muted-foreground">Elective Course – Builders of Modern India</span></td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">4</td><td className="p-4">CORE - History of Modern India 1858 to 1947<br /><span className="text-muted-foreground">Elective Course – Cultural History of India</span></td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">5</td><td className="p-4">CORE - History of Modern World 1500 to 1945<br />CORE - History of Tourism<br /><span className="text-muted-foreground">Elective Course - Aspects of Archaeology and Musicology</span></td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">6</td><td className="p-4">CORE - History of Karnataka upto 1956<br /><span className="text-muted-foreground">Elective Course - History of Contemporary India Since 1947 OR History of Science & Technology (Optional)</span></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="economics">
              {/* Economics Content */}
              <div className="space-y-6">
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Economics</h3>
                  <p className="text-muted-foreground">Economics helps individuals, businesses, and governments make informed decisions about limited resources. It develops crucial analytical and problem-solving skills, provides a framework for understanding how markets and economies work, and offers insights into personal finance, public policy, and career opportunities in diverse fields like finance, law, and management.</p>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden border">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold">
                        <tr>
                          <th className="p-4 border-b whitespace-nowrap">Stream</th>
                          <th className="p-4 border-b whitespace-nowrap">Semester</th>
                          <th className="p-4 border-b">Paper Title</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="p-4">BA</td><td className="p-4">1</td><td className="p-4">CORE - Micro Economics</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">2</td><td className="p-4">CORE - Macro Economics</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">3</td><td className="p-4">CORE - Public Economics</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">4</td><td className="p-4">CORE - History of Modern India 1858 to 1947</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">5</td><td className="p-4">CORE - Basic Quantitative Techniques / International Economics</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">6</td><td className="p-4">CORE - Statistics for Economics / Agricultural Economics</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="polscience">
              {/* Political Science Content */}
              <div className="space-y-6">
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Political Science</h3>
                  <p className="text-muted-foreground">Political Science enables learners to interpret complex societal issues, propose solutions, and engage in meaningful dialogue on matters of public concern. It equips them with the analytical and critical skills needed to evaluate political systems, policies, and institutions, fostering informed citizenship and active participation in democratic processes.</p>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden border">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-100 text-slate-700 font-bold">
                        <tr>
                          <th className="p-4 border-b whitespace-nowrap">Stream</th>
                          <th className="p-4 border-b whitespace-nowrap">Semester</th>
                          <th className="p-4 border-b">Paper Title</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr><td className="p-4">BA</td><td className="p-4">1</td><td className="p-4">CORE - Foundational Concepts in Political Science</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">2</td><td className="p-4">CORE - Western Political Thought</td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">3</td><td className="p-4">CORE - Indian Polity and Contemporary Issues<br /><span className="text-muted-foreground">Elective Course - Human Rights OR Good Governance in India</span></td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">4</td><td className="p-4">CORE - Parliamentary System in India<br /><span className="text-muted-foreground">Elective Course - Indian Political Thought OR Gender and Politics</span><br /><span className="text-muted-foreground italic">Compulsory Skill-I - Socio-Economic and Political Survey</span></td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">5</td><td className="p-4">CORE - Principles of Public Administration AND CORE - International Relations and Issues<br /><span className="text-muted-foreground italic">Compulsory Skill-II - Legislative Procedures And Practices</span></td></tr>
                        <tr><td className="p-4">BA</td><td className="p-4">6</td><td className="p-4">CORE - Public Policy and Administration in India<br />International Institutions and Foreign Policy</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Compulsory Courses</h4>
                  <div className="bg-white rounded-lg shadow overflow-hidden border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-slate-100 text-slate-700 font-bold">
                          <tr>
                            <th className="p-4 border-b whitespace-nowrap">Stream</th>
                            <th className="p-4 border-b whitespace-nowrap">Semester</th>
                            <th className="p-4 border-b">Paper Title</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr><td className="p-4">BA/ B.Com/ BBA/ BCA</td><td className="p-4">1</td><td className="p-4">COMPULSORY PAPER - Constitutional Values – I</td></tr>
                          <tr><td className="p-4">BA/ B.Com/ BBA/ BCA</td><td className="p-4">2</td><td className="p-4">COMPULSORY PAPER - Constitutional Values - II</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Objectives & Outcomes */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Objectives</h3>
            <ul className="space-y-4">
              {[
                "To strengthen students’ practical understanding of economic concepts by linking classroom knowledge with real-world applications, tools and practices.",
                "To enhance analytical and problem-solving abilities, enabling students to interpret data, evaluate economic issues and make informed decisions.",
                "To develop employability-oriented skills relevant to sectors such as finance, policy, research, banking and business analytics.",
                "To promote independent learning and professional readiness through hands-on activities, case studies, practical exercises and structured assessments.",
                "To encourage holistic academic growth by integrating technical skills, conceptual clarity, digital competency and ethical awareness in the study of History, Economics and Political Science."
              ].map((obj, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-orange-500 shrink-0" />
                  <span className="text-muted-foreground">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Programme Outcomes</h3>
            <ul className="space-y-4">
              {[
                { title: "Disciplinary knowledge", desc: "Acquire domain specific knowledge in history, economics and political science." },
                { title: "Application", desc: "Apply domain specific theoretical knowledge to understand, explain, predict, maintain, modify and evaluate real world challenges." },
                { title: "Assessment skills", desc: "Assess how global, national and regional developments affect economy, polity and society." },
                { title: "Research skills", desc: "Carry out simple research projects by reviewing literature, collecting data, analysing the findings using appropriate statistical tools." },
                { title: "Critical thinking", desc: "To gain critical thinking and develop logical inferences about social, economic and political issues based on economic, political and historical discourses in India." },
                { title: "Interpersonal skills", desc: "To exhibit strong communication skills allowing them to convey complex concepts in an accessible manner in multicultural spaces." },
                { title: "Intrapersonal skills", desc: "Integrate interpersonal skills to enhance their professional effectiveness, personal development and ability to navigate complexities in academic and real-world contexts." },
                { title: "Employability skills", desc: "Students will develop the skills required for employment and demonstrate the ability to solve problems, make decisions, plan, innovate, organize information and network with professionals in the industry." },
                { title: "Global competencies", desc: "Exhibit leadership, initiative, persistence and adaptability and use technology to gather, evaluate and present information." },
                { title: "Multidisciplinary settings", desc: "Transfer knowledge and skills learned in one course to other courses, other contexts across multiple settings and disciplines." },
                { title: "Social consciousness", desc: "Work with service mindedness for the betterment of the society." },
                { title: "Ethics", desc: "Practice ethics in all academic and professional tasks." }
              ].map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-red-500 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    <strong className="text-foreground">{outcome.title}:</strong> {outcome.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Activities</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">The Department of Arts conducts many events and activities for students, some of which are:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Seminar on Contemporary Economic Issues and Interdisciplinary Themes",
                  "Educational Visits",
                  "Annual Inter-Departmental “ECO-WIZZ” Quiz Competition",
                  "Annual Mock Budget Session",
                  "Field Trips"
                ].map((activity, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-orange-600" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Faculty</h2>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-12 w-12 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dr. Sudhakara Karakoti</CardTitle>
                  <CardDescription className="text-orange-600 font-medium text-lg">Professor in Political Science & Head of the Department</CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> hodartsrbanms@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dr. Sudhakara Karakoti studied his Graduation from Andhra Pradesh Residential Degree College (APRDC) from Nagarjuna Sagar, Acharya Nagarjuna University, Guntur and has been awarded National Merit Scholarship. He obtained his Postgraduate degree in Political Science from Osmania University, Hyderabad. He pursued M.Phil and Ph.D from JNU, New Delhi. He served as Assistant Professor in various colleges including Sri Venkateswara College (Delhi), Wollega University (Ethiopia), and St. Francis De Sales College. Currently, he is serving as a Professor in Political Science & Head of the Department of Arts, RBANM’s First Grade College, Bangalore. His research areas include Public policy, Rural Development, Social Inclusion, Social Movements, Human Rights, International Relations, Law and Governance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-12 w-12 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dr. Avinash V</CardTitle>
                  <CardDescription className="text-orange-600 font-medium text-lg">Assistant Professor in History</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dr. Avinash V studied his Post Graduation in History from Mangalore University, Mangaluru in 2011. He has been awarded Doctor of Philosophy (Ph.D) from Mangalore University in 2018. Dr. Avinash had served as Head of the Department of Arts from 2021 to 2023 at RBANM&apos;S FGC, Bengaluru. He published various research papers in National and International journals. Currently, he is serving as an Assistant Professor in History, Department of Arts, RBANM&apos;S First Grade College, Bengaluru.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-12 w-12 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mehnaaz Safura</CardTitle>
                  <CardDescription className="text-orange-600 font-medium text-lg">Assistant Professor of Economics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mehnaaz Safura is an Assistant Professor of Economics at RBANM’s First Grade College, Bangalore and a Ph.D. candidate in Economics at Sharda University. She holds an M.A. and a B.A. in Economics, with over five years of college teaching experience. She teaches core courses such as International Trade, Public Economics, Entrepreneurship, Contemporary Indian Economy and others. As the IQAC Coordinator, she spearheads initiatives to uphold quality standards in teaching, learning and research. Her research focuses on women’s entrepreneurship, green economics and digital gender gaps.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-12 w-12 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mr. Kashinatha</CardTitle>
                  <CardDescription className="text-orange-600 font-medium text-lg">Assistant Professor in History</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mr. Kashinatha completed his Undergraduate studies from GFGC, KR Puram, and Postgraduate degree in History from Government Arts College. He successfully cleared both the KSET and NET for Assistant Professor in 2020. He has presented research papers in various national seminars. He taught History at KIET PU College, Bengaluru from 2022 to 2023. Currently, he is serving as an Assistant Professor in History at RBANM&apos;s First Grade College. His research areas include Karnataka History & Culture, Indian History and Culture, Freedom Movement in Karnataka, British Administration in India, Archaeological Sources and Historiography.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="h-12 w-12 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ms. Anusha Chari</CardTitle>
                  <CardDescription className="text-orange-600 font-medium text-lg">Assistant Professor of Economics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ms. Anusha Chari completed her B.A. (Honours) in Economics from MES Vasant Joshi College of Arts and Commerce, affiliated to Goa University and Master of Arts in Economics from Goa Business School, Goa University. She is also an NCC ‘C’ Certificate holder. She currently serves as an Assistant Professor of Economics in the Department of Arts. Her areas of expertise include Indian Economy, Agricultural Economics, Environmental Economics, Microeconomics, Econometrics, and Geospatial Studies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
