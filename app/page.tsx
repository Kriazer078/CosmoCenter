import dynamic from "next/dynamic"
import { Navigation } from "@/components/cosmo/navigation"
import { HeroSection } from "@/components/cosmo/hero-section"

const AboutSection = dynamic(() => import("@/components/cosmo/about-section").then(mod => ({ default: mod.AboutSection })))
const LearnSection = dynamic(() => import("@/components/cosmo/learn-section").then(mod => ({ default: mod.LearnSection })))
const InteractiveSection = dynamic(() => import("@/components/cosmo/interactive-section").then(mod => ({ default: mod.InteractiveSection })))
const LifeInSpaceSection = dynamic(() => import("@/components/cosmo/life-in-space-section").then(mod => ({ default: mod.LifeInSpaceSection })))
const KazakhstanSpaceSection = dynamic(() => import("@/components/cosmo/kazakhstan-space-section").then(mod => ({ default: mod.KazakhstanSpaceSection })))
const RoadmapSection = dynamic(() => import("@/components/cosmo/roadmap-section").then(mod => ({ default: mod.RoadmapSection })))
const HistorySection = dynamic(() => import("@/components/cosmo/history-section").then(mod => ({ default: mod.HistorySection })))
const PlanetsSection = dynamic(() => import("@/components/cosmo/planets-section").then(mod => ({ default: mod.PlanetsSection })))
const MissionsSection = dynamic(() => import("@/components/cosmo/missions-section").then(mod => ({ default: mod.MissionsSection })))
const GallerySection = dynamic(() => import("@/components/cosmo/gallery-section").then(mod => ({ default: mod.GallerySection })))
const ContactsSection = dynamic(() => import("@/components/cosmo/contacts-section").then(mod => ({ default: mod.ContactsSection })))
const Footer = dynamic(() => import("@/components/cosmo/footer").then(mod => ({ default: mod.Footer })))

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
