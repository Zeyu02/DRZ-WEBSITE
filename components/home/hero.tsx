import HeroCta from "./hero-cta"
import HeroHeader from "./hero-header"
import { heroBenefits } from "./constants"

type HeroProps = {
  query: string
  onQueryChange: (value: string) => void
}

export default function Hero({ query, onQueryChange }: HeroProps) {
  return (
    <section className="hero-shell hero-orange">
      <HeroHeader query={query} onQueryChange={onQueryChange} />
      <HeroCta />
      <div className="hero-benefits" aria-label="Store benefits">
        {heroBenefits.map((item) => (
          <div key={item.label} className="hero-benefit">
            <span className="hero-benefit-dot" aria-hidden />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
