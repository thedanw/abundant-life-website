/* ============================================
   Abundant Life Centre Mareeba — Card Component
   Per BRAND_VISUAL_GUIDELINES.md Section 6
   Features: white bg, sage border, gold left border on hover
   ============================================ */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  as?: "div" | "article" | "section";
  ariaLabel?: string;
}

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  as: Component = "div",
  ariaLabel,
}: CardProps) {
  const baseStyles =
    "rounded-[var(--radius-lg)] border border-[var(--color-accent-sage)] bg-[var(--color-bg-white)] p-[var(--space-xl)] transition-all duration-200 ease-out";

  const hoverStyles = hoverEffect
    ? "hover:shadow-[0_20px_40px_rgba(0,103,71,0.12)] hover:border-l-4 hover:border-l-[var(--color-accent-gold)] hover:pl-[calc(var(--space-xl)-3px)]"
    : "";

  return (
    <Component
      className={`${baseStyles} ${hoverStyles} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
}
