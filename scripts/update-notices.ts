
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import * as admin from 'firebase-admin';

// Initialize Firebase Admin
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            project_id: process.env.FIREBASE_PROJECT_ID,
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        } as any),
    });
}

const db = admin.firestore();

const notices = [
    "Admissions open for AY 2026-27. For a Campus Tour, email info@rbanmsfgc.edu.in.",
    "College will remain closed on 12th and 13th January.",
    "The Even Semester for AY 2025-26 will begin on January 19.",
    "Regular classes for all courses will commence on January 27."
];

async function updateNotices() {
    try {
        console.log('📝 Updating notices in Firestore...');
        await db.collection('site-content').doc('notices').set({
            items: notices,
            updatedAt: new Date().toISOString(),
            updatedBy: 'system-script'
        });
        console.log('✅ Notices updated successfully!');
        process.exit(0);
    } catch (error: any) {
        console.error('❌ Error updating notices:', error.message);
        process.exit(1);
    }
}

updateNotices();
