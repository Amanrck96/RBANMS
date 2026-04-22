// API routes for managing blog events
import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';
import { generateSlug } from '@/lib/auth-utils';

// GET - Fetch all events or a specific event
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const eventId = searchParams.get('id');
        const published = searchParams.get('published');

        if (eventId) {
            // Fetch single event
            const eventDoc = await adminDb.collection('events').doc(eventId).get();
            if (!eventDoc.exists) {
                return NextResponse.json(
                    { error: 'Event not found' },
                    { status: 404 }
                );
            }
            return NextResponse.json({ event: eventDoc.data() });
        }

        // Fetch all events without where filter to avoid composite index requirements
        let query = adminDb.collection('events').orderBy('createdAt', 'desc');

        const snapshot = await query.get();
        let events = snapshot.docs.map(doc => doc.data());

        if (published === 'true') {
            events = events.filter(event => event.published === true);
        }

        return NextResponse.json({ events });
    } catch (error) {
        console.error('Fetch events error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch events' },
            { status: 500 }
        );
    }
}

// POST - Create a new event
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

        // Check if user has permission to create events
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
        const eventId = adminDb.collection('events').doc().id;

        const eventData = {
            id: eventId,
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

        await adminDb.collection('events').doc(eventId).set(eventData);

        return NextResponse.json({
            message: 'Event created successfully',
            event: eventData,
        });
    } catch (error: any) {
        console.error('Create event error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create event' },
            { status: 500 }
        );
    }
}

// PUT - Update a event
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

        const { eventId, title, content, excerpt, imageUrl, published } = await request.json();

        const eventDoc = await adminDb.collection('events').doc(eventId).get();
        if (!eventDoc.exists) {
            return NextResponse.json(
                { error: 'Event not found' },
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

        await adminDb.collection('events').doc(eventId).update(updates);

        const updatedEvent = await adminDb.collection('events').doc(eventId).get();

        return NextResponse.json({
            message: 'Event updated successfully',
            event: updatedEvent.data(),
        });
    } catch (error: any) {
        console.error('Update event error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to update event' },
            { status: 500 }
        );
    }
}

// DELETE - Delete a event (super admin only)
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
                { error: 'Forbidden: Only super admins can delete events' },
                { status: 403 }
            );
        }

        const { searchParams } = new URL(request.url);
        const eventId = searchParams.get('id');

        if (!eventId) {
            return NextResponse.json(
                { error: 'Event ID required' },
                { status: 400 }
            );
        }

        await adminDb.collection('events').doc(eventId).delete();

        return NextResponse.json({
            message: 'Event deleted successfully',
        });
    } catch (error: any) {
        console.error('Delete event error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to delete event' },
            { status: 500 }
        );
    }
}
