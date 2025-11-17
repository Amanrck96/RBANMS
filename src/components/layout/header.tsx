"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const Logo = () => (
    <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <rect width="50" height="50" rx="8" fill="currentColor"/>
        <path d="M15 35V15H20V35H15Z" fill="white"/>
        <path d="M25 35V15H30V35H25Z" fill="white"/>
        <path d="M35 35V15H40V35H35Z" fill="white"/>
        <path d="M10 40H40V35H10V40Z" fill="white"/>
    </svg>
);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'News', href: '#' },
  {
    name: 'About Us',
    subLinks: [
      { name: 'Our Founder', href: '/about/founder' },
      { name: 'Founder\'s Vision', href: '#' },
      { name: 'History of the College', href: '#' },
      { name: 'Vision', href: '#' },
      { name: 'Mission', href: '#' },
      { name: 'Core Values', href: '#' },
      { name: 'Board Members', href: '#' },
    ],
  },
  {
    name: 'Academics',
    subLinks: [
      {
        name: 'Courses Offered',
        subLinks: [
          { name: 'Bachelor of Arts (B.A)', href: '#' },
          { name: 'Bachelor of Commerce (B.Com)', href: '#' },
          { name: 'Bachelor of Business Administration (B.B.A)', href: '#' },
          { name: 'Bachelor of Computer Applications (B.C.A)', href: '#' },
        ],
      },
      { name: 'Academic Structure', href: '#' },
      { name: 'Philosophy of Teaching', href: '#' },
      { name: 'New Courses', href: '#' },
    ],
  },
  {
    name: 'Departments',
    subLinks: [
      { name: 'Dept of Commerce', href: '#' },
      { name: 'Dept of Management Studies', href: '#' },
      { name: 'Dept of Computer Applications', href: '#' },
      { name: 'Dept of Arts', href: '#' },
      { name: 'Dept of Languages', href: '#' },
      { name: 'Dept of English', href: '#' },
      { name: 'Dept of Physical Education', href: '#' },
    ],
  },
  {
    name: 'Activities',
    subLinks: [
      { name: 'Workshops', href: '#' },
      { name: 'Events', subLinks: [
          { name: 'Sports Day', href: '#' },
          { name: 'Annual Day', href: '#' },
          { name: 'Language Day', href: '#' },
      ]},
      { name: 'Clubs', href: '#' },
    ],
  },
  {
    name: 'Extra-Academics',
    subLinks: [
      { name: 'NCC', href: '#' },
      { name: 'NSS', href: '#' },
      { name: 'Sports', href: '#' },
    ],
  },
  { name: 'Facilities', href: '#', subLinks: [
      { name: 'Library', subLinks: [
        { name: 'Human Resource', href: '#' },
        { name: 'Books and Journals', href: '#' },
        { name: 'Statistics', href: '#' },
        { name: 'e-Resource', href: '#' },
        { name: 'Web OPAC', href: '#' },
        { name: 'Pic of Library', href: '#' },
      ]},
      { name: 'ICT Tools', href: '#' },
  ] },
  { name: 'Cells & Committees', href: '#', subLinks: [
    { name: 'Mandatory Committees', subLinks: [
        { name: 'Anti-Ragging Cell', href: '#' },
        { name: 'Prevention of Sexual Harassment cell', href: '#' },
        { name: 'Grievance Redressal Cell', href: '#' },
    ]},
    { name: 'Other committees', subLinks: [
        { name: 'Cultural Committee', href: '#' },
        { name: 'Examination Committee', href: '#' },
        { name: 'Equal Opportunities Cell', href: '#' },
        { name: 'Incubation Cell', href: '#' },
        { name: 'Placement Cell', href: '#' },
        { name: 'Time Table Committee', href: '#' },
        { name: 'Women Cell', href: '#' },
    ]},
  ] },
  { name: 'IQAC', href: '#', subLinks: [
    { name: 'NAAC', subLinks: [
        { name: 'NAAC Accredition', href: '#' },
        { name: 'NAAC Certificates', href: '#' },
        { name: 'Students-strength', href: '#' },
    ]},
    { name: 'AQAR', href: '#' },
    { name: 'Research', subLinks: [
        { name: 'Publications', href: '#' },
        { name: 'Minor Projects', href: '#' },
        { name: 'Major Projects', href: '#' },
        { name: 'Seminars/ Workshops/ Conferences', href: '#' },
    ]},
    { name: 'MOU, Collaborations', href: '#' },
  ] },
  { name: 'Contact Us', href: '#' },
];

export function SiteHeader() {
  const [isSticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainNav = document.getElementById('main-nav');
      if (mainNav) {
        const offset = mainNav.offsetTop;
        setSticky(window.pageYOffset > offset);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const renderNavLinks = (links: typeof navLinks, isMobile = false) => {
    return links.map((link) => {
      if (link.subLinks) {
        return (
          <AccordionItem value={link.name} key={link.name}>
            <AccordionTrigger className="font-semibold text-lg py-4">{link.name}</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-4">
                {link.subLinks.map(subLink => {
                  if ('subLinks' in subLink && subLink.subLinks) {
                     return (
                        <Accordion type="single" collapsible className="w-full" key={subLink.name}>
                           <AccordionItem value={subLink.name}>
                              <AccordionTrigger className="font-semibold text-md py-3">{subLink.name}</AccordionTrigger>
                              <AccordionContent>
                                 <ul className="space-y-2 pl-4">
                                 {subLink.subLinks.map(childLink => (
                                    <li key={childLink.name}>
                                       <Link href={childLink.href} className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>{childLink.name}</Link>
                                    </li>
                                 ))}
                                 </ul>
                              </AccordionContent>
                           </AccordionItem>
                        </Accordion>
                     )
                  }
                  return (
                    <li key={subLink.name}>
                      <Link href={subLink.href ?? '#'} className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>{subLink.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      }
      return (
        <Link key={link.name} href={link.href} className="block border-b py-4 font-semibold text-lg" onClick={() => setOpen(false)}>{link.name}</Link>
      );
    });
  };

  const renderDesktopNavLinks = (links: typeof navLinks) => {
    return links.map((link) => (
      <li key={link.name} className="group relative">
        <Link href={link.href ?? '#'} className="flex items-center gap-1 font-semibold text-foreground/80 hover:text-primary transition-colors">
          {link.name}
          {link.subLinks && <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
        </Link>
        {link.subLinks && (
          <ul className="absolute top-full left-0 z-20 w-56 rounded-md bg-background shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
            {link.subLinks.map(subLink => (
              <li key={subLink.name} className="relative group/sub">
                <Link href={subLink.href ?? '#'} className="flex justify-between items-center w-full px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary">
                  {subLink.name}
                  {'subLinks' in subLink && subLink.subLinks && <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>}
                </Link>
                 {'subLinks' in subLink && subLink.subLinks && (
                    <ul className="absolute top-0 left-full z-20 w-56 rounded-md bg-background shadow-lg border opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                      {subLink.subLinks.map(childLink => (
                         <li key={childLink.name}>
                            <Link href={childLink.href} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary">
                              {childLink.name}
                            </Link>
                         </li>
                      ))}
                    </ul>
                 )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };


  return (
    <header className="relative w-full bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-4">
            <a href="tel:080-48533572" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>080-48533572</span>
            </a>
            <a href="mailto:principal_rbanms@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3 w-3" />
              <span>principal_rbanms@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4 hover:text-accent transition-colors" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4 hover:text-accent transition-colors" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="h-4 w-4 hover:text-accent transition-colors" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4 hover:text-accent transition-colors" /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-4">
          <Logo />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary font-headline">RBANMS FIRST GRADE COLLEGE</h1>
          </div>
        </Link>
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm p-0">
               <SheetHeader className="flex flex-row items-center justify-between border-b p-4">
                 <SheetTitle>
                    <span className="font-bold text-lg text-primary">Menu</span>
                 </SheetTitle>
                 <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                   <X className="h-6 w-6" />
                 </Button>
              </SheetHeader>
              <div className="flex-grow overflow-y-auto p-4">
                  <Accordion type="single" collapsible className="w-full">
                    {renderNavLinks(navLinks, true)}
                  </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav id="main-nav" className={cn("hidden lg:block bg-background border-y border-border/50", isSticky && "fixed top-0 left-0 right-0 z-50 shadow-md animate-in fade-in slide-in-from-top-2 duration-300")}>
        <div className="container mx-auto flex h-14 items-center justify-center">
          <ul className="flex items-center gap-8">
            {renderDesktopNavLinks(navLinks)}
          </ul>
        </div>
      </nav>
    </header>
  );
}

    