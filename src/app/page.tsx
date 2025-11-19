
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { HeaderGalleryCarousel } from '@/components/layout/header-gallery-carousel';
import { AnnouncementsSection } from '@/components/sections/announcements-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { AwardsAndEvents } from '@/components/sections/awards-and-events';
import { AboutSection } from '@/components/sections/about-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow text-blue-900">
        <HeaderGalleryCarousel />
        <AboutSection />
        <AnnouncementsSection />
        <WhyChooseUsSection />
        <AwardsAndEvents />
      </main>
      <SiteFooter />
    </div>
  );
}

    
