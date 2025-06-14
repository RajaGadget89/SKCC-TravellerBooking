import type { NextPage } from 'next'
import Hero from '@/components/hero/Hero'

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Additional sections will be added here */}
    </main>
  )
}

export default Home 