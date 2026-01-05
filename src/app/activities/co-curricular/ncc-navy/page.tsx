'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function NCCNavyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="cell-ncc-navy"
            defaultTitle="NCC (Navy)"
            defaultContent={
              <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
                <h2 className="text-2xl font-semibold text-muted-foreground">Coming Soon</h2>
                <p className="mt-2 text-foreground/80">This page is under construction. Please check back later!</p>
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
