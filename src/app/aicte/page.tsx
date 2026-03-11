'use client';

import { DepartmentLayout } from '@/components/layout/department-layout';
import { DynamicSection } from '@/components/dynamic-section';
import { DocumentFolder } from '@/components/ui/document-folder';

export default function AICTEPage() {
    return (
        <DynamicSection
            pageId="aicte"
            render={(data) => {
        const defaultDocuments = data.certificateItems || [];

        const documentsContent = (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">AICTE Documents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DocumentFolder title="AICTE Approvals" items={defaultDocuments} />
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
                        title={data.title || "AICTE"}
                        tagline={data.tagline || "All India Council for Technical Education (AICTE)"}
                        sections={sections}
                        heroImage={data.imageUrl}
                    />
                );
            }}
        />
    );
}
