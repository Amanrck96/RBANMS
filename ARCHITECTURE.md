# RBAC System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   ┌────────┐          ┌──────────┐         ┌──────────┐
   │ Public │          │  Admin   │         │  Login   │
   │  Blog  │          │Dashboard │         │   Page   │
   └────────┘          └──────────┘         └──────────┘
        │                     │                     │
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │   useAuth Hook   │
                    │  (Auth Context)  │
                    └──────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
        ┌───────────────┐         ┌─────────────────┐
        │   Firebase    │         │   Next.js API   │
        │ Authentication│◄────────┤     Routes      │
        └───────────────┘         └─────────────────┘
                                          │
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
                    ▼                     ▼                     ▼
              ┌──────────┐         ┌──────────┐         ┌──────────┐
              │  /users  │         │  /posts  │         │ /upload  │
              │  create  │         │   CRUD   │         │  images  │
              └──────────┘         └──────────┘         └──────────┘
                    │                     │                     │
                    └─────────────────────┼─────────────────────┘
                                          │
                                          ▼
                                  ┌───────────────┐
                                  │   Firebase    │
                                  │   Firestore   │
                                  │   Database    │
                                  └───────────────┘
```

## Data Flow

### Authentication Flow
```
1. User enters credentials
   └──> useAuth.signIn(email, password)
        └──> Firebase Auth (createUserWithEmailAndPassword)
             └──> Token generated
                  └──> User data fetched from Firestore
                       └──> Context updated
                            └──> Redirect to Dashboard
```

### Authorization Flow
```
1. User attempts protected action
   └──> Get current user from context
        └──> Check permissions (hasPermission)
             ├──> If authorized: Proceed
             └──> If not: Show error / redirect
```

### Post Creation Flow
```
1. Admin fills post form
   └──> Submit to POST /api/posts
        └──> Verify Firebase token
             └──> Check user role (admin or super_admin)
                  └──> Create post in Firestore
                       └──> Return success
                            └──> Redirect to posts list
```

## Database Schema

### Firestore Collections

#### users/
```javascript
{
  uid: string,              // Firebase Auth UID
  email: string,            // User email
  role: "super_admin" | "admin",
  displayName: string,      // User's display name
  createdAt: string,        // ISO 8601 timestamp
  updatedAt: string         // ISO 8601 timestamp
}
```

#### posts/
```javascript
{
  id: string,               // Auto-generated ID
  title: string,            // Post title
  content: string,          // Full post content
  excerpt: string,          // Short summary
  imageUrl: string,         // Optional image URL
  authorId: string,         // User UID
  authorName: string,       // Author display name
  createdAt: string,        // ISO 8601 timestamp
  updatedAt: string,        // ISO 8601 timestamp
  published: boolean,       // Publication status
  slug: string              // URL-friendly slug
}
```

## Permission System

### Role Hierarchy
```
super_admin (highest privileges)
    │
    ├── canEditAnyContent: true
    ├── canManageUsers: true
    ├── canManageSettings: true
    ├── canDeletePosts: true
    ├── canCreatePosts: true
    ├── canEditPosts: true
    └── canUploadImages: true

admin (limited privileges)
    │
    ├── canEditAnyContent: false
    ├── canManageUsers: false
    ├── canManageSettings: false
    ├── canDeletePosts: false
    ├── canCreatePosts: true
    ├── canEditPosts: true
    └── canUploadImages: true
```

### Permission Checks
```typescript
// In UI components
if (hasPermission(user, 'canDeletePosts')) {
  // Show delete button
}

// In API routes
if (userData?.role !== 'super_admin') {
  return 403 Forbidden
}
```

## API Endpoints

### Authentication
```
POST /api/auth/verify
├── Input: { token: string }
├── Auth: Required (Firebase token)
├── Returns: User data
└── Used by: Initial auth check
```

### User Management
```
POST /api/users/create
├── Input: { email, password, role, displayName }
├── Auth: Super Admin only
├── Returns: Created user data
└── Used by: User creation form
```

### Posts Management
```
GET /api/posts
├── Input: Query params (id?, published?)
├── Auth: None for published, Required for all
├── Returns: Post(s)
└── Used by: Post listing, public blog

POST /api/posts
├── Input: { title, content, excerpt, imageUrl, published }
├── Auth: Admin or Super Admin
├── Returns: Created post
└── Used by: Post creation form

PUT /api/posts
├── Input: { postId, updates }
├── Auth: Admin or Super Admin
├── Returns: Updated post
└── Used by: Post edit form

DELETE /api/posts
├── Input: Query param (id)
├── Auth: Super Admin only
├── Returns: Success message
└── Used by: Delete button
```

## File Structure

```
src/
├── app/
│   ├── admin/                    # Admin dashboard
│   │   ├── dashboard/           
│   │   │   └── page.tsx          # Dashboard home
│   │   ├── login/               
│   │   │   └── page.tsx          # Login page
│   │   ├── posts/               
│   │   │   ├── page.tsx          # Posts list
│   │   │   └── [id]/            
│   │   │       └── page.tsx      # Post editor
│   │   ├── users/               
│   │   │   └── page.tsx          # User management
│   │   └── layout.tsx            # Admin layout with sidebar
│   │
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   │   └── verify/
│   │   │       └── route.ts      # Token verification
│   │   ├── posts/
│   │   │   └── route.ts          # CRUD operations
│   │   ├── upload/
│   │   │   └── route.ts          # Image upload
│   │   └── users/
│   │       └── create/
│   │           └── route.ts      # User creation
│   │
│   ├── blog/                     # Public blog
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx          # Single post view
│   │
│   └── layout.tsx                # Root layout with AuthProvider
│
├── components/
│   └── ui/                       # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
│
├── hooks/
│   └── useAuth.tsx               # Authentication hook & context
│
├── lib/
│   ├── auth-utils.ts             # Permission utilities
│   ├── firebase-admin.ts         # Server-side Firebase
│   └── firebase-client.ts        # Client-side Firebase
│
└── types/
    └── user.ts                   # TypeScript types & permissions
```

## Security Layers

1. **Client-side Protection**
   - Route guards (useAuth hook)
   - Conditional UI rendering
   - Permission-based visibility

2. **API-level Protection**
   - Firebase token verification
   - Role validation
   - Permission checks

3. **Database-level Protection**
   - Firestore Security Rules
   - Read/write restrictions
   - Role-based queries

## Environment Variables

```
Client-side (Public):
├── NEXT_PUBLIC_FIREBASE_API_KEY
├── NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
├── NEXT_PUBLIC_FIREBASE_PROJECT_ID
├── NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
├── NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
└── NEXT_PUBLIC_FIREBASE_APP_ID

Server-side (Secret):
├── FIREBASE_PROJECT_ID
├── FIREBASE_CLIENT_EMAIL
└── FIREBASE_PRIVATE_KEY
```

## Key Technologies

- **Next.js 16** - App Router, Server Components
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Firebase** - Auth, Firestore, Storage
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide Icons** - Icon library

---

This architecture ensures:
✅ Secure authentication
✅ Role-based access control
✅ Separation of concerns
✅ Scalability
✅ Type safety
✅ Best practices
