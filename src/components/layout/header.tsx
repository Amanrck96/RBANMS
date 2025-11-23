"use client";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const headerLinks = [
  { label: "Home", href: "/#rbanms-fgc" },
  { label: "ABOUT US", href: "/about" },
  { label: "ACADEMICS", href: "/academics" },
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
type NavItem = { label: string; href?: string; disabled?: boolean; children?: NavItem[] };
const dropdownItems: Record<string, NavItem[]> = {
  Home: [],
  "ABOUT US": [
    { label: "Our Founder", href: "/about/founder" },
    { label: "Founder’s Vision", href: "/about/founders-vision" },
    { label: "History of the College", href: "/about/history" },
    { label: "Vision", href: "/about/vision" },
    { label: "Mission", href: "/about/mission" },
    { label: "Core Values", href: "/about/core-values" },
    { label: "Board Members", href: "/about/board-members", disabled: true },
  ],
  ACADEMICS: [
    { label: "Courses Offered", href: "/academics/courses-offered" },
    { label: "Academic Structure", href: "/academics/academic-structure" },
    { label: "Philosophy of Teaching", href: "/academics/philosophy-of-teaching" },
    { label: "New Courses", href: "/academics/new-courses", disabled: true },
  ],
  Departments: [
    { label: "Department of Commerce", href: "/departments/commerce" },
    { label: "Department of Management Studies", href: "/departments/management" },
    { label: "Department of Computer Applications", href: "/departments/computer-applications" },
    { label: "Department of Arts", href: "/departments/arts" },
    { label: "Department of Languages", href: "/departments/languages" },
    { label: "Department of English", href: "/departments/english" },
    { label: "Department of Physical Education", href: "/departments/physical-education" },
  ],
  Activities: [
    {
      label: "Cultural",
      href: "/activities/cultural",
      children: [
        { label: "Natya", href: "/activities/cultural/natya" },
        { label: "Theatre", href: "/activities/cultural/theatre" },
        { label: "Fashion", href: "/activities/cultural/fashion" },
        { label: "Music", href: "/activities/cultural/music" },
        { label: "Dance", href: "/activities/cultural/dance" },
        { label: "Film Club", href: "/activities/cultural/film-club" },
        { label: "Literary Club", href: "/activities/cultural/literary-club" },
      ],
    },
    {
      label: "Co-Curricular",
      href: "/activities/co-curricular",
      children: [
        { label: "YRCS", href: "/activities/co-curricular/yrcs" },
        { label: "NCC (Army)", href: "/activities/co-curricular/ncc-army" },
        { label: "NCC (Navy)", href: "/activities/co-curricular/ncc-navy" },
        { label: "NSS", href: "/activities/co-curricular/nss" },
        { label: "Manasa Samalochana", href: "/activities/co-curricular/manasa-samalochana" },
      ],
    },
  ],
  "Cells & Committees": [
    {
      label: "Statutory",
      href: "/cells-committees/statutory",
      children: [
        { label: "Anti Ragging", href: "/cells-committees/statutory/anti-ragging" },
        { label: "Internal Compliance Committee", href: "/cells-committees/statutory/internal-compliance" },
        { label: "POSH", href: "/cells-committees/statutory/posh" },
        { label: "SC/ST cell", href: "/cells-committees/statutory/sc-st-cell" },
        { label: "Grievance Redressal Cell", href: "/cells-committees/statutory/grievance-redressal" },
      ],
    },
    {
      label: "Others",
      href: "/cells-committees/others",
      children: [
        { label: "Cultural Committee", href: "/cells-committees/others/cultural-committee" },
        { label: "Women’s Cell", href: "/cells-committees/others/womens-cell" },
        { label: "Eco Club", href: "/cells-committees/others/eco-club" },
      ],
    },
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
                {dropdownItems[link.label]?.length ? (
                  <div className="flex items-center gap-1">
                    <Link href={link.href} className="hover:underline underline-offset-4">
                      {link.label}
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          aria-label={`${link.label} submenu`}
                          className="inline-flex items-center justify-center rounded px-1 py-0.5 hover:bg-primary/5"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className={link.label === "Activities" ? "grid grid-cols-2 gap-4 p-2" : undefined}>
                      {dropdownItems[link.label]?.map((item) => (
                        item.children && item.children.length ? (
                          <div key={item.label} className="px-2 py-2">
                            <Link href={item.href!} className="block text-blue-900 font-semibold hover:underline underline-offset-4">
                              {item.label}
                            </Link>
                            <div className="mt-2 space-y-1">
                              {item.children.map((child) => (
                                child.disabled ? (
                                  <DropdownMenuItem key={child.label} disabled>
                                    {child.label}
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem key={(child.href ?? child.label)} asChild>
                                    <Link href={child.href!}>{child.label}</Link>
                                  </DropdownMenuItem>
                                )
                              ))}
                            </div>
                          </div>
                        ) : (
                          item.disabled ? (
                            <DropdownMenuItem key={item.label} disabled>
                              {item.label}
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem key={(item.href ?? item.label)} asChild>
                              <Link href={item.href!}>{item.label}</Link>
                            </DropdownMenuItem>
                          )
                        )
                      ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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
                <ScrollArea className="mt-4 h-[calc(100vh-6rem)]">
                  <nav aria-label="Mobile">
                    <ul className="space-y-2 text-base">
                      {headerLinks.map((link) => (
                        <li key={link.href}>
                          {dropdownItems[link.label]?.length ? (
                            <Accordion type="single" collapsible>
                              <AccordionItem value={link.label}>
                                <AccordionTrigger className="text-blue-900 text-base !font-normal font-body hover:underline underline-offset-4">
                                  <Link
                                    href={link.href}
                                    className="block w-full rounded px-2 py-1.5 text-blue-900 text-base !font-normal font-body hover:bg-primary/5 hover:underline underline-offset-4 text-left"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {link.label}
                                  </Link>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="mt-1 space-y-2 pl-2">
                                    {dropdownItems[link.label]?.map((item) => (
                                      <li key={(item.href ?? item.label)}>
                                        {item.children && item.children.length ? (
                                          <div>
                                            <Link href={item.href!} className="block px-2 py-1.5 text-blue-900 font-semibold hover:bg-primary/5 hover:underline underline-offset-4">
                                              {item.label}
                                            </Link>
                                            <ul className="mt-1 space-y-1 pl-2">
                                              {item.children.map((child) => (
                                                <li key={(child.href ?? child.label)}>
                                                  {child.disabled ? (
                                                    <span className="block rounded px-2 py-1.5 text-blue-900 text-base font-normal font-body opacity-50 cursor-not-allowed">
                                                      {child.label}
                                                    </span>
                                                  ) : (
                                                    <Link
                                                      href={child.href!}
                                                      className="block rounded px-2 py-1.5 text-blue-900 text-base font-normal font-body hover:bg-primary/5"
                                                    >
                                                      {child.label}
                                                    </Link>
                                                  )}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ) : (
                                          item.disabled ? (
                                            <span className="block rounded px-2 py-1.5 text-blue-900 text-base font-normal font-body opacity-50 cursor-not-allowed">
                                              {item.label}
                                            </span>
                                          ) : (
                                            <Link
                                              href={item.href!}
                                              className="block rounded px-2 py-1.5 text-blue-900 text-base font-normal font-body hover:bg-primary/5"
                                            >
                                              {item.label}
                                            </Link>
                                          )
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ) : (
                            <Link
                              href={link.href}
                              className="block rounded px-2 py-2 text-blue-900 text-base font-normal font-body hover:bg-primary/5 hover:underline underline-offset-4"
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
