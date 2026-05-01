import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { EmotionalHook } from '@/components/EmotionalHook'
import { Pillars } from '@/components/Pillars'
import { HealthStats } from '@/components/HealthStats'
import { Plans } from '@/components/Plans'
import { Testimonials } from '@/components/Testimonials'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <EmotionalHook />
        <Pillars />
        <HealthStats />
        <Plans />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
