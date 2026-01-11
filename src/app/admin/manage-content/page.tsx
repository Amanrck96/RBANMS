'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Save, Loader2, Globe, FileEdit, ImageIcon, Star, Calendar, Bell, FileText, Clock, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { VisualEditor } from '@/components/admin/visual-editor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DynamicSection } from '@/components/dynamic-section';
import { CMS_DEFAULTS } from '@/lib/cms-defaults';

const EDITABLE_PAGES = [
    // Home Section
    { label: 'Home: Introduction', id: 'home-intro' },
    { label: 'Home: Hero Section', id: 'home-hero' },
    { label: 'About: Founder', id: 'about-founder' },
    { label: 'About: History', id: 'about-history' },
    { label: 'About: Vision', id: 'about-vision' },
    { label: 'About: Mission', id: 'about-mission' },
    { label: 'About: Director Message', id: 'about-director' },
    { label: 'About: Principal Message', id: 'about-principal' },
    { label: 'About: Board Members', id: 'about-board' },

    // Academics
    { label: 'Academics: Courses Offered', id: 'academics-courses' },
    { label: 'Academics: Rules & Regulations', id: 'academics-rules' },

    // Departments
    { label: 'Dept: Commerce', id: 'dept-commerce' },
    { label: 'Dept: Commerce Sidebar', id: 'dept-commerce-sidebar' },
    { label: 'Dept: Management (BBA)', id: 'dept-management' },
    { label: 'Dept: Computer Applications (BCA)', id: 'dept-bca' },
    { label: 'Dept: Arts', id: 'dept-arts' },
    { label: 'Dept: English', id: 'dept-english' },
    { label: 'Dept: Languages', id: 'dept-languages' },
    { label: 'Dept: Physical Education', id: 'dept-physed' },

    // Cells & Committees
    { label: 'Cell: IQAC', id: 'cell-iqac' },
    { label: 'Cell: NSS', id: 'cell-nss' },
    { label: 'Cell: NCC Army', id: 'cell-ncc-army' },
    { label: 'Cell: NCC Navy', id: 'cell-ncc-navy' },
    { label: 'Cell: Women\'s Cell', id: 'cell-womens' },
    { label: 'Cell: Eco Club', id: 'cell-eco' },
    { label: 'Cell: Cultural Committee', id: 'cell-cultural' },
    { label: 'Cell: Placement Cell', id: 'cell-placement' },
    { label: 'Cell: Anti-Ragging', id: 'cell-antiragging' },
    { label: 'Cell: Grievance Redressal', id: 'cell-grievance' },
    { label: 'Cell: YRC & Scouts', id: 'cell-yrc' },
    { label: 'Cell: AICTE Committee', id: 'cell-aicte' },
    { label: 'Cell: Discipline Committee', id: 'cell-discipline' },
    { label: 'Cell: Examination Committee', id: 'cell-exam' },
    { label: 'Cell: IPC', id: 'cell-ipc' },
    { label: 'Cell: Manasa Counselling', id: 'cell-manasa' },
    { label: 'Cell: Statutory (General)', id: 'cell-statutory' },
    { label: 'Cell: Others (General)', id: 'cell-others' },

    // More Pages
    { label: 'Facilities', id: 'facilities' },
    { label: 'Contact Info', id: 'contact-info' },
    { label: 'Scholarships', id: 'scholarships' },
    { label: 'Research', id: 'research' },
    { label: 'NAAC', id: 'naac' },
    { label: 'Gallery (Brief)', id: 'gallery' },
    { label: 'Core Values', id: 'about-core-values' },
    { label: 'Academic Structure', id: 'academics-structure' },
    { label: 'Academics: Philosophy', id: 'academics-philosophy' },
    { label: 'Activities: Cultural', id: 'activities-cultural' },
    { label: 'Activities: Co-Curricular', id: 'activities-co-curricular' },
    { label: 'Administration (Staff List)', id: 'administration' },
    { label: 'Regional: Sidebar Cards', id: '8' },
];

export default function ManageContentPage() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    // Global State
    const [notices, setNotices] = useState<string[]>([]);
    const [activities, setActivities] = useState<{ title: string, date: string, description: string }[]>([]);

    // Page Editor State
    const [selectedPage, setSelectedPage] = useState<string>('');
    const [pageContent, setPageContent] = useState<string>('');
    const [pageTitle, setPageTitle] = useState<string>('');
    const [pageImageUrl, setPageImageUrl] = useState<string>('');

    // Specialized page-8 state
    const [page8Data, setPage8Data] = useState<any>({
        major_events_image: '',
        major_events_alt: '',
        major_events_text: [],
        month_that_was_items: [],
        announcements_text: '',
        brochure_image: '',
        brochure_alt: '',
        upcoming_events_text: [],
        blog_text: ''
    });

    // Toggle State for Old vs New
    const [currentData, setCurrentData] = useState<{ title: string, content: string, imageUrl: string } | null>(null);
    const [viewMode, setViewMode] = useState<'current' | 'original'>('current');

    useEffect(() => {
        if (user) {
            fetchGlobalContent();
        }
    }, [user]);

    const fetchGlobalContent = async () => {
        setFetching(true);
        try {
            const [nRes, aRes] = await Promise.all([
                fetch('/api/site-content?section=notices'),
                fetch('/api/site-content?section=activities')
            ]);
            const nData = await nRes.json();
            const aData = await aRes.json();
            if (nData.data?.items) setNotices(nData.data.items);
            if (aData.data?.items) setActivities(aData.data.items);
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setFetching(false);
        }
    };

    const fetchPageContent = async (pageId: string) => {
        setLoading(true);
        setViewMode('current'); // Reset view mode anytime we switch pages
        try {
            const res = await fetch(`/api/site-content?section=page-${pageId}`);
            const data = await res.json();

            let newContent = '';
            let newTitle = '';
            let newImage = '';

            if (data.data) {
                newContent = data.data.content || '';
                newTitle = data.data.title || '';
                newImage = data.data.imageUrl || '';
            } else {
                // If No DB content, default to CMS Defaults
                const defaults = CMS_DEFAULTS[pageId];
                newContent = defaults ? defaults.content : '';
                newTitle = defaults ? defaults.title : '';
                newImage = defaults ? defaults.imageUrl || '' : '';
            }

            setPageContent(newContent);
            setPageTitle(newTitle);
            setPageImageUrl(newImage);

            setCurrentData({
                title: newTitle,
                content: newContent,
                imageUrl: newImage
            });

            if (pageId === '8' && data.data) {
                setPage8Data({
                    major_events_image: data.data.major_events_image || '',
                    major_events_alt: data.data.major_events_alt || '',
                    major_events_text: data.data.major_events_text || [],
                    month_that_was_items: data.data.month_that_was_items || [],
                    announcements_text: data.data.announcements_text || '',
                    brochure_image: data.data.brochure_image || '',
                    brochure_alt: data.data.brochure_alt || '',
                    upcoming_events_text: data.data.upcoming_events_text || [],
                    blog_text: data.data.blog_text || ''
                });
            } else if (pageId === '8') {
                const defaults = CMS_DEFAULTS['8'];
                setPage8Data({
                    major_events_image: defaults.major_events_image || '',
                    major_events_alt: defaults.major_events_alt || '',
                    major_events_text: defaults.major_events_text || [],
                    month_that_was_items: defaults.month_that_was_items || [],
                    announcements_text: defaults.announcements_text || '',
                    brochure_image: defaults.brochure_image || '',
                    brochure_alt: defaults.brochure_alt || '',
                    upcoming_events_text: defaults.upcoming_events_text || [],
                    blog_text: defaults.blog_text || ''
                });
            }

        } catch (error) {
            console.error('Error fetching page content:', error);
            // Even on error, try to show defaults
            const defaults = CMS_DEFAULTS[pageId];
            if (defaults) {
                setPageContent(defaults.content);
                setPageTitle(defaults.title);
                setPageImageUrl(defaults.imageUrl || '');
                setCurrentData({
                    title: defaults.title,
                    content: defaults.content,
                    imageUrl: defaults.imageUrl || ''
                });
            }
        } finally {
            setLoading(false);
        }
    };

    const handleViewModeChange = (mode: string) => {
        const newMode = mode as 'current' | 'original';
        setViewMode(newMode);

        if (newMode === 'current') {
            if (currentData) {
                setPageTitle(currentData.title);
                setPageContent(currentData.content);
                setPageImageUrl(currentData.imageUrl);
            }
        } else {
            // Load Old/Original
            const defaults = CMS_DEFAULTS[selectedPage];
            if (defaults) {
                setPageTitle(defaults.title);
                setPageContent(defaults.content);
                setPageImageUrl(defaults.imageUrl || '');
            } else {
                toast({ title: 'Info', description: 'No original content found for this page.' });
            }
        }
    };

    const handleSavePage = async () => {
        if (!selectedPage) return;
        setLoading(true);
        try {
            const token = await auth?.currentUser?.getIdToken();
            const res = await fetch('/api/site-content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    section: `page-${selectedPage}`,
                    data: selectedPage === '8' ? {
                        ...page8Data,
                        title: pageTitle,
                        content: pageContent
                    } : { title: pageTitle, content: pageContent, imageUrl: pageImageUrl }
                })
            });

            if (res.ok) {
                toast({ title: 'Success', description: 'Page updated successfully' });
                // Update current data state
                setCurrentData({
                    title: pageTitle,
                    content: pageContent,
                    imageUrl: pageImageUrl
                });
                setViewMode('current');
            } else {
                throw new Error('Failed to update');
            }
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to update page', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    // Notice Helpers
    const addNotice = () => setNotices([...notices, '']);
    const updateNotice = (index: number, val: string) => {
        const newNotices = [...notices];
        newNotices[index] = val;
        setNotices(newNotices);
    };
    const removeNotice = (index: number) => setNotices(notices.filter((_, i) => i !== index));

    // Activity Helpers
    const addActivity = () => setActivities([...activities, { title: '', date: '', description: '' }]);
    const updateActivity = (index: number, field: string, val: string) => {
        const newActivities = [...activities];
        newActivities[index] = { ...newActivities[index], [field]: val };
        setActivities(newActivities);
    };
    const removeActivity = (index: number) => setActivities(activities.filter((_, i) => i !== index));

    if (fetching) {
        return <div className="flex justify-center py-20"><Loader2 className="animate-spin" /></div>;
    }

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                    <Globe className="text-primary" /> Manage Site Content
                </h1>
                <p className="text-muted-foreground mt-1">Super Admin Dashboard for editing any page content across the website.</p>
            </div>

            <Tabs defaultValue="homepage" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
                    <TabsTrigger value="homepage">Global & Home</TabsTrigger>
                    <TabsTrigger value="pages">All Pages</TabsTrigger>
                </TabsList>

                <TabsContent value="homepage" className="space-y-8">
                    {/* Notices Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Homepage Notices</CardTitle>
                            <CardDescription>Update the scrolling or bulleted notices on the home page.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {notices.map((notice, index) => (
                                <div key={index} className="flex gap-2">
                                    <Input
                                        value={notice}
                                        onChange={(e) => updateNotice(index, e.target.value)}
                                        placeholder="Enter notice text..."
                                    />
                                    <Button variant="ghost" size="icon" onClick={() => removeNotice(index)}>
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                </div>
                            ))}
                            <div className="flex justify-between pt-2">
                                <Button variant="outline" size="sm" onClick={addNotice}>
                                    <Plus className="h-4 w-4 mr-2" /> Add Notice
                                </Button>
                                <Button size="sm" onClick={() => {
                                    const token = auth?.currentUser?.getIdToken().then(t => {
                                        fetch('/api/site-content', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${t}` },
                                            body: JSON.stringify({ section: 'notices', data: { items: notices } })
                                        }).then(() => toast({ title: 'Success', description: 'Notices updated' }));
                                    });
                                }} disabled={loading}>
                                    <Save className="h-4 w-4 mr-2" /> Save Notices
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* The Month That Was Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>The Month That Was</CardTitle>
                            <CardDescription>Latest college activities and events.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {activities.map((activity, index) => (
                                <div key={index} className="p-4 border rounded-lg space-y-4 relative bg-gray-50/50">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-2 right-2"
                                        onClick={() => removeActivity(index)}
                                    >
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Title</Label>
                                            <Input
                                                value={activity.title}
                                                onChange={(e) => updateActivity(index, 'title', e.target.value)}
                                                placeholder="Activity Title"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Date</Label>
                                            <Input
                                                value={activity.date}
                                                onChange={(e) => updateActivity(index, 'date', e.target.value)}
                                                placeholder="e.g. Nov 20, 2025"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            value={activity.description}
                                            onChange={(e) => updateActivity(index, 'description', e.target.value)}
                                            placeholder="Write a short description..."
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between pt-2">
                                <Button variant="outline" size="sm" onClick={addActivity}>
                                    <Plus className="h-4 w-4 mr-2" /> Add Activity
                                </Button>
                                <Button size="sm" onClick={() => {
                                    const token = auth?.currentUser?.getIdToken().then(t => {
                                        fetch('/api/site-content', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${t}` },
                                            body: JSON.stringify({ section: 'activities', data: { items: activities } })
                                        }).then(() => toast({ title: 'Success', description: 'Activities updated' }));
                                    });
                                }} disabled={loading}>
                                    <Save className="h-4 w-4 mr-2" /> Save Activities
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="pages" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Universal Page Editor</CardTitle>
                            <CardDescription>Select any page to modify its main text and information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Select Page Section</Label>
                                <Select onValueChange={(val) => {
                                    setSelectedPage(val);
                                    fetchPageContent(val);
                                }}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose a page to edit..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {EDITABLE_PAGES.map((page) => (
                                            <SelectItem key={page.id} value={page.id}>{page.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {selectedPage && (
                                <div className="space-y-6 pt-4 border-t">

                                    <div className="flex justify-center pb-4">
                                        <Tabs value={viewMode} onValueChange={handleViewModeChange} className="w-[300px]">
                                            <TabsList className="grid w-full grid-cols-2">
                                                <TabsTrigger value="current">New (Current)</TabsTrigger>
                                                <TabsTrigger value="original">Old (Original)</TabsTrigger>
                                            </TabsList>
                                        </Tabs>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Display Title</Label>
                                            <Input
                                                value={pageTitle}
                                                onChange={(e) => setPageTitle(e.target.value)}
                                                placeholder="Enter the main title for this section"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="flex items-center gap-2"><ImageIcon size={14} /> Featured Image URL</Label>
                                            <Input
                                                value={pageImageUrl}
                                                onChange={(e) => setPageImageUrl(e.target.value)}
                                                placeholder="/images/example.jpg"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Main Content (Visual Editor)</Label>
                                        <VisualEditor
                                            value={pageContent}
                                            onChange={setPageContent}
                                        />
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <Button onClick={handleSavePage} disabled={loading}>
                                            <FileEdit className="h-4 w-4 mr-2" /> {loading ? 'Saving...' : 'Update Page Content'}
                                        </Button>
                                    </div>

                                    {/* page-8 Specialized Editor */}
                                    {selectedPage === '8' && (
                                        <div className="mt-12 space-y-12 border-t pt-12">
                                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                                    <Star className="size-5" /> Major Events Card
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <Label>Major Events Image URL</Label>
                                                        <Input
                                                            value={page8Data.major_events_image}
                                                            onChange={(e) => setPage8Data({ ...page8Data, major_events_image: e.target.value })}
                                                            placeholder="/images/event.jpg"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label>Event Items (Repeater)</Label>
                                                        {page8Data.major_events_text.map((item: string, idx: number) => (
                                                            <div key={idx} className="flex gap-2">
                                                                <Input
                                                                    value={item}
                                                                    onChange={(e) => {
                                                                        const newItems = [...page8Data.major_events_text];
                                                                        newItems[idx] = e.target.value;
                                                                        setPage8Data({ ...page8Data, major_events_text: newItems });
                                                                    }}
                                                                />
                                                                <Button variant="ghost" size="icon" onClick={() => {
                                                                    const newItems = page8Data.major_events_text.filter((_: any, i: number) => i !== idx);
                                                                    setPage8Data({ ...page8Data, major_events_text: newItems });
                                                                }}>
                                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                                </Button>
                                                            </div>
                                                        ))}
                                                        <Button variant="outline" size="sm" onClick={() => setPage8Data({ ...page8Data, major_events_text: [...page8Data.major_events_text, ''] })}>
                                                            <Plus className="h-4 w-4 mr-2" /> Add Event Item
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                                    <Calendar className="size-5" /> The Month That Was (Repeater)
                                                </h3>
                                                <div className="space-y-6">
                                                    {page8Data.month_that_was_items.map((item: any, idx: number) => (
                                                        <div key={idx} className="p-4 border rounded-lg bg-white relative space-y-4">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="absolute top-2 right-2"
                                                                onClick={() => {
                                                                    const newItems = page8Data.month_that_was_items.filter((_: any, i: number) => i !== idx);
                                                                    setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                }}
                                                            >
                                                                <Trash2 className="h-4 w-4 text-destructive" />
                                                            </Button>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <Label>Date/Short Date</Label>
                                                                    <Input
                                                                        value={item.date}
                                                                        onChange={(e) => {
                                                                            const newItems = [...page8Data.month_that_was_items];
                                                                            newItems[idx] = { ...item, date: e.target.value };
                                                                            setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <Label>Title</Label>
                                                                    <Input
                                                                        value={item.title}
                                                                        onChange={(e) => {
                                                                            const newItems = [...page8Data.month_that_was_items];
                                                                            newItems[idx] = { ...item, title: e.target.value };
                                                                            setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label>Short Text</Label>
                                                                <Textarea
                                                                    value={item.text}
                                                                    onChange={(e) => {
                                                                        const newItems = [...page8Data.month_that_was_items];
                                                                        newItems[idx] = { ...item, text: e.target.value };
                                                                        setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <Button variant="outline" onClick={() => setPage8Data({ ...page8Data, month_that_was_items: [...page8Data.month_that_was_items, { date: '', title: '', text: '' }] })}>
                                                        <Plus className="h-4 w-4 mr-2" /> Add Month Activity
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="bg-red-50/30 p-6 rounded-xl border border-red-100">
                                                <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                                                    <Bell className="size-5" /> Announcements (WYSIWYG)
                                                </h3>
                                                <VisualEditor
                                                    value={page8Data.announcements_text}
                                                    onChange={(val) => setPage8Data({ ...page8Data, announcements_text: val })}
                                                />
                                            </div>

                                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                                    <FileText className="size-5" /> Brochure Card
                                                </h3>
                                                <div className="space-y-2">
                                                    <Label>Brochure Image URL</Label>
                                                    <Input
                                                        value={page8Data.brochure_image}
                                                        onChange={(e) => setPage8Data({ ...page8Data, brochure_image: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="bg-blue-900/5 p-6 rounded-xl border border-blue-900/10">
                                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                                    <Clock className="size-5" /> Upcoming Events (Repeater)
                                                </h3>
                                                <div className="space-y-4">
                                                    {page8Data.upcoming_events_text.map((item: string, idx: number) => (
                                                        <div key={idx} className="flex gap-2">
                                                            <Input
                                                                value={item}
                                                                onChange={(e) => {
                                                                    const newItems = [...page8Data.upcoming_events_text];
                                                                    newItems[idx] = e.target.value;
                                                                    setPage8Data({ ...page8Data, upcoming_events_text: newItems });
                                                                }}
                                                            />
                                                            <Button variant="ghost" size="icon" onClick={() => {
                                                                const newItems = page8Data.upcoming_events_text.filter((_: any, i: number) => i !== idx);
                                                                setPage8Data({ ...page8Data, upcoming_events_text: newItems });
                                                            }}>
                                                                <Trash2 className="h-4 w-4 text-destructive" />
                                                            </Button>
                                                        </div>
                                                    ))}
                                                    <Button variant="outline" size="sm" onClick={() => setPage8Data({ ...page8Data, upcoming_events_text: [...page8Data.upcoming_events_text, ''] })}>
                                                        <Plus className="h-4 w-4 mr-2" /> Add Upcoming Event
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                                                    <BookOpen className="size-5" /> Blog Section (WYSIWYG)
                                                </h3>
                                                <VisualEditor
                                                    value={page8Data.blog_text}
                                                    onChange={(val) => setPage8Data({ ...page8Data, blog_text: val })}
                                                />
                                            </div>

                                            <div className="flex justify-end pt-8 sticky bottom-4">
                                                <Button size="lg" className="w-full md:w-auto shadow-xl" onClick={handleSavePage} disabled={loading}>
                                                    <Save className="h-4 w-4 mr-2" /> {loading ? 'Saving All...' : 'Save All Sidebar Cards'}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {!selectedPage && (
                        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
                            <FileEdit size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500 italic">Select a page from the dropdown above to start editing.</p>
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
