import Section from "@/components/section"
import Text from "@/components/ui/text"
import { featuredCollections } from "./constants"

type ProductsSectionProps = {
  query: string
}

export default function ProductsSection({ query }: ProductsSectionProps) {
  const normalized = query.trim().toLowerCase()
  const filtered = normalized
    ? featuredCollections.filter((item) =>
        [item.title, item.body, item.eyebrow].some((value) =>
          value.toLowerCase().includes(normalized)
        )
      )
    : featuredCollections

  return (
    <Section
      id="parts"
      header={{
        title: "Featured collections",
      }}
    >
      <div className="featured-grid">
        {filtered.map((item) => (
          <article key={item.title} className="featured-card">
            <div className="featured-media">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="featured-content">
              <Text as="p" variant="cardEyebrow" className="featured-eyebrow">
                {item.eyebrow}
              </Text>
              <Text as="h3" variant="cardTitle">
                {item.title}
              </Text>
              <Text as="p" variant="cardBody" className="featured-body">
                {item.body}
              </Text>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 ? (
        <Text as="p" variant="sectionLede" className="search-empty">
          No featured collections match "{query}".
        </Text>
      ) : null}
    </Section>
  )
}
