"use client"

import { useRef } from "react"
import Section from "@/components/section"
import Text from "@/components/ui/text"
import { socialCards } from "./constants"

export default function MediaSection() {
  const gridRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = (direction: "left" | "right") => {
    const grid = gridRef.current
    if (!grid) return
    const amount = grid.clientWidth * 0.85
    grid.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <Section
      id="video"
      header={{
        title: "Share your moments with us",
      }}
    >
      <Text as="p" variant="sectionLede" className="mb-6">
        Tag DRZ and get featured on the wall of riders, builds, and new arrivals.
      </Text>
      <div className="social-carousel">
        <div className="social-row">
          <button
            type="button"
            className="social-nav-button social-nav-prev"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            {"<"}
          </button>
          <div className="social-grid" ref={gridRef}>
            {socialCards.map((card) => (
              <article key={card.title} className="social-card">
                <div className="social-media">
                  <video
                    src={card.video}
                    playsInline
                    autoPlay
                    muted
                    loop
                    controls
                  />
                </div>
                <div className="social-meta">
                  <span className="social-handle">@drzcycleshop</span>
                  <span className="social-title">{card.title}</span>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="social-nav-button social-nav-next"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            {">"}
          </button>
        </div>
      </div>
    </Section>
  )
}
