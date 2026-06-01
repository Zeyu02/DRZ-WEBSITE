import { categoryCards, featuredCollections, navItems } from "./constants"

type HeroHeaderProps = {
  query: string
  onQueryChange: (value: string) => void
}

type SearchMatch = {
  label: string
  href: string
  query?: string
}

export default function HeroHeader({ query, onQueryChange }: HeroHeaderProps) {
  const normalized = query.trim().toLowerCase()
  const matches: SearchMatch[] = normalized
    ? [
        ...navItems.map((item) => ({
          label: item.label,
          href: item.href,
        })),
        ...categoryCards.map((item) => ({
          label: `${item.title} (Category)` ,
          href: "#categories",
          query: item.title,
        })),
        ...featuredCollections.map((item) => ({
          label: `${item.title} (Product)` ,
          href: "#parts",
          query: item.title,
        })),
      ].filter((item) => item.label.toLowerCase().includes(normalized))
    : []

  return (
    <header>
      <div className="hero-navbar">
        <div className="hero-brand">
          <img src="/brand/drz.jpg" alt="DRZ" />
          <span className="hero-logo">DRZ</span>
        </div>
        <nav className="hero-nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hero-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <form
          className="hero-search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            name="q"
            placeholder="Search parts"
            aria-label="Search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          {normalized ? (
            <div className="hero-search-results" role="listbox">
              {matches.length ? (
                matches.map((item) => (
                  <a
                    key={`${item.href}-${item.label}`}
                    className="hero-search-item"
                    href={item.href}
                    onClick={() => onQueryChange(item.query ?? query)}
                  >
                    {item.label}
                  </a>
                ))
              ) : (
                <span className="hero-search-empty">No matching sections</span>
              )}
              <a
                className="hero-search-item hero-search-viewall"
                href="#parts"
                onClick={() => onQueryChange("")}
              >
                View all results
              </a>
            </div>
          ) : null}
        </form>
      </div>
    </header>
  )
}
