import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProjects />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
