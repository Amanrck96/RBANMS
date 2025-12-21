import { DepartmentLayout } from '@/components/layout/department-layout';
import { DocumentFolder } from '@/components/ui/document-folder';

export default function NAACPage() {

  const documentsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">NAAC DOCUMENTS & CERTIFICATES</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <DocumentFolder title="Cycle 1 Accreditation" items={[
          { id: 'c1-ssr', name: 'Self Study Report (SSR) - Cycle 1', type: 'file', size: '2.5 MB' },
          { id: 'c1-cert', name: 'NAAC Certificate - Cycle 1', type: 'file', size: '1.2 MB' }
        ]} />
        <DocumentFolder title="Cycle 2 Accreditation" />
        <DocumentFolder title="Cycle 3 Accreditation" />
        <DocumentFolder title="Cycle 4 Accreditation (Ongoing)" />
        <DocumentFolder title="IIQA" />
        <DocumentFolder title="Undertaking" />
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
