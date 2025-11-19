"use client"

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const INSTITUTIONAL_TEXT = `Affiliated to Bengaluru City University, Accredited by NAAC with B+, Recognised under 2(f) & 12(B) of UGC Act 1956`;

export function HeaderGalleryCarousel() {
  const galleryImages = useMemo(
    () => PlaceHolderImages.filter((p) => p.id.startsWith('gallery-') && !!p.imageUrl),
    []
  );

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(galleryImages.length);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!api) return;
    setSlideCount(api.scrollSnapList().length);

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    intervalRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [api, paused, selectedIndex]);

  if (!galleryImages.length) {
    return null;
  }

  return (
    <div
      className="relative w-full h-[50vh] md:h-[65vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Homepage gallery slider"
    >
      <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="h-full">
          {galleryImages.map((image, idx) => (
            <CarouselItem key={image.id} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={image.imageUrl!}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  sizes="100vw"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div
                  className="absolute inset-0 flex items-center justify-center px-6 text-center"
                  aria-live="polite"
                >
                  <p className="max-w-4xl text-white text-lg md:text-2xl font-semibold leading-relaxed">
                    {INSTITUTIONAL_TEXT}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-none" />

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2" role="tablist" aria-label="Slide navigation">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selectedIndex === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${selectedIndex === i ? 'bg-white' : 'bg-white/50'} focus:outline-none focus:ring-2 focus:ring-white`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}

