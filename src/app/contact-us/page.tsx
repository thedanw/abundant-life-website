import type { Metadata } from "next";
import Button from "@/components/Button";
import ContactForm from "./ContactForm";

/* ============================================
   Abundant Life Centre Mareeba — Contact Us
   URL: /contact-us
   Contact form, office details, directions
   ============================================ */

export const metadata: Metadata = {
  title: "Contact Us — Visit, Call & Connect",
  description:
    "Get in touch with Abundant Life Centre Mareeba. Office hours, address, phone, email, contact form, directions. Sunday 9:30am. We'd love to hear from you!",
  openGraph: {
    title: "Contact Us — Visit, Call & Connect | Abundant Life Centre Mareeba",
    description:
      "Get in touch with Abundant Life Centre Mareeba. Office hours, address, phone, email, contact form, directions.",
  },
};

const officeDetails = [
  { label: "Hours", value: "9:00 am – 1:00 pm, Monday to Friday (closed public holidays)" },
  { label: "Phone", value: "+61 7 4092 5004", href: "tel:+61740925004" },
  { label: "Email", value: "alcentre@bigpond.net.au", href: "mailto:alcentre@bigpond.net.au" },
  { label: "Address", value: "133–137 Walsh Street, Mareeba, QLD 4880, Australia" },
];

export default function ContactUsPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Contact Us — We&apos;d Love to Hear From You
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Whether you&apos;re planning a visit, have a question, or need prayer — our team is here.
          </p>
        </div>
      </section>

      {/* Office Details */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Church Office</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-accent-sage)]">
                <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Detail</th>
                <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Information</th>
              </tr>
            </thead>
            <tbody>
              {officeDetails.map((d) => (
                <tr key={d.label} className="border-b border-[var(--color-accent-sage)]/30">
                  <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{d.label}</td>
                  <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]">
                    {"href" in d && d.href ? (
                      <a href={d.href} className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Form (Client Component) */}
      <ContactForm />

      {/* Google Map */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">Find Us</h2>
        <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)] leading-relaxed">
          We&apos;re located at 133–137 Walsh Street, Mareeba — Easy to find with plenty of free parking nearby.
        </p>
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-accent-sage)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.123456789!2d145.4234!3d-17.0023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAwJzA4LjMiUyAxNDXCsDI1JzI0LjIiRQ!5e0!3m2!1sen!2sau!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Abundant Life Centre Mareeba location"
          />
        </div>
        <div className="mt-[var(--space-lg)]">
          <Button href="https://maps.google.com/?q=133+Walsh+Street+Mareeba+QLD+4880" variant="primary" ariaLabel="Get directions on Google Maps">
            Get Directions on Google Maps &rarr;
          </Button>
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">Other Ways to Connect</h2>
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            <Button href="/plan-your-visit" variant="primary">
              Plan Your Visit &rarr;
            </Button>
            <Button href="/connect/prayer" variant="outline">
              Prayer Request &rarr;
            </Button>
            <Button href="/give" variant="outline">
              Give &rarr;
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
