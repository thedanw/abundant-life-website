/* ============================================
   Abundant Life Centre Mareeba — CallToAction Section
   Primary CTAs: Plan Your Visit, Give, Contact
   ============================================ */

import Button from "@/components/Button";

export default function CallToAction() {
  return (
    <section
      className="bg-[var(--color-primary)] text-[var(--color-text-on-primary)] py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <h2
          id="cta-heading"
          className="text-[var(--text-h2)] font-bold mb-[var(--space-lg)]"
        >
          Take Your Next Step
        </h2>

        <p className="text-[var(--text-body-lg)] opacity-90 max-w-2xl mx-auto mb-[var(--space-2xl)]">
          Whether you&apos;re visiting for the first time or looking to get more
          involved, we&apos;d love to help you take your next step.
        </p>

        <div className="flex flex-wrap gap-[var(--space-md)] justify-center">
          <Button variant="accent" href="/plan-your-visit">
            Plan Your Visit
          </Button>
          <Button
            variant="primary"
            href="/give"
          >
            Give Online
          </Button>
          <Button
            variant="primary"
            href="/contact-us"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
