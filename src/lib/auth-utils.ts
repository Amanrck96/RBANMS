// Authentication utility functions
import { User, UserRole, ROLE_PERMISSIONS, Permission } from '@/types/user';

/**
 * Get permissions for a specific role
 */
export function getPermissions(role: UserRole): Permission {
    return ROLE_PERMISSIONS[role];
}

/**
 * Check if a user has a specific permission
 */
export function hasPermission(user: User | null, permission: keyof Permission): boolean {
    if (!user) return false;
    const permissions = getPermissions(user.role);
    return permissions[permission];
}

/**
 * Check if user is super admin
 */
export function isSuperAdmin(user: User | null): boolean {
    return user?.role === 'super_admin';
}

/**
 * Check if user is admin or super admin
 */
export function isAdmin(user: User | null): boolean {
    return user?.role === 'admin' || user?.role === 'super_admin';
}

/**
 * Generate a URL-friendly slug from a title
 */
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}
