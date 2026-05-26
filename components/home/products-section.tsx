import Link from "next/link"
import Section from "@/components/section"
import Button from "@/components/ui/button"
import { products } from "./constants"

export default function ProductsSection() {
  return (
    <Section
      id="parts"
      header={{
        title: "Our Products",
      }}
    >
      <p className="section-lede mb-6">
        Here at DRZ we are selling a wide range of high-quality bike parts and accessories.
      </p>
      <div className="products-marquee">
        <div className="products-track">
          {[...products, ...products].map((product, index) => (
            <Link
              key={`${product.title}-${index}`}
              href="/contact"
              className="product-card product-card-link"
              aria-label={`Ask about ${product.title}`}
            >
              <div
                className="product-card-image"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="product-card-title">
                  {product.title}
                </div>
              </div>
              <p className="product-card-caption">{product.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
