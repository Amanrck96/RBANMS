'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Settings, TrendingUp } from 'lucide-react';
import { DocumentFolder } from '@/components/ui/document-folder';
import { DynamicSection } from '@/components/dynamic-section';

export default function IQACPage() {
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
    { id: 'cm-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/file/d/14TNINSLEJGsYgsVmd5sP-YtFqCDHxRrI/view?usp=sharing' },
    { id: 'cm-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/file/d/1GuJ3uCUFypLJysN8zvACzIIAAD36fYYm/view?usp=sharing' },
    { id: 'cm-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/file/d/1Ia7zdXiygkSfhHndRx7YTew_n5fW49DH/view?usp=sharing' },
    { id: 'cm-21-22', name: '2021-22', type: 'file' as const, url: 'https://drive.google.com/file/d/1z1JmqoR0U1nAmutVIzxEZ7vjaRjkrIfd/view?usp=sharing' },
  ];

  const minutesOfMeetingItems = [
    { id: 'mom-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/file/d/1mXOdjIHWx3RcQxI3Eeq4-cAM6O1_uQoZ/view?usp=sharing' },
    { id: 'mom-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/file/d/1xr1H03XzCeFKn9kC_8hCm_LQmCG9H4xz/view?usp=sharing' },
    { id: 'mom-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/file/d/1xWHMYWNc8Zl2Z1Tf3sGUDVowvl-HVO4C/view?usp=sharing' },
    { id: 'mom-21-22', name: '2021-22', type: 'file' as const, url: 'https://drive.google.com/file/d/1ZOdsVXLKkd9J_LDeLqtApRtUvNP5kVYP/view?usp=sharing' },
  ];

  const aisheItems = [
    { id: 'aishe-24-25', name: '2024-25', type: 'file' as const },
    { id: 'aishe-23-24', name: '2023-24', type: 'file' as const },
    { id: 'aishe-22-23', name: '2022-23', type: 'file' as const },
    { id: 'aishe-21-22', name: '2021-22', type: 'file' as const },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="border-none shadow-xl">
        <CardContent className="pt-10">
          <DynamicSection
            pageId="cell-iqac"
            defaultTitle="Internal Quality Assurance Cell (IQAC)"
            defaultContent={
              <div className="space-y-12">
                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <p className="text-lg">
                    The Internal Quality Assurance Cell (IQAC) at RBNMS College is the driving force behind our pursuit of academic excellence. Dedicated to maintaining high standards, the cell continuously monitors and enhances the quality of teaching, learning, and infrastructure. By implementing best practices and coordinating with accreditation bodies like NAAC, the IQAC ensures that the institution evolves to meet global educational standards while fostering a culture of continuous improvement for both faculty and students.
                  </p>

                  {/* Image Grid - Provided Google Drive Links */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 h-64 relative group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://lh3.googleusercontent.com/d/1VB_okbRdhm8Ll2tTNj27kfBVkxg1xj9F"
                        alt="IQAC Activity Image 1"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 h-64 relative group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://lh3.googleusercontent.com/d/1xRihwynDNNPEGmcRLjyVXhSVXETyNB26"
                        alt="IQAC Activity Image 2"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 h-64 relative group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://lh3.googleusercontent.com/d/1yCeCdJW-IJNq3r10gzKUqf5v0uXc-4-m"
                        alt="IQAC Activity Image 3"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 mt-12">
                    {/* Objectives */}
                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
                      <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Target className="h-6 w-6" /> Objectives
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-lg">
                        <li>To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.</li>
                        <li>To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.</li>
                      </ul>
                    </div>

                    {/* Functions */}
                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
                      <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Settings className="h-6 w-6" /> Functions
                      </h3>
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
                    </div>

                    {/* Contributions */}
                    <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
                      <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                        <TrendingUp className="h-6 w-6" /> Major Contributions
                      </h3>
                      <div className="space-y-4 text-lg">
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
                  </div>

                  {/* Documents Section */}
                  <div className="mt-16 pt-12 border-t">
                    <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase mb-8">IQAC Documents</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <DocumentFolder title="Constitution" items={constitutionItems} />
                      <DocumentFolder title="Cell / Committee Members" items={cellMemberItems} />
                      <DocumentFolder title="Minutes of Meeting" items={minutesOfMeetingItems} />
                      <DocumentFolder title="Annual SPP" items={annualSppItems} />
                      <DocumentFolder title="Annual Report" items={annualReportItems} />
                      <DocumentFolder title="Activities" items={activitiesItems} />
                      <DocumentFolder title="AISHE Certificate" items={aisheItems} />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
