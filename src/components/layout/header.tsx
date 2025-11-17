
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const navLinks = [
  {
    name: 'Home',
    subLinks: [
      { name: 'RBANM’s FGC', href: '/' },
      { name: 'Message from Director', href: '/about/director-message' },
      { name: 'Message from Principal', href: '/about/principal-message' },
      { name: 'Awards & Achievements', href: '/about/awards' },
      { name: 'Upcoming Events', href: '/events' },
    ]
  },
  {
    name: 'About Us',
    subLinks: [
      { name: 'Our Founder', href: '/about/founder' },
      { name: 'Founder\'s Vision', href: '/about/founders-vision' },
      { name: 'History of the College', href: '/about/history' },
      { name: 'Vision', href: '/about/vision' },
      { name: 'Mission', href: '/about/mission' },
      { name: 'Core Values', href: '/about/core-values' },
      { name: 'Board Members', href: '/about/board-members' },
    ],
  },
  {
    name: 'Academics',
    subLinks: [
      { name: 'Courses Offered', href: '/academics/courses-offered'},
      { name: 'Academic Structure', href: '/academics/academic-structure' },
      { name: 'Philosophy of Teaching', href: '/academics/philosophy-of-teaching' },
      { name: 'New Courses', href: '/academics/new-courses' },
    ],
  },
  {
    name: 'Departments',
    subLinks: [
      { name: 'Department of Commerce', href: '/departments/commerce' },
      { name: 'Department of Management Studies', href: '/departments/management' },
      { name: 'Department of Computer Applications', href: '/departments/computer-applications' },
      { name: 'Department of Arts', href: '/departments/arts' },
      { name: 'Department of Languages', href: '/departments/languages' },
      { name: 'Department of English', href: '/departments/english' },
      { name: 'Department of Physical Education', href: '/departments/physical-education' },
    ],
  },
  { name: 'College Administration', href: '/administration'},
  {
    name: 'Activities',
    subLinks: [
      { name: 'Cultural', subLinks: [
        { name: 'Natya', href: '/activities/cultural/natya' },
        { name: 'Theatre', href: '/activities/cultural/theatre' },
        { name: 'Fashion', href: '/activities/cultural/fashion' },
        { name: 'Music', href: '/activities/cultural/music' },
        { name: 'Dance', href: '/activities/cultural/dance' },
        { name: 'Film Club', href: '/activities/cultural/film-club' },
        { name: 'Literary Club', href: '/activities/cultural/literary-club' },
      ]},
      { name: 'Co-Curricular', subLinks: [
        { name: 'YRCS', href: '/activities/co-curricular/yrcs' },
        { name: 'NCC (Army)', href: '/activities/co-curricular/ncc-army' },
        { name: 'NCC (Navy)', href: '/activities/co-curricular/ncc-navy' },
        { name: 'NSS', href: '/activities/co-curricular/nss' },
        { name: 'Manasa Samalochana', href: '/activities/co-curricular/manasa-samalochana' },
      ] },
    ],
  },
  { name: 'Cells & Committees', href: '#', subLinks: [
    { name: 'Statutory', subLinks: [
        { name: 'Anti Ragging', href: '/cells-committees/statutory/anti-ragging' },
        { name: 'Internal Compliance Committee', href: '/cells-committees/statutory/internal-compliance' },
        { name: 'POSH', href: '/cells-committees/statutory/posh' },
        { name: 'SC/ST cell', href: '/cells-committees/statutory/sc-st-cell' },
        { name: 'Grievance Redressal Cell', href: '/cells-committees/statutory/grievance-redressal' },
    ]},
    { name: 'Others', subLinks: [
        { name: 'Cultural Committee', href: '/cells-committees/others/cultural-committee' },
        { name: 'Women’s Cell', href: '/cells-committees/others/womens-cell' },
        { name: 'Eco Club', href: '/cells-committees/others/eco-club' },
    ]},
  ] },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Scholarships', href: '/scholarships' },
  { name: 'IQAC', href: '/iqac' },
  { name: 'NAAC', href: '/naac' },
  { name: 'Research', href: '/research' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
];

const header2Links = [
    { name: 'Industry Connect', href: '#', subLinks: [
        { name: 'Internship', href: '/industry-connect/internship' },
        { name: 'Add-on programmes & Certificate Courses', href: '/industry-connect/addon-programmes' },
        { name: 'MoU', href: '/industry-connect/mou' },
        { name: 'Field Trip', href: '/industry-connect/field-trip' },
        { name: 'Industry Visits', href: '/industry-connect/industry-visits' },
    ]},
    { name: 'RTI', href: '/rti' },
    { name: 'Governance', href: '/governance' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
    { name: 'Statutory Cells', href: '/statutory-cells' },
    { name: 'Alumni', href: '/alumni/activity' },
]


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
  
  const renderNavLinks = (links: any[], isMobile = false) => {
    return links.map((link) => {
      if (link.subLinks) {
        return (
          <AccordionItem value={link.name} key={link.name}>
            <AccordionTrigger className="font-semibold text-lg py-4">{link.name}</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-4">
                {link.subLinks.map((subLink: any) => {
                  if ('subLinks' in subLink && subLink.subLinks) {
                     return (
                        <Accordion type="single" collapsible className="w-full" key={subLink.name}>
                           <AccordionItem value={subLink.name}>
                              <AccordionTrigger className="font-semibold text-md py-3">{subLink.name}</AccordionTrigger>
                              <AccordionContent>
                                 <ul className="space-y-2 pl-4">
                                 {subLink.subLinks.map((childLink: any) => (
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
        <Link key={link.name} href={link.href ?? '#'} className="block border-b py-4 font-semibold text-lg" onClick={() => setOpen(false)}>{link.name}</Link>
      );
    });
  };

  const renderDesktopNavLinks = (links: any[]) => {
    return links.map((link) => (
      <li key={link.name} className="group relative">
        <Link href={link.href ?? '#'} className="flex items-center gap-1 font-semibold text-foreground/80 hover:text-primary transition-colors">
          {link.name}
          {link.subLinks && <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
        </Link>
        {link.subLinks && (
          <ul className="absolute top-full left-0 z-20 w-56 rounded-md bg-background shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
            {link.subLinks.map((subLink: any) => (
              <li key={subLink.name} className="relative group/sub">
                <Link href={subLink.href ?? '#'} className="flex justify-between items-center w-full px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary">
                  {subLink.name}
                  {'subLinks' in subLink && subLink.subLinks && <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>}
                </Link>
                 {'subLinks' in subLink && subLink.subLinks && (
                    <ul className="absolute top-0 left-full z-20 w-56 rounded-md bg-background shadow-lg border opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                      {subLink.subLinks.map((childLink: any) => (
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
          <ul className="hidden lg:flex items-center gap-x-6">
            {renderDesktopNavLinks(header2Links)}
          </ul>
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
          <Image src="https://rbanmsfgc.ac.in/images/logo_1.png?v=1.75" alt="RBANM's First Grade College Logo" width={168} height={60} />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary font-headline">RBANMS FIRST GRADE COLLEGE</h1>
             <p className="text-sm text-muted-foreground">Affiliated to Bengaluru City University, Accredited by NAAC with B+, Recognised under 2(f) & 12(B) of UGC Act 1956</p>
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
          <ul className="flex items-center gap-x-6">
            {renderDesktopNavLinks(navLinks)}
          </ul>
        </div>
      </nav>
    </header>
  );
}
