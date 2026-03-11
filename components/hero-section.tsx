"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline")
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gold/3 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4"
             style={{ fontFamily: "var(--font-montserrat)" }}>
            Celebrating 18 Years
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-charcoal mb-6 tracking-tight">
            Feliz Cumple,{" "}
            <span className="italic font-medium">Judit</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
             style={{ fontFamily: "var(--font-montserrat)" }}>
            Eighteen years of beautiful moments, cherished memories, 
            and a journey that has only just begun.
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={videoRef}
          className={`mt-12 md:mt-16 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Decorative frame */}
            <div className="absolute -inset-3 md:-inset-4 border border-gold/20 rounded-2xl" />
            <div className="absolute -inset-6 md:-inset-8 border border-gold/10 rounded-3xl" />
            
            {/* Video wrapper */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-charcoal/10 bg-charcoal/5">
              {/* Replace YOUR_VIDEO_ID with the actual YouTube video ID */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
                title="Birthday Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Placeholder overlay - remove when adding real video */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal/80 to-charcoal/90">
                <div className="text-center text-ivory/90 p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-gold/40 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm uppercase tracking-widest text-gold/80 mb-2"
                     style={{ fontFamily: "var(--font-montserrat)" }}>
                    Video Message
                  </p>
                  <p className="text-lg font-light">
                    Replace with your YouTube video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToTimeline}
          className={`mt-16 md:mt-20 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-all duration-500 group cursor-pointer ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms", fontFamily: "var(--font-montserrat)" }}
        >
          <span className="text-xs uppercase tracking-[0.2em]">Explore the Journey</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
