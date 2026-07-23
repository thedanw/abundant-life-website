import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Missions Page
   URL: /connect/missions
   Missions partners and Acts 1:8 strategy
   ============================================ */

export const metadata: Metadata = {
  title: "Missions & Outreach — Local & Global Impact",
  description:
    "Discover Abundant Life Centre's Acts 1:8 missions strategy. Partnering with 6 organisations across Mareeba, Indigenous Australia, and Borneo. Give, go, or pray.",
  openGraph: {
    title: "Missions & Outreach — Local & Global Impact | Abundant Life Centre Mareeba",
    description:
      "Discover Abundant Life Centre's Acts 1:8 missions strategy. Partnering with 6 organisations across Mareeba, Indigenous Australia, and Borneo.",
  },
};

const jerusalemPartners = [
  {
    name: "Mareeba Markets",
    focus: "Community outreach",
    impact: "2nd & 5th Saturday — food, fellowship, connection. All proceeds fund missions.",
  },
];

const judeaPartners = [
  {
    name: "IMLA",
    fullName: "Indigenous Ministry Links Australia",
    focus: "Aboriginal Christian ministry",
    impact: "Based in Mareeba. Equipping Indigenous leaders through God's Word, ministry training, mentoring, and resourcing (Eph 4:12). Emphasis on relationships and reaching geographically and culturally isolated peoples.",
    url: "https://www.iml.org.au",
  },
  {
    name: "SU Queensland",
    focus: "School chaplaincy",
    impact: "School chaplains in the prevention and rescue business — helping students with family breakdown, loneliness, drug abuse, stress, and anxiety. A listening ear and caring presence for kids in crisis.",
    url: "https://www.suqld.org.au",
  },
];

const endsPartners = [
  {
    name: "Living Waters Village",
    focus: "Orphan care, Borneo",
    impact: "280-hectare village in the jungle of Kalimantan caring for 570+ orphans and neglected children. When completed: accommodation for 1,000 children and schooling for 2,000 from surrounding villages.",
    url: "https://www.livingwatersvillage.com",
  },
  {
    name: "Gideons International",
    focus: "Bible distribution",
    impact: "Founded 1899. Distributing Bibles free of charge in 200+ countries, territories, and possessions.",
    url: "https://www.gideons.org.au",
  },
  {
    name: "Alphacrucis College",
    focus: "Ministry training",
    impact: "Australia's largest self-accrediting Christian liberal arts college and the official training college of ACC. Campuses in every state capital, Auckland, Finland, and beyond.",
    url: "https://www.ac.edu.au",
  },
  {
    name: "ApostleNet International",
    focus: "Apostolic network",
    impact: "Equipping and empowering church and marketplace leaders to build the Kingdom of God in their sphere of influence.",
  },
];

const prayerFocus = [
  { partner: "IMLA", focus: "Wisdom for leaders, open doors in remote communities" },
  { partner: "Living Waters Village", focus: "Health for children, funding for expansion" },
  { partner: "Gideons International", focus: "Bibles reaching every nation" },
  { partner: "SU Queensland", focus: "Chaplains in every school" },
  { partner: "Alphacrucis College", focus: "Students called to ministry" },
  { partner: "ApostleNet", focus: "Unity and strength for global leaders" },
];

export default function MissionsPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Missions — Reaching the World from Mareeba
          </h1>
          <blockquote className="mx-auto max-w-xl border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] text-left italic text-[var(--color-text-white)]/80">
            &ldquo;But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth.&rdquo;
            <br />
            <span className="not-italic text-[var(--color-accent-gold)]">— Acts 1:8 (NKJV)</span>
          </blockquote>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            We believe in missions — Not as a side project, but as the heartbeat of the Body of Christ. Our Acts 1:8 strategy partners with six organisations across three levels: <strong className="text-[var(--color-text-white)]">Jerusalem</strong> (Mareeba), <strong className="text-[var(--color-text-white)]">Judea &amp; Samaria</strong> (Indigenous Australia), and <strong className="text-[var(--color-text-white)]">Ends of the Earth</strong> (Borneo and beyond).
          </p>
        </div>
      </section>

      {/* How You Can Partner */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">How You Can Partner</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3">
          <Card className="text-center">
            <h3 className="text-2xl">Give</h3>
            <p className="mt-[var(--space-sm)] text-[var(--color-text-primary)]">Financial partnership fuels every mission.</p>
            <div className="mt-[var(--space-lg)]">
              <Button href="/give?designation=missions" variant="primary">
                Give to Missions &rarr;
              </Button>
            </div>
          </Card>
          <Card className="text-center">
            <h3 className="text-2xl">Pray</h3>
            <p className="mt-[var(--space-sm)] text-[var(--color-text-primary)]">Commit to praying for our partners monthly.</p>
            <div className="mt-[var(--space-lg)]">
              <Button href="/connect/prayer" variant="secondary">
                Submit a Prayer &rarr;
              </Button>
            </div>
          </Card>
          <Card className="text-center">
            <h3 className="text-2xl">Go</h3>
            <p className="mt-[var(--space-sm)] text-[var(--color-text-primary)]">Short-term trips available for adults and youth.</p>
            <div className="mt-[var(--space-lg)]">
              <Button href="#short-term-trips" variant="secondary">
                Explore Trips &rarr;
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Jerusalem */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-md)]">Jerusalem — Mareeba &amp; Tablelands</h2>
          <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
            {jerusalemPartners.map((p) => (
              <Card key={p.name} hoverEffect={false}>
                <h3 className="font-semibold text-[var(--color-primary)]">{p.name}</h3>
                <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-secondary)]">{p.focus}</p>
                <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{p.impact}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Judea & Samaria */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-md)]">Judea &amp; Samaria — Indigenous Australia</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
          {judeaPartners.map((p) => (
            <Card key={p.name} hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">{p.name}</h3>
              <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-secondary)]">{p.focus}</p>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{p.impact}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-[var(--space-sm)] inline-block text-sm font-medium text-[var(--color-primary)] underline transition-colors hover:text-[var(--color-secondary)]">
                  Visit {p.name} website &rarr;
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Ends of the Earth */}
      <section className="bg-[var(--color-primary)] py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-md)] text-[var(--color-accent-gold)]">Ends of the Earth — Global</h2>
          <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
            {endsPartners.map((p) => (
              <div key={p.name} className="rounded-[var(--radius-lg)] bg-white/10 p-[var(--space-xl)]">
                <h3 className="font-semibold text-[var(--color-accent-gold)]">{p.name}</h3>
                <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-text-white)]/80">{p.focus}</p>
                <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-white)]/60">{p.impact}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-[var(--space-sm)] inline-block text-sm font-medium text-[var(--color-accent-gold)] underline transition-colors hover:text-[var(--color-text-white)]">
                    Visit {p.name} website &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Breakdown */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-md)] text-center">Where Your Giving Goes</h2>
        <p className="mx-auto mb-[var(--space-xl)] max-w-xl text-center text-[var(--color-text-primary)]">
          25% of all ALC tithes and offerings go to missions. All missions giving is tax-deductible (Deductible Gift Recipient status).
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
          {[...jerusalemPartners, ...judeaPartners, ...endsPartners].map((p) => (
            <Card key={p.name} hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">{p.name}</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">{p.focus}</p>
            </Card>
          ))}
        </div>
        <div className="mt-[var(--space-xl)] text-center">
          <Button href="/give?designation=missions" variant="primary">
            Give to Missions &rarr;
          </Button>
        </div>
      </section>

      {/* Short-Term Trips */}
      <section id="short-term-trips" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)] text-center">Short-Term Missions Trips</h2>
          <p className="mx-auto mb-[var(--space-xl)] max-w-xl text-center text-[var(--color-text-primary)]">
            Got a heart for the nations? We&apos;re exploring short-term trips for adults and youth:
          </p>
          <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3">
            <Card hoverEffect={false} className="text-center">
              <h3 className="font-semibold text-[var(--color-primary)]">Borneo</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Living Waters Village orphan care</p>
              <p className="mt-[var(--space-xs)] text-xs text-[var(--color-secondary)]">10–14 days</p>
            </Card>
            <Card hoverEffect={false} className="text-center">
              <h3 className="font-semibold text-[var(--color-primary)]">Indigenous Communities</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">IMLA discipleship ministry</p>
              <p className="mt-[var(--space-xs)] text-xs text-[var(--color-secondary)]">5–7 days</p>
            </Card>
            <Card hoverEffect={false} className="text-center">
              <h3 className="font-semibold text-[var(--color-primary)]">Local Outreach</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Mareeba Markets, school chaplaincy</p>
              <p className="mt-[var(--space-xs)] text-xs text-[var(--color-secondary)]">Ongoing</p>
            </Card>
          </div>
          <div className="mt-[var(--space-xl)] text-center">
            <Button href="/contact-us?subject=missions" variant="primary">
              Register Your Interest &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Pray for Our Partners */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Pray for Our Partners</h2>
        <p className="mx-auto mb-[var(--space-xl)] max-w-xl text-center text-[var(--color-text-primary)]">
          Prayer is the engine of missions. Commit to praying for our partners monthly:
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
          {prayerFocus.map((p) => (
            <Card key={p.partner} hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">{p.partner}</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">{p.focus}</p>
            </Card>
          ))}
        </div>
        <div className="mt-[var(--space-xl)] text-center">
          <Button href="/connect/prayer" variant="secondary">
            Submit a Prayer Request &rarr;
          </Button>
        </div>
      </section>
    </main>
  );
}
