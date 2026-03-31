'use client';

// Public blog page displaying published posts
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';
import Link from 'next/link';
import { Post } from '@/types/user';
import { db } from '@/lib/firebase-client';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!db) {
            setLoading(false);
            return;
        }

        const postsQuery = query(
            collection(db, 'posts'),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(
            postsQuery,
            (snapshot) => {
                const postsList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Post[];
                // Filter manually to avoid Firestore composite index requirement
                setPosts(postsList.filter(p => p.published === true));
                setLoading(false);
            },
            (error) => {
                console.error('Real-time posts listener error:', error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <SiteHeader />
            {/* Header */}
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <div className="container mx-auto px-4 py-12">
                    <DynamicSection
                        pageId="blog-header"
                        render={(data) => (
                            <>
                                <h1 className="text-4xl font-bold mb-2">{data.title || "Blog"}</h1>
                                <p className="text-blue-100">{data.tagline || "Latest updates and articles from RBANMS First Grade College"}</p>
                            </>
                        )}
                    />
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 py-12">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="text-lg text-gray-600">Loading posts...</div>
                    </div>
                ) : posts.length === 0 ? (
                    <Card className="max-w-2xl mx-auto">
                        <CardContent className="py-12 text-center">
                            <div className="text-6xl mb-4">📝</div>
                            <h2 className="text-2xl font-semibold mb-2">No posts yet</h2>
                            <p className="text-gray-500">Check back soon for new content!</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="max-w-4xl mx-auto space-y-8">
                        {posts.map((post) => (
                            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="aspect-video w-full overflow-hidden bg-gray-200">
                                    {post.imageUrl ? (
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-200">
                                            <Calendar size={48} />
                                        </div>
                                    )}
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl hover:text-blue-600 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                                        <div className="flex items-center gap-1">
                                            <User size={16} />
                                            <span>{post.authorName}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={16} />
                                            <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base mb-4">
                                        {post.excerpt}
                                    </CardDescription>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                                    >
                                        Read more →
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </main>
            <SiteFooter />
        </div>
    );
}
