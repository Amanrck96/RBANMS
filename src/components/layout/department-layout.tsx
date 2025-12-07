import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface NavItem {
    label: string;
    href: string;
    isActive?: boolean;
}

interface DepartmentLayoutProps {
    title: string;
    tagline?: string;
    activeTab?: string;
    contentLeft?: React.ReactNode;
    ctaContent?: React.ReactNode;
    sidebarContent?: React.ReactNode;
    featureTiles?: [React.ReactNode, React.ReactNode];
    children?: React.ReactNode;
    navItems?: NavItem[];
    sections?: { id: string; label: string; content: React.ReactNode }[];
    badgeText?: string;
}

const departments = [
    { name: 'Arts', slug: 'arts' },
    { name: 'Commerce', slug: 'commerce' },
    { name: 'Management', slug: 'management' },
    { name: 'Computer Applications', slug: 'computer-applications' },
    { name: 'English', slug: 'english' },
    { name: 'Languages', slug: 'languages' },
    { name: 'Physical Education', slug: 'physical-education' },
];

export function DepartmentLayout({
    title,
    tagline,
    activeTab,
    contentLeft,
    ctaContent,
    sidebarContent,
    featureTiles,
    children,
    navItems,
    sections,
    badgeText = "Department"
}: DepartmentLayoutProps) {

    // If sections are provided, we use the Tabbed Layout
    if (sections && sections.length > 0) {
        return (
            <div className="min-h-screen bg-background text-foreground font-sans">
                {/* 1. Full-width Header Band */}
                <div className="w-full bg-primary py-12 px-4 md:px-8 shadow-sm">
                    <div className="container mx-auto">
                        <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
                            {badgeText}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground font-headline tracking-tight">
                            {title}
                        </h1>
                        {tagline && (
                            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
                                {tagline}
                            </p>
                        )}
                    </div>
                </div>

                {/* Tabbed Interface */}
                <Tabs defaultValue={sections[0].id} className="w-full">
                    <div className="border-b bg-muted/30 sticky top-0 z-20 backdrop-blur-sm">
                        <div className="container mx-auto">
                            <ScrollArea className="w-full whitespace-nowrap">
                                <TabsList className="flex w-full min-w-max h-auto bg-transparent p-0 justify-start">
                                    {sections.map((section) => (
                                        <TabsTrigger
                                            key={section.id}
                                            value={section.id}
                                            className="flex-1 inline-flex items-center justify-center px-6 py-4 text-sm font-medium transition-colors hover:bg-muted/50 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-primary/5 data-[state=active]:font-bold rounded-none"
                                        >
                                            {section.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 md:px-8 py-12 min-h-[500px]">
                        {sections.map((section) => (
                            <TabsContent key={section.id} value={section.id} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {section.content}
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        );
    }

    // Legacy Scroll Layout
    const navigationItems = navItems || departments.map(dept => ({
        label: dept.name,
        href: `/departments/${dept.slug}`,
        isActive: dept.slug === activeTab
    }));

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            {/* 1. Full-width Header Band */}
            <div className="w-full bg-primary py-12 px-4 md:px-8 shadow-sm">
                <div className="container mx-auto">
                    <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
                        {badgeText}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground font-headline tracking-tight">
                        {title}
                    </h1>
                    {tagline && (
                        <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed">
                            {tagline}
                        </p>
                    )}
                </div>
            </div>

            {/* 2. Navigation/Tabs Strip (Legacy) */}
            <div className="w-full border-b bg-muted/30 sticky top-0 z-20 backdrop-blur-sm">
                <div className="container mx-auto">
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex w-full min-w-max">
                            {navigationItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className={cn(
                                        "flex-1 inline-flex items-center justify-center px-6 py-4 text-sm font-medium transition-colors hover:bg-muted/50 border-b-2 whitespace-nowrap",
                                        item.isActive
                                            ? "border-primary text-primary bg-primary/5 font-bold"
                                            : "border-transparent text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            )
                            )}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-12 space-y-16">
                {/* 3. Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Primary Column (Left) */}
                    <div className="lg:col-span-2 flex flex-col gap-10">
                        {/* Intro Text */}
                        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                            {contentLeft}
                        </div>

                        {/* Outlined CTA Box */}
                        {ctaContent && (
                            <div className="mx-auto w-full max-w-2xl border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 text-center hover:bg-primary/10 transition-colors cursor-default">
                                {ctaContent}
                            </div>
                        )}
                    </div>

                    {/* Secondary Column (Right - Sidebar) */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border p-6 space-y-8 sticky top-24">
                            {sidebarContent}
                        </div>
                    </div>
                </div>

                {/* 4. Lower Grid / Feature Blocks */}
                {featureTiles && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {featureTiles.map((tile, idx) => (
                            <div key={idx} className="flex-1 min-h-[200px] h-full">
                                {/* Ensure tiles are equal height if possible, consumer should style content to fill */}
                                {tile}
                            </div>
                        ))}
                    </div>
                )}

                {/* 5. Additional Full Width Content (Courses, Faculty, etc) */}
                {children && (
                    <div className="pt-8 space-y-16 border-t">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
