
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const advantages = [
  "Managed by a trusted and highly respected Educational Charities Trust",
  "Located in the heart of Bangalore City, accessible with Metro, BMTC buses, and private vehicles",
  "Learning spaces that are green and environmentally friendly",
  "Well-equipped classrooms, labs, and AV rooms",
  "Dedicated and qualified in-house faculty",
  "Eminent guest faculty from various fields of expertise",
  "Add-on and certificate courses to enhance professional skills",
  "Encouragement and support for Sports, with in-house facilities and ample space",
  "Access to professional training centres for cricket and football",
  "Encouragement of NCC related activities",
  "Meaningful engagement with community development through NSS",
  "Support of the Arts through workshops, and access to several performance spaces",
];

export function WhyChooseUsSection() {
  const midPoint = Math.ceil(advantages.length / 2);
  const col1 = advantages.slice(0, midPoint);
  const col2 = advantages.slice(midPoint);

  return (
    <section className="py-12 lg:pt-8 lg:pb-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">The RBANM's Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <ul className="space-y-4">
            {col1.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span className="text-muted-foreground font-bold">{advantage}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {col2.map((advantage, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                <span className="text-muted-foreground font-bold">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

