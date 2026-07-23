import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";
import Button from "@/components/Button";

/* ============================================
   Abundant Life Centre Mareeba — Connect Hub
   URL: /connect
   Hub page linking to Events, Prayer, Missions, Groups, Serve
   ============================================ */

export const metadata: Metadata = {
  title: "Connect — Events, Prayer, Missions, Groups & Serving",
  description:
    "Get connected at Abundant Life Centre Mareeba. Upcoming events, prayer ministry, global missions, life groups, and volunteer opportunities. There's a place for you.",
  openGraph: {
    title: "Connect — Events, Prayer, Missions, Groups & Serving | Abundant Life Centre Mareeba",
    description:
      "Get connected at Abundant Life Centre Mareeba. Upcoming events, prayer ministry, global missions, life groups, and volunteer opportunities.",
  },
};

const hubCards = [
  {
    title: "Events",
    description:
      "Weekly services, monthly gatherings, annual conferences. There's always something happening at ALC.",
    href: "/connect/events",
    cta: "See What's On",
  },
  {
    title: "Prayer",
    description:
      "Submit a request, join the prayer team, or agree together for breakthrough.",
    href: "/connect/prayer",
    cta: "Submit a Request",
  },
  {
    title: "Missions",
    description:
      "Local, national, and global impact through our missions partners.",
    href: "/connect/missions",
    cta: "Meet Our Partners",
  },
  {
    title: "Groups",
    description:
      "Life groups, Bible studies, demographic communities. Faith grows in circles, not rows.",
    href: "/connect/groups",
    cta: "Find Your People",
  },
  {
    title: "Serve",
    description:
      "Find your place to serve. Worship, kids, hospitality, prayer, outreach, operations.",
    href: "/connect/serve",
    cta: "Use Your Gifts",
  },
];

const weeklyEvents = [
  { event: "Sunday Worship", when: "Sunday, 9:30 am", where: "Main Sanctuary", details: "Praise, Word, fellowship" },
  { event: "Midweek Prayer", when: "Wednesday, 7:00 pm", where: "Chapel", details: "Intercession and agreement" },
  { event: "Youth Group", when: "Friday, 7:00 pm", where: "Youth Hall", details: "Ages 13–18" },
  { event: "Kids Church", when: "Sunday, 9:30 am", where: "Kids' Hall", details: "Ages 5–12 (during sermon)" },
];

const upcomingEvents = [
  { event: "Mareeba Markets", date: "2nd & 5th Saturday, 7:30 am", description: "Community outreach — bacon & egg burgers, crafts, fellowship. All proceeds fund missions." },
  { event: "Men's Breakfast", date: "1st Saturday, 7:30 am", description: "Fellowship, food, and the Word. All men welcome." },
  { event: "Women's Ministry", date: "2nd Tuesday, 10:00 am", description: "Coffee, connection, and encouragement." },
];

const missionsPartners = [
  { name: "IMLA", focus: "Aboriginal Christian ministry", impact: "Equipping Indigenous leaders (Eph 4:12)" },
  { name: "Living Waters Village", focus: "Orphan care, Borneo", impact: "570+ children cared for" },
  { name: "Gideons International", focus: "Bible distribution", impact: "200+ nations" },
  { name: "SU Queensland", focus: "School chaplaincy", impact: "Student wellbeing" },
  { name: "Alphacrucis College", focus: "Ministry training", impact: "ACC official college" },
  { name: "ApostleNet", focus: "Apostolic network", impact: "Global church leaders" },
];

export default function ConnectPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Connect — Find Your Place in the Family
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Church isn&apos;t a place you go — It&apos;s a family you belong to. The Bible says we are the Body of Christ (1 Cor 12:12), each member with a special function. Whether you&apos;re new here or have been attending for years, there&apos;s a place for you.
          </p>
        </div>
      </section>

      {/* Hub Cards */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-2xl)] text-center">How Will You Connect?</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2 lg:grid-cols-3">
          {hubCards.map((card) => (
            <Card key={card.title} as="article" className="flex flex-col">
              <h3 className="text-[var(--color-primary)]">{card.title}</h3>
              <p className="mt-[var(--space-sm)] flex-1 text-[var(--color-text-primary)]">
                {card.description}
              </p>
              <div className="mt-[var(--space-lg)]">
                <Button href={card.href} variant="primary">
                  {card.cta} &rarr;
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* This Week at ALC */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)] text-center">This Week at ALC</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-accent-sage)]">
                  <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Event</th>
                  <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">When</th>
                  <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Where</th>
                  <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Details</th>
                </tr>
              </thead>
              <tbody>
                {weeklyEvents.map((e) => (
                  <tr key={e.event} className="border-b border-[var(--color-accent-sage)]/30">
                    <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{e.event}</td>
                    <td className="py-[var(--space-sm)] pr-[var(--space-md)] text-[var(--color-text-primary)]">{e.when}</td>
                    <td className="py-[var(--space-sm)] pr-[var(--space-md)] text-[var(--color-text-primary)]">{e.where}</td>
                    <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]/70">{e.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-[var(--space-lg)] text-center">
            <Button href="/connect/events" variant="outline">
              Full Calendar &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3">
          {upcomingEvents.map((e) => (
            <Card key={e.event} as="article">
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">{e.event}</h3>
              <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-secondary)]">{e.date}</p>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{e.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-[var(--space-lg)] text-center">
          <Button href="/connect/events" variant="outline">
            View All Events &rarr;
          </Button>
        </div>
      </section>

      {/* Missions Partners */}
      <section className="bg-[var(--color-primary)] py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)] text-center text-[var(--color-text-white)]">Our Missions Partners</h2>
          <p className="mx-auto mb-[var(--space-xl)] max-w-2xl text-center text-[var(--color-text-white)]/70">
            We partner with six organisations across Mareeba, Indigenous Australia, and Borneo — Fulfilling the Acts 1:8 mandate: <em>&ldquo;You shall be witnesses to Me in Jerusalem, Judea, Samaria, and to the ends of the earth.&rdquo;</em>
          </p>
          <div className="grid grid-cols-1 gap-[var(--space-md)] md:grid-cols-2 lg:grid-cols-3">
            {missionsPartners.map((p) => (
              <div key={p.name} className="rounded-[var(--radius-md)] bg-white/10 p-[var(--space-lg)]">
                <h3 className="font-semibold text-[var(--color-accent-gold)]">{p.name}</h3>
                <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-white)]/80">{p.focus}</p>
                <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-white)]/60">{p.impact}</p>
              </div>
            ))}
          </div>
          <div className="mt-[var(--space-xl)] flex flex-wrap justify-center gap-[var(--space-md)]">
            <Button href="/connect/missions" variant="accent">
              Learn More &rarr;
            </Button>
            <Button href="/give?designation=missions" variant="outline" className="border-[var(--color-text-white)] text-[var(--color-text-white)] hover:bg-white/20">
              Give to Missions &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-4">
          <Button href="/connect/prayer" variant="primary" className="w-full text-center">
            Submit a Prayer Request &rarr;
          </Button>
          <Button href="/connect/groups" variant="secondary" className="w-full text-center">
            Find a Life Group &rarr;
          </Button>
          <Button href="/connect/serve" variant="secondary" className="w-full text-center">
            Join a Serve Team &rarr;
          </Button>
          <Button href="/give?designation=missions" variant="accent" className="w-full text-center">
            Give to Missions &rarr;
          </Button>
        </div>
      </section>

      {/* Find Your Place CTA */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h2>&ldquo;Find Your Place&rdquo; — Start Here</h2>
          <blockquote className="mx-auto max-w-xl border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] text-left italic text-[var(--color-text-primary)]">
            &ldquo;For as the body is one and has many members, but all the members of that one body, being many, are one body, so also is Christ.&rdquo;
            <br />
            <span className="not-italic text-[var(--color-secondary)]">— 1 Corinthians 12:12 (NKJV)</span>
          </blockquote>
          <div className="mt-[var(--space-xl)] flex flex-wrap justify-center gap-[var(--space-md)]">
            <Button href="/plan-your-visit" variant="primary">
              Plan Your Visit &rarr;
            </Button>
            <Button href="/connect/groups" variant="secondary">
              Find Your People &rarr;
            </Button>
            <Button href="/connect/serve" variant="secondary">
              Use Your Gifts &rarr;
            </Button>
            <Button href="/connect/prayer" variant="accent">
              Submit a Request &rarr;
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
