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
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notifications */}
          <Card className="overflow-hidden">
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
          <Card className="flex flex-col">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary font-headline">Principal's Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4 border-4 border-background shadow-md">
                {principalImage && <AvatarImage src='https://rbanmsfgc.ac.in/images/gallery/WhatsApp%20Image%202025-11-04%20at%203.37.04%20PM.jpeg' alt='Dr Shanti Iyer' data-ai-hint='professional headshot' />}
                <AvatarFallback>SI</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-xl">Dr. Shanti Iyer</h3>
              <p className="text-sm text-muted-foreground mb-4">Ph.D.</p>
              <div className="relative text-muted-foreground italic flex-grow">
                <Quote className="h-8 w-8 text-primary/10 absolute -top-2 -left-4" fill="currentColor" />
                <p>
                  If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and downgrade the site for its lack of helpful content for the reader. However, when you send sample layouts filled with fun lorem ipsum to your customers, they will focus on the look and feel of the page instead of digging into and arguing about the content.
                </p>
              </div>
              <Button variant="link" className="mt-4">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
