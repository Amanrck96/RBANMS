'use client';

// User management page (super admin only)
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus, Shield, Trash2, Loader2, RefreshCw } from 'lucide-react';
import { hasPermission } from '@/lib/auth-utils';
import { useToast } from '@/hooks/use-toast';

export default function UsersPage() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [users, setUsers] = useState<any[]>([]);
    const [fetching, setFetching] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [role, setRole] = useState<'admin' | 'super_admin'>('admin');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user && hasPermission(user, 'canManageUsers')) {
            fetchUsers();
        }
    }, [user]);

    const fetchUsers = async () => {
        setFetching(true);
        try {
            const token = await auth?.currentUser?.getIdToken();
            const res = await fetch('/api/users', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.users) setUsers(data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setFetching(false);
        }
    };

    if (!user || !hasPermission(user, 'canManageUsers')) {
        return (
            <div className="text-center py-12">
                <Shield size={48} className="mx-auto text-gray-400 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
                <p className="text-gray-500">
                    You don&apos;t have permission to access this page.
                </p>
            </div>
        );
    }

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const token = await auth?.currentUser?.getIdToken();
            const response = await fetch('/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ email, password, role, displayName }),
            });

            const data = await response.json();

            if (response.ok) {
                toast({ title: 'Success', description: 'User created' });
                setEmail('');
                setPassword('');
                setDisplayName('');
                setRole('admin');
                fetchUsers();
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error: any) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteUser = async (uid: string) => {
        if (uid === user.uid) {
            toast({ title: 'Error', description: 'You cannot delete yourself', variant: 'destructive' });
            return;
        }
        if (!confirm('Are you sure you want to delete this user? This will remove their access to the admin panel.')) return;

        setLoading(true);
        try {
            const token = await auth?.currentUser?.getIdToken();
            const response = await fetch(`/api/users?uid=${uid}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                toast({ title: 'Deleted', description: 'User removed successfully' });
                fetchUsers();
            } else {
                const data = await response.json();
                toast({ title: 'Error', description: data.error, variant: 'destructive' });
            }
        } catch (error: any) {
            toast({ title: 'Error', description: error.message, variant: 'destructive' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
                    <p className="text-gray-500 mt-1">Create and manage admin users</p>
                </div>
                <Button variant="outline" size="sm" onClick={fetchUsers} disabled={fetching}>
                    {fetching ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : <RefreshCw className="h-4 w-4 mr-2" />}
                    Refresh List
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Existing Admins</CardTitle>
                            <CardDescription>Members with access to this panel</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {users.length === 0 && !fetching && (
                                    <p className="text-center text-sm text-muted-foreground py-4">No users found.</p>
                                )}
                                {users.map((u) => (
                                    <div key={u.uid} className="flex items-center justify-between p-3 border rounded-lg bg-white shadow-sm">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm">{u.displayName || 'No Name'}</span>
                                            <span className="text-xs text-muted-foreground">{u.email}</span>
                                            <span className="text-[10px] mt-1 inline-block bg-slate-100 px-2 py-0.5 rounded uppercase font-bold text-slate-600 w-fit">
                                                {u.role.replace('_', ' ')}
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-destructive hover:bg-red-50"
                                            onClick={() => handleDeleteUser(u.uid)}
                                            disabled={u.uid === user.uid || loading}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-sm">Security Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <p className="text-blue-800">
                                <strong>Super Admins</strong> have full control over the website, including content, users, and settings.
                            </p>
                            <p className="text-blue-800">
                                <strong>Admins</strong> can manage blog posts and upload images, but cannot manage users or site-wide layouts.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create New User</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleCreateUser} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="user@example.com"
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="displayName">Display Name</Label>
                                    <Input
                                        id="displayName"
                                        value={displayName}
                                        onChange={(e) => setDisplayName(e.target.value)}
                                        placeholder="John Doe"
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Password *</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        disabled={loading}
                                        minLength={6}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="role">Role *</Label>
                                    <Select value={role} onValueChange={(value: any) => setRole(value)} disabled={loading}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="admin">Admin</SelectItem>
                                            <SelectItem value="super_admin">Super Admin</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {message && (
                                    <div className="p-3 text-xs rounded bg-red-50 text-red-800 border border-red-100">
                                        {message}
                                    </div>
                                )}

                                <Button type="submit" className="w-full" disabled={loading}>
                                    <UserPlus size={16} className="mr-2" />
                                    {loading ? 'Creating...' : 'Create Admin'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
