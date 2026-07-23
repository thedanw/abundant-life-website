/* ============================================
   Abundant Life Centre Mareeba — WatchOnline Section
   YouTube and audio streaming links
   ============================================ */

import Button from "@/components/Button";

export default function WatchOnline() {
  return (
    <section
      className="py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="watch-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <h2
          id="watch-heading"
          className="text-[var(--text-h2)] font-bold text-[var(--color-primary)] mb-[var(--space-md)]"
        >
          Watch Online
        </h2>

        <p className="text-[var(--text-body-lg)] leading-[var(--leading-relaxed)] max-w-2xl mx-auto mb-[var(--space-2xl)]">
          Can&apos;t make it to church? Watch Church Online or catch up on our
          recent services on YouTube.
        </p>

        <div className="flex flex-wrap gap-[var(--space-md)] justify-center">
          <Button
            variant="primary"
            href="https://www.youtube.com/channel/UC57wuoZcqweQXnQ0izYeEPg"
            ariaLabel="Watch on YouTube (opens in new tab)"
          >
            Watch on YouTube &rarr;
          </Button>
          <Button variant="secondary" href="/watch">
            Sermon Archive
          </Button>
        </div>
      </div>
    </section>
  );
}
