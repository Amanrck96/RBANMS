// API route to verify user authentication and role
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

export async function POST(request: NextRequest) {
    try {
        const { token } = await request.json();

        if (!token) {
            return NextResponse.json(
                { error: 'No token provided' },
                { status: 401 }
            );
        }

        // Verify the Firebase token
        const decodedToken = await adminAuth.verifyIdToken(token);
        const uid = decodedToken.uid;

        // Get user data from Firestore
        const userDoc = await adminDb.collection('users').doc(uid).get();

        if (!userDoc.exists) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const userData = userDoc.data();

        return NextResponse.json({
            user: {
                uid,
                email: userData?.email,
                role: userData?.role,
                displayName: userData?.displayName,
            },
        });
    } catch (error) {
        console.error('Token verification error:', error);
        return NextResponse.json(
            { error: 'Invalid token' },
            { status: 401 }
        );
    }
}
