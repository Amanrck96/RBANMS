'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function CulturalCommitteePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="cell-cultural"
            defaultTitle="Cultural Committee"
            defaultContent={
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  The Cultural Committee brings the campus to life by celebrating creativity, talent, and diversity. We organize annual fests, inter-class competitions, and celebrations of national and regional festivals. The committee provides a platform for students to showcase their skills in music, dance, theater, and fine arts. By balancing academics with cultural expression, we ensure the holistic development of our students, making their college experience vibrant and memorable.
                </p>
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
