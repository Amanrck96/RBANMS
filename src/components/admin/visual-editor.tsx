
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
    Code as CodeIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface VisualEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function VisualEditor({ value, onChange, placeholder }: VisualEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const [view, setView] = useState<'visual' | 'code'>('visual');

    useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            editorRef.current.innerHTML = value || '';
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
                        className="p-6 focus:outline-none prose prose-slate max-w-none min-h-[400px]"
                        placeholder={placeholder}
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
