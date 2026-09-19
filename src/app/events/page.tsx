'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Post } from '@/types/user';

const DEPARTMENTS = [
    { id: 'all', label: 'All Departments' },
    { id: 'general', label: 'General' },
    { id: 'arts', label: 'Arts' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'computer-applications', label: 'BCA' },
    { id: 'english', label: 'English' },
    { id: 'languages', label: 'Languages' },
    { id: 'hindi', label: 'Hindi' },
    { id: 'kannada', label: 'Kannada' },
    { id: 'anrc', label: 'ANRC (Research)' },
    { id: 'management', label: 'BBA' },
    { id: 'physical-education', label: 'Physical Education' },
    { id: 'nss', label: 'NSS' },
    { id: 'ncc', label: 'NCC' },
    { id: 'ncc-army', label: 'NCC Army' },
    { id: 'ncc-navy', label: 'NCC Navy' },
    { id: 'iqac', label: 'IQAC' },
    { id: 'womens-cell', label: 'Women\'s Cell' },
    { id: 'equal-opportunity', label: 'Equal Opportunity Cell' },
    { id: 'grievance-redressal', label: 'Grievance Redressal Cell' },
    { id: 'anti-ragging', label: 'Anti-Ragging' },
    { id: 'posh', label: 'POSH Cell' },
    { id: 'sc-st-cell', label: 'SC/ST Cell' },
    { id: 'internal-compliance', label: 'Internal Compliance' },
    { id: 'manasa-counselling', label: 'Manasa Counselling' },
    { id: 'cultural-committee', label: 'Cultural Committee' },
    { id: 'eco-club', label: 'Eco Club' },
    { id: 'aicte', label: 'AICTE' },
    { id: 'discipline', label: 'Discipline' },
    { id: 'examination', label: 'Examination' },
    { id: 'ipc', label: 'IPC (Placement)' },
    { id: 'yrc-scouts', label: 'YRC & Scouts' },
    { id: 'statutory', label: 'Statutory Cell' },
    { id: 'bca-forum', label: 'BCA Forum' },
    { id: 'commerce-forum', label: 'Commerce Forum' },
    { id: 'management-forum', label: 'Management Forum' },
    { id: 'literary-forum', label: 'Literary Forum' },
    { id: 'languages-forum', label: 'Languages Forum' },
    { id: 'other', label: 'Other' }
];

const PRIMARY_TAGS = [
    { id: 'all', label: 'All Categories' },
    { id: 'Academics', label: 'Academics' },
    { id: 'Co-curricular', label: 'Co-Curricular' },
    { id: 'Events', label: 'Events' }
] as const;

import { events as staticEvents } from '@/lib/events-data';

function inferPrimaryTag(event: any): 'Academics' | 'Co-curricular' | 'Events' {
    if (event.primaryTag === 'Academics' || event.primaryTag === 'Co-curricular' || event.primaryTag === 'Events') {
        return event.primaryTag;
    }
    const all = [
        ...(Array.isArray(event.secondaryTags) ? event.secondaryTags : []),
        ...(Array.isArray(event.tags) ? event.tags : []),
        event.department || ''
    ].map((t: string) => String(t).toLowerCase());

    if (all.some((t: string) => ['academics', 'commerce', 'computer-applications', 'bca', 'management', 'bba', 'arts', 'english', 'languages', 'hindi', 'kannada', 'anrc', 'commerce-forum', 'bca-forum', 'management-forum', 'literary-forum', 'languages-forum'].includes(t))) {
        return 'Academics';
    }
    if (all.some((t: string) => ['co-curricular', 'nss', 'ncc', 'ncc-army', 'ncc-navy', 'physical-education', 'cultural-committee', 'eco-club', 'yrc-scouts', 'manasa-counselling', 'womens-cell'].includes(t))) {
        return 'Co-curricular';
    }
    return 'Events';
}

const fallbackEvents: any[] = staticEvents.map((ev, idx) => {
    const rawTag = ev.tag?.toLowerCase() || '';
    const isDept = rawTag.includes('commerce') ? 'commerce' : rawTag.includes('language') ? 'languages' : 'general';
    const pTag = rawTag.includes('commerce') || rawTag.includes('academic') ? 'Academics' :
                 rawTag.includes('ncc') || rawTag.includes('nss') || rawTag.includes('club') ? 'Co-curricular' : 'Events';
    return {
        id: `static-event-${idx}-${ev.slug}`,
        slug: ev.slug,
        title: ev.title,
        excerpt: ev.description,
        department: isDept,
        primaryTag: pTag,
        secondaryTags: [isDept],
        tags: [isDept],
        createdAt: `${ev.date.year}-06-01T10:00:00.000Z`,
        imageUrl: ev.images && ev.images.length > 0 ? ev.images[0] : undefined,
        published: true,
    };
});

export default function EventsPage() {
    const [events, setEvents] = useState<any[]>(fallbackEvents);
    const [loading, setLoading] = useState(false);
    const [activePrimaryTag, setActivePrimaryTag] = useState<string>('all');
    const [activeDepartment, setActiveDepartment] = useState<string>('all');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events?published=true');
                if (response.ok) {
                    const data = await response.json();
                    if (data.events && data.events.length > 0) {
                        setEvents([...data.events, ...fallbackEvents]);
                    } else {
                        setEvents(fallbackEvents);
                    }
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents(fallbackEvents);
            }
        };
        fetchEvents();
    }, []);

    const filteredEvents = useMemo(() => {
        return events.filter(e => {
            // Primary tag filter
            if (activePrimaryTag !== 'all') {
                const pTag = e.primaryTag || inferPrimaryTag(e);
                if (pTag !== activePrimaryTag) return false;
            }

            // Secondary department filter
            if (activeDepartment !== 'all') {
                const tags = Array.isArray(e.secondaryTags) && e.secondaryTags.length > 0
                    ? e.secondaryTags
                    : (Array.isArray(e.tags) ? e.tags : (e.department ? [e.department] : ['general']));
                if (!tags.includes(activeDepartment) && e.department !== activeDepartment) {
                    return false;
                }
            }

            return true;
        });
    }, [events, activePrimaryTag, activeDepartment]);

    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-l-8 border-blue-900 pl-6">Events &amp; Announcements</h1>
                <p className="text-gray-600 max-w-3xl font-body">Stay updated with the latest events, announcements, and activities at RBANMS First Grade College.</p>
            </div>

            {/* Level 1: Primary Tag Category Tabs */}
            <div className="mb-4">
                <div className="flex flex-wrap gap-2 justify-start md:justify-center">
                    {PRIMARY_TAGS.map((tag) => {
                        const isActive = activePrimaryTag === tag.id;
                        return (
                            <button
                                key={tag.id}
                                onClick={() => setActivePrimaryTag(tag.id)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border shrink-0
                                    ${isActive 
                                        ? 'bg-[#800000] text-[#FFD700] border-[#800000] shadow-md transform -translate-y-0.5' 
                                        : 'bg-white text-slate-700 hover:text-[#800000] hover:bg-slate-50 border-slate-200 hover:border-[#800000]/30'
                                    }`}
                            >
                                {tag.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Level 2: Secondary Department / Forum Filters */}
            <div className="w-full overflow-x-auto pb-4 mb-8 scrollbar-none flex gap-1.5 justify-start md:justify-center border-b border-slate-100">
                {DEPARTMENTS.map((dept) => {
                    const isActive = activeDepartment === dept.id;
                    return (
                        <button
                            key={dept.id}
                            onClick={() => setActiveDepartment(dept.id)}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all whitespace-nowrap border shrink-0
                                ${isActive 
                                    ? 'bg-blue-900 text-white border-blue-900 shadow-sm' 
                                    : 'bg-slate-50 text-slate-600 hover:text-blue-900 hover:bg-slate-100 border-slate-200'
                                }`}
                        >
                            {dept.label}
                        </button>
                    );
                })}
            </div>
            
            <div className="mt-8 space-y-12">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="text-lg text-gray-600 font-medium">Loading events...</div>
                    </div>
                ) : events.length === 0 ? (
                    <Card className="max-w-2xl mx-auto border-dashed">
                        <CardContent className="py-12 text-center">
                            <div className="text-6xl mb-4">📅</div>
                            <h2 className="text-2xl font-semibold mb-2 text-blue-900">No upcoming events</h2>
                            <p className="text-gray-500">Check back soon for new events and announcements!</p>
                        </CardContent>
                    </Card>
                ) : filteredEvents.length === 0 ? (
                    <Card className="max-w-2xl mx-auto border-dashed border-2 border-slate-300">
                        <CardContent className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                            <div className="text-6xl mb-2">📅</div>
                            <h2 className="text-2xl font-semibold text-blue-900">No events found</h2>
                            <p className="text-gray-500 max-w-md">There are no events matching the selected category and department filter.</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setActivePrimaryTag('all'); setActiveDepartment('all'); }}
                                    className="px-4 py-2.5 bg-[#800000] hover:bg-[#660000] text-[#FFD700] rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                                >
                                    Reset All Filters
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((event) => {
                            const primaryTag = event.primaryTag || inferPrimaryTag(event);
                            return (
                                <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group border-slate-200">
                                    <div className="aspect-video w-full overflow-hidden bg-gray-200 shrink-0 relative">
                                        {event.imageUrl ? (
                                            <img
                                                src={event.imageUrl}
                                                alt={event.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300 group-hover:scale-105 transition-transform duration-500">
                                                <Calendar size={48} className="text-slate-300" />
                                            </div>
                                        )}

                                        {/* Primary Tag Badge */}
                                        <div className="absolute top-2 left-2 pointer-events-none z-10">
                                            <span className="bg-[#800000] text-[#FFD700] text-[10px] font-bold px-2 py-0.5 rounded shadow border border-[#800000]/20 uppercase tracking-wider select-none">
                                                {primaryTag}
                                            </span>
                                        </div>

                                        {/* Secondary Tags Badges */}
                                        <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end max-w-[65%] pointer-events-none z-10">
                                            {(() => {
                                                const secondary = (Array.isArray(event.secondaryTags) && event.secondaryTags.length > 0)
                                                    ? event.secondaryTags
                                                    : (event.tags || (event.department ? [event.department] : ['general']));
                                                const nonGeneralTags = secondary.filter((t: string) => t !== 'general');
                                                if (nonGeneralTags.length === 0) {
                                                    return (
                                                        <span className="bg-white/95 backdrop-blur text-slate-700 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-slate-200 uppercase tracking-wider select-none">
                                                            General
                                                        </span>
                                                    );
                                                }
                                                return nonGeneralTags.map((t: string) => {
                                                    const tagObj = DEPARTMENTS.find(d => d.id === t);
                                                    return (
                                                        <span key={t} className="bg-white/95 backdrop-blur text-slate-700 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-slate-200 uppercase tracking-wider select-none">
                                                            {tagObj ? tagObj.label : t}
                                                        </span>
                                                    );
                                                });
                                            })()}
                                        </div>
                                    </div>
                                    <CardHeader className="shrink-0 pb-4">
                                        <CardTitle className="text-xl text-blue-900 font-bold hover:text-[#800000] transition-colors line-clamp-2 leading-snug">
                                            <Link href={`/events/${event.slug}`}>
                                                {event.title}
                                            </Link>
                                        </CardTitle>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mt-2 font-body">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-[#800000]" />
                                                <span>{new Date(event.eventDate || event.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-1 pt-0 font-body">
                                        <CardDescription className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                                            {event.excerpt || (event.content ? event.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' : '')}
                                        </CardDescription>
                                        <div className="mt-auto pt-4 border-t border-slate-100">
                                            <Link
                                                href={`/events/${event.slug}`}
                                                className="text-[#800000] hover:text-[#660000] font-bold inline-flex items-center text-sm group-hover:translate-x-0.5 transition-all"
                                            >
                                                View Details <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
