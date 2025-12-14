
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ManasaCounsellingPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        Manasa – Counselling Cell
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The Manasa Counselling Cell prioritizes the mental well-being of our students. Recognizing the pressures of academic and personal life, we provide a confidential space for students to seek guidance and emotional support. Professional counsellors help students navigate stress, anxiety, and relationship issues, promoting positive mental health. We believe that emotional stability is key to academic success, and we are committed to ensuring no student feels alone in their struggles.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
