import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { MainLayout } from '@/components/layouts/MainLayout';
import './globals.css';

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
} 