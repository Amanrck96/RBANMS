import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TwoRowCardLayout() {
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
                        <CardContent className="flex-grow flex flex-col items-center">
                            <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/470059366_9268902089795080_3206634938260589095_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=33274f&_nc_ohc=fCLV2vKFEQIQ7kNvwGZsXm6&_nc_oc=AdkiQzkmLrqMoZis6oXzk2FJYPM4ez03sq1A14BBNPrr-L1YknS1QWu0a5d7ePtSoAQ&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=7DwvK4Ysg3n5cW3d8BE-Lg&oh=00_Afh71eWrZc3DwNYpr9VEsUh6kRaBUFsoWucoUd45mNJDkw&oe=6931EAB5"
                                    alt="Rai Bahadur Arcot Narrainswamy Mudaliar"
                                    fill
                                    className="object-contain object-top"
                                />
                            </div>
                            <h3 className="text-center text-sm font-bold text-primary mb-2">
                                Rai Bahadur Arcot Narrainswamy Mudaliar
                            </h3>
                            <p className="text-muted-foreground text-sm text-center mb-3">(1827–1910)</p>
                            <p className="text-left text-sm content-black mb-4 line-clamp-3">
                                A pioneering businessman, philanthropist, and social reformer whose life story embodies the values of equality, education, and social justice...
                            </p>
                            <Button asChild variant="link" className="mt-auto">
                                <Link href="/about/founder">Read More</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Director's Message */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-blue-900 font-headline">Message from Director</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col items-center">
                            <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src="https://rbanmsfgc.ac.in/images/director.jpg"
                                    alt="Director"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-left text-sm content-black mb-4 line-clamp-4">
                                Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful...
                            </p>
                            <Button asChild variant="link" className="mt-auto">
                                <Link href="/about/director-message">Read More</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Principal's Message */}
                    <Card className="flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-blue-900 font-headline">Message from Principal</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col items-center">
                            <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src="https://rbanmsfgc.ac.in/images/principal.jpg"
                                    alt="Principal"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-left text-sm content-black mb-4 line-clamp-4">
                                The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM's First Grade College is to create efficient academicians, innovative entrepreneurs...
                            </p>
                            <Button asChild variant="link" className="mt-auto">
                                <Link href="/about/principal-message">Read More</Link>
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
                            <Button asChild variant="link" className="mt-4 px-0">
                                <Link href="/announcements">View All Announcements</Link>
                            </Button>
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
