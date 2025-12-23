
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AICTECommitteePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        AICTE Committee
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The AICTE Committee ensures that the college adheres to the norms and standards set by the All India Council for Technical Education where applicable. This body oversees the compliance of technical and management programs with national regulatory requirements. We focus on maintaining the quality of curriculum, infrastructure, and faculty qualifications to meet statutory standards. The committee serves as a bridge between the institution and regulatory bodies, ensuring seamless approval processes and academic quality.
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
