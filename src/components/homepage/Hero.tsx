/* ============================================
   Abundant Life Centre Mareeba — Hero Section
   Full-width hero with background image, h1 CTA,
   scripture quote, service times, and primary CTAs.
   SEO: h1 = "Discover Abundant Life" (brand + value)
   ============================================ */

import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden text-[var(--color-text-on-primary)]"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <Image
        src="/images/hero/abundant-life-church-worship-sundays.webp"
        alt="Worship service at Abundant Life Centre Mareeba"
        fill
        priority
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-[5] bg-[var(--color-primary)]/75" />

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-lg)] py-[var(--space-4xl)] text-center">
        {/* H1 — primary SEO heading */}
        <h1
          id="hero-heading"
          className="text-[var(--text-hero)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] mb-[var(--space-lg)]"
        >
          Discover Abundant Life
        </h1>

        {/* Scripture subtext */}
        <blockquote className="text-[var(--text-body-lg)] italic opacity-90 mb-[var(--space-2xl)] max-w-2xl mx-auto">
          &ldquo;I have come that they may have life, and that they may have it
          more abundantly.&rdquo;
          <footer className="mt-[var(--space-sm)] not-italic text-[var(--text-body)]">
            &mdash; John 10:10 (NKJV)
          </footer>
        </blockquote>

        {/* Service times card */}
        <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-sm rounded-[var(--radius-lg)] p-[var(--space-xl)] mb-[var(--space-2xl)] max-w-md mx-auto">
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

        {/* Primary CTAs */}
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
