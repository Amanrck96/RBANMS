// Firebase client SDK configuration
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase credentials are configured
const isConfigured = firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== 'YOUR_API_KEY_HERE' &&
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== 'your-project-id';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

// Only initialize Firebase if credentials are configured
if (isConfigured) {
    try {
        app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
        auth = getAuth(app);
        db = getFirestore(app);
        storage = getStorage(app);
    } catch (error) {
        console.error('Firebase initialization error:', error);
    }
} else {
    console.warn(
        '⚠️ Firebase credentials not configured. Please add your Firebase credentials to .env.local\n' +
        'See QUICKSTART.md for setup instructions.'
    );
}

export { auth, db, storage };
export default app;
