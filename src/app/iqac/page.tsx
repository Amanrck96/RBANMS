import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Settings, TrendingUp, FileText, ExternalLink } from 'lucide-react';

export default function IQACPage() {

  // 1. Objectives Tab
  const objectivesContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-black text-xl flex items-center gap-2">
            <Target className="text-primary" /> Objectives
          </CardTitle>
        </CardHeader>
        <CardContent className="text-black space-y-4">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The primary aim of IQAC is to develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>To develop a quality culture as the prime concern for the Institution</li>
              <li>To facilitate the creation of a learner-centric environment conducive to quality education and Faculty development</li>
              <li>To arrange for feedback responses from students, parents and other stakeholders on quality related institutional processes</li>
              <li>To disseminate information on various quality parameters to all stakeholders</li>
              <li>To organize inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles</li>
              <li>To document various activities of the institutions leading to quality improvement</li>
              <li>To act as a nodal agency of the Institution for coordinating quality related activities including adoption and dissemination of best practices</li>
              <li>To develop and apply quality benchmarks/parameters for various academic and administrative activities of the Institution</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 2. Functions Tab
  const functionsContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-black text-xl flex items-center gap-2">
            <Settings className="text-primary" /> Functions
          </CardTitle>
        </CardHeader>
        <CardContent className="text-black space-y-4">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              IQAC shall evolve mechanisms and procedures for ensuring optimal standards.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution</li>
              <li>Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process</li>
              <li>Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes</li>
              <li>Dissemination of information on various quality parameters of higher education</li>
              <li>Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles</li>
              <li>Documentation of the various programmes/activities leading to quality improvement</li>
              <li>Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices</li>
              <li>Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality</li>
              <li>Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 3. Major Contributions Tab
  const contributionsContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-black text-xl flex items-center gap-2">
            <TrendingUp className="text-primary" /> Major Contributions
          </CardTitle>
        </CardHeader>
        <CardContent className="text-black space-y-4">
          <div className="space-y-6">
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Ensures timely, efficient and progressive performance of academic, administrative and financial tasks</li>
              <li>Ensures the adequacy, maintenance and proper allocation of support structure and services</li>
              <li>Facilitates a heightened level of clarity and focus in institutional functioning towards quality enhancement</li>
              <li>Ensures enhancement and coordination among various activities including curricular and co-curricular aspects</li>
              <li>Ensures the adequacy, maintenance and functioning of the support structure and services of the institution</li>
              <li>Provides a sound basis for decision-making to improve institutional functioning</li>
              <li>Acts as a dynamic system for quality changes in HEIs</li>
              <li>Builds an organised methodology of documentation and internal communication</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 4. Documents Tab
  const documentsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">IQAC DOCUMENTS</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Constitution */}
        <Card className="border-2 border-primary">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-primary">Constitution</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              <li>
                <a href="https://drive.google.com/file/d/14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> 2024-25
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> 2023-24
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> 2022-23
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" /> 2021-22
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Annual SPP */}
        <Card className="border-2 border-primary">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-primary">Annual SPP</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              <li className="text-gray-500">2024-25 (Coming Soon)</li>
              <li className="text-gray-500">2023-24 (Coming Soon)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Annual Report */}
        <Card className="border-2 border-primary">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-primary">Annual Report</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              <li className="text-gray-500">2024-25 (Coming Soon)</li>
              <li className="text-gray-500">2023-24 (Coming Soon)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Activities */}
        <Card className="border-2 border-primary">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-primary">Activities</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              <li className="text-gray-500">2024-25 (Coming Soon)</li>
              <li className="text-gray-500">2023-24 (Coming Soon)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Cell/Committee Members */}
        <Card className="border-2 border-primary">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-primary">Cell / Committee Members</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              <li className="text-gray-500">2024-25 (Coming Soon)</li>
              <li className="text-gray-500">2023-24 (Coming Soon)</li>
              <li className="text-gray-500">2022-23 (Coming Soon)</li>
              <li className="text-gray-500">2021-22 (Coming Soon)</li>
            </ul>
          </CardContent>
        </Card>

        {/* AISHE Certificate */}
        <Card className="border-2 border-primary">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-primary">AISHE Certificate</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-2">
              <li className="text-gray-500">2024-25 (Coming Soon)</li>
              <li className="text-gray-500">2023-24 (Coming Soon)</li>
              <li className="text-gray-500">2022-23 (Coming Soon)</li>
              <li className="text-gray-500">2021-22 (Coming Soon)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const sections = [
    { id: "objectives", label: "Objectives", content: objectivesContent },
    { id: "functions", label: "Functions", content: functionsContent },
    { id: "major-contributions", label: "Major Contributions", content: contributionsContent },
    { id: "documents", label: "Documents", content: documentsContent },
  ];

  return (
    <DepartmentLayout
      title="Internal Quality Assurance Cell (IQAC)"
      pageId="cell-iqac"
      tagline="The Internal Quality Assurance Cell (IQAC) at RBNMS College is the driving force behind our pursuit of academic excellence."
      sections={sections}
    />
  );
}
