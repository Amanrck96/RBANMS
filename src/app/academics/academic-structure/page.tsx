'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, CheckSquare, Languages, BrainCircuit, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { usePageContent } from '@/hooks/use-page-content';

const defaultStructure = {
    duration: "There are 6 semesters to be covered for an undergraduate degree, with 2 semesters per academic year.",
    courses: [
        {
            title: "Core Subject Courses",
            icon: Book,
            description: "Core courses in the chosen discipline. Options at RBANM's, depending on eligibility:",
            options: [
                { name: "Bachelor of Arts – B.A.", href: "/departments/arts" },
                { name: "Bachelor of Commerce – B.Com.", href: "/departments/commerce" },
                { name: "Bachelor of Business Management – B.B.A.", href: "/departments/management" },
                { name: "Bachelor of Computer Applications – B.C.A.", href: "/departments/computer-applications" },
            ],
        },
        {
            title: "Compulsory English",
            icon: Languages,
            description: "Compulsory English courses over the first 4 semesters.",
            href: "/departments/english",
        },
        {
            title: "Compulsory Language",
            icon: Languages,
            description: "Compulsory Language courses over the first 4 semesters. Options include:",
            options: [
                { name: "Hindi" },
                { name: "Kannada" },
                { name: "Tamil" },
                { name: "Additional English" },
            ] as { name: string; href?: string }[],
            href: "/departments/languages",
        },
        {
            title: "Other Compulsory Courses",
            icon: CheckSquare,
            description: "Compulsory courses in subjects like Constitution, and Environmental Science as directed by Bengaluru City University.",
        },
        {
            title: "Skill-Based & Vocational Courses",
            icon: BrainCircuit,
            description: "Offered in collaboration with external trainers. On completion of these courses, students earn a certificate of recognition.",
            href: "/industry-connect/addon-programmes"
        }
    ],
};


export default function AcademicStructurePage() {
    const { data, loading } = usePageContent('academics-structure');

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-primary h-8 w-8" />
            </div>
        );
    }

    const title = data?.title || "Academic Structure";
    const content = data?.content;

    return (
        <div className="container mx-auto px-4 py-12 md:py-16 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
                    {title}
                </h1>
                {!content && (
                    <div className="max-w-3xl mx-auto space-y-2 text-lg text-muted-foreground">
                        <p>{defaultStructure.duration}</p>
                        <p>Each semester has the following courses:</p>
                    </div>
                )}
            </div>

            {content ? (
                <Card>
                    <CardContent className="pt-6">
                        <div className="prose prose-lg max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: content }} />
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defaultStructure.courses.map((course, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary">
                            <CardHeader className="space-y-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <course.icon className="h-6 w-6 text-primary group-hover:text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-primary">
                                    {course.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    {course.description}
                                </p>
                                {course.options && (
                                    <ul className="space-y-2">
                                        {course.options.map((opt) => (
                                            <li key={opt.name} className="flex items-center gap-2 text-sm">
                                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                                {opt.href ? (
                                                    <Link href={opt.href} className="font-medium hover:text-primary hover:underline transition-colors">
                                                        {opt.name}
                                                    </Link>
                                                ) : (
                                                    <span className="font-medium text-foreground/80">{opt.name}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {course.href && !course.options && (
                                    <div className="pt-2">
                                        <Link
                                            href={course.href}
                                            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                        >
                                            Learn More →
                                        </Link>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
