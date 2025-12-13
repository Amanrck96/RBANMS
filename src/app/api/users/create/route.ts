// API route to create new admin users (super admin only)
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';
import { UserRole } from '@/types/user';

export async function POST(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const token = authHeader.substring(7);
        const decodedToken = await adminAuth.verifyIdToken(token);
        const requestorUid = decodedToken.uid;

        // Check if requestor is super admin
        const requestorDoc = await adminDb.collection('users').doc(requestorUid).get();
        if (!requestorDoc.exists || requestorDoc.data()?.role !== 'super_admin') {
            return NextResponse.json(
                { error: 'Forbidden: Only super admins can create users' },
                { status: 403 }
            );
        }

        const { email, password, role, displayName } = await request.json();

        // Validate role
        if (role !== 'super_admin' && role !== 'admin') {
            return NextResponse.json(
                { error: 'Invalid role' },
                { status: 400 }
            );
        }

        // Create user in Firebase Auth
        const userRecord = await adminAuth.createUser({
            email,
            password,
            displayName,
        });

        // Create user document in Firestore
        const now = new Date().toISOString();
        await adminDb.collection('users').doc(userRecord.uid).set({
            uid: userRecord.uid,
            email,
            role: role as UserRole,
            displayName: displayName || '',
            createdAt: now,
            updatedAt: now,
        });

        return NextResponse.json({
            message: 'User created successfully',
            user: {
                uid: userRecord.uid,
                email,
                role,
                displayName,
            },
        });
    } catch (error: any) {
        console.error('User creation error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create user' },
            { status: 500 }
        );
    }
}
