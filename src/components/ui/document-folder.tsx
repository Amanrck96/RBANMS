import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Folder, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DocumentItem {
    id: string;
    name: string;
    type: 'folder' | 'file';
    size?: string;
    date?: string;
    url?: string;
}

interface DocumentFolderProps {
    title: string;
    items?: DocumentItem[];
}

export function DocumentFolder({ title, items = [] }: DocumentFolderProps) {
    return (
        <Card className="bg-white border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary text-xl">
                    <Folder className="h-6 w-6 fill-yellow-400 text-yellow-600" /> {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {items.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground bg-slate-50 rounded-lg border border-dashed text-sm">
                        No documents available yet.
                    </div>
                ) : (
                    <div className="grid gap-2">
                        {items.map((item) => (
                            <div key={item.id} className="flex items-center p-3 rounded-md bg-white hover:bg-gray-50 transition-colors border">
                                <FileText className="h-8 w-8 text-red-500 mr-3" />
                                <div className="flex-1 overflow-hidden">
                                    <div className="font-medium truncate text-sm">{item.name}</div>
                                    <div className="text-xs text-muted-foreground flex gap-3">
                                        {item.size && <span>{item.size}</span>}
                                        {item.date && <span>{item.date}</span>}
                                    </div>
                                </div>
                                {item.url ? (
                                    <Button size="sm" variant="outline" className="ml-2 text-xs h-8" asChild>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">View</a>
                                    </Button>
                                ) : (
                                    <Button size="sm" variant="outline" className="ml-2 text-xs h-8 opacity-50 cursor-not-allowed">View</Button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
