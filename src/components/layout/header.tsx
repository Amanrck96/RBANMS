import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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

      {/* Second header: logo + navigation */}
      <nav className="w-full border-t border-b border-primary/30 bg-white" role="navigation">
        <div className="mx-auto max-w-7xl px-3 py-2 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="RBANM's First Grade College Home">
            <Image
              src="https://rbanmsfgc.ac.in/images/logo_1.png?v=1.75"
              alt="RBANM's First Grade College Logo"
              width={120}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Links */}
          <ul className="flex flex-wrap items-center gap-3 overflow-x-auto text-sm text-blue-900">
            {headerLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                {link.label === "Departments" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className="flex items-center gap-1 hover:underline underline-offset-4"
                        aria-haspopup="menu"
                        aria-expanded="false"
                      >
                        Departments <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem asChild>
                        <Link href="/departments/arts">Arts</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/departments/commerce">Commerce</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/departments/management">Management Studies</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/departments/computer-applications">Computer Applications</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/departments/languages">Languages</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/departments/english">English</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/departments/physical-education">Physical Education</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
