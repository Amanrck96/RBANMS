
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NavyPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        NCC – Navy Wing
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The NCC Navy Wing offers students a unique opportunity to develop discipline, leadership, and a spirit of adventure. Cadets undergo rigorous training in naval drills, boat pulling, and swimming, alongside character-building activities. We aim to instil a deep sense of patriotism and readiness to serve the nation. Through camps and national exchanges, our Navy Wing cadets grow into responsible citizens who embody the values of duty, unity, and discipline.
                        </p>
                        <div className="mt-8 rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/ncc/navy_wing.png"
                                alt="NCC Navy Wing Cadets Activity"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
