import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Settings, TrendingUp } from 'lucide-react';
import { DocumentFolder } from '@/components/ui/document-folder';

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



  const meetingMinutesItems = [
    { id: 'mm1', name: 'Meeting Minutes - 1', type: 'file' as const, url: 'https://drive.google.com/file/d/1mXOdjIHWx3RcQxI3Eeq4-cAM6O1_uQoZ/view?usp=drive_link' },
    { id: 'mm2', name: 'Meeting Minutes - 2', type: 'file' as const, url: 'https://drive.google.com/file/d/1xr1H03XzCeFKn9kC_8hCm_LQmCG9H4xz/view?usp=drive_link' },
    { id: 'mm3', name: 'Meeting Minutes - 3', type: 'file' as const, url: 'https://drive.google.com/file/d/1xWHMYWNc8Zl2Z1Tf3sGUDVowvl-HVO4C/view?usp=drive_link' },
    { id: 'mm4', name: 'Meeting Minutes - 4', type: 'file' as const, url: 'https://drive.google.com/file/d/1ZOdsVXLKkd9J_LDeLqtApRtUvNP5kVYP/view?usp=drive_link' },
  ];

  const constitutionItems = [
    { id: 'c1', name: 'Constitution Document - 1', type: 'file' as const, url: 'https://drive.google.com/open?id=14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI&usp=drive_copy' },
    { id: 'c2', name: 'Constitution Document - 2', type: 'file' as const, url: 'https://drive.google.com/open?id=1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH&usp=drive_copy' },
    { id: 'c3', name: 'Constitution Document - 3', type: 'file' as const, url: 'https://drive.google.com/open?id=1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd&usp=drive_copy' },
    { id: 'c4', name: 'Constitution Document - 4', type: 'file' as const, url: 'https://drive.google.com/open?id=1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm&usp=drive_copy' },
  ];

  const annualReportItems = [
    { id: 'ar1', name: 'Annual Report - 1', type: 'file' as const, url: 'https://drive.google.com/open?id=1VB_okbRdhm8Ll2tTNj27kfBVkxg1xj9F&usp=drive_copy' },
    { id: 'ar2', name: 'Annual Report - 2', type: 'file' as const, url: 'https://drive.google.com/open?id=1yCeCdJW-IJNq3r10gzKUqf5v0uXc-4-m&usp=drive_copy' },
    { id: 'ar3', name: 'Annual Report - 3', type: 'file' as const, url: 'https://drive.google.com/open?id=1xRihwynDNNPEGmcRLjyVXhSVXETyNB26&usp=drive_copy' },
  ];

  const documentsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">DOCUMENTS</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <DocumentFolder title="Meeting Minutes" items={meetingMinutesItems} />
        <DocumentFolder title="Annual Report" items={annualReportItems} />
        <DocumentFolder title="Constitution And Cell Members" items={constitutionItems} />
        <DocumentFolder title="Feedback Reports" />
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
    <DepartmentLayout
      title="Internal Quality Assurance Cell (IQAC)"
      tagline="The Internal Quality Assurance Cell (IQAC) at RBNMS College is the driving force behind our pursuit of academic excellence. Dedicated to maintaining high standards, the cell continuously monitors and enhances the quality of teaching, learning, and infrastructure. By implementing best practices and coordinating with accreditation bodies like NAAC, the IQAC ensures that the institution evolves to meet global educational standards while fostering a culture of continuous improvement for both faculty and students."
      sections={sections}
    />
  );
}
