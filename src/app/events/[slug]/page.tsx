'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/types/user';

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [event, setEvent] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEventDetail = async () => {
            if (!resolvedParams.slug) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/events?slug=${resolvedParams.slug}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.event && data.event.published) {
                        setEvent({
                            id: data.event.id,
                            ...data.event
                        } as Post);
                    } else {
                        setEvent(null);
                    }
                } else {
                    setEvent(null);
                }
            } catch (error) {
                console.error('Error fetching event detail:', error);
                setEvent(null);
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetail();
    }, [resolvedParams.slug]);

    if (loading) {
        return (
            <div className="flex flex-col bg-gray-50 min-h-[60vh]">
                <div className="flex-grow flex items-center justify-center py-20">
                    <div className="text-lg text-gray-600">Loading Event...</div>
                </div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="flex flex-col bg-gray-50 min-h-[60vh]">
                <div className="flex-grow flex items-center justify-center py-20">
                    <Card className="max-w-md w-full mx-4">
                        <CardContent className="py-12 text-center">
                            <div className="text-6xl mb-4">😕</div>
                            <h2 className="text-2xl font-semibold mb-2">Event not found</h2>
                            <p className="text-gray-500 mb-6">The event you're looking for doesn't exist or is not published yet.</p>
                            <Link href="/events">
                                <Button>
                                    <ArrowLeft size={16} className="mr-2" />
                                    Back to Events
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-gray-50 pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <Link href="/events">
                        <Button variant="ghost" className="text-white hover:bg-blue-700 mb-4">
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Events
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 -mt-4">
                <article className="max-w-4xl mx-auto">
                    <Card className="overflow-hidden border-2 border-primary/10 shadow-lg">
                        {event.imageUrl && (
                            <div className="aspect-video w-full overflow-hidden bg-gray-200">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <CardHeader className="space-y-4 pt-10 px-8">
                            <CardTitle className="text-4xl text-primary font-headline">{event.title}</CardTitle>

                            <div className="flex flex-wrap items-center gap-6 text-gray-600 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <User size={18} className="text-primary/60" />
                                    <span className="font-medium">{event.authorName}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-primary/60" />
                                    <span className="font-medium">{new Date(event.eventDate || event.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                                {event.department && event.department !== 'general' && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs uppercase tracking-wider font-bold bg-[#800000]/10 text-[#800000] px-3 py-1 rounded-full">
                                            {event.department === 'computer-applications' ? 'Computer Applications (BCA)' : event.department === 'management' ? 'Management (BBA)' : event.department.replace('-', ' ')}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </CardHeader>

                        <CardContent className="px-8 pb-10">
                            {event.excerpt && (
                                <p className="text-xl text-gray-600 italic mb-8 pb-8 border-b border-gray-100">
                                    {event.excerpt}
                                </p>
                            )}

                            <div 
                                className="text-gray-800 leading-relaxed prose prose-lg prose-blue max-w-none prose-headings:text-primary prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-xl prose-img:shadow-md"
                                dangerouslySetInnerHTML={{ __html: event.content }} 
                            />
                        </CardContent>
                    </Card>
                </article>
            </main>
        </div>
    );
}
