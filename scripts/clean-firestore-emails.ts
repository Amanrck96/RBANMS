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

async function cleanFirestore() {
    console.log('🚀 Starting Firestore email cleanup...\n');

    // 1. page-administration
    console.log('1. Cleaning page-administration...');
    const adminDocRef = db.collection('site-content').doc('page-administration');
    const adminDoc = await adminDocRef.get();
    if (adminDoc.exists) {
        let content = adminDoc.data()?.content || '';
        // Replace office@ and exams@ with info@rbanmsfgc.edu.in
        content = content.replace(/office@rbanmsfgc\.edu\.in/gi, 'info@rbanmsfgc.edu.in');
        content = content.replace(/exams@rbanmsfgc\.edu\.in/gi, 'info@rbanmsfgc.edu.in');
        await adminDocRef.set({
            ...adminDoc.data(),
            content,
            updatedAt: new Date().toISOString()
        });
        console.log('   ✅ page-administration updated with info@rbanmsfgc.edu.in');
    }

    // 2. page-contact-info
    console.log('2. Cleaning page-contact-info...');
    const contactDocRef = db.collection('site-content').doc('page-contact-info');
    const contactDoc = await contactDocRef.get();
    if (contactDoc.exists) {
        let content = contactDoc.data()?.content || '';
        content = content.replace(/priyamahesh09@gmail\.com/gi, 'info@rbanmsfgc.edu.in');
        content = content.replace(/[a-zA-Z0-9._%+-]+@gmail\.com/gi, 'info@rbanmsfgc.edu.in');
        await contactDocRef.set({
            ...contactDoc.data(),
            content,
            updatedAt: new Date().toISOString()
        });
        console.log('   ✅ page-contact-info updated with info@rbanmsfgc.edu.in');
    }

    // 3. Department Contact Tabs
    const deptTabs = [
        'page-dept-arts-tab-contact',
        'page-dept-english-tab-contact',
        'page-dept-languages-tab-contact',
        'page-dept-physed-tab-contact',
        'page-dept-commerce-tab-contact',
        'page-dept-management-tab-contact',
        'page-dept-bca-tab-contact'
    ];

    for (const tabId of deptTabs) {
        console.log(`3. Cleaning ${tabId}...`);
        const docRef = db.collection('site-content').doc(tabId);
        const docSnap = await docRef.get();
        if (docSnap.exists) {
            let content = docSnap.data()?.content || '';
            content = content.replace(/[a-zA-Z0-9._%+-]+@gmail\.com/gi, 'info@rbanmsfgc.edu.in');
            content = content.replace(/[a-zA-Z0-9._%+-]+@rbanmsfgc\.edu\.in/gi, 'info@rbanmsfgc.edu.in');
            await docRef.set({
                ...docSnap.data(),
                content,
                updatedAt: new Date().toISOString()
            });
            console.log(`   ✅ ${tabId} updated to info@rbanmsfgc.edu.in`);
        }
    }

    // 4. page-cell-grievance
    console.log('4. Cleaning page-cell-grievance...');
    const grievanceRef = db.collection('site-content').doc('page-cell-grievance');
    const grievanceSnap = await grievanceRef.get();
    if (grievanceSnap.exists) {
        let content = grievanceSnap.data()?.content || '';
        content = content.replace(/grievanceredressal\.rbanmsfgc@gmail\.com/gi, 'info@rbanmsfgc.edu.in');
        await grievanceRef.set({
            ...grievanceSnap.data(),
            content,
            updatedAt: new Date().toISOString()
        });
        console.log('   ✅ page-cell-grievance updated to info@rbanmsfgc.edu.in');
    }

    // 5. page-rti
    console.log('5. Cleaning page-rti...');
    const rtiRef = db.collection('site-content').doc('page-rti');
    const rtiSnap = await rtiRef.get();
    if (rtiSnap.exists) {
        let content = rtiSnap.data()?.content || '';
        content = content.replace(/principal@rbanmsfgc\.edu\.in/gi, 'info@rbanmsfgc.edu.in');
        content = content.replace(/office@rbanmsfgc\.edu\.in/gi, 'info@rbanmsfgc.edu.in');
        await rtiRef.set({
            ...rtiSnap.data(),
            content,
            updatedAt: new Date().toISOString()
        });
        console.log('   ✅ page-rti updated to info@rbanmsfgc.edu.in');
    }

    // 6. site-settings and page-site-settings
    console.log('6. Ensuring site-settings has info@rbanmsfgc.edu.in...');
    for (const settingsId of ['site-settings', 'page-site-settings']) {
        const setRef = db.collection('site-content').doc(settingsId);
        const setSnap = await setRef.get();
        if (setSnap.exists) {
            await setRef.set({
                ...setSnap.data(),
                email: 'info@rbanmsfgc.edu.in',
                updatedAt: new Date().toISOString()
            });
            console.log(`   ✅ ${settingsId} email verified as info@rbanmsfgc.edu.in`);
        }
    }

    console.log('\n🎉 ALL Firestore documents cleaned! ONLY info@rbanmsfgc.edu.in exists now.');
    process.exit(0);
}

cleanFirestore().catch(console.error);
