import { TravelPackage } from '@/types/package'
import packagesData from '@/data/packages.json'
import { z } from 'zod'

// Zod schema for package validation
const packageSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  fullDescription: z.string(),
  duration: z.number(),
  price: z.object({
    amount: z.number(),
    currency: z.string(),
    perPerson: z.boolean(),
    includesTax: z.boolean(),
  }),
  images: z.object({
    hero: z.object({
      url: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    gallery: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      })
    ),
  }),
  features: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })
  ),
  itinerary: z.array(
    z.object({
      day: z.number(),
      title: z.string(),
      description: z.string(),
      activities: z.array(z.string()),
    })
  ),
  included: z.array(z.string()),
  excluded: z.array(z.string()),
  maxGroupSize: z.number(),
  difficulty: z.enum(['Easy', 'Moderate', 'Challenging']),
  location: z.object({
    country: z.string(),
    region: z.string(),
    coordinates: z
      .object({
        latitude: z.number(),
        longitude: z.number(),
      })
      .optional(),
  }),
  season: z.object({
    bestTime: z.array(z.string()),
    weather: z.string(),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
})

// Validate all packages
const validatePackages = (data: unknown): TravelPackage[] => {
  const schema = z.object({
    packages: z.array(packageSchema),
  })
  const result = schema.safeParse(data)
  
  if (!result.success) {
    console.error('Package data validation failed:', result.error)
    throw new Error('Invalid package data structure')
  }
  
  return result.data.packages
}

// Get all packages
export const getAllPackages = (): TravelPackage[] => {
  return validatePackages(packagesData)
}

// Get package by slug
export const getPackageBySlug = (slug: string): TravelPackage | undefined => {
  const packages = getAllPackages()
  return packages.find((pkg) => pkg.slug === slug)
}

// Get package by ID
export const getPackageById = (id: string): TravelPackage | undefined => {
  const packages = getAllPackages()
  return packages.find((pkg) => pkg.id === id)
}

// Format price
export const formatPrice = (price: TravelPackage['price']): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
  })
  return formatter.format(price.amount)
} 