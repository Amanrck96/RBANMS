
'use client';

import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase-client';
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
        if (!file || !storage) return;

        // Validations
        if (!file.type.startsWith('image/')) {
            toast({ title: 'Invalid File', description: 'Please upload an image file.', variant: 'destructive' });
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            toast({ title: 'File Too Large', description: 'Maximum file size is 5MB.', variant: 'destructive' });
            return;
        }

        setUploading(true);
        const storageRef = ref(storage, `${folder}/${Date.now()}-${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(p);
            },
            (error) => {
                console.error('Upload error:', error);
                toast({ title: 'Upload Failed', description: 'Could not upload image.', variant: 'destructive' });
                setUploading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    onChange(downloadURL);
                    setUploading(false);
                    setProgress(0);
                    toast({ title: 'Success', description: 'Image uploaded successfully.' });
                });
            }
        );
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
