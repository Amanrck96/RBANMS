import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rbanmsfgc.edu.in/'),
  title: {
    default: "RBANM'S FIRST GRADE COLLEGE",
    template: "%s | RBANM'S FIRST GRADE COLLEGE",
  },
  description: "RBANM's First Grade College - Affiliated to Bengaluru City University & Accredited by NAAC. Established in 1983, we provide quality education in Arts, Commerce, Management, and Computer Applications.",
  keywords: 'RBANMS, RBANM First Grade College, Bengaluru City University, NAAC accredited college Bangalore, BCA college Bangalore, BCom college Bangalore, BBA college Bangalore, BA college Bangalore',
  verification: {
    google: 'your-google-verification-code', // Placeholder - user might need to add this later
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.rbanmsfgc.edu.in/',
    siteName: "RBANM'S FIRST GRADE COLLEGE",
    title: "RBANM'S FIRST GRADE COLLEGE",
    description: "RBANM's First Grade College - Affiliated to Bengaluru City University & Accredited by NAAC. Empowering students with quality education since 1983.",
    images: [
      {
        url: "/images/migrated/logo.png",
        width: 1200,
        height: 630,
        alt: "RBANM's First Grade College Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RBANM'S FIRST GRADE COLLEGE",
    description: "RBANM's First Grade College - Affiliated to Bengaluru City University & Accredited by NAAC.",
    images: ["/images/migrated/logo.png"],
  },
  alternates: {
    canonical: 'https://www.rbanmsfgc.edu.in/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-F78ZGW994S"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F78ZGW994S');
          `}
        </Script>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
