import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

// Dropdown items configuration for all tabs
const dropdownItems: Record<string, { label: string; href: string }[]> = {
  "About Us": [
    { label: "Overview", href: "/about" },
    { label: "Director Message", href: "/about/director-message" },
    { label: "Principal Message", href: "/about/principal-message" },
    { label: "Mission", href: "/about/mission" },
    { label: "Vision", href: "/about/vision" },
    { label: "Core Values", href: "/about/core-values" },
    { label: "Founders Vision", href: "/about/founders-vision" },
    { label: "Founder", href: "/about/founder" },
    { label: "History", href: "/about/history" },
    { label: "Awards", href: "/about/awards" },
    { label: "Board Members", href: "/about/board-members" },
  ],
  Academics: [
    { label: "Overview", href: "/academics" },
    { label: "Courses Offered", href: "/academics/courses-offered" },
    { label: "New Courses", href: "/academics/new-courses" },
    { label: "Academic Structure", href: "/academics/academic-structure" },
    { label: "Philosophy of Teaching", href: "/academics/philosophy-of-teaching" },
  ],
  Departments: [
    { label: "Arts", href: "/departments/arts" },
    { label: "Commerce", href: "/departments/commerce" },
    { label: "Management Studies", href: "/departments/management" },
    { label: "Computer Applications", href: "/departments/computer-applications" },
    { label: "Languages", href: "/departments/languages" },
    { label: "English", href: "/departments/english" },
    { label: "Physical Education", href: "/departments/physical-education" },
  ],
  "College Administration": [
    { label: "Overview", href: "/administration" },
  ],
  Activities: [
    { label: "Overview", href: "/activities" },
    { label: "NCC Army", href: "/activities/co-curricular/ncc-army" },
    { label: "NCC Navy", href: "/activities/co-curricular/ncc-navy" },
    { label: "NSS", href: "/activities/co-curricular/nss" },
    { label: "YRCS", href: "/activities/co-curricular/yrcs" },
    { label: "Manasa Samalochana", href: "/activities/co-curricular/manasa-samalochana" },
    { label: "Dance", href: "/activities/cultural/dance" },
    { label: "Fashion", href: "/activities/cultural/fashion" },
    { label: "Film Club", href: "/activities/cultural/film-club" },
    { label: "Literary Club", href: "/activities/cultural/literary-club" },
    { label: "Music", href: "/activities/cultural/music" },
    { label: "Natya", href: "/activities/cultural/natya" },
    { label: "Theatre", href: "/activities/cultural/theatre" },
  ],
  "Cells & Committees": [
    { label: "Overview", href: "/cells-committees" },
    { label: "Statutory (Overview)", href: "/cells-committees/statutory" },
    { label: "Anti-Ragging", href: "/cells-committees/statutory/anti-ragging" },
    { label: "Grievance Redressal", href: "/cells-committees/statutory/grievance-redressal" },
    { label: "Internal Compliance", href: "/cells-committees/statutory/internal-compliance" },
    { label: "POSH", href: "/cells-committees/statutory/posh" },
    { label: "SC/ST Cell", href: "/cells-committees/statutory/sc-st-cell" },
    { label: "Others (Overview)", href: "/cells-committees/others" },
    { label: "Women's Cell", href: "/cells-committees/others/womens-cell" },
    { label: "Eco Club", href: "/cells-committees/others/eco-club" },
    { label: "Cultural Committee", href: "/cells-committees/others/cultural-committee" },
  ],
  Facilities: [
    { label: "Overview", href: "/facilities" },
  ],
  Scholarships: [
    { label: "Overview", href: "/scholarships" },
  ],
  IQAC: [
    { label: "Overview", href: "/iqac" },
  ],
  NAAC: [
    { label: "Overview", href: "/naac" },
  ],
  Research: [
    { label: "Overview", href: "/research" },
  ],
  Gallery: [
    { label: "Overview", href: "/gallery" },
  ],
  "Contact Us": [
    { label: "Overview", href: "/contact" },
  ],
};

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

          {/* Desktop Links */}
          <ul className="hidden lg:flex flex-wrap items-center gap-3 overflow-x-auto text-sm text-blue-900">
            {headerLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                {dropdownItems[link.label] ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className="flex items-center gap-1 hover:underline underline-offset-4"
                        aria-haspopup="menu"
                        aria-expanded="false"
                      >
                        {link.label} <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {dropdownItems[link.label].map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
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

          {/* Mobile hamburger menu */}
          <div className="ml-auto lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="inline-flex items-center justify-center rounded-md border border-primary/30 px-3 py-2 text-blue-900 shadow-sm hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold text-blue-900">Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="mt-4">
                  <ul className="space-y-2 text-base">
                    {headerLinks.map((link) => (
                      <li key={link.href}>
                        {dropdownItems[link.label] ? (
                          <Accordion type="single" collapsible>
                            <AccordionItem value={link.label}>
                              <AccordionTrigger className="text-blue-900 hover:underline underline-offset-4">
                                {link.label}
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="mt-1 space-y-1 pl-2">
                                  {dropdownItems[link.label].map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        className="block rounded px-2 py-1.5 text-blue-900 hover:bg-primary/5"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <Link
                            href={link.href}
                            className="block rounded px-2 py-2 text-blue-900 hover:bg-primary/5 hover:underline underline-offset-4"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
