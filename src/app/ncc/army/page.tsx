
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ArmyPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        NCC – Army Wing
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The NCC Army Wing at RBNMS College is a premier youth grooming platform that focuses on character, comradeship, and discipline. Cadets receive training in military drills, map reading, and weapon handling, alongside developing soft skills and leadership qualities. We prepare youth for the armed forces and other uniformed services while fostering a strong spirit of national integration. Our cadets are trained to be resilient leaders ready to serve the nation with pride.
                        </p>
                        <div className="mt-8 rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/ncc/army_wing.jpg"
                                alt="NCC Army Wing Cadets"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
