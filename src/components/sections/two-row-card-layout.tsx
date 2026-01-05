'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

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
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">Our Founder</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src="/images/founder.jpg"
                                    alt="Rai Bahadur Arcot Narrainswamy Mudaliar"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className="text-center text-sm font-bold text-primary mb-2">
                                Rai Bahadur Arcot Narrainswamy Mudaliar
                            </h3>
                            <p className="text-muted-foreground text-sm text-center mb-3">(1827–1910)</p>

                            <div className="text-left text-sm content-black mb-4">
                                <p className={expandedCard !== 'founder' ? 'line-clamp-3' : ''}>
                                    Our founder Dharmarathnakara Rai Bahadur Arcot Narrainswamy Mudaliar embarked on his vision of social regeneration, providing for all classes and castes in the fields of education and social welfare.
                                </p>

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

                    {/* Director's Message */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">Message from Director</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src="/images/director_new.png"
                                    alt="Dr. Sahana Das - Director"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>

                            <div className="text-left text-sm content-black mb-4">
                                <p className={expandedCard !== 'director' ? 'line-clamp-4' : ''}>
                                    Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful.
                                </p>

                                {expandedCard === 'director' && (
                                    <div className="mt-3 space-y-3">
                                        <p>
                                            At RBANM's First Grade College, we believe in nurturing not just academicians but well-rounded individuals who are equipped to face the challenges of the modern world. Our comprehensive approach to education ensures that students develop critical thinking, creativity, and leadership skills.
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

                    {/* Principal's Message */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">Message from Principal</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src="/images/migrated/principal-whatsapp.jpeg"
                                    alt="Dr. Shanti Iyer - Principal"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>

                            <div className="text-left text-sm content-black mb-4">
                                <p className={expandedCard !== 'principal' ? 'line-clamp-4' : ''}>
                                    The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM's First Grade College is to create efficient academicians, innovative entrepreneurs, and responsible citizens.
                                </p>

                                {expandedCard === 'principal' && (
                                    <div className="mt-3 space-y-3">
                                        <p>
                                            We are dedicated to fostering an educational experience that goes beyond textbooks. Our focus is on holistic development that encompasses intellectual growth, emotional maturity, and social responsibility.
                                        </p>
                                        <p>
                                            Through our diverse range of programs, state-of-the-art facilities, and experienced faculty, we strive to provide every student with the tools they need to succeed in their chosen fields and contribute meaningfully to society.
                                        </p>
                                        <p>
                                            I invite you to join us on this transformative journey of learning and growth at RBANM's First Grade College.
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
                </div>

                {/* Full-Width "The RBANM's Experience" Card - Centered between the rows */}
                <div className="flex justify-center mb-6">
                    <Card className="w-full max-w-5xl">
                        <CardHeader className="text-center">
                            <CardTitle className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-primary font-headline">
                                The RBANM's Experience
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                <ul className="space-y-4">
                                    {col1.map((advantage, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                                            <span className="text-muted-foreground font-bold">{advantage}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {col2.map((advantage, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                                            <span className="text-muted-foreground font-bold">{advantage}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Row 2: Blog, Announcements, The Month That Was */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    {/* Blog Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">Blog</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm content-black mb-4">
                                Welcome to our blog section where we share insights, stories, and updates from our college community. Stay tuned for upcoming articles on academic excellence, student achievements, and educational initiatives that shape the future of learning.
                            </p>
                            <p className="text-sm text-muted-foreground italic">
                                Blog content coming soon...
                            </p>
                        </CardContent>
                    </Card>

                    {/* Announcements Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">Notice</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3 text-sm content-black list-disc list-inside">
                                <li>Admissions open for AY 2026-27. For a Campus Tour, email <a href="mailto:info@rbanmsfgc.edu.in" className="text-primary hover:underline">info@rbanmsfgc.edu.in</a>.</li>
                                <li>College will remain closed on 12th and 13th January.</li>
                                <li>The Even Semester for AY 2025-26 will begin on January 19.</li>
                                <li>Regular classes for all courses will commence on January 27.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* The Month That Was Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-blue-900 font-headline">The Month That Was</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="space-y-3">
                                <div className="border-l-4 border-blue-900 pl-3 py-2">
                                    <p className="text-sm font-semibold text-blue-900">National Science Day Celebration</p>
                                    <p className="text-xs text-muted-foreground">February 28, 2025</p>
                                    <p className="text-xs content-black mt-1">Interactive workshops and science exhibitions</p>
                                </div>
                                <div className="border-l-4 border-blue-900 pl-3 py-2">
                                    <p className="text-sm font-semibold text-blue-900">Inter-Collegiate Sports Meet</p>
                                    <p className="text-xs text-muted-foreground">February 15-17, 2025</p>
                                    <p className="text-xs content-black mt-1">Our students won 5 gold medals</p>
                                </div>
                                <div className="border-l-4 border-blue-900 pl-3 py-2">
                                    <p className="text-sm font-semibold text-blue-900">Career Guidance Workshop</p>
                                    <p className="text-xs text-muted-foreground">February 10, 2025</p>
                                    <p className="text-xs content-black mt-1">Industry experts shared valuable insights</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
