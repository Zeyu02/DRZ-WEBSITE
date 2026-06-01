"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import { CONTACT } from "./constants"
import Button from "@/components/ui/button"
import Text from "@/components/ui/text"

export default function HeroCta() {
  const bikeImages = ["/clubs/Club1.jpg", "/clubs/Club2.jpg", "/clubs/Club3.jpg"]
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () =>
    setActiveIndex((current) => (current - 1 + bikeImages.length) % bikeImages.length)
  const handleNext = () =>
    setActiveIndex((current) => (current + 1) % bikeImages.length)

  return (
    <div className="hero-splash">
      <div className="hero-splash-bg" aria-hidden>
      </div>
      <div className="hero-logo-mark" aria-hidden>
        <div
          className="hero-logo-track"
          key={activeIndex}
          style={{ "--hero-bike": `url(${bikeImages[activeIndex]})` } as CSSProperties}
        />
        <button
          type="button"
          className="hero-logo-nav hero-logo-prev"
          onClick={handlePrev}
          aria-label="Previous bike"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          className="hero-logo-nav hero-logo-next"
          onClick={handleNext}
          aria-label="Next bike"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="hero-splash-content">
        <Text as="p" variant="heroLede" className="hero-subtitle">
          Premium service, honest pricing, and ready-to-ride parts.
        </Text>
        <div className="hero-actions">
          <Button
            href={CONTACT.messengerUrl}
            variant="primary"
            className="hero-cta-button"
            external
          >
            Message us!
          </Button>
        </div>
      </div>
      <div className="hero-slider" aria-hidden>
        <span className="hero-slider-pill" />
      </div>
    </div>
  )
}
