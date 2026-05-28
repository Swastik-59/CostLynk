import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Inter_Tight } from 'next/font/google';
import './globals.css';
import { BRAND } from '@/lib/brand';
import SmoothScroll from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${BRAND.name} — Operational Intelligence`,
  description: 'Enterprise AI and automation systems for high-stakes operational workflows, supply chain, and cost engineering.',
  metadataBase: new URL('https://costlynk.com'),
  icons: {
    icon: [{ url: BRAND.favicon, type: 'image/png' }],
    apple: [{ url: BRAND.logo, type: 'image/png' }],
    shortcut: BRAND.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}