import { DepartmentLayout } from '@/components/layout/department-layout';
import { DocumentFolder } from '@/components/ui/document-folder';

export default function NAACPage() {

  const certificateItems = [
    { id: 'c4-cert', name: 'Cycle - 4', type: 'file' as const },
    { id: 'c3-cert', name: 'Cycle - 3', type: 'file' as const },
    { id: 'c2-cert', name: 'Cycle - 2', type: 'file' as const },
    { id: 'c1-cert', name: 'Cycle - 1', type: 'file' as const },
  ];

  const ssrItems = [
    { id: 'c4-ssr', name: 'Cycle - 4', type: 'file' as const },
  ];

  const aqarItems = [
    { id: 'aqar-23-24', name: '2023-24', type: 'file' as const },
    { id: 'aqar-22-23', name: '2022-23', type: 'file' as const },
    { id: 'aqar-21-22', name: '2021-22', type: 'file' as const },
  ];

  const documentsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">NAAC Documents & Reports</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DocumentFolder title="CERTIFICATES" items={certificateItems} />
        <DocumentFolder title="SSR" items={ssrItems} />
        <DocumentFolder title="AQAR" items={aqarItems} />
      </div>
    </div>
  );

  const sections = [
    { id: 'documents', label: 'Documents', content: documentsContent },
  ];

  return (
    <DepartmentLayout
      title="NAAC Accreditation"
      tagline="National Assessment and Accreditation Council (NAAC) Documentation"
      sections={sections}
    />
  );
}
