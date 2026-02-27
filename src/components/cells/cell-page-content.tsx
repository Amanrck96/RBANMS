'use client';

import { DepartmentLayout } from '@/components/layout/department-layout';
import { DynamicSection } from '@/components/dynamic-section';

interface CellPageContentProps {
    pageId: string;
    defaultTitle: string;
    defaultContent: string;
    sections?: { id: string; label: string; content: React.ReactNode }[];
}

export function CellPageContent({ pageId, defaultTitle, defaultContent, sections }: CellPageContentProps) {
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

    return (
        <DepartmentLayout
            pageId={pageId}
            title={defaultTitle}
            badgeText="Cell / Committee"
            sidebarContent={sidebarDefault}
            tagline={<div dangerouslySetInnerHTML={{ __html: defaultContent }} />}
            navItems={[]}
            sections={sections}
        />
    );
}
