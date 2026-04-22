'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { db } from '@/lib/firebase-client';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Post } from '@/types/user';

export default function EventsPage() {
    const [events, setEvents] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!db) {
            setLoading(false);
            return;
        }

        const eventsQuery = query(
            collection(db, 'events'),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(
            eventsQuery,
            (snapshot) => {
                const eventsList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Post[];
                // Filter manually to avoid Firestore composite index requirement
                setEvents(eventsList.filter(p => p.published === true));
                setLoading(false);
            },
            (error) => {
                console.error('Real-time events listener error:', error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <DynamicSection
                pageId="events"
                defaultTitle="Events & Announcements"
            />
            
            <div className="mt-12 space-y-12">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="text-lg text-gray-600">Loading events...</div>
                    </div>
                ) : events.length === 0 ? (
                    <Card className="max-w-2xl mx-auto border-dashed">
                        <CardContent className="py-12 text-center">
                            <div className="text-6xl mb-4">📅</div>
                            <h2 className="text-2xl font-semibold mb-2">No upcoming events</h2>
                            <p className="text-gray-500">Check back soon for new events and announcements!</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group">
                                <div className="aspect-video w-full overflow-hidden bg-gray-200 shrink-0 relative">
                                    {event.imageUrl ? (
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/40">
                                            <Calendar size={48} />
                                        </div>
                                    )}
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-primary text-xs font-bold px-2 py-1 rounded shadow-sm">
                                        EVENT
                                    </div>
                                </div>
                                <CardHeader className="shrink-0 pb-4">
                                    <CardTitle className="text-xl hover:text-primary transition-colors line-clamp-2">
                                        <Link href={`/events/${event.slug}`}>
                                            {event.title}
                                        </Link>
                                    </CardTitle>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mt-2">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{new Date(event.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1 pt-0">
                                    <CardDescription className="text-sm mb-4 line-clamp-3">
                                        {event.excerpt || event.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...'}
                                    </CardDescription>
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <Link
                                            href={`/events/${event.slug}`}
                                            className="text-primary hover:text-blue-800 font-bold inline-flex items-center text-sm group-hover:text-blue-800 transition-colors"
                                        >
                                            View Details <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
