import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <rect width="50" height="50" rx="8" fill="currentColor" />
        <path d="M15 35V15H20V35H15Z" fill="#F5F5F5" />
        <path d="M25 35V15H30V35H25Z" fill="#F5F5F5" />
        <path d="M35 35V15H40V35H35Z" fill="#F5F5F5" />
        <path d="M10 40H40V35H10V40Z" fill="#F5F5F5" />
    </svg>
);


export function SiteFooter() {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Swayam', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const studentCorner = [
    { name: 'E-Resources', href: '#' },
    { name: 'Results', href: '#' },
    { name: 'Exam Time Table', href: '#' },
    { name: 'Syllabus', href: '#' },
    { name: 'Online Grievance', href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo />
              <h3 className="text-xl font-bold">RBANM's First Grade College</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
             A premier institution dedicated to fostering academic excellence and holistic development. Our commitment is to create future leaders through quality education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Corner */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Student Corner</h3>
            <ul className="space-y-2">
              {studentCorner.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
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
