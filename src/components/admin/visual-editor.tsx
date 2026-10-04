'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Link as LinkIcon,
    Quote,
    Eye,
    Code as CodeIcon,
    ImageIcon,
    Loader2,
    UploadCloud,
    X,
    Check,
    Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { auth } from '@/lib/firebase-client';
import { useToast } from '@/hooks/use-toast';

interface VisualEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function VisualEditor({ value, onChange, placeholder }: VisualEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const savedRangeRef = useRef<Range | null>(null);

    const [view, setView] = useState<'visual' | 'code'>('visual');
    const [uploading, setUploading] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [imageTab, setImageTab] = useState<'upload' | 'url'>('upload');
    const [imageUrlInput, setImageUrlInput] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);

    const { toast } = useToast();

    const cleanHTML = (html: string) => {
        if (!html) return '';
        return html
            .replace(/<\s+([a-zA-Z0-9]+)/g, '<$1')
            .replace(/<\s+\/([a-zA-Z0-9]+)\s*>/g, '</$1>')
            .replace(/([a-zA-Z0-9]+)\s+>/g, '$1>')
            .replace(/<\s+([a-zA-Z0-9]+)\s+([^>]*)\s*>/g, '<$1 $2>');
    };

    useEffect(() => {
        const cleanedValue = cleanHTML(value);
        if (editorRef.current && editorRef.current.innerHTML !== cleanedValue) {
            editorRef.current.innerHTML = cleanedValue || '';
        }
    }, [value]);

    // Save selection so we know where to insert images or links
    const saveSelection = useCallback(() => {
        if (typeof window === 'undefined') return;
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            if (editorRef.current && editorRef.current.contains(range.commonAncestorContainer)) {
                savedRangeRef.current = range.cloneRange();
            }
        }
    }, []);

    const execCommand = (command: string, val: string | null = null) => {
        document.execCommand(command, false, val as string);
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    // Guaranteed insertion into editor (at cursor if saved, otherwise append to end)
    const insertImageToEditor = (url: string) => {
        if (!url || !url.trim()) {
            toast({ title: 'Invalid URL', description: 'Please provide a valid image URL.', variant: 'destructive' });
            return;
        }

        const cleanUrl = url.trim();

        if (editorRef.current) {
            editorRef.current.focus();

            let inserted = false;
            const sel = window.getSelection();
            const targetRange = savedRangeRef.current;

            if (targetRange && editorRef.current.contains(targetRange.commonAncestorContainer)) {
                try {
                    targetRange.deleteContents();
                    const img = document.createElement('img');
                    img.src = cleanUrl;
                    img.alt = 'Event photograph';
                    img.className = 'rounded-xl shadow-md my-6 max-w-full h-auto object-cover block';

                    targetRange.insertNode(img);

                    const p = document.createElement('p');
                    p.innerHTML = '<br>';
                    img.parentNode?.insertBefore(p, img.nextSibling);

                    if (sel) {
                        const newRange = document.createRange();
                        newRange.setStart(p, 0);
                        newRange.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(newRange);
                    }
                    inserted = true;
                } catch (e) {
                    console.warn('Range insertion failed, falling back to append', e);
                    inserted = false;
                }
            }

            if (!inserted) {
                // Fallback: Append directly to content
                const img = document.createElement('img');
                img.src = cleanUrl;
                img.alt = 'Event photograph';
                img.className = 'rounded-xl shadow-md my-6 max-w-full h-auto object-cover block';

                const p = document.createElement('p');
                p.innerHTML = '<br>';

                editorRef.current.appendChild(img);
                editorRef.current.appendChild(p);
            }

            onChange(editorRef.current.innerHTML);
        }

        // Cleanup modal state
        setShowImageModal(false);
        setImageUrlInput('');
        setSelectedFile(null);
        setFilePreview(null);
        toast({ title: 'Image Inserted', description: 'Image has been added to the content.' });
    };

    const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>) => {
        const items = e.clipboardData?.items;
        if (!items) return;

        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                const file = items[i].getAsFile();
                if (!file) continue;

                e.preventDefault();
                setUploading(true);

                try {
                    const token = await auth?.currentUser?.getIdToken();
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('folder', 'editor');

                    const res = await fetch('/api/upload', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                        body: formData
                    });

                    if (!res.ok) {
                        const errorData = await res.json().catch(() => ({}));
                        throw new Error(errorData.error || 'Upload failed');
                    }

                    const data = await res.json();
                    insertImageToEditor(data.url);
                } catch (error: any) {
                    console.error('Paste upload error:', error);
                    toast({ title: 'Paste Upload Failed', description: error.message || 'Could not upload pasted image.', variant: 'destructive' });
                } finally {
                    setUploading(false);
                }
                break;
            }
        }
    };

    const handleFileSelect = (file: File) => {
        if (!file.type.startsWith('image/')) {
            toast({ title: 'Invalid File', description: 'Please select an image file.', variant: 'destructive' });
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            toast({ title: 'File Too Large', description: 'Maximum file size is 5MB.', variant: 'destructive' });
            return;
        }

        setSelectedFile(file);
        const reader = new FileReader();
        reader.onload = (e) => setFilePreview(e.target?.result as string);
        reader.readAsDataURL(file);
    };

    const handleUploadSelectedFile = async () => {
        if (!selectedFile) return;

        setUploading(true);
        try {
            const token = await auth?.currentUser?.getIdToken(true);
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('folder', 'editor');

            const res = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.error || 'Upload failed');
            }

            const data = await res.json();
            insertImageToEditor(data.url);
        } catch (error: any) {
            console.error('Upload error:', error);
            toast({ title: 'Upload Failed', description: error.message || 'Could not upload image.', variant: 'destructive' });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="border rounded-md overflow-hidden bg-white relative">
            {/* Hidden file input controlled via ref */}
            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileSelect(file);
                }}
            />

            {/* Toolbar */}
            <div className="bg-gray-50 border-b p-2 flex flex-wrap gap-1 sticky top-0 z-10">
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('bold')}
                    title="Bold"
                >
                    <Bold size={16} />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('italic')}
                    title="Italic"
                >
                    <Italic size={16} />
                </Button>
                <div className="w-px h-6 bg-gray-300 mx-1 self-center" />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('formatBlock', '<h1>')}
                    title="Heading 1"
                >
                    <Heading1 size={16} />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('formatBlock', '<h2>')}
                    title="Heading 2"
                >
                    <Heading2 size={16} />
                </Button>
                <div className="w-px h-6 bg-gray-300 mx-1 self-center" />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('fontSize', '2')}
                    title="Font Size: Small"
                >
                    <span className="text-[10px] font-bold text-slate-700">A-</span>
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('fontSize', '4')}
                    title="Font Size: Normal"
                >
                    <span className="text-[13px] font-bold text-slate-700">A</span>
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('fontSize', '6')}
                    title="Font Size: Large"
                >
                    <span className="text-[16px] font-bold text-slate-700">A+</span>
                </Button>
                <div className="w-px h-6 bg-gray-300 mx-1 self-center" />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('insertUnorderedList')}
                    title="Bullet List"
                >
                    <List size={16} />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('insertOrderedList')}
                    title="Numbered List"
                >
                    <ListOrdered size={16} />
                </Button>
                <div className="w-px h-6 bg-gray-300 mx-1 self-center" />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                        saveSelection();
                        const url = prompt('Enter URL:');
                        if (url) execCommand('createLink', url);
                    }}
                    title="Insert Link"
                >
                    <LinkIcon size={16} />
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => execCommand('formatBlock', '<blockquote>')}
                    title="Quote"
                >
                    <Quote size={16} />
                </Button>
                <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

                {/* INSERT IMAGE BUTTON */}
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                        saveSelection();
                        setShowImageModal(true);
                    }}
                    title="Insert Image"
                    className="hover:bg-[#800000]/10 hover:text-[#800000] text-slate-700"
                >
                    {uploading ? <Loader2 size={16} className="animate-spin text-[#800000]" /> : <ImageIcon size={16} />}
                    <span className="ml-1 text-xs font-semibold hidden sm:inline">Image</span>
                </Button>

                {/* View Switcher */}
                <div className="ml-auto flex gap-1">
                    <Button
                        type="button"
                        variant={view === 'visual' ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => setView('visual')}
                    >
                        <Eye size={16} className="mr-2" />
                        Visual
                    </Button>
                    <Button
                        type="button"
                        variant={view === 'code' ? 'secondary' : 'ghost'}
                        size="sm"
                        onClick={() => setView('code')}
                    >
                        <CodeIcon size={16} className="mr-2" />
                        Code
                    </Button>
                </div>
            </div>

            {/* Editor Area */}
            <div className="relative min-h-[400px]">
                {view === 'visual' ? (
                    <div
                        ref={editorRef}
                        contentEditable
                        onInput={handleInput}
                        onPaste={handlePaste}
                        onKeyUp={saveSelection}
                        onMouseUp={saveSelection}
                        onBlur={saveSelection}
                        className="p-6 focus:outline-none prose prose-slate max-w-none min-h-[400px]"
                        dangerouslySetInnerHTML={{ __html: value }}
                    />
                ) : (
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full h-full min-h-[400px] p-6 font-mono text-sm focus:outline-none bg-gray-900 text-gray-100 border-none resize-none"
                    />
                )}
            </div>

            {!value && view === 'visual' && (
                <div className="absolute top-16 left-6 text-gray-400 pointer-events-none">
                    {placeholder || 'Start writing...'}
                </div>
            )}

            {/* INSERT IMAGE MODAL DIALOG */}
            {showImageModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setShowImageModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 bg-slate-50 border-b border-slate-200">
                            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                                <ImageIcon className="w-5 h-5 text-[#800000]" />
                                Insert Image into Content
                            </h3>
                            <button
                                type="button"
                                onClick={() => setShowImageModal(false)}
                                className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Modal Tabs */}
                        <div className="flex border-b border-slate-200 bg-slate-100/50 p-1">
                            <button
                                type="button"
                                onClick={() => setImageTab('upload')}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                                    imageTab === 'upload'
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                <UploadCloud className="w-4 h-4 text-[#800000]" />
                                Upload from Computer
                            </button>
                            <button
                                type="button"
                                onClick={() => setImageTab('url')}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                                    imageTab === 'url'
                                        ? 'bg-white text-slate-900 shadow-sm'
                                        : 'text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                <Globe className="w-4 h-4 text-blue-900" />
                                Paste Image URL
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-5 space-y-4">
                            {imageTab === 'upload' ? (
                                <div className="space-y-4">
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={(e) => {
                                            e.preventDefault();
                                            const file = e.dataTransfer.files?.[0];
                                            if (file) handleFileSelect(file);
                                        }}
                                        className="border-2 border-dashed border-slate-300 hover:border-[#800000] rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50 hover:bg-slate-100/60"
                                    >
                                        {filePreview ? (
                                            <div className="space-y-2">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={filePreview}
                                                    alt="Preview"
                                                    className="max-h-48 mx-auto rounded-lg shadow-sm object-contain"
                                                />
                                                <p className="text-xs text-slate-500 font-medium truncate">
                                                    {selectedFile?.name}
                                                </p>
                                                <span className="text-[11px] text-[#800000] font-semibold">
                                                    Click to choose a different photo
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <div className="w-12 h-12 rounded-full bg-[#800000]/10 text-[#800000] mx-auto flex items-center justify-center">
                                                    <UploadCloud className="w-6 h-6" />
                                                </div>
                                                <div className="text-sm font-semibold text-slate-800">
                                                    Click to browse or drag and drop photo
                                                </div>
                                                <p className="text-xs text-slate-500">
                                                    PNG, JPG, WEBP, GIF up to 5MB
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-2 justify-end pt-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setShowImageModal(false)}
                                            disabled={uploading}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="button"
                                            size="sm"
                                            onClick={handleUploadSelectedFile}
                                            disabled={!selectedFile || uploading}
                                            className="bg-[#800000] hover:bg-[#990000] text-white"
                                        >
                                            {uploading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Uploading...
                                                </>
                                            ) : (
                                                <>
                                                    <Check className="w-4 h-4 mr-1.5" />
                                                    Upload &amp; Insert
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700">
                                            Image URL (Direct link to photo)
                                        </label>
                                        <Input
                                            type="url"
                                            placeholder="https://res.cloudinary.com/... or https://..."
                                            value={imageUrlInput}
                                            onChange={(e) => setImageUrlInput(e.target.value)}
                                            className="text-sm"
                                            autoFocus
                                        />
                                        <p className="text-[11px] text-slate-500">
                                            Paste any image URL from Cloudinary or the web.
                                        </p>
                                    </div>

                                    {imageUrlInput.trim() && (
                                        <div className="p-2 border rounded-lg bg-slate-50 text-center">
                                            <p className="text-[11px] font-bold text-slate-600 mb-1 text-left">Preview:</p>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={imageUrlInput.trim()}
                                                alt="URL Preview"
                                                className="max-h-40 mx-auto rounded object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLElement).style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}

                                    <div className="flex gap-2 justify-end pt-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setShowImageModal(false)}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="button"
                                            size="sm"
                                            onClick={() => insertImageToEditor(imageUrlInput)}
                                            disabled={!imageUrlInput.trim()}
                                            className="bg-[#800000] hover:bg-[#990000] text-white"
                                        >
                                            <Check className="w-4 h-4 mr-1.5" />
                                            Insert into Content
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
