
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PoSHPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">PoSH (Prevention of Sexual Harassment)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              The PoSH Committee is strictly mandated to ensure a safe, secure, and dignified environment for all, free from sexual harassment. Operating in compliance with legal guidelines, the committee handles grievances with the utmost confidentiality and sensitivity. We conduct regular awareness campaigns to educate the campus community about their rights and responsibilities. Our zero-tolerance policy ensures that RBNMS College remains a safe haven where students and staff can work and learn without fear or intimidation.
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
