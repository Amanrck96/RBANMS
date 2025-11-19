import Link from 'next/link';

export default function AboutIndexPage() {
  const links = [
    { label: 'Founder', href: '/about/founder' },
    { label: "Founder's Vision", href: '/about/founders-vision' },
    { label: 'History', href: '/about/history' },
    { label: 'Director Message', href: '/about/director-message' },
    { label: 'Principal Message', href: '/about/principal-message' },
    { label: 'Vision', href: '/about/vision' },
    { label: 'Mission', href: '/about/mission' },
    { label: 'Core Values', href: '/about/core-values' },
    { label: 'Board Members', href: '/about/board-members' },
    { label: 'Awards', href: '/about/awards' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
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
