"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";

function ExpandableMessage({ title, imageSrc, imageAlt, children, unoptimized = false }: { title: string, imageSrc: string, imageAlt: string, children: React.ReactNode, unoptimized?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">
                {title}
            </h2>
            <div className="mb-4 relative w-full aspect-[4/3] overflow-hidden rounded-md">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover object-top"
                    unoptimized={unoptimized}
                />
            </div>
            <div className={cn("text-slate-700 leading-relaxed flex-grow relative", isExpanded ? "" : "max-h-40 overflow-hidden")}>
                {children}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent" />
                )}
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-800 font-medium mt-4 text-sm self-start"
            >
                {isExpanded ? "Read Less" : "Read More"}
            </button>
        </div>
    );
}

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
                            RBANM's First Grade College was established by RBANM's Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.
                        </p>
                        <p className="mt-4">
                            This is one of the many institutions established under the umbrella of the RBANM's Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.
                        </p>
                        <p className="mt-4">
                            The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Founder */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">
                            Founder
                        </h2>
                        <div className="mb-4 relative w-full aspect-[4/3] overflow-hidden rounded-md">
                            <Image
                                src="https://rbanmsfgc.ac.in/images/gallery/AN-Mudaliar.jpg"
                                alt="Founder Dharmarathnakara Rai Bahadur Arcot Narrainswamy Mudaliar"
                                fill
                                className="object-cover object-top"
                                unoptimized={true}
                            />
                        </div>
                        <div className="text-slate-700 leading-relaxed flex-grow">
                            <p>
                                Our founder Dharmarathnakara Rai Bahadur Arcot Narrainswamy Mudaliar embarked on his vision of social regeneration, providing for all classes and castes in the fields of education and social welfare.
                            </p>
                        </div>
                        <Link
                            href="/about/founder"
                            className="text-blue-600 hover:text-blue-800 font-medium mt-4 text-sm self-start"
                        >
                            Learn More →
                        </Link>
                    </div>

                    {/* Column 2: Message from Director */}
                    <ExpandableMessage
                        title="Director"
                        imageSrc="https://rbanmsfgc.ac.in/images/gallery/sahana.jpeg"
                        imageAlt="Director Dr Sahana Das"
                    >
                        <div className="space-y-4">
                            <p>
                                Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful all through the academic year and offer learnings that will always stay as anchor in the ebb and flow of life.
                            </p>
                            <p>
                                What is education? What is the value of coming to college? Why bother with a degree? At RBANM's First Grade College we ask these very important questions and try to find answers from the point of view of the student who has decided to trust us as a life guide. We have a three-pronged approach: address exams, address employability, and address personality development. In the classroom and outside, through theory and in practice, it is this philosophy of education that fuels all that we do.
                            </p>
                            <p>
                                This holistic approach to education is in keeping with the vision of that extraordinary man who founded the RBANM's Educational Charities in 1873: Rai Bahadur Arcot Narrainswamy Mudaliar. Even today, his ideals of equity, equality, justice, inclusion, and respect for diversity permeate our teaching philosophy. Ours is a college that is a temple of learning for all, where no student is ignored or left behind, and where education is seen as a precious gift that is life changing.
                            </p>
                            <p className="font-bold">
                                - Dr. Sahana Das
                            </p>
                        </div>
                    </ExpandableMessage>

                    {/* Column 3: Message from Principal */}
                    <ExpandableMessage
                        title="Principal"
                        imageSrc="https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg"
                        imageAlt="Principal Dr Shanti Iyer"
                        unoptimized={true}
                    >
                        <div className="space-y-4">
                            <p>
                                The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM's First Grade College is to create efficient academicians, innovative entrepreneurs, true researchers and honest, dedicated and dynamic leaders who contribute to the development of society and nation at large.
                            </p>
                            <p>
                                Guided by values of faith, integrity and dignity, we at RBANM's FGC, are committed to providing holistic education by maintaining high academic standards, discipline and professional ethics.
                            </p>
                            <p>
                                In the process of guiding students through the prescribed syllabii and the examination system, we also mould their personality by instilling in them values, skills and the right attitude towards life.
                            </p>
                            <p>
                                In conclusion, I can say that, joining RBANM's FGC will be a decision a student will never regret, for he/ she can then have secure future and a successful life. Having the opportunity to 'Enrich, Excel and Evolve', this is a place where students are taught to reach the sky and beyond.
                            </p>
                            <p className="font-bold">
                                - Dr. Shanti Iyer
                            </p>
                        </div>
                    </ExpandableMessage>

                    {/* Column 4: The Month that was */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 flex flex-col h-full">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">
                            The Month that was
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-4 flex-grow">
                            <div className="border-l-4 border-blue-600 pl-4 py-2">
                                <h3 className="font-bold text-blue-800 mb-1">November 2025</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>National Education Day celebrated with inspiring talks and activities</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>Industrial visit to HTCS Cloud Solutions for BCA students</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>Annual Sports Day showcasing athletic excellence</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>Faculty development workshop on innovative teaching methods</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>Student placement interviews with top companies</span>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                href="/events"
                                className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm mt-4"
                            >
                                View All Events →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
