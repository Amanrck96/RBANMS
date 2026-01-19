
const admin = require('firebase-admin');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

if (!process.env.FIREBASE_PROJECT_ID) {
    console.error('Environment variables not loaded. Make sure .env.local exists.');
    process.exit(1);
}

// Check if already initialized
if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    });
}

async function findUser() {
    try {
        const userRecord = await adminAuth().getUserByEmail('info@rbanmsfgc.edu.in');
        console.log('--- USER FOUND ---');
        console.log('Email:', userRecord.email);
        console.log('UID:', userRecord.uid);
        console.log('------------------');
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            console.log('User not found. You need to create this user first in the Auth tab.');
        } else {
            console.error('Error:', error.message);
        }
    }
}

// Fix for adminAuth reference
const adminAuth = () => admin.auth();
findUser();
