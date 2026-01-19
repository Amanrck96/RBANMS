'use client';

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { AdditionalImagesCarousel } from '@/components/sections/additional-images-carousel';
import { TwoRowCardLayout } from '@/components/sections/two-row-card-layout';
import { DynamicSection } from '@/components/dynamic-section';
import { SidebarCards } from '@/components/sections/sidebar-cards';
import { useSiteSettings } from '@/hooks/use-site-settings';

export default function Home() {
    const { settings } = useSiteSettings();
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
                        {(() => {
                            // Using an IIFE or similar logic to keep scope clean, or just inline the logic.
                            // Better to inline directly.
                            // We need to fetch data outside the return, but since I'm editing a block, I'll assume I can't add hooks here easily without changing the whole file. 
                            // WAIT. I cannot add a hook in the middle of a return. 
                            // I MUST add the hook at the top level of the component.
                            return null; // Logic check
                        })()}
                    </div>
                </section>

                {/* Two-row card layout: Row 1 - Founder, Director, Principal */}
                <TwoRowCardLayout />

                {/* Campus Updates & Info Section */}
                <section className="py-12 bg-white pb-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-blue-900 mb-12 font-headline uppercase tracking-wide border-l-8 border-blue-900 pl-6">
                            Campus Updates & Info
                        </h2>
                        <SidebarCards />
                    </div>
                </section>



            </main>
            <SiteFooter />
        </div>
    );
}

// Trigger redeploy
