import { CONTACT } from "./constants"
import Button from "@/components/ui/button"
import Text from "@/components/ui/text"

export default function HeroCta() {
  return (
    <div className="flex flex-col items-center gap-8 pb-6 pt-10 lg:pb-12">
      <div className="max-w-3xl space-y-6 text-center text-white">
        <Text as="h1" variant="heroTitle" className="max-w-2xl">
          DRZ Cycle Parts & Services
        </Text>
        <Text as="p" variant="heroLede" className="max-w-xl mx-auto">
          Parts, repairs, and new bikes in Kidapawan. Open daily with honest pricing and fast service.
        </Text>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={CONTACT.mapUrl} variant="primary" external>
            Visit the shop
          </Button>
          <Button href={CONTACT.messengerUrl} variant="secondary" external>
            Message us
          </Button>
        </div>
      </div>
    </div>
  )
}
