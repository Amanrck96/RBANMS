# Firebase App Hosting Deployment Guide

## Current Status
✅ Build completed successfully
✅ Git repository connected
✅ `apphosting.yaml` configured
✅ `firebase.json` created

## Quick Deploy Steps

### Method 1: Firebase CLI (One-time setup)

1. **Install Firebase CLI** (if not installed):
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Initialize Firebase** (select your existing project):
```bash
firebase init hosting
```
- Select "Use an existing project"
- Choose your Firebase project
- Accept defaults for the rest

4. **Build and Deploy**:
```bash
npm run build
firebase deploy --only hosting
```

Your site will be live at: `https://YOUR-PROJECT-ID.web.app`

---

### Method 2: GitHub Actions (Auto-deploy on push)

Create this file to enable automatic deployments:

**File**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.NEXT_PUBLIC_FIREBASE_API_KEY }}
          NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: ${{ secrets.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN }}
          NEXT_PUBLIC_FIREBASE_PROJECT_ID: ${{ secrets.NEXT_PUBLIC_FIREBASE_PROJECT_ID }}
          NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: ${{ secrets.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET }}
          NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID }}
          NEXT_PUBLIC_FIREBASE_APP_ID: ${{ secrets.NEXT_PUBLIC_FIREBASE_APP_ID }}
          FIREBASE_PROJECT_ID: ${{ secrets.FIREBASE_PROJECT_ID }}
          FIREBASE_CLIENT_EMAIL: ${{ secrets.FIREBASE_CLIENT_EMAIL }}
          FIREBASE_PRIVATE_KEY: ${{ secrets.FIREBASE_PRIVATE_KEY }}
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: YOUR-PROJECT-ID
```

**Then add secrets to GitHub**:
1. Go to: https://github.com/Amanrck96/RBANMS/settings/secrets/actions
2. Add all your environment variables from `.env.local` as secrets

---

### Method 3: Vercel (Easiest for Next.js)

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository: `Amanrck96/RBANMS`
5. Add environment variables from `.env.local`
6. Click "Deploy"

Done! Your site will be live instantly with auto-deploys on every push.

---

## Recommended: Use Vercel
For Next.js apps, Vercel is the easiest and most optimized option:
- ✅ Zero configuration needed
- ✅ Automatic deployments on git push
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Preview deployments for PRs
- ✅ Built by the creators of Next.js

**Quick Vercel Deploy**:
```bash
npm i -g vercel
vercel
```

Follow the prompts, and you're deployed! 🚀

---

## Current Build Output
Your build completed successfully with **99 pages** generated.
All department pages are working with the white header background fix! ✨
