'use client';

import { DepartmentLayout } from '@/components/layout/department-layout';
import { DynamicSection } from '@/components/dynamic-section';

export default function AICTEPage() {
    return (
        <DynamicSection
            pageId="aicte"
            render={(data) => {
                const sections = [
                    {
                        id: 'updates',
                        label: 'Updates',
                        content: (
                            data.content ?
                                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
                                : <p>Information regarding AICTE will be updated soon.</p>
                        )
                    },
                ];

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
