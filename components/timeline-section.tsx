"use client"

import { useEffect, useRef, useState } from "react"
import { TimelineCard } from "./timeline-card"

const years = Array.from({ length: 18 }, (_, i) => ({
  age: i + 1,
  year: 2007 + i, // Adjust base year as needed
  title: `Age ${i + 1}`,
  description: getDescriptionForAge(i + 1),
}))

function getDescriptionForAge(age: number): string {
  const descriptions: Record<number, string> = {
    1: "The beginning of a beautiful journey",
    2: "First steps and endless discoveries",
    3: "Curiosity blooming in every moment",
    4: "Adventures in a world of wonder",
    5: "Dreams taking shape day by day",
    6: "Learning, growing, shining bright",
    7: "Magic in every new experience",
    8: "Building memories with loved ones",
    9: "Embracing each precious moment",
    10: "A milestone of joy and laughter",
    11: "New horizons calling forward",
    12: "Blossoming into who you are",
    13: "Teenage dreams beginning to unfold",
    14: "Finding your voice and passion",
    15: "Strength and grace in every step",
    16: "Sweet moments of self-discovery",
    17: "Standing on the edge of greatness",
    18: "Eighteen and ready to shine",
  }
  return descriptions[age] || "Another beautiful chapter"
}

export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const age = parseInt(entry.target.getAttribute("data-age") || "0")
            setVisibleCards((prev) => new Set([...prev, age]))
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )

    const cards = document.querySelectorAll("[data-age]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          A Journey Through Time
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
          Eighteen Years of{" "}
          <span className="italic font-medium">Memories</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          Each year a chapter, each moment a treasure.
          Scroll through the beautiful story of your life.
        </p>
      </div>

      {/* Timeline line */}
      <div className="absolute left-1/2 top-64 bottom-32 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Timeline cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {years.map((item, index) => (
            <TimelineCard
              key={item.age}
              age={item.age}
              year={item.year}
              title={item.title}
              description={item.description}
              isVisible={visibleCards.has(item.age)}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>

      {/* Final celebration message */}
      <div className="max-w-2xl mx-auto text-center mt-24 md:mt-32">
        <div className="inline-block p-8 md:p-12 rounded-2xl bg-card/80 backdrop-blur-sm border border-gold/10 shadow-xl">
          <p className="text-gold uppercase tracking-[0.2em] text-xs mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            And Now
          </p>
          <h3 className="text-3xl md:text-4xl font-light text-charcoal mb-4">
            Here's to the Next{" "}
            <span className="italic font-medium">Chapter</span>
          </h3>
          <p className="text-muted-foreground font-light"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Que tu 18 aniversario esté lleno de amor, alegría e infinitos momentos hermosos por venir.
          </p>
        </div>
      </div>
    </section>
  )
}
