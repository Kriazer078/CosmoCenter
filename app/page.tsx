import { Navigation } from "@/components/cosmo/navigation"
import { HeroSection } from "@/components/cosmo/hero-section"
import { AboutSection } from "@/components/cosmo/about-section"
import { LearnSection } from "@/components/cosmo/learn-section"
import { InteractiveSection } from "@/components/cosmo/interactive-section"
import { LifeInSpaceSection } from "@/components/cosmo/life-in-space-section"
import { KazakhstanSpaceSection } from "@/components/cosmo/kazakhstan-space-section"
import { RoadmapSection } from "@/components/cosmo/roadmap-section"
import { HistorySection } from "@/components/cosmo/history-section"
import { PlanetsSection } from "@/components/cosmo/planets-section"
import { MissionsSection } from "@/components/cosmo/missions-section"
import { GallerySection } from "@/components/cosmo/gallery-section"
import { ContactsSection } from "@/components/cosmo/contacts-section"
import { Footer } from "@/components/cosmo/footer"

export default function CosmoCenter() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 gradient-space -z-10" />
      <div className="fixed inset-0 star-field opacity-30 -z-10" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <LearnSection />
      <InteractiveSection />
      <LifeInSpaceSection />
      <KazakhstanSpaceSection />
      <RoadmapSection />
      <HistorySection />
      <PlanetsSection />
      <MissionsSection />
      <GallerySection />
      <ContactsSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
