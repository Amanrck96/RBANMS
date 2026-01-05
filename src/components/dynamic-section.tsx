'use client';

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface DynamicSectionProps {
    pageId: string;
    defaultTitle?: string;
    defaultContent?: React.ReactNode;
    render?: (data: { title: string; content: string }) => React.ReactNode;
}

export function DynamicSection({ pageId, defaultTitle, defaultContent, render }: DynamicSectionProps) {
    const [data, setData] = useState<{ title: string; content: string } | null>(null);
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
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-primary" />
            </div>
        );
    }

    if (render && data) {
        return <>{render(data)}</>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary font-headline border-b pb-2">
                {data?.title || defaultTitle}
            </h1>
            <div
                className="prose prose-lg max-w-none text-foreground/80 space-y-4"
                dangerouslySetInnerHTML={data?.content ? { __html: data.content } : undefined}
            >
                {!data?.content && defaultContent}
            </div>
        </div>
    );
}
