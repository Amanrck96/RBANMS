import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function AdmissionsCTA() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'admissions-cta');
  
  return (
    <section className="relative py-20 lg:py-32">
      {ctaImage && (
        <Image
          src={ctaImage.imageUrl}
          alt={ctaImage.description}
          fill
          className="object-cover"
          data-ai-hint={ctaImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4">Admissions Open for 2024-2025</h2>
        <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
          Begin your journey towards a successful career. Explore our diverse range of programs and become part of our vibrant academic community.
        </p>
        <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Apply Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
