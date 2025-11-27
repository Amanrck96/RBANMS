
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AnnouncementsSection() {
  const principalImage = PlaceHolderImages.find(p => p.id === 'principal-photo');
  const directorImage = PlaceHolderImages.find(p => p.id === 'about-college');

  return (
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Affiliation Text */}
          <Card className="flex flex-col h-full lg:col-span-1" id="rbanms-fgc">
            <CardHeader>
              <CardTitle className="text-blue-900 font-headline">RBANM’s FGC</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="content-black mb-4">
                RBANMS FIRST GRADE COLLEGE, is affiliated to Bengaluru City University. It has been accredited by NAAC with a B+ and is recognised under Section 2(f) & 12(B) of the UGC Act, 1956.
              </p>
              <p className="content-black">
                <strong>A premier Institution dedicated to fostering academic excellence and holistic development, affiliated to Bengaluru City University.</strong>
              </p>
            </CardContent>
          </Card>

          {/* Director's Message */}
          <Card className="flex flex-col h-full lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-blue-900 font-headline">Message from Director</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col items-center">
              {directorImage && (
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={directorImage.imageUrl}
                    alt={directorImage.description}
                    fill
                    className="object-cover rounded-none"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              )}
              <p className="text-left text-sm content-black mb-4 line-clamp-4">
                Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful...
              </p>
              <Button asChild variant="link">
                <Link href="/about/director-message">Read More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Principal's Message */}
          <Card className="flex flex-col h-full lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-blue-900 font-headline">Message from Principal</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col items-center">
              {principalImage && (
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={principalImage.imageUrl}
                    alt={principalImage.description}
                    fill
                    className="object-cover rounded-none"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              )}
              <p className="text-left text-sm content-black mb-4 line-clamp-4">
                The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM’s First Grade College is to create efficient academicians, innovative entrepreneurs...
              </p>
              <Button asChild variant="link">
                <Link href="/about/principal-message">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


