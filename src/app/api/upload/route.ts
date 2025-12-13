// API route to handle image uploads (admin and super admin)
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

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
        const uid = decodedToken.uid;

        // Check if user has permission to upload
        const userDoc = await adminDb.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const userData = userDoc.data();
        if (userData?.role !== 'admin' && userData?.role !== 'super_admin') {
            return NextResponse.json(
                { error: 'Forbidden: Insufficient permissions' },
                { status: 403 }
            );
        }

        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        // Note: This is a placeholder. In production, you would upload to Firebase Storage
        // or another cloud storage service. For now, we'll return a success message.
        // You'll need to implement the actual upload logic using Firebase Storage SDK.

        return NextResponse.json({
            message: 'File upload endpoint ready',
            filename: file.name,
            size: file.size,
            type: file.type,
            // In production, return: imageUrl: 'https://...'
        });
    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to upload file' },
            { status: 500 }
        );
    }
}
