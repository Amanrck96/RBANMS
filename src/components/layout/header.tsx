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
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Department", href: "/departments" },
  { label: "College Administration", href: "/administration" },
  { label: "Facilities", href: "/facilities" },
  { label: "Activities", href: "/activities" },
  { label: "Cells & Committees", href: "/cells-committees" },
  { label: "Sports", href: "/departments/physical-education" },
  { label: "NCC", href: "/ncc" },
  { label: "Scholarship", href: "/scholarships" },
  { label: "Research", href: "/research" },
  { label: "IQAC", href: "/iqac" },
  { label: "NAAC", href: "/naac" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

// Dropdown items configuration for all tabs
type NavItem = { label: string; href?: string; disabled?: boolean; children?: NavItem[] };
const dropdownItems: Record<string, NavItem[]> = {
  Home: [],
  "About Us": [
    { label: "Our Founder", href: "/about/founder" },
    { label: "History of the College", href: "/about/history" },
    { label: "Vision", href: "/about/vision" },
    { label: "Mission", href: "/about/mission" },
    { label: "Core Values", href: "/about/core-values" },
    { label: "Board Members", href: "/about/board-members", disabled: true },
  ],
  Academics: [
    { label: "Courses Offered", href: "/academics/courses-offered" },
    { label: "Academic Structure", href: "/academics/academic-structure" },
    { label: "Philosophy of Teaching", href: "/academics/philosophy-of-teaching" },

  ],
  Department: [
    { label: "Department of Commerce", href: "/departments/commerce" },
    { label: "Department of Management Studies", href: "/departments/management" },
    { label: "Department of Computer Applications", href: "/departments/computer-applications" },
    { label: "Department of Arts", href: "/departments/arts" },
    { label: "Department of Languages", href: "/departments/languages" },
    { label: "Department of English", href: "/departments/english" },
    { label: "Department of Physical Education", href: "/departments/physical-education" },
  ],
  Activities: [
    { label: "Cultural", href: "/activities/cultural" },
    { label: "Co-Curricular", href: "/activities/co-curricular" },
  ],
  "Cells & Committees": [
    { label: "Statutory", href: "/cells-committees/statutory" },
    { label: "Others", href: "/cells-committees/others" },
  ],
  NCC: [
    { label: "Army", href: "/ncc/army" },
    { label: "Navy", href: "/ncc/navy" },
  ],
};

export function SiteHeader() {
  return (
    <header aria-label="Main" className="w-full m-0 p-0">
      {/* First header: contact info */}
      <div className="w-full bg-blue-900 text-white border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-2 py-1 flex flex-col md:flex-row items-center md:justify-center gap-2 text-xs">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="RBANM's First Grade College Home">
            <div className="bg-white p-1 rounded-sm">
              <Image
                src="https://rbanmsfgc.ac.in/images/logo_1.png?v=1.75"
                alt="RBANM's First Grade College Logo"
                width={120}
                height={45}
                className="h-9 w-auto"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-3 md:absolute md:right-2">
            <a href="tel:080-48533572" className="flex items-center gap-2 hover:underline underline-offset-4 text-yellow-400">
              <Phone className="h-4 w-4" />
              080-48533572
            </a>
            <a href="mailto:principal_rbanms@gmail.com" className="flex items-center gap-2 hover:underline underline-offset-4 text-yellow-400">
              <Mail className="h-4 w-4" />
              principal_rbanms@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Second header: logo + navigation */}
      <nav className="w-full border-b border-white/10 bg-[#800000]" role="navigation">
        <div className="mx-auto max-w-7xl px-2 py-1 flex items-center gap-2">

          {/* Desktop Links */}
          <ul className="hidden lg:flex flex-nowrap items-center gap-1 text-xs text-white">
            {headerLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                {dropdownItems[link.label]?.length ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className="flex items-center gap-0.5 hover:bg-white/10 rounded px-1.5 py-0.5 text-white font-normal normal-case whitespace-nowrap"
                      >
                        <span className="hover:underline underline-offset-4">{link.label}</span>
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="bg-[#800000] border-white/10 text-white">
                      {dropdownItems[link.label]?.map((item) =>
                        item.children && item.children.length ? (
                          <div key={item.label} className="px-2 py-2">
                            <Link
                              href={item.href!}
                              className="block text-white font-semibold hover:underline underline-offset-4"
                            >
                              {item.label}
                            </Link>
                            <div className="mt-2 space-y-1">
                              {item.children.map((child) =>
                                child.disabled ? (
                                  <DropdownMenuItem key={child.label} disabled className="text-white/50 focus:bg-white/10 focus:text-white">
                                    {child.label}
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem key={child.href ?? child.label} asChild className="text-white focus:bg-white/10 focus:text-white">
                                    <Link href={child.href!}>{child.label}</Link>
                                  </DropdownMenuItem>
                                )
                              )}
                            </div>
                          </div>
                        ) : item.disabled ? (
                          <DropdownMenuItem key={item.label} disabled className="text-white/50 focus:bg-white/10 focus:text-white">
                            {item.label}
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem key={item.href ?? item.label} asChild className="text-white focus:bg-white/10 focus:text-white">
                            <Link href={item.href!}>{item.label}</Link>
                          </DropdownMenuItem>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={link.href} className="hover:underline underline-offset-4 normal-case hover:bg-white/10 px-1.5 py-0.5 rounded whitespace-nowrap">
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
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-3 py-2 text-white shadow-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-[#800000] border-r-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold text-white">Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="mt-4 h-[calc(100vh-6rem)]">
                  <nav aria-label="Mobile">
                    <ul className="space-y-2 text-base">
                      {headerLinks.map((link) => (
                        <li key={link.href}>
                          {dropdownItems[link.label]?.length ? (
                            <Accordion type="single" collapsible className="border-white/10">
                              <AccordionItem value={link.label} className="border-white/10">
                                <AccordionTrigger className="text-white text-base !font-normal font-body hover:underline underline-offset-4 normal-case hover:no-underline">
                                  <span className="block w-full rounded px-2 py-1.5 text-white text-base !font-normal font-body hover:bg-white/10 text-left">
                                    {link.label}
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="mt-1 space-y-2 pl-2">
                                    {dropdownItems[link.label]?.map((item) => (
                                      <li key={(item.href ?? item.label)}>
                                        {item.children && item.children.length ? (
                                          <div>
                                            <Link href={item.href!} className="block px-2 py-1.5 text-white font-semibold hover:bg-white/10 hover:underline underline-offset-4">
                                              {item.label}
                                            </Link>
                                            <ul className="mt-1 space-y-1 pl-2">
                                              {item.children.map((child) => (
                                                <li key={(child.href ?? child.label)}>
                                                  {child.disabled ? (
                                                    <span className="block rounded px-2 py-1.5 text-white/50 text-base font-normal font-body cursor-not-allowed">
                                                      {child.label}
                                                    </span>
                                                  ) : (
                                                    <Link
                                                      href={child.href!}
                                                      className="block rounded px-2 py-1.5 text-white text-base font-normal font-body hover:bg-white/10"
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
                                            <span className="block rounded px-2 py-1.5 text-white/50 text-base font-normal font-body cursor-not-allowed">
                                              {item.label}
                                            </span>
                                          ) : (
                                            <Link
                                              href={item.href!}
                                              className="block rounded px-2 py-1.5 text-white text-base font-normal font-body hover:bg-white/10"
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
                              className="block rounded px-2 py-2 text-white text-base font-normal font-body hover:bg-white/10 hover:underline underline-offset-4 normal-case"
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
