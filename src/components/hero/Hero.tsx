'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Hero component with search functionality
export default function Hero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Beautiful travel destination"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
          Discover Your Next Adventure
        </h1>
        <p className="mb-8 max-w-2xl text-lg sm:text-xl">
          Explore our curated collection of travel packages and create unforgettable memories
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations, packages..."
              className="flex-1 rounded-lg border-2 border-white/20 bg-white/10 px-6 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>

        {/* Popular Destinations */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {['Thailand', 'Japan', 'Vietnam', 'Bali'].map((destination) => (
            <button
              key={destination}
              onClick={() => router.push(`/search?q=${encodeURIComponent(destination)}`)}
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {destination}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 