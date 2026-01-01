"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Slide = {
  src: string;
  alt: string;
  caption?: string;
};

const slides: Slide[] = [
  { src: 'https://images.shiksha.com/mediadata/images/1429163955phpbWVwvu.jpeg', alt: 'Campus photo', caption: 'Campus Life' },
  { src: 'https://scontent.fccu9-2.fna.fbcdn.net/v/t1.6435-9/41508772_10215738208944684_2838609422832369664_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2285d6&_nc_ohc=0qsWPuHkI70Q7kNvwFN7Ted&_nc_oc=AdmdaGIn7nwruAEyXpAHvSCGNXZ0pwh5KjxuLUjGBY89tzOWwBP-kYfBIoPtt3D8icqbRwJr-laHQaW2gfx0XlWU&_nc_zt=23&_nc_ht=scontent.fccu9-2.fna&_nc_gid=NmLH5fT1pSYvraaVv8gKgA&oh=00_AfjbIJqmTw-t3RZkChb-AxexS6h3Yf2D7H2KzbQfyAIeWg&oe=69426B5E', alt: 'Event highlight', caption: 'Events' },
  { src: 'https://images.shiksha.com/mediadata/images/1429182153phpSYuYdw.jpeg', alt: 'Important highlight', caption: 'Highlights' },
];

export function CarouselHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative w-full h-[260px] md:h-[420px] overflow-hidden rounded-lg shadow-md">
          {slides.map((s, i) => (
            <div
              key={i}
              className={cn(
                'absolute inset-0 transition-opacity duration-700',
                i === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="100vw" />
              {s.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-3 text-sm md:text-base">
                  {s.caption}
                </div>
              )}
            </div>
          ))}
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-2 w-2 rounded-full border border-white/60',
                  i === index ? 'bg-white' : 'bg-white/30'
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

