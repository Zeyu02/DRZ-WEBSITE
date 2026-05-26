import { navItems } from "./constants"

export default function HeroHeader() {
  return (
    <div className="space-y-3">
      <header className="flex items-center justify-between gap-4 rounded-full border border-white/15 bg-black/20 px-4 py-3 text-white backdrop-blur-md">
        <div>
          <p className="text-sm font-medium text-white">DRZ</p>
        </div>
        <nav className="hidden items-center gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/80 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>  
      </header>
    </div>
  )
}
