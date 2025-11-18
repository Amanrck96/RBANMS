
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
    <section className="relative h-[60vh] md:h-[70vh] w-full">
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

    