import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-college');

  const features = [
    "State-of-the-art Infrastructure",
    "Experienced and Dedicated Faculty",
    "Vibrant Campus Life",
    "Strong Industry Connections",
  ];

  return (
    <section className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">About Our College</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
