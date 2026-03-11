import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TimelineSection />
      <Footer />
    </main>
  )
}
