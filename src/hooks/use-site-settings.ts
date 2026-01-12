import { useState, useEffect } from 'react';

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
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/site-content?section=site-settings');
                const data = await res.json();
                if (data.data) {
                    setSettings(data.data);
                }
            } catch (error) {
                console.error('Error fetching site settings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    return { settings, loading };
}
