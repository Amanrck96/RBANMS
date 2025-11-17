
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ComingSoonPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Message from Principal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <h2 className="text-2xl font-semibold text-muted-foreground">Coming Soon</h2>
            <p className="mt-2 text-foreground/80">This page is under construction. Please check back later!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
