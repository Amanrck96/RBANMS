
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Handshake } from 'lucide-react';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Empowerment through Knowledge',
    description: 'Education should be accessible to all, equipping individuals with skills and wisdom to lead fulfilling lives.',
  },
  {
    icon: Users,
    title: 'Social Equality',
    description: 'Every person, regardless of background, deserves an equal opportunity to learn and grow.',
  },
  {
    icon: Handshake,
    title: 'Ethical Leadership',
    description: 'Knowledge must be accompanied by a strong moral foundation to create responsible citizens who contribute to society.',
  },
];

export default function FoundersVisionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Founder’s Vision: Education for Empowerment and Social Change</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-8">
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
            <p>
              Sri Dharmarathnakara Rai Bahadur Arcot Narrainsawmy Mudaliar was a man ahead of his time. He believed that education was the greatest tool for social transformation. His vision was not just about building institutions but about creating opportunities for the underprivileged, breaking barriers of caste, class, and gender. His commitment to education for all led him to establish institutions for Hindu boys, Dalit students, and young women, long before society recognized the importance of inclusive education.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">His legacy is built on three pillars:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg text-center">
                  <pillar.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{pillar.title}</h4>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
            <p>
              RBANM’s Educational Charities stands as a testament to his dream—a thriving institution that nurtures young minds, instils values, and paves the way for a just and equitable society. Today, his vision continues to inspire generations, reminding us that education is not just about learning, but about lifting others and shaping a better world.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
