
'use client';

import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { ImageIcon, Loader2, X, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
    folder?: string;
}

export function ImageUpload({ value, onChange, label, folder = 'uploads' }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const { toast } = useToast();

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validations
        const isImageMime = file.type.startsWith('image/') || file.type === '';
        const isImageExt = /\.(jpg|jpeg|png|gif|webp|svg|avif|heic|heif)$/i.test(file.name);
        
        if (!isImageMime && !isImageExt) {
            console.error('Invalid file type:', file.type, 'Name:', file.name);
            toast({ title: 'Invalid File', description: 'Please upload an image file.', variant: 'destructive' });
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            toast({ title: 'File Too Large', description: 'Maximum file size is 5MB.', variant: 'destructive' });
            return;
        }

        setUploading(true);
        setProgress(30);

        try {
            const token = await auth?.currentUser?.getIdToken();
            const formData = new FormData();
            formData.append('file', file);
            formData.append('folder', folder);

            const res = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                console.error('Server upload error:', errorData);
                throw new Error(errorData.error || `Upload failed with status: ${res.status}`);
            }

            const data = await res.json();
            setProgress(100);
            onChange(data.url);
            toast({ title: 'Success', description: 'Image uploaded successfully.' });
        } catch (error: any) {
            console.error('Upload error:', error);
            toast({ title: 'Upload Failed', description: error.message || 'Could not upload image.', variant: 'destructive' });
        } finally {
            setUploading(false);
            setTimeout(() => setProgress(0), 1000);
        }
    };

    return (
        <div className="space-y-3">
            {label && <label className="text-sm font-medium">{label}</label>}

            <div className="flex gap-4 items-start">
                <div className="flex-1 space-y-2">
                    <div className="flex gap-2">
                        <Input
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder="Image URL or upload a file..."
                            className="bg-white"
                        />
                        <div className="relative">
                            <Input
                                type="file"
                                className="hidden"
                                id={`file-upload-${label?.replace(/\s+/g, '-').toLowerCase() || 'default'}`}
                                onChange={handleUpload}
                                accept="image/*"
                                disabled={uploading}
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById(`file-upload-${label?.replace(/\s+/g, '-').toLowerCase() || 'default'}`)?.click()}
                                disabled={uploading}
                            >
                                {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4 mr-2" />}
                                {uploading ? `${Math.round(progress)}%` : 'Upload'}
                            </Button>
                        </div>
                    </div>
                    {uploading && <Progress value={progress} className="h-1" />}
                </div>

                {value && (
                    <div className="relative h-12 w-12 rounded border bg-slate-50 overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={value} alt="Preview" className="h-full w-full object-cover" />
                        <button
                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors"
                            onClick={() => onChange('')}
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
