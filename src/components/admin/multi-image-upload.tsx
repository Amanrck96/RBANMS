'use client';

import { useState, useRef } from 'react';
import { auth } from '@/lib/firebase-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
    ImageIcon,
    Loader2,
    X,
    Star,
    ArrowLeft,
    ArrowRight,
    Plus,
    UploadCloud,
    CheckCircle2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MultiImageUploadProps {
    images: string[];
    onChange: (images: string[]) => void;
    featuredImage?: string;
    onFeaturedChange?: (url: string) => void;
    label?: string;
    description?: string;
    folder?: string;
    maxImages?: number;
}

export function MultiImageUpload({
    images = [],
    onChange,
    featuredImage,
    onFeaturedChange,
    label = 'Event Images',
    description = 'Upload one or multiple photos for this event. The featured image will be used as the primary cover on cards and listings.',
    folder = 'events',
    maxImages = 30
}: MultiImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('');
    const [manualUrl, setManualUrl] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    // Determine effective featured image (either prop, or first image in list)
    const effectiveFeatured = featuredImage || (images.length > 0 ? images[0] : '');

    const handleFiles = async (files: FileList | File[]) => {
        const fileArray = Array.from(files);
        if (fileArray.length === 0) return;

        if (images.length + fileArray.length > maxImages) {
            toast({
                title: 'Limit Exceeded',
                description: `You can upload a maximum of ${maxImages} images per event.`,
                variant: 'destructive'
            });
            return;
        }

        // Validate all files
        const validFiles: File[] = [];
        for (const file of fileArray) {
            const isImageMime = file.type.startsWith('image/') || file.type === '';
            const isImageExt = /\.(jpg|jpeg|png|gif|webp|svg|avif|heic|heif)$/i.test(file.name);
            if (!isImageMime && !isImageExt) {
                toast({
                    title: 'Invalid File',
                    description: `"${file.name}" is not a supported image file.`,
                    variant: 'destructive'
                });
                continue;
            }
            if (file.size > 5 * 1024 * 1024) {
                toast({
                    title: 'File Too Large',
                    description: `"${file.name}" exceeds the 5MB size limit.`,
                    variant: 'destructive'
                });
                continue;
            }
            validFiles.push(file);
        }

        if (validFiles.length === 0) return;

        setUploading(true);
        setProgress(10);
        setStatusText(`Preparing to upload ${validFiles.length} ${validFiles.length === 1 ? 'image' : 'images'}...`);

        try {
            const token = await auth?.currentUser?.getIdToken();
            const uploadedUrls: string[] = [];

            for (let i = 0; i < validFiles.length; i++) {
                const file = validFiles[i];
                const currentPct = Math.round(10 + ((i + 1) / validFiles.length) * 85);
                setProgress(currentPct);
                setStatusText(`Uploading ${i + 1} of ${validFiles.length}: ${file.name}...`);

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
                    const errData = await res.json().catch(() => ({}));
                    throw new Error(errData.error || `Failed to upload ${file.name}`);
                }

                const data = await res.json();
                if (data.url) {
                    uploadedUrls.push(data.url);
                }
            }

            const updatedImages = [...images, ...uploadedUrls];
            onChange(updatedImages);

            // If there was no featured image yet, set the first uploaded one
            if (!effectiveFeatured && uploadedUrls.length > 0 && onFeaturedChange) {
                onFeaturedChange(uploadedUrls[0]);
            }

            setProgress(100);
            setStatusText('Upload complete!');
            toast({
                title: 'Upload Successful',
                description: `Added ${uploadedUrls.length} ${uploadedUrls.length === 1 ? 'image' : 'images'} to the event.`,
            });
        } catch (error: any) {
            console.error('Multi-upload error:', error);
            toast({
                title: 'Upload Failed',
                description: error.message || 'Could not complete image upload.',
                variant: 'destructive'
            });
        } finally {
            setUploading(false);
            setTimeout(() => {
                setProgress(0);
                setStatusText('');
            }, 1500);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleAddManualUrl = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = manualUrl.trim();
        if (!trimmed) return;

        if (images.includes(trimmed)) {
            toast({
                title: 'Already Added',
                description: 'This image URL is already in the list.',
                variant: 'destructive'
            });
            return;
        }

        const next = [...images, trimmed];
        onChange(next);
        if (!effectiveFeatured && onFeaturedChange) {
            onFeaturedChange(trimmed);
        }
        setManualUrl('');
        toast({
            title: 'Image Added',
            description: 'Image URL successfully added.',
        });
    };

    const handleRemove = (indexToRemove: number) => {
        const removedUrl = images[indexToRemove];
        const next = images.filter((_, i) => i !== indexToRemove);
        onChange(next);

        // If the removed image was featured, pick a new featured image
        if (effectiveFeatured === removedUrl && onFeaturedChange) {
            onFeaturedChange(next.length > 0 ? next[0] : '');
        }
    };

    const handleSetFeatured = (url: string) => {
        if (onFeaturedChange) {
            onFeaturedChange(url);
        }
        // Also move it to the front of images list if desired for predictable ordering
        const filtered = images.filter(u => u !== url);
        onChange([url, ...filtered]);

        toast({
            title: 'Featured Image Set',
            description: 'This photo will now be displayed as the main event cover.',
        });
    };

    const handleMove = (index: number, direction: 'left' | 'right') => {
        const targetIndex = direction === 'left' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= images.length) return;

        const next = [...images];
        const temp = next[index];
        next[index] = next[targetIndex];
        next[targetIndex] = temp;

        onChange(next);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isDragging) setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    return (
        <div className="space-y-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                    <label className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-[#800000]" />
                        {label}
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {images.length} {images.length === 1 ? 'image' : 'images'}
                        </span>
                    </label>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        id="multi-image-file-input"
                        multiple
                        accept="image/*"
                        disabled={uploading}
                        onChange={(e) => {
                            if (e.target.files) handleFiles(e.target.files);
                        }}
                    />
                    <Button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="bg-[#800000] hover:bg-[#660000] text-white shadow-sm"
                        size="sm"
                    >
                        {uploading ? (
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        ) : (
                            <UploadCloud className="h-4 w-4 mr-2" />
                        )}
                        {uploading ? 'Uploading...' : 'Upload Photos'}
                    </Button>
                </div>
            </div>

            {/* Drop Zone & Upload Progress */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !uploading && fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    isDragging
                        ? 'border-[#800000] bg-red-50/50 scale-[1.005]'
                        : 'border-slate-300 hover:border-[#800000]/60 hover:bg-slate-50/60 bg-slate-50/30'
                } ${uploading ? 'pointer-events-none opacity-80' : ''}`}
            >
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000]">
                        {uploading ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                            <UploadCloud className="w-6 h-6" />
                        )}
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-800">
                            {uploading ? 'Uploading your photos...' : 'Drag & drop multiple event photos here, or click to browse'}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                            Supports multiple selection • JPG, PNG, WebP, AVIF up to 5MB each
                        </p>
                    </div>
                </div>

                {uploading && (
                    <div className="mt-4 max-w-md mx-auto space-y-2">
                        <Progress value={progress} className="h-2" />
                        <div className="flex items-center justify-between text-xs text-slate-600">
                            <span>{statusText}</span>
                            <span className="font-bold text-[#800000]">{progress}%</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Add via direct URL */}
            <div className="pt-1">
                <form onSubmit={handleAddManualUrl} className="flex gap-2">
                    <Input
                        value={manualUrl}
                        onChange={(e) => setManualUrl(e.target.value)}
                        placeholder="Or paste external image URL and click Add..."
                        className="bg-white text-xs"
                        disabled={uploading}
                    />
                    <Button
                        type="submit"
                        variant="outline"
                        size="sm"
                        disabled={uploading || !manualUrl.trim()}
                        className="shrink-0"
                    >
                        <Plus className="h-4 w-4 mr-1.5" />
                        Add URL
                    </Button>
                </form>
            </div>

            {/* Images Grid */}
            {images.length > 0 ? (
                <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                        <span>Event Gallery ({images.length} photos)</span>
                        <span className="text-[11px] text-slate-400">
                            Tip: Click the star icon to set as featured cover
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {images.map((url, idx) => {
                            const isFeatured = (effectiveFeatured === url) || (idx === 0 && !featuredImage);
                            return (
                                <div
                                    key={`${url}-${idx}`}
                                    className={`relative group rounded-lg overflow-hidden border-2 bg-slate-100 transition-all ${
                                        isFeatured
                                            ? 'border-[#800000] shadow-md ring-2 ring-[#800000]/20'
                                            : 'border-slate-200 hover:border-slate-400 shadow-sm'
                                    }`}
                                >
                                    {/* Thumbnail */}
                                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200 relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={url}
                                            alt={`Event image ${idx + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                                            }}
                                        />

                                        {/* Featured Tag Badge */}
                                        {isFeatured && (
                                            <div className="absolute top-2 left-2 z-10">
                                                <span className="inline-flex items-center gap-1 bg-[#800000] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow uppercase tracking-wider">
                                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                    Cover
                                                </span>
                                            </div>
                                        )}

                                        {/* Number Badge */}
                                        <div className="absolute bottom-2 left-2 z-10">
                                            <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                #{idx + 1}
                                            </span>
                                        </div>

                                        {/* Action Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-2">
                                            {/* Set as featured button */}
                                            {!isFeatured && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleSetFeatured(url)}
                                                    title="Set as Featured Cover Image"
                                                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-[#800000] flex items-center justify-center transition-transform hover:scale-110 shadow"
                                                >
                                                    <Star className="w-4 h-4 fill-none" />
                                                </button>
                                            )}

                                            {/* Move left */}
                                            {idx > 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleMove(idx, 'left')}
                                                    title="Move Earlier"
                                                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center transition-transform hover:scale-110 shadow"
                                                >
                                                    <ArrowLeft className="w-4 h-4" />
                                                </button>
                                            )}

                                            {/* Move right */}
                                            {idx < images.length - 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleMove(idx, 'right')}
                                                    title="Move Later"
                                                    className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center transition-transform hover:scale-110 shadow"
                                                >
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            )}

                                            {/* Delete */}
                                            <button
                                                type="button"
                                                onClick={() => handleRemove(idx)}
                                                title="Remove this image"
                                                className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-transform hover:scale-110 shadow"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="p-2 bg-white flex items-center justify-between border-t border-slate-100">
                                        <span className="text-[11px] text-slate-500 truncate max-w-[120px]" title={url}>
                                            {url.split('/').pop() || 'image'}
                                        </span>
                                        {!isFeatured ? (
                                            <button
                                                type="button"
                                                onClick={() => handleSetFeatured(url)}
                                                className="text-[10px] text-[#800000] hover:underline font-semibold"
                                            >
                                                Make Cover
                                            </button>
                                        ) : (
                                            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                                                <CheckCircle2 className="w-3 h-3" /> Cover
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="text-center py-6 text-slate-400 text-xs italic">
                    No images added yet. Upload files or paste an image URL above.
                </div>
            )}
        </div>
    );
}
