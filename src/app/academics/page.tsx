'use client';

import Link from 'next/link';
import { DynamicSection } from '@/components/dynamic-section';

export default function AcademicsIndexPage() {
  const links = [
    { label: 'Academic Structure', href: '/academics/academic-structure' },
    { label: 'Courses Offered', href: '/academics/courses-offered' },
    { label: 'New Courses', href: '/academics/new-courses' },
    { label: 'Add-on Courses', href: '/academics/add-on-courses' },
    { label: 'Philosophy of Teaching', href: '/academics/philosophy-of-teaching' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <DynamicSection
        pageId="academics-index"
        defaultTitle="Academics"
        defaultContent="<p className='text-lg mb-8'>Explore our academic structure, courses, and educational philosophy.</p>"
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {links.map((l) => (
          <li key={l.href} className="border rounded p-4 hover:bg-muted transition-colors">
            <Link href={l.href} className="text-primary hover:underline font-semibold block h-full flex items-center">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
