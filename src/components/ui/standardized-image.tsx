"use client"

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type StandardizedImageProps = Omit<ImageProps, "fill" | "width" | "height"> & {
  aspect?: "square" | "rect"; // rect = 16/9
  containerClassName?: string;
  minHeightPx?: number;
  maxHeightPx?: number;
  quality?: number;
};

export function StandardizedImage({
  src,
  alt,
  aspect = "rect",
  className,
  containerClassName,
  minHeightPx = 160,
  maxHeightPx,
  quality = 85,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: StandardizedImageProps) {
  const aspectClass = aspect === "square" ? "aspect-square" : "aspect-[16/9]";
  const safeAlt = alt && alt.trim().length > 0 ? alt : "RBANMS gallery image";

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-lg", aspectClass, containerClassName)}
      style={{ minHeight: minHeightPx, maxHeight: maxHeightPx }}
    >
      <Image
        src={src}
        alt={safeAlt}
        fill
        className={cn("object-cover", className)}
        quality={quality}
        priority={priority}
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
        {...props}
      />
    </div>
  );
}

export default StandardizedImage;

