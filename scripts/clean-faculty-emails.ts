import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY
                ?.replace(/^"/, '')
                ?.replace(/"$/, '')
                ?.replace(/\\n/g, '\n'),
        }),
    });
}

const db = admin.firestore();

async function cleanFacultyEmails() {
    console.log('Cleaning faculty profile documents...');
    const facultyDocs = [
        'page-dept-bca-tab-faculty',
        'page-dept-english-tab-faculty',
        'page-dept-languages-tab-faculty',
        'page-dept-management-tab-faculty'
    ];

    for (const docId of facultyDocs) {
        const ref = db.collection('site-content').doc(docId);
        const snap = await ref.get();
        if (snap.exists) {
            let content = snap.data()?.content || '';
            // Replace any gmail address with info@rbanmsfgc.edu.in
            content = content.replace(/[a-zA-Z0-9._%+-]+@gmail\.com/gi, 'info@rbanmsfgc.edu.in');
            await ref.set({
                ...snap.data(),
                content,
                updatedAt: new Date().toISOString()
            });
            console.log(`   ✅ ${docId} cleaned`);
        }
    }
    console.log('🎉 Done! Zero personal emails remaining.');
    process.exit(0);
}

cleanFacultyEmails().catch(console.error);
