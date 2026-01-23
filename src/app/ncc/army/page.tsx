'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';
import { DocumentFolder } from '@/components/ui/document-folder';

export default function ArmyPage() {
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
                        pageId="cell-ncc-army"
                        render={(data) => (
                            <div className="space-y-12">
                                <div className="space-y-6 text-foreground/90 leading-relaxed">
                                    <h1 className="text-4xl font-bold text-primary font-headline mb-6">
                                        {data.title || "NCC – Army Wing"}
                                    </h1>
                                    <p className="text-lg">
                                        The NCC Army Wing at RBNMS College is a premier youth grooming platform that focuses on character, comradeship, and discipline. Cadets receive training in military drills, map reading, and weapon handling, alongside developing soft skills and leadership qualities. We prepare youth for the armed forces and other uniformed services while fostering a strong spirit of national integration. Our cadets are trained to be resilient leaders ready to serve the nation with pride.
                                    </p>

                                    {/* Dynamic Admin Content */}
                                    {data.content && (
                                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
                                    )}

                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 h-64 md:h-80 relative group">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src="/images/ncc/army_wing.jpg"
                                                alt="NCC Army Wing Cadets"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary/20 h-64 md:h-80 relative group">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src="/images/ncc/army_firing.jpg"
                                                alt="NCC Army Wing Firing Practice"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    {/* Documents Section */}
                                    <div className="mt-16 pt-12 border-t">
                                        <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black uppercase mb-8">NCC Reports & Documents</h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            <DocumentFolder title="Activity Reports" items={reportItems} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
