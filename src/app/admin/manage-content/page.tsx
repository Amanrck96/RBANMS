'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Save, Loader2, Globe, FileEdit, ImageIcon, Star, Calendar, Bell, FileText, Clock, BookOpen, Settings, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { VisualEditor } from '@/components/admin/visual-editor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CMS_DEFAULTS } from '@/lib/cms-defaults';
import { ImageUpload } from '@/components/admin/image-upload';
import { ScrollArea } from '@/components/ui/scroll-area';

const PAGE_GROUPS = [
    {
        name: 'Home Page',
        pages: [
            { label: 'Home: Hero Section', id: 'home-hero' },
            { label: 'Home: Top Banner', id: 'home-top-banner' },
            { label: 'Home: Introduction', id: 'home-intro' },
            { label: 'Home: Sidebar', id: '8' },
        ]
    },
    {
        name: 'About College',
        pages: [
            { label: 'About: Introduction', id: 'about-intro' },
            { label: 'The Founder', id: 'about-founder' },
            { label: 'Founder\'s Vision', id: 'about-founders-vision' },
            { label: 'History & Heritage', id: 'about-history' },
            { label: 'Vision', id: 'about-vision' },
            { label: 'Mission', id: 'about-mission' },
            { label: 'Core Values', id: 'about-core-values' },
            { label: 'Board Members', id: 'about-board' },
            { label: 'Governance', id: 'governance' },
            { label: 'College Administration (Page)', id: 'administration' },
            { label: 'Director\'s Message', id: 'about-director' },
            { label: 'Principal\'s Message', id: 'about-principal' },
            { label: 'Awards & Recognition', id: 'about-awards' },
            { label: 'Code of Conduct', id: 'code-of-conduct' },
        ]
    },
    {
        name: 'Academics',
        pages: [
            { label: 'Academics Overview', id: 'academics-index' },
            { label: 'Courses Offered', id: 'academics-courses' },
            { label: 'New Courses', id: 'academics-new-courses' },
            { label: 'Add-on Courses', id: 'academics-addon-courses' },
            { label: 'Academic Structure', id: 'academics-structure' },
            { label: 'Academic Philosophy', id: 'academics-philosophy' },
            { label: 'Rules & Regulations', id: 'academics-rules' },
        ]
    },
    {
        name: 'Departments',
        pages: [
            { label: 'Commerce: Main', id: 'dept-commerce' },
            { label: 'Commerce: Sidebar', id: 'dept-commerce-sidebar' },
            { label: 'Management (BBA): Main', id: 'dept-management' },
            { label: 'Management (BBA): Sidebar', id: 'dept-management-sidebar' },
            { label: 'Computer Applications (BCA): Main', id: 'dept-bca' },
            { label: 'Computer Applications (BCA): Sidebar', id: 'dept-bca-sidebar' },
            { label: 'Arts: Main', id: 'dept-arts' },
            { label: 'Arts: Sidebar', id: 'dept-arts-sidebar' },
            { label: 'English: Main', id: 'dept-english' },
            { label: 'English: Sidebar', id: 'dept-english-sidebar' },
            { label: 'Languages: Main', id: 'dept-languages' },
            { label: 'Languages: Sidebar', id: 'dept-languages-sidebar' },
            { label: 'Physical Education & Sports: Main', id: 'dept-physed' },
            { label: 'Physical Education & Sports: Sidebar', id: 'dept-physed-sidebar' },
        ]
    },
    {
        name: 'Cells & Committees',
        pages: [
            { label: 'IQAC: Main', id: 'cell-iqac' },
            { label: 'IQAC: Sidebar', id: 'cell-iqac-sidebar' },
            { label: 'NSS: Main', id: 'cell-nss' },
            { label: 'NSS: Sidebar', id: 'cell-nss-sidebar' },
            { label: 'NCC (Main)', id: 'cell-ncc' },
            { label: 'NCC (Sidebar)', id: 'cell-ncc-sidebar' },
            { label: 'NCC Army: Main', id: 'cell-ncc-army' },
            { label: 'NCC Army: Sidebar', id: 'cell-ncc-army-sidebar' },
            { label: 'NCC Navy: Main', id: 'cell-ncc-navy' },
            { label: 'NCC Navy: Sidebar', id: 'cell-ncc-navy-sidebar' },
            { label: 'Women\'s Cell', id: 'cell-womens' },
            { label: 'Women\'s Cell Sidebar', id: 'cell-womens-sidebar' },
            { label: 'Equal Opportunity', id: 'cell-equal-opportunity' },
            { label: 'Grievance Redressal', id: 'cell-grievance' },
            { label: 'Anti-Ragging', id: 'cell-antiragging' },
            { label: 'POSH', id: 'cell-posh' },
            { label: 'SC/ST Cell', id: 'cell-sc-st' },
            { label: 'Internal Compliance', id: 'cell-internal-compliance' },
            { label: 'Manasa Counselling', id: 'cell-manasa' },
            { label: 'Manasa Sidebar', id: 'cell-manasa-sidebar' },
            { label: 'Cultural Committee', id: 'cell-cultural' },
            { label: 'Cultural Sidebar', id: 'cell-cultural-sidebar' },
            { label: 'Eco Club', id: 'cell-eco' },
            { label: 'Eco Club Sidebar', id: 'cell-eco-sidebar' },
            { label: 'AICTE Committee', id: 'cell-aicte' },
            { label: 'Discipline Committee', id: 'cell-discipline' },
            { label: 'Examination Committee', id: 'cell-exam' },
            { label: 'Internal Placement Cell (IPC)', id: 'cell-ipc' },
            { label: 'IPC Sidebar', id: 'cell-ipc-sidebar' },
            { label: 'YRC & Scouts', id: 'cell-yrc' },
            { label: 'Statutory (General)', id: 'cell-statutory' },
            { label: 'Others (General)', id: 'cell-others' },
        ]
    },
    {
        name: 'Student Corner',
        pages: [
            { label: 'Facilities', id: 'facilities' },
            { label: 'Scholarships', id: 'scholarships' },
            { label: 'Career / Jobs', id: 'career' },
            { label: 'Alumni Activity', id: 'alumni-activity' },
            { label: 'Events Page', id: 'events' },
            { label: 'Cultural Activities', id: 'activities-cultural' },
            { label: 'Co-Curricular', id: 'activities-co-curricular' },
            { label: 'Gallery Page', id: 'gallery' },
        ]
    },
    {
        name: 'Resources & Contact',
        pages: [
            { label: 'Research & Innovation', id: 'research' },
            { label: 'NAAC Documentation', id: 'naac' },
            { label: 'RTI', id: 'rti' },
            { label: 'Contact Info', id: 'contact-info' },
        ]
    },
    {
        name: 'Global Site Config',
        pages: [
            { label: 'Header: Top Bar', id: 'header-top' },
            { label: 'Footer: Content', id: 'footer-about' },
            { label: 'Blog Header', id: 'blog-header' },
            { label: 'Global Site Settings', id: 'site-settings' },
        ]
    },
    {
        name: 'Industry Connect',
        pages: [
            { label: 'MoUs', id: 'industry-mou' },
            { label: 'Internships', id: 'industry-internship' },
            { label: 'Industry Visits', id: 'industry-visits' },
            { label: 'Field Trips', id: 'industry-field-trip' },
            { label: 'Add-on Programmes', id: 'industry-addon' },
        ]
    }
];

const EDITABLE_PAGES = PAGE_GROUPS.flatMap(g => g.pages);


export default function ManageContentPage() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [fetching, setFetching] = useState(true);
    const [loading, setLoading] = useState(false);

    // Global State
    const [notices, setNotices] = useState<string[]>([]);
    const [activities, setActivities] = useState<{ title: string, date: string, description: string }[]>([]);
    const [globalMajorEvents, setGlobalMajorEvents] = useState<string[]>([]);
    const [globalUpcomingEvents, setGlobalUpcomingEvents] = useState<string[]>([]);

    // Page Editor State
    const [selectedPage, setSelectedPage] = useState<string>('');
    const [pageContent, setPageContent] = useState<string>('');
    const [pageTitle, setPageTitle] = useState<string>('');
    const [pageImageUrl, setPageImageUrl] = useState<string>('');
    const [pageTagline, setPageTagline] = useState<string>('');
    const [pageBadgeText, setPageBadgeText] = useState<string>('');

    // Specialized page-8 state
    const [page8Data, setPage8Data] = useState<any>({
        major_events_image: '',
        major_events_alt: '',
        major_events_text: [],
        month_that_was_items: [],
        announcements_text: '',
        brochure_image: '',
        brochure_alt: '',
        brochure_link: '',
        upcoming_events_text: [],
        blog_text: ''
    });

    // Specialized home-hero state
    const [homeHeroData, setHomeHeroData] = useState<any>({
        advantages: [],
        mag_link: '',
        mag_image: ''
    });

    const [siteSettings, setSiteSettings] = useState<any>({
        collegeName: '',
        email: '',
        phone: '',
        address: '',
        socialLinks: {
            facebook: '', twitter: '', instagram: '', linkedin: '', youtube: '', pinterest: '', bluesky: ''
        },
        footerTitles: {
            quickLinks: '', campus: '', contact: '', social: ''
        }
    });

    const [naacData, setNaacData] = useState<any>({
        certificateItems: [],
        ssrItems: [],
        aqarItems: []
    });

    const [facultyList, setFacultyList] = useState<any[]>([]);

    // Sub-sections (Tabs) state
    const [subSections, setSubSections] = useState<{ id: string, label: string, content: string }[]>([]);
    const [activeSubSection, setActiveSubSection] = useState<string>('');

    // Toggle State for Old vs New
    const [currentData, setCurrentData] = useState<{ title: string, content: string, imageUrl: string, tagline?: string, badgeText?: string } | null>(null);
    const [viewMode, setViewMode] = useState<'current' | 'original'>('current');

    useEffect(() => {
        if (user) {
            fetchGlobalContent();
        } else if (!useAuth().loading) {
            setFetching(false);
        }
    }, [user]);

    const fetchGlobalContent = async () => {
        setFetching(true);
        try {
            const [nRes, aRes, p8Res] = await Promise.all([
                fetch('/api/site-content?section=notices', { cache: 'no-store' }),
                fetch('/api/site-content?section=activities', { cache: 'no-store' }),
                fetch('/api/site-content?section=page-8', { cache: 'no-store' })
            ]);
            const nData = await nRes.json();
            const aData = await aRes.json();
            const p8Data = await p8Res.json();

            if (nData.data?.items) setNotices(nData.data.items);
            if (aData.data?.items) setActivities(aData.data.items);

            if (p8Data.data) {
                setGlobalMajorEvents(p8Data.data.major_events_text || []);
                setGlobalUpcomingEvents(p8Data.data.upcoming_events_text || []);
            } else {
                const defaults = CMS_DEFAULTS['8'] as any;
                setGlobalMajorEvents(defaults?.major_events_text || []);
                setGlobalUpcomingEvents(defaults?.upcoming_events_text || []);
            }
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setFetching(false);
        }
    };

    const fetchPageContent = async (pageId: string) => {
        setLoading(true);
        setViewMode('current'); // Reset view mode anytime we switch pages
        setSubSections([]); // Reset sub-sections
        setActiveSubSection('');

        try {
            // Check if this page has sub-sections (tabs)
            const tabbedPages: Record<string, string[]> = {
                'dept-commerce': ['why-bcom', 'highlights', 'vision', 'skills', 'matrix', 'outcomes', 'activities', 'faculty'],
                'dept-management': ['why-bba', 'skills', 'highlights', 'vision', 'matrix', 'objectives', 'outcomes', 'activities', 'faculty'],
                'dept-bca': ['highlights', 'vision', 'facilities', 'competency-training', 'certificate-courses', 'matrix', 'objectives', 'outcomes', 'faculty', 'forum'],
                'dept-arts': ['highlights', 'skills', 'vision', 'courses', 'objectives', 'outcomes', 'history', 'economics', 'political-science', 'activities', 'faculty', 'contact'],
                'dept-english': ['highlights', 'facilities', 'vision', 'programmes', 'certificate-courses', 'matrix', 'objectives', 'outcomes', 'natya', 'fourth-wall', 'phoenix', 'faculty', 'contact'],
                'dept-languages': ['highlights', 'vision', 'objectives', 'outcomes', 'hindi', 'kannada', 'tamil', 'events', 'faculty', 'contact'],
                'dept-physed': ['highlights', 'vision', 'facilities', 'courses', 'events', 'contact'],
                'facilities': ['overview', 'computer-labs', 'sports-ground', 'auditorium', 'library', 'digital-library', 'classrooms', 'canteen', 'green-campus'],
                'administration': ['overview', 'staff-list', 'photos'],
                'cell-iqac': ['objectives', 'functions', 'major-contributions', 'documents']
            };

            const pageTabs = tabbedPages[pageId];
            if (pageTabs) {
                const fetchedSubSections = await Promise.all(pageTabs.map(async (tabId) => {
                    const res = await fetch(`/api/site-content?section=page-${pageId}-tab-${tabId}`);
                    const data = await res.json();

                    let content = '';
                    if (data.data?.content) {
                        content = data.data.content;
                    } else {
                        // Fallback to CMS Defaults for tabs
                        const tabDefault = (CMS_DEFAULTS as any)[`page-${pageId}-tab-${tabId}`];
                        content = tabDefault?.content || '';
                    }

                    return {
                        id: tabId,
                        label: tabId.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                        content: content
                    };
                }));
                setSubSections(fetchedSubSections);
                if (fetchedSubSections.length > 0) setActiveSubSection(fetchedSubSections[0].id);
            }

            const res = await fetch(`/api/site-content?section=page-${pageId}`, { cache: 'no-store' });
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
            setPageTagline(data.data?.tagline || '');
            setPageBadgeText(data.data?.badgeText || '');

            setCurrentData({
                title: newTitle,
                content: newContent,
                imageUrl: newImage,
                tagline: data.data?.tagline || '',
                badgeText: data.data?.badgeText || ''
            });

            if (pageId === '8') {
                const defaults = (CMS_DEFAULTS as any)['8'];
                if (data.data) {
                    const majorText = data.data.major_events_text || defaults?.major_events_text || [];
                    const upcomingText = data.data.upcoming_events_text || defaults?.upcoming_events_text || [];

                    setPage8Data({
                        major_events_image: data.data.major_events_image || defaults?.major_events_image || '',
                        major_events_alt: data.data.major_events_alt || defaults?.major_events_alt || '',
                        major_events_text: majorText,
                        month_that_was_items: data.data.month_that_was_items || defaults?.month_that_was_items || [],
                        announcements_text: data.data.announcements_text || defaults?.announcements_text || '',
                        brochure_image: data.data.brochure_image || defaults?.brochure_image || '',
                        brochure_alt: data.data.brochure_alt || defaults?.brochure_alt || '',
                        brochure_link: data.data.brochure_link || defaults?.brochure_link || '',
                        upcoming_events_text: upcomingText,
                        blog_text: data.data.blog_text || defaults?.blog_text || ''
                    });

                    // Sync with global home tab
                    setGlobalMajorEvents(majorText);
                    setGlobalUpcomingEvents(upcomingText);
                } else {
                    const majorText = defaults?.major_events_text || [];
                    const upcomingText = defaults?.upcoming_events_text || [];

                    setPage8Data({
                        major_events_image: defaults?.major_events_image || '',
                        major_events_alt: defaults?.major_events_alt || '',
                        major_events_text: majorText,
                        month_that_was_items: defaults?.month_that_was_items || [],
                        announcements_text: defaults?.announcements_text || '',
                        brochure_image: defaults?.brochure_image || '',
                        brochure_alt: defaults?.brochure_alt || '',
                        brochure_link: defaults?.brochure_link || '',
                        upcoming_events_text: upcomingText,
                        blog_text: defaults?.blog_text || ''
                    });

                    // Sync with global home tab
                    setGlobalMajorEvents(majorText);
                    setGlobalUpcomingEvents(upcomingText);
                }
            }

            if (pageId === 'home-hero') {
                const defaults = (CMS_DEFAULTS as any)['home-hero'];
                if (data.data) {
                    setHomeHeroData({
                        advantages: data.data.advantages || defaults?.advantages || [],
                        mag_link: data.data.mag_link || defaults?.mag_link || '',
                        mag_image: data.data.mag_image || defaults?.mag_image || ''
                    });
                } else {
                    setHomeHeroData({
                        advantages: defaults?.advantages || [],
                        mag_link: defaults?.mag_link || '',
                        mag_image: defaults?.mag_image || ''
                    });
                }
            }

            if (pageId === 'site-settings') {
                const defaults = (CMS_DEFAULTS as any)['site-settings'];
                setSiteSettings({
                    collegeName: data.data?.collegeName || defaults?.collegeName || '',
                    email: data.data?.email || defaults?.email || '',
                    phone: data.data?.phone || defaults?.phone || '',
                    address: data.data?.address || defaults?.address || '',
                    socialLinks: data.data?.socialLinks || defaults?.socialLinks || {
                        facebook: '', twitter: '', instagram: '', linkedin: '', youtube: '', pinterest: '', bluesky: ''
                    },
                    footerTitles: data.data?.footerTitles || defaults?.footerTitles || {
                        quickLinks: 'Quick Links', campus: 'Campus', contact: 'Contact Us', social: 'Social Media'
                    }
                });
            }

            if (pageId === 'naac' && data.data) {
                setNaacData({
                    certificateItems: data.data.certificateItems || [],
                    ssrItems: data.data.ssrItems || [],
                    aqarItems: data.data.aqarItems || []
                });
            } else if (pageId === 'naac') {
                const defaults = CMS_DEFAULTS['naac'] as any;
                setNaacData({
                    certificateItems: defaults?.certificateItems || [],
                    ssrItems: defaults?.ssrItems || [],
                    aqarItems: defaults?.aqarItems || []
                });
            }

            if (data.data?.faculty) {
                setFacultyList(data.data.faculty);
            } else if (CMS_DEFAULTS[pageId] && (CMS_DEFAULTS[pageId] as any).faculty) {
                setFacultyList((CMS_DEFAULTS[pageId] as any).faculty);
            } else {
                setFacultyList([]);
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

    const handleLoadDefaults = () => {
        // Handle Tabbed Pages
        if (subSections.length > 0) {
            const newSubs = subSections.map(sub => {
                const tabDefaultKey = `page-${selectedPage}-tab-${sub.id}`;
                const tabDefaults = (CMS_DEFAULTS as any)[tabDefaultKey];
                return tabDefaults ? { ...sub, content: tabDefaults.content } : sub;
            });
            setSubSections(newSubs);
            toast({ title: 'Template Loaded', description: 'Available full content template loaded. You can now edit and save.' });
            return;
        }

        const defaults = CMS_DEFAULTS[selectedPage];
        if (!defaults) {
            toast({ title: 'Unavailable', description: 'No default template found for this page.' });
            return;
        }

        setPageTitle(defaults.title);
        setPageContent(defaults.content);
        setPageImageUrl(defaults.imageUrl || '');
        setPageTagline((defaults as any).tagline || '');
        setPageBadgeText((defaults as any).badgeText || '');
        setFacultyList((defaults as any).faculty || []);

        if (selectedPage === 'naac') {
            setNaacData({
                certificateItems: (defaults as any).certificateItems || [],
                ssrItems: (defaults as any).ssrItems || [],
                aqarItems: (defaults as any).aqarItems || []
            });
        }

        if (selectedPage === '8') {
            setPage8Data({
                major_events_image: (defaults as any).major_events_image || '',
                major_events_alt: (defaults as any).major_events_alt || '',
                major_events_text: (defaults as any).major_events_text || [],
                month_that_was_items: (defaults as any).month_that_was_items || [],
                announcements_text: (defaults as any).announcements_text || '',
                brochure_image: (defaults as any).brochure_image || '',
                brochure_alt: (defaults as any).brochure_alt || '',
                brochure_link: (defaults as any).brochure_link || '',
                upcoming_events_text: (defaults as any).upcoming_events_text || [],
                blog_text: (defaults as any).blog_text || ''
            });
        }

        if (selectedPage === 'home-hero') {
            setHomeHeroData({
                advantages: (defaults as any).advantages || [],
                mag_link: (defaults as any).mag_link || '',
                mag_image: (defaults as any).mag_image || ''
            });
        }

        if (selectedPage === 'site-settings') {
            setSiteSettings({
                collegeName: (defaults as any).collegeName || '',
                email: (defaults as any).email || '',
                phone: (defaults as any).phone || '',
                address: (defaults as any).address || '',
                socialLinks: (defaults as any).socialLinks || {},
                footerTitles: (defaults as any).footerTitles || {}
            });
        }

        // Toggle view mode to force component refresh if needed
        setViewMode('original');

        toast({ title: 'Template Loaded', description: 'Full content template loaded. You can now edit and save.' });
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
                        content: pageContent,
                        tagline: pageTagline,
                        badgeText: pageBadgeText,
                        faculty: facultyList
                    } : selectedPage === 'naac' ? {
                        ...naacData,
                        title: pageTitle,
                        content: pageContent,
                        imageUrl: pageImageUrl,
                        tagline: pageTagline,
                        badgeText: pageBadgeText,
                        faculty: facultyList
                    } : selectedPage === 'home-hero' ? {
                        title: pageTitle,
                        content: pageContent,
                        imageUrl: pageImageUrl,
                        advantages: homeHeroData.advantages,
                        mag_link: homeHeroData.mag_link,
                        mag_image: homeHeroData.mag_image
                    } : selectedPage === 'site-settings' ? {
                        ...siteSettings,
                        title: pageTitle
                    } : {
                        title: pageTitle,
                        content: pageContent,
                        imageUrl: pageImageUrl,
                        tagline: pageTagline,
                        badgeText: pageBadgeText,
                        faculty: facultyList
                    }
                })
            });

            if (res.ok) {
                toast({ title: 'Success', description: 'Page updated successfully' });
                // Update current data state
                setCurrentData({
                    title: pageTitle,
                    content: pageContent,
                    imageUrl: pageImageUrl,
                    tagline: pageTagline,
                    badgeText: pageBadgeText,
                    faculty: facultyList
                } as any);
                setFetching(false); // Trigger global refetch if needed
                if (selectedPage === 'site-settings') {
                    // Force refresh or notify
                    toast({ title: 'Settings Saved', description: 'Global Site Settings updated. Refresh pages to see changes.' });
                }
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

    // Force Publish Helper
    const handleForcePublishDefaults = async () => {
        if (!selectedPage) return;

        // Handle Tabbed Pages - Special Case
        if (subSections.length > 0) {
            if (!confirm('This will overwrite ALL tabs with default content immediately. Continue?')) return;
            setLoading(true);
            try {
                const token = await auth?.currentUser?.getIdToken();
                // Iterate and update all tabs
                for (const sub of subSections) {
                    const tabDefaultKey = `page-${selectedPage}-tab-${sub.id}`;
                    const tabDefaults = (CMS_DEFAULTS as any)[tabDefaultKey];
                    if (tabDefaults && tabDefaults.content) {
                        await fetch('/api/site-content', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                                section: tabDefaultKey,
                                data: { content: tabDefaults.content }
                            })
                        });
                        // Update local state for this tab
                        setSubSections(prev => prev.map(s => s.id === sub.id ? { ...s, content: tabDefaults.content } : s));
                    }
                }
                toast({ title: 'Success', description: 'All tabs published with full content.' });
            } catch (e) {
                toast({ title: 'Error', description: 'Failed to publish tabs.', variant: 'destructive' });
            } finally {
                setLoading(false);
            }

            // ALSO PUBLISH THE PARENT PAGE DEFAULTS (Title, Tagline, etc.)
            const parentDefaults = CMS_DEFAULTS[selectedPage];
            if (parentDefaults) {
                try {
                    const token = await auth?.currentUser?.getIdToken();
                    await fetch('/api/site-content', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                        body: JSON.stringify({
                            section: `page-${selectedPage}`,
                            data: {
                                title: parentDefaults.title,
                                imageUrl: parentDefaults.imageUrl || '',
                                tagline: parentDefaults.tagline || '',
                                badgeText: (parentDefaults as any).badgeText || '',
                                faculty: (parentDefaults as any).faculty || []
                            }
                        })
                    });
                    // Update state
                    setPageTitle(parentDefaults.title);
                    setPageImageUrl(parentDefaults.imageUrl || '');
                    setPageTagline(parentDefaults.tagline || '');
                    setPageBadgeText((parentDefaults as any).badgeText || '');
                    setFacultyList((parentDefaults as any).faculty || []);
                } catch (e) {
                    console.error("Error publishing parent defaults:", e);
                }
            }
            return;
        }

        // Standard Pages
        const defaults = CMS_DEFAULTS[selectedPage];
        if (!defaults) {
            toast({ title: 'Unavailable', description: 'No default/full content available for this page.' });
            return;
        }

        if (!confirm('This will immediately REPLACE the live content with the Full Default Version. Are you sure?')) return;

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
                    data: {
                        title: defaults.title,
                        content: defaults.content,
                        imageUrl: defaults.imageUrl || '',
                        tagline: (defaults as any).tagline || '',
                        badgeText: (defaults as any).badgeText || '',
                        faculty: (defaults as any).faculty || []
                    }
                })
            });

            if (res.ok) {
                toast({ title: 'Published!', description: 'Full content is now LIVE.' });
                // Update local state to reflect the change
                setPageTitle(defaults.title);
                setPageContent(defaults.content);
                setPageImageUrl(defaults.imageUrl || '');
                setPageTagline((defaults as any).tagline || '');
                setPageBadgeText((defaults as any).badgeText || '');
                setFacultyList((defaults as any).faculty || []);
                setCurrentData(defaults as any);
                setViewMode('current');
            } else {
                throw new Error('Failed to update');
            }
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to publish content', variant: 'destructive' });
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

    // Master Publish Helper
    const handlePublishAllDefaults = async () => {
        if (!confirm('⚠ CRITICAL WARNING ⚠\n\nThis will OVERWRITE ALL CONTENT on the ENTIRE WEBSITE with the default templates.\n\nThis is a destructive action for any custom edits you have made.\n\nAre you sure you want to proceed?')) return;

        setLoading(true);
        let count = 0;
        const total = Object.keys(CMS_DEFAULTS).length;

        try {
            const token = await auth?.currentUser?.getIdToken();

            for (const [key, data] of Object.entries(CMS_DEFAULTS)) {
                let sectionId = key;
                // Normalize section ID: If it doesn't represent a specialized key (like tabs which already have 'page-'), prepend 'page-'
                if (!key.startsWith('page-')) {
                    sectionId = `page-${key}`;
                }

                await fetch('/api/site-content', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                    body: JSON.stringify({
                        section: sectionId,
                        data: data
                    })
                });
                count++;
            }
            toast({ title: 'Success', description: `All ${count} sections have been reset to full default content.` });
            setTimeout(() => window.location.reload(), 2000);

        } catch (error) {
            toast({ title: 'Error', description: 'Failed to publish all defaults.', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleSaveGlobal = async (section: 'notices' | 'activities', items: any[]) => {
        setLoading(true);
        try {
            const token = await auth?.currentUser?.getIdToken();

            // 1. Save to the global collection (Legacy support)
            await fetch('/api/site-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ section, data: { items } })
            });

            // 2. ALSO save to page-8 to ensure sync with SidebarCards
            const page8Snapshot = await fetch('/api/site-content?section=page-8');
            const page8DataRes = await page8Snapshot.json();
            const currentPage8 = page8DataRes.data || {};

            let updatedPage8 = { ...currentPage8 };
            if (section === 'notices') {
                updatedPage8.announcements_text = `<ul class="list-disc pl-4 space-y-2">
                    ${items.map(notice => `<li>${notice}</li>`).join('')}
                </ul>`;
            } else if (section === 'activities') {
                updatedPage8.month_that_was_items = items.map(a => ({
                    date: a.date,
                    title: a.title,
                    text: a.description
                }));
            }

            await fetch('/api/site-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ section: 'page-8', data: updatedPage8 })
            });

            toast({ title: 'Success', description: `${section.charAt(0).toUpperCase() + section.slice(1)} updated and synced with Sidebar.` });

        } catch (error) {
            console.error(error);
            toast({ title: 'Error', description: `Failed to update ${section}`, variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleSaveEventsList = async (type: 'major' | 'upcoming', items: string[]) => {
        setLoading(true);
        try {
            const token = await auth?.currentUser?.getIdToken();
            const page8Snapshot = await fetch('/api/site-content?section=page-8');
            const page8DataRes = await page8Snapshot.json();
            const currentPage8 = page8DataRes.data || CMS_DEFAULTS['8'];

            let updatedPage8 = { ...currentPage8 };
            if (type === 'major') {
                updatedPage8.major_events_text = items;
            } else {
                updatedPage8.upcoming_events_text = items;
            }

            const res = await fetch('/api/site-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ section: 'page-8', data: updatedPage8 })
            });

            if (res.ok) {
                toast({ title: 'Success', description: `${type === 'major' ? 'Major' : 'Upcoming'} Events updated successfully.` });
            } else {
                throw new Error('Save failed');
            }
        } catch (error) {
            console.error(error);
            toast({ title: 'Error', description: `Failed to update ${type} events`, variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return <div className="flex justify-center py-20"><Loader2 className="animate-spin" /></div>;
    }

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <Globe className="text-primary" /> Manage Site Content
                    </h1>
                    <p className="text-muted-foreground mt-1">Super Admin Dashboard for editing any page content across the website.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="destructive" onClick={handlePublishAllDefaults} disabled={loading}>
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Settings className="w-4 h-4 mr-2" />}
                        Initialize / Ecosystem Reset
                    </Button>
                </div>
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
                                <Button size="sm" onClick={() => handleSaveGlobal('notices', notices)} disabled={loading}>
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
                                <Button size="sm" onClick={() => handleSaveGlobal('activities', activities)} disabled={loading}>
                                    <Save className="h-4 w-4 mr-2" /> Save Activities
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    {/* Major Events Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Major Events</CardTitle>
                            <CardDescription>Manage the list of major events shown in the sidebar.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {globalMajorEvents.map((event, index) => (
                                <div key={index} className="flex gap-2">
                                    <Input
                                        value={event}
                                        onChange={(e) => {
                                            const newEvents = [...globalMajorEvents];
                                            newEvents[index] = e.target.value;
                                            setGlobalMajorEvents(newEvents);
                                        }}
                                        placeholder="Event name..."
                                    />
                                    <Button variant="ghost" size="icon" onClick={() => setGlobalMajorEvents(globalMajorEvents.filter((_, i) => i !== index))}>
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                </div>
                            ))}
                            <div className="flex justify-between pt-2">
                                <Button variant="outline" size="sm" onClick={() => setGlobalMajorEvents([...globalMajorEvents, ''])}>
                                    <Plus className="h-4 w-4 mr-2" /> Add Event
                                </Button>
                                <Button size="sm" onClick={() => handleSaveEventsList('major', globalMajorEvents)} disabled={loading}>
                                    <Save className="h-4 w-4 mr-2" /> Save Major Events
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Upcoming Events Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Events</CardTitle>
                            <CardDescription>Update the list of upcoming events on the homepage.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {globalUpcomingEvents.map((event, index) => (
                                <div key={index} className="flex gap-2">
                                    <Input
                                        value={event}
                                        onChange={(e) => {
                                            const newEvents = [...globalUpcomingEvents];
                                            newEvents[index] = e.target.value;
                                            setGlobalUpcomingEvents(newEvents);
                                        }}
                                        placeholder="Event name (e.g. Activity - Date)..."
                                    />
                                    <Button variant="ghost" size="icon" onClick={() => setGlobalUpcomingEvents(globalUpcomingEvents.filter((_, i) => i !== index))}>
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                </div>
                            ))}
                            <div className="flex justify-between pt-2">
                                <Button variant="outline" size="sm" onClick={() => setGlobalUpcomingEvents([...globalUpcomingEvents, ''])}>
                                    <Plus className="h-4 w-4 mr-2" /> Add Event
                                </Button>
                                <Button size="sm" onClick={() => handleSaveEventsList('upcoming', globalUpcomingEvents)} disabled={loading}>
                                    <Save className="h-4 w-4 mr-2" /> Save Upcoming Events
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
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                <div className="lg:col-span-1 space-y-4">
                                    <Label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Navigation</Label>
                                    <ScrollArea className="h-[600px] pr-4">
                                        <div className="space-y-6">
                                            {PAGE_GROUPS.map((group) => (
                                                <div key={group.name} className="space-y-2">
                                                    <h3 className="text-xs font-bold text-slate-400 px-2">{group.name}</h3>
                                                    <div className="space-y-1">
                                                        {group.pages.map((page) => (
                                                            <button
                                                                key={page.id}
                                                                onClick={() => {
                                                                    setSelectedPage(page.id);
                                                                    fetchPageContent(page.id);
                                                                }}
                                                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${selectedPage === page.id
                                                                    ? 'bg-primary text-primary-foreground font-medium shadow-md'
                                                                    : 'hover:bg-slate-100 text-slate-600'
                                                                    }`}
                                                            >
                                                                {page.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </div>

                                <div className="lg:col-span-3">
                                    {!selectedPage ? (
                                        <div className="h-full flex flex-col items-center justify-center py-20 bg-slate-50/50 rounded-xl border-2 border-dashed border-slate-200">
                                            <FileEdit size={48} className="text-slate-300 mb-4" />
                                            <h3 className="text-lg font-medium text-slate-900">Choose a Section</h3>
                                            <p className="text-slate-500 max-w-xs text-center mt-1">Select a page from the left sidebar to start editing its content and images.</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-lg shadow-lg">
                                                <div>
                                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Currently Editing</span>
                                                    <h2 className="text-xl font-bold">{EDITABLE_PAGES.find(p => p.id === selectedPage)?.label}</h2>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" size="sm" className="bg-red-500/10 border-red-500/20 text-red-100 hover:bg-red-500/20 hover:text-white" onClick={handleForcePublishDefaults}>
                                                        ⚡ Publish Full Content (Auto)
                                                    </Button>
                                                    <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={handleLoadDefaults}>
                                                        Load Full Template
                                                    </Button>
                                                </div>
                                            </div>

                                            <Tabs defaultValue="content" className="w-full">
                                                <TabsList className="grid w-full grid-cols-3">
                                                    <TabsTrigger value="content">Main Content</TabsTrigger>
                                                    <TabsTrigger value="media">Hero & Media</TabsTrigger>
                                                    <TabsTrigger value="special">Special Fields</TabsTrigger>
                                                </TabsList>

                                                <TabsContent value="content" className="space-y-6 pt-4">
                                                    <div className="space-y-2">
                                                        <Label className="text-sm font-semibold text-slate-700">Display Title</Label>
                                                        <Input
                                                            value={pageTitle}
                                                            onChange={(e) => setPageTitle(e.target.value)}
                                                            placeholder="Enter the main title for this section"
                                                            className="bg-white"
                                                        />
                                                    </div>

                                                    {subSections.length > 0 ? (
                                                        <div className="space-y-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                            <Tabs value={activeSubSection} onValueChange={setActiveSubSection} className="w-full">
                                                                <TabsList className="flex flex-wrap h-auto bg-slate-200/50 p-1">
                                                                    {subSections.map(sub => (
                                                                        <TabsTrigger key={sub.id} value={sub.id} className="text-xs data-[state=active]:bg-white">{sub.label}</TabsTrigger>
                                                                    ))}
                                                                </TabsList>
                                                                {subSections.map(sub => (
                                                                    <TabsContent key={sub.id} value={sub.id} className="mt-4 space-y-4">
                                                                        <VisualEditor
                                                                            value={sub.content}
                                                                            onChange={(val) => {
                                                                                const newSubs = subSections.map(s => s.id === sub.id ? { ...s, content: val } : s);
                                                                                setSubSections(newSubs);
                                                                            }}
                                                                        />
                                                                        <div className="flex justify-end gap-2">
                                                                            <Button
                                                                                size="sm"
                                                                                variant="secondary"
                                                                                onClick={() => {
                                                                                    const defaults = (CMS_DEFAULTS as any)[`page-${selectedPage}-tab-${sub.id}`];
                                                                                    if (defaults) {
                                                                                        const newSubs = subSections.map(s => s.id === sub.id ? { ...s, content: defaults.content } : s);
                                                                                        setSubSections(newSubs);
                                                                                    }
                                                                                }}
                                                                            >
                                                                                Reset Tab
                                                                            </Button>
                                                                            <Button size="sm" onClick={async () => {
                                                                                setLoading(true);
                                                                                try {
                                                                                    const token = await auth?.currentUser?.getIdToken();
                                                                                    await fetch('/api/site-content', {
                                                                                        method: 'POST',
                                                                                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                                                                        body: JSON.stringify({
                                                                                            section: `page-${selectedPage}-tab-${sub.id}`,
                                                                                            data: { content: sub.content }
                                                                                        })
                                                                                    });
                                                                                    toast({ title: 'Success', description: `${sub.label} updated` });
                                                                                } catch (e) {
                                                                                    toast({ title: 'Error', description: 'Update failed', variant: 'destructive' });
                                                                                } finally {
                                                                                    setLoading(false);
                                                                                }
                                                                            }} disabled={loading}>
                                                                                <Save className="h-4 w-4 mr-2" /> Save {sub.label}
                                                                            </Button>
                                                                        </div>
                                                                    </TabsContent>
                                                                ))}
                                                            </Tabs>
                                                        </div>
                                                    ) : (
                                                        <div className="space-y-2">
                                                            <div className="flex items-center justify-between">
                                                                <Label>Main Page Content</Label>
                                                                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Visual HTML Editor</span>
                                                            </div>
                                                            <VisualEditor
                                                                key={`${selectedPage}-${viewMode}`}
                                                                value={pageContent}
                                                                onChange={setPageContent}
                                                            />
                                                        </div>
                                                    )}
                                                </TabsContent>

                                                <TabsContent value="media" className="pt-4 space-y-8">
                                                    <div className="p-6 border rounded-xl bg-slate-50/50">
                                                        <ImageUpload
                                                            label="Featured / Header Image"
                                                            value={pageImageUrl}
                                                            onChange={setPageImageUrl}
                                                            folder={`pages/${selectedPage}`}
                                                        />
                                                        <p className="text-xs text-slate-500 mt-2">
                                                            This image will appear at the top of the {EDITABLE_PAGES.find(p => p.id === selectedPage)?.label} page.
                                                        </p>
                                                    </div>
                                                </TabsContent>

                                                <TabsContent value="special" className="pt-4 space-y-12">
                                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                                            <Settings className="size-5" /> General Meta Fields
                                                        </h3>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div className="space-y-2">
                                                                <Label className="text-sm font-semibold">Tagline / Brief Intro</Label>
                                                                <Input
                                                                    value={pageTagline}
                                                                    onChange={(e) => setPageTagline(e.target.value)}
                                                                    placeholder="Short tagline for below the title"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <Label className="text-sm font-semibold">Badge Text</Label>
                                                                <Input
                                                                    value={pageBadgeText}
                                                                    onChange={(e) => setPageBadgeText(e.target.value)}
                                                                    placeholder="e.g. Department, Cell, Committee"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-end mt-4">
                                                            <Button size="sm" onClick={handleSavePage} disabled={loading}>
                                                                <Save className="h-4 w-4 mr-2" /> Save Meta Fields
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {selectedPage.startsWith('dept-') && (
                                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                                            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                                                <Users className="size-5" /> Faculty Profiles
                                                            </h3>
                                                            <div className="space-y-4">
                                                                {facultyList.map((faculty, idx) => (
                                                                    <div key={idx} className="p-4 border rounded-lg bg-white relative space-y-4 shadow-sm group">
                                                                        <Button
                                                                            variant="ghost" size="icon"
                                                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                                                            onClick={() => setFacultyList(facultyList.filter((_, i) => i !== idx))}
                                                                        >
                                                                            <Trash2 className="h-4 w-4 text-destructive" />
                                                                        </Button>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                            <Input placeholder="Full Name" value={faculty.name} onChange={(e) => {
                                                                                const newList = [...facultyList];
                                                                                newList[idx].name = e.target.value;
                                                                                setFacultyList(newList);
                                                                            }} />
                                                                            <Input placeholder="Designation / Role" value={faculty.role} onChange={(e) => {
                                                                                const newList = [...facultyList];
                                                                                newList[idx].role = e.target.value;
                                                                                setFacultyList(newList);
                                                                            }} />
                                                                            <Input placeholder="Qualification" value={faculty.qual} onChange={(e) => {
                                                                                const newList = [...facultyList];
                                                                                newList[idx].qual = e.target.value;
                                                                                setFacultyList(newList);
                                                                            }} />
                                                                            <Input placeholder="Email ID" value={faculty.email} onChange={(e) => {
                                                                                const newList = [...facultyList];
                                                                                newList[idx].email = e.target.value;
                                                                                setFacultyList(newList);
                                                                            }} />
                                                                            <Input placeholder="Phone Number" value={faculty.phone} onChange={(e) => {
                                                                                const newList = [...facultyList];
                                                                                newList[idx].phone = e.target.value;
                                                                                setFacultyList(newList);
                                                                            }} />
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                                <Button variant="outline" className="w-full border-dashed" onClick={() => setFacultyList([...facultyList, { name: '', role: '', qual: '', email: '', phone: '' }])}>
                                                                    <Plus className="h-4 w-4 mr-2" /> Add Faculty Member
                                                                </Button>
                                                            </div>
                                                            <div className="flex justify-end mt-4">
                                                                <Button size="sm" onClick={handleSavePage} disabled={loading}>
                                                                    <Save className="h-4 w-4 mr-2" /> Save Faculty List
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {selectedPage === 'naac' && (
                                                        <div className="space-y-8">
                                                            {['certificateItems', 'ssrItems', 'aqarItems'].map((listKey) => (
                                                                <div key={listKey} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                                                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase">
                                                                        <FileText className="size-5" /> {listKey.replace(/([A-Z])/g, ' $1').trim()}
                                                                    </h3>
                                                                    <div className="space-y-4">
                                                                        {naacData[listKey].map((item: any, idx: number) => (
                                                                            <div key={idx} className="p-4 border rounded-lg bg-white relative space-y-4 shadow-sm group">
                                                                                <Button
                                                                                    variant="ghost" size="icon"
                                                                                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                                                                    onClick={() => {
                                                                                        const newList = naacData[listKey].filter((_: any, i: number) => i !== idx);
                                                                                        setNaacData({ ...naacData, [listKey]: newList });
                                                                                    }}
                                                                                >
                                                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                                                </Button>
                                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                                    <div className="space-y-1">
                                                                                        <Label className="text-[10px] uppercase font-bold">Document Name</Label>
                                                                                        <Input
                                                                                            value={item.name}
                                                                                            onChange={(e) => {
                                                                                                const newList = [...naacData[listKey]];
                                                                                                newList[idx] = { ...item, name: e.target.value };
                                                                                                setNaacData({ ...naacData, [listKey]: newList });
                                                                                            }}
                                                                                            placeholder="e.g. Cycle - 4"
                                                                                        />
                                                                                    </div>
                                                                                    <div className="space-y-1">
                                                                                        <Label className="text-[10px] uppercase font-bold">Google Drive / PDF URL</Label>
                                                                                        <Input
                                                                                            value={item.url || ''}
                                                                                            onChange={(e) => {
                                                                                                const newList = [...naacData[listKey]];
                                                                                                newList[idx] = { ...item, url: e.target.value };
                                                                                                setNaacData({ ...naacData, [listKey]: newList });
                                                                                            }}
                                                                                            placeholder="https://drive.google.com/..."
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                        <Button
                                                                            variant="outline"
                                                                            className="w-full border-dashed"
                                                                            onClick={() => {
                                                                                const newList = [...naacData[listKey], { id: `${listKey}-${Date.now()}`, name: '', type: 'file', url: '' }];
                                                                                setNaacData({ ...naacData, [listKey]: newList });
                                                                            }}
                                                                        >
                                                                            <Plus className="h-4 w-4 mr-2" /> Add Document
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {selectedPage === '8' && (
                                                        <div className="space-y-12">
                                                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                                                <h3 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-2">
                                                                    <Star className="size-5" /> Major Events Highlight
                                                                </h3>
                                                                <div className="space-y-4">
                                                                    <ImageUpload
                                                                        label="Card Image"
                                                                        value={page8Data.major_events_image}
                                                                        onChange={(url) => setPage8Data({ ...page8Data, major_events_image: url })}
                                                                        folder="home/sidebar"
                                                                    />
                                                                    <div className="space-y-2">
                                                                        <Label className="text-xs font-bold uppercase">{"Event Items (Bullets)"}</Label>
                                                                        {page8Data.major_events_text.map((item: string, idx: number) => (
                                                                            <div key={idx} className="flex gap-2">
                                                                                <Input
                                                                                    value={item}
                                                                                    onChange={(e) => {
                                                                                        const newItems = [...page8Data.major_events_text];
                                                                                        newItems[idx] = e.target.value;
                                                                                        setPage8Data({ ...page8Data, major_events_text: newItems });
                                                                                    }}
                                                                                    className="bg-white"
                                                                                />
                                                                                <Button variant="ghost" size="icon" onClick={() => {
                                                                                    const newItems = page8Data.major_events_text.filter((_: any, i: number) => i !== idx);
                                                                                    setPage8Data({ ...page8Data, major_events_text: newItems });
                                                                                }}>
                                                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                                                </Button>
                                                                            </div>
                                                                        ))}
                                                                        <Button variant="outline" size="sm" className="w-full border-dashed" onClick={() => setPage8Data({ ...page8Data, major_events_text: [...page8Data.major_events_text, ''] })}>
                                                                            <Plus className="h-3 w-3 mr-2" /> Add Item
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                                                    <Clock className="size-5" /> {"Upcoming Events"}
                                                                </h3>
                                                                <div className="space-y-2">
                                                                    {page8Data.upcoming_events_text.map((item: string, idx: number) => (
                                                                        <div key={idx} className="flex gap-2">
                                                                            <Input
                                                                                value={item}
                                                                                onChange={(e) => {
                                                                                    const newItems = [...page8Data.upcoming_events_text];
                                                                                    newItems[idx] = e.target.value;
                                                                                    setPage8Data({ ...page8Data, upcoming_events_text: newItems });
                                                                                }}
                                                                                placeholder="Event description"
                                                                            />
                                                                            <Button variant="ghost" size="icon" onClick={() => {
                                                                                const newItems = page8Data.upcoming_events_text.filter((_: any, i: number) => i !== idx);
                                                                                setPage8Data({ ...page8Data, upcoming_events_text: newItems });
                                                                            }}>
                                                                                <Trash2 className="h-4 w-4 text-destructive" />
                                                                            </Button>
                                                                        </div>
                                                                    ))}
                                                                    <Button variant="outline" size="sm" className="w-full border-dashed" onClick={() => setPage8Data({ ...page8Data, upcoming_events_text: [...page8Data.upcoming_events_text, ''] })}>
                                                                        <Plus className="h-3 w-3 mr-2" /> Add Upcoming Event
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                            <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
                                                                <h3 className="text-lg font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                                                    <FileText className="size-5" /> {"College Brochure"}
                                                                </h3>
                                                                <div className="space-y-4">
                                                                    <ImageUpload
                                                                        label="Brochure Cover Image"
                                                                        value={page8Data.brochure_image}
                                                                        onChange={(url) => setPage8Data({ ...page8Data, brochure_image: url })}
                                                                        folder="home/sidebar"
                                                                    />
                                                                    <div className="space-y-2">
                                                                        <Label className="text-xs font-bold uppercase">Google Drive / View Link</Label>
                                                                        <Input
                                                                            value={page8Data.brochure_link}
                                                                            onChange={(e) => setPage8Data({ ...page8Data, brochure_link: e.target.value })}
                                                                            placeholder="https://drive.google.com/..."
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="bg-red-50/30 p-6 rounded-xl border border-red-100">
                                                                <h3 className="text-lg font-bold text-red-900 mb-6 flex items-center gap-2">
                                                                    <Bell className="size-5" /> Announcements (Fallback)
                                                                </h3>
                                                                <p className="text-[10px] text-red-700/70 mb-4 font-mono uppercase">Note: Global Notices override this section on the live site.</p>
                                                                <VisualEditor
                                                                    value={page8Data.announcements_text}
                                                                    onChange={(val) => setPage8Data({ ...page8Data, announcements_text: val })}
                                                                />
                                                            </div>

                                                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 opacity-60">
                                                                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                                                                    <Calendar className="size-5" /> {"Timeline (Fallback)"}
                                                                </h3>
                                                                <p className="text-[10px] text-slate-500 mb-4 font-mono uppercase italic">Note: Global Activities currently override this timeline on the front-end.</p>
                                                                <div className="space-y-4">
                                                                    {page8Data.month_that_was_items.map((item: any, idx: number) => (
                                                                        <div key={idx} className="p-4 border rounded-lg bg-white relative space-y-4 shadow-sm group">
                                                                            <Button
                                                                                variant="ghost"
                                                                                size="icon"
                                                                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                                                                onClick={() => {
                                                                                    const newItems = page8Data.month_that_was_items.filter((_: any, i: number) => i !== idx);
                                                                                    setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                                }}
                                                                            >
                                                                                <Trash2 className="h-4 w-4 text-destructive" />
                                                                            </Button>
                                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                                <div className="space-y-1">
                                                                                    <Label className="text-[10px] uppercase">Date Label</Label>
                                                                                    <Input
                                                                                        value={item.date}
                                                                                        onChange={(e) => {
                                                                                            const newItems = [...page8Data.month_that_was_items];
                                                                                            newItems[idx] = { ...item, date: e.target.value };
                                                                                            setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                                        }}
                                                                                        placeholder="e.g. Nov 15"
                                                                                    />
                                                                                </div>
                                                                                <div className="space-y-1">
                                                                                    <Label className="text-[10px] uppercase">Event Title</Label>
                                                                                    <Input
                                                                                        value={item.title}
                                                                                        onChange={(e) => {
                                                                                            const newItems = [...page8Data.month_that_was_items];
                                                                                            newItems[idx] = { ...item, title: e.target.value };
                                                                                            setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                                        }}
                                                                                        placeholder="Event name"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="space-y-1">
                                                                                <Label className="text-[10px] uppercase">Description</Label>
                                                                                <Textarea
                                                                                    value={item.text}
                                                                                    onChange={(e) => {
                                                                                        const newItems = [...page8Data.month_that_was_items];
                                                                                        newItems[idx] = { ...item, text: e.target.value };
                                                                                        setPage8Data({ ...page8Data, month_that_was_items: newItems });
                                                                                    }}
                                                                                    className="h-20"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                    <Button variant="outline" className="w-full border-dashed" onClick={() => setPage8Data({ ...page8Data, month_that_was_items: [...page8Data.month_that_was_items, { date: '', title: '', text: '' }] })}>
                                                                        <Plus className="h-4 w-4 mr-2" /> Add Timeline Entry
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {selectedPage === 'home-hero' && (
                                                        <div className="space-y-6">
                                                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                                                    <Star className="size-5" /> {"The RBANM's Experience (List)"}
                                                                </h3>
                                                                {/* Existing Advantages Editor */}
                                                                <div className="space-y-2 mb-6">
                                                                    {homeHeroData.advantages.map((item: string, idx: number) => (
                                                                        <div key={idx} className="flex gap-2">
                                                                            <Input
                                                                                value={item}
                                                                                onChange={(e) => {
                                                                                    const newItems = [...homeHeroData.advantages];
                                                                                    newItems[idx] = e.target.value;
                                                                                    setHomeHeroData({ ...homeHeroData, advantages: newItems });
                                                                                }}
                                                                                className="bg-white"
                                                                            />
                                                                            <Button variant="ghost" size="icon" onClick={() => {
                                                                                const newItems = homeHeroData.advantages.filter((_: any, i: number) => i !== idx);
                                                                                setHomeHeroData({ ...homeHeroData, advantages: newItems });
                                                                            }}>
                                                                                <Trash2 className="h-4 w-4 text-destructive" />
                                                                            </Button>
                                                                        </div>
                                                                    ))}
                                                                    <Button variant="outline" size="sm" className="w-full border-dashed" onClick={() => setHomeHeroData({ ...homeHeroData, advantages: [...homeHeroData.advantages, ''] })}>
                                                                        <Plus className="h-3 w-3 mr-2" /> Add Experience Point
                                                                    </Button>
                                                                </div>
                                                            </div>

                                                            <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
                                                                <h3 className="text-lg font-bold text-purple-900 mb-6 flex items-center gap-2">
                                                                    <FileText className="size-5" /> Featured Magazine
                                                                </h3>
                                                                <div className="space-y-4">
                                                                    <ImageUpload
                                                                        label="Magazine Cover Image"
                                                                        value={homeHeroData.mag_image}
                                                                        onChange={(url) => setHomeHeroData({ ...homeHeroData, mag_image: url })}
                                                                        folder="home/featured"
                                                                    />
                                                                    <div className="space-y-2">
                                                                        <Label>Magazine Link (Google Drive / PDF)</Label>
                                                                        <Input
                                                                            value={homeHeroData.mag_link}
                                                                            onChange={(e) => setHomeHeroData({ ...homeHeroData, mag_link: e.target.value })}
                                                                            placeholder="https://..."
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {selectedPage === 'site-settings' && (
                                                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-8">
                                                            <div className="space-y-4">
                                                                <h3 className="text-lg font-bold border-b pb-2">Institution Details</h3>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div className="space-y-2">
                                                                        <Label>College Name</Label>
                                                                        <Input value={siteSettings.collegeName} onChange={(e) => setSiteSettings({ ...siteSettings, collegeName: e.target.value })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Email Address</Label>
                                                                        <Input value={siteSettings.email} onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Phone Number</Label>
                                                                        <Input value={siteSettings.phone} onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Address</Label>
                                                                        <Input value={siteSettings.address} onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-4">
                                                                <h3 className="text-lg font-bold border-b pb-2">Social Media Links</h3>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div className="space-y-2">
                                                                        <Label>Facebook</Label>
                                                                        <Input value={siteSettings.socialLinks.facebook} onChange={(e) => setSiteSettings({ ...siteSettings, socialLinks: { ...siteSettings.socialLinks, facebook: e.target.value } })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Twitter / X</Label>
                                                                        <Input value={siteSettings.socialLinks.twitter} onChange={(e) => setSiteSettings({ ...siteSettings, socialLinks: { ...siteSettings.socialLinks, twitter: e.target.value } })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Instagram</Label>
                                                                        <Input value={siteSettings.socialLinks.instagram} onChange={(e) => setSiteSettings({ ...siteSettings, socialLinks: { ...siteSettings.socialLinks, instagram: e.target.value } })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>LinkedIn</Label>
                                                                        <Input value={siteSettings.socialLinks.linkedin} onChange={(e) => setSiteSettings({ ...siteSettings, socialLinks: { ...siteSettings.socialLinks, linkedin: e.target.value } })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>YouTube</Label>
                                                                        <Input value={siteSettings.socialLinks.youtube} onChange={(e) => setSiteSettings({ ...siteSettings, socialLinks: { ...siteSettings.socialLinks, youtube: e.target.value } })} />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Bluesky</Label>
                                                                        <Input value={siteSettings.socialLinks.bluesky} onChange={(e) => setSiteSettings({ ...siteSettings, socialLinks: { ...siteSettings.socialLinks, bluesky: e.target.value } })} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-4">
                                                                <h3 className="text-lg font-bold border-b pb-2">Footer Section Titles</h3>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div className="space-y-2">
                                                                        <Label>Quick Links Title</Label>
                                                                        <Input value={siteSettings.footerTitles?.quickLinks} onChange={(e) => setSiteSettings({ ...siteSettings, footerTitles: { ...siteSettings.footerTitles, quickLinks: e.target.value } })} placeholder="Quick Links" />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Campus Title</Label>
                                                                        <Input value={siteSettings.footerTitles?.campus} onChange={(e) => setSiteSettings({ ...siteSettings, footerTitles: { ...siteSettings.footerTitles, campus: e.target.value } })} placeholder="Campus" />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Contact Title</Label>
                                                                        <Input value={siteSettings.footerTitles?.contact} onChange={(e) => setSiteSettings({ ...siteSettings, footerTitles: { ...siteSettings.footerTitles, contact: e.target.value } })} placeholder="Contact Us" />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Social Media Title</Label>
                                                                        <Input value={siteSettings.footerTitles?.social} onChange={(e) => setSiteSettings({ ...siteSettings, footerTitles: { ...siteSettings.footerTitles, social: e.target.value } })} placeholder="Social Media" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </TabsContent>
                                            </Tabs>

                                            <div className="flex justify-end pt-8 border-t mt-8 sticky bottom-0 bg-white/80 py-4 backdrop-blur-sm z-20">
                                                <Button size="lg" className="shadow-xl px-12" onClick={handleSavePage} disabled={loading}>
                                                    <Save className="h-4 w-4 mr-2" /> {loading ? 'Saving Changes...' : 'Save All Changes'}
                                                </Button>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
