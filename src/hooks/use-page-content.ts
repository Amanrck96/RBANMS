import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase-client';
import { doc, onSnapshot } from 'firebase/firestore';

export function usePageContent(pageId: string) {
    const [data, setData] = useState<{ title?: string; content?: string; imageUrl?: string; tagline?: string; badgeText?: string;[key: string]: any } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!db) {
            setLoading(false);
            return;
        }

        const docRef = doc(db, 'site-content', `page-${pageId}`);

        const unsubscribe = onSnapshot(
            docRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.data());
                } else {
                    setData(null);
                }
                setLoading(false);
            },
            (error) => {
                console.error(`Real-time listener error for page-${pageId}:`, error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [pageId]);

    return { data, loading };
}
