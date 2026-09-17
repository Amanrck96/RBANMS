
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

// Initialize Firebase Admin
if (!admin.apps.length) {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !privateKey) {
        console.error('❌ Missing Firebase Admin credentials in .env.local');
        process.exit(1);
    }

    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: privateKey,
        }),
    });
}

const USERS = [
    {
        email: 'info@rbanmsfgc.edu.in',
        role: 'super_admin',
        displayName: 'Super Admin'
    },
    {
        email: 'anand.b.j.7@gmail.com',
        role: 'admin',
        displayName: 'Content Admin'
    }
];

async function onboardUsers() {
    console.log('\n🚀 Starting Secure Onboarding for RBANMS...\n');

    for (const userConfig of USERS) {
        try {
            console.log(`Processing ${userConfig.email}...`);
            let userRecord;

            // 1. Create or get user
            try {
                userRecord = await admin.auth().getUserByEmail(userConfig.email);
                console.log(`  ✅ User exists (UID: ${userRecord.uid})`);
            } catch (error: any) {
                if (error.code === 'auth/user-not-found') {
                    // Create user with a random temp password
                    const tempPassword = Math.random().toString(36).slice(-12) + 'A1!';
                    userRecord = await admin.auth().createUser({
                        email: userConfig.email,
                        displayName: userConfig.displayName,
                        password: tempPassword,
                        emailVerified: false
                    });
                    console.log(`  ✨ Created new account`);
                } else {
                    throw error;
                }
            }

            // 2. Set/Update Role and Onboarding status in Firestore
            await admin.firestore().collection('users').doc(userRecord.uid).set({
                uid: userRecord.uid,
                email: userConfig.email,
                role: userConfig.role,
                displayName: userConfig.displayName,
                needsPasswordChange: true, // Force password change flag
                onboardedAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }, { merge: true });

            console.log(`  ✅ Updated Firestore profile (Role: ${userConfig.role})`);

            // 3. Set Custom Claims
            await admin.auth().setCustomUserClaims(userRecord.uid, { role: userConfig.role });
            console.log(`  ✅ Set security claims`);

            // 4. Generate Password Reset Link (Setup Link)
            const setupLink = await admin.auth().generatePasswordResetLink(userConfig.email);
            console.log(`\n  🔗 SETUP LINK for ${userConfig.displayName}:`);
            console.log(`  ${setupLink}\n`);
            console.log(`  (Send this link to the user. It allows them to set their own password securely.)`);

        } catch (error: any) {
            console.error(`  ❌ Error:`, error.message);
        }
        console.log('-----------------------------------');
    }

    console.log('\n🎉 Secure onboarding script complete.');
    console.log('Please copy the setup links above and share them with the respective users.');
    process.exit(0);
}

onboardUsers();
