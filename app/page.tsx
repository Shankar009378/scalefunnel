import About from "@/components/About"
import ContactSection from "@/components/Contact"
import Footer2 from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import PricingSection from "@/components/PricingSection"
import ProjectsSection from "@/components/ProjectSection"
import TechStack from "@/components/TechStack"

export default function Page() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <About />
      <PricingSection />
      <ProjectsSection />
      <ContactSection />
      <Footer2 />
    </>
  )
}
