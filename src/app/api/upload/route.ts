import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';
import { createHash } from 'crypto';

export async function POST(request: NextRequest) {
    console.log("--- New Upload Request Incoming ---");
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
        const folder = (formData.get('folder') as string) || 'uploads';

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        const isImageMime = file.type.startsWith('image/');
        const isImageExt = /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(file.name);

        if (!isImageMime && !isImageExt) {
            return NextResponse.json(
                { error: 'File must be an image' },
                { status: 400 }
            );
        }

        const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.CLOUDINARY_API_KEY;
        const apiSecret = process.env.CLOUDINARY_API_SECRET;

        if (!cloudName || !apiKey || !apiSecret) {
            return NextResponse.json(
                { error: 'Cloudinary not configured' },
                { status: 500 }
            );
        }

        // Generate signed upload request
        const timestamp = Math.floor(Date.now() / 1000);
        const paramsToSign = `folder=${folder}&timestamp=${timestamp}`;
        const signature = createHash('sha1')
            .update(paramsToSign + apiSecret)
            .digest('hex');

        // Build form data for Cloudinary
        const uploadForm = new FormData();
        uploadForm.append('file', file);
        uploadForm.append('api_key', apiKey);
        uploadForm.append('timestamp', String(timestamp));
        uploadForm.append('signature', signature);
        uploadForm.append('folder', folder);

        const cloudinaryRes = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            { method: 'POST', body: uploadForm }
        );

        const cloudinaryData = await cloudinaryRes.json();

        if (!cloudinaryRes.ok) {
            console.error('Cloudinary error:', cloudinaryData);
            return NextResponse.json(
                { error: cloudinaryData.error?.message || 'Cloudinary upload failed' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message: 'File uploaded successfully',
            url: cloudinaryData.secure_url,
        });

    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to upload file' },
            { status: 500 }
        );
    }
}
