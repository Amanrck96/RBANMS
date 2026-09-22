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

async function run() {
    const snapshot = await db.collection('site-content').get();
    console.log(`Total documents: ${snapshot.size}`);

    const badDocs: { id: string; emails: string[] }[] = [];

    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    for (const doc of snapshot.docs) {
        const data = doc.data();
        const str = JSON.stringify(data);
        const matches = str.match(emailRegex) || [];
        const nonInfoEmails = matches.filter(e => e.toLowerCase() !== 'info@rbanmsfgc.edu.in');
        if (nonInfoEmails.length > 0) {
            badDocs.push({ id: doc.id, emails: [...new Set(nonInfoEmails)] });
        }
    }

    console.log('\n--- Documents with NON-INFO emails ---');
    console.log(JSON.stringify(badDocs, null, 2));
}

run().catch(console.error);
