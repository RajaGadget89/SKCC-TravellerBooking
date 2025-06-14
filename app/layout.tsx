import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { MainLayout } from '@/components/layouts/MainLayout';
import './globals.css';

// Import Geist Sans and Geist Mono using next/font/local
const geist = localFont({
  src: [
    { path: '../public/fonts/Geist-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Geist-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: [
    { path: '../public/fonts/GeistMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/GeistMono-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TravelEase - Your Trusted Travel Partner',
  description: 'Book your next adventure with TravelEase. Discover amazing travel packages and create unforgettable memories.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
