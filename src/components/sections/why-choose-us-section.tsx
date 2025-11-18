
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const advantages = [
  "Managed by a trusted and universally respected Educational Charities Trust",
  "Located in the heart of Bangalore City",
  "BMTC buses on the Shivajinagar – Jivanahalli route that stops at the college campus",
  "Walking distance from the Trinity and MG Road Metro stations",
  "Affiliated to Bengaluru City University",
  "Learning spaces that are green and environmentally friendly",
  "Dedicated and qualified in-house faculty",
  "Well-equipped classrooms",
  "Two Computer Labs for BCA students",
  "A design studio",
  "Eminent guest faculty from various fields of expertise",
  "Add-on and certificate courses",
  "Training for professional skills",
  "Access to Industry experts",
  "Encouragement and support for sports",
  "Indoor Games room",
  "Gym",
  "Access to world class cricket and Football grounds",
  "Encouragement of NCC related activities",
  "Meaningful engagement with community development through NSS",
  "Support of the Arts",
  "Seminar Hall, AV Room, Auditorium",
];

export function WhyChooseUsSection() {
  const midPoint = Math.ceil(advantages.length / 2);
  const col1 = advantages.slice(0, midPoint);
  const col2 = advantages.slice(midPoint);

  return (
    <section className="py-12 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">The RBANM’s Advantages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <ul className="space-y-4">
            {col1.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <span className="text-muted-foreground">{advantage}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {col2.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                <span className="text-muted-foreground">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

    