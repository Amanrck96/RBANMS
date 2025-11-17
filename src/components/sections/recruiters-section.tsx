import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function RecruitersSection() {
  const recruiterLogos = PlaceHolderImages.filter(p => p.id.startsWith('recruiter-'));

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">Our Recruiters</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Leading companies trust our students for their skills and dedication.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {recruiterLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="p-4 bg-background rounded-lg border flex items-center justify-center h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="relative w-full h-12">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      fill
                      className="object-contain"
                      data-ai-hint={logo.imageHint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
