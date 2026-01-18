'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function FoundersVisionPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId="about-founders-vision"
                        defaultTitle="Founder's Vision"
                        defaultContent="<p>Our founder's vision content goes here.</p>"
                    />
                </CardContent>
            </Card>
        </div>
    );
}
