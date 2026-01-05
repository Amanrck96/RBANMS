'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function ManasaCounsellingCellPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId="cell-manasa"
                        defaultTitle="Manasa Counseling Cell"
                        defaultContent={
                            <div className="space-y-6 text-foreground/90 leading-relaxed">
                                <p className="text-lg">
                                    The Manasa Counselling Cell provides a safe and confidential space for students to seek guidance and support for their emotional and mental well-being. Our professional counselors offer listening, empathy, and practical strategies to help students navigate personal challenges, academic stress, and transition into college life. We are dedicated to ensuring that every student has the mental health resources they need to thrive and succeed in all aspects of their lives.
                                </p>
                            </div>
                        }
                    />
                </CardContent>
            </Card>
        </div>
    );
}
