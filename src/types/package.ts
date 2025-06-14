export interface PackageImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface PackageFeature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PackageItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface PackagePrice {
  amount: number;
  currency: string;
  perPerson: boolean;
  includesTax: boolean;
}

export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: number; // in days
  price: PackagePrice;
  images: {
    hero: PackageImage;
    gallery: PackageImage[];
  };
  features: PackageFeature[];
  itinerary: PackageItinerary[];
  included: string[];
  excluded: string[];
  maxGroupSize: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  location: {
    country: string;
    region: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  season: {
    bestTime: string[];
    weather: string;
  };
  createdAt: string;
  updatedAt: string;
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