/* ============================================
   Abundant Life Centre Mareeba — Markets Section
   Mareeba Markets details & community CTA
   ============================================ */

export default function Markets() {
  return (
    <section
      className="bg-[var(--color-secondary)] text-[var(--color-text-on-primary)] py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="markets-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <h2
          id="markets-heading"
          className="text-[var(--text-h2)] font-bold mb-[var(--space-lg)]"
        >
          Mareeba Markets
        </h2>

        <div className="bg-[rgba(255,255,255,0.1)] rounded-[var(--radius-lg)] p-[var(--space-2xl)] max-w-lg mx-auto mb-[var(--space-2xl)]">
          <p className="text-[var(--text-h4)] font-semibold mb-[var(--space-sm)]">
            Every 2nd and 5th Saturday
          </p>
          <p className="text-[var(--text-body-lg)] mb-[var(--space-md)]">
            7:30 am &ndash; 12:00 noon
          </p>
          <p className="text-[var(--text-body)] opacity-90">
            100 Park, Mareeba
          </p>
        </div>

        <p className="text-[var(--text-body-lg)] max-w-2xl mx-auto mb-[var(--space-lg)]">
          Come and enjoy the best bacon &amp; egg burger in town. All proceeds
          go to fund ALC collaborated missions.
        </p>
      </div>
    </section>
  );
}
