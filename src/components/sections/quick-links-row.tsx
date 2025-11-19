import Link from 'next/link';

export function QuickLinksRow() {
  const links = [
    { name: 'Industry Connect', href: '/industry-connect/industry-visits' },
    { name: 'RTI', href: '/rti' },
    { name: 'Governance', href: '/governance' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
    { name: 'Statutory Cells', href: '/statutory-cells' },
    { name: 'Alumni', href: '/alumni/activity' },
    { name: 'Social Media', href: '#' },
  ];

  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {links.map((l) => (
            <li key={l.name}>
              <Link href={l.href} className="text-sm md:text-base font-medium text-foreground/80 hover:text-primary">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
