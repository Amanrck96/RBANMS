'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10 space-y-8">
          <DynamicSection
            pageId="about-history"
            defaultTitle="History of the College"
            onlyContent
          />
        </CardContent>
      </Card>
    </div>
  );
}