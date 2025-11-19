import Link from 'next/link';

export default function OtherCellsCommitteesIndexPage() {
  const links = [
    { label: 'Cultural Committee', href: '/cells-committees/others/cultural-committee' },
    { label: 'Eco Club', href: '/cells-committees/others/eco-club' },
    { label: "Women's Cell", href: '/cells-committees/others/womens-cell' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Other Cells & Committees</h1>
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
