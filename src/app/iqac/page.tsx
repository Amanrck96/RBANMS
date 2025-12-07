import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Settings,
  Target,
  FileCheck,
  Award
} from 'lucide-react';

export default function IQACPage() {

  // 1. Objectives
  const objectivesContent = (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6 text-justify prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Internal Quality Assurance Cell (IQAC)</h2>
        <p>
          The Quality Policy of RBANMS First grade college is to achieve excellence in teaching, research, student support, extension and consultancy, with social relevance. The quality management system encompasses organizational structure, procedures, processes and financial, non-financial, human and technological resources.
        </p>
        <p>
          Internal quality assurance systems in the institution are formulated on the basis of guidelines of external quality assurance agencies such as ISO, NAAC, UGC and the affiliating university. Through internal and annual external audits, our quality assurance systems have evolved over a period of time, and have been strengthened.
        </p>
      </div>

      <div className="mx-auto w-full max-w-3xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center">
        <h3 className="text-3xl font-bold flex items-center justify-center gap-2 mb-6">
          <Target className="h-8 w-8 stroke-[3px]" /> Objectives
        </h3>
        <div className="text-muted-foreground italic text-lg space-y-4 leading-relaxed">
          <p>To develop a system for conscious and consistent catalytic action, to improve the academic and administrative performance of the institution.</p>
          <p>To facilitate institutionalisation of quality initiatives, for the improvement of academic and administrative performance of the college.</p>
        </div>
      </div>
    </div>
  );

  // 2. Functions
  const functionsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Functions</h2>
      <div className="text-lg text-muted-foreground space-y-4">
        <p>IQAC has evolved operational framework for quality assurance by integrating with all academic and administrative operations of the institution.</p>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              <li>Associates closely with every academic operation to ensure structured strategies and well-defined processes.</li>
              <li>Regularly conducts Faculty Development Programmes to help upskill and upgrade the Faculty.</li>
              <li>Observes student support initiatives to identify deviations from student-centric approaches.</li>
              <li>Validates the conformity between academic and administrative delivery.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // 3. Major Contributions
  const contributionsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Major Contributions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="h-full bg-slate-900 text-white border-none flex flex-col p-6">
          <CardContent className="space-y-4">
            <Award className="h-12 w-12 text-yellow-400" />
            <h3 className="text-2xl font-bold">Seminars & Workshops</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Organization of seminars, workshops and training programmes at institutional and national levels, for faculty, students and support staff, to enhance their functional efficiency. It organized two national seminars on quality aspects of education, initiated collaborative programmes in the areas of curriculum review, dissemination of information on best practices and innovative practices in departments and other institutions, and institutionalized them through seminars and reporting systems, thus maintaining quality culture of continuous improvement.
            </p>
          </CardContent>
        </Card>
        <Card className="h-full bg-primary text-primary-foreground border-none flex flex-col p-6">
          <CardContent className="space-y-4">
            <FileCheck className="h-12 w-12 text-white" />
            <h3 className="text-2xl font-bold">Best Practices</h3>
            <p className="text-primary-foreground/90 leading-relaxed text-sm">
              Development of course file with annexure on teaching plan, pedagogy and content, periodical academic audits, assessment plan and learner-centric activities help teachers benchmark the teaching-learning-evaluation process, help increase integration of ICT in teaching-learning and promote use of ICT, along with sensitization and training of faculty.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const sections = [
    { id: "objectives", label: "Objectives", content: objectivesContent },
    { id: "functions", label: "Functions", content: functionsContent },
    { id: "contributions", label: "Major Contributions", content: contributionsContent },
  ];

  return (
    <DepartmentLayout
      title="Internal Quality Assurance Cell (IQAC)"
      tagline="Achieving excellence in teaching, research, and student support."
      badgeText="Quality Assurance"
      sections={sections}
    />
  );
}
