'use client';

import { DynamicSection } from '@/components/dynamic-section';

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <DynamicSection
        pageId="gallery"
        defaultTitle="Gallery"
        defaultContent={`
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <!-- Fallback content if fetch fails initially -->
                <p>Loading gallery...</p>
            </div>
          `}
      />
    </div>
  );
}
