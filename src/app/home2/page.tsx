import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Calendar, Newspaper, Info } from 'lucide-react';
import { cn } from "@/lib/utils";

// Reusable components for this page
function ProfileCard({ title, name, description, imageSrc, link, unoptimized = false }: { title: string, name?: string, description: string, imageSrc: string, link: string, unoptimized?: boolean }) {
    return (
        <Card className="flex flex-col h-full border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
                <h3 className="text-lg font-bold text-primary font-headline uppercase">{title}</h3>
            </CardHeader>
            <CardContent className="flex-grow space-y-3 pb-2">
                {name && <p className="font-semibold text-blue-800">{name}</p>}
                <div className="flex gap-4 items-start">
                    <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden border">
                        <Image src={imageSrc} alt={name || title} fill className="object-cover" unoptimized={unoptimized} />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="pt-0">
                <Button asChild variant="link" className="px-0 text-blue-600 font-semibold">
                    <Link href={link}>Read more <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

function SmallInfoCard({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <Card className="border-l-4 border-l-accent shadow-sm">
            <CardHeader className="py-3 bg-secondary/20 flex flex-row items-center gap-2">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="text-md font-bold text-primary font-headline m-0">{title}</h3>
            </CardHeader>
            <CardContent className="py-4 text-sm text-slate-700">
                {children}
            </CardContent>
        </Card>
    );
}

export default function Home2() {
    return (
        <div className="min-h-screen bg-slate-50 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT COLUMN (3 cols) */}
                    <div className="lg:col-span-3 space-y-6 flex flex-col">

                        {/* Top Small Card: This Month's Message */}
                        <SmallInfoCard title="The Month That Was" icon={Calendar}>
                            <div className="space-y-2">
                                <p className="font-bold text-blue-900 text-sm mb-1">November 2025</p>
                                <ul className="space-y-2 text-xs">
                                    <li className="flex gap-2 items-start"><span className="text-accent">•</span> National Education Day celebrated</li>
                                    <li className="flex gap-2 items-start"><span className="text-accent">•</span> Industrial visit to HTCS Cloud Solutions</li>
                                    <li className="flex gap-2 items-start"><span className="text-accent">•</span> Annual Sports Day</li>
                                </ul>
                                <Link href="/events" className="text-xs text-blue-600 font-bold block mt-2 hover:underline">View Details →</Link>
                            </div>
                        </SmallInfoCard>

                        {/* Middle Event Card: Highlights */}
                        <Card className="flex-grow shadow-md border-slate-200">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                                    <Newspaper className="h-5 w-5" /> Event Highlights
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="relative w-full aspect-video rounded-md overflow-hidden bg-slate-200">
                                    {/* Placeholder for event image */}
                                    <Image
                                        src="https://rbanmsfgc.ac.in/images/slider/1.jpg"
                                        alt="Event Highlight"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900 text-sm mb-1">Annual Cultural Fest 2025</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Join us for a week of vibrant performances, art exhibitions, and competitions.
                                        Showcasing the diverse talents of our students.
                                    </p>
                                    <Button variant="outline" size="sm" className="mt-3 w-full text-xs">View Schedule</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Bottom Small Card: Quick Info / Magazine */}
                        <SmallInfoCard title="College Magazine" icon={Info}>
                            <p className="mb-2">Read the latest edition of our college magazine "Prerana".</p>
                            <Button size="sm" variant="secondary" className="w-full text-xs">Download PDF</Button>
                        </SmallInfoCard>

                    </div>

                    {/* CENTER COLUMN (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col h-full bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                        {/* Hero Banner Area */}
                        <div className="relative w-full h-64 md:h-80 bg-blue-900">
                            <Image
                                src="https://rbanmsfgc.ac.in/images/slider/2.jpg"
                                alt="College Campus"
                                fill
                                className="object-cover opacity-40 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-8">
                                <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-bold uppercase rounded-full w-fit mb-3">Est. 1873</span>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-headline leading-tight">
                                    A+ RBANM’s First Grade College
                                </h1>
                                <p className="text-white/90 text-lg font-medium max-w-2xl">
                                    Affiliated to Bengaluru City University
                                </p>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="p-8 space-y-8 flex-grow">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">Welcome to Excellence</h2>
                                <p className="text-slate-700 leading-relaxed">
                                    RBANMS FIRST GRADE COLLEGE is a premier Institution dedicated to fostering academic excellence and holistic development.
                                    Accredited by <strong>NAAC with 'B+'</strong> and recognised under Section 2(f) & 12(B) of the UGC Act, 1956.
                                </p>
                                <p className="text-slate-700 leading-relaxed mt-4">
                                    We blend traditional values with modern education, ensuring our students are prepared not just for careers, but for life.
                                    Our campus is a vibrant hub of learning, culture, and innovation.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-accent"></span> Why Choose Us?
                                    </h3>
                                    <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                                        <li>Heritage of 150+ years</li>
                                        <li>Centrally located campus</li>
                                        <li>Experienced Faculty</li>
                                        <li>Strong Industry Connect</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-accent"></span> Programs
                                    </h3>
                                    <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                                        <li>BA, B.Com, BBA, BCA, B.Sc</li>
                                        <li>M.Com, PG Diploma</li>
                                        <li>Certificate Courses</li>
                                        <li>Value Added Programs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex gap-4">
                                <Button className="flex-1 text-md py-6">Apply Now</Button>
                                <Button variant="outline" className="flex-1 text-md py-6 border-blue-200 text-blue-700 hover:bg-blue-50">Virtual Tour</Button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (3 cols) */}
                    <div className="lg:col-span-3 space-y-6 flex flex-col">

                        {/* Founder Card */}
                        <ProfileCard
                            title="Founder"
                            name="Rai Bahadur Arcot Narrainswamy Mudaliar"
                            imageSrc="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/470059366_9268902089795080_3206634938260589095_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=33274f&_nc_ohc=fCLV2vKFEQIQ7kNvwGZsXm6&_nc_oc=AdkiQzkmLrqMoZis6oXzk2FJYPM4ez03sq1A14BBNPrr-L1YknS1QWu0a5d7ePtSoAQ&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=7DwvK4Ysg3n5cW3d8BE-Lg&oh=00_Afh71eWrZc3DwNYpr9VEsUh6kRaBUFsoWucoUd45mNJDkw&oe=6931EAB5"
                            description="A pioneering businessman, philanthropist, and social reformer whose life story embodies the values of equality and education."
                            link="/about/founder"
                        />

                        {/* Director Card */}
                        <ProfileCard
                            title="Director"
                            name="Dr. Sahana Das"
                            imageSrc="https://rbanmsfgc.ac.in/images/gallery/sahana.jpeg"
                            description="Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal wellbeing."
                            link="/about/director-message"
                        />

                        {/* Principal Card */}
                        <ProfileCard
                            title="Principal"
                            name="Dr. Shanti Iyer"
                            imageSrc="https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg"
                            description="The purpose of higher education is not merely the transmission of knowledge, but the transformation see efficient academicians."
                            link="/about/principal-message"
                            unoptimized={true}
                        />

                    </div>

                </div>
            </div>
        </div>
    );
}
