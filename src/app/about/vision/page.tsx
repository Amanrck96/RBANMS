'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, ShieldCheck, Handshake } from 'lucide-react';
import { DynamicSection } from '@/components/dynamic-section';

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card>
        <CardContent className="pt-10">
          <DynamicSection
            pageId="about-vision"
            defaultTitle="Our Vision"
            onlyContent
          />
        </CardContent>
      </Card>
    </div>
  );
}
