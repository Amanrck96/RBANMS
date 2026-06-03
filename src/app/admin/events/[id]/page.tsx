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
const EVENT_TAGS = [
    { id: 'general', label: 'General / All Departments' },
    { id: 'arts', label: 'Arts' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'computer-applications', label: 'Computer Applications (BCA)' },
    { id: 'english', label: 'English' },
    { id: 'languages', label: 'Languages' },
    { id: 'management', label: 'Management (BBA)' },
    { id: 'physical-education', label: 'Physical Education' },
    { id: 'nss', label: 'NSS (National Service Scheme)' },
    { id: 'ncc', label: 'NCC (National Cadet Corps)' },
    { id: 'ncc-army', label: 'NCC Army' },
    { id: 'ncc-navy', label: 'NCC Navy' },
    { id: 'iqac', label: 'IQAC' },
    { id: 'womens-cell', label: 'Women\'s Cell' },
    { id: 'equal-opportunity', label: 'Equal Opportunity Cell' },
    { id: 'grievance-redressal', label: 'Grievance Redressal Cell' },
    { id: 'anti-ragging', label: 'Anti-Ragging Cell' },
    { id: 'posh', label: 'POSH (Prevention of Sexual Harassment) Cell' },
    { id: 'sc-st-cell', label: 'SC/ST Cell' },
    { id: 'internal-compliance', label: 'Internal Compliance Committee' },
    { id: 'manasa-counselling', label: 'Manasa Counselling' },
    { id: 'cultural-committee', label: 'Cultural Committee' },
    { id: 'eco-club', label: 'Eco Club' },
    { id: 'aicte', label: 'AICTE Committee' },
    { id: 'discipline', label: 'Discipline Committee' },
    { id: 'examination', label: 'Examination Committee' },
    { id: 'ipc', label: 'Internal Placement Cell (IPC)' },
    { id: 'yrc-scouts', label: 'YRC & Scouts' },
    { id: 'statutory', label: 'Statutory Cell' },
    { id: 'bca-forum', label: 'BCA Forum (Techtantra)' },
    { id: 'commerce-forum', label: 'Commerce Forum' },
    { id: 'management-forum', label: 'Management Forum (BBA)' },
    { id: 'literary-forum', label: 'Literary Forum' },
    { id: 'languages-forum', label: 'Languages Forum' },
    { id: 'other', label: 'Other' }
];

export default function EventEditorPage() {
    const router = useRouter();
    const params = useParams();
    const { user } = useAuth();
    const isEditing = params?.id && params.id !== 'new';

    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);
    const [published, setPublished] = useState(false);
    const [department, setDepartment] = useState('general');
    const [tags, setTags] = useState<string[]>(['general']);
    const [searchQuery, setSearchQuery] = useState('');
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
                if (data.event.eventDate) {
                    setEventDate(new Date(data.event.eventDate).toISOString().split('T')[0]);
                }
                setPublished(data.event.published);
                setDepartment(data.event.department || 'general');
                setTags(data.event.tags || (data.event.department ? [data.event.department] : ['general']));
            }
        } catch (error) {
            console.error('Failed to fetch event:', error);
        } finally {
            setFetching(false);
        }
    };

    const handleToggleTag = (tagId: string) => {
        setTags(prev => {
            const isSelected = prev.includes(tagId);
            let nextTags;
            if (isSelected) {
                nextTags = prev.filter(t => t !== tagId);
            } else {
                nextTags = [...prev, tagId];
            }
            // Sync legacy department field with first active tag
            setDepartment(nextTags[0] || 'general');
            return nextTags;
        });
    };

    const handleRemoveTag = (tagId: string) => {
        setTags(prev => {
            const nextTags = prev.filter(t => t !== tagId);
            setDepartment(nextTags[0] || 'general');
            return nextTags;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = await auth?.currentUser?.getIdToken();
            const url = '/api/events';
            const method = isEditing ? 'PUT' : 'POST';
            
            const activeDepartment = tags[0] || 'general';
            const body = isEditing
                ? { eventId: params.id, title, excerpt, content, imageUrl, published, eventDate: new Date(eventDate).toISOString(), department: activeDepartment, tags }
                : { title, excerpt, content, imageUrl, published, eventDate: new Date(eventDate).toISOString(), department: activeDepartment, tags };

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

                        <div className="space-y-2">
                            <Label htmlFor="eventDate">Event Date *</Label>
                            <Input
                                id="eventDate"
                                type="date"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-3">
                            <Label className="text-base font-semibold text-slate-900">Event Tags (Select multiple) *</Label>
                            <div className="flex flex-wrap gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg min-h-[50px] items-center">
                                {tags.length === 0 ? (
                                    <span className="text-sm text-slate-400 italic">No tags selected. Select tags below.</span>
                                ) : (
                                    tags.map(tagId => {
                                        const t = EVENT_TAGS.find(x => x.id === tagId);
                                        return (
                                            <span key={tagId} className="inline-flex items-center gap-1 bg-[#800000] text-[#FFD700] text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                                                {t ? t.label : tagId}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveTag(tagId)}
                                                    className="hover:bg-[#660000] rounded-full p-0.5 ml-1 text-xs"
                                                    title="Remove tag"
                                                    disabled={loading}
                                                >
                                                    &times;
                                                </button>
                                            </span>
                                        );
                                    })
                                )}
                            </div>

                            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                                <div className="p-2 border-b bg-slate-50">
                                    <Input
                                        placeholder="Search tags..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="h-9 bg-white text-slate-900 border-slate-200 focus:ring-[#800000]"
                                        disabled={loading}
                                    />
                                </div>
                                <div className="max-h-[220px] overflow-y-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {EVENT_TAGS.filter(t => t.label.toLowerCase().includes(searchQuery.toLowerCase())).map(t => {
                                        const isSelected = tags.includes(t.id);
                                        return (
                                            <label
                                                key={t.id}
                                                className={`flex items-center gap-2.5 p-2 rounded-md border text-xs font-semibold cursor-pointer select-none transition-all ${
                                                    isSelected
                                                        ? 'bg-[#800000]/5 border-[#800000] text-[#800000]'
                                                        : 'hover:bg-slate-50 border-slate-100 text-slate-700'
                                                }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => handleToggleTag(t.id)}
                                                    disabled={loading}
                                                    className="w-4 h-4 rounded text-[#800000] border-slate-300 focus:ring-[#800000]"
                                                />
                                                {t.label}
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
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
