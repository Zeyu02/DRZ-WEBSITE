"use client"

import { useState } from "react"
import Hero from "@/components/home/hero"
import BusinessSection from "@/components/home/business-section"
import ProductsSection from "@/components/home/products-section"
import MediaSection from "@/components/home/media-section"
import ContactStrip from "@/components/home/contact-strip"

export default function Page() {
  const [query, setQuery] = useState("")

  return (
    <main className="bg-background text-foreground">
      <Hero query={query} onQueryChange={setQuery} />
      <BusinessSection query={query} />
      <ProductsSection query={query} />
      <MediaSection />
      <ContactStrip />
    </main>
  )
}
