'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Target, BookOpen, Wrench, Users, ShieldCheck } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

export default function MissionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="about-mission"
            defaultTitle="Our Mission"
            onlyContent
          />
        </CardContent>
      </Card>
    </div>
  );
}