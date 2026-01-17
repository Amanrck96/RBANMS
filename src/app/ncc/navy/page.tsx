'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function NavyPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId="cell-ncc-navy"
                        defaultTitle="NCC – Navy Wing"
                        defaultContent={
                            <div className="space-y-6 text-foreground/90 leading-relaxed">
                                <p className="text-lg">
                                    The NCC Navy Wing offers students a unique opportunity to develop discipline, leadership, and a spirit of adventure. Cadets undergo rigorous training in naval drills, boat pulling, and swimming, alongside character-building activities. We aim to instil a deep sense of patriotism and readiness to serve the nation. Through camps and national exchanges, our Navy Wing cadets grow into responsible citizens who embody the values of duty, unity, and discipline.
                                </p>
                                <div className="mt-8 rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/images/ncc/navy_wing.png"
                                        alt="NCC Navy Wing Cadets Activity"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        }
                    />
                </CardContent>
            </Card>
        </div>
    );
}
