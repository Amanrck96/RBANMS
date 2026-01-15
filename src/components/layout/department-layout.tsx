'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DynamicSection } from '@/components/dynamic-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Mail, Phone } from 'lucide-react';

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
    heroImage?: string;
    heroImageAlt?: string;
    pageId?: string;
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
    badgeText = "Department",
    heroImage,
    heroImageAlt,
    pageId
}: DepartmentLayoutProps) {

    const [dynamicData, setDynamicData] = useState<any>(null);

    useEffect(() => {
        if (!pageId) return;
        async function fetchPageData() {
            try {
                const res = await fetch(`/api/site-content?section=page-${pageId}`, { cache: 'no-store' });
                const json = await res.json();
                if (json.data) {
                    setDynamicData(json.data);
                }
            } catch (e) {
                console.error("Failed to fetch dynamic page content:", e);
            }
        }
        fetchPageData();
    }, [pageId]);

    const effectiveHeroImage = dynamicData?.imageUrl || heroImage;
    const effectiveTitle = dynamicData?.title || title;
    const effectiveTagline = dynamicData?.tagline || (dynamicData?.content ? undefined : tagline); // If there's content but no tagline, content will be used below
    const effectiveBadge = dynamicData?.badgeText || badgeText;

    const HeaderContent = ({ showSidebar = false }: { showSidebar?: boolean }) => (
        <div className={cn(
            "w-full py-12 md:py-20 px-4 md:px-8 shadow-sm border-b relative overflow-hidden",
            effectiveHeroImage ? "text-white" : "bg-white text-black"
        )}>
            {effectiveHeroImage && (
                <>
                    <div className="absolute inset-0 w-full h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={effectiveHeroImage}
                            alt={heroImageAlt || effectiveTitle}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/60 z-10" />
                </>
            )}

            <div className={cn("container mx-auto relative", effectiveHeroImage && "z-20")}>
                <div className="grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-2">
                        <Badge className={cn(
                            "mb-4 border-none",
                            effectiveHeroImage ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-yellow-500 text-black hover:bg-yellow-400"
                        )}>
                            {effectiveBadge}
                        </Badge>
                        <h1 className={cn(
                            "text-4xl md:text-5xl font-bold font-headline tracking-tight",
                            effectiveHeroImage ? "text-white drop-shadow-md" : "text-black"
                        )}>
                            {effectiveTitle}
                        </h1>
                        <div className={cn(
                            "mt-4 text-lg md:text-xl leading-relaxed",
                            effectiveHeroImage ? "text-white/90 drop-shadow-sm" : "text-black"
                        )}>
                            {pageId ? (
                                <DynamicSection
                                    pageId={pageId}
                                    defaultContent={<p>{effectiveTagline}</p>}
                                    render={(data) => (
                                        <p>{data.tagline || (data.content ? <div dangerouslySetInnerHTML={{ __html: data.content }} /> : effectiveTagline)}</p>
                                    )}
                                />
                            ) : effectiveTagline && (
                                <p>{effectiveTagline}</p>
                            )}
                        </div>
                    </div>
                    {showSidebar && sidebarContent && (
                        <div className="md:col-span-1 mt-8 md:mt-0">
                            {sidebarContent}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    // If sections are provided, we use the Tabbed Layout
    if (sections && sections.length > 0) {
        return (
            <div className="min-h-screen bg-background text-foreground font-sans">
                {/* 1. Full-width Header Band */}
                <HeaderContent showSidebar={true} />

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
                                <div className="animate-in fade-in duration-500">
                                    {section.id === 'faculty' && dynamicData?.faculty && dynamicData.faculty.length > 0 ? (
                                        <div className="space-y-6">
                                            <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">OUR FACULTY</h2>
                                            {dynamicData.imageUrl && (
                                                <div className="mb-6 relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-md">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={dynamicData.imageUrl}
                                                        alt="Department Faculty"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                {dynamicData.faculty.map((faculty: any, i: number) => (
                                                    <Card key={i} className="text-center bg-white border-2 border-primary text-black hover:bg-primary/5 transition-colors">
                                                        <CardHeader>
                                                            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                                                                <Users className="h-8 w-8 text-primary" />
                                                            </div>
                                                            <CardTitle className="text-lg text-black">{faculty.name}</CardTitle>
                                                            <CardDescription className="text-primary font-medium">{faculty.role}</CardDescription>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <p className="text-xs text-black mb-2 font-semibold">{faculty.qual}</p>
                                                            <div className="flex flex-col items-center gap-1 text-xs text-black">
                                                                {faculty.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {faculty.email}</span>}
                                                                {faculty.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {faculty.phone}</span>}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    ) : pageId ? (
                                        <DynamicSection
                                            pageId={`${pageId}-tab-${section.id}`}
                                            defaultTitle={section.label}
                                            defaultContent={section.content}
                                            onlyContent
                                        />
                                    ) : (
                                        section.content
                                    )}
                                </div>
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
            <HeaderContent />

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

                {children && (
                    <div className="pt-8 space-y-16 border-t">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
