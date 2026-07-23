import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Groups Page
   URL: /connect/groups
   Life groups, Bible studies, and demographic communities
   ============================================ */

export const metadata: Metadata = {
  title: "Life Groups & Communities — Find Your People",
  description:
    "Faith grows in circles, not rows. Find a life group, Bible study, or community at Abundant Life Centre Mareeba. Groups for every life stage and location.",
  openGraph: {
    title: "Life Groups & Communities — Find Your People | Abundant Life Centre Mareeba",
    description:
      "Faith grows in circles, not rows. Find a life group, Bible study, or community at Abundant Life Centre Mareeba.",
  },
};

const lifeGroups = [
  { name: "Walsh Street Life Group", leader: "Contact Church", when: "Wednesday, 6:30 pm", where: "Church Hall, Mareeba", description: "Open group — new people always welcome" },
  { name: "Atherton Life Group", leader: "Contact Church", when: "Thursday, 7:00 pm", where: "Home, Atherton", description: "Midweek encouragement and prayer" },
  { name: "Online Life Group", leader: "Contact Church", when: "Tuesday, 8:00 pm", where: "Zoom", description: "For those who can't attend in person" },
];

const bibleStudies = [
  { name: "Women's Bible Study", leader: "Contact Church", when: "Tuesday, 10:00 am", where: "Church Hall", focus: "Current study series" },
  { name: "Men's Bible Study", leader: "Contact Church", when: "Saturday, 7:00 am", where: "Café Mareeba", focus: "Breakfast and the Word" },
  { name: "Youth Bible Study", leader: "Contact Church", when: "Friday, 7:00 pm", where: "Youth Hall", focus: "Ages 13–18" },
];

const demographicGroups = [
  { name: "Men's Ministry", who: "All men", when: "1st Saturday, 7:30 am", description: "Breakfast, fellowship, accountability" },
  { name: "Women's Ministry", who: "All women", when: "2nd Tuesday, 10:00 am", description: "Coffee, connection, encouragement" },
  { name: "Youth Group", who: "Ages 13–18", when: "Friday, 7:00 pm", description: "Games, worship, teaching, community" },
  { name: "Seniors Fellowship", who: "Over 60s", when: "3rd Thursday, 10:00 am", description: "Morning tea, devotions, fellowship" },
];

const leadershipSteps = [
  { step: "Explore", description: "Attend a life group for 3+ months" },
  { step: "Apply", description: "Complete the Group Leader application" },
  { step: "Connect", description: "Meet with Ps Darryl or ministry leader" },
  { step: "Train", description: "4-week Group Leader training course" },
  { step: "Launch", description: "Start your group with ongoing coaching and support" },
];

export default function GroupsPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Groups — Find Your People
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Faith grows in circles, not rows. The Bible says we are the Body of Christ — Each member with a special function, each person belonging to the family (1 Cor 12:12–27). Life groups are where real community happens.
          </p>
        </div>
      </section>

      {/* Life Groups */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Life Groups</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3">
          {lifeGroups.map((g) => (
            <Card key={g.name} as="article">
              <h3 className="font-semibold text-[var(--color-primary)]">{g.name}</h3>
              <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-secondary)]">{g.when}</p>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]/70">{g.where}</p>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{g.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-[var(--space-lg)]">
          <p className="mb-[var(--space-sm)] text-sm font-medium text-[var(--color-primary)]">What happens in a Life Group?</p>
          <ul className="list-inside list-disc text-sm text-[var(--color-text-primary)]/70">
            <li>Welcome and fellowship (30 min)</li>
            <li>Bible study and discussion (45 min)</li>
            <li>Prayer together (15 min)</li>
          </ul>
        </div>
        <div className="mt-[var(--space-xl)]">
          <Button href="#join" variant="primary">
            Join a Life Group &rarr;
          </Button>
        </div>
      </section>

      {/* Bible Study Groups */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)]">Bible Study Groups</h2>
          <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3">
            {bibleStudies.map((g) => (
              <Card key={g.name} as="article">
                <h3 className="font-semibold text-[var(--color-primary)]">{g.name}</h3>
                <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-secondary)]">{g.when}</p>
                <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]/70">{g.where}</p>
                <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{g.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demographic Groups */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Demographic Groups</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] sm:grid-cols-2">
          {demographicGroups.map((g) => (
            <Card key={g.name} as="article">
              <h3 className="font-semibold text-[var(--color-primary)]">{g.name}</h3>
              <p className="mt-[var(--space-xs)] text-sm font-medium text-[var(--color-secondary)]">{g.when}</p>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]/70">{g.who}</p>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{g.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* No Group Fits */}
      <section className="bg-[var(--color-primary)] py-[var(--space-3xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h2 className="text-[var(--color-accent-gold)]">No Group Fits?</h2>
          <p className="text-[var(--color-text-white)]/80">
            Consider hosting one. If there&apos;s a gap in our group directory, we&apos;d love to help you start something new.
          </p>
          <div className="mt-[var(--space-xl)] flex flex-wrap justify-center gap-[var(--space-md)]">
            <Button href="/connect/serve#host-group" variant="accent">
              Host a Group &rarr;
            </Button>
            <Button href="/connect/serve#lead-group" variant="outline" className="border-[var(--color-text-white)] text-[var(--color-text-white)] hover:bg-white/20">
              Lead a Group &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Pathway */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Leadership Pathway</h2>
        <p className="mx-auto mb-[var(--space-xl)] max-w-xl text-center text-[var(--color-text-primary)]">
          Ready to lead? We&apos;ll equip you.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-5">
          {leadershipSteps.map((s, i) => (
            <Card key={s.step} hoverEffect={false} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[var(--color-text-white)]">{i + 1}</div>
              <h3 className="mt-[var(--space-sm)] font-semibold text-[var(--color-primary)]">{s.step}</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">{s.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-[var(--space-xl)] text-center">
          <Button href="/connect/serve#lead-group" variant="primary">
            Apply to Lead &rarr;
          </Button>
        </div>
      </section>

      {/* Find Your Place CTA */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h2>&ldquo;Find Your Place in the Body&rdquo;</h2>
          <blockquote className="mx-auto max-w-xl border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] text-left italic text-[var(--color-text-primary)]">
            &ldquo;For as the body is one and has many members, but all the members of that one body, being many, are one body, so also is Christ.&rdquo;
            <br />
            <span className="not-italic text-[var(--color-secondary)]">— 1 Corinthians 12:12 (NKJV)</span>
          </blockquote>
          <p className="text-[var(--color-text-primary)]">
            Your gifts, your story, your family — They all matter to God. Find the group where you belong.
          </p>
          <div className="mt-[var(--space-xl)] flex flex-wrap justify-center gap-[var(--space-md)]">
            <Button href="#group-finder" variant="primary">
              Find Your Group &rarr;
            </Button>
            <Button href="/plan-your-visit" variant="secondary">
              Plan Your Visit &rarr;
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
