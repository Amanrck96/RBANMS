import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  Settings,
  Award,
  BookOpen,
  Users,
  BarChart,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export default function IQACPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              Internal Quality Assurance Cell (IQAC)
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Striving for <span className="text-yellow-400">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Enhancing quality in teaching, research, student support, and administration.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Quality Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Quality Policy of RBANMS First grade college is to achieve excellence in teaching, research, student support, extension and consultancy, with social relevance. The quality management system encompasses organizational structure, procedures, processes and financial, non-financial, human and technological resources.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Internal quality assurance systems in the institution are formulated on the basis of guidelines of external quality assurance agencies such as ISO, NAAC, UGC and the affiliating university. Through internal and annual external audits, our quality assurance systems have evolved over a period of time, and have been strengthened.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Award className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-blue-900">Excellence</span>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Settings className="h-8 w-8 text-slate-600" />
                <span className="font-semibold text-slate-900">Systems</span>
              </CardContent>
            </Card>
            <Card className="bg-indigo-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
                <span className="font-semibold text-indigo-900">Audits</span>
              </CardContent>
            </Card>
            <Card className="bg-teal-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Target className="h-8 w-8 text-teal-600" />
                <span className="font-semibold text-teal-900">Relevance</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Catalytic Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To develop a system for conscious and consistent catalytic action, to improve the academic and administrative performance of the institution.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Settings className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Institutionalisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To facilitate institutionalisation of quality initiatives, for the improvement of academic and administrative performance of the college.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Functions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-center text-muted-foreground mb-8">
            IQAC has evolved operational framework for quality assurance by integrating with all academic and administrative operations of the institution.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5 text-blue-600" /> Academic Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  It associates closely with every academic operation of the institution to ensure that all operations have structured strategies and well-defined processes of delivery. This enables tangible measurement of performance, which will serve as reference for sustaining and improving quality of future initiatives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Users className="h-5 w-5 text-blue-600" /> Faculty Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Regularly conducts Faculty Development Programmes to help upskill and upgrade the Faculty.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Users className="h-5 w-5 text-blue-600" /> Student Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  It closely observes student support initiatives being delivered at various touch-points across the system, to identify deviations from student-centric approaches. Once such shortcomings are identified, the IQAC actively involves in the amendment and modification of processes/systems, communicates the same and also plays a key role in ensuring firm adherence to these modifications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Settings className="h-5 w-5 text-blue-600" /> Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  It also continuously validates the conformity between academic and administrative delivery, to ensure that there is no disconnect in comprehensive effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Contributions */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Major Contributions</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Organization of seminars, workshops and training programmes at institutional and national levels, for faculty, students and support staff, to enhance their functional efficiency. It organized two national seminars on quality aspects of education, initiated collaborative programmes in the areas of curriculum review, dissemination of information on best practices and innovative practices in departments and other institutions, and institutionalized them through seminars and reporting systems, thus maintaining quality culture of continuous improvement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Development of course file with annexure on teaching plan, pedagogy and content, periodical academic audits, assessment plan and learner-centric activities help teachers benchmark the teaching-learning-evaluation process, help increase integration of ICT in teaching-learning and promote use of ICT, along with sensitization and training of faculty.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
