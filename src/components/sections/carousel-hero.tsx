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
  { src: 'https://rbanmsfgc.ac.in/images/campus1.jpg', alt: 'Campus photo', caption: 'Campus Life' },
  { src: 'https://rbanmsfgc.ac.in/images/event1.jpg', alt: 'Event highlight', caption: 'Events' },
  { src: 'https://rbanmsfgc.ac.in/images/highlight1.jpg', alt: 'Important highlight', caption: 'Highlights' },
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

