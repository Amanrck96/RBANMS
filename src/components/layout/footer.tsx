import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export function SiteFooter() {
  const quickLinks = [
    { name: 'Industry Connect', href: '/industry-connect/internship' },
    { name: 'RTI', href: '/rti' },
    { name: 'Governance', href: '/governance' },
    { name: 'Social media', href: '#' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
    { name: 'Statutory CELLS', href: '/statutory-cells' },
    { name: 'Alumni', href: '/alumni/activity' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const footerTopLinks = [
    { name: 'Industry Connect', href: '/industry-connect/industry-visits' },
    { name: 'RTI', href: '/rti' },
    { name: 'Governance', href: '/governance' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
    { name: 'Statutory Cells', href: '/statutory-cells' },
    { name: 'Alumni', href: '/alumni/activity' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3 border-b border-primary-foreground/20">
        <ul className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
          {footerTopLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-primary-foreground/90 hover:text-white transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3 float-right">
          <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4 hover:text-accent transition-colors" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4 hover:text-accent transition-colors" /></a>
          <a href="#" aria-label="YouTube"><Youtube className="h-4 w-4 hover:text-accent transition-colors" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4 hover:text-accent transition-colors" /></a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* About Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="https://rbanmsfgc.ac.in/images/logo_1.png?v=1.75" alt="RBANM's First Grade College Logo" width={112} height={40} />
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-md">
              A premier institution dedicated to fostering academic excellence and holistic development, affiliated to Bengaluru City University.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-accent transition-colors" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-accent transition-colors" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5 hover:text-accent transition-colors" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-accent transition-colors" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 columns-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Campus</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/events" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Social Media</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Facebook className="h-5 w-5 shrink-0" />
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Facebook</a>
              </li>
              <li className="flex items-center gap-3">
                <Twitter className="h-5 w-5 shrink-0" />
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Twitter</a>
              </li>
              <li className="flex items-center gap-3">
                <Youtube className="h-5 w-5 shrink-0" />
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">YouTube</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-5 w-5 shrink-0" />
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span className="text-primary-foreground/80">Opposite Ulsoor Lake, #12, Annaswamy Mudaliar Road, Bangalore 560042.</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:principal_rbanms@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                  principal_rbanms@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:080-48533572" className="text-primary-foreground/80 hover:text-white transition-colors">
                  080-48533572
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:priyamahesh09@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                  priyamahesh09@gmail.com (Placement)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black/20">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} RBANM's First Grade College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

