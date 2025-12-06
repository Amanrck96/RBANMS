import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Settings, Award, CheckCircle, Zap, BookOpen } from 'lucide-react';

export default function IQACPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <h2 className="text-2xl font-bold text-slate-800">Internal Quality Assurance Cell (IQAC)</h2>
      <p>
        The Quality Policy of RBANMS First grade college is to achieve excellence in teaching, research, student support, extension and consultancy, with social relevance. The quality management system encompasses organizational structure, procedures, processes and financial, non-financial, human and technological resources.
      </p>
      <p>
        Internal quality assurance systems in the institution are formulated on the basis of guidelines of external quality assurance agencies such as ISO, NAAC, UGC and the affiliating university. Through internal and annual external audits, our quality assurance systems have evolved over a period of time, and have been strengthened.
      </p>
    </div>
  );

  const ctaContent = (
    <div className="space-y-4" id="objectives">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Objectives
      </h3>
      <div className="text-left space-y-3">
        <div className="flex gap-3 text-muted-foreground">
          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
          <span className="text-sm">To develop a system for conscious and consistent catalytic action, to improve the academic and administrative performance of the institution.</span>
        </div>
        <div className="flex gap-3 text-muted-foreground">
          <CheckCircle className="h-5 w-5 text-primary shrink-0" />
          <span className="text-sm">To facilitate institutionalisation of quality initiatives, for the improvement of academic and administrative performance of the college.</span>
        </div>
      </div>
    </div>
  );

  const sidebarContent = (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2 mb-4">Focus Areas</h4>
        <div className="flex flex-wrap gap-2">
          {["Curriculum Review", "Teaching Pedagogy", "Student Support", "Infrastructure Audit", "Faculty Development", "ICT Integration"].map((tag, i) => (
            <Badge key={i} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2 mb-4">Quality Assurance</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2"><span className="text-primary font-bold">•</span> Annual External Audits</li>
          <li className="flex gap-2"><span className="text-primary font-bold">•</span> Feedback Mechanism</li>
          <li className="flex gap-2"><span className="text-primary font-bold">•</span> Academic & Admin Audit</li>
        </ul>
      </div>
    </div>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Settings className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Operational Framework</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Integrating with all academic and administrative operations to ensure structured strategies and defined processes for delivery.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Excellence</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Achieving excellence in teaching, research, and consultancy with social relevance through continuous quality improvement.
        </p>
      </CardContent>
    </Card>
  ];

  const navItems = [
    { label: "Objectives", href: "#objectives", isActive: false },
    { label: "Functions", href: "#functions", isActive: false },
    { label: "Major Contributions", href: "#contributions", isActive: false },
  ];

  return (
    <DepartmentLayout
      title="Internal Quality Assurance Cell"
      tagline="Ensuring Excellence through Conscious and Consistent Action."
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
      navItems={navItems}
      badgeText="Quality Assurance"
    >
      {/* Functions Section */}
      <section id="functions">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Functions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Operational Integration", desc: "Associates closely with every academic operation to ensure structured strategies and defined processes, enabling tangible performance measurement." },
            { title: "Faculty Development", desc: "Regularly conducts Faculty Development Programmes to help upskill and upgrade the Faculty." },
            { title: "Student Centricity", desc: "Observes student support initiatives to identify deviations. Actively amends processes and ensures firm adherence to modifications." },
            { title: "Validation", desc: "Continuously validates the conformity between academic and administrative delivery to ensure comprehensive effectiveness." }
          ].map((func, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg text-primary">{func.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{func.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Major Contributions */}
      <section id="contributions">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Major Contributions</h2>
        <Card className="bg-slate-50 border">
          <CardContent className="p-8 space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                <Zap className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Seminars & Workshops</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organization of seminars, workshops and training programmes at institutional and national levels. Organized two national seminars on quality aspects of education. Initiated collaborative programmes in curriculum review and sharing of best practices.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                <BookOpen className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Academic Audits & Teaching Plans</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Development of course files with teaching plans, pedagogy, and content. Periodical academic audits and learner-centric activities helping teachers benchmark the teaching-learning process. Promoting the use of ICT in teaching.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DepartmentLayout>
  );
}
