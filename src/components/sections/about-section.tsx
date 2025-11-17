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
             <Image
                src="https://rbanmsfgc.ac.in/images/gallery/sahana.jpeg"
                alt="Director Dr Sahana Das"
                fill
                className="object-cover"
                data-ai-hint="professional headshot"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">Director's Message</h2>
             <div className="space-y-2">
                <h3 className="font-bold text-xl">Dr. Sahana Das</h3>
                <p className="text-sm text-muted-foreground">Director, PH D</p>
             </div>
            <p className="text-muted-foreground leading-relaxed">
              If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and downgrade the site for its lack of helpful content for the reader. However, when you send sample layouts filled with fun lorem ipsum to your customers, they will focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum generators do not spew a random bank of words and paragraphs.
            </p>
            
            <Button size="lg">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
