'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function TwoRowCardLayout() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const toggleCard = (cardId: string) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    return (
        <section className="py-12 lg:py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Row 1: Founder, Director, Principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Founder Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-blue-900 font-headline">Our Founder</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src="https://scontent.fccu23-1.fna.fbcdn.net/v/t39.30808-6/470059366_9268902089795080_3206634938260589095_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=33274f&_nc_ohc=1wMdKiYsPe0Q7kNvwHkpe9M&_nc_oc=AdnnQ3Dvj_7PTdd8L3xlkXG-RqOTyCUKX0CZR5ozi9Qql-bHIMytpUfqB8F5XEpTmMPjaBq8cnsY_ylmNvShhi2b&_nc_zt=23&_nc_ht=scontent.fccu23-1.fna&_nc_gid=S7dCKKEdDQLhDtY_vKIgCw&oh=00_AfnvMIwmAvEefoTF1ecEUfhRF4vAOgJtSA_y_nKonvE23w&oe=69437EB5"
                                    alt="Rai Bahadur Arcot Narrainswamy Mudaliar"
                                    fill
                                    className="object-contain object-top"
                                />
                            </div>
                            <h3 className="text-center text-sm font-bold text-primary mb-2">
                                Rai Bahadur Arcot Narrainswamy Mudaliar
                            </h3>
                            <p className="text-muted-foreground text-sm text-center mb-3">(1827–1910)</p>

                            <div className="text-left text-sm content-black mb-4">
                                <p className={expandedCard !== 'founder' ? 'line-clamp-3' : ''}>
                                    Arcot Narrainswamy Mudaliar was a pioneering businessman, philanthropist, and social reformer whose life story embodies the values of equality, education, and social justice. Born in Arcot in 1827, he moved to Bangalore as a child, shouldering the responsibility of his family after his father's demise.
                                </p>

                                {expandedCard === 'founder' && (
                                    <div className="mt-3 space-y-3">
                                        <p>
                                            His entrepreneurial acumen led him to establish successful businesses, including Mysore Hall and Bangalore Agency, making him one of the wealthiest merchants of his time.
                                        </p>
                                        <p>
                                            Despite his business success, what set Mudaliar apart was his progressive vision for society. Deeply influenced by the idea that wealth was a trust for the upliftment of the needy, he dedicated himself to philanthropy, particularly in education. In 1873, he founded the Free English Primary School in Bangalore Cantonment for non-white students—an assertion of the principle of equality at a time when education was a privilege of the elite.
                                        </p>
                                        <p>
                                            Mudaliar also championed gender and caste equality, with the founding of the Thirukulatar School in 1883, which provided education to the most marginalized castes. In 1886, he established the Govindammal Girls School, recognizing that education was the key to women's empowerment.
                                        </p>
                                        <p>
                                            His legacy of challenging caste hierarchies and commitment to social reform places him among the visionary reformers of 19th-century India.
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
                            <CardTitle className="text-blue-900 font-headline">Message from Director</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src="https://rbanmsfgc.ac.in/images/gallery/sahana.jpeg"
                                    alt="Dr. Sahana Das - Director"
                                    fill
                                    className="object-cover"
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
                            <CardTitle className="text-blue-900 font-headline">Message from Principal</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src="https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg"
                                    alt="Dr. Shanti Iyer - Principal"
                                    fill
                                    className="object-cover"
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

                {/* Row 2: Blog, Announcements, The Month That Was */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Blog Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-blue-900 font-headline">Blog</CardTitle>
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
                            <CardTitle className="text-blue-900 font-headline">Announcements</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3 text-sm content-black list-disc list-inside">
                                <li>Admission applications for the Academic Year 2025-26 are now open</li>
                                <li>Annual Cultural Fest scheduled for January 2026</li>
                                <li>New certificate courses in Digital Marketing and Data Analytics</li>
                                <li>Library extended hours during examination period</li>
                                <li>Guest lecture series on Entrepreneurship begins next month</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* The Month That Was Card */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-blue-900 font-headline">The Month That Was</CardTitle>
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
