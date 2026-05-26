import Button from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import { CONTACT } from "@/components/home/constants"

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="section-shell section-space">
        <div className="mb-4">
          <Button href="/" variant="secondary">Back to home</Button>
        </div>
        <SectionHeader eyebrow="Contact" title="Get in touch with DRZ" />
      </section>

      <section className="section-shell section-space">
        <div className="bike-card p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-black/70">DRZ Cycle Parts & Services</p>
              <p className="mt-1 text-sm text-black/65">
                Singao Rd, Kidapawan, Cotabato, Philippines, 9400
              </p>
              <p className="mt-2 text-sm text-black/60">Open daily, 8:00 AM - 6:00 PM</p>
            </div>

            <div className="contact-actions flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={CONTACT.messengerUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="messenger-button contact-action"
                aria-label="Open DRZ on Facebook Messenger"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.03 2 11c0 2.39 1.1 4.56 2.88 6.02V22l3.03-1.66c.92.25 1.9.39 2.95.39 5.52 0 10-4.03 10-9s-4.48-9-10-9z" fill="#0EA5E9"/>
                  <path d="M10.5 13.5L8 9.5l6 3 3-4.5-7 5z" fill="#fff"/>
                </svg>
                <span>Messenger</span>
              </a>

              <a
                href={`tel:${CONTACT.phone}`}
                className="contact-link contact-action text-sm font-medium text-black/80"
                aria-label="Call DRZ Cycle Parts and Services"
              >
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.35 2.08.68 3.07a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.19-1.19a2 2 0 0 1 2.11-.45c.99.33 2.02.56 3.07.68A2 2 0 0 1 22 16.92z" fill="#0B1721"/>
                </svg>
                {CONTACT.phoneLabel}
              </a>

              <a
                href="mailto:kholotrenz@gmail.com"
                className="contact-link contact-action text-sm font-medium text-black/80"
                aria-label="Email DRZ Cycle Parts and Services"
              >
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="#0B1721"/>
                </svg>
                kholotrenz@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="mb-5">
          <SectionHeader title="Find us on the map" />
        </div>
        <div className="map-wrap">
          <iframe
            title="DRZ Cycle Parts & Services - Map"
            className="map-embed w-full h-40 sm:h-44 md:h-48"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.50547542109524!2d125.0799083188752!3d6.998964490234208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8f9abad95c2f7%3A0xf3b3a3eb92ac8ba6!2sDrz%20Cycle%20Parts%20%26%20Services!5e0!3m2!1sen!2sph!4v1779195065992!5m2!1sen!2sph"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-footer">
            <a
              href="https://www.google.com/maps/place/Drz+Cycle+Parts+%26+Services/@6.998964,125.079908,21z/data=!4m12!1m5!3m4!2zNsKwNTknNTYuMyJOIDEyNcKwMDQnNDcuNyJF!8m2!3d6.9989645!4d125.0799083!3m5!1s0x32f8f9abad95c2f7:0xf3b3a3eb92ac8ba6!8m2!3d6.998863!4d125.0798929!16s%2Fg%2F11n__cdtf6?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer noopener"
              className="map-open-button"
              aria-label="Open DRZ location in Google Maps"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
