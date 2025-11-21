
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { getGalleryImages } from '@/lib/placeholder-images';

export function AwardsAndEvents() {
    const videoImages = getGalleryImages();

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          <Card className="flex flex-col h-full overflow-hidden lg:col-span-1">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-blue-900 font-headline">Awards & Achievements</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <ScrollArea className="h-72 p-4">
                 <p className="text-muted-foreground">Scrolling list of awards and achievements will be displayed here.</p>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full lg:col-span-1">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-blue-900 font-headline">Videos</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
               <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {videoImages.slice(0, 3).map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video w-full">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover rounded-md"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white text-xs">
                          <p>{image.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full overflow-hidden lg:col-span-1">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-blue-900 font-headline">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
               <ul className="space-y-3">
                 <li className="flex items-start gap-3">
                    <div className="text-center font-bold text-blue-900 w-12 shrink-0">
                        <div className="text-2xl">25</div>
                        <div className="text-sm">DEC</div>
                    </div>
                    <p className="text-muted-foreground">Annual College Fest - Aarohana 2024</p>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="text-center font-bold text-blue-900 w-12 shrink-0">
                        <div className="text-2xl">10</div>
                        <div className="text-sm">JAN</div>
                    </div>
                    <p className="text-muted-foreground">Alumni Meet & Greet</p>
                 </li>
               </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

    
