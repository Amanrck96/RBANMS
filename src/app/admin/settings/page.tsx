'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Mail, Phone, Globe, MapPin, Building } from 'lucide-react';
import { auth } from '@/lib/firebase-client';

type SiteSettings = {
    collegeName: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    establishedYear: string;
    accreditation: string;
    affiliation: string;
};

export default function SettingsPage() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [settings, setSettings] = useState<SiteSettings>({
        collegeName: "RBANMS First Grade College",
        email: "info@rbanmsfgc.edu.in",
        phone: "+91-80-XXXXXXXX",
        address: "Palace Road, Bangalore",
        website: "www.rbanmsfgc.edu.in",
        establishedYear: "1983",
        accreditation: "NAAC Accredited",
        affiliation: "Bangalore City University"
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/site-content?section=site-settings');
            const data = await res.json();
            if (data.data) {
                setSettings(data.data);
            }
        } catch (error) {
            console.error('Error fetching settings:', error);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const token = await auth.currentUser?.getIdToken();
            const res = await fetch('/api/site-content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    section: 'site-settings',
                    data: settings
                })
            });

            if (res.ok) {
                toast({
                    title: 'Success',
                    description: 'Settings updated successfully'
                });
            } else {
                throw new Error('Failed to update settings');
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to update settings',
                variant: 'destructive'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                        <Settings className="h-8 w-8" />
                        Site Settings
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Manage your college information and contact details
                    </p>
                </div>
            </div>

            <Tabs defaultValue="general" className="w-full">
                <TabsList>
                    <TabsTrigger value="general">General Information</TabsTrigger>
                    <TabsTrigger value="contact">Contact Details</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Building className="h-5 w-5" />
                                College Information
                            </CardTitle>
                            <CardDescription>
                                Update basic information about your college
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4">
                                <div>
                                    <Label htmlFor="collegeName">College Name</Label>
                                    <Input
                                        id="collegeName"
                                        value={settings.collegeName}
                                        onChange={(e) => setSettings({ ...settings, collegeName: e.target.value })}
                                        placeholder="Enter college name"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="establishedYear">Established Year</Label>
                                        <Input
                                            id="establishedYear"
                                            value={settings.establishedYear}
                                            onChange={(e) => setSettings({ ...settings, establishedYear: e.target.value })}
                                            placeholder="e.g., 1983"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="accreditation">Accreditation</Label>
                                        <Input
                                            id="accreditation"
                                            value={settings.accreditation}
                                            onChange={(e) => setSettings({ ...settings, accreditation: e.target.value })}
                                            placeholder="e.g., NAAC Accredited"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="affiliation">University Affiliation</Label>
                                    <Input
                                        id="affiliation"
                                        value={settings.affiliation}
                                        onChange={(e) => setSettings({ ...settings, affiliation: e.target.value })}
                                        placeholder="e.g., Bangalore City University"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="contact" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Phone className="h-5 w-5" />
                                Contact Information
                            </CardTitle>
                            <CardDescription>
                                Update contact details displayed across the website
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4">
                                <div>
                                    <Label htmlFor="email" className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={settings.email}
                                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                                        placeholder="info@college.edu"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        Phone Number
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={settings.phone}
                                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                                        placeholder="+91-80-XXXXXXXX"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="address" className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        Address
                                    </Label>
                                    <Input
                                        id="address"
                                        value={settings.address}
                                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                                        placeholder="Enter complete address"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="website" className="flex items-center gap-2">
                                        <Globe className="h-4 w-4" />
                                        Website URL
                                    </Label>
                                    <Input
                                        id="website"
                                        type="url"
                                        value={settings.website}
                                        onChange={(e) => setSettings({ ...settings, website: e.target.value })}
                                        placeholder="www.college.edu"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end">
                <Button
                    onClick={handleSave}
                    disabled={loading}
                    size="lg"
                    className="min-w-[200px]"
                >
                    {loading ? 'Saving...' : 'Save Settings'}
                </Button>
            </div>
        </div>
    );
}
