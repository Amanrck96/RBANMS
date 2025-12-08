
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Calendar, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home2() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1') || PlaceHolderImages[0];
    const principalImage = PlaceHolderImages.find(p => p.id === 'principal-photo');
    const directorImage = PlaceHolderImages.find(p => p.id === 'about-college'); // Using generic image for director if specific not found

    return (
        <main className="min-h-screen bg-background flex flex-col font-sans">
            <SiteHeader />

            {/* Modern Hero Section */}
            <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage.imageUrl}
                        alt="Campus Life"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
                </div>
                <div className="container relative z-10 px-4 md:px-8">
                    <div className="max-w-3xl space-y-6 animate-in slide-in-from-left duration-700">
                        <div className="inline-block px-4 py-1 bg-yellow-400 text-blue-900 font-bold rounded-full text-sm mb-2">
                            Admissions Open 2025-26
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-headline leading-tight">
                            Empowering Minds,<br />
                            <span className="text-yellow-400">Defining Futures.</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
                            Join RBANM's First Grade College for a legacy of academic excellence and holistic development in the heart of Bangalore.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold text-lg px-8 h-14">
                                <Link href="/contact">Apply Now</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 h-14">
                                <Link href="/academics/courses-offered">Explore Courses</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats / Highlights Band */}
            <section className="bg-white py-12 relative z-20 -mt-10 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 text-center divide-x divide-gray-100">
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-blue-900 font-headline">100+</h3>
                        <p className="text-muted-foreground font-medium">Years of Legacy</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-blue-900 font-headline">B+</h3>
                        <p className="text-muted-foreground font-medium">NAAC Accredited</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-blue-900 font-headline">15+</h3>
                        <p className="text-muted-foreground font-medium">Academic Programs</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl font-bold text-blue-900 font-headline">TOP</h3>
                        <p className="text-muted-foreground font-medium">Central Location</p>
                    </div>
                </div>
            </section>

            {/* Distinct Content Sections: Welcome & Vision */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-primary font-bold tracking-wider uppercase mb-2">About Our Institution</h4>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-headline mb-6">A Tradition of Educational Excellence</h2>
                                <div className="w-20 h-1.5 bg-yellow-500 rounded-full mb-6"></div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                RBANMS First Grade College is affiliated to Bengaluru City University and recognised under 2(f) & 12(B) of the UGC Act 1956. We are committed to fostering an environment where students can thrive academically, socially, and personally.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full text-blue-900"><GraduationCap size={24} /></div>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Expert Faculty</h5>
                                        <p className="text-sm text-gray-500">Dedicated to your success</p>
                                    </div>
                                </div>
                                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full text-green-900"><Trophy size={24} /></div>
                                    <div>
                                        <h5 className="font-bold text-gray-900">Holistic Growth</h5>
                                        <p className="text-sm text-gray-500">Beyond the classroom</p>
                                    </div>
                                </div>
                            </div>
                            <Button asChild variant="link" className="text-blue-900 font-bold p-0 text-lg">
                                <Link href="/about">Read more about us <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-yellow-400/20 rounded-2xl transform rotate-3"></div>
                            {directorImage && (
                                <Image
                                    src={directorImage.imageUrl}
                                    alt="College Vision"
                                    width={600}
                                    height={800}
                                    className="relative rounded-2xl shadow-xl object-cover aspect-[4/5]"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Preview Section */}
            <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
                {/* Abstract bg shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container relative z-10 mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold font-headline">Featured Academic Programs</h2>
                        <p className="text-blue-200 max-w-2xl mx-auto text-lg">Choose from our diverse range of undergraduate courses designed to launch your career.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "B.C.A", desc: "Bachelor of Computer Applications", icon: BookOpen },
                            { title: "B.Com", desc: "Bachelor of Commerce", icon: Users },
                            { title: "B.B.A", desc: "Bachelor of Business Administration", icon: Star },
                        ].map((program, idx) => (
                            <Card key={idx} className="bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer group">
                                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                    <div className="bg-white/10 p-4 rounded-full group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                                        <program.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold">{program.title}</h3>
                                    <p className="text-blue-200">{program.desc}</p>
                                    <Button asChild size="sm" variant="secondary" className="mt-4 bg-transparent border border-white text-white group-hover:bg-white group-hover:text-blue-900">
                                        <Link href="/academics/courses-offered">View Details</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold">
                            <Link href="/academics/courses-offered">View All Courses</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Leadership Messages - Side by Side */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Director */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-blue-100">
                                {directorImage && <Image src={directorImage.imageUrl} alt="Director" width={100} height={100} className="object-cover h-full w-full" />}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-1">Message from Director</h3>
                            <p className="text-sm text-gray-500 mb-4">Leading with Vision</p>
                            <p className="text-gray-600 mb-6 italic">
                                "Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing."
                            </p>
                            <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                                <Link href="/about/director-message">Read Full Message</Link>
                            </Button>
                        </div>

                        {/* Principal */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-yellow-100">
                                {principalImage && <Image src={principalImage.imageUrl} alt="Principal" width={100} height={100} className="object-cover h-full w-full" />}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-1">Message from Principal</h3>
                            <p className="text-sm text-gray-500 mb-4">Guiding Excellence</p>
                            <p className="text-gray-600 mb-6 italic">
                                "The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. We strive to create efficient academicians and innovators."
                            </p>
                            <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                                <Link href="/about/principal-message">Read Full Message</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events / Announcements */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-headline">Latest Updates</h2>
                            <p className="text-gray-500 mt-2">Stay connected with what's happening on campus</p>
                        </div>
                        <Button asChild variant="ghost" className="hidden md:inline-flex text-blue-900">
                            <Link href="/events">View All Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((_, i) => (
                            <Card key={i} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-0">
                                    <div className="h-48 bg-gray-200 relative">
                                        {/* Placeholder for event image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            <Calendar size={48} opacity={0.5} />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">News</span>
                                        <h4 className="text-xl font-bold text-blue-900 mt-2 mb-3">College Fest 2025 Announced</h4>
                                        <p className="text-gray-600 text-sm mb-4">Join us for the annual cultural extravaganza featuring diverse performances...</p>
                                        <Link href="#" className="text-blue-700 font-semibold text-sm hover:underline">Read more</Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Button asChild variant="ghost" className="text-blue-900">
                            <Link href="/events">View All Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
