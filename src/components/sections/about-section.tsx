
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">The Director’s Message</h2>
             <div className="space-y-2">
                <h3 className="font-bold text-xl">Dr. Sahana Das</h3>
             </div>
            <p className="text-muted-foreground leading-relaxed">
              Education must go beyond the syllabus and help prepare students for life so that their professional success is balanced with their personal, emotional, and spiritual wellbeing. Our student-centric approach keeps the campus energetic and purposeful all through the academic year and offer learnings that will always stay as anchor in the ebb and flow of life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What is education? What is the value of coming to college? Why bother with a degree? At RBANM’s First Grade College we ask these very important questions and try to find answers from the point of view of the student who has decided to trust us as a life guide. We have a three-pronged approach: address exams, address employability, and address personality development. In the classroom and outside, through theory and in practice, it is this philosophy of education that fuels all that we do.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This holistic approach to education is in keeping with the vision of that extraordinary man who founded the RBANM’s Educational Charities in 1873: Rai Bahadur Arcot Narrainswamy Mudaliar. Even today, his ideals of equity, equality, justice, inclusion, and respect for diversity permeate our teaching philosophy. Ours is a college that is a temple of learning for all, where no student is ignored or left behind, and where education is seen as a precious gift that is life changing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
