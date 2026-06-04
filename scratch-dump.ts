import dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { adminDb } from './src/lib/firebase-admin';

async function run() {
    const pageIds = ['about-founder', 'about-director', 'about-principal'];
    for (const pageId of pageIds) {
        console.log(`=== Page ID: ${pageId} ===`);
        const docRef = adminDb.collection('site-content').doc(`page-${pageId}`);
        const snapshot = await docRef.get();
        if (snapshot.exists) {
            console.log(JSON.stringify(snapshot.data(), null, 2));
        } else {
            console.log('No document found');
        }
        console.log('\n');
    }
}

run().catch(console.error);
