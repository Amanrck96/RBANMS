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
      <Card className="bg-white border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-black text-xl flex items-center gap-2">
            <FileText className="text-primary" /> IQAC Documents
          </CardTitle>
        </CardHeader>
        <CardContent className="text-black space-y-4">
          <p className="text-lg mb-6">Access important IQAC documents and reports:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "IQAC Constitution", url: "https://drive.google.com/file/d/1gGSBowHRQx8XbKLe7EwUAT7khtjzPFa1/view?usp=drivesdk" },
              { name: "Annual SPP", url: "https://drive.google.com/file/d/1gXh5KdAGwCbC7vJb2rxNUYdH_s4ZByFV/view?usp=drivesdk" },
              { name: "Annual Report", url: "https://drive.google.com/file/d/1g_f7lFGfmCKMB_hJ3E4ijsPa0Dp8eeSw/view?usp=drivesdk" },
              { name: "IQAC Activities", url: "https://drive.google.com/file/d/1gL8KHXWdJC8Y0rQUtzsJ9C-7EuI4VE8y/view?usp=drivesdk" },
              { name: "IQAC Cell / Committee Members", url: "https://drive.google.com/file/d/1gFdjNYGnhUKf6pEu5D6Y7v1oqYICpaxz/view?usp=drivesdk" },
              { name: "Minutes of Meeting", url: "https://drive.google.com/file/d/1gEjj7t1ck_uSMu0qoBvXDR8Dv6crzA8V/view?usp=drivesdk" },
              { name: "AISHE Certificate", url: "https://drive.google.com/file/d/1g_ijNJl_z8rArEgswBCdQZEQ0z_j-5Kq/view?usp=drivesdk" }
            ].map((doc, i) => (
              <a
                key={i}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 bg-slate-50 hover:bg-primary/10 border-2 border-slate-200 hover:border-primary rounded-lg transition-all group"
              >
                <FileText className="h-5 w-5 text-primary" />
                <span className="flex-1 font-medium text-black group-hover:text-primary">{doc.name}</span>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
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
