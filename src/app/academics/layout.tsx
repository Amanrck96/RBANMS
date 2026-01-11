
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';
import { SidebarRegion } from '@/components/layout/sidebar-region';

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow bg-background">
        <SidebarRegion>
          {children}
        </SidebarRegion>
      </main>
      <SiteFooter />
    </div>
  );
}
