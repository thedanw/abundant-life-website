import Link from "next/link";

/* ============================================
   Abundant Life Centre Mareeba — Button Component
   Variants: primary, secondary, outline, accent
   Per BRAND_VISUAL_GUIDELINES.md Section 6
   ============================================ */

type ButtonVariant = "primary" | "secondary" | "outline" | "accent";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-text-on-primary)] hover:bg-[#005238]",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-text-on-primary)] hover:bg-[#b0805a]",
  outline:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)]",
  accent:
    "bg-[var(--color-accent-gold)] text-[var(--color-text-on-accent)] hover:bg-[#f5c040]",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-[var(--radius-md)] px-[var(--space-xl)] py-[var(--space-md)] text-base font-semibold tracking-[0.01em] transition-colors duration-150 ease-out active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-[var(--color-accent-gold)] focus-visible:outline-offset-2";

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  const combined = `${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={combined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combined}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
