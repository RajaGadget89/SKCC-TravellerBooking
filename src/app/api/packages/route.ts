import { NextResponse } from 'next/server';
import type { TravelPackage } from '@/types/package';

// Temporary mock data - will be replaced with Google Sheets integration
const mockPackages: TravelPackage[] = [
  {
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
  }
];

export async function GET() {
  try {
    // TODO: Implement Google Sheets integration
    return NextResponse.json(mockPackages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch packages' },
      { status: 500 }
    );
  }
} 