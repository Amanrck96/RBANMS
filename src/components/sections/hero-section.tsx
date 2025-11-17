import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  {
    id: 'hero-1',
    headline: 'Excellence in Education',
    subheadline: 'Fostering innovation and knowledge for a brighter future.',
    imageHint: 'modern university campus',
  },
  {
    id: 'hero-2',
    headline: 'Vibrant Campus Life',
    subheadline: 'Engage, learn, and grow in a diverse and supportive community.',
    imageHint: 'students studying group',
  },
  {
    id: 'hero-3',
    headline: 'Shape Your Future',
    subheadline: 'Unlock your potential with our world-class programs and faculty.',
    imageHint: 'graduation ceremony',
  },
];

export function HeroSection() {
  const heroImages = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => {
            const image = heroImages.find(img => img.id === slide.id);
            return (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      data-ai-hint={slide.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
                      <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-4 drop-shadow-lg">
                        {slide.headline}
                      </h1>
                      <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto drop-shadow-md">
                        {slide.subheadline}
                      </p>
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-none" />
      </Carousel>
    </section>
  );
}
