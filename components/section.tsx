import type { ReactNode } from "react"
import SectionHeader from "@/components/section-header"

type HeaderProps = {
  eyebrow?: string
  title: string
  align?: "left" | "center"
}

type SectionProps = {
  id?: string
  className?: string
  header?: HeaderProps
  children: ReactNode
}

export default function Section({ id, className, header, children }: SectionProps) {
  const classes = ["section-shell", "section-space", className].filter(Boolean).join(" ")

  return (
    <section id={id} className={classes}>
      {header ? (
        <div className="mb-5">
          <SectionHeader
            eyebrow={header.eyebrow}
            title={header.title}
            align={header.align}
          />
        </div>
      ) : null}
      {children}
    </section>
  )
}
