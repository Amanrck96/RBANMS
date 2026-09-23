import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
    try {
        console.log('Testing unauthenticated client read on page-research...');
        const snap = await getDoc(doc(db, 'site-content', 'page-research'));
        if (snap.exists()) {
            console.log('✅ Client read SUCCESS! Title:', snap.data()?.title);
        } else {
            console.log('Doc does not exist');
        }
    } catch (e: any) {
        console.error('❌ Client read FAILED:', e.code, e.message);
    }
    process.exit(0);
}
test();
