import Link from "next/link";
import { Phone, Mail } from "lucide-react";

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
    <header aria-label="Main" className="w-full m-0 p-0">
      {/* First header: contact info */}
      <div className="w-full bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-3 py-1.5 flex items-center justify-end gap-6 text-sm">
          <a href="tel:080-48533572" className="flex items-center gap-2 hover:underline underline-offset-4">
            <Phone className="h-4 w-4" />
            080-48533572
          </a>
          <a href="mailto:principal_rbanms@gmail.com" className="flex items-center gap-2 hover:underline underline-offset-4">
            <Mail className="h-4 w-4" />
            principal_rbanms@gmail.com
          </a>
        </div>
      </div>

      {/* Second header: navigation */}
      <nav className="w-full border-t border-b border-primary/30 bg-white" role="navigation">
        <ul className="mx-auto max-w-7xl flex flex-wrap items-center gap-3 overflow-x-auto px-3 py-2 text-sm text-blue-900">
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
