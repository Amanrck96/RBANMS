'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';
import { Badge } from '@/components/ui/badge';
import { events } from '@/lib/events-data';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="events-header"
        defaultTitle="Events"
      />
      
      <div className="mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {events.map((event, index) => (
                <Card key={index} className="flex flex-col h-full overflow-hidden">
                  <CardHeader className="flex flex-row items-start bg-muted/50 p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{event.date.day}</div>
                        <div className="text-sm font-medium text-muted-foreground">{event.date.month}</div>
                        <div className="text-xs text-muted-foreground">{event.date.year}</div>
                      </div>
                    </div>
                    <div className="flex-grow pl-4">
                      <CardTitle className="text-lg font-bold mb-1">{event.title}</CardTitle>
                      {event.tag && (
                        <Badge variant="secondary" className="mt-1 font-normal text-xs">{event.tag}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{event.description}</p>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/events/${event.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </div>
  );
}
