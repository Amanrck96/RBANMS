import React from 'react';
import { Construction } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function NavyPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 space-y-6">
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 border-none text-lg px-6 py-2">
                NCC - Navy Wing
            </Badge>
            <div className="bg-slate-100 p-8 rounded-full">
                <Construction className="h-24 w-24 text-slate-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Coming Soon</h1>
            <p className="text-xl text-muted-foreground max-w-lg">
                This page is under construction. Please check back later!
            </p>
        </div>
    );
}
