import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./sections/Hero"
import { Process } from "./sections/Process"
import { WhatsAppFloat } from "./components/WhatsAppFloat"
import { TechStack } from "./sections/TechStack"
import { Contact } from "./sections/Contact"
import { Faq } from "./sections/Faq"
import { GlobalBackground } from "./components/backgrounds/GlobalBackground"
import { ProductsSection } from "./components/ProductsSection"
import { FeaturedProjects } from "./sections/FeaturedProjects"

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative z-10 bg-slate-950 text-white">
      <GlobalBackground />
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <ProductsSection />
        <Process />
        <FeaturedProjects />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
