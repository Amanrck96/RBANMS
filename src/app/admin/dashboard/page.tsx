'use client';

// Admin dashboard home page
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Shield, Upload } from 'lucide-react';
import { getPermissions } from '@/lib/auth-utils';

export default function DashboardPage() {
    const { user } = useAuth();

    if (!user) return null;

    const permissions = getPermissions(user.role);

    const stats = [
        {
            name: 'Create Posts',
            icon: FileText,
            enabled: permissions.canCreatePosts,
            description: 'Write and publish new blog posts'
        },
        {
            name: 'Edit Posts',
            icon: FileText,
            enabled: permissions.canEditPosts,
            description: 'Modify existing post content and images'
        },
        {
            name: 'Upload Images',
            icon: Upload,
            enabled: permissions.canUploadImages,
            description: 'Upload images for posts'
        },
        {
            name: 'Manage Users',
            icon: Users,
            enabled: permissions.canManageUsers,
            description: 'Create and manage admin users'
        },
        {
            name: 'Full Access',
            icon: Shield,
            enabled: permissions.canEditAnyContent,
            description: 'Edit all website content'
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">
                    Welcome back, {user.displayName || user.email}
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card
                            key={stat.name}
                            className={stat.enabled ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}
                        >
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.name}
                                </CardTitle>
                                <Icon
                                    className={stat.enabled ? 'text-green-600' : 'text-gray-400'}
                                    size={20}
                                />
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-gray-600">
                                    {stat.description}
                                </div>
                                <div className={`mt-2 text-xs font-semibold ${stat.enabled ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {stat.enabled ? '✓ Enabled' : '✗ Not Available'}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Your Role: {user.role.replace('_', ' ').toUpperCase()}</CardTitle>
                    <CardDescription>
                        {user.role === 'super_admin'
                            ? 'You have full access to all features and can manage everything on the website.'
                            : 'You can create and edit blog posts, and upload images.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-sm">Permissions:</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {permissions.canCreatePosts && <li>Create new blog posts</li>}
                            {permissions.canEditPosts && <li>Edit post content and images</li>}
                            {permissions.canUploadImages && <li>Upload and manage images</li>}
                            {permissions.canDeletePosts && <li>Delete posts</li>}
                            {permissions.canManageUsers && <li>Create and manage admin users</li>}
                            {permissions.canManageSettings && <li>Modify site settings</li>}
                            {permissions.canEditAnyContent && <li>Edit any website content</li>}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
