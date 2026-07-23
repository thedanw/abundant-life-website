"use client";

import { useState } from "react";
import Link from "next/link";

/* ============================================
   Abundant Life Centre Mareeba — Mobile Navigation
   Full-screen slide-in menu for mobile devices
   ============================================ */

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export default function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 top-0 z-[var(--z-overlay)] bg-[var(--color-primary)] pt-20 transition-opacity duration-300 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <nav className="flex h-full flex-col overflow-y-auto px-[var(--space-lg)] py-[var(--space-xl)]">
        <ul className="flex flex-col gap-[var(--space-sm)]">
          {items.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-[var(--radius-full)] py-[var(--space-md)] text-left text-lg font-medium text-[var(--color-text-on-primary)] transition-colors duration-200 hover:bg-white/10"
                    onClick={() =>
                      setExpandedItem(expandedItem === item.label ? null : item.label)
                    }
                    aria-expanded={expandedItem === item.label}
                  >
                    {item.label}
                    <svg
                      className={`h-5 w-5 transition-transform ${
                        expandedItem === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedItem === item.label && (
                    <ul className="ml-[var(--space-md)] flex flex-col gap-[var(--space-xs)] border-l-2 border-[var(--color-accent-sage)] pl-[var(--space-md)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block rounded-[var(--radius-full)] py-[var(--space-sm)] text-base text-[var(--color-text-on-primary)]/90 transition-colors duration-200 hover:bg-white/10 hover:text-[var(--color-accent-gold)]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-[var(--radius-full)] py-[var(--space-md)] text-lg font-medium text-[var(--color-text-on-primary)] transition-colors duration-200 hover:bg-white/10 hover:text-[var(--color-accent-gold)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-auto pt-[var(--space-2xl)]">
          <Link
            href="/plan-your-visit"
            onClick={onClose}
            className="block w-full rounded-[var(--radius-md)] bg-[var(--color-accent-gold)] px-[var(--space-xl)] py-[var(--space-md)] text-center text-base font-semibold tracking-[0.01em] text-[var(--color-text-on-accent)] transition-colors duration-150 ease-out hover:bg-[#f5c040] active:scale-[0.98]"
          >
            Plan Your Visit
          </Link>
        </div>
      </nav>
    </div>
  );
}
