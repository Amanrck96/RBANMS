
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export async function GET(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.substring(7);
        const decodedToken = await adminAuth.verifyIdToken(token);
        const requestorUid = decodedToken.uid;

        // Check if requestor is super admin
        const requestorDoc = await adminDb.collection('users').doc(requestorUid).get();
        if (!requestorDoc.exists || requestorDoc.data()?.role !== 'super_admin') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const usersSnapshot = await adminDb.collection('users').get();
        const users = usersSnapshot.docs.map(doc => ({
            uid: doc.id,
            ...doc.data()
        }));

        return NextResponse.json({ users });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.substring(7);
        const decodedToken = await adminAuth.verifyIdToken(token);
        const requestorUid = decodedToken.uid;

        // Check if requestor is super admin
        const requestorDoc = await adminDb.collection('users').doc(requestorUid).get();
        if (!requestorDoc.exists || requestorDoc.data()?.role !== 'super_admin') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const { searchParams } = new URL(request.url);
        const uid = searchParams.get('uid');

        if (!uid) {
            return NextResponse.json({ error: 'User UID required' }, { status: 400 });
        }

        if (uid === requestorUid) {
            return NextResponse.json({ error: 'Cannot delete yourself' }, { status: 400 });
        }

        // Delete from Auth
        await adminAuth.deleteUser(uid);
        // Delete from Firestore
        await adminDb.collection('users').doc(uid).delete();

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
