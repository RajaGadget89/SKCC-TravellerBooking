import React from 'react';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-primary"
            >
              TravelEase
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-6"
            >
              <a href="/" className="text-text hover:text-primary">Home</a>
              <a href="/packages" className="text-text hover:text-primary">Packages</a>
              <a href="/about" className="text-text hover:text-primary">About</a>
              <a href="/contact" className="text-text hover:text-primary">Contact</a>
            </motion.div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">TravelEase</h3>
              <p className="text-text-light">
                Your trusted partner for memorable travel experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/packages" className="text-text-light hover:text-primary">Travel Packages</a></li>
                <li><a href="/about" className="text-text-light hover:text-primary">About Us</a></li>
                <li><a href="/contact" className="text-text-light hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-4">Contact Us</h3>
              <ul className="space-y-2 text-text-light">
                <li>Email: info@travelease.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Travel St, City, Country</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-text-light">
            <p>&copy; {new Date().getFullYear()} TravelEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 