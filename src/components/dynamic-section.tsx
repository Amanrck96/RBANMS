'use client';

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

interface DynamicSectionProps {
    pageId: string;
    defaultTitle?: string;
    defaultContent?: React.ReactNode;
    defaultImageUrl?: string;
    render?: (data: { title: string; content: string; imageUrl?: string }) => React.ReactNode;
    onlyContent?: boolean; // New prop to return only the HTML content
}

export function DynamicSection({ pageId, defaultTitle, defaultContent, defaultImageUrl, render, onlyContent }: DynamicSectionProps) {
    const [data, setData] = useState<{ title: string; content: string; imageUrl?: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchContent() {
            try {
                const res = await fetch(`/api/site-content?section=page-${pageId}`);
                const json = await res.json();
                if (json.data) {
                    setData(json.data);
                }
            } catch (error) {
                console.error('Failed to load dynamic content:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchContent();
    }, [pageId]);

    if (loading) {
        return (
            <div className="flex justify-center py-4">
                <Loader2 className="animate-spin text-primary size-5" />
            </div>
        );
    }

    if (render) {
        return <>{render(data || {} as any)}</>;
    }

    if (onlyContent && data?.content) {
        return <div dangerouslySetInnerHTML={{ __html: data.content }} />;
    }

    const currentTitle = data?.title || defaultTitle;
    const currentContent = data?.content;
    const currentImageUrl = data?.imageUrl || defaultImageUrl;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className={`${currentImageUrl ? 'md:col-span-8' : 'md:col-span-12'} space-y-6`}>
                    {currentTitle && (
                        <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline border-b pb-2">
                            {currentTitle}
                        </h1>
                    )}
                    {currentContent ? (
                        <div
                            className="prose prose-lg max-w-none text-foreground/80 space-y-4"
                            dangerouslySetInnerHTML={{ __html: currentContent }}
                        />
                    ) : (
                        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                            {defaultContent}
                        </div>
                    )}
                </div>

                {currentImageUrl && (
                    <div className="md:col-span-4 space-y-4">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden border shadow-sm">
                            <Image
                                src={currentImageUrl}
                                alt={currentTitle || "Featured Image"}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
