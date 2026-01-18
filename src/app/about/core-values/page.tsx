'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function CoreValuesPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId="about-core-values"
                        defaultTitle="Core Values"
                        defaultContent={`
            <ul class="list-disc pl-6 space-y-4 text-lg text-gray-700">
                <li><strong>Excellence:</strong> Striving for the highest standards in all aspects of education.</li>
                <li><strong>Integrity:</strong> Upholding honesty and ethical behavior in our community.</li>
                <li><strong>Inclusivity:</strong> Treating everyone with dignity and respect, embracing diversity.</li>
                <li><strong>Social Responsibility:</strong> contributing to the well-being of society and the nation.</li>
                <li><strong>Compassion:</strong> Fostering a supportive and caring environment for students and staff.</li>
            </ul>
            `}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
