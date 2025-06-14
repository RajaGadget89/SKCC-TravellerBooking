import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 z-10" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-bold mb-4">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl mb-8">
              Explore our curated collection of travel packages and create unforgettable memories.
            </p>
            <Button size="lg" variant="secondary">
              View Packages
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Package {i}</h3>
                <p className="text-text-light mb-4">
                  Experience the perfect blend of adventure and comfort with our carefully curated travel package.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 