import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { DynamicSection } from '@/components/dynamic-section';

export default function AboutIndexPage() {
  const links = [
    { label: 'History', href: '/about/history' },
    { label: 'Founder', href: '/about/founder' },
    { label: "Founder's Vision", href: '/about/founders-vision' },
    { label: 'Director Message', href: '/about/director-message' },
    { label: 'Principal Message', href: '/about/principal-message' },
    { label: 'Vision', href: '/about/vision' },
    { label: 'Mission', href: '/about/mission' },
    { label: 'Core Values', href: '/about/core-values' },
    { label: 'Board Members', href: '/about/board-members' },
    { label: 'Awards', href: '/about/awards' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Introduction Section */}
      <DynamicSection
        pageId="about-intro"
        render={(data) => {
          const content = data?.content || `
            <p class="mb-4">RBANM’s First Grade College was established by RBANM’s Educational Charities in the year 1983 to cater to the educational needs of students in the city of Bangalore. It is a premier Institution dedicated to fostering academic excellence and holistic development in all students.</p>
            <p class="mb-4">This is one of the many institutions established under the umbrella of the RBANM’s Educational Charities. The college is co-educational and is known to support meritorious students, irrespective of their socio-economic background. It is affiliated to Bangalore City University while being managed by the Educational Charities Trust.</p>
            <p>The college has been accredited by NAAC and is recognised under Section 2(f) and 12(b) of the UGC Act, 1956.</p>
          `;
          return (
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Logo */}
              <div className="shrink-0">
                <div className="relative w-[180px] h-[180px] overflow-hidden">
                  <Image
                    src="/images/migrated/logo.png"
                    alt="RBANM Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h1 className="text-3xl font-bold text-blue-900 mb-6 font-headline">About RBANM's First Grade College</h1>
                <div className="prose prose-lg text-justify text-blue-900 max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          );
        }}
      />

      {/* Navigation Links */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-headline">Explore More</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block h-full">
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-transparent hover:border-l-[#800000]">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-semibold text-primary">{l.label}</span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
