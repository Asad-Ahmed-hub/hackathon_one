import FeaturesProducts from '@/components/FeaturesProducts'
import HoodiesAndJackets from '@/components/HoodiesAndJackets'
import Jeans from '@/components/Jeans'
import Newsletter from '@/components/Newsletter'
import Services from '@/components/Services'
import TShirts from '@/components/TShirts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HoodiesAndJackets />
      <Jeans />
      <TShirts />
      <FeaturesProducts />
      <Services />
      <Newsletter />
      
    </main>
  )
}
