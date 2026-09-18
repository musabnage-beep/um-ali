import { BackToTop } from '@/components/BackToTop'
import { Navbar } from '@/components/Navbar'
import { About } from '@/sections/About'
import { CallToAction } from '@/sections/CallToAction'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { InstagramFeed } from '@/sections/InstagramFeed'
import { Portfolio } from '@/sections/Portfolio'
import { Process } from '@/sections/Process'
import { Services } from '@/sections/Services'
import { Testimonials } from '@/sections/Testimonials'
import { WhyUs } from '@/sections/WhyUs'

/** The landing page, read top to bottom as one continuous story. */
export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <Testimonials />
        <InstagramFeed />
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
