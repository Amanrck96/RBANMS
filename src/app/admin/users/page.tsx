'use client';

// User management page (super admin only)
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus, Shield } from 'lucide-react';
import { hasPermission } from '@/lib/auth-utils';

export default function UsersPage() {
    const { user } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [role, setRole] = useState<'admin' | 'super_admin'>('admin');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

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
                setMessage(`User created successfully: ${data.user.email}`);
                setEmail('');
                setPassword('');
                setDisplayName('');
                setRole('admin');
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error: any) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
                <p className="text-gray-500 mt-1">Create and manage admin users</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Create New User</CardTitle>
                    <CardDescription>
                        Add a new admin or super admin user to the system
                    </CardDescription>
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
                            <p className="text-xs text-gray-500">
                                Password must be at least 6 characters
                            </p>
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
                            <p className="text-xs text-gray-500">
                                {role === 'admin'
                                    ? 'Can create and edit posts, upload images'
                                    : 'Full access to all features including user management'}
                            </p>
                        </div>

                        {message && (
                            <div className={`p-3 text-sm rounded-md ${message.startsWith('Error')
                                ? 'bg-red-100 text-red-800 border border-red-200'
                                : 'bg-green-100 text-green-800 border border-green-200'
                                }`}>
                                {message}
                            </div>
                        )}

                        <Button type="submit" disabled={loading}>
                            <UserPlus size={16} className="mr-2" />
                            {loading ? 'Creating...' : 'Create User'}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                    <CardTitle className="text-sm">Role Permissions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <div>
                        <h4 className="font-semibold text-blue-900">Admin:</h4>
                        <ul className="list-disc list-inside text-blue-800 space-y-1 mt-1">
                            <li>Create and edit blog posts</li>
                            <li>Upload images</li>
                            <li>Change text and images in posts</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-900">Super Admin:</h4>
                        <ul className="list-disc list-inside text-blue-800 space-y-1 mt-1">
                            <li>All admin permissions</li>
                            <li>Delete posts</li>
                            <li>Create and manage users</li>
                            <li>Edit any website content</li>
                            <li>Access settings</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
