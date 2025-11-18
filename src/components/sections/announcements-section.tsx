
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const notifications = [
  { id: 1, text: 'First Year Orientation Programme Schedule', new: true },
  { id: 2, text: 'Internal Assessment Timetable for V Sem', new: true },
  { id: 3, text: 'Library E-Resources Workshop', new: false },
  { id: 4, text: 'Annual Sports Meet Registration Open', new: false },
  { id: 5, text: 'Guest Lecture on AI and Machine Learning', new: true },
];

export function AnnouncementsSection() {
  const principalImage = PlaceHolderImages.find(p => p.id === 'principal-photo');
  const directorImage = PlaceHolderImages.find(p => p.id === 'about-college');

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Application Text */}
          <Card className="overflow-hidden lg:col-span-1">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary font-headline">Application Text</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-96 p-4">
                 <p className="text-muted-foreground">Application related information and announcements will be displayed here.</p>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Director's Message */}
          <Card className="flex flex-col lg:col-span-1">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary font-headline">Message from Director</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
              {directorImage &&
                <Image src={directorImage.imageUrl} alt={directorImage.description} width={100} height={100} className="rounded-full mb-4 border-2 border-background shadow-md" />
              }
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful...
              </p>
                 <Button asChild variant="link">
                    <Link href="/about/director-message">Read More</Link>
                </Button>
            </CardContent>
          </Card>

          {/* Principal's Message */}
          <Card className="flex flex-col lg:col-span-1">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary font-headline">Message from Principal</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                {principalImage &&
                    <Image src={principalImage.imageUrl} alt={principalImage.description} width={100} height={100} className="rounded-full mb-4 border-2 border-background shadow-md" />
                }
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
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

    