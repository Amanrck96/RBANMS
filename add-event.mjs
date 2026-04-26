import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

if (!getApps().length) {
    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            }),
        });
    } else {
        console.error("Missing Firebase Admin credentials in .env.local");
        process.exit(1);
    }
}

const adminDb = getFirestore();

function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}

async function addEvent() {
    const title = "Basavanna Jayanthi";
    const content = `
        <p><strong>Event Date:</strong> 21/4/2026</p>
        <p><strong>Department:</strong> Department Of Language</p>
        <p>Honouring the timeless wisdom of Basavanna—a voice of equality, compassion and truth.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img src="/images/events/basavanna-jayanthi-1.jpg" alt="Basavanna Jayanthi 1" class="rounded-lg shadow-md w-full h-auto" />
            <img src="/images/events/basavanna-jayanthi-2.jpg" alt="Basavanna Jayanthi 2" class="rounded-lg shadow-md w-full h-auto" />
            <img src="/images/events/basavanna-jayanthi-3.jpg" alt="Basavanna Jayanthi 3" class="rounded-lg shadow-md w-full h-auto" />
        </div>
    `;
    const excerpt = "Honouring the timeless wisdom of Basavanna—a voice of equality, compassion and truth.";
    const imageUrl = "/images/events/basavanna-jayanthi-1.jpg";

    const slug = generateSlug(title);
    const eventId = adminDb.collection('events').doc().id;
    // We'll set createdAt to the provided date
    const eventDateStr = "2026-04-21T00:00:00.000Z";

    const eventData = {
        id: eventId,
        title,
        content,
        excerpt,
        imageUrl,
        authorId: "admin",
        authorName: "Department Of Language",
        createdAt: eventDateStr,
        updatedAt: eventDateStr,
        published: true,
        slug,
    };

    await adminDb.collection('events').doc(eventId).set(eventData);
    console.log("Event created successfully:", eventId);
}

addEvent().catch(console.error);
