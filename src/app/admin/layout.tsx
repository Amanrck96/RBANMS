'use client';

// Admin dashboard layout with navigation
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import Link from 'next/link';
import { hasPermission } from '@/lib/auth-utils';
import { PasswordChangeForm } from '@/components/admin/password-change-form';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { user, loading, signOut } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        if (!loading && !user) {
            router.push('/admin/login');
        }
    }, [user, loading, router]);

    const isLoginPage = pathname === '/admin/login';

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    // Allow login page to render without a user
    if (isLoginPage) {
        return <>{children}</>;
    }

    if (!user) {
        return null;
    }

    const navigation = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard, show: true },
        { name: 'Manage Content', href: '/admin/manage-content', icon: FileText, show: hasPermission(user, 'canEditAnyContent') },
        { name: 'Posts', href: '/admin/posts', icon: FileText, show: hasPermission(user, 'canEditPosts') },
        { name: 'Users', href: '/admin/users', icon: Users, show: hasPermission(user, 'canManageUsers') },
        { name: 'Settings', href: '/admin/settings', icon: Settings, show: hasPermission(user, 'canManageSettings') },
    ].filter(item => item.show);

    const handleSignOut = async () => {
        await signOut();
        router.push('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-blue-700">
                        <h1 className="text-xl font-bold">Admin Panel</h1>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-1 hover:bg-blue-700 rounded"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* User Info */}
                    <div className="p-4 border-b border-blue-700">
                        <div className="text-sm text-blue-200">Logged in as</div>
                        <div className="font-medium truncate">{user.email}</div>
                        <div className="text-xs text-blue-300 mt-1 uppercase">
                            {user.role.replace('_', ' ')}
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-700 text-white'
                                        : 'text-blue-100 hover:bg-blue-700/50'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Sign Out */}
                    <div className="p-4 border-t border-blue-700">
                        <Button
                            onClick={handleSignOut}
                            variant="ghost"
                            className="w-full justify-start text-blue-100 hover:bg-blue-700 hover:text-white"
                        >
                            <LogOut size={20} className="mr-3" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div
                className={`transition-all duration-200 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'
                    }`}
            >
                {/* Top Bar */}
                <header className="bg-white border-b border-gray-200 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <Menu size={20} />
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800">
                            RBANM&apos;s First Grade College
                        </h2>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {user.needsPasswordChange ? (
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <PasswordChangeForm
                                uid={user.uid}
                                onComplete={() => window.location.reload()}
                            />
                        </div>
                    ) : (
                        children
                    )}
                </main>
            </div>
        </div>
    );
}
