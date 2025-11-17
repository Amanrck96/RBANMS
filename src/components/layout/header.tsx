
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
    href: '/'
  },
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
      { name: 'Courses Offered', href: '#'},
      { name: 'Academic Structure', href: '#' },
      { name: 'Philosophy of Teaching', href: '#' },
      { name: 'New Courses', href: '#' },
    ],
  },
  {
    name: 'Departments',
    subLinks: [
      { name: 'Department of Commerce', href: '#' },
      { name: 'Department of Management Studies', href: '#' },
      { name: 'Department of Computer Applications', href: '#' },
      { name: 'Department of Arts', href: '#' },
      { name: 'Department of Languages', href: '#' },
      { name: 'Department of English', href: '#' },
      { name: 'Department of Physical Education', href: '#' },
    ],
  },
  { name: 'College Administration', href: '#'},
  {
    name: 'Activities',
    subLinks: [
      { name: 'Cultural', subLinks: [
        { name: 'Natya', href: '#' },
        { name: 'Theatre', href: '#' },
        { name: 'Fashion', href: '#' },
        { name: 'Music', href: '#' },
        { name: 'Dance', href: '#' },
        { name: 'Film Club', href: '#' },
        { name: 'Literary Club', href: '#' },
      ]},
      { name: 'Co-Curricular', subLinks: [
        { name: 'YRCS', href: '#' },
        { name: 'NCC (Army)', href: '#' },
        { name: 'NCC (Navy)', href: '#' },
        { name: 'NSS', href: '#' },
        { name: 'Manasa Samalochana', href: '#' },
      ] },
    ],
  },
  { name: 'Cells & Committees', href: '#', subLinks: [
    { name: 'Statutory', subLinks: [
        { name: 'Anti Ragging', href: '#' },
        { name: 'Internal Compliance Committee', href: '#' },
        { name: 'POSH', href: '#' },
        { name: 'SC/ST cell', href: '#' },
        { name: 'Grievance Redressal Cell', href: '#' },
    ]},
    { name: 'Others', subLinks: [
        { name: 'Cultural Committee', href: '#' },
        { name: 'Women’s Cell', href: '#' },
        { name: 'Eco Club', href: '#' },
    ]},
  ] },
  { name: 'Facilities', href: '#' },
  { name: 'Scholarships', href: '#' },
  { name: 'IQAC', href: '#' },
  { name: 'NAAC', href: '#' },
  { name: 'Research', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Contact Us', href: '/contact' },
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
        <Link key={link.name} href={link.href ?? '#'} className="block border-b py-4 font-semibold text-lg" onClick={() => setOpen(false)}>{link.name}</Link>
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
        <div className="container mx-auto flex h-10 items-center justify-end px-4 text-xs">
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
