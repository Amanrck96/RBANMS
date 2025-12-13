// API routes for managing blog posts
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';
import { generateSlug } from '@/lib/auth-utils';

// GET - Fetch all posts or a specific post
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const postId = searchParams.get('id');
        const published = searchParams.get('published');

        if (postId) {
            // Fetch single post
            const postDoc = await adminDb.collection('posts').doc(postId).get();
            if (!postDoc.exists) {
                return NextResponse.json(
                    { error: 'Post not found' },
                    { status: 404 }
                );
            }
            return NextResponse.json({ post: postDoc.data() });
        }

        // Fetch all posts
        let query = adminDb.collection('posts').orderBy('createdAt', 'desc');

        if (published === 'true') {
            query = query.where('published', '==', true) as any;
        }

        const snapshot = await query.get();
        const posts = snapshot.docs.map(doc => doc.data());

        return NextResponse.json({ posts });
    } catch (error) {
        console.error('Fetch posts error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch posts' },
            { status: 500 }
        );
    }
}

// POST - Create a new post
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

        // Check if user has permission to create posts
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

        const { title, content, excerpt, imageUrl, published } = await request.json();

        const now = new Date().toISOString();
        const slug = generateSlug(title);
        const postId = adminDb.collection('posts').doc().id;

        const postData = {
            id: postId,
            title,
            content,
            excerpt,
            imageUrl: imageUrl || '',
            authorId: uid,
            authorName: userData?.displayName || userData?.email || 'Unknown',
            createdAt: now,
            updatedAt: now,
            published: published || false,
            slug,
        };

        await adminDb.collection('posts').doc(postId).set(postData);

        return NextResponse.json({
            message: 'Post created successfully',
            post: postData,
        });
    } catch (error: any) {
        console.error('Create post error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create post' },
            { status: 500 }
        );
    }
}

// PUT - Update a post
export async function PUT(request: NextRequest) {
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

        const { postId, title, content, excerpt, imageUrl, published } = await request.json();

        const postDoc = await adminDb.collection('posts').doc(postId).get();
        if (!postDoc.exists) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            );
        }

        const now = new Date().toISOString();
        const updates: any = {
            updatedAt: now,
        };

        if (title !== undefined) {
            updates.title = title;
            updates.slug = generateSlug(title);
        }
        if (content !== undefined) updates.content = content;
        if (excerpt !== undefined) updates.excerpt = excerpt;
        if (imageUrl !== undefined) updates.imageUrl = imageUrl;
        if (published !== undefined) updates.published = published;

        await adminDb.collection('posts').doc(postId).update(updates);

        const updatedPost = await adminDb.collection('posts').doc(postId).get();

        return NextResponse.json({
            message: 'Post updated successfully',
            post: updatedPost.data(),
        });
    } catch (error: any) {
        console.error('Update post error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update post' },
            { status: 500 }
        );
    }
}

// DELETE - Delete a post (super admin only)
export async function DELETE(request: NextRequest) {
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

        const userDoc = await adminDb.collection('users').doc(uid).get();
        if (!userDoc.exists || userDoc.data()?.role !== 'super_admin') {
            return NextResponse.json(
                { error: 'Forbidden: Only super admins can delete posts' },
                { status: 403 }
            );
        }

        const { searchParams } = new URL(request.url);
        const postId = searchParams.get('id');

        if (!postId) {
            return NextResponse.json(
                { error: 'Post ID required' },
                { status: 400 }
            );
        }

        await adminDb.collection('posts').doc(postId).delete();

        return NextResponse.json({
            message: 'Post deleted successfully',
        });
    } catch (error: any) {
        console.error('Delete post error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete post' },
            { status: 500 }
        );
    }
}
