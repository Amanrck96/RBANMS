'use client';

import { DynamicSection } from '@/components/dynamic-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Calendar, Bell, FileText, Star, Clock, BookOpen, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase-client';
import { doc, onSnapshot } from 'firebase/firestore';

export function SidebarCards() {
    const [globalNotices, setGlobalNotices] = useState<string[] | null>(null);
    const [globalActivities, setGlobalActivities] = useState<any[] | null>(null);

    useEffect(() => {
        if (!db) return;

        // Listener for global notices
        const noticesUnsubscribe = onSnapshot(doc(db, 'site-content', 'notices'), (snapshot) => {
            if (snapshot.exists()) {
                setGlobalNotices(snapshot.data().items || []);
            }
        });

        // Listener for global activities
        const activitiesUnsubscribe = onSnapshot(doc(db, 'site-content', 'activities'), (snapshot) => {
            if (snapshot.exists()) {
                setGlobalActivities(snapshot.data().items || []);
            }
        });

        return () => {
            noticesUnsubscribe();
            activitiesUnsubscribe();
        };
    }, []);

    return (
        <DynamicSection
            pageId="8"
            render={(data: any) => {
                // Ensure data structure exists with defaults if DB is empty
                const majorEvents = data?.major_events || {
                    image: '/images/hero/hero-1.jpg',
                    items: ['Annual Sports Day', 'Cultural Fest 2026', 'Inter-college Debate']
                };

                // PREFER GLOBAL ACTIVITIES IF AVAILABLE
                const monthThatWas = globalActivities || data?.month_that_was_items || [
                    { date: 'Nov 6', title: 'Field Visit & Guest Lecture', text: 'Final year BBA/BCA visit to Tech Institute. BCom lecture on Financial Mgmt.' },
                    { date: 'Nov 7', title: 'MILANA', text: 'Inter high school / PU cultural competition' },
                    { date: 'Nov 8-9', title: 'Holiday', text: 'College Holiday' },
                    { date: 'Nov 12', title: 'Guest Lecture', text: 'Digital Marketing' },
                    { date: 'Nov 13', title: 'SPICMACAY', text: 'Cultural presentation' },
                    { date: 'Nov 14-22', title: 'Pre-Final Examinations', text: 'Conducted for all classes' },
                ];

                // PREFER GLOBAL NOTICES IF AVAILABLE, format as HTML ul if it's an array
                let announcements = data?.announcements_text;
                if (globalNotices && globalNotices.length > 0) {
                    announcements = `<ul class="list-disc pl-4 space-y-2">
                        ${globalNotices.map(notice => `<li>${notice}</li>`).join('')}
                    </ul>`;
                } else if (!announcements) {
                    announcements = `
                    <ul class="list-disc pl-4 space-y-2">
                        <li>Admissions open for AY 2026-27. For a Campus Tour, email info@rbanmsfgc.edu.in.</li>
                        <li>College will remain closed on 12th and 13th January.</li>
                        <li>The Even Semester for AY 2025-26 will begin on January 19.</li>
                        <li>Regular classes for all courses will commence on January 27.</li>
                    </ul>`;
                }

                const upcomingEvents = data?.upcoming_events_text || [
                    'Internal Assessment - Jan 20',
                    'Republic Day Celebration - Jan 26',
                    'Industrial Visit - Feb 05'
                ];

                return (
                    <div className="w-full">
                        ...
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
                                        <a
                                            href="https://drive.google.com/file/d/1CzrsV32FaXRc79ZHvfneH4dZbinqriDH/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative w-40 aspect-[3/4.2] rounded-lg overflow-hidden shadow-lg border-2 border-white transform hover:scale-105 hover:rotate-1 transition-transform cursor-pointer group"
                                        >
                                            <Image
                                                src="/images/college-brochure.png"
                                                alt="College Brochure"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="bg-white text-blue-900 px-4 py-1.5 rounded-full font-bold text-[10px]">View Brochure</span>
                                            </div>
                                        </a>
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
                                {/* YouTube Card */}
                                <Card className="flex flex-col border-red-100 shadow-sm hover:shadow-md transition-shadow bg-red-50/10">
                                    <CardHeader className="bg-red-50/50 pb-3 p-4">
                                        <CardTitle className="text-red-700 flex items-center gap-2 text-base font-bold">
                                            <Youtube className="size-4 text-red-600" /> Official YouTube
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-4 flex-grow flex flex-col items-center justify-center">
                                        <a
                                            href="https://youtube.com/@rbanmsfgcblr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-col items-center gap-2"
                                        >
                                            <div className="size-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                                                <Youtube className="size-6" />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[11px] font-bold text-red-900 group-hover:underline">@rbanmsfgcblr</p>
                                                <p className="text-[10px] text-red-700/70">Subscribe for Latest Updates</p>
                                            </div>
                                        </a>
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
