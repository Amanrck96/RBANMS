import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';

export const metadata: Metadata = {
  title: "RBANM'S FIRST GRADE COLLEGE",
  description: 'A responsive website clone of an academic institution.',
  keywords: 'education, college, university, academic, responsive design',
  openGraph: {
    title: "RBANM'S FIRST GRADE COLLEGE",
    description: 'A responsive website clone of an academic institution.',
    images: ["/images/migrated/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RBANM'S FIRST GRADE COLLEGE",
    description: 'A responsive website clone of an academic institution.',
    images: ["/images/migrated/logo.png"],
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
