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
            render={(data) => (
              <div dangerouslySetInnerHTML={{
                __html: data?.content || `
            <div class="space-y-6">
                <p class="text-lg text-gray-600 mb-6">At RBANMS, we are committed to providing quality education that empowers students to excel in life, staying true to the visionary dream of our founder. Our mission is to:</p>
                <ul class="space-y-4">
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Nurture young minds with knowledge, shaping them into confident and capable individuals.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Deliver a strong foundation in Arts, Science, and Commerce, equipping students with a broad and deep understanding of their fields.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Develop essential life skills like critical thinking, communication, and problem-solving.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Foster leadership qualities and social responsibility, preparing students to make meaningful contributions.</span></li>
                    <li class="flex items-start"><span class="mr-3 text-[#b91c1c] font-bold">✓</span><span class="text-gray-600 text-lg">Incorporate ethical standards, professionalism, and a lifelong curiosity for learning.</span></li>
                </ul>
            </div>
              ` }} />
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}