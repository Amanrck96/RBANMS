'use client';

import { DepartmentLayout } from '@/components/layout/department-layout';
import { DynamicSection } from '@/components/dynamic-section';

interface CellPageContentProps {
    pageId: string;
    defaultTitle: string;
    defaultContent: string;
}

export function CellPageContent({ pageId, defaultTitle, defaultContent }: CellPageContentProps) {
    const sidebarDefault = (
        <div className="w-full relative rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/logo.png"
                alt="Cell Sidebar"
                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
        </div>
    );

    // We want the content to appear in the main body, not the header.
    // So we pass 'hideContentInHeader' to DepartmentLayout.
    // And we render the content purely in the body using the SAME pageId.
    const mainBody = (
        <DynamicSection
            pageId={pageId}
            defaultContent={<div dangerouslySetInnerHTML={{ __html: defaultContent }} />}
            render={(data) => (
                <div
                    className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: data.content || defaultContent }}
                />
            )}
        />
    );

    return (
        <DepartmentLayout
            pageId={pageId}
            title={defaultTitle}
            badgeText="Cell / Committee"
            sidebarContent={sidebarDefault}
            contentLeft={mainBody}
            hideContentInHeader={true}
        />
    );
}
