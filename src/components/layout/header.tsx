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
import { SearchDialog } from "@/components/search-dialog";
import { headerLinks, dropdownItems } from "@/lib/navigation";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { DynamicSection } from "@/components/dynamic-section";



export function SiteHeader() {
  const { settings } = useSiteSettings();

  return (
    <header aria-label="Main" className="w-full m-0 p-0">
      <DynamicSection pageId="header-top" onlyContent />
      {/* First header: contact info */}
      <div className="w-full bg-blue-900 text-white border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-2 py-1 flex flex-col md:flex-row items-center md:justify-center gap-2 text-xs">
          {/* Logo */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full justify-end">
            <div className="flex items-center gap-2 text-yellow-400">
              <Phone className="h-4 w-4" />
              <span className="flex flex-col md:flex-row md:gap-2 text-center md:text-left">
                {settings?.phone ? (
                  <span>Phone: <a href={`tel:${settings.phone}`} className="hover:underline">{settings.phone}</a></span>
                ) : (
                  <>
                    <span>Landline: <a href="tel:08041653395" className="hover:underline">080-41653395</a> / <a href="tel:08025512976" className="hover:underline">080-25512976</a></span>
                    <span className="hidden md:inline">|</span>
                    <span>Mobile: <a href="tel:7349251497" className="hover:underline">7349251497</a></span>
                  </>
                )}
              </span>
            </div>
            <div className="hidden md:block h-4 w-px bg-white/20 mx-1" />
            <a href={`mailto:${settings?.email || 'info@rbanmsfgc.edu.in'}`} className="flex items-center gap-2 hover:underline underline-offset-4 text-yellow-400">
              <Mail className="h-4 w-4" />
              Via e-mail: {settings?.email || 'info@rbanmsfgc.edu.in'}
            </a>
            <div className="h-4 w-px bg-white/20 mx-1" />
            <SearchDialog />
          </div>
        </div>
      </div>

      {/* Second header: logo + navigation */}
      <nav className="w-full border-b border-white/10 bg-[#800000]" role="navigation">
        <div className="mx-auto max-w-7xl px-2 py-1 flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2 mr-2">
            <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px]">
              <Image
                src={settings?.logoUrl || "/images/logo-full.png"}
                alt={settings?.collegeName || "RBANM's First Grade College Logo"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

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
