
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CulturalCommitteePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Cultural Committee</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              The Cultural Committee brings the campus to life by celebrating creativity, talent, and diversity. We organize annual fests, inter-class competitions, and celebrations of national and regional festivals. The committee provides a platform for students to showcase their skills in music, dance, theater, and fine arts. By balancing academics with cultural expression, we ensure the holistic development of our students, making their college experience vibrant and memorable.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
