import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { AnnouncementsSection } from '@/components/sections/announcements-section';
import { AboutSection } from '@/components/sections/about-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { AdmissionsCTA } from '@/components/sections/admissions-cta';
import { RecruitersSection } from '@/components/sections/recruiters-section';
import { GallerySection } from '@/components/sections/gallery-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <AnnouncementsSection />
        <AboutSection />
        <WhyChooseUsSection />
        <AdmissionsCTA />
        <RecruitersSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </div>
  );
}
