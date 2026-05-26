import type { ElementType, ReactNode } from "react"

type TextVariant =
  | "eyebrow"
  | "cardEyebrow"
  | "sectionTitle"
  | "heroTitle"
  | "heroLede"
  | "sectionLede"
  | "cardTitle"
  | "cardBody"
  | "body"

type TextProps<T extends ElementType> = {
  as?: T
  variant?: TextVariant
  className?: string
  children: ReactNode
}

const variantClass: Record<TextVariant, string> = {
  eyebrow: "text-eyebrow",
  cardEyebrow: "card-eyebrow",
  sectionTitle: "section-title",
  heroTitle: "hero-title",
  heroLede: "hero-lede",
  sectionLede: "section-lede",
  cardTitle: "card-title",
  cardBody: "card-body",
  body: "text-base text-white/80",
}

export default function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
}: TextProps<T>) {
  const Component = as ?? "p"
  const classes = [variantClass[variant], className].filter(Boolean).join(" ")

  return <Component className={classes}>{children}</Component>
}
