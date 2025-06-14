import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import type { TravelPackage } from '@/types/package';

// Temporary mock data - will be replaced with API call
const mockPackage: TravelPackage = {
  id: '1',
  title: 'Bali Adventure',
  description: 'Experience the beauty of Bali with this amazing adventure package.',
  price: 1299,
  duration: '7 days',
  location: 'Bali, Indonesia',
  imageUrl: '/packages/bali.jpg',
  features: [
    'Private villa accommodation',
    'Daily breakfast',
    'Airport transfers',
    'Guided tours'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Bali',
      description: 'Welcome to Bali! Transfer to your villa and enjoy a welcome dinner.',
      activities: [
        'Airport pickup',
        'Check-in at villa',
        'Welcome dinner'
      ]
    }
  ],
  included: [
    'Accommodation',
    'Daily breakfast',
    'Airport transfers',
    'Guided tours'
  ],
  excluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses'
  ],
  maxGroupSize: 12,
  difficulty: 'Easy',
  category: 'Adventure'
};

export default function PackagePage({ params }: { params: { id: string } }) {
  // TODO: Fetch package data from API
  const packageData = mockPackage;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 z-10" />
        <div className="absolute inset-0 bg-[url('/packages/bali.jpg')] bg-cover bg-center" />
        <div className="container relative z-20 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl font-bold mb-4">{packageData.title}</h1>
            <p className="text-xl mb-4">{packageData.description}</p>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {packageData.duration}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {packageData.location}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Details */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-text-light">{packageData.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              <div className="space-y-4">
                {packageData.itinerary.map((day) => (
                  <div key={day.day} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Day {day.day}: {day.title}</h3>
                    <p className="text-text-light mb-4">{day.description}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="text-text-light">{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Package Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-text-light">Price per person</p>
                  <p className="text-2xl font-bold text-primary">${packageData.price}</p>
                </div>
                <div>
                  <p className="text-text-light">Duration</p>
                  <p className="font-semibold">{packageData.duration}</p>
                </div>
                <div>
                  <p className="text-text-light">Difficulty</p>
                  <p className="font-semibold">{packageData.difficulty}</p>
                </div>
                <div>
                  <p className="text-text-light">Max Group Size</p>
                  <p className="font-semibold">{packageData.maxGroupSize} people</p>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg">
                Book Now
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-2">
                {packageData.included.map((item, index) => (
                  <li key={index} className="flex items-center text-text-light">
                    <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Not Included</h3>
              <ul className="space-y-2">
                {packageData.excluded.map((item, index) => (
                  <li key={index} className="flex items-center text-text-light">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 