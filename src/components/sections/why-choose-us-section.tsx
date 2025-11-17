import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Building, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Building,
    title: "Modern Campus",
    description: "State-of-the-art facilities and a sprawling green campus provide the perfect environment for learning."
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from distinguished scholars and industry experts who are dedicated to your success."
  },
  {
    icon: Users,
    title: "Diverse Community",
    description: "Join a vibrant and inclusive community of students from all backgrounds and cultures."
  },
  {
    icon: Award,
    title: "Career Placement",
    description: "Our strong industry ties and dedicated placement cell ensure excellent career opportunities."
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">Why Choose Academic Mirror?</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We provide an educational experience that goes beyond the classroom.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:border-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
