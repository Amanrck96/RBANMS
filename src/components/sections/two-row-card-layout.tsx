'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';
import { db } from '@/lib/firebase-client';
import { doc, onSnapshot } from 'firebase/firestore';

const advantages = [
    "Managed by a trusted and highly respected Educational Charities Trust",
    "Located in the heart of Bangalore City, accessible with Metro, BMTC buses, and private vehicles",
    "Learning spaces that are green and environmentally friendly",
    "Well-equipped classrooms, labs, and AV rooms",
    "Dedicated and qualified in-house faculty",
    "Eminent guest faculty from various fields of expertise",
    "Add-on and certificate courses to enhance professional skills",
    "Encouragement and support for Sports, with in-house facilities and ample space",
    "Access to professional training centres for cricket and football",
    "Encouragement of NCC related activities",
    "Meaningful engagement with community development through NSS",
    "Support of the Arts through workshops, and access to several performance spaces",
];

const defaultNotices = [
    "Admissions open for AY 2026-27. For a Campus Tour, email info@rbanmsfgc.edu.in.",
    "College will remain closed on 12th and 13th January.",
    "The Even Semester for AY 2025-26 will begin on January 19.",
    "Regular classes for all courses will commence on January 27."
];

const defaultActivities = [
    { title: "MILANA: Cultural Competition", date: "November 7, 2025", description: "Inter-high school and PU cultural competition" },
    { title: "NAADAHABBA Folk Festival", date: "November 19, 2025", description: "Presenting folk dances of Karnataka at Sabha" },
    { title: "SPICMACAY Presentations", date: "November 13 & 27, 2025", description: "Classical music and Sattriya Dance performances" },
    { title: "Field Visits & Guest Lectures", date: "November 2025", description: "Visits to Innovation Institute and lectures on AI & Digital Marketing" },
    { title: "Pre-Final Examinations", date: "November 14-22, 2025", description: "Internal assessments for all departments" }
];

export function TwoRowCardLayout() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const toggleCard = (cardId: string) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    const midPoint = Math.ceil(advantages.length / 2);
    const col1 = advantages.slice(0, midPoint);
    const col2 = advantages.slice(midPoint);

    return (
        <section className="py-12 lg:py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Row 1: Founder, Director, Principal */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-6">
                    {/* Founder Card */}
                    <DynamicSection
                        pageId="about-founder"
                        render={(data: any) => (
                            <Card className="flex flex-col h-full">
                                <CardHeader>
                                    <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">
                                        Our Founder
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
                                        <Image
                                            src={data.imageUrl || "/images/founder.jpg"}
                                            alt={data.title || "Rai Bahadur Arcot Narrainswamy Mudaliar"}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                    </div>
                                    <h3 className="text-center text-sm font-bold text-primary mb-2">
                                        {data.title || "Rai Bahadur Arcot Narrainswamy Mudaliar"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm text-center mb-3">(1827–1910)</p>

                                    <div className="text-left text-sm content-black mb-4">
                                        <div
                                            className={expandedCard !== 'founder' ? 'line-clamp-3' : ''}
                                            dangerouslySetInnerHTML={{ __html: data.content || 'Our founder Dharmarathnakara Rai Bahadur Arcot Narrainswamy Mudaliar embarked on his vision of social regeneration, providing for all classes and castes in the fields of education and social welfare.' }}
                                        />

                                        {expandedCard === 'founder' && (
                                            <div className="mt-3 space-y-3">
                                                <p>
                                                    <a href="/about/founder" className="text-primary hover:underline font-semibold">
                                                        Read more about our Founder
                                                    </a>
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <Button
                                        onClick={() => toggleCard('founder')}
                                        variant="link"
                                        className="mt-auto flex items-center gap-1 px-0"
                                    >
                                        {expandedCard === 'founder' ? (
                                            <>Read Less <ChevronUp className="h-4 w-4" /></>
                                        ) : (
                                            <>Read More <ChevronDown className="h-4 w-4" /></>
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    />

                    {/* Director's Message */}
                    <DynamicSection
                        pageId="about-director"
                        render={(data: any) => (
                            <Card className="flex flex-col h-full">
                                <CardHeader>
                                    <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">
                                        {data.title || 'Message from Director'}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
                                        <Image
                                            src={data.imageUrl || "/images/director_new.png"}
                                            alt={data.title || "Dr. Sahana Das - Director"}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                    </div>

                                    <div className="text-left text-sm content-black mb-4">
                                        <div
                                            className={expandedCard !== 'director' ? 'line-clamp-4' : ''}
                                            dangerouslySetInnerHTML={{ __html: data.content || 'Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful.' }}
                                        />

                                        {expandedCard === 'director' && !data.content && (
                                            <div className="mt-3 space-y-3">
                                                <p>
                                                    At RBANM&apos;s First Grade College, we believe in nurturing not just academicians but well-rounded individuals who are equipped to face the challenges of the modern world. Our comprehensive approach to education ensures that students develop critical thinking, creativity, and leadership skills.
                                                </p>
                                                <p>
                                                    We are committed to providing an environment that encourages innovation, collaboration, and personal growth. Our dedicated faculty members work tirelessly to inspire and guide students towards achieving their full potential.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <Button
                                        onClick={() => toggleCard('director')}
                                        variant="link"
                                        className="mt-auto flex items-center gap-1 px-0"
                                    >
                                        {expandedCard === 'director' ? (
                                            <>Read Less <ChevronUp className="h-4 w-4" /></>
                                        ) : (
                                            <>Read More <ChevronDown className="h-4 w-4" /></>
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    />

                    {/* Principal's Message */}
                    <DynamicSection
                        pageId="about-principal"
                        render={(data: any) => (
                            <Card className="flex flex-col h-full">
                                <CardHeader>
                                    <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">
                                        {data.title || 'Message from Principal'}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
                                        <Image
                                            src={data.imageUrl || "/images/migrated/principal-whatsapp.jpeg"}
                                            alt={data.title || "Dr. Shanti Iyer - Principal"}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                        />
                                    </div>

                                    <div className="text-left text-sm content-black mb-4">
                                        <div
                                            className={expandedCard !== 'principal' ? 'line-clamp-4' : ''}
                                            dangerouslySetInnerHTML={{ __html: data.content || 'The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM\'s First Grade College is to create efficient academicians, innovative entrepreneurs, and responsible citizens.' }}
                                        />

                                        {expandedCard === 'principal' && !data.content && (
                                            <div className="mt-3 space-y-3">
                                                <p>
                                                    We are dedicated to fostering an educational experience that goes beyond textbooks. Our focus is on holistic development that encompasses intellectual growth, emotional maturity, and social responsibility.
                                                </p>
                                                <p>
                                                    Through our diverse range of programs, state-of-the-art facilities, and experienced faculty, we strive to provide every student with the tools they need to succeed in their chosen fields and contribute meaningfully to society.
                                                </p>
                                                <p>
                                                    I invite you to join us on this transformative journey of learning and growth at RBANM&apos;s First Grade College.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <Button
                                        onClick={() => toggleCard('principal')}
                                        variant="link"
                                        className="mt-auto flex items-center gap-1 px-0"
                                    >
                                        {expandedCard === 'principal' ? (
                                            <>Read Less <ChevronUp className="h-4 w-4" /></>
                                        ) : (
                                            <>Read More <ChevronDown className="h-4 w-4" /></>
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    />
                </div>

                {/* Full-Width "The RBANM's Experience" Card - Centered between the rows */}
                <div className="flex justify-center mb-6">
                    <DynamicSection
                        pageId="home-hero"
                        render={(data: any) => (
                            <Card className="w-full max-w-7xl border-none shadow-none bg-transparent">
                                <CardHeader className="text-center pb-10">
                                    <CardTitle className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-black font-headline">
                                        {data.title || "The RBANM's Experience"}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-4 md:px-6">
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                                        {/* Left Side - Checkmarks List */}
                                        <div className="flex-grow w-full lg:w-3/5">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6">
                                                <ul className="space-y-4 md:space-y-6">
                                                    {col1.map((advantage, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <div className="mt-1 shrink-0">
                                                                <Check className="h-5 w-5 text-red-700 stroke-[3]" />
                                                            </div>
                                                            <span className="ml-3 text-black font-semibold text-sm md:text-base leading-snug text-left">{advantage}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul className="space-y-4 md:space-y-6">
                                                    {col2.map((advantage, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <div className="mt-1 shrink-0">
                                                                <Check className="h-5 w-5 text-red-700 stroke-[3]" />
                                                            </div>
                                                            <span className="ml-3 text-black font-semibold text-sm md:text-base leading-snug text-left">{advantage}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Right Side - Image (Featured Magazine) */}
                                        <div className="w-full sm:w-[280px] lg:w-[300px] shrink-0 self-center">
                                            <a
                                                href={data.mag_link || "https://drive.google.com/file/d/1iZPsekFA8vT5qAVqkYK7mPBN9XXPodvv/view?usp=sharing"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block group"
                                            >
                                                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 group-hover:shadow-primary/20 group-hover:scale-[1.03]">
                                                    <Image
                                                        src={data.imageUrl || "/images/phoenix-magazine.png"}
                                                        alt="RBANM Annual Magazine - Phoenix"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    {/* Hover Overlay */}
                                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                                                        <div className="bg-white/95 text-primary px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-2xl scale-90 group-hover:scale-100 text-sm">
                                                            Read Magazine
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
                                                        Phoenix Annual Magazine
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    />
                </div>
            </div>
        </section>
    );
}
