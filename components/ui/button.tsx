import Link from "next/link"
import type { ReactNode } from "react"

type ButtonVariant = "primary" | "secondary"

type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = {
  href?: string
  external?: boolean
  target?: "_blank" | "_self"
  rel?: string
  type?: "button" | "submit" | "reset"
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "shop-button-primary",
  secondary: "shop-button-secondary",
}

const sizeClass: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
}

export default function Button({
  href,
  external = false,
  target,
  rel,
  type = "button",
  variant = "secondary",
  size = "md",
  className,
  children,
}: ButtonProps) {
  const classes = [variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ")

  if (href) {
    if (external) {
      const resolvedTarget = target ?? "_blank"
      const resolvedRel = rel ?? (resolvedTarget === "_blank" ? "noreferrer noopener" : undefined)
      return (
        <a href={href} target={resolvedTarget} rel={resolvedRel} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  )
}
