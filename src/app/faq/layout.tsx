import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/header';
import { SiteFooter } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description: "Find answers to frequently asked questions about admissions, fees, academics, campus life, placements, and general guidelines at RBANMS First Grade College.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow bg-background">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
