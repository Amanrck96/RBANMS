
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ComingSoonPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Grievance Redressal Cell</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
            <h2 className="text-2xl font-semibold text-muted-foreground">Coming Soon</h2>
            <p className="mt-2 text-foreground/80">This page is under construction. Please check back later!</p>
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
