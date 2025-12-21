
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CulturalCommitteePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Cultural Committee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              The Cultural Committee brings the campus to life by celebrating creativity, talent, and diversity. We organize annual fests, inter-class competitions, and celebrations of national and regional festivals. The committee provides a platform for students to showcase their skills in music, dance, theater, and fine arts. By balancing academics with cultural expression, we ensure the holistic development of our students, making their college experience vibrant and memorable.
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
