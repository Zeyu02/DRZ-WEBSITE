"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import Section from "@/components/section"
import Text from "@/components/ui/text"
import { categoryCards } from "./constants"

type BusinessSectionProps = {
  query: string
}

export default function BusinessSection({ query }: BusinessSectionProps) {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const [canScroll, setCanScroll] = useState(false)
  const normalized = query.trim().toLowerCase()
  const filtered = normalized
    ? categoryCards.filter((item) => item.title.toLowerCase().includes(normalized))
    : categoryCards

  const handleScroll = (direction: "left" | "right") => {
    const grid = gridRef.current
    if (!grid) return
    const amount = grid.clientWidth * 0.85
    grid.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
  }

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const update = () => {
      setCanScroll(grid.scrollWidth > grid.clientWidth + 1)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [filtered.length])

  return (
    <Section
      id="categories"
      header={{
        title: "Shop by category",
        align: "left",
      }}
    >
      <Text as="p" variant="sectionLede" className="category-lede">
        Discover the perfect bike tailored for your ride.
      </Text>
      <div className="category-carousel">
        <div className="category-row">
          <button
            type="button"
            className={`category-nav-button category-nav-prev${canScroll ? "" : " is-hidden"}`}
            onClick={() => handleScroll("left")}
            aria-label="Scroll categories left"
            disabled={!canScroll}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.5 5l-7 7 7 7" />
            </svg>
          </button>
          <div className="category-grid" ref={gridRef}>
            {filtered.map((item) => (
              <article
                key={item.title}
                className="category-card"
                style={{ "--category-image": `url(${item.image})` } as CSSProperties}
              >
                <div className="category-media">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="category-overlay">
                  <Text as="h3" variant="cardTitle" className="category-title">
                    {item.title}
                  </Text>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            className={`category-nav-button category-nav-next${canScroll ? "" : " is-hidden"}`}
            onClick={() => handleScroll("right")}
            aria-label="Scroll categories right"
            disabled={!canScroll}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {filtered.length === 0 ? (
        <Text as="p" variant="sectionLede" className="search-empty">
          No categories match "{query}".
        </Text>
      ) : null}
    </Section>
  )
}
