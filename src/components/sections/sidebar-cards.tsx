'use client';

import { DynamicSection } from '@/components/dynamic-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Calendar, Bell, FileText, Star, Clock, BookOpen } from 'lucide-react';

export function SidebarCards() {
    return (
        <DynamicSection
            pageId="8"
            render={(data: any) => {
                // Ensure data structure exists with defaults if DB is empty
                const majorEvents = data?.major_events || {
                    image: '/images/hero/hero-1.jpg',
                    items: ['Annual Sports Day', 'Cultural Fest 2026', 'Inter-college Debate']
                };
                const monthThatWas = data?.month_that_was_items || [
                    { date: 'Nov 6', title: 'Field Visit & Guest Lecture', text: 'Final year BBA/BCA visit to Tech Institute. BCom lecture on Financial Mgmt.' },
                    { date: 'Nov 7', title: 'MILANA', text: 'Inter high school / PU cultural competition' },
                    { date: 'Nov 8-9', title: 'Holiday', text: 'College Holiday' },
                    { date: 'Nov 12', title: 'Guest Lecture', text: 'Digital Marketing' },
                    { date: 'Nov 13', title: 'SPICMACAY', text: 'Cultural presentation' },
                    { date: 'Nov 14-22', title: 'Pre-Final Examinations', text: 'Conducted for all classes' },
                ];
                const announcements = data?.announcements_text || `
                    <ul className="list-disc pl-4 space-y-2">
                        <li>Admissions open for AY 2026-27. For a Campus Tour, email info@rbanmsfgc.edu.in.</li>
                        <li>College will remain closed on 12th and 13th January.</li>
                        <li>The Even Semester for AY 2025-26 will begin on January 19.</li>
                        <li>Regular classes for all courses will commence on January 27.</li>
                    </ul>`;
                const brochure = data?.brochure_image || '/images/phoenix-magazine.png';
                const upcomingEvents = data?.upcoming_events_text || [
                    'Internal Assessment - Jan 20',
                    'Republic Day Celebration - Jan 26',
                    'Industrial Visit - Feb 05'
                ];
                const blog = data?.blog_text || '<p>Welcome to our blog section where we share insights, stories, and updates from our college community.</p><p>Blog content coming soon...</p>';

                return (
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
                            {/* Left Column: Major Events & Brochure */}
                            <div className="flex flex-col gap-5 h-full">
                                {/* Major Events Card */}
                                <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow flex-1">
                                    <CardHeader className="bg-blue-50/50 pb-3 p-4">
                                        <CardTitle className="text-blue-900 flex items-center gap-2 text-base font-bold">
                                            <Star className="size-4 text-yellow-500 fill-yellow-500" /> Major Events
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-4 flex-grow space-y-3">
                                        {majorEvents.image && (
                                            <div className="relative aspect-video w-full rounded-md overflow-hidden border shadow-sm">
                                                <Image
                                                    src={majorEvents.image}
                                                    alt={data.major_events_alt || "Major Events"}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <ul className="space-y-2">
                                            {majorEvents.items?.map((item: string, i: number) => (
                                                <li key={i} className="flex gap-2 text-sm text-slate-700 leading-tight">
                                                    <div className="mt-1.5 size-1.5 rounded-full bg-blue-600 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                {/* Brochure Card */}
                                <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow flex-1">
                                    <CardHeader className="bg-blue-50/50 pb-3 p-4">
                                        <CardTitle className="text-blue-900 flex items-center gap-2 text-base font-bold">
                                            <FileText className="size-4 text-secondary" /> College Brochure
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-4 flex-grow flex flex-col items-center justify-center">
                                        {brochure && (
                                            <div className="relative w-48 aspect-[3/4.2] rounded-lg overflow-hidden shadow-lg border-2 border-white transform hover:rotate-1 transition-transform cursor-pointer group">
                                                <Image
                                                    src={brochure}
                                                    alt={data.brochure_alt || "Download Brochure"}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <span className="bg-white text-blue-900 px-4 py-1.5 rounded-full font-bold text-xs">Download PDF</span>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Center Column: The Month That Was */}
                            <div className="flex flex-col h-full">
                                <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full">
                                    <CardHeader className="bg-blue-50/50 pb-3 p-4">
                                        <CardTitle className="text-blue-900 flex flex-col gap-0.5 text-base font-bold">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="size-4 text-primary" /> The Month That Was
                                            </div>
                                            <span className="text-xs font-normal text-muted-foreground ml-6">November 2025</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-4 flex-grow">
                                        <div className="space-y-3">
                                            {monthThatWas.slice(0, 6).map((item: any, i: number) => (
                                                <div key={i} className="group border-l-4 border-blue-200 hover:border-blue-600 pl-3 py-1 transition-colors">
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <Clock className="size-3 text-muted-foreground" />
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{item.date}</span>
                                                    </div>
                                                    <p className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors uppercase leading-tight">{item.title}</p>
                                                    <p className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Column: Sidebar Cards */}
                            <div className="flex flex-col gap-5 h-full">
                                {/* Announcements Card */}
                                <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow flex-1">
                                    <CardHeader className="bg-blue-50/50 pb-3 p-4">
                                        <CardTitle className="text-blue-900 flex items-center gap-2 text-base font-bold">
                                            <Bell className="size-4 text-red-500 animate-pulse" /> Announcements
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-4 flex-grow">
                                        <div
                                            className="prose prose-sm prose-blue max-w-none text-slate-700 font-medium bg-red-50/30 p-3 rounded border border-red-100/50"
                                            dangerouslySetInnerHTML={{ __html: announcements }}
                                        />
                                    </CardContent>
                                </Card>

                                {/* Upcoming Events Card */}
                                <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow flex-1">
                                    <CardHeader className="bg-blue-50/50 pb-3 p-4">
                                        <CardTitle className="text-blue-900 flex items-center gap-2 text-base font-bold">
                                            <Clock className="size-4 text-primary" /> Upcoming Events
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-4 flex-grow">
                                        <div className="space-y-2">
                                            {upcomingEvents.map((item: string, i: number) => (
                                                <div key={i} className="flex items-center gap-3 p-2.5 bg-slate-50 rounded border border-slate-100 hover:bg-white hover:shadow-sm transition-all">
                                                    <div className="size-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                                                        {(i + 1).toString().padStart(2, '0')}
                                                    </div>
                                                    <span className="text-sm font-semibold text-slate-700 leading-tight">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
}
