'use client';

// Individual blog post page
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/types/user';
import { db } from '@/lib/firebase-client';
import { collection, query, where, onSnapshot, limit } from 'firebase/firestore';

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!db || !params.slug) {
            setLoading(false);
            return;
        }

        const postsQuery = query(
            collection(db, 'posts'),
            where('slug', '==', params.slug),
            where('published', '==', true),
            limit(1)
        );

        const unsubscribe = onSnapshot(
            postsQuery,
            (snapshot) => {
                if (!snapshot.empty) {
                    const postData = snapshot.docs[0].data();
                    setPost({
                        id: snapshot.docs[0].id,
                        ...postData
                    } as Post);
                } else {
                    setPost(null);
                }
                setLoading(false);
            },
            (error) => {
                console.error('Real-time post listener error:', error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg text-gray-600">Loading...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Card className="max-w-md">
                    <CardContent className="py-12 text-center">
                        <div className="text-6xl mb-4">😕</div>
                        <h2 className="text-2xl font-semibold mb-2">Post not found</h2>
                        <p className="text-gray-500 mb-6">The post you&apos;re looking for doesn&apos;t exist.</p>
                        <Link href="/blog">
                            <Button>
                                <ArrowLeft size={16} className="mr-2" />
                                Back to Blog
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <Link href="/blog">
                        <Button variant="ghost" className="text-white hover:bg-blue-700 mb-4">
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 py-12">
                <article className="max-w-4xl mx-auto">
                    <Card className="overflow-hidden">
                        {post.imageUrl && (
                            <div className="aspect-video w-full overflow-hidden bg-gray-200">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <CardHeader className="space-y-4">
                            <CardTitle className="text-4xl">{post.title}</CardTitle>

                            <div className="flex items-center gap-6 text-gray-600 pt-2 border-t">
                                <div className="flex items-center gap-2">
                                    <User size={18} />
                                    <span>{post.authorName}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="prose prose-lg max-w-none">
                            {post.excerpt && (
                                <p className="text-xl text-gray-600 italic mb-6 pb-6 border-b">
                                    {post.excerpt}
                                </p>
                            )}

                            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                                {post.content}
                            </div>

                            {post.updatedAt && post.updatedAt !== post.createdAt && (
                                <p className="text-sm text-gray-500 mt-8 pt-6 border-t">
                                    Last updated: {new Date(post.updatedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </article>
            </main>
        </div>
    );
}
