'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Anchor, FileText } from 'lucide-react';
import { DocumentFolder } from '@/components/ui/document-folder';
import { DynamicSection } from '@/components/dynamic-section';

export default function NCCPage() {
    const reportItems = [
        { id: 'ncc-rep-24-25', name: '2024-25', type: 'file' as const, url: 'https://drive.google.com/file/d/18hpQj-EhrMR0s-NNq0_GYe1UDRMGBb2-/view?usp=sharing' },
        { id: 'ncc-rep-23-24', name: '2023-24', type: 'file' as const, url: 'https://drive.google.com/file/d/1Z__ClPtoOQRHbakqLc6rvCFDgeEgWIvB/view?usp=sharing' },
        { id: 'ncc-rep-22-23', name: '2022-23', type: 'file' as const, url: 'https://drive.google.com/file/d/1GPPOW667gY2jpxg48OGXS5XBE9JhIvYC/view?usp=sharing' },
        { id: 'ncc-rep-21-22', name: '2021-22', type: 'file' as const, url: 'https://drive.google.com/file/d/1tSfh5-xl8rv6ImE4zmPrLCvxCEwPlPZX/view?usp=sharing' },
    ];

    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                    <DynamicSection
                        pageId="cell-ncc"
                        render={(data) => (
                            <div className="space-y-12">
                                <div className="p-8 md:p-12 space-y-6">
                                    <h1 className="text-5xl font-bold text-primary font-headline">
                                        {data.title || "National Cadet Corps (NCC)"}
                                    </h1>
                                    <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
                                        The National Cadet Corps (NCC) at RBNMS College is a premier youth organization that strives to develop the qualities of character, courage, comradeship, discipline, leadership, and the ideal of selfless service among the youth of the country. We offer both Army and Navy wings, providing cadets with diverse opportunities for personal growth and adventure.
                                    </p>

                                    {/* Dynamic Admin Content */}
                                    {data.content && (
                                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />
                                    )}
                                </div>

                                {/* Wings Grid */}
                                <div className="grid md:grid-cols-2 gap-0 border-y">
                                    <div className="p-8 md:p-12 flex flex-col items-start justify-between border-r group hover:bg-slate-50 transition-colors">
                                        <div className="space-y-4">
                                            <div className="p-3 bg-red-100 rounded-full text-red-700 w-fit group-hover:scale-110 transition-transform">
                                                <Shield className="h-8 w-8" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-primary font-headline">Army Wing</h2>
                                            <p className="text-foreground/70 leading-relaxed text-lg">
                                                Focused on land-based military training, character development, and discipline through drills and field exercises. We prepare cadets for the Indian Army and various defense services.
                                            </p>
                                        </div>
                                        <Button asChild className="mt-8 group/btn" size="lg">
                                            <Link href="/ncc/army">
                                                Explore Army Wing <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col items-start justify-between group hover:bg-slate-50 transition-colors">
                                        <div className="space-y-4">
                                            <div className="p-3 bg-blue-100 rounded-full text-blue-700 w-fit group-hover:scale-110 transition-transform">
                                                <Anchor className="h-8 w-8" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-primary font-headline">Navy Wing</h2>
                                            <p className="text-foreground/70 leading-relaxed text-lg">
                                                Specialized training in naval drills, boat pulling, and swimming. Our cadets get exposure to marine life and technical aspects of the Indian Navy.
                                            </p>
                                        </div>
                                        <Button asChild className="mt-8 group/btn" size="lg">
                                            <Link href="/ncc/navy">
                                                Explore Navy Wing <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Documents Section Removed */}
                            </div>
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
