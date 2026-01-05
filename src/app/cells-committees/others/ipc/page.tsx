'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function IPCPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId="cell-ipc"
                        defaultTitle="IPC (Internal Placement Cell)"
                        defaultContent={
                            <div className="space-y-6 text-foreground/90 leading-relaxed">
                                <p className="text-lg">
                                    The Internal Placement Cell (IPC) bridges the gap between academic learning and industry requirements. We are committed to preparing students for their careers by organizing training sessions, workshops, and recruitment drives. The cell actively liaises with top companies to facilitate internship and job opportunities, ensuring our graduates are employable and confident. Our goal is to guide every student toward the right career path, equipping them with the professional skills needed to succeed in a competitive job market.
                                </p>
                            </div>
                        }
                    />
                </CardContent>
            </Card>
        </div>
    );
}
