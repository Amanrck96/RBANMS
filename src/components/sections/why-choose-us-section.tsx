
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Building, Bus, Train, Award, Leaf, GraduationCap, Laptop, Briefcase, Trophy, Zap, HeartHandshake, Drama, Paintbrush, Mic, Handshake, Users } from 'lucide-react';

const features = [
  { icon: Shield, title: "Trusted Management", description: "Managed by a trusted and universally respected Educational Charities Trust" },
  { icon: Building, title: "Prime Location", description: "Located in the heart of Bangalore City" },
  { icon: Bus, title: "Bus Access", description: "BMTC buses on the Shivajinagar – Jivanahalli route that stops at the college campus" },
  { icon: Train, title: "Metro Access", description: "Walking distance from the Trinity and MG Road Metro stations" },
  { icon: Award, title: "University Affiliation", description: "Affiliated to Bengaluru City University" },
  { icon: Leaf, title: "Green Campus", description: "Learning spaces that are green and environmentally friendly" },
  { icon: GraduationCap, title: "Dedicated Faculty", description: "Dedicated and qualified in-house faculty" },
  { icon: Laptop, title: "Well-equipped classrooms", description: "Bright classrooms, equipped with LCD projectors" },
  { icon: Users, title: "Eminent guest faculty", description: "Eminent guest faculty from various fields of expertise" },
  { icon: Zap, title: "Skill Development", description: "Add-on and certificate courses and training for professional skills" },
  { icon: Handshake, title: "Industry Access", description: "Access to Industry experts" },
  { icon: Briefcase, title: "Internships", description: "Access to industry experts and internship opportunities for hands-on experience." },
  { icon: Trophy, title: "Sports Encouragement", description: "Encouragement and support for sports, Indoor Games room, Gym, and access to world class cricket and Football grounds" },
  { icon: Shield, title: "Active NCC Programs", description: "Encouragement of NCC related activities" },
  { icon: HeartHandshake, title: "Community Engagement", description: "Meaningful engagement with community development through NSS" },
  { icon: Drama, title: "Support of the Arts", description: "Support of the Arts" },
  { icon: Mic, title: "Auditorium & Halls", description: "Seminar Hall, AV Room, Auditorium" },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary font-headline">The RBANM's Advantage</h2>
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
