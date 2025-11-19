
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem, BookUser, Wrench, Briefcase, Scale, UserCheck } from 'lucide-react';

const coreValues = [
  { icon: Gem, title: "Value-Based Education", description: "Cultivating knowledge with integrity and moral responsibility." },
  { icon: BookUser, title: "Access to Education", description: "Ensuring learning opportunities for all, regardless of background." },
  { icon: Wrench, title: "Skill Development", description: "Equipping students with the abilities needed for personal and professional success." },
  { icon: UserCheck, title: "Women’s Empowerment", description: "Encouraging education and opportunities for women to lead and thrive." },
  { icon: Briefcase, title: "Employability", description: "Preparing students for dynamic careers through practical learning and experience." },
  { icon: Scale, title: "Social Justice", description: "Promoting equality, fairness, and inclusivity in education and society." }
];

export default function CoreValuesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary font-headline">Core Values</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg shadow-sm">
                <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
                  <value.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
