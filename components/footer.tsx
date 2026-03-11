"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 px-4 bg-charcoal text-ivory">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Main message */}
        <div className="mb-8">
          <p className="text-gold/80 uppercase tracking-[0.3em] text-xs mb-4"
             style={{ fontFamily: "var(--font-montserrat)" }}>
            With all our love
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Feliz 18 Cumpleaños,{" "}
            <span className="italic font-medium">Judit</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gold/60">
            <span className="w-12 h-px bg-gold/30" />
            <Heart className="w-4 h-4 fill-current" />
            <span className="w-12 h-px bg-gold/30" />
          </div>
        </div>

        {/* Dedication */}
        <p className="text-ivory/60 text-sm max-w-md mx-auto leading-relaxed mb-12"
           style={{ fontFamily: "var(--font-montserrat)" }}>
          Every moment with you has been a gift. 
          Here's to celebrating the incredible person you've become 
          and the amazing journey ahead.
        </p>

        {/* Footer note */}
        <div className="pt-8 border-t border-ivory/10">
          <p className="text-ivory/40 text-xs uppercase tracking-widest"
             style={{ fontFamily: "var(--font-montserrat)" }}>
            Made with love
          </p>
        </div>
      </div>
    </footer>
  )
}
