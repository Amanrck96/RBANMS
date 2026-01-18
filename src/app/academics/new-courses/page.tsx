'use client';

import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function NewCoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="academics-new-courses"
            defaultTitle="New Courses"
            defaultContent="<p>Details about newly introduced courses and programs will appear here.</p>"
          />
        </CardContent>
      </Card>
    </div>
  );
}
