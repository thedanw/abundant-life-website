import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Plan Your Visit
   URL: /plan-your-visit
   Visitor onboarding page — service times, directions, FAQ
   ============================================ */

export const metadata: Metadata = {
  title: "Plan Your Visit — Service Times, Directions, What to Expect",
  description:
    "Visiting Abundant Life Centre Mareeba for the first time? Find service times, directions, parking, kids' programmes, what to wear, and FAQs. Sunday 9:30am. All welcome!",
  openGraph: {
    title: "Plan Your Visit — Service Times, Directions, What to Expect | Abundant Life Centre Mareeba",
    description:
      "Visiting Abundant Life Centre Mareeba for the first time? Find service times, directions, parking, kids' programmes, what to wear, and FAQs. Sunday 9:30am. All welcome!",
  },
};

const serviceDetails = [
  { label: "Day", value: "Every Sunday" },
  { label: "Time", value: "9:30 am – 11:30 am" },
  { label: "Address", value: "133 Walsh Street, Mareeba, QLD 4880" },
  { label: "Phone", value: "+61 7 4092 5004" },
  { label: "Email", value: "alcentre@bigpond.net.au" },
];

const faqItems = [
  {
    question: "Is there parking available?",
    answer:
      "Yes, lots of parking. Free street parking on Walsh Street as well as a grass lot next to the church where you can park.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We recommend arriving 10–15 minutes early, especially if you have children to settle in to the service. Don't worry if you are running late — Just come and join us.",
  },
  {
    question: "Can I bring my kids?",
    answer:
      "Absolutely! We have children's activities during the service. Your family is welcome here.",
  },
  {
    question: "What if I have a prayer request?",
    answer:
      "You can submit a confidential prayer request online or speak to one of our team after the service. Every Sunday we offer an opportunity to be prayed for by a member of our leadership.",
  },
];

export default function PlanYourVisitPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Plan Your Visit — We&apos;d Love to Meet You
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            You&apos;re not a stranger here. Whether you&apos;re exploring faith, new to Mareeba, or visiting from out of town — There&apos;s a place for you at Abundant Life Centre.
          </p>
          <div className="mt-[var(--space-lg)]">
            <Button href="https://maps.google.com/?q=133+Walsh+Street+Mareeba+QLD+4880" variant="accent" ariaLabel="View on Google Maps">
              View on Google Maps &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Service Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-accent-sage)]">
                <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Detail</th>
                <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Information</th>
              </tr>
            </thead>
            <tbody>
              {serviceDetails.map((d) => (
                <tr key={d.label} className="border-b border-[var(--color-accent-sage)]/30">
                  <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{d.label}</td>
                  <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]">
                    {d.label === "Address" ? (
                      <a href="https://maps.google.com/?q=133+Walsh+Street+Mareeba+QLD+4880" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]">
                        {d.value}
                      </a>
                    ) : d.label === "Phone" ? (
                      <a href="tel:+61740925004" className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]">
                        {d.value}
                      </a>
                    ) : d.label === "Email" ? (
                      <a href="mailto:alcentre@bigpond.net.au" className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]">
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

      {/* What to Expect */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">What to Expect</h2>
          <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
            Our Sunday service runs from 9:30 am to 11:30 am and includes praise and worship, a Bible-based message, and fellowship time. All are welcome to participate however they&apos;re comfortable.
          </p>
        </div>
      </section>

      {/* For Families */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">For Families</h2>
        <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
          The church offers children&apos;s activities during Sunday services. We&apos;d love to have your family join us. No need to pre-register. Just arrive on any Sunday and you and your children can meet our team and the kids join our programme while parents are free to focus at our main church service.
        </p>
      </section>

      {/* What to Wear */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">What to Wear</h2>
          <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
            <strong>Wear what makes you comfortable.</strong> There&apos;s no dress code — We care about you, not your wardrobe. Collared shirts or t-shirts are more than fine.
          </p>
        </div>
      </section>

      {/* Getting Here */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">Getting Here</h2>
        <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
          We&apos;re located at 133 Walsh Street, Mareeba — Easy to find with plenty of free parking nearby.
        </p>
        <div className="mt-[var(--space-lg)]">
          <Button href="https://maps.google.com/?q=133+Walsh+Street+Mareeba+QLD+4880" variant="primary" ariaLabel="Get directions from your location">
            Get Directions from Your Location &rarr;
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)]">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
            {faqItems.map((item) => (
              <Card key={item.question} as="article">
                <h3 className="text-lg font-semibold text-[var(--color-primary)]">{item.question}</h3>
                <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)] leading-relaxed">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] text-center md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">Have More Questions?</h2>
        <p className="mx-auto mb-[var(--space-xl)] max-w-2xl text-[var(--color-text-primary)] leading-relaxed">
          We&apos;re here to help. Reach out anytime and we&apos;ll get back to you.
        </p>
        <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
          <Button href="/contact-us" variant="primary">
            Contact Us &rarr;
          </Button>
          <Button href="/what-we-believe" variant="outline">
            What We Believe &rarr;
          </Button>
        </div>
      </section>
    </main>
  );
}
