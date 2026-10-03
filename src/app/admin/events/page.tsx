'use client';

// Events management page
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, FileText, Images } from 'lucide-react';
import Link from 'next/link';
import { hasPermission } from '@/lib/auth-utils';
import { Event } from '@/types/user';

export default function EventsPage() {
    const { user } = useAuth();
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data.events || []);
        } catch (error) {
            console.error('Failed to fetch events:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (eventId: string) => {
        if (!confirm('Are you sure you want to delete this event?')) return;

        try {
            const token = await auth?.currentUser?.getIdToken();
            const response = await fetch(`/api/events?id=${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setEvents(events.filter(p => p.id !== eventId));
            } else {
                alert('Failed to delete event');
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('Failed to delete event');
        }
    };

    if (!user) return null;

    const canDelete = hasPermission(user, 'canDeleteEvents');
    const canCreate = hasPermission(user, 'canCreateEvents');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Events</h1>
                    <p className="text-gray-500 mt-1">Manage blog events and articles</p>
                </div>
                {canCreate && (
                    <Link href="/admin/events/new">
                        <Button>
                            <Plus size={20} className="mr-2" />
                            New Event
                        </Button>
                    </Link>
                )}
            </div>

            {loading ? (
                <div className="text-center py-12">Loading events...</div>
            ) : events.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No events yet</h3>
                        <p className="text-gray-500 mb-4">Get started by creating your first event</p>
                        {canCreate && (
                            <Link href="/admin/events/new">
                                <Button>Create Event</Button>
                            </Link>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {events.map((event) => {
                        const coverImg = event.imageUrl || (Array.isArray(event.images) && event.images[0]) || '';
                        const imgCount = Array.isArray(event.images) && event.images.length > 0 ? event.images.length : (coverImg ? 1 : 0);
                        return (
                            <Card key={event.id}>
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4 flex-1">
                                            {coverImg ? (
                                                <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={coverImg} alt={event.title} className="w-full h-full object-cover" />
                                                    {imgCount > 1 && (
                                                        <span className="absolute bottom-1 right-1 bg-black/75 backdrop-blur text-white text-[9px] font-bold px-1 rounded flex items-center gap-0.5">
                                                            <Images size={9} className="text-[#FFD700]" /> {imgCount}
                                                        </span>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="w-20 h-20 rounded-lg border border-slate-200 shrink-0 bg-slate-50 flex items-center justify-center text-slate-300">
                                                    <FileText size={24} />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <CardTitle className="text-xl">{event.title}</CardTitle>
                                                <CardDescription className="mt-1 line-clamp-2">
                                                    {event.excerpt}
                                                </CardDescription>
                                                <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-500">
                                                    <span className="text-[10px] uppercase tracking-wider font-bold bg-[#800000] text-[#FFD700] px-2.5 py-0.5 rounded shadow-sm">
                                                        {event.primaryTag || 'Events'}
                                                    </span>
                                                    {imgCount > 0 && (
                                                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                                                            <Images size={11} /> {imgCount} {imgCount === 1 ? 'image' : 'images'}
                                                        </span>
                                                    )}
                                                    <span>•</span>
                                                    <span>By {event.authorName}</span>
                                                    <span>•</span>
                                                    <span>{new Date(event.eventDate || event.createdAt).toLocaleDateString()}</span>
                                                    <span>•</span>
                                                    <span className={event.published ? 'text-green-600 font-medium' : 'text-yellow-600 font-medium'}>
                                                        {event.published ? 'Published' : 'Draft'}
                                                    </span>
                                                    {(event.secondaryTags || event.tags || (event.department ? [event.department] : ['general']))
                                                        .filter((t: string) => t && t !== 'general')
                                                        .map((t: string) => (
                                                            <span key={t} className="text-[10px] uppercase tracking-wider font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                                                                {t === 'computer-applications' ? 'BCA' : t === 'management' ? 'BBA' : t.replace('-', ' ')}
                                                            </span>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 self-end sm:self-center">
                                        <Link href={`/admin/events/${event.id}`}>
                                            <Button variant="outline" size="sm">
                                                <Edit size={16} className="mr-2" />
                                                Edit
                                            </Button>
                                        </Link>
                                        {canDelete && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleDelete(event.id)}
                                                className="text-red-600 hover:text-red-700 hover:border-red-300"
                                            >
                                                <Trash2 size={16} className="mr-2" />
                                                Delete
                                            </Button>
                                        )}
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
