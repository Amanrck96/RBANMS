
'use client';

import { useState, useRef, useEffect } from 'react';
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Link as LinkIcon,
    Quote,
    Type,
    Eye,
    Code as CodeIcon,
    ImageIcon,
    Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase-client';
import { useToast } from '@/hooks/use-toast';

interface VisualEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function VisualEditor({ value, onChange, placeholder }: VisualEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const [view, setView] = useState<'visual' | 'code'>('visual');
    const [uploading, setUploading] = useState(false);
    const { toast } = useToast();

    const cleanHTML = (html: string) => {
        if (!html) return '';
        // Fix mangled tags like < p ... > to <p ...>
        return html
            .replace(/<\s+([a-zA-Z0-9]+)/g, '<$1') // Fix open tags: < p -> <p
            .replace(/<\s+\/([a-zA-Z0-9]+)\s*>/g, '</$1>') // Fix close tags: < / p > -> </p>
            .replace(/([a-zA-Z0-9]+)\s+>/g, '$1>') // Fix end of tags: p > -> p>
            .replace(/<\s+([a-zA-Z0-9]+)\s+([^>]*)\s*>/g, '<$1 $2>'); // Fix tags with attributes
    };

    useEffect(() => {
        const cleanedValue = cleanHTML(value);
        if (editorRef.current && editorRef.current.innerHTML !== cleanedValue) {
            editorRef.current.innerHTML = cleanedValue || '';
        }
    }, [value]);

    const execCommand = (command: string, value: string | null = null) => {
        document.execCommand(command, false, value as string);
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>) => {
        const items = e.clipboardData?.items;
        if (!items) return;

        let hasImage = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                hasImage = true;
                const file = items[i].getAsFile();
                if (!file) continue;
                
                // Prevent default paste of base64 image
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
                        throw new Error(errorData.error || `Upload failed`);
                    }

                    const data = await res.json();
                    execCommand('insertImage', data.url);
                } catch (error: any) {
                    console.error('Paste upload error:', error);
                    toast({ title: 'Paste Upload Failed', description: error.message || 'Could not upload pasted image.', variant: 'destructive' });
                } finally {
                    setUploading(false);
                }
                break; // Handle only the first image in clipboard
            }
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

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
                throw new Error(errorData.error || `Upload failed`);
            }

            const data = await res.json();
            execCommand('insertImage', data.url);
        } catch (error: any) {
            console.error('Upload error:', error);
            toast({ title: 'Upload Failed', description: error.message || 'Could not upload image.', variant: 'destructive' });
        } finally {
            setUploading(false);
            if (e.target) e.target.value = ''; // Reset input
        }
    };

    const toggleView = (v: 'visual' | 'code') => {
        setView(v);
    };

    return (
        <div className="border rounded-md overflow-hidden bg-white">
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
                <div className="relative">
                    <input
                        type="file"
                        className="hidden"
                        id="editor-image-upload"
                        onChange={handleImageUpload}
                        accept="image/*"
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => document.getElementById('editor-image-upload')?.click()}
                        disabled={uploading}
                        title="Insert Image"
                    >
                        {uploading ? <Loader2 size={16} className="animate-spin" /> : <ImageIcon size={16} />}
                    </Button>
                </div>
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

            <div className="relative min-h-[400px]">
                {view === 'visual' ? (
                    <div
                        ref={editorRef}
                        contentEditable
                        onInput={handleInput}
                        onPaste={handlePaste}
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
                <div className="absolute top-6 left-6 text-gray-400 pointer-events-none">
                    {placeholder || 'Start writing...'}
                </div>
            )}
        </div>
    );
}
