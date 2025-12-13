# Quick Start Guide - RBAC System

## Step-by-Step Setup

### 1. Install Dependencies (if not done already)
```bash
npm install firebase firebase-admin
```

### 2. Set Up Firebase Project

1. Go to https://console.firebase.google.com/
2. Create a new project or select existing one
3. Enable these services:
   - **Authentication** → Email/Password provider
   - **Firestore Database** → Start in production mode
   - **Storage** → Start in production mode

### 3. Get Firebase Credentials

#### For Client SDK (Web):
1. Go to Project Settings (⚙️) → General
2. Scroll to "Your apps" → Web app
3. If no web app exists, click "Add app" and create one
4. Copy the config values

#### For Admin SDK (Server):
1. Go to Project Settings (⚙️) → Service Accounts
2. Click "Generate new private key"
3. Download the JSON file
4. Open it and note these values:
   - `project_id`
   - `client_email`
   - `private_key`

### 4. Configure Environment Variables

Create `.env.local` file:

```env
# Client-side (from Firebase Console → Project Settings → General)
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# Server-side (from downloaded service account JSON)
FIREBASE_PROJECT_ID=your-project
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqh...\n-----END PRIVATE KEY-----\n"
```

**Important:** Copy the entire private key including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` parts. Make sure to keep the `\n` characters.

### 5. Create First Super Admin

Option A - Using the Script:
```bash
npx tsx scripts/create-super-admin.ts
```

Option B - Manual (Firebase Console):
1. Go to Authentication → Users → Add user
2. Enter email and password
3. Copy the UID from the created user
4. Go to Firestore Database
5. Create collection: `users`
6. Add document with the copied UID as document ID
7. Add these fields:
   ```
   uid: "the-user-uid"
   email: "admin@example.com"
   role: "super_admin"
   displayName: "Super Admin"
   createdAt: "2024-12-13T00:00:00.000Z"
   updatedAt: "2024-12-13T00:00:00.000Z"
   ```

### 6. Start Development Server

```bash
npm run dev
```

### 7. Access Admin Panel

1. Open browser: http://localhost:3000/admin/login
2. Login with your super admin credentials
3. You're in! 🎉

### 8. Create Additional Users

1. Navigate to: http://localhost:3000/admin/users
2. Fill in the form
3. Select role (admin or super_admin)
4. Click "Create User"

## Testing the System

### As Super Admin:
1. ✅ Create posts at `/admin/posts/new`
2. ✅ Edit any post
3. ✅ Delete posts
4. ✅ Create new users at `/admin/users`
5. ✅ Access all sections

### As Regular Admin:
1. ✅ Create posts at `/admin/posts/new`
2. ✅ Edit posts (text and images)
3. ❌ Cannot delete posts (button won't show)
4. ❌ Cannot access `/admin/users` (will show access denied)
5. ❌ Cannot access `/admin/settings`

## Firestore Database Structure

```
users/
  {uid}/
    - uid: string
    - email: string
    - role: "super_admin" | "admin"
    - displayName: string
    - createdAt: string (ISO 8601)
    - updatedAt: string (ISO 8601)

posts/
  {postId}/
    - id: string
    - title: string
    - content: string
    - excerpt: string
    - imageUrl: string (optional)
    - authorId: string
    - authorName: string
    - createdAt: string (ISO 8601)
    - updatedAt: string (ISO 8601)
    - published: boolean
    - slug: string
```

## Firestore Security Rules

Add these to your Firestore Security Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users collection - only authenticated admins can read
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if false; // Managed through Admin SDK only
    }
    
    // Posts collection
    match /posts/{postId} {
      // Anyone can read published posts
      allow read: if resource.data.published == true || request.auth != null;
      
      // Only authenticated admins can create
      allow create: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['admin', 'super_admin'];
      
      // Only authenticated admins can update
      allow update: if request.auth != null &&
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['admin', 'super_admin'];
      
      // Only super admins can delete
      allow delete: if request.auth != null &&
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'super_admin';
    }
  }
}
```

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
- Double-check your `NEXT_PUBLIC_FIREBASE_API_KEY` in `.env.local`
- Make sure there are no quotes around the value

### "Firebase: Error (auth/user-not-found)"
- User doesn't exist in Firebase Authentication
- Create the user first in Firebase Console

### "Forbidden: Only super admins can create users"
- Check that your user's role in Firestore is set to "super_admin"
- Make sure the user document exists in the `users` collection

### "Cannot find module 'firebase-admin'"
- Run: `npm install firebase-admin`
- Restart your dev server

### Private key error
- Make sure `FIREBASE_PRIVATE_KEY` includes the full key with headers
- Keep the `\n` characters in the string
- Wrap the entire value in double quotes

## Next Steps

1. ✅ System is ready to use
2. 🎨 Customize the UI to match your brand
3. 📝 Create your first blog post
4. 🖼️ Implement image upload to Firebase Storage
5. 🌐 Create public blog page to display posts
6. 📧 Add email notifications (optional)

For detailed documentation, see `RBAC_SETUP.md`
