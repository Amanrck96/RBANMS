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
  Globe,
  Mail
} from 'lucide-react';

export default function ArtsDepartmentPage() {

  // 1. Highlights
  const highlightsContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="bg-white border-2 border-primary">
        <CardHeader><CardTitle className="text-xl text-black">HIGHLIGHTS</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "A well-defined curriculum that provides in-depth knowledge across History, Economics, and Political Science.",
              "Emphasis on analytical reasoning, conceptual understanding and evidence-based learning.",
              "Opportunities for applied learning through project work, field activities, policy reviews, document studies and academic presentations.",
              "Exposure to relevant contemporary issues through seminars, expert interactions and interdisciplinary discussions.",
              "Focus on developing research aptitude, communication skills and independent academic inquiry.",
              "Supportive learning environment that encourages student participation, academic discipline, and consistent growth."
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-black">
                <span className="text-primary font-bold">•</span> {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 2. Skills Developed
  const skillsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">SKILLS DEVELOPED</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          "Critical thinking and problem analysis",
          "Public speaking and academic communication",
          "Understanding of real-world issues",
          "Ability to link concepts with socio-political contexts",
          "Observation and documentation skills",
          "Data interpretation and statistical awareness",
          "Research orientation and analytical thinking",
          "Industry awareness and observational learning"
        ].map((skill, i) => (
          <Card key={i} className="bg-white border-2 border-primary/50 hover:border-primary transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full"><PenTool className="h-4 w-4 text-primary" /></div>
              <p className="text-sm font-medium text-black">{skill}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // 3. Vision & Mission
  const visionContent = (
    <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-white text-center">
      <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6 text-black">
        <Target className="h-8 w-8 stroke-[3px] text-primary" /> VISION & MISSION
      </h3>
      <div className="text-black italic text-lg space-y-4 leading-relaxed">
        <p>In keeping with the ideals of the college and our founder, the Department of Arts attempts:</p>
        <ul className="text-left space-y-2 list-disc pl-8 inline-block not-italic">
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

  // 4. Courses
  const coursesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">COURSES OFFERED</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <ul className="space-y-3 list-decimal pl-5 text-lg">
            <li>B.A. with History, Economics, and Political Science</li>
            <li>Compulsory Course in Constitutional Values, for all streams</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 5. Objectives
  const objContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Lightbulb className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">OBJECTIVES</h3>
          <ul className="text-black leading-relaxed text-lg text-left list-disc pl-8 space-y-2">
            <li>To strengthen students’ practical understanding of economic concepts by linking classroom knowledge with real-world applications, tools and practices.</li>
            <li>To enhance analytical and problem-solving abilities, enabling students to interpret data, evaluate economic issues and make informed decisions.</li>
            <li>To develop employability-oriented skills relevant to sectors such as finance, policy, research, banking and business analytics.</li>
            <li>To promote independent learning and professional readiness through hands-on activities, case studies, practical exercises and structured assessments.</li>
            <li>To encourage holistic academic growth by integrating technical skills, conceptual clarity, digital competency and ethical awareness in the study of History, Economics and Political Science.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 6. Programme Outcomes
  const outcomesContent = (
    <div className="max-w-3xl mx-auto">
      <Card className="h-full bg-white text-black border-2 border-primary flex flex-col justify-center text-center p-8">
        <CardContent className="space-y-6">
          <Award className="h-16 w-16 mx-auto text-primary" />
          <h3 className="text-3xl font-bold">PROGRAMME OUTCOMES</h3>
          <ul className="text-black leading-relaxed text-lg text-left list-none space-y-3">
            <li><strong>Disciplinary knowledge:</strong> Acquire domain specific knowledge in history, economics and political science.</li>
            <li><strong>Application:</strong> Apply domain specific theoretical knowledge to understand, explain, predict, maintain, modify and evaluate real world challenges.</li>
            <li><strong>Assessment skills:</strong> Assess how global, national and regional developments affect economy, polity and society.</li>
            <li><strong>Research skills:</strong> Carry out simple research projects by reviewing literature, collecting data, analysing the findings using appropriate statistical tools.</li>
            <li><strong>Critical thinking:</strong> To gain critical thinking and develop logical inferences about social, economic and political issues based on economic, political and historical discourses in India.</li>
            <li><strong>Interpersonal skills:</strong> To exhibit strong communication skills allowing them to convey complex concepts in an accessible manner in multicultural spaces.</li>
            <li><strong>Intrapersonal skills:</strong> Integrate interpersonal skills to enhance their professional effectiveness, personal development and ability to navigate complexities in academic and real-world contexts.</li>
            <li><strong>Employability skills:</strong> Students will develop the skills required for employment and demonstrate the ability to solve problems, make decisions, plan, innovate, organize information and network with professionals in the industry.</li>
            <li><strong>Global competencies:</strong> Exhibit leadership, initiative, persistence and adaptability and use technology to gather, evaluate and present information.</li>
            <li><strong>Multidisciplinary settings:</strong> Transfer knowledge and skills learned in one course to other courses, other contexts across multiple settings and disciplines.</li>
            <li><strong>Social consciousness:</strong> Work with service mindedness for the betterment of the society.</li>
            <li><strong>Ethics:</strong> Practice ethics in all academic and professional tasks.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  // 7. History
  const historyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 flex items-center gap-2 text-black"><History className="h-8 w-8 text-primary" /> HISTORY</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6 text-black text-lg leading-relaxed">
          History emphasises the value of context, continuity, and transformation. Students investigate various historical periods, significant figures, and influential movements, gaining the tools to assess contemporary realities and anticipate future challenges through a historical lens.
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Paper Titles – History</h3>
      <div className="bg-white p-6 rounded-xl border-2 border-primary">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8 border border-primary/20">
            {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, i) => (
              <TabsTrigger key={i} value={`sem${i + 1}`} className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">{sem}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sem1"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - History of Ancient India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - History of Medieval India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - History of Modern Indian Uprisings upto 1857</li><li>Elective Course – Builders of Modern India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - History of Modern India 1858 to 1947</li><li>Elective Course – Cultural History of India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - History of Modern World 1500 to 1945</li><li>CORE - History of Tourism</li><li>Elective Course - Aspects of Archaeology and Musicology</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - History of Karnataka upto 1956</li><li>Elective Course - History of Contemporary India Since 1947 OR History of Science & Technology (Optional)</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 8. Economics
  const economicsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 flex items-center gap-2 text-black"><TrendingUp className="h-8 w-8 text-primary" /> ECONOMICS</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6 text-black text-lg leading-relaxed">
          Economics helps individuals, businesses, and governments make informed decisions about limited resources. It develops crucial analytical and problem-solving skills, provides a framework for understanding how markets and economies work, and offers insights into personal finance, public policy, and career opportunities in diverse fields like finance, law, and management.
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-black text-primary">Paper Titles - Economics</h3>
      <div className="bg-white p-6 rounded-xl border-2 border-primary">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8 border border-primary/20">
            {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, i) => (
              <TabsTrigger key={i} value={`sem${i + 1}`} className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">{sem}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sem1"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Micro Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Macro Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Public Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - History of Modern India 1858 to 1947</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Basic Quantitative Techniques / International Economics</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Statistics for Economics / Agricultural Economics</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 9. Pol Science
  const polScienceContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 flex items-center gap-2 text-black"><Landmark className="h-8 w-8 text-primary" /> POLITICAL SCIENCE</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6 text-black text-lg leading-relaxed">
          Political Science enables learners to interpret complex societal issues, propose solutions, and engage in meaningful dialogue on matters of public concern. It equips them with the analytical and critical skills needed to evaluate political systems, policies, and institutions, fostering informed citizenship and active participation in democratic processes. The curriculum emphasizes critical reflection on key themes such as democracy, authoritarianism, international relations, and policy-making, thereby cultivating a nuanced understanding of power and its implications for society.
        </CardContent>
      </Card>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-black">Paper Titles – Political Science</h3>
      <div className="bg-white p-6 rounded-xl border-2 border-primary">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto p-1 bg-white shadow-sm mb-8 border border-primary/20">
            {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, i) => (
              <TabsTrigger key={i} value={`sem${i + 1}`} className="py-2 text-black data-[state=active]:bg-primary data-[state=active]:text-white">{sem}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="sem1"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 1</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Foundational Concepts in Political Science</li><li><strong>Compulsory Paper:</strong> Constitutional Values – I (for all streams)</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem2"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 2</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Western Political Thought</li><li><strong>Compulsory Paper:</strong> Constitutional Values - II (for all streams)</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem3"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 3</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Indian Polity and Contemporary Issues</li><li>Elective: Human Rights OR Good Governance in India</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem4"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 4</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Parliamentary System in India</li><li>Elective: Indian Political Thought OR Gender and Politics</li><li>Compulsory Skill-I - Socio-Economic and Political Survey</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem5"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 5</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Principles of Public Administration</li><li>CORE - International Relations and Issues</li><li>Compulsory Skill-II - Legislative Procedures And Practices</li></ul></CardContent></Card></TabsContent>
          <TabsContent value="sem6"><Card className="bg-white border-2 border-primary text-black"><CardHeader><CardTitle className="text-primary">Semester 6</CardTitle></CardHeader><CardContent><ul className="list-disc pl-5"><li>CORE - Public Policy and Administration in India</li><li>International Institutions and Foreign Policy</li></ul></CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // 10. Activities
  const activitiesContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">ACTIVITIES</h2>
      <Card className="bg-white border-2 border-primary text-black">
        <CardContent className="pt-6">
          <p className="mb-4 text-lg">The Department of Arts conducts many events and activities for students, some of which are:</p>
          <ul className="list-decimal pl-5 space-y-2 text-black text-lg">
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

  // 11. Faculty
  const facultyContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">OUR FACULTY</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          {
            name: "Dr. Sudhakara Karakoti",
            role: "Professor in Political Science & Head of the Department of Arts",
            desc: "Studied his Graduation from Andhra Pradesh Residential Degree College (APRDC) from Nagarjuna Sagar, Acharya Nagarjuna University, Guntur and has been awarded National Merit Scholarship (NMS) during his Graduation from 1997 to 2000. He obtained his Postgraduate degree in Political Science from Osmania University, Hyderabad in 2004 and achieved two Gold Medals for being the University topper during 2002-2004. He pursued Master of Philosophy (M.Phil) and Doctor of Philosophy (Ph.D) from the Centre for the Study of Law and Governance (CSLG), Jawaharlal Nehru University (JNU), New Delhi from 2004- 2012. He has been a Research Associate at the Centre for the Study of Social Exclusion & Inclusive Policy (CSSE&IP), School of Social Sciences-II, Jawaharlal Nehru University (JNU), New Delhi. He taught at Sri Venkateswara College (Delhi University), Wollega University (Ethiopia), SFS College and Presidency College before joining RBANMS. His research areas include Public policy, Rural Development, Social Inclusion, Social Movements, Human Rights, International Relations, Law and Governance."
          },
          {
            name: "Dr. Avinash V",
            role: "Assistant Professor in History",
            desc: "Studied his Post Graduation in History from Mangalore University, Mangaluru in 2011. He has been awarded Doctor of Philosophy (Ph.D) from Mangalore University, Mangaluru in 2018. Dr. Avinash had served as Head of the Department of Arts from 2021 to 2023 at RBANM'S FGC, Bengaluru. He published various research papers in National and International journals. Currently, he is serving as an Assistant Professor in History, Department of Arts, RBANM'S First Grade College, Bengaluru."
          },
          {
            name: "Mehnaaz Safura",
            role: "Assistant Professor of Economics & IQAC Coordinator",
            desc: "Assistant Professor of Economics at RBANM’s First Grade College, Bangalore and a Ph.D. candidate in Economics at Sharda University. She holds an M.A. and a B.A. in Economics, with over five years of college teaching experience and four years of high‑school instruction. She teaches core courses such as International Trade, Public Economics, Entrepreneurship, Contemporary Indian Economy and others. As the IQAC Coordinator, she spearheads initiatives to uphold quality standards. Her research focuses on women’s entrepreneurship, green economics and digital gender gaps. She is a lifetime member of the Global Professors Welfare Association."
          },
          {
            name: "Mr. Kashinatha",
            role: "Assistant Professor in History",
            desc: "Completed his Undergraduate studies in Bachelor of Arts from the Government First Grade College (GFGC), KR Puram, Bengaluru. He further pursued his Postgraduate degree in History from Government Arts College in 2020. Successfully cleared both the Karnataka State Eligibility Test (KSET) and the National Eligibility Test (NET) for Assistant Professor in 2020. He has presented research papers in various national seminars. He taught History at KIET PU College. His research areas include Karnataka History & Culture, Indian History and Culture, Freedom Movement in Karnataka, British Administration in India, Archaeological Sources and Historiography."
          },
          {
            name: "Ms. Anusha Chari",
            role: "Assistant Professor of Economics",
            desc: "Completed her B.A. (Honours) in Economics from MES Vasant Joshi College of Arts and Commerce, affiliated to Goa University (2020–2023). She further completed her Master of Arts in Economics from Goa Business School, Goa University (2023–2025). She is also an NCC ‘C’ Certificate holder, reflecting her discipline, leadership, and commitment to excellence. She currently serves as an Assistant Professor of Economics. Her areas of expertise include Indian Economy, Agricultural Economics, Environmental Economics, Microeconomics, Econometrics, and Geospatial Studies."
          }
        ].map((faculty, i) => (
          <Card key={i} className="bg-white border-2 border-primary text-black hover:bg-primary/5 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg text-black text-center">{faculty.name}</CardTitle>
              <CardDescription className="text-primary font-medium text-center">{faculty.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-black leading-relaxed text-justify">{faculty.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // 12. Contact
  const contactContent = (
    <div className="max-w-lg mx-auto text-center" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-black">CONTACT</h2>
      <p className="text-lg text-black flex items-center justify-center gap-2">
        <Mail className="h-5 w-5 text-primary" /> hodartsrbanms@gmail.com
      </p>
    </div>
  );

  const sidebarContent = (
    <div className="w-full relative rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/departments/arts/group_photo.jpg"
        alt="Department of Arts Faculty and Activities"
        className="w-full h-auto object-cover"
      />
    </div>
  );

  const sections = [
    { id: "highlights", label: "Highlights", content: highlightsContent },
    { id: "skills", label: "Skills Developed", content: skillsContent },
    { id: "vision", label: "Vision & Mission", content: visionContent },
    { id: "courses", label: "Courses", content: coursesContent },
    { id: "objectives", label: "Objectives", content: objContent },
    { id: "outcomes", label: "Programme Outcome", content: outcomesContent },
    { id: "history", label: "History", content: historyContent },
    { id: "economics", label: "Economics", content: economicsContent },
    { id: "political-science", label: "Political Science", content: polScienceContent },
    { id: "activities", label: "Activities", content: activitiesContent },
    { id: "faculty", label: "Faculty Profile", content: facultyContent },
    { id: "contact", label: "Contact", content: contactContent },
  ];

  return (
    <DepartmentLayout
      title="Department of Arts"
      pageId="dept-arts"
      tagline="Welcome to the Department of Arts. We explore the World Through History, Economics and Political Science. In the Department of Arts, learning becomes a journey into understanding societies, ideas, systems and human thought. Our classrooms are vibrant spaces where curiosity meets scholarship, where discussions evolve into insights and every student grows into an observer, analyst and responsible citizen. Pursuing Arts is not just about studying past events, economic structures or political institution, it is about developing the ability to interpret change, evaluate issues and engage meaningfully with the world. To that end, we cultivate an inclusive and lively academic environment where every student’s perspective is valued and intellectual exploration encouraged. Beyond traditional teaching, we enrich learning through field visits, interactive sessions, projects, seminars, debates, group discussions, model parliaments, economic simulations and cross-disciplinary academic events, making the study of Arts dynamic, relevant and engaging."
      sidebarContent={sidebarContent}
      sections={sections}
    />
  );
}
