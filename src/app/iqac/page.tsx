'use client';

import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Settings, TrendingUp } from 'lucide-react';
import { DocumentFolder } from '@/components/ui/document-folder';
import { DynamicSection } from '@/components/dynamic-section';

export default function IQACPage() {
  const objectivesContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary text-black">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Target className="h-6 w-6" /> Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.</li>
            <li>To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const functionsContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary text-black">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Settings className="h-6 w-6" /> Functions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution</li>
            <li>Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process</li>
            <li>Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes</li>
            <li>Dissemination of information on various quality parameters of higher education</li>
            <li>Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles</li>
            <li>Documentation of the various programmes/activities leading to quality improvement</li>
            <li>Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices</li>
            <li>Development and maintenance of institutional database through MIS for the purpose of maintaining /enhancing the institutional quality</li>
            <li>Development of Quality Culture in the institution</li>
            <li>Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const contributionsContent = (
    <div className="space-y-6">
      <Card className="bg-white border-2 border-primary text-black">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <TrendingUp className="h-6 w-6" /> Major Contributions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-lg">
            <p><strong>NIRF Participation:</strong> The College participates in the NIRF ranking every year.</p>
            <p><strong>AISHE:</strong> Data is uploaded to the All India Survey on Higher Education portal every year.</p>
            <p><strong>Feedback:</strong> Feedback is collected from various stakeholders like students, parents, alumni, and employers, analyzed, and action taken report is prepared and uploaded on the website.</p>
            <p><strong>Result Analysis:</strong> Result analysis is done after every semester to identify advanced learners and slow learners.</p>
            <p><strong>Audit:</strong> Academic and Administrative Audit is conducted to evaluate the performance of the institution.</p>
            <p>
              <strong>Fidelity to the requirements of NAAC:</strong>
              <ul className="list-disc pl-8 mt-2">
                <li>AQAR is submitted every year.</li>
                <li>SSR is submitted for the accreditation process (First Cycle, Second Cycle, Third Cycle, and Fourth Cycle).</li>
              </ul>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );



  const constitutionItems = [
    { id: 'c-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/file/d/14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI/view?usp=sharing' },
    { id: 'c-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/file/d/1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm/view?usp=sharing' },
    { id: 'c-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/file/d/1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH/view?usp=sharing' },
    { id: 'c-21-22', name: '2021-22', type: 'file' as const, url: 'https://drive.google.com/file/d/1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd/view?usp=sharing' },
  ];

  const annualSppItems = [
    { id: 'spp-24-25', name: '2024-25', type: 'file' as const },
    { id: 'spp-23-24', name: '2023-24', type: 'file' as const },
  ];

  const annualReportItems = [
    { id: 'ar-24-25', name: '2024-25', type: 'file' as const },
    { id: 'ar-23-24', name: '2023-24', type: 'file' as const },
  ];

  const activitiesItems = [
    { id: 'act-24-25', name: '2024-25', type: 'file' as const },
    { id: 'act-23-24', name: '2023-24', type: 'file' as const },
  ];

  const cellMemberItems = [
    { id: 'cm-24-25', name: '2024-25', type: 'file' as const },
    { id: 'cm-23-24', name: '2023-24', type: 'file' as const },
    { id: 'cm-22-23', name: '2022-23', type: 'file' as const },
    { id: 'cm-21-22', name: '2021-22', type: 'file' as const },
  ];

  const aisheItems = [
    { id: 'aishe-24-25', name: '2024-25', type: 'file' as const },
    { id: 'aishe-23-24', name: '2023-24', type: 'file' as const },
    { id: 'aishe-22-23', name: '2022-23', type: 'file' as const },
    { id: 'aishe-21-22', name: '2021-22', type: 'file' as const },
  ];

  const documentsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">IQAC Documents</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <DocumentFolder title="Constitution" items={constitutionItems} />
        <DocumentFolder title="Annual SPP" items={annualSppItems} />
        <DocumentFolder title="Annual Report" items={annualReportItems} />
        <DocumentFolder title="Activities" items={activitiesItems} />
        <DocumentFolder title="Cell / Committee Members" items={cellMemberItems} />
        <DocumentFolder title="AISHE Certificate" items={aisheItems} />
      </div>
    </div>
  );

  const sections = [
    { id: 'objectives', label: 'Objectives', content: objectivesContent },
    { id: 'functions', label: 'Functions', content: functionsContent },
    { id: 'major-contributions', label: 'Major Contributions', content: contributionsContent },
    { id: 'documents', label: 'Documents', content: documentsContent },
  ];

  return (
    <DynamicSection
      pageId="cell-iqac"
      render={(data) => (
        <DepartmentLayout
          title={data.title || "Internal Quality Assurance Cell (IQAC)"}
          pageId="cell-iqac"
          tagline={data.imageUrl ? undefined : (data.content ? "Internal Quality Assurance Cell" : "The Internal Quality Assurance Cell (IQAC) at RBNMS College is the driving force behind our pursuit of academic excellence. Dedicated to maintaining high standards, the cell continuously monitors and enhances the quality of teaching, learning, and infrastructure. By implementing best practices and coordinating with accreditation bodies like NAAC, the IQAC ensures that the institution evolves to meet global educational standards while fostering a culture of continuous improvement for both faculty and students.")}
          heroImage={data.imageUrl}
          sections={data.content ? [
            { id: 'custom', label: 'Updates', content: <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} /> },
            ...sections
          ] : sections}
        />
      )}
    />
  );
}
