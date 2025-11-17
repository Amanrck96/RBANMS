import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Building, Users, Award, Briefcase, Leaf, Zap, HeartHandshake, Shield, Trophy, Drama, Paintbrush } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Trusted Management",
    description: "Managed by a trusted and universally respected Educational Charities Trust."
  },
  {
    icon: Building,
    title: "Prime Location",
    description: "Located in the heart of Bangalore City, offering convenient access to key urban resources."
  },
  {
    icon: Award,
    title: "University Affiliation",
    description: "Affiliated to Bengaluru City University, ensuring academic credibility and recognition."
  },
  {
    icon: Leaf,
    title: "Green Campus",
    description: "Learning spaces that are green, peaceful, and environmentally friendly to enhance focus."
  },
  {
    icon: GraduationCap,
    title: "Dedicated Faculty",
    description: "Dedicated and qualified in-house faculty providing continuous academic guidance."
  },
  {
    icon: Users,
    title: "Expert Guest Lecturers",
    description: "Eminent guest faculty from various professional fields to enrich student learning."
  },
  {
    icon: Zap,
    title: "Skill Development",
    description: "Add-on and certificate courses to improve employability and practical knowledge."
  },
  {
    icon: Briefcase,
    title: "Industry Access",
    description: "Access to industry experts and internship opportunities for hands-on experience."
  },
  {
    icon: Trophy,
    title: "Sports Encouragement",
    description: "Encouragement and support for sports and physical development."
  },
  {
    icon: Shield,
    title: "Active NCC Programs",
    description: "Active NCC programs that promote discipline, leadership, and national service."
  },
  {
    icon: HeartHandshake,
    title: "Community Engagement",
    description: "Meaningful engagement with community development through NSS and outreach work."
  },
  {
    icon: Drama,
    title: "Arts and Culture",
    description: "Strong support for the arts, culture, and creativity in student life."
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">The RBANM's Advantages</h2>
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
