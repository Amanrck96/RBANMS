import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <section className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">Campus Highlights</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Experience the creativity, talent, and energy of our students.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(1, 2).map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-md col-span-1 md:col-span-2">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              </div>
            </div>
          ))}
          {galleryImages.slice(2).map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
