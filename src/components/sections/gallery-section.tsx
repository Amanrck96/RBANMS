import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).slice(0, 8);

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">Campus Gallery</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A glimpse into life at RBANM's First Grade College.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
             <div key={image.id} className="relative aspect-square group overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={image.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    