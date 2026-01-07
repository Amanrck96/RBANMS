"use client"
import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type AdditionalImagesCarouselProps = {
  intervalMs?: number
  className?: string
}

export function AdditionalImagesCarousel({ intervalMs = 3500, className }: AdditionalImagesCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Dynamic Content State
  const [dynamicHero, setDynamicHero] = useState<{ content?: string; imageUrl?: string } | null>(null);

  // Fetch dynamic hero content
  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await fetch('/api/site-content?section=page-home-hero');
        const json = await res.json();
        if (json.data && (json.data.imageUrl || json.data.content)) {
          setDynamicHero(json.data);
        }
      } catch (e) {
        console.error("Failed to fetch dynamic hero:", e);
      }
    }
    fetchHero();
  }, []);

  // Use the new hero images
  const slides = useMemo(() => {
    return [
      { id: "hero-2", src: "/images/hero/hero-2.jpg", alt: "RBANMS Campus View 2" },
      { id: "hero-3", src: "/images/hero/hero-3.jpg", alt: "RBANMS Campus View 3" },
      { id: "hero-4", src: "/images/hero/hero-4.jpg", alt: "RBANMS Campus View 4" },
      { id: "hero-5", src: "/images/hero/hero-5.jpg", alt: "RBANMS Campus View 5" },
      { id: "home-carousel-5", src: "/images/home-carousel-5.jpg", alt: "RBANMS Campus View 6" },
    ]
  }, [])

  // If dynamic hero image is present, use it as the FIRST slide or override
  // For this implementation, if dynamic image exists, we'll prepend it
  const effectiveSlides = useMemo(() => {
    if (dynamicHero?.imageUrl) {
      return [{ id: 'dynamic-hero', src: dynamicHero.imageUrl, alt: 'Featured Hero' }, ...slides];
    }
    return slides;
  }, [dynamicHero, slides]);


  // Track selected index for indicators
  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  // Auto-play handling
  useEffect(() => {
    if (!api) return
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        api.scrollNext()
      }, intervalMs)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [api, intervalMs, isPaused])

  return (
    <section
      aria-label="Hero Carousel"
      className={cn("w-full relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="w-full">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, duration: 20 }}
          className="w-full"
          aria-label="Image carousel"
        >
          <CarouselContent className="-ml-0">
            {effectiveSlides.map((slide, idx) => (
              <CarouselItem key={`${slide.id}-${idx}`} className="pl-0">
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls - positioned absolutely */}
          <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white" aria-label="Previous image" />
          <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white" aria-label="Next image" />

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10" aria-label="Slide indicators">
            {effectiveSlides.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={selectedIndex === i ? "true" : undefined}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors shadow-sm",
                  selectedIndex === i ? "bg-white" : "bg-white/50 hover:bg-white/70"
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </Carousel>

        {/* Dynamic Overlay Text from CMS */}
        {dynamicHero?.content && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div
              className="bg-black/40 backdrop-blur-sm p-6 md:p-10 rounded-xl text-white max-w-4xl text-center prose prose-invert prose-lg md:prose-xl pointer-events-auto mx-4"
              dangerouslySetInnerHTML={{ __html: dynamicHero.content }}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default AdditionalImagesCarousel
