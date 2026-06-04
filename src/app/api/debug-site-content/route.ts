import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        const pageIds = ['about-founder', 'about-director', 'about-principal'];
        const results: Record<string, any> = {};
        for (const pageId of pageIds) {
            const docRef = adminDb.collection('site-content').doc(`page-${pageId}`);
            const snapshot = await docRef.get();
            if (snapshot.exists) {
                results[pageId] = snapshot.data();
            } else {
                results[pageId] = null;
            }
        }
        return NextResponse.json(results);
    } catch (error: any) {
        console.error('Debug firestore error:', error);
        return NextResponse.json({ error: error.message || 'Error' }, { status: 500 });
    }
}
