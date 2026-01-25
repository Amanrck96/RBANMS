'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';
import { DocumentFolder } from '@/components/ui/document-folder';

export default function NavyPage() {
    const reportItems = [
        { id: 'ncc-rep-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/file/d/18hpQj-EhrMR0s-NNq0_GYe1UDRMGBb2-/view?usp=sharing' },
        { id: 'ncc-rep-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/file/d/1Z__ClPtoOQRHbakqLc6rvCFDgeEgWIvB/view?usp=sharing' },
        { id: 'ncc-rep-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/file/d/1GPPOW667gY2jpxg48OGXS5XBE9JhIvYC/view?usp=sharing' },
        { id: 'ncc-rep-21-22', name: '2021-22', type: 'file' as const, url: 'https://drive.google.com/file/d/1tSfh5-xl8rv6ImE4zmPrLCvxCEwPlPZX/view?usp=sharing' },
    ];

    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card className="border-none shadow-xl">
                <CardContent className="pt-10">
                    <DynamicSection
                        pageId="cell-ncc-navy"
                        render={(data) => (
                            <div className="space-y-12">
                                <div className="space-y-6 text-foreground/90 leading-relaxed">
                                    <h1 className="text-4xl font-bold text-primary font-headline mb-6">
                                        {data.title || "NCC – Navy Wing"}
                                    </h1>
                                    <p className="text-lg">
                                        The NCC Navy Wing offers students a unique opportunity to develop discipline, leadership, and a spirit of adventure. Cadets undergo rigorous training in naval drills, boat pulling, and swimming, alongside character-building activities. We aim to instil a deep sense of patriotism and readiness to serve the nation. Through camps and national exchanges, our Navy Wing cadets grow into responsible citizens who embody the values of duty, unity, and discipline.
                                    </p>

                                    {/* Dynamic Admin Content */}
                                    {data.content && (
                                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
                                    )}

                                    <div className="mt-8 rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 group">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/images/ncc/navy_wing.png"
                                            alt="NCC Navy Wing Cadets Activity"
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Documents Section Removed */}
                                </div>
                            </div>
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
