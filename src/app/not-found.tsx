import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — 404 Not Found
   File: src/app/not-found.tsx
   Error recovery — quick links, site map, fallback contact
   ============================================ */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Plan a Visit", href: "/plan-your-visit" },
  { label: "Watch Online", href: "/watch" },
  { label: "Events", href: "/connect/events" },
  { label: "Prayer", href: "/connect/prayer" },
  { label: "Contact Us", href: "/contact-us" },
];

const siteMap = [
  { section: "Home", pages: [{ label: "Home", href: "/" }] },
  { section: "About Us", pages: [{ label: "About Us", href: "/about-us" }] },
  { section: "What We Believe", pages: [{ label: "What We Believe", href: "/what-we-believe" }] },
  {
    section: "Connect",
    pages: [
      { label: "Connect", href: "/connect" },
      { label: "Events", href: "/connect/events" },
      { label: "Prayer", href: "/connect/prayer" },
      { label: "Missions", href: "/connect/missions" },
    ],
  },
  { section: "Plan Your Visit", pages: [{ label: "Plan Your Visit", href: "/plan-your-visit" }] },
  { section: "Give", pages: [{ label: "Give", href: "/give" }] },
  { section: "Watch", pages: [{ label: "Watch", href: "/watch" }] },
  { section: "Contact Us", pages: [{ label: "Contact Us", href: "/contact-us" }] },
];

const contactDetails = [
  { label: "Email", value: "alcentre@bigpond.net.au", href: "mailto:alcentre@bigpond.net.au" },
  { label: "Phone", value: "+61 7 4092 5004", href: "tel:+61740925004" },
  { label: "Office Hours", value: "Mon–Fri, 9:00 am – 1:00 pm" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Page Not Found — We&apos;ll Help You Find Your Way
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Sorry, we couldn&apos;t find that page. But we&apos;d love to help you find what you&apos;re looking for.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Quick Links</h2>
        <div className="grid grid-cols-2 gap-[var(--space-md)] md:grid-cols-3">
          {quickLinks.map((link) => (
            <Card key={link.href} as="article" hoverEffect={false}>
              <Link
                href={link.href}
                className="block text-center font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
              >
                {link.label} &rarr;
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Full Site Map */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)]">Full Site Map</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-accent-sage)]">
                  <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Section</th>
                  <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Pages</th>
                </tr>
              </thead>
              <tbody>
                {siteMap.map((item) => (
                  <tr key={item.section} className="border-b border-[var(--color-accent-sage)]/30">
                    <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{item.section}</td>
                    <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]">
                      {item.pages.map((page, i) => (
                        <span key={page.href}>
                          {i > 0 && " — "}
                          <Link
                            href={page.href}
                            className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]"
                          >
                            {page.label}
                          </Link>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Still Stuck */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Still Stuck?</h2>
        <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)] leading-relaxed">
          We&apos;re here to help.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-accent-sage)]">
                <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Detail</th>
                <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Information</th>
              </tr>
            </thead>
            <tbody>
              {contactDetails.map((d) => (
                <tr key={d.label} className="border-b border-[var(--color-accent-sage)]/30">
                  <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{d.label}</td>
                  <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]">
                    {"href" in d && d.href ? (
                      <a href={d.href} className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-[var(--space-lg)]">
          <Button href="/contact-us" variant="primary">
            Contact Us &rarr;
          </Button>
        </div>
      </section>
    </main>
  );
}
