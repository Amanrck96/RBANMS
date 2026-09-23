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

async function updateAdministrationDoc() {
    console.log('Updating page-administration in Firestore with color uniformity and general contact numbers...');
    const docRef = db.collection('site-content').doc('page-administration');

    const cleanContent = `
<p class="mb-6 text-lg text-slate-800 leading-relaxed font-medium">Our administrative team is the backbone of the college, ensuring smooth day-to-day operations and providing essential support to students and faculty.</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
    <div class="bg-white p-6 rounded-xl border-2 border-[#800000]/20 shadow-sm space-y-3">
        <h3 class="text-xl font-bold text-[#800000] font-headline">College Office</h3>
        <p class="text-slate-700 text-sm leading-relaxed">Handles admissions, fee collection, and general administrative enquiries.</p>
        <div class="pt-3 border-t border-slate-100 text-sm space-y-1 text-slate-800">
            <div><span class="font-semibold text-slate-900">Email:</span> <a href="mailto:info@rbanmsfgc.edu.in" class="text-[#800000] font-bold hover:underline">info@rbanmsfgc.edu.in</a></div>
            <div><span class="font-semibold text-slate-900">Landline:</span> <a href="tel:08025512976" class="hover:underline">080-25512976</a> / <a href="tel:08048533572" class="hover:underline">080-48533572</a></div>
            <div><span class="font-semibold text-slate-900">Mobile:</span> <a href="tel:7349251497" class="hover:underline">7349251497</a></div>
        </div>
    </div>
    <div class="bg-white p-6 rounded-xl border-2 border-[#800000]/20 shadow-sm space-y-3">
        <h3 class="text-xl font-bold text-[#800000] font-headline">Examination Section</h3>
        <p class="text-slate-700 text-sm leading-relaxed">Manages internal assessments, university examinations, and marks verification.</p>
        <div class="pt-3 border-t border-slate-100 text-sm space-y-1 text-slate-800">
            <div><span class="font-semibold text-slate-900">Email:</span> <a href="mailto:info@rbanmsfgc.edu.in" class="text-[#800000] font-bold hover:underline">info@rbanmsfgc.edu.in</a></div>
            <div><span class="font-semibold text-slate-900">Landline:</span> <a href="tel:08025512976" class="hover:underline">080-25512976</a> / <a href="tel:08048533572" class="hover:underline">080-48533572</a></div>
            <div><span class="font-semibold text-slate-900">Mobile:</span> <a href="tel:7349251497" class="hover:underline">7349251497</a></div>
        </div>
    </div>
</div>
`;

    await docRef.set({
        title: 'Administration',
        content: cleanContent,
        updatedAt: new Date().toISOString()
    });

    console.log('✅ page-administration updated successfully in Firestore!');
    process.exit(0);
}

updateAdministrationDoc().catch(console.error);
