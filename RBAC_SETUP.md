# Role-Based Access Control (RBAC) System

This document explains the role-based access control system for RBANM's First Grade College website.

## Overview

The website has two types of users: **Super Admin** and **Admin**. This separation of duties keeps the website secure and helps prevent accidental changes. Both roles are provided free of charge.

## Role Definitions (Short Version)

*   **Super Admin** — Full access; can edit pages, settings, layouts, and users.
*   **Admin** — Limited access; can upload blogs and edit post text & images only.
*   **Cost** — Both roles are provided free of charge.
*   **Benefit** — Improves security and reduces accidental changes.

## Detailed Permissions

### Super Admin
 **Full Control:**
- ✅ Create, edit, and delete blog posts
- ✅ Upload and manage images
- ✅ Create and manage users
- ✅ Edit any website content
- ✅ Access all settings
- ✅ Change website layouts

### Admin
**Limited Access:**
- ✅ Create and edit blog posts
- ✅ Upload new blog posts
- ✅ Change text and images in posts
- ❌ Cannot delete posts (security feature)
- ❌ Cannot manage users
- ❌ Cannot access settings or change layouts

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Authentication** with Email/Password provider
4. Enable **Firestore Database**
5. Enable **Storage** (for image uploads)

### 2. Get Firebase Credentials

#### Client-side credentials:
1. Go to Project Settings > General
2. Scroll to "Your apps" section
3. Copy the Firebase configuration

#### Server-side credentials (Admin SDK):
1. Go to Project Settings > Service Accounts
2. Click "Generate new private key"
3. Download the JSON file
4. Extract the required values

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Client-side Firebase config
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Server-side Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@your_project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----\n"
```

### 4. Install Dependencies

```bash
npm install firebase firebase-admin
```

### 5. Create First Super Admin User

You'll need to create your first super admin user manually in Firebase Console:

1. Go to Firebase Console > Authentication
2. Click "Add user"
3. Enter email and password
4. Go to Firestore Database
5. Create a collection named `users`
6. Add a document with the user's UID as the document ID
7. Add fields:
   ```
   uid: "user_uid_from_auth"
   email: "admin@example.com"
   role: "super_admin"
   displayName: "Super Admin"
   createdAt: "2024-01-01T00:00:00.000Z"
   updatedAt: "2024-01-01T00:00:00.000Z"
   ```

## Usage

### Accessing the Admin Panel

1. Navigate to `/admin/login`
2. Sign in with your credentials
3. You'll be redirected to the dashboard

### Admin Routes

- `/admin/login` - Login page
- `/admin/dashboard` - Main dashboard
- `/admin/posts` - Manage blog posts
- `/admin/posts/new` - Create new post
- `/admin/posts/edit/[id]` - Edit existing post
- `/admin/users` - Manage users (super admin only)

### Creating New Users

Only super admins can create new users:

1. Go to `/admin/users`
2. Fill in the user details
3. Select the appropriate role
4. Click "Create User"

### Managing Posts

#### Create a Post:
1. Go to `/admin/posts`
2. Click "New Post"
3. Fill in the details
4. Toggle "Publish immediately" if ready
5. Click "Create Post"

#### Edit a Post:
1. Go to `/admin/posts`
2. Click "Edit" on any post
3. Make your changes
4. Click "Update Post"

#### Delete a Post (Super Admin only):
1. Go to `/admin/posts`
2. Click "Delete" on any post
3. Confirm deletion

## Security Features

1. **Authentication**: Firebase Authentication ensures secure user login
2. **Token Verification**: All API routes verify Firebase tokens
3. **Role-Based Authorization**: Each endpoint checks user permissions
4. **Protected Routes**: Client-side protection redirects unauthorized users
5. **Server-side Validation**: Double verification on all sensitive operations

## API Endpoints

### Authentication
- `POST /api/auth/verify` - Verify user token and get user data

### Users
- `POST /api/users/create` - Create new user (super admin only)

### Posts
- `GET /api/posts` - Get all posts or specific post
- `POST /api/posts` - Create new post (admin+)
- `PUT /api/posts` - Update post (admin+)
- `DELETE /api/posts` - Delete post (super admin only)

### Upload
- `POST /api/upload` - Upload images (admin+)

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── posts/
│   │   ├── users/
│   │   └── layout.tsx
│   └── api/
│       ├── auth/
│       ├── posts/
│       ├── upload/
│       └── users/
├── components/
│   └── ui/
├── hooks/
│   └── useAuth.tsx
├── lib/
│   ├── auth-utils.ts
│   ├── firebase-admin.ts
│   └── firebase-client.ts
└── types/
    └── user.ts
```

## Troubleshooting

### "Unauthorized" error
- Ensure you're logged in
- Check if your token is valid
- Verify Firebase configuration

### "Forbidden" error
- Check if your role has the required permission
- Verify user role in Firestore

### Can't create users
- Ensure you're logged in as super admin
- Check FIREBASE_PRIVATE_KEY formatting
- Verify Firebase Admin SDK configuration

## Next Steps

1. Configure Firebase Storage for image uploads
2. Add image upload functionality in post editor
3. Create a public blog page to display posts
4. Add user profile management
5. Implement audit logs
6. Add email notifications for new posts

## Support

For issues or questions, please contact the development team.
