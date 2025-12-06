import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Settings,
  Target,
  FileCheck,
  Award
} from 'lucide-react';

export default function IQACPage() {
  const welcomeText = (
    <div className="space-y-6 text-justify">
      <p>
        The Quality Policy of RBANMS First grade college is to achieve excellence in teaching, research, student support, extension and consultancy, with social relevance. The quality management system encompasses organizational structure, procedures, processes and financial, non-financial, human and technological resources.
      </p>
      <p>
        Internal quality assurance systems in the institution are formulated on the basis of guidelines of external quality assurance agencies such as ISO, NAAC, UGC and the affiliating university. Through internal and annual external audits, our quality assurance systems have evolved over a period of time, and have been strengthened.
      </p>
    </div>
  );

  const ctaContent = (
    <div id="objectives" className="space-y-4">
      <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
        <Target className="h-6 w-6 stroke-[3px]" /> Objectives
      </h3>
      <div className="text-muted-foreground italic text-sm space-y-2">
        <p>To develop a system for conscious and consistent catalytic action, to improve the academic and administrative performance of the institution.</p>
        <p>To facilitate institutionalisation of quality initiatives, for the improvement of academic and administrative performance of the college.</p>
      </div>
    </div>
  );

  const sidebarContent = (
    <>
      <div id="functions" className="space-y-4">
        <h4 className="text-lg font-bold uppercase tracking-wider text-slate-800 border-b pb-2">Functions</h4>
        <div className="text-sm text-muted-foreground space-y-3">
          <p>IQAC has evolved operational framework for quality assurance by integrating with all academic and administrative operations of the institution.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Associates closely with every academic operation to ensure structured strategies and well-defined processes.</li>
            <li>Regularly conducts Faculty Development Programmes to help upskill and upgrade the Faculty.</li>
            <li>Observes student support initiatives to identify deviations from student-centric approaches.</li>
            <li>Validates the conformity between academic and administrative delivery.</li>
          </ul>
        </div>
      </div>
    </>
  );

  const featureTiles: [React.ReactNode, React.ReactNode] = [
    <Card key="1" className="h-full bg-slate-900 text-white border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <Award className="h-12 w-12 mx-auto text-yellow-400" />
        <h3 className="text-2xl font-bold">Major Contributions</h3>
        <p className="text-slate-300 leading-relaxed text-sm">
          Organization of seminars, workshops and training programmes at institutional and national levels.
        </p>
      </CardContent>
    </Card>,
    <Card key="2" className="h-full bg-primary text-primary-foreground border-none flex flex-col justify-center text-center p-6">
      <CardContent className="space-y-4">
        <FileCheck className="h-12 w-12 mx-auto text-white" />
        <h3 className="text-2xl font-bold">Best Practices</h3>
        <p className="text-primary-foreground/90 leading-relaxed text-sm">
          Development of course file, periodic academic audits, assessment plans, and learner-centric activities to benchmark the teaching-learning-evaluation process.
        </p>
      </CardContent>
    </Card>
  ];

  const navItems = [
    { label: "Objectives", href: "#objectives" },
    { label: "Functions", href: "#functions" },
    { label: "Major Contributions", href: "#contributions" },
  ];

  return (
    <DepartmentLayout
      title="Internal Quality Assurance Cell (IQAC)"
      tagline="Achieving excellence in teaching, research, and student support."
      activeTab=""
      contentLeft={welcomeText}
      ctaContent={ctaContent}
      sidebarContent={sidebarContent}
      featureTiles={featureTiles}
      badgeText="Quality Assurance"
      navItems={navItems}
    >
      <section id="contributions" className="scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">Major Contributions Detail</h2>
        <Card>
          <CardContent className="pt-6 text-muted-foreground space-y-4 text-justify">
            <p>Organization of seminars, workshops and training programmes at institutional and national levels, for faculty, students and support staff, to enhance their functional efficiency. It organized two national seminars on quality aspects of education, initiated collaborative programmes in the areas of curriculum review, dissemination of information on best practices and innovative practices in departments and other institutions, and institutionalized them through seminars and reporting systems, thus maintaining quality culture of continuous improvement.</p>
            <p>Development of course file with annexure on teaching plan, pedagogy and content, periodical academic audits, assessment plan and learner-centric activities help teachers benchmark the teaching-learning-evaluation process, help increase integration of ICT in teaching-learning and promote use of ICT, along with sensitization and training of faculty.</p>
          </CardContent>
        </Card>
      </section>
    </DepartmentLayout>
  );
}
