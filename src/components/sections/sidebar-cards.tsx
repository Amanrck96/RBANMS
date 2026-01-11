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
                    { date: 'Nov 14-22', title: 'Pre-Final Exams', text: 'Conducted for all classes' },
                    { date: 'Nov 19', title: 'NAADAHABBA', text: 'Folk dances of Karnataka at Sabha. Open to all.' },
                    { date: 'Nov 25', title: 'Guest Lecture', text: 'Final Year BCA: AI tools - a practical approach' },
                    { date: 'Nov 27', title: 'SPICMACAY', text: 'Presentation of Sattriya Dance' },
                    { date: 'Nov 29', title: 'Bharatiyar Event', text: 'Dept. of Languages - Tamil' }
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
                        <div className="grid grid-cols-1 min-[901px]:grid-cols-3 gap-6">
                            {/* Major Events Card */}
                            <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-blue-50/50 pb-4">
                                    <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                                        <Star className="size-5 text-yellow-500 fill-yellow-500" /> Major Events
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 flex-grow space-y-4">
                                    {majorEvents.image && (
                                        <div className="relative aspect-video rounded-lg overflow-hidden border shadow-sm">
                                            <Image
                                                src={majorEvents.image}
                                                alt={data.major_events_alt || "Major Events"}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <ul className="space-y-3">
                                        {majorEvents.items?.map((item: string, i: number) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-700 leading-snug">
                                                <div className="mt-1.5 size-1.5 rounded-full bg-blue-600 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* The Month That Was Card */}
                            <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-blue-50/50 pb-4">
                                    <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                                        <Calendar className="size-5 text-primary" /> The Month That Was
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 flex-grow">
                                    <div className="space-y-4">
                                        {monthThatWas.map((item: any, i: number) => (
                                            <div key={i} className="group border-l-4 border-blue-200 hover:border-blue-600 pl-4 py-1 transition-colors">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Clock className="size-3 text-muted-foreground" />
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{item.date}</span>
                                                </div>
                                                <p className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors uppercase">{item.title}</p>
                                                <p className="text-xs text-slate-600 mt-1 line-clamp-2">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Announcements Card */}
                            <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-blue-50/50 pb-4">
                                    <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                                        <Bell className="size-5 text-red-500 animate-pulse" /> Announcements
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 flex-grow">
                                    <div
                                        className="prose prose-sm prose-blue max-w-none text-slate-700 font-medium bg-red-50/30 p-4 rounded-lg border border-red-100/50"
                                        dangerouslySetInnerHTML={{ __html: announcements }}
                                    />
                                </CardContent>
                            </Card>

                            {/* Brochure Card */}
                            <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-blue-50/50 pb-4">
                                    <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                                        <FileText className="size-5 text-secondary" /> College Brochure
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 flex-grow flex flex-col items-center justify-center">
                                    {brochure && (
                                        <div className="relative w-full aspect-[3/4.2] rounded-xl overflow-hidden shadow-xl border-4 border-white transform hover:rotate-2 transition-transform cursor-pointer group">
                                            <Image
                                                src={brochure}
                                                alt={data.brochure_alt || "Download Brochure"}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold text-sm">Download PDF</span>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Upcoming Events Card */}
                            <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-blue-50/50 pb-4">
                                    <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                                        <Clock className="size-5 text-primary" /> Upcoming Events
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 flex-grow">
                                    <div className="space-y-3">
                                        {upcomingEvents.map((item: string, i: number) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-white hover:shadow-sm transition-all">
                                                <div className="size-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                                                    {(i + 1).toString().padStart(2, '0')}
                                                </div>
                                                <span className="text-sm font-semibold text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Blog Card */}
                            <Card className="flex flex-col border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-blue-50/50 pb-4">
                                    <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                                        <BookOpen className="size-5 text-blue-600" /> Blog
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 flex-grow">
                                    <div
                                        className="prose prose-sm prose-blue max-w-none text-slate-700 font-medium bg-blue-50/30 p-4 rounded-lg border border-blue-100/50"
                                        dangerouslySetInnerHTML={{ __html: blog }}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                );
            }}
        />
    );
}
