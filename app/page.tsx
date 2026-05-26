import Hero from "@/components/home/hero"
import BusinessSection from "@/components/home/business-section"
import ProductsSection from "@/components/home/products-section"
import MediaSection from "@/components/home/media-section"
import ContactStrip from "@/components/home/contact-strip"

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <BusinessSection />
      <ProductsSection />
      <MediaSection />
      <ContactStrip />
    </main>
  )
}
