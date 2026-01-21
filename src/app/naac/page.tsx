'use client';

import { DepartmentLayout } from '@/components/layout/department-layout';
import { DocumentFolder } from '@/components/ui/document-folder';
import { DynamicSection } from '@/components/dynamic-section';

export default function NAACPage() {

  const defaultCertificateItems = [
    { id: 'c4-cert', name: 'Cycle - 4', type: 'file' as const, url: 'https://drive.google.com/file/d/1p8XTQ5vo3Qk9rRoWWrfsDNlXrqY3wUEq/view?usp=sharing' },
    { id: 'c3-cert', name: 'Cycle - 3', type: 'file' as const, url: 'https://drive.google.com/file/d/1VQUzoE5vVt0DHPmqHPBckSOyCEJSrpzM/view?usp=sharing' },
    { id: 'c2-cert', name: 'Cycle - 2', type: 'file' as const, url: 'https://drive.google.com/file/d/1rw9sWy3Euzqq5nMIRKOjcjm52-6tEH7K/view?usp=sharing' },
    { id: 'c1-cert', name: 'Cycle - 1', type: 'file' as const, url: 'https://drive.google.com/file/d/1H7_5lRqjoGL9pin6Wb7m1Nizw6ku5qOc/view?usp=sharing' },
  ];

  const defaultSsrItems = [
    { id: 'ssr-2022', name: 'Cycle - 4', type: 'file' as const, url: 'https://drive.google.com/file/d/18b7Qbb8pW6Ien3-e5HROO2h_r4NiFW8O/view?usp=sharing' },
  ];

  const defaultAqarItems = [
    { id: 'aqar-23-24', name: '2023-24 (Coming Soon)', type: 'file' as const },
    { id: 'aqar-22-23', name: '2022-23 (Coming Soon)', type: 'file' as const },
    { id: 'aqar-21-22', name: '2021-22 (Coming Soon)', type: 'file' as const },
  ];

  return (
    <DynamicSection
      pageId="naac"
      render={(data) => {
        const certItems = data.certificateItems || defaultCertificateItems;
        const ssrItems = data.ssrItems || defaultSsrItems;
        const aqarItems = data.aqarItems || defaultAqarItems;

        const documentsContent = (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">NAAC Documents & Reports</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DocumentFolder title="CERTIFICATES" items={certItems} />
              <DocumentFolder title="SSR" items={ssrItems} />
              <DocumentFolder title="AQAR" items={aqarItems} />
            </div>
          </div>
        );

        const sections = [
          { id: 'documents', label: 'Documents', content: documentsContent },
        ];

        if (data.content) {
          sections.unshift({
            id: 'updates',
            label: 'Updates',
            content: <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
          });
        }

        return (
          <DepartmentLayout
            title={data.title || "NAAC Accreditation"}
            tagline={data.tagline || "National Assessment and Accreditation Council (NAAC) Documentation"}
            sections={sections}
            heroImage={data.imageUrl}
          />
        );
      }}
    />
  );
}
