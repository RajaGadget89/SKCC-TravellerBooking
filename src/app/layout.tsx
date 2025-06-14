import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layouts/MainLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" className={inter.className}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
} 