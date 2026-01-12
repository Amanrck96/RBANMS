"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';
import { useSiteSettings } from '@/hooks/use-site-settings';
import { DynamicSection } from '@/components/dynamic-section';

export function SiteFooter() {
  const { settings } = useSiteSettings();

  const quickLinks = [
    { name: 'Home', href: '/', highlight: true },
    { name: 'Industry Connect', href: '/industry-connect/internship' },
    { name: 'RTI', href: '/rti' },
    { name: 'Governance', href: '/governance' },

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
    <footer className="bg-blue-900 text-white">


      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold !text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 columns-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${link.highlight
                      ? 'text-yellow-400 hover:text-yellow-300 font-semibold'
                      : 'text-white/80 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold !text-yellow-400">Campus</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/events" className="text-sm text-white/80 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">News</Link></li>
              <li><Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">Placement</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold !text-yellow-400">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span className="text-white/80">{settings?.address || '#12, Annaswamy Mudaliar Road, Bangalore 560042.'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href={`mailto:${settings?.email || 'info@rbanmsfgc.edu.in'}`} className="text-white/80 hover:text-white transition-colors">
                  Via e-mail: {settings?.email || 'info@rbanmsfgc.edu.in'}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 mt-1" />
                <div className="flex flex-col text-white/80">
                  {settings?.phone ? (
                    <span>Phone: <a href={`tel:${settings.phone}`} className="hover:text-white transition-colors">{settings.phone}</a></span>
                  ) : (
                    <>
                      <span>Landline: <a href="tel:08041653395" className="hover:text-white transition-colors">080-41653395</a> / <a href="tel:08025512976" className="hover:text-white transition-colors">080-25512976</a></span>
                      <span>Mobile: <a href="tel:7349251497" className="hover:text-white transition-colors">7349251497</a></span>
                    </>
                  )}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:priyamahesh09@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  priyamahesh09@gmail.com (Placement)
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold !text-yellow-400">Social Media</h3>
            <div className="flex gap-4">
              {settings?.socialLinks?.facebook && (
                <a href={settings.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {settings?.socialLinks?.youtube && (
                <a href={settings.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="h-6 w-6" />
                </a>
              )}
              {settings?.socialLinks?.instagram && (
                <a href={settings.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {settings?.socialLinks?.linkedin && (
                <a href={settings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
              {settings?.socialLinks?.twitter && (
                <a href={settings.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
              )}
              {!settings?.socialLinks && (
                <>
                  <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="YouTube">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#800000]">
        <div className="container mx-auto px-4 py-3 text-center text-sm text-white/70">
          <DynamicSection
            pageId="footer-about"
            onlyContent
            defaultContent={<p>&copy; 2025 RBANM's First Grade College. All Rights Reserved.</p>}
          />
        </div>
      </div>
    </footer>
  );
}
