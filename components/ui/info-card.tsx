import Text from "@/components/ui/text"

type InfoCardProps = {
  label: string
  title: string
  body: string
  className?: string
}

export default function InfoCard({ label, title, body, className }: InfoCardProps) {
  const classes = ["bike-card", "p-5", "h-full", className]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={classes}>
      <Text as="p" variant="cardEyebrow">
        {label}
      </Text>
      <Text as="h3" variant="cardTitle" className="mt-2">
        {title}
      </Text>
      <Text as="p" variant="cardBody" className="mt-2">
        {body}
      </Text>
    </div>
  )
}
