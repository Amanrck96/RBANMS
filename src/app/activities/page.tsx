import Link from 'next/link';

export default function ActivitiesIndexPage() {
  const links = [
    { label: 'Cultural', href: '/activities/cultural' },
    { label: 'Co-Curricular', href: '/activities/co-curricular' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Activities</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((l) => (
          <li key={l.href} className="border rounded p-4 hover:bg-muted">
            <Link href={l.href} className="text-primary hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
