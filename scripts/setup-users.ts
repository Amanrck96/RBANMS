
import 'dotenv/config';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

/**
 * Script to ensure users exist and set their passwords/roles
 * Usage: npx tsx scripts/setup-users.ts
 */

import * as admin from 'firebase-admin';

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

const USERS = [
    {
        email: 'info@rbanmsfgc.edu.in',
        password: 'Success@123##.',
        role: 'super_admin',
        displayName: 'Super Admin'
    },
    {
        email: 'anand.b.j.7@gmail.com',
        password: 'Success@123##.',
        role: 'admin',
        displayName: 'Admin User'
    }
];

async function setupUsers() {
    console.log('\n🔐 Setting up Admin Users...\n');

    for (const userConfig of USERS) {
        try {
            console.log(`Processing ${userConfig.email}...`);
            let uid;

            // 1. Check if user exists, if not create them
            try {
                const existingUser = await admin.auth().getUserByEmail(userConfig.email);
                uid = existingUser.uid;
                console.log(`  ✅ User exists (UID: ${uid})`);

                // Update password for existing user
                await admin.auth().updateUser(uid, {
                    password: userConfig.password,
                    emailVerified: true
                });
                console.log(`  ✅ Updated password to: ${userConfig.password}`);

            } catch (error: any) {
                if (error.code === 'auth/user-not-found') {
                    // Create new user
                    const newUser = await admin.auth().createUser({
                        email: userConfig.email,
                        password: userConfig.password,
                        displayName: userConfig.displayName,
                        emailVerified: true
                    });
                    uid = newUser.uid;
                    console.log(`  ✨ Created new user (UID: ${uid})`);
                } else {
                    throw error;
                }
            }

            // 2. Set Role in Firestore
            await admin.firestore().collection('users').doc(uid).set({
                uid: uid,
                email: userConfig.email,
                role: userConfig.role,
                displayName: userConfig.displayName,
                updatedAt: new Date().toISOString()
            }, { merge: true });

            console.log(`  ✅ Synced Firestore role: ${userConfig.role}`);

            // 3. Set Custom Claims (for good measure)
            await admin.auth().setCustomUserClaims(uid, { role: userConfig.role });
            console.log(`  ✅ Set Auth Claims`);

        } catch (error: any) {
            console.error(`  ❌ Error processing ${userConfig.email}:`, error.message);
        }
        console.log('-----------------------------------');
    }

    console.log('\n🎉 All done! Users are ready to login.');
    process.exit(0);
}

setupUsers();
