
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WomensCellPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Women Cell
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              The Women Cell at RBNMS College is dedicated to empowering female students and staff by creating a supportive and inclusive campus environment. The cell serves as a platform for women to voice their concerns and aspirations, fostering confidence and leadership skills. We organize seminars, workshops, and awareness programs focusing on gender equity, women's rights, and health. We are committed to ensuring that women feel safe, respected, and valued in all their endeavors on campus and beyond.
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
