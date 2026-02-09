import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Craftmanship } from "@/components/craftmanship"
import { WhyTusc } from "@/components/why-tusc"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Craftmanship />
      <WhyTusc />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
