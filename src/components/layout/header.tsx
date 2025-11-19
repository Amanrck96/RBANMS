
import Link from "next/link";

const headerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Departments", href: "/departments" },
  { label: "College Administration", href: "/administration" },
  { label: "Activities", href: "/activities" },
  { label: "Cells & Committees", href: "/cells-committees" },
  { label: "Facilities", href: "/facilities" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "IQAC", href: "/iqac" },
  { label: "NAAC", href: "/naac" },
  { label: "Research", href: "/research" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header aria-label="Main" className="w-full m-0 p-0 border border-primary bg-primary">
      <nav className="mx-auto max-w-7xl" role="navigation">
        <ul className="flex flex-wrap items-center gap-3 overflow-x-auto px-3 py-2 text-sm text-primary-foreground">
          {headerLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link href={link.href} className="hover:underline underline-offset-4">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

    
