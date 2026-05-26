import Text from "@/components/ui/text"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  align?: "left" | "center"
}

export default function SectionHeader({
  eyebrow,
  title,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left"

  return (
    <div className={`space-y-3 ${alignClass}`}>
      {eyebrow ? (
        <Text as="p" variant="eyebrow">
          {eyebrow}
        </Text>
      ) : null}
      <Text as="h2" variant="sectionTitle" className="text-balance">
        {title}
      </Text>
    </div>
  )
}
