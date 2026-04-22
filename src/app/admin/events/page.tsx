'use client';

// Events management page
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, FileText } from 'lucide-react';
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
                    {events.map((event) => (
                        <Card key={event.id}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-xl">{event.title}</CardTitle>
                                        <CardDescription className="mt-2">
                                            {event.excerpt}
                                        </CardDescription>
                                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                                            <span>By {event.authorName}</span>
                                            <span>•</span>
                                            <span>{new Date(event.createdAt).toLocaleDateString()}</span>
                                            <span>•</span>
                                            <span className={event.published ? 'text-green-600' : 'text-yellow-600'}>
                                                {event.published ? 'Published' : 'Draft'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
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
                    ))}
                </div>
            )}
        </div>
    );
}
