'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, Save, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ManageContentPage() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    // Notices State
    const [notices, setNotices] = useState<string[]>([]);

    // Activities State
    const [activities, setActivities] = useState<{ title: string, date: string, description: string }[]>([]);

    useEffect(() => {
        if (user) {
            fetchContent();
        }
    }, [user]);

    const fetchContent = async () => {
        setFetching(true);
        try {
            // Fetch Notices
            const noticesRes = await fetch('/api/site-content?section=notices');
            const noticesData = await noticesRes.json();
            if (noticesData.data?.items) {
                setNotices(noticesData.data.items);
            }

            // Fetch Activities
            const activitiesRes = await fetch('/api/site-content?section=activities');
            const activitiesData = await activitiesRes.json();
            if (activitiesData.data?.items) {
                setActivities(activitiesData.data.items);
            }
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setFetching(false);
        }
    };

    const handleSaveNotices = async () => {
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
                    section: 'notices',
                    data: { items: notices }
                })
            });

            if (res.ok) {
                toast({ title: 'Success', description: 'Notices updated successfully' });
            } else {
                throw new Error('Failed to update');
            }
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to update notices', variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    const handleSaveActivities = async () => {
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
                    section: 'activities',
                    data: { items: activities }
                })
            });

            if (res.ok) {
                toast({ title: 'Success', description: 'Activities updated successfully' });
            } else {
                throw new Error('Failed to update');
            }
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to update activities', variant: 'destructive' });
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
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold">Manage Site Content</h1>
                <p className="text-muted-foreground mt-1">Update global sections like Notices and Monthly Activities.</p>
            </div>

            {/* Notices Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Homepage Notices</CardTitle>
                    <CardDescription>These items appear in the "Notice" section on the home page.</CardDescription>
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
                        <Button size="sm" onClick={handleSaveNotices} disabled={loading}>
                            <Save className="h-4 w-4 mr-2" /> Save Notices
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* The Month That Was Card */}
            <Card>
                <CardHeader>
                    <CardTitle>The Month That Was</CardTitle>
                    <CardDescription>Update latest activities and events.</CardDescription>
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
                                        placeholder="e.g. National Science Day"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Date</Label>
                                    <Input
                                        value={activity.date}
                                        onChange={(e) => updateActivity(index, 'date', e.target.value)}
                                        placeholder="e.g. February 28, 2025"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <Textarea
                                    value={activity.description}
                                    onChange={(e) => updateActivity(index, 'description', e.target.value)}
                                    placeholder="Brief description of the event..."
                                />
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between pt-2">
                        <Button variant="outline" size="sm" onClick={addActivity}>
                            <Plus className="h-4 w-4 mr-2" /> Add Activity
                        </Button>
                        <Button size="sm" onClick={handleSaveActivities} disabled={loading}>
                            <Save className="h-4 w-4 mr-2" /> Save Activities
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
