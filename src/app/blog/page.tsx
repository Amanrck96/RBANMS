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
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full group">
                                <div className="aspect-video w-full overflow-hidden bg-gray-200 shrink-0">
                                    {post.imageUrl ? (
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-200">
                                            <Calendar size={48} />
                                        </div>
                                    )}
                                </div>
                                <CardHeader className="shrink-0 pb-4">
                                    <CardTitle className="text-xl hover:text-blue-600 transition-colors line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mt-2">
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{post.authorName}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1 pt-0">
                                    <CardDescription className="text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </CardDescription>
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center text-sm group-hover:text-blue-800 transition-colors"
                                        >
                                            Read more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </div>
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
