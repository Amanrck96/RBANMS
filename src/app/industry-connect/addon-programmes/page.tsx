'use client';

import { DynamicSection } from '@/components/dynamic-section';

export default function AddonProgrammesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="industry-addon"
        defaultTitle="Add-on Programmes & Certificate Courses"
        defaultContent="<p>We offer a range of value-added courses in collaboration with industry partners to bridge the skill gap and enhance employability.</p>"
      />
    </div>
  );
}
