
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DisciplineCommitteePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        Discipline Committee
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The Discipline Committee ensures the maintenance of order, decorum, and professional conduct across the college campus. We are responsible for enforcing the college’s code of conduct and addressing behavioral issues prompt and fairly. By promoting punctuality, respect, and rule-abidance, we create a conducive academic environment where learning can flourish without disruption. Our goal is to mold students into responsible, self-disciplined individuals who respect the rights and space of others.
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
