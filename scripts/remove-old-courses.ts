
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

async function removeOldCourses() {
    try {
        console.log('📝 Removing old course content from Firestore...');

        // This resets the content to a simple paragraph, removing the old HTML cards
        const defaultContent = '<p>At RBANM’s First Grade College, we offer a variety of undergraduate and postgraduate programmes designed to prepare students for the challenges of the professional world. Our curriculum is aligned with industry standards and focuses on holistic development.</p>';

        await db.collection('site-content').doc('page-academics-courses').set({
            content: defaultContent,
            updatedAt: new Date().toISOString(),
            updatedBy: 'system-script'
        }, { merge: true });

        console.log('✅ Content cleaned successfully!');
        process.exit(0);
    } catch (error: any) {
        console.error('❌ Error updating content:', error.message);
        process.exit(1);
    }
}

removeOldCourses();
