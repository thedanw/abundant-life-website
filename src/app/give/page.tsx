import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Give Page
   URL: /give
   Giving & donations — Tithe.ly, direct deposit, in person, post
   ============================================ */

export const metadata: Metadata = {
  title: "Give & Support — Tithes, Offerings & Online Giving",
  description:
    "Partner with Abundant Life Centre Mareeba through tithes and offerings. Secure online giving via Tithe.ly, direct deposit, or in person. Your generosity fuels local ministry and global missions.",
  openGraph: {
    title: "Give & Support — Tithes, Offerings & Online Giving | Abundant Life Centre Mareeba",
    description:
      "Partner with Abundant Life Centre Mareeba through tithes and offerings. Secure online giving via Tithe.ly, direct deposit, or in person.",
  },
};

export default function GivePage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Give — Honour the Lord with Your All
          </h1>
          <blockquote className="mx-auto mt-[var(--space-lg)] max-w-2xl border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-lg)] text-left italic text-[var(--color-text-white)]/80">
            <p>
              &ldquo;Honour the Lord with your wealth, with the first fruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.&rdquo;
            </p>
            <cite className="mt-[var(--space-sm)] block text-sm not-italic text-[var(--color-text-white)]/60">
              — Proverbs 3:9–10
            </cite>
          </blockquote>
          <p className="mx-auto mt-[var(--space-lg)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Giving is an act of worship — Not a transaction. When we give, we acknowledge God as our source and partner in His kingdom work. Your generosity fuels local ministry, global missions, and community transformation across the Tablelands and beyond.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-2xl)] text-center">Ways to Give</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">

          {/* Online — Primary CTA */}
          <Card as="article" className="flex flex-col">
            <h3 className="text-[var(--color-primary)]">🌐 Online — Secure &amp; Recurring</h3>
            <p className="mt-[var(--space-sm)] flex-1 text-[var(--color-text-primary)]">
              <strong>Tithe.ly</strong> — Fast, secure, and supports recurring giving.
            </p>
            <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]/70">
              Subject to transaction fee.
            </p>
            <div className="mt-[var(--space-lg)]">
              <Button href="https://tithe.ly/give?c=838041" variant="primary" ariaLabel="Give online via Tithe.ly">
                Give Online Now &rarr;
              </Button>
            </div>
          </Card>

          {/* Direct Deposit */}
          <Card as="article" className="flex flex-col">
            <h3 className="text-[var(--color-primary)]">🏦 Direct Deposit</h3>
            <div className="mt-[var(--space-sm)] flex-1">
              <p className="text-[var(--color-text-primary)]">
                <strong>BSB:</strong> 084-472
              </p>
              <p className="text-[var(--color-text-primary)]">
                <strong>Account:</strong> 406595198
              </p>
            </div>
            <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]/70">
              Please include your name as the reference so we can issue a receipt.
            </p>
          </Card>

          {/* In Person */}
          <Card as="article" className="flex flex-col">
            <h3 className="text-[var(--color-primary)]">🙌 In Person — Sunday Service</h3>
            <p className="mt-[var(--space-sm)] flex-1 text-[var(--color-text-primary)]">
              Bring your tithe or offering during the Sunday service.
            </p>
            <div className="mt-[var(--space-lg)]">
              <Button href="/plan-your-visit" variant="outline" ariaLabel="Plan your visit to give in person">
                Plan Your Visit &rarr;
              </Button>
            </div>
          </Card>

          {/* By Post */}
          <Card as="article" className="flex flex-col">
            <h3 className="text-[var(--color-primary)]">✉️ By Post</h3>
            <p className="mt-[var(--space-sm)] flex-1 text-[var(--color-text-primary)]">
              Send cheques payable to:
            </p>
            <p className="mt-[var(--space-sm)] text-[var(--color-text-primary)]">
              <strong>Abundant Life Centre Mareeba</strong><br />
              133–137 Walsh Street<br />
              Mareeba, QLD 4880
            </p>
          </Card>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">Questions About Giving?</h2>
          <p className="mx-auto mb-[var(--space-xl)] max-w-2xl text-[var(--color-text-primary)] leading-relaxed">
            We&apos;re happy to help. Reach out anytime and our team will assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            <Button href="/contact-us" variant="primary">
              Contact Us &rarr;
            </Button>
            <Button href="/what-we-believe" variant="outline">
              What We Believe &rarr;
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
