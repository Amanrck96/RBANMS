'use client';

import { DepartmentLayout } from '@/components/layout/department-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Mail, UserPlus, CheckCircle } from 'lucide-react';

export default function CareerPage() {

    const overviewContent = (
        <div className="space-y-6">
            <Card className="bg-white border-2 border-primary text-black">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary text-xl">
                        <UserPlus className="h-6 w-6" /> Join Our Team
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-lg leading-relaxed">
                        Be part of a legacy that values compassion, idealism, and the transformative power of education. At RBANM's First Grade College, we believe that great institutions are built by great people. We are always looking for dedicated, passionate, and qualified individuals to join our faculty and administrative staff.
                    </p>
                    <p className="text-lg leading-relaxed">
                        We offer a vibrant academic environment, opportunities for professional growth, and the satisfaction of shaping the future of young minds.
                    </p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/20 bg-slate-50">
                    <CardContent className="pt-6">
                        <h3 className="font-bold text-lg text-primary mb-2">Why Work With Us?</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Heritage institution with over a century of legacy</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Central location in Bangalore</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Supportive management and work culture</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Focus on holistic development</span></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="border-2 border-primary/20 bg-slate-50">
                    <CardContent className="pt-6">
                        <h3 className="font-bold text-lg text-primary mb-2">What We Look For</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Academic excellence and subject expertise</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Passion for teaching and mentoring</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Commitment to student welfare</span></li>
                            <li className="flex gap-2 items-start"><CheckCircle className="h-5 w-5 text-green-600 shrink-0" /> <span>Alignment with our core values</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

    const openingsContent = (
        <div className="space-y-6">
            <Card className="bg-white border-2 border-primary text-black">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary text-xl">
                        <Briefcase className="h-6 w-6" /> Current Openings
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 bg-slate-50 rounded-lg border border-dashed">
                        <p className="text-muted-foreground mb-4">There are currently no open positions listed online.</p>
                        <p className="text-sm text-black">
                            However, we accept resumes year-round. If you are interested in working with us, please send your resume to the email below.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const applyContent = (
        <div className="space-y-6">
            <Card className="bg-white border-2 border-primary text-black">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary text-xl">
                        <Mail className="h-6 w-6" /> How to Apply
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-lg text-black">
                        Interested candidates can send their detailed CV description along with copies of certificates and a recent passport size photograph to the college office or via email.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <h3 className="font-bold text-blue-900 mb-3">Email Application</h3>
                            <p className="mb-2 text-sm text-blue-800">Send your resume to:</p>
                            <a href="mailto:info@rbanmsfgc.edu.in" className="text-xl font-bold text-primary hover:underline">
                                info@rbanmsfgc.edu.in
                            </a>
                            <p className="mt-4 text-xs text-muted-foreground">Please mention the subject/position applied for in the subject line.</p>
                        </div>
                        <div className="flex-1 bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-black mb-3">Postal Application</h3>
                            <p className="mb-2 text-sm text-black">Address your application to:</p>
                            <address className="not-italic text-black font-medium">
                                The Principal,<br />
                                RBANM's First Grade College,<br />
                                #12, Annaswamy Mudaliar Road,<br />
                                Bangalore - 560 042
                            </address>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const sections = [
        { id: 'overview', label: 'Overview', content: overviewContent },
        { id: 'openings', label: 'Current Openings', content: openingsContent },
        { id: 'apply', label: 'How to Apply', content: applyContent },
    ];

    return (
        <DepartmentLayout
            title="Careers"
            tagline="Join our dedicated team of educators and administrators."
            pageId="career"
            sections={sections}
        />
    );
}
