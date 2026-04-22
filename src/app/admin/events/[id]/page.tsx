'use client';

// Create/Edit event form
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Save, ArrowLeft, ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { VisualEditor } from '@/components/admin/visual-editor';
import { ImageUpload } from '@/components/admin/image-upload';

export default function EventEditorPage() {
    const router = useRouter();
    const params = useParams();
    const { user } = useAuth();
    const isEditing = params?.id && params.id !== 'new';

    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [published, setPublished] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(isEditing);

    useEffect(() => {
        if (isEditing) {
            fetchEvent();
        }
    }, [isEditing]);

    const fetchEvent = async () => {
        try {
            const response = await fetch(`/api/events?id=${params.id}`);
            const data = await response.json();
            if (data.event) {
                setTitle(data.event.title);
                setExcerpt(data.event.excerpt);
                setContent(data.event.content);
                setImageUrl(data.event.imageUrl || '');
                setPublished(data.event.published);
            }
        } catch (error) {
            console.error('Failed to fetch event:', error);
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = await auth?.currentUser?.getIdToken();
            const url = '/api/events';
            const method = isEditing ? 'PUT' : 'POST';
            const body = isEditing
                ? { eventId: params.id, title, excerpt, content, imageUrl, published }
                : { title, excerpt, content, imageUrl, published };

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                router.push('/admin/events');
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to save event');
            }
        } catch (error) {
            console.error('Save error:', error);
            alert('Failed to save event');
        } finally {
            setLoading(false);
        }
    };

    if (!user || fetching) {
        return (
            <div className="text-center py-12">
                {fetching ? 'Loading event...' : 'Loading...'}
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/events">
                    <Button variant="outline" size="sm">
                        <ArrowLeft size={16} className="mr-2" />
                        Back
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">
                    {isEditing ? 'Edit Event' : 'Create New Event'}
                </h1>
            </div>

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Event Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title *</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter event title"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Excerpt *</Label>
                            <Textarea
                                id="excerpt"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                placeholder="Brief summary of the event"
                                rows={3}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-4">
                            <ImageUpload
                                label="Featured Image"
                                value={imageUrl}
                                onChange={setImageUrl}
                                folder="events"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content *</Label>
                            <VisualEditor
                                value={content}
                                onChange={setContent}
                                placeholder="Write your event content here..."
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Switch
                                id="published"
                                checked={published}
                                onCheckedChange={setPublished}
                                disabled={loading}
                            />
                            <Label htmlFor="published" className="cursor-pointer">
                                Publish immediately
                            </Label>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button type="submit" disabled={loading}>
                                <Save size={16} className="mr-2" />
                                {loading ? 'Saving...' : isEditing ? 'Update Event' : 'Create Event'}
                            </Button>
                            <Link href="/admin/events">
                                <Button type="button" variant="outline" disabled={loading}>
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
