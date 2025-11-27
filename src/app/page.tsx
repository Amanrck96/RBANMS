
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { AnnouncementsSection } from '@/components/sections/announcements-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { AwardsAndEvents } from '@/components/sections/awards-and-events';

import { AdditionalImagesCarousel } from '@/components/sections/additional-images-carousel';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow text-blue-900">
        {/* Static hero image from gallery replacing carousel */}
        {/* Removed hero placeholder to eliminate blank space */}
        {/* Additional carousel showcasing three images */}
        <div className="">
          <AdditionalImagesCarousel intervalMs={3500} />
        </div>

        <AnnouncementsSection />
        <WhyChooseUsSection />
        <AwardsAndEvents />
      </main>
      <SiteFooter />
    </div>
  );
}


