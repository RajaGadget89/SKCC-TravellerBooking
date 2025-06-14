export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  imageUrl: string;
  features: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  maxGroupSize: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  category: 'Adventure' | 'Cultural' | 'Relaxation' | 'Family';
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface BookingFormData {
  packageId: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  travelInfo: {
    startDate: string;
    numberOfPeople: number;
    specialRequirements?: string;
  };
  paymentInfo: {
    amount: number;
    paymentMethod: 'Bank Transfer' | 'Credit Card';
    paymentSlipUrl?: string;
  };
} 