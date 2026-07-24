import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Watch Page
   URL: /watch
   Church online — YouTube as single source of truth
   ============================================ */

export const metadata: Metadata = {
  title: "Watch — Church Online & Past Services",
  description:
    "Watch Abundant Life Centre Mareeba online — Sunday services live at 9:30 am, plus past sermons and services on YouTube.",
  openGraph: {
    title: "Watch — Church Online & Past Services | Abundant Life Centre Mareeba",
    description:
      "Watch Abundant Life Centre Mareeba online — Sunday services live at 9:30 am, plus past sermons and services on YouTube.",
  },
};

const archiveLinks = [
  { period: "Pre-2015 Audio", url: "https://drive.google.com/open?id=0B1uRcRzi43AxdE1SYi04b0xMX0F6aDJVbk8tT0p5Q3lDOGJF" },
  { period: "Full Archive", url: "https://drive.google.com/open?id=13aojSklLR9QBa7OmqKv_2hoJ62Ourfbi" },
];

const liveStreamDetails = [
  { label: "When", value: "Every Sunday, 9:30 am AEST" },
  { label: "Where", value: "YouTube — Abundant Life Centre Mareeba" },
];

export default function WatchPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Watch — Church Online &amp; Past Services
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Can&apos;t make it to church? We&apos;ll bring it to you. Watch our Sunday services live or catch up on past messages — all on YouTube.
          </p>
          <div className="mt-[var(--space-lg)]">
            <Button href="https://www.youtube.com/@abundantlifemareeba" variant="accent" ariaLabel="Watch live on YouTube">
              Watch Live on YouTube &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us Live */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Join Us Live Every Sunday</h2>
        <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
          Our services stream live on YouTube every Sunday at 9:30 am AEST. Whether you&apos;re at home, travelling, or just exploring — you&apos;re welcome here.
        </p>
        <div className="mt-[var(--space-lg)] overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-accent-sage)]">
                <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Detail</th>
                <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Information</th>
              </tr>
            </thead>
            <tbody>
              {liveStreamDetails.map((d) => (
                <tr key={d.label} className="border-b border-[var(--color-accent-sage)]/30">
                  <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{d.label}</td>
                  <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]">
                    {d.label === "Where" ? (
                      <a href="https://www.youtube.com/@abundantlifemareeba" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]">
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
          <Button href="https://www.youtube.com/@abundantlifemareeba" variant="primary" ariaLabel="Watch live this Sunday on YouTube">
            Watch Live This Sunday &rarr;
          </Button>
        </div>
      </section>

      {/* Past Services */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">Past Services &amp; Sermons</h2>
          <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
            Every Sunday service is available on YouTube after the livestream ends. Browse our channel to find past services, sermon series, and special events.
          </p>
          <div className="mt-[var(--space-lg)]">
            <Button href="https://www.youtube.com/@abundantlifemareeba" variant="primary" ariaLabel="Browse all past services on YouTube">
              Browse All on YouTube &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">Subscribe on YouTube</h2>
        <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
          Hit <strong>Subscribe</strong> and the 🔔 notification bell on our YouTube channel. You&apos;ll get notified when we go live or upload a new service.
        </p>
        <div className="mt-[var(--space-lg)]">
          <Button href="https://www.youtube.com/@abundantlifemareeba" variant="accent" ariaLabel="Subscribe on YouTube">
            Subscribe on YouTube &rarr;
          </Button>
        </div>
      </section>

      {/* Pre-2015 Archive */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">Pre-2015 Audio Recordings</h2>
          <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
            Before we started livestreaming, we recorded audio of our services. These are preserved here for historical and devotional purposes.
          </p>
          <div className="mt-[var(--space-lg)] grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
            {archiveLinks.map((link) => (
              <Card key={link.period} as="article">
                <h3 className="text-[var(--color-primary)]">{link.period}</h3>
                <div className="mt-[var(--space-lg)]">
                  <Button href={link.url} variant="outline" ariaLabel={`Browse ${link.period} on Google Drive`}>
                    Browse Google Drive &rarr;
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-[var(--space-lg)] text-sm text-[var(--color-text-primary)]/70">
            For current content, visit our{" "}
            <a href="https://www.youtube.com/@abundantlifemareeba" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-secondary)]">
              YouTube channel
            </a>.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] text-center md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">New to ALC?</h2>
        <p className="mx-auto mb-[var(--space-xl)] max-w-2xl text-[var(--color-text-primary)] leading-relaxed">
          If something moves you, we&apos;d love to see you in person.
        </p>
        <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
          <Button href="/plan-your-visit" variant="primary">
            Plan Your Visit &rarr;
          </Button>
          <Button href="/contact-us" variant="outline">
            Contact Us &rarr;
          </Button>
        </div>
      </section>
    </main>
  );
}
