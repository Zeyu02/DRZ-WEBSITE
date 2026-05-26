import Section from "@/components/section"
import InfoCard from "@/components/ui/info-card"
import Button from "@/components/ui/button"
import { businessCards, CONTACT } from "./constants"

export default function BusinessSection() {
  return (
    <Section
      id="business"
      header={{
        title: "Your trusted bike shop in Kidapawan",
      }}
    >
      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businessCards.map((card) => (
          <InfoCard
            key={card.label}
            label={card.label}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
    </Section>
  )
}
