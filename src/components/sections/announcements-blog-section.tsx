"use client";

import Link from 'next/link';

export function AnnouncementsBlogSection() {
    return (
        <section className="py-12 px-4 md:px-8 bg-slate-50">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* The Month That Was - Already done above, this is a placeholder */}

                    {/* Blog */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">
                            Blog
                        </h2>
                        <div className="text-slate-700 leading-relaxed flex-grow flex flex-col items-center justify-center">
                            <p className="text-center text-muted-foreground">
                                Blog section coming soon!
                            </p>
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">
                            Announcements
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-4 flex-grow">
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start">
                                    <span className="text-blue-600 font-bold text-lg leading-none mt-1">•</span>
                                    <span>Odd Semester Examinations scheduled to begin on December 15, 2025</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-blue-600 font-bold text-lg leading-none mt-1">•</span>
                                    <span>Students are requested to collect their 'No Dues' certificate from the Office</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-blue-600 font-bold text-lg leading-none mt-1">•</span>
                                    <span>The college will remain closed December 28th to December 31st, 2025</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
