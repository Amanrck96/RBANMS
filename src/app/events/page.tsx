'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { Post } from '@/types/user';

const DEPARTMENTS = [
    { id: 'all', label: 'All Events' },
    { id: 'general', label: 'General' },
    { id: 'arts', label: 'Arts' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'computer-applications', label: 'BCA' },
    { id: 'english', label: 'English' },
    { id: 'languages', label: 'Languages' },
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

export default function EventsPage() {
    const [events, setEvents] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeDepartment, setActiveDepartment] = useState('all');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events?published=true');
                if (response.ok) {
                    const data = await response.json();
                    if (data.events) {
                        setEvents(data.events);
                    }
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const filteredEvents = useMemo(() => {
        if (activeDepartment === 'all') return events;
        return events.filter(e => {
            if (e.tags && Array.isArray(e.tags)) {
                return e.tags.includes(activeDepartment);
            }
            return e.department === activeDepartment;
        });
    }, [events, activeDepartment]);

    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-900 mb-4 uppercase tracking-wide border-l-8 border-blue-900 pl-6">Events & Announcements</h1>
                <p className="text-gray-600 max-w-3xl font-body">Stay updated with the latest events, announcements, and activities at RBANMS First Grade College.</p>
            </div>

            {/* Department Filter Tabs */}
            <div className="w-full overflow-x-auto pb-4 mb-8 scrollbar-none flex gap-2 justify-start md:justify-center border-b border-slate-100">
                {DEPARTMENTS.map((dept) => {
                    const isActive = activeDepartment === dept.id;
                    return (
                        <button
                            key={dept.id}
                            onClick={() => setActiveDepartment(dept.id)}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border shrink-0
                                ${isActive 
                                    ? 'bg-[#800000] text-[#FFD700] border-[#800000] shadow-sm transform -translate-y-0.5' 
                                    : 'bg-white text-slate-600 hover:text-[#800000] hover:bg-slate-50 border-slate-200 hover:border-[#800000]/30'
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
                            <p className="text-gray-500 max-w-md">There are no events published under the "{DEPARTMENTS.find(d => d.id === activeDepartment)?.label}" department tag.</p>
                            <button
                                onClick={() => setActiveDepartment('all')}
                                className="px-4 py-2.5 bg-[#800000] hover:bg-[#660000] text-[#FFD700] rounded-lg font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                            >
                                Clear Filter
                            </button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map((event) => {
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
                                        <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end max-w-[90%] pointer-events-none">
                                            {(() => {
                                                const eventTags = event.tags || (event.department ? [event.department] : ['general']);
                                                const nonGeneralTags = eventTags.filter(t => t !== 'general');
                                                if (nonGeneralTags.length === 0) {
                                                    return (
                                                        <span className="bg-white/95 backdrop-blur text-[#800000] text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-[#800000]/10 uppercase tracking-wider select-none">
                                                            General
                                                        </span>
                                                    );
                                                }
                                                return nonGeneralTags.map(t => {
                                                    const tagObj = DEPARTMENTS.find(d => d.id === t);
                                                    if (!tagObj) return null;
                                                    return (
                                                        <span key={t} className="bg-white/95 backdrop-blur text-[#800000] text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-[#800000]/10 uppercase tracking-wider select-none">
                                                            {tagObj.label}
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
                                            {event.excerpt || event.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...'}
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
