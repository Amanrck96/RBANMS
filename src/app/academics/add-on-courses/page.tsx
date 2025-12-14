
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Code, TrendingUp, Mic, Award } from 'lucide-react';

export default function AddOnCoursesPage() {
    const bcaCourses = [
        {
            title: 'Web Development + Career Prep',
            description: 'This foundation course helps students build a solid base in computer fundamentals, internet usage, and modern web development. It covers HTML, CSS, and JavaScript so students can create structured, well-styled, and interactive web pages. Along with hands-on practice and a mini project, the course also includes resume building, job search strategies, freelancing basics, and portfolio development to help students prepare for future career opportunities.'
        },
        {
            title: 'Web Development + Cloud DevOps',
            description: 'This value-added course for BCA V Semester students strengthens both theoretical and practical skills in modern web development. It covers HTML, CSS, JavaScript, Git/GitHub, API fundamentals, and cloud deployment using Microsoft Azure. By the end of the course, students are able to design, build, and deploy complete web applications.'
        }
    ];

    const commerceCourses = [
        {
            title: 'Magic Bus Training Programme',
            description: 'The Magic Bus Training Programme is a youth development initiative designed to equip students with essential life skills, employability competencies, and career readiness. Led by trained facilitators from the Magic Bus Foundation, the programme helps students build confidence, improve communication, and strengthen their problem-solving abilities.'
        },
        {
            title: 'NISM Certification on Investor Awareness',
            description: 'The NISM (National Institute of Securities Markets) Certification on Investor Awareness aims to build financial literacy and promote informed investment decisions among students. Conducted by certified NISM trainers, the programme gives participants a clear understanding of capital markets, financial products, and responsible investing practices.'
        },
        {
            title: 'Training Programmes on Tally and GST',
            description: 'Brought to RBANM’s Degree College by FICCI FLO, the Training Programmes on Basic Tally, Advanced Tally, and GST is a skill-building initiative focused on strengthening students’ accounting and digital finance abilities. Delivered by professional trainers certified by FICCI FLO, the programme offers practical training needed for modern accounting and business roles.'
        }
    ];

    const englishCourses = [
        {
            title: 'Campus to Corporate (10-day Certificate Course)',
            description: 'A focused short-term programme designed for final-year (6th Semester) students across streams to help bridge the gap between campus life and the expectations of industry. Through intensive sessions on written tests, group discussions, interviews, basic English grammar, résumé and cover letter writing. The course aims to equip students with the confidence, clarity of communication, and professional presentation skills they need to successfully navigate placement drives and job-selection processes.'
        },
        {
            title: 'Communication Skill & Soft Skills (4-month Course)',
            description: 'This extended certificate course for 5th semester BCA and BA, emphasises building strong communication, public speaking, presentation (PPT) skills, research ability, group discussion experience, and polished written English, including résumé, portfolio and cover letter construction. The classes happen thrice a week. By fostering interpersonal skills, teamwork, clarity of thought and self-confidence, the course helps students develop professional-level soft skills that are highly valued in any corporate or collaborative work environment.'
        },
        {
            title: 'Theatre (5 months)',
            description: 'This creative and experiential course immerses students in dramatic arts through acting, role-play, voice and body-language workshops, improvisation, rehearsals and stage performances. Beyond artistic exposure, through theatre students build confidence, enhance vocal and non-verbal communication, improve body language and presence, deepen empathy and emotional intelligence, and learn teamwork, leadership and spontaneity, all of which contribute to their overall personality development and make them more effective communicators in both personal and professional spheres.'
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-12">
            <div className="bg-primary py-16 text-primary-foreground mb-12">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="secondary" className="mb-4 text-primary font-bold bg-white">Skill Enhancement</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Add-on Courses</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                        Enhance your degree with our specialized certification and value-added courses designed to boost employability and skills.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 space-y-12">

                {/* BCA Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Code className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold text-primary font-headline">BCA</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bcaCourses.map((course, index) => (
                            <Card key={index} className="h-full border-2 hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-blue-900">{course.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-gray-700 leading-relaxed">
                                        {course.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Commerce Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold text-primary font-headline">B.COM and BBA</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commerceCourses.map((course, index) => (
                            <Card key={index} className="h-full border-2 hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-blue-900">{course.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-gray-700 leading-relaxed">
                                        {course.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* English Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <Mic className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold text-primary font-headline">Department Of English</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {englishCourses.map((course, index) => (
                            <Card key={index} className="h-full border-2 hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-xl font-bold text-blue-900">{course.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-gray-700 leading-relaxed">
                                        {course.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
