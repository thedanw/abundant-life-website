"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

/* ============================================
   Abundant Life Centre Mareeba — Header
   Primary navigation with mobile menu toggle
   ============================================ */

const navItems = [
  { label: "Plan Your Visit", href: "/plan-your-visit" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Our Leadership", href: "/about-us#our-leadership" },
      { label: "Our History", href: "/about-us#our-history" },
      { label: "What We Believe", href: "/what-we-believe" },
    ],
  },
  {
    label: "Connect",
    href: "/connect",
    children: [
      { label: "Events", href: "/connect/events" },
      { label: "Groups", href: "/connect/groups" },
      { label: "Serve", href: "/connect/serve" },
      { label: "Prayer", href: "/connect/prayer" },
      { label: "Missions", href: "/connect/missions" },
    ],
  },
  { label: "Give", href: "/give" },
  { label: "Watch", href: "/watch" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] bg-[var(--color-primary)] shadow-lg">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--space-md)] py-[var(--space-sm)] md:px-[var(--space-xl)]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label="Abundant Life Centre Mareeba — Home"
        >
          <Image
            src="/images/brand/AbundantLife-Logo_landscape.svg"
            alt="Abundant Life Centre Mareeba"
            width={180}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[var(--space-lg)] lg:flex" aria-label="Main navigation">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex h-12 items-center gap-1 rounded-[4px] px-[var(--space-md)] text-sm font-medium text-[var(--color-text-on-primary)] transition-colors duration-200 hover:bg-white/10"
                >
                  {item.label}
                  <svg
                    className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown */}
                {openDropdown === item.label && (
                  <ul
                    className="absolute left-0 z-50 min-w-[200px] rounded-[var(--radius-md)] bg-[var(--color-bg-white)] p-[var(--space-xs)] shadow-lg"
                    style={{ top: "calc(100% - 4px)" }}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-[4px] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors duration-200 hover:bg-[var(--color-accent-sage)] hover:text-[var(--color-primary)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="flex h-12 items-center rounded-[4px] px-[var(--space-md)] text-sm font-medium text-[var(--color-text-on-primary)] transition-colors duration-200 hover:bg-white/10"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-on-primary)] transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={navItems}
      />
    </header>
  );
}
