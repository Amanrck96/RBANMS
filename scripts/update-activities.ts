
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

const activities = [
    {
        title: "Field Visit & Guest Lecture",
        date: "November 6, 2025",
        description: "Final year BBA/BCA visit to Technology & Innovation Institute; BCom Guest lecture on Financial Management."
    },
    {
        title: "MILANA",
        date: "November 7, 2025",
        description: "Inter high school / PU cultural competition"
    },
    {
        title: "Guest Lecture",
        date: "November 12, 2025",
        description: "Session on Digital Marketing"
    },
    {
        title: "SPICMACAY presentation",
        date: "November 13, 2025",
        description: "Classical music and arts presentation"
    },
    {
        title: "Pre-Final Exams",
        date: "November 14-22, 2025",
        description: "Internal assessments for all departments"
    },
    {
        title: "NAADAHABBA",
        date: "November 19, 2025",
        description: "Folk dances of Karnataka at Sabha. Open to all and the Media."
    },
    {
        title: "Guest Lecture: AI Tools",
        date: "November 25, 2025",
        description: "Practical approach to AI tools for Final Year BCA students"
    },
    {
        title: "SPICMACAY: Sattriya Dance",
        date: "November 27, 2025",
        description: "Classical dance performance"
    },
    {
        title: "Bharatiyar Event",
        date: "November 29, 2025",
        description: "Event by Dept. of Languages - Tamil"
    }
];

async function updateActivities() {
    try {
        console.log('📝 Updating activities in Firestore...');
        await db.collection('site-content').doc('activities').set({
            items: activities,
            updatedAt: new Date().toISOString(),
            updatedBy: 'system-script'
        });
        console.log('✅ Activities updated successfully!');
        process.exit(0);
    } catch (error: any) {
        console.error('❌ Error updating activities:', error.message);
        process.exit(1);
    }
}

updateActivities();
