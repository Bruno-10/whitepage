export const metadata =
  {
    title:
      'Home',
    description:
      'Fire Modern 88 cautiva con su estética vibrante y clásica de inspiración asiática.',
  }

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
    </>
  )
}
