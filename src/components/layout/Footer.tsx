import Link from "next/link";
import Image from "next/image";

/* ============================================
   Abundant Life Centre Mareeba — Footer
   Site-wide footer with navigation, contact, and social
   ============================================ */

const footerNav = [
  {
    title: "Visit",
    links: [
      { label: "Plan Your Visit", href: "/plan-your-visit" },
      { label: "Service Times", href: "/plan-your-visit#service-times" },
      { label: "Location & Map", href: "/plan-your-visit#location" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Events", href: "/connect/events" },
      { label: "Groups", href: "/connect/groups" },
      { label: "Serve", href: "/connect/serve" },
      { label: "Prayer", href: "/connect/prayer" },
      { label: "Missions", href: "/connect/missions" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "What We Believe", href: "/what-we-believe" },
      { label: "Watch", href: "/watch" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Give", href: "/give" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-text-black)] text-[var(--color-text-white)]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        {/* Logo row — spans 2 columns width, left-aligned */}
        <div className="mb-sm">
          <Link href="/" className="inline-block">
            <Image
              src="/images/brand/AbundantLife-Logo_landscape.svg"
              alt="Abundant Life Centre Mareeba"
              width={160}
              height={36}
              className="h-16 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        {/* Content grid — 6 columns */}
        <div className="grid grid-cols-1 gap-[var(--space-2xl)] md:grid-cols-2 lg:grid-cols-6">
          {/* Brand description — spans 2 columns */}
          <div className="lg:col-span-2">
            <p className="text-sm text-[var(--color-text-white)]/70">
              <span className="font-medium text-[var(--color-accent-gold)]">Sunday Services</span>
              <br />
              9:30 AM
            </p>
            <p className="mt-[var(--space-md)] text-sm leading-relaxed text-[var(--color-text-white)]/70">
              A spirit-filled, evangelical church in the heart of Mareeba, Queensland.
              Join us for worship, community, and encounters with God.
            </p>
          </div>

          {/* Nav Columns — columns 2-5 */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h5 className="mb-[var(--space-md)] text-sm font-semibold uppercase tracking-[var(--tracking-wide)] text-[var(--color-accent-gold)]">
                {section.title}
              </h5>
              <ul className="flex flex-col">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-white)]/70 transition-colors duration-200 hover:text-[var(--color-text-white)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-text-white)]/10">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-[var(--space-md)] px-[var(--space-md)] py-[var(--space-lg)] md:flex-row md:px-[var(--space-xl)]">
          <p className="text-xs text-[var(--color-text-white)]/50">
            &copy; {currentYear} Abundant Life Centre Mareeba. All rights reserved.
          </p>
          <div className="flex items-center gap-[var(--space-md)]">
            {/* Social Links */}
            <a
              href="https://facebook.com/abundantlifemareeba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-white)]/50 transition-colors duration-200 hover:text-[var(--color-text-white)]"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@abundantlifemareeba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-white)]/50 transition-colors duration-200 hover:text-[var(--color-text-white)]"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/abundantlifemareeba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-white)]/50 transition-colors duration-200 hover:text-[var(--color-text-white)]"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
