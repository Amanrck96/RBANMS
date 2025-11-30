import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function IntroTextBox() {
    return (
        <section className="py-12 px-4 md:px-8 bg-slate-50">
            <div className="container mx-auto max-w-7xl space-y-12">
                {/* Intro Box */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 md:p-8 text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wide">
                        RBANM's FGC
                    </h2>
                    <div className="text-lg text-slate-700 leading-relaxed max-w-5xl mx-auto">
                        <p>
                            RBANMS FIRST GRADE COLLEGE is affiliated to Bengaluru City University, accredited by NAAC with a B+, and recognised under Section 2(f) & 12(B) of the UGC Act, 1956. A premier Institution dedicated to fostering academic excellence and holistic development.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                    {/* Column 2: Message from Director */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">
                            Message from Director
                        </h2>
                        <div className="mb-4 relative w-full aspect-[4/3] overflow-hidden rounded-md">
                            <Image
                                src="https://rbanmsfgc.ac.in/images/gallery/sahana.jpeg"
                                alt="Director Dr Sahana Das"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="text-slate-700 leading-relaxed flex-grow">
                            <p className="line-clamp-4">
                                Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Message from Principal */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">
                            Message from Principal
                        </h2>
                        <div className="mb-4 relative w-full aspect-[4/3] overflow-hidden rounded-md">
                            <Image
                                src="https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg"
                                alt="Principal Dr Shanti Iyer"
                                fill
                                className="object-cover object-top"
                                unoptimized
                            />
                        </div>
                        <div className="text-slate-700 leading-relaxed flex-grow">
                            <p className="line-clamp-4">
                                The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM’s First Grade College is to create efficient academicians, innovative entrepreneurs, and true researchers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
