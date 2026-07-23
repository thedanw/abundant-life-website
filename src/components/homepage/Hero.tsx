/* ============================================
   Abundant Life Centre Mareeba — Hero Section
   Landing hero with service times & primary CTA
   ============================================ */

import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      className="bg-[var(--color-primary)] text-[var(--color-text-on-primary)] py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <p className="text-[var(--text-body-lg)] font-medium tracking-[var(--tracking-wide)] uppercase mb-[var(--space-md)]">
          Discover Abundant Life
        </p>

        <h1
          id="hero-heading"
          className="text-[var(--text-hero)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] mb-[var(--space-lg)]"
        >
          Have a Heart of Worship
        </h1>

        <blockquote className="text-[var(--text-body-lg)] italic opacity-90 mb-[var(--space-2xl)] max-w-2xl mx-auto">
          &ldquo;I have come that they may have life, and that they may have it
          more abundantly.&rdquo;
          <footer className="mt-[var(--space-sm)] not-italic text-[var(--text-body)]">
            &mdash; John 10:10b (NKJV)
          </footer>
        </blockquote>

        <div className="bg-[rgba(255,255,255,0.1)] rounded-[var(--radius-lg)] p-[var(--space-xl)] mb-[var(--space-2xl)] max-w-md mx-auto">
          <p className="text-[var(--text-h4)] font-semibold mb-[var(--space-sm)]">
            Join Us This Sunday
          </p>
          <p className="text-[var(--text-body-lg)]">
            9:30 am &ndash; 11:30 am
          </p>
          <p className="text-[var(--text-body)] opacity-80">
            133 Walsh Street, Mareeba, QLD 4880
          </p>
        </div>

        <div className="flex flex-wrap gap-[var(--space-md)] justify-center">
          <Button variant="accent" href="/plan-your-visit">
            Plan Your Visit
          </Button>
          <Button
            variant="outline"
            href="/connect/events"
            className="border-[var(--color-text-on-primary)] text-[var(--color-text-on-primary)] hover:bg-[var(--color-text-on-primary)] hover:text-[var(--color-primary)]"
          >
            This Week&apos;s Events
          </Button>
        </div>
      </div>
    </section>
  );
}
