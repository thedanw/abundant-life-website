/* ============================================
   Abundant Life Centre Mareeba — PageTemplate
   Reusable page structure with SEO heading,
   ARIA landmark, and max-width container.
   ============================================ */

interface PageTemplateProps {
  heading?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageTemplate({
  heading,
  subtitle,
  children,
  className = "",
}: PageTemplateProps) {
  return (
    <main
      role="main"
      className={`mx-auto ${className}`.trim()}
    >
      {heading && <h1>{heading}</h1>}
      {subtitle && <p>{subtitle}</p>}
      {children}
    </main>
  );
}
