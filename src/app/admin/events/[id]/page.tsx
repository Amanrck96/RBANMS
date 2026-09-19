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
export const PRIMARY_TAGS = [
    { id: 'Academics', label: 'Academics', desc: 'Academics, course seminars, computer labs & departments' },
    { id: 'Co-curricular', label: 'Co-curricular', desc: 'Clubs, NSS, NCC, sports, cultural activities & fests' },
    { id: 'Events', label: 'Events', desc: 'Institutional celebrations, orientation, conferences & milestones' }
] as const;

export const SECONDARY_TAGS = [
    { id: 'general', label: 'General / All Departments' },
    { id: 'arts', label: 'Arts' },
    { id: 'commerce', label: 'Commerce' },
    { id: 'computer-applications', label: 'Computer Applications (BCA)' },
    { id: 'english', label: 'English' },
    { id: 'languages', label: 'Languages' },
    { id: 'management', label: 'Management (BBA)' },
    { id: 'physical-education', label: 'Physical Education' },
    { id: 'hindi', label: 'Hindi' },
    { id: 'kannada', label: 'Kannada' },
    { id: 'anrc', label: 'ANRC (Arcot Narainswamy Research Centre)' },
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
    const [primaryTag, setPrimaryTag] = useState<'Academics' | 'Co-curricular' | 'Events'>('Events');
    const [secondaryTags, setSecondaryTags] = useState<string[]>(['general']);
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
                
                // Primary Tag with inference fallback for legacy events
                if (data.event.primaryTag) {
                    setPrimaryTag(data.event.primaryTag);
                } else {
                    const existing = data.event.secondaryTags || data.event.tags || (data.event.department ? [data.event.department] : []);
                    if (existing.some((t: string) => ['academics', 'commerce', 'computer-applications', 'bca', 'management', 'bba', 'arts', 'english', 'languages', 'hindi', 'kannada', 'anrc', 'bca-forum', 'commerce-forum', 'management-forum', 'literary-forum', 'languages-forum'].includes(t))) {
                        setPrimaryTag('Academics');
                    } else if (existing.some((t: string) => ['co-curricular', 'nss', 'ncc', 'ncc-army', 'ncc-navy', 'physical-education', 'cultural-committee', 'eco-club', 'yrc-scouts', 'manasa-counselling', 'womens-cell'].includes(t))) {
                        setPrimaryTag('Co-curricular');
                    } else {
                        setPrimaryTag('Events');
                    }
                }

                // Secondary Tags
                const loadedSecondary = data.event.secondaryTags || data.event.tags || (data.event.department ? [data.event.department] : ['general']);
                setSecondaryTags(loadedSecondary.length > 0 ? loadedSecondary : ['general']);
            }
        } catch (error) {
            console.error('Failed to fetch event:', error);
        } finally {
            setFetching(false);
        }
    };

    const handleToggleSecondaryTag = (tagId: string) => {
        setSecondaryTags(prev => {
            const isSelected = prev.includes(tagId);
            if (isSelected) {
                const nextTags = prev.filter(t => t !== tagId);
                return nextTags.length > 0 ? nextTags : ['general'];
            } else {
                const filtered = prev.filter(t => t !== 'general');
                return [...filtered, tagId];
            }
        });
    };

    const handleRemoveSecondaryTag = (tagId: string) => {
        setSecondaryTags(prev => {
            const nextTags = prev.filter(t => t !== tagId);
            return nextTags.length > 0 ? nextTags : ['general'];
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = await auth?.currentUser?.getIdToken();
            const url = '/api/events';
            const method = isEditing ? 'PUT' : 'POST';
            
            const activeDepartment = secondaryTags[0] || 'general';
            const body = isEditing
                ? { 
                    eventId: params.id, 
                    title, 
                    excerpt, 
                    content, 
                    imageUrl, 
                    published, 
                    eventDate: new Date(eventDate).toISOString(), 
                    department: activeDepartment, 
                    tags: secondaryTags,
                    primaryTag,
                    secondaryTags
                }
                : { 
                    title, 
                    excerpt, 
                    content, 
                    imageUrl, 
                    published, 
                    eventDate: new Date(eventDate).toISOString(), 
                    department: activeDepartment, 
                    tags: secondaryTags,
                    primaryTag,
                    secondaryTags
                };

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

                        {/* PRIMARY TAG */}
                        <div className="space-y-3 p-4 bg-slate-50/80 border-2 border-slate-200 rounded-xl">
                            <div>
                                <Label className="text-base font-bold text-slate-900 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#800000]"></span>
                                    PRIMARY TAG (Controls Homepage Carousel Placement) *
                                </Label>
                                <p className="text-xs text-slate-600 mt-1">
                                    Determines whether this event appears in the <strong>Academics</strong>, <strong>Co-curricular</strong>, or <strong>Events</strong> carousel column on the homepage.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                                {PRIMARY_TAGS.map((p) => {
                                    const isSelected = primaryTag === p.id;
                                    return (
                                        <button
                                            key={p.id}
                                            type="button"
                                            onClick={() => setPrimaryTag(p.id)}
                                            disabled={loading}
                                            className={`p-3.5 rounded-lg border-2 text-left transition-all relative ${
                                                isSelected
                                                    ? 'bg-[#800000] text-white border-[#800000] shadow-md ring-2 ring-[#800000]/20'
                                                    : 'bg-white text-slate-800 border-slate-200 hover:border-[#800000]/40 hover:bg-slate-50'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                                                    {p.label}
                                                </span>
                                                {isSelected && (
                                                    <span className="text-[10px] font-bold bg-white text-[#800000] px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                        Active
                                                    </span>
                                                )}
                                            </div>
                                            <p className={`text-xs mt-1.5 leading-snug ${isSelected ? 'text-white/85' : 'text-slate-500'}`}>
                                                {p.desc}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* SECONDARY TAGS */}
                        <div className="space-y-3 p-4 bg-slate-50/80 border border-slate-200 rounded-xl">
                            <div>
                                <Label className="text-base font-bold text-slate-900 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                                    SECONDARY TAGS (Department &amp; Activity Filters) *
                                </Label>
                                <p className="text-xs text-slate-600 mt-1">
                                    Used for department pages, language tracks (Hindi, Kannada), research (ANRC), and student club filtering.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 p-3 bg-white border border-slate-200 rounded-lg min-h-[48px] items-center">
                                {secondaryTags.length === 0 ? (
                                    <span className="text-sm text-slate-400 italic">No secondary tags selected. Select from below.</span>
                                ) : (
                                    secondaryTags.map(tagId => {
                                        const t = SECONDARY_TAGS.find(x => x.id === tagId);
                                        return (
                                            <span key={tagId} className="inline-flex items-center gap-1.5 bg-[#800000] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                                {t ? t.label : tagId}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveSecondaryTag(tagId)}
                                                    className="hover:bg-white/20 rounded-full p-0.5 ml-0.5 text-xs text-white"
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
                                        placeholder="Search secondary tags (e.g. Hindi, Kannada, ANRC, Commerce)..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="h-9 bg-white text-slate-900 border-slate-200 focus:ring-[#800000]"
                                        disabled={loading}
                                    />
                                </div>
                                <div className="max-h-[220px] overflow-y-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {SECONDARY_TAGS.filter(t => t.label.toLowerCase().includes(searchQuery.toLowerCase())).map(t => {
                                        const isSelected = secondaryTags.includes(t.id);
                                        return (
                                            <label
                                                key={t.id}
                                                className={`flex items-center gap-2.5 p-2 rounded-md border text-xs font-semibold cursor-pointer select-none transition-all ${
                                                    isSelected
                                                        ? 'bg-[#800000]/10 border-[#800000] text-[#800000] font-bold'
                                                        : 'hover:bg-slate-50 border-slate-200 text-slate-700'
                                                }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => handleToggleSecondaryTag(t.id)}
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
