
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ExaminationCommitteePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        Examination Committee
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The Examination Committee is the backbone of the college's evaluation system, ensuring transparency, fairness, and efficiency in all internal and external assessments. We are responsible for scheduling exams, securing question papers, and managing the conduct of tests in strict accordance with university norms. By maintaining the integrity of the examination process, we ensure that student performance is assessed accurately and impartially, upholding the academic credibility of RBNMS College.
                        </p>
                    </div>
                </CardContent>
                <div className="mt-8 w-full aspect-[21/9] bg-muted relative rounded-xl overflow-hidden shadow-sm mx-auto max-w-5xl">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-500">
                        <span className="text-lg font-medium">Featured Activity Image</span>
                    </div>
                </div>
            </Card>
        </div>
    );
}
