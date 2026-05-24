import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Inter_Tight } from 'next/font/google';
import './globals.css';
import { brand } from '@/lib/brand';
import { theme } from '@/lib/theme';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

const display = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display'
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: `${brand.shortName} | Operational intelligence for supply chain systems`,
  description: 'A premium systems intelligence company for logistics, warehousing, manufacturing, and distribution teams.',
  metadataBase: new URL('https://arcline.example'),
  openGraph: {
    title: `${brand.shortName} | Operational intelligence for supply chain systems`,
    description: 'Forecast demand more accurately, automate exceptions, and coordinate decisions across systems.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}