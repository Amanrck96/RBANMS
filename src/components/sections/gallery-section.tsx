import Image from 'next/image';
import Link from 'next/link';
import { getGalleryImages } from '@/lib/placeholder-images';

export function GallerySection() {
  const galleryItems = getGalleryImages();

  return (
    <section aria-label="Gallery" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <Link href="/events" className="text-primary hover:underline underline-offset-4 text-sm">
          View events
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <figure key={item.id} className="rounded-lg overflow-hidden border bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <figcaption className="p-3 text-sm text-muted-foreground">
              {item.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
