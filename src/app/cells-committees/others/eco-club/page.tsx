
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EcoClubPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Eco Club</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              The Eco Club is dedicated to creating a greener, more sustainable campus and community. We organize tree plantation drives, waste management awareness, and plastic-free initiatives to instill environmental consciousness in students. Our activities encourage students to become active guardians of nature. By promoting eco-friendly practices within the college and beyond, the Eco Club plays a vital role in building a responsible generation committed to protecting our planet.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
