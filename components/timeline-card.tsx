"use client"

import Image from "next/image"

interface TimelineCardProps {
  age: number
  year: number
  title: string
  description: string
  isVisible: boolean
  isEven: boolean
}

export function TimelineCard({
  age,
  year,
  title,
  description,
  isVisible,
  isEven,
}: TimelineCardProps) {
  return (
    <div
      data-age={age}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(age % 3) * 100}ms` }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Timeline dot for desktop */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold/30 border-2 border-gold items-center justify-center z-10">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>

        {/* Card content */}
        <div className={`flex-1 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"}`}>
          <div
            className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-gold/30 ${
              isEven ? "lg:ml-auto" : "lg:mr-auto"
            } max-w-lg`}
          >
            {/* Image container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              {/* Placeholder image - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-secondary to-gold/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <span className="text-2xl font-light text-gold">{age}</span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest"
                     style={{ fontFamily: "var(--font-montserrat)" }}>
                    Add Photo
                  </p>
                </div>
              </div>
              
              {/* Uncomment and use when adding real images */}
              {/* <Image
                src={`/images/age-${age}.jpg`}
                alt={`Age ${age}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              /> */}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Text content */}
            <div className="p-6 md:p-8">
              <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:justify-end" : "lg:justify-start"} justify-start`}>
                <span className="text-xs text-gold uppercase tracking-widest font-medium"
                      style={{ fontFamily: "var(--font-montserrat)" }}>
                  {year}
                </span>
                <span className="w-8 h-px bg-gold/30" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light text-charcoal mb-2">
                {title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed font-light"
                 style={{ fontFamily: "var(--font-montserrat)" }}>
                {description}
              </p>
            </div>

            {/* Decorative corner accent */}
            <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-16 h-16 overflow-hidden`}>
              <div className={`absolute ${isEven ? "-right-8 -top-8" : "-left-8 -top-8"} w-16 h-16 bg-gold/5 rotate-45`} />
            </div>
          </div>
        </div>

        {/* Empty space for alternating layout */}
        <div className="hidden lg:block flex-1" />
      </div>
    </div>
  )
}
