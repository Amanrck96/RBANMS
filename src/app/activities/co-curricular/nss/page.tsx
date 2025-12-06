import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Heart, TreePine, Activity } from 'lucide-react';

export default function NSSPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="outline" className="mb-4 text-primary border-primary">National Service Scheme</Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Not Me, But You</h1>
        <p className="text-xl text-muted-foreground font-light">The Spirit of NSS</p>
      </div>

      {/* Intro */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
          <p>
            The National Service Scheme (NSS) plays a significant role in shaping the overall personality of college students by integrating community service with academic learning. It provides students with opportunities to engage in social outreach activities such as health awareness, environmental protection, disaster management, and literacy programs, thereby nurturing a sense of social responsibility and citizenship.
          </p>
          <p>
            NSS helps students develop leadership qualities, communication skills, teamwork, discipline, and ethical values, while also fostering national integration and human empathy. Through experiential learning, NSS prepares students to become socially committed, responsible, and proactive citizens of the nation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-primary/5 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <span className="font-bold">Social Responsibility</span>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-bold">Human Empathy</span>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center gap-2">
              <TreePine className="h-8 w-8 text-primary" />
              <span className="font-bold">Environmental Protection</span>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-none">
            <CardContent className="p-6 flex flex-col items-center text-center gap-2">
              <Activity className="h-8 w-8 text-primary" />
              <span className="font-bold">Health Awareness</span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activities */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Major Activities</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <p className="mb-4 text-muted-foreground">The National Service Scheme (NSS) conducts a wide range of activities aimed at community development and student personality growth.</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Cleanliness drives",
                "Tree plantation and environmental awareness",
                "Health and hygiene awareness camps",
                "Blood donation and medical check-up camps",
                "Literacy and digital awareness programs",
                "Disaster management and relief work",
                "Traffic awareness",
                "Women empowerment initiatives",
                "Voter awareness campaigns",
                "Celebration of national and social importance days"
              ].map((activity, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  {activity}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
