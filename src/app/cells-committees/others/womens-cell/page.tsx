
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WomensCellPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Women’s Cell</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              The Women Cell at RBNMS College is dedicated to empowering female students and staff by creating a supportive and inclusive campus environment. The cell serves as a platform for women to voice their concerns and aspirations, fostering confidence and leadership skills. We organize seminars, workshops, and awareness programs focusing on gender equity, women's rights, and health. We are committed to ensuring that women feel safe, respected, and valued in all their endeavors on campus and beyond.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
