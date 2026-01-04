// User and role type definitions
export type UserRole = 'super_admin' | 'admin';

export interface User {
    uid: string;
    email: string;
    role: UserRole;
    displayName?: string;
    needsPasswordChange?: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    imageUrl?: string;
    authorId: string;
    authorName: string;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    slug: string;
}

export interface Permission {
    canEditPosts: boolean;
    canDeletePosts: boolean;
    canCreatePosts: boolean;
    canManageUsers: boolean;
    canManageSettings: boolean;
    canUploadImages: boolean;
    canEditAnyContent: boolean;
}

// Permission sets for each role
export const ROLE_PERMISSIONS: Record<UserRole, Permission> = {
    super_admin: {
        canEditPosts: true,
        canDeletePosts: true,
        canCreatePosts: true,
        canManageUsers: true,
        canManageSettings: true,
        canUploadImages: true,
        canEditAnyContent: true,
    },
    admin: {
        canEditPosts: true,
        canDeletePosts: false,
        canCreatePosts: true,
        canManageUsers: false,
        canManageSettings: false,
        canUploadImages: true,
        canEditAnyContent: false,
    },
};
