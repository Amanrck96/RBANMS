
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function IPCPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
                        IPC (Internal Placement Cell)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/90 leading-relaxed">
                        <p className="text-lg">
                            The Internal Placement Cell (IPC) bridges the gap between academic learning and industry requirements. We are committed to preparing students for their careers by organizing training sessions, workshops, and recruitment drives. The cell actively liaises with top companies to facilitate internship and job opportunities, ensuring our graduates are employable and confident. Our goal is to guide every student toward the right career path, equipping them with the professional skills needed to succeed in a competitive job market.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
