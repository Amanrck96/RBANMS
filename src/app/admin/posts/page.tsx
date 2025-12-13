'use client';

// Posts management page
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, FileText } from 'lucide-react';
import Link from 'next/link';
import { hasPermission } from '@/lib/auth-utils';
import { Post } from '@/types/user';

export default function PostsPage() {
    const { user } = useAuth();
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data.posts || []);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (postId: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        try {
            const token = await auth.currentUser?.getIdToken();
            const response = await fetch(`/api/posts?id=${postId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setPosts(posts.filter(p => p.id !== postId));
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('Failed to delete post');
        }
    };

    if (!user) return null;

    const canDelete = hasPermission(user, 'canDeletePosts');
    const canCreate = hasPermission(user, 'canCreatePosts');

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
                    <p className="text-gray-500 mt-1">Manage blog posts and articles</p>
                </div>
                {canCreate && (
                    <Link href="/admin/posts/new">
                        <Button>
                            <Plus size={20} className="mr-2" />
                            New Post
                        </Button>
                    </Link>
                )}
            </div>

            {loading ? (
                <div className="text-center py-12">Loading posts...</div>
            ) : posts.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                        <p className="text-gray-500 mb-4">Get started by creating your first post</p>
                        {canCreate && (
                            <Link href="/admin/posts/new">
                                <Button>Create Post</Button>
                            </Link>
                        )}
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="text-xl">{post.title}</CardTitle>
                                        <CardDescription className="mt-2">
                                            {post.excerpt}
                                        </CardDescription>
                                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                                            <span>By {post.authorName}</span>
                                            <span>•</span>
                                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                            <span>•</span>
                                            <span className={post.published ? 'text-green-600' : 'text-yellow-600'}>
                                                {post.published ? 'Published' : 'Draft'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link href={`/admin/posts/edit/${post.id}`}>
                                            <Button variant="outline" size="sm">
                                                <Edit size={16} className="mr-2" />
                                                Edit
                                            </Button>
                                        </Link>
                                        {canDelete && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleDelete(post.id)}
                                                className="text-red-600 hover:text-red-700 hover:border-red-300"
                                            >
                                                <Trash2 size={16} className="mr-2" />
                                                Delete
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
