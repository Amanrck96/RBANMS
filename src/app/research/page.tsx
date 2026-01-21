'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function ResearchPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card className="overflow-hidden border-none shadow-xl">
                <div className="bg-blue-900 py-12 px-8 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Research & Innovation</h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Advancing knowledge through inquiry, collaboration, and academic excellence.
                    </p>
                </div>
                <CardContent className="pt-12 pb-16 px-8 md:px-12">
                    <DynamicSection
                        pageId="research"
                        onlyContent
                    />
                </CardContent>
            </Card>
        </div>
    );
}
