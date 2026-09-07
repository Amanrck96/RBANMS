'use client';

import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { AdditionalImagesCarousel } from '@/components/sections/additional-images-carousel';
import { TwoRowCardLayout } from '@/components/sections/two-row-card-layout';
import { SidebarCards } from '@/components/sections/sidebar-cards';
import { useSiteSettings } from '@/hooks/use-site-settings';
import { usePageContent } from '@/hooks/use-page-content';
import { DynamicSection } from '@/components/dynamic-section';
import { Loader2, GraduationCap, Award, BookOpen, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
    const { settings } = useSiteSettings();
    const { data: introData, loading: introLoading } = usePageContent('home-intro');

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-grow text-blue-900">
                {/* Hero Carousel */}
                <div className="">
                    <AdditionalImagesCarousel intervalMs={3500} />
                </div>

                {/* Introduction Section */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 text-center space-y-6 max-w-4xl">
                        {introLoading ? (
                            <div className="flex justify-center py-8">
                                <Loader2 className="animate-spin text-primary h-8 w-8" />
                            </div>
                        ) : (
                            (() => {
                                const content = introData?.content || `
                                    <p class="mb-6">RBANMS First Grade College was established by RBANMS Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.</p>
                                    <p class="mb-6">This is one of the many institutions established under the umbrella of the RBANMS Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.</p>
                                    <p>The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.</p>
                                `;
                                return (
                                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-left">
                                        <div className="shrink-0">
                                            <div className="relative w-[240px] h-[240px] overflow-hidden">
                                                <Image
                                                    src={settings?.logoUrl || "/images/logo-full.png"}
                                                    alt={settings?.collegeName || "RBANMS First Grade College Logo"}
                                                    fill
                                                    className="object-contain"
                                                    priority
                                                />
                                            </div>
                                        </div>
                                        <div className="prose prose-lg text-blue-900 leading-relaxed max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
                                    </div>
                                );
                            })()
                        )}
                    </div>
                </section>

                {/* Key Institutional Highlights */}
                <section className="py-10 bg-slate-100 border-y border-slate-200">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="text-3xl md:text-4xl font-bold text-[#800000] mb-1 font-headline">1983</div>
                                <div className="text-xs uppercase tracking-wider font-semibold text-slate-600">Year of Establishment</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="text-3xl md:text-4xl font-bold text-[#800000] mb-1 font-headline">NAAC</div>
                                <div className="text-xs uppercase tracking-wider font-semibold text-slate-600">Accredited Institution</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="text-3xl md:text-4xl font-bold text-[#800000] mb-1 font-headline">BCU</div>
                                <div className="text-xs uppercase tracking-wider font-semibold text-slate-600">Bengaluru City Univ. Affiliated</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <div className="text-3xl md:text-4xl font-bold text-[#800000] mb-1 font-headline">40+</div>
                                <div className="text-xs uppercase tracking-wider font-semibold text-slate-600">Years of Academic Legacy</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Two-row card layout: Row 1 - Founder, Director, Principal */}
                <TwoRowCardLayout />

                {/* Featured Undergraduate Courses */}
                <section className="py-14 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-900">
                                <GraduationCap className="h-3.5 w-3.5" /> Academic Excellence
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 font-headline">
                                Undergraduate Programmes Offered
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                                Our three-year degree programmes are affiliated to Bengaluru City University, blending foundational theory with practical industry applications.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* BCA */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#800000]">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-900 text-white px-2.5 py-1 rounded">B.C.A.</span>
                                    <h3 className="text-xl font-bold text-blue-950 mt-4 mb-2 group-hover:text-[#800000] transition-colors">
                                        Bachelor of Computer Applications
                                    </h3>
                                    <p className="text-xs text-slate-500 font-semibold mb-3">Duration: 3 Years (6 Semesters)</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        Covers software engineering, cloud computing, database systems, web development, and algorithms for emerging IT careers.
                                    </p>
                                </div>
                                <Link href="/departments/computer-applications" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#800000] hover:underline mt-auto">
                                    Course Details <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>

                            {/* B.Com */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#800000]">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-900 text-white px-2.5 py-1 rounded">B.Com.</span>
                                    <h3 className="text-xl font-bold text-blue-950 mt-4 mb-2 group-hover:text-[#800000] transition-colors">
                                        Bachelor of Commerce
                                    </h3>
                                    <p className="text-xs text-slate-500 font-semibold mb-3">Duration: 3 Years (6 Semesters)</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        Specializations in Corporate Accounting, Taxation, GST Law, Financial Management, Auditing, and Banking Operations.
                                    </p>
                                </div>
                                <Link href="/departments/commerce" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#800000] hover:underline mt-auto">
                                    Course Details <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>

                            {/* BBA */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#800000]">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-900 text-white px-2.5 py-1 rounded">B.B.A.</span>
                                    <h3 className="text-xl font-bold text-blue-950 mt-4 mb-2 group-hover:text-[#800000] transition-colors">
                                        Bachelor of Business Administration
                                    </h3>
                                    <p className="text-xs text-slate-500 font-semibold mb-3">Duration: 3 Years (6 Semesters)</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        Focuses on organizational leadership, corporate finance, marketing strategies, entrepreneurship, and human resources.
                                    </p>
                                </div>
                                <Link href="/departments/management" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#800000] hover:underline mt-auto">
                                    Course Details <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>

                            {/* BA */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#800000]">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-900 text-white px-2.5 py-1 rounded">B.A.</span>
                                    <h3 className="text-xl font-bold text-blue-950 mt-4 mb-2 group-hover:text-[#800000] transition-colors">
                                        Bachelor of Arts
                                    </h3>
                                    <p className="text-xs text-slate-500 font-semibold mb-3">Duration: 3 Years (6 Semesters)</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        Disciplines in History, Economics, Political Science, Sociology, and English Literature. Ideal preparation for Civil Services.
                                    </p>
                                </div>
                                <Link href="/departments/arts" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#800000] hover:underline mt-auto">
                                    Course Details <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <Link href="/college-info" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-950 text-white font-bold text-sm hover:bg-blue-900 transition-colors shadow">
                                View Comprehensive College Information &amp; Syllabus <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose RBANMS */}
                <section className="py-14 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-100 text-yellow-900">
                                <Award className="h-3.5 w-3.5" /> Institutional Heritage
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 font-headline">
                                Why Choose RBANMS First Grade College?
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                                Empowering students since 1983 with holistic mentorship, ethical grounding, and strong corporate linkages.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-7 rounded-xl shadow-sm border border-slate-200 space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-900">
                                    <CheckCircle className="h-6 w-6 text-[#800000]" />
                                </div>
                                <h3 className="text-xl font-bold text-blue-950">NAAC Accredited &amp; UGC Recognised</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Accredited by NAAC and recognised under Sections 2(f) and 12(B) of the UGC Act, 1956, validating our academic and infrastructure standards.
                                </p>
                            </div>

                            <div className="bg-white p-7 rounded-xl shadow-sm border border-slate-200 space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-900">
                                    <BookOpen className="h-6 w-6 text-[#800000]" />
                                </div>
                                <h3 className="text-xl font-bold text-blue-950">Affordable &amp; Inclusive Education</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Managed by the historic RBANMS Educational Charities Trust (Est. 1873), ensuring affordable education, fee concessions, and government scholarships.
                                </p>
                            </div>

                            <div className="bg-white p-7 rounded-xl shadow-sm border border-slate-200 space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-900">
                                    <Users className="h-6 w-6 text-[#800000]" />
                                </div>
                                <h3 className="text-xl font-bold text-blue-950">Industry Placements &amp; Co-Curriculars</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Dedicated Career Development Cell, active NCC Army &amp; Navy Wings, NSS community initiatives, and annual inter-collegiate cultural fests.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campus Updates & Info Section */}
                <section className="py-12 bg-white pb-24">
                    <div className="container mx-auto px-4">
                        <DynamicSection
                            pageId="8"
                            render={(data: any) => (
                                <h2 className="text-3xl font-bold text-blue-900 mb-12 font-headline uppercase tracking-wide border-l-8 border-blue-900 pl-6">
                                    {data.title || "Campus Updates & Info"}
                                </h2>
                            )}
                        />
                        <SidebarCards />
                    </div>
                </section>

            </main>
            <SiteFooter />
        </div>
    );
}
