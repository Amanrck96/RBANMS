
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function YRCSPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        YRCS (Youth Red Cross Society)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The Youth Red Cross Society unit focuses on the protection of health and life, service to the sick, and promotion of international friendship. Our student volunteers are trained in first aid, disaster management, and community health hygiene. We regularly organize blood donation camps and health check-ups. The YRCS at RBNMS encourages students to embrace humanitarian values, fostering a spirit of compassion and readiness to help those in distress.
                        </p>
                    </div>
                </CardContent>
                <div className="mt-8 w-full aspect-[21/9] bg-muted relative rounded-xl overflow-hidden shadow-sm mx-auto max-w-5xl">
                    {/* Placeholder for the wide angle image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-500">
                        <span className="text-lg font-medium">Featured Activity Image</span>
                    </div>
                </div>
            </Card>
        </div>
    );
}
