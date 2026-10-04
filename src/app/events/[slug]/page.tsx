'use client';

import { useState, useEffect, useMemo, use } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, ChevronLeft, ChevronRight, Maximize2, X, Images } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/types/user';

export default function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [event, setEvent] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

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

    const eventImages: string[] = useMemo(() => {
        if (!event) return [];
        if (Array.isArray(event.images) && event.images.length > 0) {
            return event.images.filter(img => typeof img === 'string' && img.trim().length > 0);
        }
        if (event.imageUrl && event.imageUrl.trim()) return [event.imageUrl.trim()];
        return [];
    }, [event]);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + eventImages.length) % eventImages.length);
            if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % eventImages.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, eventImages.length]);

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
                        {/* Cover Image Banner (Original Clean Layout) */}
                        {(() => {
                            const coverImg = event.imageUrl || (eventImages.length > 0 ? eventImages[0] : '');
                            if (!coverImg) return null;
                            return (
                                <div className="aspect-video w-full overflow-hidden bg-gray-200">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={coverImg}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            );
                        })()}

                        <CardHeader className="space-y-4 pt-10 px-8">
                            <CardTitle className="text-4xl text-primary font-headline">{event.title}</CardTitle>

                            {event.primaryTag && (
                                <div className="pt-2">
                                    <Link
                                        href={`/events?category=${encodeURIComponent(event.primaryTag)}`}
                                        className="inline-block text-xs uppercase tracking-wider font-extrabold bg-[#800000] hover:bg-[#990000] text-white px-3.5 py-1 rounded-md shadow-sm transition-colors"
                                        style={{ backgroundColor: '#800000', color: '#ffffff' }}
                                    >
                                        {event.primaryTag}
                                    </Link>
                                </div>
                            )}


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
                                {((event.tags && Array.isArray(event.tags)) ? event.tags : (event.department ? [event.department] : [])).filter(t => t !== 'general').map(t => {
                                    const tagObj = [
                                        { id: 'arts', label: 'Arts' },
                                        { id: 'commerce', label: 'Commerce' },
                                        { id: 'computer-applications', label: 'Computer Applications (BCA)' },
                                        { id: 'english', label: 'English' },
                                        { id: 'languages', label: 'Languages' },
                                        { id: 'hindi', label: 'Hindi' },
                                        { id: 'kannada', label: 'Kannada' },
                                        { id: 'anrc', label: 'ANRC' },
                                        { id: 'management', label: 'Management (BBA)' },
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
                                        { id: 'ipc', label: 'Internal Placement Cell (IPC)' },
                                        { id: 'yrc-scouts', label: 'YRC & Scouts' },
                                        { id: 'statutory', label: 'Statutory Cell' },
                                        { id: 'bca-forum', label: 'BCA Forum' },
                                        { id: 'commerce-forum', label: 'Commerce Forum' },
                                        { id: 'management-forum', label: 'Management Forum' },
                                        { id: 'literary-forum', label: 'Literary Forum' },
                                        { id: 'languages-forum', label: 'Languages Forum' },
                                        { id: 'other', label: 'Other' }
                                    ].find(x => x.id === t);
                                    if (!tagObj) return null;
                                    return (
                                        <div key={t} className="flex items-center gap-2">
                                            <span className="text-xs uppercase tracking-wider font-bold bg-[#800000]/10 text-[#800000] px-3 py-1 rounded-full">
                                                {tagObj.label}
                                            </span>
                                        </div>
                                    );
                                })}
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

                            {/* Event Photo Gallery Grid */}
                            {eventImages.length > 1 && (
                                <div className="mt-12 pt-8 border-t border-slate-200">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 font-headline flex items-center gap-2">
                                                <Images className="h-6 w-6 text-[#800000]" />
                                                Event Photo Gallery
                                            </h3>
                                            <p className="text-sm text-slate-500 mt-1">
                                                Captured moments and photographs from this event. Click any photo to view in high resolution.
                                            </p>
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider bg-[#800000] text-white px-3.5 py-1.5 rounded-full shadow-sm self-start sm:self-auto">
                                            {eventImages.length} Photos
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {eventImages.map((imgUrl, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    setLightboxIndex(idx);
                                                    setLightboxOpen(true);
                                                }}
                                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-lg cursor-pointer transition-all hover:-translate-y-0.5"
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={imgUrl}
                                                    alt={`${event.title} photo ${idx + 1}`}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                                                    <span className="text-white text-xs font-bold flex items-center gap-1.5">
                                                        <Maximize2 className="w-3.5 h-3.5 text-[#FFD700]" /> View Photo
                                                    </span>
                                                    <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                                        #{idx + 1}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </article>
            </main>

            {/* Fullscreen Lightbox Modal */}
            {lightboxOpen && eventImages.length > 0 && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4"
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Top Bar */}
                    <div
                        className="flex items-center justify-between text-white p-2 border-b border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-[#FFD700] truncate max-w-xs sm:max-w-md">
                                {event.title}
                            </span>
                            <span className="text-xs text-white/70 bg-white/10 px-2.5 py-1 rounded-full font-semibold">
                                {lightboxIndex + 1} / {eventImages.length}
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setLightboxOpen(false)}
                            className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                            title="Close (Esc)"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Main Image Area with Prev/Next */}
                    <div
                        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={eventImages[lightboxIndex]}
                            alt={`Photo ${lightboxIndex + 1}`}
                            className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
                        />

                        {eventImages.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    onClick={() => setLightboxIndex(prev => (prev - 1 + eventImages.length) % eventImages.length)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#800000] text-white flex items-center justify-center transition-all shadow-xl"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLightboxIndex(prev => (prev + 1) % eventImages.length)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#800000] text-white flex items-center justify-center transition-all shadow-xl"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Bottom Thumbnails Strip */}
                    {eventImages.length > 1 && (
                        <div
                            className="flex items-center justify-center gap-2 overflow-x-auto py-2 border-t border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {eventImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setLightboxIndex(idx)}
                                    className={`h-12 w-16 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                                        idx === lightboxIndex
                                            ? 'border-[#FFD700] scale-110 ring-2 ring-[#800000]'
                                            : 'border-white/20 opacity-50 hover:opacity-100'
                                    }`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
