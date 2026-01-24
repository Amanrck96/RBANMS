import React from 'react';
import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DocumentFolder } from '@/components/ui/document-folder';
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
              <li>To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.</li>
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
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution</li>
              <li>Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process</li>
              <li>Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes</li>
              <li>Dissemination of information on various quality parameters of higher education</li>
              <li>Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles</li>
              <li>Documentation of the various programmes/activities leading to quality improvement</li>
              <li>Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices</li>
              <li>Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality</li>
              <li>Development of Quality Culture in the institution</li>
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
            <ul className="list-disc pl-5 space-y-2 text-lg mb-6">
              <li>Ensures timely, efficient and progressive performance of academic, administrative and financial tasks</li>
              <li>Ensures the adequacy, maintenance and proper allocation of support structure and services</li>
              <li>Facilitates a heightened level of clarity and focus in institutional functioning towards quality enhancement</li>
              <li>Ensures enhancement and coordination among various activities including curricular and co-curricular aspects</li>
              <li>Ensures the adequacy, maintenance and functioning of the support structure and services of the institution</li>
              <li>Provides a sound basis for decision-making to improve institutional functioning</li>
              <li>Acts as a dynamic system for quality changes in HEIs</li>
              <li>Builds an organised methodology of documentation and internal communication</li>
            </ul>

            <h3 className="text-xl font-bold text-primary mt-6 mb-4">Institutional Achievements</h3>
            <div className="space-y-4 text-lg bg-slate-50 p-6 rounded-lg">
              <p><strong>NIRF Participation:</strong> The College participates in the NIRF ranking every year.</p>
              <p><strong>AISHE:</strong> Data is uploaded to the All India Survey on Higher Education portal every year.</p>
              <p><strong>Feedback:</strong> Feedback is collected from various stakeholders like students, parents, alumni, and employers, analyzed, and action taken report is prepared and uploaded on the website.</p>
              <p><strong>Result Analysis:</strong> Result analysis is done after every semester to identify advanced learners and slow learners.</p>
              <p><strong>Audit:</strong> Academic and Administrative Audit is conducted to evaluate the performance of the institution.</p>
              <div>
                <strong>Fidelity to the requirements of NAAC:</strong>
                <ul className="list-disc pl-8 mt-2">
                  <li>AQAR is submitted every year.</li>
                  <li>SSR is submitted for the accreditation process (First Cycle, Second Cycle, Third Cycle, and Fourth Cycle).</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // 4. Documents Tab
  // Document Data Definitions
  const constitutionItems = [
    { id: 'const-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/file/d/14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI/view?usp=sharing' },
    { id: 'const-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/file/d/1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm/view?usp=sharing' },
    { id: 'const-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/file/d/1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH/view?usp=sharing' },
    { id: 'const-21-22', name: '2021-22', type: 'file' as const, url: 'https://drive.google.com/file/d/1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd/view?usp=sharing' },
  ];

  const sppItems = [
    { id: 'spp-24-25', name: '2024-25 (Coming Soon)', type: 'file' as const },
    { id: 'spp-23-24', name: '2023-24 (Coming Soon)', type: 'file' as const },
  ];

  const annualReportItems = [
    { id: 'ar-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/open?id=1VB_okbRdhm8Ll2tTNj27kfBVkxg1xj9F&usp=drive_copy' },
    { id: 'ar-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/open?id=1yCeCdJW-IJNq3r10gzKUqf5v0uXc-4-m&usp=drive_copy' },
    { id: 'ar-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/open?id=1xRihwynDNNPEGmcRLjyVXhSVXETyNB26&usp=drive_copy' },
  ];

  const activitiesItems = [
    { id: 'act-24-25', name: '2024-25 (Coming Soon)', type: 'file' as const },
    { id: 'act-23-24', name: '2023-24 (Coming Soon)', type: 'file' as const },
  ];

  const membersItems = [
    { id: 'mem-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/open?id=14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI&usp=drive_copy' },
    { id: 'mem-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/open?id=1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm&usp=drive_copy' },
    { id: 'mem-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/open?id=1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH&usp=drive_copy' },
    { id: 'mem-21-22', name: '2021-22', type: 'file' as const, url: 'https://drive.google.com/open?id=1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd&usp=drive_copy' },
  ];

  const aisheItems = [
    { id: 'aishe-24-25', name: '2024-25 (Coming Soon)', type: 'file' as const },
    { id: 'aishe-23-24', name: '2023-24 (Coming Soon)', type: 'file' as const },
    { id: 'aishe-22-23', name: '2022-23 (Coming Soon)', type: 'file' as const },
    { id: 'aishe-21-22', name: '2021-22 (Coming Soon)', type: 'file' as const },
  ];

  const documentsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">IQAC DOCUMENTS</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DocumentFolder title="Constitution" items={constitutionItems} />
        <DocumentFolder title="Annual SPP" items={sppItems} />
        <DocumentFolder title="Annual Report" items={annualReportItems} />
        <DocumentFolder title="Activities" items={activitiesItems} />
        <DocumentFolder title="Cell / Committee Members" items={membersItems} />
        <DocumentFolder title="AISHE Certificate" items={aisheItems} />
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
