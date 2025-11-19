import Link from 'next/link';

export default function DepartmentsIndexPage() {
  const links = [
    { label: 'Arts', href: '/departments/arts' },
    { label: 'Commerce', href: '/departments/commerce' },
    { label: 'Computer Applications', href: '/departments/computer-applications' },
    { label: 'English', href: '/departments/english' },
    { label: 'Languages', href: '/departments/languages' },
    { label: 'Management', href: '/departments/management' },
    { label: 'Physical Education', href: '/departments/physical-education' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Departments</h1>
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
