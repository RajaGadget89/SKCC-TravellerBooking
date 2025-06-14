import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layouts/MainLayout';
import './globals.css';

// Use Inter font as a fallback since Geist is not available in Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
