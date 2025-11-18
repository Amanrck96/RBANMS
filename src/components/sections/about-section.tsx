
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import Link from 'next/link';

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
             {aboutImage && <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">Welcome to RBANM's First Grade College</h2>
             <div className="space-y-2">
                <p className="font-bold text-lg">Affiliated to Bengaluru City University, Accredited by NAAC with B+, Recognised under 2(f) & 12(B) of UGC Act 1956</p>
             </div>
            <p className="text-muted-foreground leading-relaxed">
              RBANMS FIRST GRADE COLLEGE, is affiliated to Bengaluru City University. It has been accredited by NAAC with a B+ and is recognised under Section 2(f) & 12(B) of the UGC Act, 1956.
            </p>
            <ul className="space-y-2">
                {features.map(feature => (
                    <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-accent mr-2"/>
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
            </ul>
            <Button asChild>
                <Link href="/about/history">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

    