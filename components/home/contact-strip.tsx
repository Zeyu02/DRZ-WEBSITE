import Section from "@/components/section"
import Button from "@/components/ui/button"
import Text from "@/components/ui/text"
import { CONTACT } from "./constants"

export default function ContactStrip() {
  return (
    <Section id="contact">
      <div className="contact-strip">
        <div>
          <Text as="p" variant="eyebrow">
            Contact
          </Text>
          <Text as="h2" variant="sectionTitle" className="mt-2">
            Need parts or repairs today?
          </Text>
          <Text as="p" variant="sectionLede" className="mt-2">
            Reach us fast and we will confirm availability before you come in.
          </Text>
        </div>
        <div className="contact-strip-actions">
          <Button href="/contact" variant="secondary">Contact Us!</Button>
        </div>
      </div>
    </Section>
  )
}
