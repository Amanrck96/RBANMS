'use client';

// Create/Edit post form
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function PostEditorPage() {
    const router = useRouter();
    const params = useParams();
    const { user } = useAuth();
    const isEditing = params?.id && params.id !== 'new';

    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [published, setPublished] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(isEditing);

    useEffect(() => {
        if (isEditing) {
            fetchPost();
        }
    }, [isEditing]);

    const fetchPost = async () => {
        try {
            const response = await fetch(`/api/posts?id=${params.id}`);
            const data = await response.json();
            if (data.post) {
                setTitle(data.post.title);
                setExcerpt(data.post.excerpt);
                setContent(data.post.content);
                setImageUrl(data.post.imageUrl || '');
                setPublished(data.post.published);
            }
        } catch (error) {
            console.error('Failed to fetch post:', error);
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = await auth.currentUser?.getIdToken();
            const url = '/api/posts';
            const method = isEditing ? 'PUT' : 'POST';
            const body = isEditing
                ? { postId: params.id, title, excerpt, content, imageUrl, published }
                : { title, excerpt, content, imageUrl, published };

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                router.push('/admin/posts');
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to save post');
            }
        } catch (error) {
            console.error('Save error:', error);
            alert('Failed to save post');
        } finally {
            setLoading(false);
        }
    };

    if (!user || fetching) {
        return (
            <div className="text-center py-12">
                {fetching ? 'Loading post...' : 'Loading...'}
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/posts">
                    <Button variant="outline" size="sm">
                        <ArrowLeft size={16} className="mr-2" />
                        Back
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">
                    {isEditing ? 'Edit Post' : 'Create New Post'}
                </h1>
            </div>

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Post Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title *</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter post title"
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="excerpt">Excerpt *</Label>
                            <Textarea
                                id="excerpt"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                placeholder="Brief summary of the post"
                                rows={3}
                                required
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <Input
                                id="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="https://example.com/image.jpg"
                                disabled={loading}
                            />
                            {imageUrl && (
                                <div className="mt-2">
                                    <img
                                        src={imageUrl}
                                        alt="Preview"
                                        className="max-w-sm rounded-lg border"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content *</Label>
                            <Textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write your post content here..."
                                rows={15}
                                required
                                disabled={loading}
                                className="font-mono text-sm"
                            />
                            <p className="text-xs text-gray-500">
                                You can use markdown formatting in the content.
                            </p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Switch
                                id="published"
                                checked={published}
                                onCheckedChange={setPublished}
                                disabled={loading}
                            />
                            <Label htmlFor="published" className="cursor-pointer">
                                Publish immediately
                            </Label>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button type="submit" disabled={loading}>
                                <Save size={16} className="mr-2" />
                                {loading ? 'Saving...' : isEditing ? 'Update Post' : 'Create Post'}
                            </Button>
                            <Link href="/admin/posts">
                                <Button type="button" variant="outline" disabled={loading}>
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
