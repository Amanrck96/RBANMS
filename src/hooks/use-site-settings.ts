import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase-client';
import { doc, onSnapshot } from 'firebase/firestore';

export interface SiteSettings {
    collegeName: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    establishedYear: string;
    accreditation: string;
    affiliation: string;
    logoUrl?: string;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
        youtube?: string;
        pinterest?: string;
        bluesky?: string;
    };
}

export function useSiteSettings() {
    const [settings, setSettings] = useState<SiteSettings | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!db) {
            setLoading(false);
            return;
        }

        const docRef = doc(db, 'site-content', 'page-site-settings');

        const unsubscribe = onSnapshot(
            docRef,
            (snapshot) => {
                if (snapshot.exists()) {
                    setSettings(snapshot.data() as SiteSettings);
                } else {
                    setSettings(null);
                }
                setLoading(false);
            },
            (error) => {
                console.error('Real-time settings listener error:', error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    return { settings, loading };
}
