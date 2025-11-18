
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

const notifications = [
  { id: 1, text: 'First Year Orientation Programme Schedule', new: true },
  { id: 2, text: 'Internal Assessment Timetable for V Sem', new: true },
  { id: 3, text: 'Library E-Resources Workshop', new: false },
  { id: 4, text: 'Annual Sports Meet Registration Open', new: false },
  { id: 5, text: 'Guest Lecture on AI and Machine Learning', new: true },
  { id: 6, text: 'Updated Bus Routes for 2024-25', new: false },
  { id: 7, text: 'Scholarship Application Deadline Extended', new: false },
];

export function AnnouncementsSection() {
  const principalImage = PlaceHolderImages.find(p => p.id === 'principal-photo');

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications */}
          <Card className="overflow-hidden lg:col-span-1">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary font-headline">Latest News & Updates</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-96">
                <ul className="divide-y">
                  {notifications.map(item => (
                    <li key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <Link href="#" className="flex items-center justify-between gap-4">
                        <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                        {item.new && <Badge variant="destructive" className="bg-accent text-accent-foreground shrink-0">NEW</Badge>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Principal's Message */}
          <Card className="flex flex-col lg:col-span-2">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary font-headline">Principal's Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4 border-4 border-background shadow-md">
                {principalImage && <AvatarImage src='https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg' alt='Dr Shanti Iyer' data-ai-hint='professional headshot' />}
                <AvatarFallback>SI</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-xl">Dr. Shanti Iyer</h3>
              <p className="text-sm text-muted-foreground mb-4">Ph.D.</p>
              <div className="relative text-muted-foreground italic flex-grow text-left space-y-4">
                <Quote className="h-8 w-8 text-primary/10 absolute -top-2 -left-4" fill="currentColor" />
                <p>
                  The purpose of higher education is not merely the transmission of knowledge, but the transformation of individuals. The key objective of education at RBANM’s First Grade College is to create efficient academicians, innovative entrepreneurs, true researchers and honest, dedicated and dynamic leaders who contribute to the development of society and nation at large.
                </p>
                <p>
                  Guided by values of faith, integrity and dignity, we at RBANM’s FGC, are committed to providing holistic education by maintaining high academic standards, discipline and professional ethics.
                </p>
                <p>
                  In the process of guiding students through the prescribed syllabii and the examination system, we also mould their personality by instilling in them values, skills and the right attitude towards life.
                </p>
                 <p>
                  In conclusion, I can say that, joining RBANM’s FGC will be a decision a student will never regret, for he/ she can then have secure future and a successful life. Having the opportunity to ‘Enrich, Excel and Evolve’, this is a place where students are taught to reach the sky and beyond.
                </p>
                 <Button asChild className="mt-4">
                    <Link href="/about/principal-message">Read More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
