/* ============================================
   Abundant Life Centre Mareeba — Skip Link
   Accessibility: Skip to main content for keyboard users
   ============================================ */

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-toast)] focus:rounded-[var(--radius-md)] focus:bg-[var(--color-accent-gold)] focus:px-[var(--space-lg)] focus:py-[var(--space-md)] focus:text-base focus:font-semibold focus:text-[var(--color-text-black)] focus:shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
