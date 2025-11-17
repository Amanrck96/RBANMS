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
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notifications */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-primary font-headline">Notifications / Updates</CardTitle>
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
              <CardTitle className="text-primary font-headline">From the Principal's Desk</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4 border-4 border-background shadow-md">
                {principalImage && <AvatarImage src={principalImage.imageUrl} alt={principalImage.description} data-ai-hint={principalImage.imageHint} />}
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-xl">Dr. Jane Doe</h3>
              <p className="text-sm text-muted-foreground mb-4">Principal</p>
              <div className="relative text-muted-foreground italic flex-grow">
                <Quote className="h-8 w-8 text-primary/10 absolute -top-2 -left-4" fill="currentColor" />
                <p>
                  Welcome to Academic Mirror, where we nurture minds and shape futures. Our mission is to provide an environment of academic excellence and personal growth...
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
