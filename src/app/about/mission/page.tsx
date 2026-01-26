'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Target, BookOpen, Wrench, Users, ShieldCheck } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

const missionPoints = [
  {
    icon: Target,
    text: 'Nurture young minds with knowledge, shaping them into confident and capable individuals.',
  },
  {
    icon: BookOpen,
    text: 'Deliver a strong foundation in Arts, Science, and Commerce, equipping students with a broad and deep understanding of their fields.',
  },
  {
    icon: Wrench,
    text: 'Develop essential life skills like critical thinking, communication, and problem-solving, that help students adapt and thrive in an ever-changing world.',
  },
  {
    icon: Users,
    text: 'Foster leadership qualities and social responsibility, preparing students to make meaningful contributions to their professions and society.',
  },
  {
    icon: ShieldCheck,
    text: 'Incorporate ethical standards, professionalism, and a lifelong curiosity for learning across arts, sciences, and humanities.',
  },
];

export default function MissionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="about-mission"
            defaultTitle="Our Mission"
            defaultContent={
              <>
                <p className="text-lg text-muted-foreground mb-6">
                  At RBANMS, we are committed to providing quality education that empowers students to excel in life, staying true to the visionary dream of our founder. Our mission is to:
                </p>
                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4">
                        <point.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="flex-1 text-muted-foreground text-lg">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}