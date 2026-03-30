'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/types/user';

export function LatestPosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts?published=true');
                if (res.ok) {
                    const data = await res.json();
                    setPosts((data.posts || []).slice(0, 3));
                }
            } catch (error) {
                console.error('Failed to fetch latest posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading || posts.length === 0) return null;

    return (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8 border-l-8 border-blue-900 pl-6">
                    <h2 className="text-3xl font-bold text-blue-900 font-headline uppercase tracking-wide">
                        Latest Blogs & News
                    </h2>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap hidden sm:flex items-center gap-1 transition-colors">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all flex flex-col h-full bg-white border-blue-100">
                            {post.imageUrl && (
                                <div className="aspect-video w-full overflow-hidden bg-gray-200">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                    />
                                </div>
                            )}
                            <CardHeader className="flex-grow p-5 pb-3">
                                <CardTitle className="text-xl hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </CardTitle>
                                <div className="flex items-center gap-4 text-xs text-slate-500 mt-3">
                                    <div className="flex items-center gap-1.5 font-medium">
                                        <Calendar size={14} className="text-blue-900" />
                                        <span>{new Date(post.createdAt).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-5 pt-0">
                                <CardDescription className="text-sm line-clamp-3 mb-4 text-slate-600 leading-relaxed">
                                    {post.excerpt}
                                </CardDescription>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-700 hover:text-blue-900 text-sm font-bold inline-flex items-center transition-colors group"
                                >
                                    Read more <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
                <div className="mt-8 text-center sm:hidden">
                    <Link href="/blog" className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-800 transition-colors">
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
