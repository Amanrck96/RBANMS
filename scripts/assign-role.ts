
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
/**
 * Script to assign a role to a user by email
 * Usage: npx tsx scripts/assign-role.ts <email> <role>
 * Example: npx tsx scripts/assign-role.ts info@rbanmsfgc.edu.in super_admin
 */

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

const args = process.argv.slice(2);
const email = args[0];
const role = args[1];

const VALID_ROLES = ['super_admin', 'admin'];

async function assignRole() {
    if (!email || !role) {
        console.error('Usage: npx tsx scripts/assign-role.ts <email> <role>');
        console.error('Valid roles:', VALID_ROLES.join(', '));
        process.exit(1);
    }

    if (!VALID_ROLES.includes(role)) {
        console.error('❌ Invalid role. Valid roles are:', VALID_ROLES.join(', '));
        process.exit(1);
    }

    try {
        console.log(`\n🔍 Looking up user: ${email}...`);
        const userRecord = await admin.auth().getUserByEmail(email);

        console.log(`✅ Found user: ${userRecord.uid}`);
        console.log(`📝 Updating role to '${role}' in Firestore...`);

        await admin.firestore().collection('users').doc(userRecord.uid).set({
            role: role,
            updatedAt: new Date().toISOString()
        }, { merge: true });

        // Also set custom claims for faster checking if needed (optional but good practice)
        await admin.auth().setCustomUserClaims(userRecord.uid, { role });

        console.log(`\n🎉 Success! User ${email} is now a ${role}.`);

    } catch (error: any) {
        if (error.code === 'auth/user-not-found') {
            console.error('\n❌ User not found in Firebase Auth.');
            console.error('   Please ask the user to sign up or create the account first.');
        } else {
            console.error('\n❌ Error assigning role:', error.message);
        }
        process.exit(1);
    }
}

assignRole();
