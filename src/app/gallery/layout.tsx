
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-grow bg-background">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
