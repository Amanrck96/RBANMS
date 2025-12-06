import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Leaf, Activity, GraduationCap } from 'lucide-react';

export default function NSSPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              NSS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Not Me, <span className="text-yellow-400">But You</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              The Spirit of National Service Scheme (NSS)
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Shaping Personality Through Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              The National Service Scheme (NSS) plays a significant role in shaping the overall personality of college students by integrating community service with academic learning. It provides students with opportunities to engage in social outreach activities such as health awareness, environmental protection, disaster management, and literacy programs, thereby nurturing a sense of social responsibility and citizenship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              NSS helps students develop leadership qualities, communication skills, teamwork, discipline, and ethical values, while also fostering national integration and human empathy. Through experiential learning, NSS prepares students to become socially committed, responsible, and proactive citizens of the nation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Users className="h-8 w-8 text-blue-600" />
                <span className="font-semibold text-blue-900">Community Service</span>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="font-semibold text-green-900">Environment</span>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Heart className="h-8 w-8 text-red-600" />
                <span className="font-semibold text-red-900">Empathy</span>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 border-none">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <GraduationCap className="h-8 w-8 text-yellow-600" />
                <span className="font-semibold text-yellow-900">Leadership</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-slate-50 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Activities & Initiatives</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  The National Service Scheme (NSS) conducts a wide range of activities aimed at community development and student personality growth. Major activities include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Cleanliness drives",
                    "Tree plantation and environmental awareness programs",
                    "Health and hygiene awareness camps",
                    "Blood donation and medical check-up camps",
                    "Literacy and digital awareness programs",
                    "Disaster management and relief work",
                    "Traffic awareness",
                    "Women empowerment initiatives",
                    "Voter awareness campaigns",
                    "Celebration of national and social importance days"
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground">
                  These activities promote social responsibility, leadership, discipline, and a spirit of service among students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
