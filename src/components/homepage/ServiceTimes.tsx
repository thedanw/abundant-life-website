/* ============================================
   Abundant Life Centre Mareeba — ServiceTimes Section
   Sunday service details with location
   ============================================ */

import Button from "@/components/Button";

export default function ServiceTimes() {
  return (
    <section
      className="bg-[var(--color-accent-sage)] py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="service-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <h2
          id="service-heading"
          className="text-[var(--text-h2)] font-bold text-[var(--color-primary)] mb-[var(--space-lg)]"
        >
          Join Us This Sunday
        </h2>

        <div className="bg-[var(--color-bg-white)] rounded-[var(--radius-lg)] p-[var(--space-2xl)] max-w-lg mx-auto mb-[var(--space-2xl)] shadow-sm">
          <p className="text-[var(--text-h3)] font-semibold text-[var(--color-primary)] mb-[var(--space-sm)]">
            9:30 am &ndash; 11:30 am
          </p>
          <p className="text-[var(--text-body-lg)] text-[var(--color-text-primary)] mb-[var(--space-md)]">
            Praise, worship, and fellowship with refreshments
          </p>
          <p className="text-[var(--text-body)] text-[var(--color-text-primary)] opacity-80">
            133 Walsh Street, Mareeba, QLD 4880
          </p>
        </div>

        <Button variant="primary" href="/plan-your-visit">
          Plan Your Visit
        </Button>
      </div>
    </section>
  );
}
