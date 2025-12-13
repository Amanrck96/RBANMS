/**
 * Script to create the first super admin user in Firebase
 * Run this script once after setting up Firebase to create your first admin
 */

import * as admin from 'firebase-admin';
import * as readline from 'readline';

// Initialize Firebase Admin
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function createSuperAdmin() {
    try {
        console.log('\n🔐 Create First Super Admin User\n');

        const email = await question('Enter email address: ');
        const password = await question('Enter password (min 6 characters): ');
        const displayName = await question('Enter display name: ');

        if (!email || !password || password.length < 6) {
            console.error('❌ Invalid input. Email and password (min 6 chars) are required.');
            rl.close();
            return;
        }

        // Create user in Firebase Auth
        console.log('\n📝 Creating user in Firebase Auth...');
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName: displayName || undefined,
        });

        console.log('✅ User created in Auth:', userRecord.uid);

        // Create user document in Firestore
        console.log('\n📝 Creating user document in Firestore...');
        const now = new Date().toISOString();
        await admin.firestore().collection('users').doc(userRecord.uid).set({
            uid: userRecord.uid,
            email,
            role: 'super_admin',
            displayName: displayName || '',
            createdAt: now,
            updatedAt: now,
        });

        console.log('✅ User document created in Firestore');
        console.log('\n🎉 Super Admin created successfully!\n');
        console.log('Details:');
        console.log(`  Email: ${email}`);
        console.log(`  UID: ${userRecord.uid}`);
        console.log(`  Role: super_admin`);
        console.log(`\nYou can now login at: http://localhost:3000/admin/login\n`);

    } catch (error: any) {
        console.error('\n❌ Error creating super admin:', error.message);
    } finally {
        rl.close();
        process.exit(0);
    }
}

createSuperAdmin();
