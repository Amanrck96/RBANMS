'use client';

import { DynamicSection } from '@/components/dynamic-section';
import { Card, CardContent } from '@/components/ui/card';

interface CellPageContentProps {
    pageId: string;
    defaultTitle: string;
    defaultContent: string;
}

export function CellPageContent({ pageId, defaultTitle, defaultContent }: CellPageContentProps) {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId={pageId}
                        defaultTitle={defaultTitle}
                        defaultContent={<div dangerouslySetInnerHTML={{ __html: defaultContent }} />}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
