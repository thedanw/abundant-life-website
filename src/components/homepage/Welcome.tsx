/* ============================================
   Abundant Life Centre Mareeba — Welcome Section
   Church identity, mission, and who we are
   ============================================ */

import Link from "next/link";

export default function Welcome() {
  return (
    <section
      className="py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="welcome-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <h2
          id="welcome-heading"
          className="text-[var(--text-h2)] font-bold text-[var(--color-primary)] mb-[var(--space-lg)]"
        >
          Welcome to Abundant Life
        </h2>

        <p className="text-[var(--text-body-lg)] leading-[var(--leading-relaxed)] max-w-3xl mx-auto mb-[var(--space-lg)]">
          Welcome to Abundant Life Centre Mareeba. We&apos;re a Pentecostal
          church in Far North Queensland, part of Australian Christian Churches
          (ACC), and we exist to serve our community and help others to live in
          abundance.
        </p>

        <p className="text-[var(--text-body-lg)] leading-[var(--leading-relaxed)] max-w-3xl mx-auto mb-[var(--space-2xl)]">
          Whether you&apos;re exploring faith for the first time or looking for
          a church family, you&apos;re welcome here.
        </p>

        <Link
          href="/about-us"
          className="text-[var(--color-primary)] font-semibold underline decoration-2 underline-offset-4 hover:text-[#005238] transition-colors"
        >
          Our Story &amp; Leadership &rarr;
        </Link>
      </div>
    </section>
  );
}
