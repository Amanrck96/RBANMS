import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

// GET - Fetch site content by section
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const section = searchParams.get('section');

        if (!section) {
            return NextResponse.json({ error: 'Section required' }, { status: 400 });
        }

        const contentDoc = await adminDb.collection('site-content').doc(section).get();

        if (!contentDoc.exists) {
            return NextResponse.json({ data: null });
        }

        return NextResponse.json({ data: contentDoc.data() });
    } catch (error) {
        console.error('Fetch content error:', error);
        return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
    }
}

// POST - Update site content
export async function POST(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.substring(7);
        const decodedToken = await adminAuth.verifyIdToken(token);
        const uid = decodedToken.uid;

        // Verify permissions
        const userDoc = await adminDb.collection('users').doc(uid).get();
        const userData = userDoc.data();

        console.log(`[SiteContent] Update attempt by user ${uid}, role: ${userData?.role}`);

        if (userData?.role !== 'super_admin' && userData?.role !== 'admin') {
            console.error(`[SiteContent] Permission denied for user ${uid}. Role: ${userData?.role}`);
            return NextResponse.json({ error: 'Forbidden: Admin or Super Admin only' }, { status: 403 });
        }

        const { section, data } = await request.json();

        if (!section || !data) {
            return NextResponse.json({ error: 'Section and data required' }, { status: 400 });
        }

        await adminDb.collection('site-content').doc(section).set({
            ...data,
            updatedAt: new Date().toISOString(),
            updatedBy: uid
        });

        return NextResponse.json({ message: 'Content updated successfully' });
    } catch (error: any) {
        console.error('Update content error:', error);
        return NextResponse.json({ error: error.message || 'Failed to update content' }, { status: 500 });
    }
}
