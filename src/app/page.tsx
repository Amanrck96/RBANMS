'use client';

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { AdditionalImagesCarousel } from '@/components/sections/additional-images-carousel';
import { TwoRowCardLayout } from '@/components/sections/two-row-card-layout';
import { DynamicSection } from '@/components/dynamic-section';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-grow text-blue-900">
                {/* Static hero image from gallery replacing carousel */}
                {/* Removed hero placeholder to eliminate blank space */}
                {/* Additional carousel showcasing three images */}
                <div className="">
                    <AdditionalImagesCarousel intervalMs={3500} />
                </div>

                {/* Introduction Section */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 text-center space-y-6 max-w-4xl">
                        <DynamicSection
                            pageId="home-intro"
                            render={(data) => {
                                const content = data?.content || `
                                    <p class="mb-6">RBANM’s First Grade College was established by RBANM’s Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.</p>
                                    <p class="mb-6">This is one of the many institutions established under the umbrella of the RBANM’s Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.</p>
                                    <p>The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.</p>
                                `;
                                return (
                                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-left">
                                        {/* Left Column: Logo Stack */}
                                        <div className="flex flex-col items-center shrink-0 w-[240px]">
                                            <div className="relative w-[140px] h-[140px] mb-4 overflow-hidden">
                                                <Image
                                                    src="/images/migrated/logo.png"
                                                    alt="RBANM Logo"
                                                    fill
                                                    className="object-cover object-left scale-110" // scale slightly to ensuring fill if needed
                                                />
                                            </div>
                                            <div className="text-center font-headline">
                                                <h2 className="text-3xl font-bold text-blue-900 leading-none">RBANM's</h2>
                                                <h3 className="text-xl font-bold text-[#800000] leading-tight">First Grade College</h3>
                                            </div>
                                        </div>

                                        {/* Right Column: Content */}
                                        <div className="prose prose-lg text-blue-900 leading-relaxed max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
                                    </div>
                                );
                            }}
                        />
                    </div>
                </section>

                {/* Two-row card layout: Row 1 - Founder, Director, Principal | Row 2 - Blog, Announcements, The Month That Was */}
                <TwoRowCardLayout />



            </main>
            <SiteFooter />
        </div>
    );
}

// Trigger redeploy
