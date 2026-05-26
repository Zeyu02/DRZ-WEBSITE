import Section from "@/components/section"
import VideoShowcase from "./video-showcase"

export default function MediaSection() {
  return (
    <Section
      id="video"
      header={{
        title: "Media",
      }}
    >
      <p className="section-lede mb-6">
        Short clips from customer builds, new arrivals, and service work.
      </p>
      <div className="rounded-lg overflow-hidden">
        <VideoShowcase />
      </div>
    </Section>
  )
}
