import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Trophy, Palette } from 'lucide-react';

export default function ActivitiesIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Student Activities</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          At RBANMS First Grade College, learning extends beyond textbooks through vibrant cultural, literary, social, and co-curricular forums.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="hover:shadow-lg transition-all border-2 border-primary/20 flex flex-col justify-between">
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-primary mb-4">
              <Palette className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl text-primary font-bold">Cultural Activities</CardTitle>
            <CardDescription className="text-base text-gray-600">
              Clubs and initiatives in theatre, music, dance, film-making, literature, and creative arts.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Link
              href="/activities/cultural"
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              Explore Cultural Forums <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all border-2 border-primary/20 flex flex-col justify-between">
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 mb-4">
              <Trophy className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl text-primary font-bold">Co-Curricular Activities</CardTitle>
            <CardDescription className="text-base text-gray-600">
              National Service Scheme (NSS), Youth Red Cross (YRCS), and National Cadet Corps (NCC).
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Link
              href="/activities/co-curricular"
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              Explore Co-Curricular Forums <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
