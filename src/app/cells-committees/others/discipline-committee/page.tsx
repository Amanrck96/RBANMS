'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function DisciplineCommitteePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId="cell-discipline"
                        defaultTitle="Discipline Committee"
                        defaultContent={
                            <div className="space-y-6 text-foreground/90 leading-relaxed">
                                <p className="text-lg">
                                    The Discipline Committee at RBANMS First Grade College is committed to maintaining a learning environment built on respect, integrity, and accountability. Our task is to ensure that all students and staff adhere to the college's code of conduct, fostering a safe and orderly campus. We work closely with students to promote self-discipline and positive behavior, ensuring that everyone has the opportunity to learn and grow in an environment that is conducive to academic excellence and personal development.
                                </p>
                            </div>
                        }
                    />
                </CardContent>
            </Card>
        </div>
    );
}
