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
        const ssrItems = data.ssrItems || [];
        const aqarItems = data.aqarItems || [];

        const hasAnyDocuments = defaultDocuments.length > 0 || ssrItems.length > 0 || aqarItems.length > 0;

        const documentsContent = (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase">AICTE Documents</h2>
            {hasAnyDocuments ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(defaultDocuments.length > 0) && <DocumentFolder title="AICTE Approvals" items={defaultDocuments} />}
                {(ssrItems.length > 0) && <DocumentFolder title="Mandatory Disclosures" items={ssrItems} />}
                {(aqarItems.length > 0) && <DocumentFolder title="Other Documents" items={aqarItems} />}
                </div>
            ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500 italic">
                    <p>Documents will be updated shortly...</p>
                </div>
            )}
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
