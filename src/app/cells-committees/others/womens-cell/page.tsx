'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function WomensCellPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="cell-womens"
            defaultTitle="Women Cell"
            defaultContent={
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  The Women Cell at RBNMS College is dedicated to empowering female students and staff by creating a supportive and inclusive campus environment. The cell serves as a platform for women to voice their concerns and aspirations, fostering confidence and leadership skills. We organize seminars, workshops, and awareness programs focusing on gender equity, women's rights, and health. We are committed to ensuring that women feel safe, respected, and valued in all their endeavors on campus and beyond.
                </p>
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
