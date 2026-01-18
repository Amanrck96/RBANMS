'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function AwardsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="about-awards"
            defaultTitle="Awards & Recognition"
            defaultContent="<p>Information about awards and recognition received by the college and its students.</p>"
          />
        </CardContent>
      </Card>
    </div>
  );
}
