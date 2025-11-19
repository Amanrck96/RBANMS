"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { getGalleryImages } from "@/lib/placeholder-images"

type AdditionalImagesCarouselProps = {
  intervalMs?: number
  className?: string
}

export function AdditionalImagesCarousel({ intervalMs = 3500, className }: AdditionalImagesCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Pick three additional images distinct from hero
  const slides = useMemo(() => {
    const imgs = getGalleryImages()
    const pickIds = new Set(["gallery-3", "gallery-4", "gallery-6"]) // curated selection
    const chosen = imgs.filter((i) => pickIds.has(i.id)).map((i) => ({ id: i.id, src: i.imageUrl, alt: i.description }))
    // Fallback to first three with URLs if curated set missing
    if (chosen.length < 3) {
      const extra = imgs.filter((i) => !pickIds.has(i.id)).slice(0, 3 - chosen.length)
      return [
        ...chosen,
        ...extra.map((i) => ({ id: i.id, src: i.imageUrl, alt: i.description })),
      ]
    }
    return chosen
  }, [])

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
      aria-label="Additional images"
      className={cn("w-full", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative mx-auto max-w-6xl px-4">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, duration: 20 }}
          className=""
          aria-label="Image carousel"
        >
          <CarouselContent className="">
            {slides.map((slide, idx) => (
              <CarouselItem key={`${slide.id}-${idx}`} className="">
                <div className="relative w-full">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border bg-muted">
                    {/* Non-blocking placeholder background to avoid blank frames */}
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(https://placehold.co/1600x900?text=RBANMS)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.95)",
                      }}
                    />

                    <Image
                      src={slide.src}
                      alt={slide.alt || "RBANMS gallery image"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
                      quality={85}
                      priority={false}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <CarouselPrevious aria-label="Previous image" />
          <CarouselNext aria-label="Next image" />

          {/* Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Slide indicators">
            {slides.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={selectedIndex === i ? "true" : undefined}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  selectedIndex === i ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default AdditionalImagesCarousel
