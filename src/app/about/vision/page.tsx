
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, ShieldCheck, Handshake } from 'lucide-react';

const principles = [
  {
    icon: Scale,
    title: 'Equity',
    description: 'Ensuring that every student, regardless of their background, has access to the same opportunities, resources, and support needed to succeed. Education at RBANMS is tailored to meet the diverse needs of learners, promoting fairness in learning experiences.',
  },
  {
    icon: ShieldCheck,
    title: 'Justice',
    description: 'Upholding fairness and integrity in education and society. RBANMS strives to create a learning environment where students are encouraged to act with honesty, respect, and accountability, fostering a sense of responsibility towards themselves and others.',
  },
  {
    icon: Handshake,
    title: 'Equality',
    description: 'Providing an inclusive education system where every individual, irrespective of caste, gender, or socio-economic background, is treated with dignity and given the same chances to grow, learn, and achieve their fullest potential.',
  },
];

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Vision</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-lg font-bold text-center text-muted-foreground mb-10">The vision of RBANMS is built upon three fundamental principles:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <principle.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{principle.title}</h3>
                <p className="text-muted-foreground text-left">{principle.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    
