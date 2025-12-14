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

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Your Role: {user.role.replace('_', ' ').toUpperCase()}</CardTitle>
                        <CardDescription>
                            {user.role === 'super_admin'
                                ? 'You have full control and can edit anything on the website.'
                                : 'You have limited access focused on content management.'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-sm mb-2">Current Permissions:</h3>
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
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Role Access Overview</CardTitle>
                        <CardDescription>
                            Understanding the security levels
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div>
                            <span className="font-bold text-blue-900">Super Admin</span>
                            <p className="text-gray-600 mt-1">
                                Full access; can edit pages, settings, layouts, and users. Has full control over everything on the website.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold text-blue-900">Admin</span>
                            <p className="text-gray-600 mt-1">
                                Limited access; can upload blogs and edit post text & images only. Cannot change website settings or layouts.
                            </p>
                        </div>
                        <div className="pt-2 border-t mt-2">
                            <p className="text-gray-500 text-xs italic">
                                Both roles are provided free of charge. This separation of duties keeps the website secure and helps prevent accidental changes.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
