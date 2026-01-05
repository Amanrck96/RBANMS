'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function EcoClubPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="cell-eco"
            defaultTitle="Eco Club"
            defaultContent={
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  The Eco Club at RBANMS First Grade College is a passionate group of students and faculty committed to environmental conservation and sustainability. Our mission is to raise awareness about ecological issues and inspire action within the campus and the local community. Through initiatives like tree planting drives, waste management workshops, and environmental awareness campaigns, we strive to make a positive impact on our planet. Joining the Eco Club is an opportunity to contribute to a greener future and learn valuable skills in environmental stewardship.
                </p>
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
