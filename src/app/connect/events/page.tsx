import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Events Page
   URL: /connect/events
   Events calendar with weekly, monthly, and annual gatherings
   ============================================ */

export const metadata: Metadata = {
  title: "Events Calendar — Services, Conferences & Community",
  description:
    "What's happening at Abundant Life Centre Mareeba. Sunday 9:30am worship, midweek prayer, youth group, men's/women's ministries, Mareeba Markets, Apostolic Conference.",
  openGraph: {
    title: "Events Calendar — Services, Conferences & Community | Abundant Life Centre Mareeba",
    description:
      "What's happening at Abundant Life Centre Mareeba. Sunday 9:30am worship, midweek prayer, youth group, men's/women's ministries, Mareeba Markets, Apostolic Conference.",
  },
};

const weeklyGatherings = [
  { event: "Sunday Worship", when: "Every Sunday, 9:30 am – 11:30 am", where: "Main Sanctuary", who: "Everyone" },
  { event: "Kids Church", when: "Every Sunday, 9:30 am (during sermon)", where: "Kids' Hall", who: "Ages 5–12" },
  { event: "Midweek Prayer", when: "Every Wednesday, 7:00 pm", where: "Chapel", who: "Everyone" },
  { event: "Youth Group", when: "Every Friday, 7:00 pm", where: "Youth Hall", who: "Ages 13–18" },
];

const monthlyGatherings = [
  { event: "Men's Breakfast", when: "1st Saturday, 7:30 am", where: "Church Hall", who: "All men" },
  { event: "Women's Ministry", when: "2nd Tuesday, 10:00 am", where: "Church Hall", who: "All women" },
  { event: "Mareeba Markets", when: "2nd & 5th Saturday, 7:30 am – 12:00 pm", where: "100 Park, Mareeba", who: "Everyone" },
  { event: "Missions Prayer", when: "Last Sunday, 5:00 pm", where: "Chapel", who: "Missions-minded" },
];

const annualEvents = [
  { event: "Apostolic Conference", when: "September 2026 (Dates TBC)", description: "Guest speakers, prophetic ministry, equipping." },
  { event: "Easter Services", when: "Good Friday + Easter Sunday", description: "Special services, communion, baptisms." },
  { event: "Christmas Services", when: "Christmas Eve + Christmas Day", description: "Carols, community outreach, celebration." },
];

export default function EventsPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Events — What&apos;s Happening at ALC
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            There&apos;s always something happening at Abundant Life Centre. From Sunday worship to midweek prayer, youth group to community markets — Find your place in the family.
          </p>
        </div>
      </section>

      {/* Weekly Gatherings */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Weekly Gatherings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-accent-sage)]">
                <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Event</th>
                <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">When</th>
                <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Where</th>
                <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Who</th>
              </tr>
            </thead>
            <tbody>
              {weeklyGatherings.map((g) => (
                <tr key={g.event} className="border-b border-[var(--color-accent-sage)]/30">
                  <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{g.event}</td>
                  <td className="py-[var(--space-sm)] pr-[var(--space-md)] text-[var(--color-text-primary)]">{g.when}</td>
                  <td className="py-[var(--space-sm)] pr-[var(--space-md)] text-[var(--color-text-primary)]">{g.where}</td>
                  <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]/70">{g.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-[var(--space-lg)]">
          <Button href="/plan-your-visit" variant="primary">
            Plan Your Visit &rarr;
          </Button>
        </div>
      </section>

      {/* Monthly Gatherings */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)]">Monthly Gatherings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-accent-sage)]">
                  <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Event</th>
                  <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">When</th>
                  <th className="py-[var(--space-sm)] pr-[var(--space-md)] font-semibold text-[var(--color-primary)]">Where</th>
                  <th className="py-[var(--space-sm)] font-semibold text-[var(--color-primary)]">Who</th>
                </tr>
              </thead>
              <tbody>
                {monthlyGatherings.map((g) => (
                  <tr key={g.event} className="border-b border-[var(--color-accent-sage)]/30">
                    <td className="py-[var(--space-sm)] pr-[var(--space-md)] font-medium text-[var(--color-text-primary)]">{g.event}</td>
                    <td className="py-[var(--space-sm)] pr-[var(--space-md)] text-[var(--color-text-primary)]">{g.when}</td>
                    <td className="py-[var(--space-sm)] pr-[var(--space-md)] text-[var(--color-text-primary)]">{g.where}</td>
                    <td className="py-[var(--space-sm)] text-[var(--color-text-primary)]/70">{g.who}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Annual Events</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3">
          {annualEvents.map((e) => (
            <Card key={e.event} as="article">
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">{e.event}</h3>
              <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-secondary)]">{e.when}</p>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{e.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Apostolic Conference */}
      <section className="bg-[var(--color-primary)] py-[var(--space-3xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="text-[var(--color-accent-gold)]">Featured Event: Abundant Life Apostolic Conference</h2>
          <p className="text-[var(--color-text-white)]/70">
            <strong className="text-[var(--color-text-white)]">September 2026 (Dates TBC)</strong> | Abundant Life Centre, Mareeba
          </p>
          <div className="mt-[var(--space-lg)] rounded-[var(--radius-md)] bg-white/10 p-[var(--space-lg)]">
            <p className="text-[var(--color-text-white)]/80">
              As a 15-year-old, John found Christ and from a young age sought the Lord for wisdom and understanding. He has been preaching since his late teens and has been in ministry for over 30 years. He has a passion to see the church equipped and empowered to fulfil the Great Commission. He carries a strong apostolic and prophetic anointing and has ministered extensively across Australia and internationally.
            </p>
          </div>
          <h3 className="mt-[var(--space-lg)] text-[var(--color-accent-gold)]">What to Expect</h3>
          <ul className="text-[var(--color-text-white)]/80">
            <li>Friday evening — Opening session, prophetic ministry</li>
            <li>Saturday — Workshops, equipping sessions, Q&amp;A</li>
            <li>Sunday morning — Guest speaker at Sunday worship</li>
          </ul>
          <p className="mt-[var(--space-md)] text-[var(--color-text-white)]/70">
            <strong className="text-[var(--color-text-white)]">Registration:</strong> Free entry.
          </p>
          <div className="mt-[var(--space-lg)] flex flex-wrap gap-[var(--space-md)]">
            <Button href="/contact-us?subject=Apostolic%20Conference%20Registration" variant="accent">
              Register Now &rarr;
            </Button>
            <Button href="/plan-your-visit" variant="outline" className="border-[var(--color-text-white)] text-[var(--color-text-white)] hover:bg-white/20">
              Plan Your Visit &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Mareeba Markets */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-md)]">Mareeba Markets — Community Outreach</h2>
        <Card hoverEffect={false}>
          <p className="font-medium text-[var(--color-secondary)]">
            Every 2nd &amp; 5th Saturday | 7:30 am – 12:00 pm | 100 Park, Mareeba
          </p>
          <p className="mt-[var(--space-sm)] text-[var(--color-text-primary)]">
            Come for the best bacon &amp; egg burger in town — Stay for the community. All proceeds fund ALC missions partnerships across the Tablelands and beyond.
          </p>
          <div className="mt-[var(--space-md)]">
            <Button href="/connect/missions" variant="primary">
              Learn More About Missions &rarr;
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
