import { notFound } from 'next/navigation';
import { events } from '@/lib/events-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { DynamicSection } from '@/components/dynamic-section';

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const event = events.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/events">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </Link>
      </Button>

      <DynamicSection
        pageId={`event-${event.slug}`}
        defaultTitle={event.title}
        defaultContent={
          <div className="max-w-4xl bg-card rounded-lg border p-8 shadow-sm">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center bg-muted/50 px-3 py-1 rounded-md">
                <span className="text-xl font-bold text-primary mr-2">{event.date.day}</span>
                <span className="font-medium">{event.date.month} {event.date.year}</span>
              </div>
              {event.tag && (
                <Badge variant="secondary" className="text-sm font-normal px-3 py-1">{event.tag}</Badge>
              )}
            </div>
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg leading-relaxed text-card-foreground">
                {event.description}
              </p>
            </div>
            
            {event.images && event.images.length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-2xl font-bold mb-6 text-primary font-headline">Event Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.images.map((imagePath, index) => (
                    <div key={index} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
                      <Image 
                        src={imagePath} 
                        alt={`${event.title} gallery photo ${index + 1}`} 
                        fill 
                        className="object-cover"
                        unoptimized={process.env.NODE_ENV === 'development'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}
