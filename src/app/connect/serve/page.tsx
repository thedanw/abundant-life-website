import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Serve Page
   URL: /connect/serve
   Ministry teams, volunteer recruitment, and onboarding
   ============================================ */

export const metadata: Metadata = {
  title: "Serve Teams — Use Your Gifts",
  description:
    "Discover your place to serve at Abundant Life Centre Mareeba. Worship, kids, youth, hospitality, prayer, outreach, operations. Training provided. Apply in 5 minutes.",
  openGraph: {
    title: "Serve Teams — Use Your Gifts | Abundant Life Centre Mareeba",
    description:
      "Discover your place to serve at Abundant Life Centre Mareeba. Worship, kids, youth, hospitality, prayer, outreach, operations.",
  },
};

const ministryTeams = [
  {
    id: "worship",
    icon: "🎵",
    name: "Worship & Creative",
    description: "Leading the congregation into God's presence through music, media, and visual arts",
    roles: ["Musicians", "Vocalists", "Sound tech", "Lighting", "Video production"],
  },
  {
    id: "next-gen",
    icon: "🌱",
    name: "Next Gen (Kids & Youth)",
    description: "Discipling the next generation — Kids Church, Youth Group, Sunday School",
    roles: ["Teachers", "Helpers", "Mentors", "Blue Card holders"],
  },
  {
    id: "hospitality",
    icon: "☕",
    name: "Hospitality & First Impressions",
    description: "Creating a warm, welcoming environment for every person who walks through the door",
    roles: ["Welcome team", "Ushers", "Refreshments", "Parking", "Connect desk"],
  },
  {
    id: "prayer",
    icon: "🙏",
    name: "Prayer & Pastoral Care",
    description: "Standing in the gap for our church and community through intercession and care",
    roles: ["Prayer team", "Hospital visitors", "Meal coordinators", "Pastoral support"],
  },
  {
    id: "outreach",
    icon: "🌍",
    name: "Outreach & Missions",
    description: "Extending God's love beyond our walls — Mareeba Markets, community care, global missions",
    roles: ["Market volunteers", "Missions team", "Community outreach"],
  },
  {
    id: "operations",
    icon: "🔧",
    name: "Operations & Facilities",
    description: "Keeping the house of God running — maintenance, administration, tech, finance",
    roles: ["Maintenance", "Admin", "Tech support", "Finance"],
  },
];

const onboardingSteps = [
  { step: "Explore", description: "Attend a Sunday service, check out the teams, pray about where to serve", timeline: "Weeks 1–4" },
  { step: "Apply", description: "Complete the short application form below", timeline: "Week 5" },
  { step: "Connect", description: "Meet with a ministry leader to discuss your gifts and availability", timeline: "Week 6" },
  { step: "Train", description: "Role-specific training (Blue Card application if needed)", timeline: "Weeks 7–8" },
  { step: "Serve", description: "Join your team and start making a difference!", timeline: "Week 9+" },
];

export default function ServePage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Serve Teams — Find Your Place to Minister
          </h1>
          <blockquote className="mx-auto max-w-xl border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] text-left italic text-[var(--color-text-white)]/80">
            &ldquo;And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints for the work of ministry, for the edifying of the body of Christ.&rdquo;
            <br />
            <span className="not-italic text-[var(--color-accent-gold)]">— Ephesians 4:11–12 (NKJV)</span>
          </blockquote>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Everyone has a place to serve. The Bible says we are the Body of Christ — Each member with a special function, each person essential to the whole (1 Cor 12:12–27). Whether you&apos;re a first-timer or a seasoned minister, there&apos;s a team waiting for you.
          </p>
        </div>
      </section>

      {/* Ministry Teams Overview */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Our Ministry Teams</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2 lg:grid-cols-3">
          {ministryTeams.map((team) => (
            <Card key={team.id} as="article" className="flex flex-col">
              <h3 className="text-lg font-semibold text-[var(--color-primary)]">{team.name}</h3>
              <p className="mt-[var(--space-xs)] flex-1 text-sm text-[var(--color-text-primary)]">{team.description}</p>
              <div className="mt-[var(--space-sm)]">
                <p className="text-xs font-medium text-[var(--color-secondary)]">Roles Needed:</p>
                <ul className="mt-[var(--space-xs)] flex flex-wrap gap-1">
                  {team.roles.map((role) => (
                    <li key={role} className="rounded-full bg-[var(--color-accent-sage)]/30 px-[var(--space-sm)] py-[2px] text-xs text-[var(--color-text-primary)]">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[var(--space-md)]">
                <Button href={`#${team.id}`} variant="primary">
                  Learn More &rarr;
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Worship & Creative */}
      <section id="worship" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-md)]">Worship &amp; Creative Team</h2>
          <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)]">Leading God&apos;s people into His presence.</p>
          <blockquote className="mb-[var(--space-lg)] border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] italic text-[var(--color-text-primary)]/70">
            &ldquo;Praise Him with the sound of the trumpet, praise Him with the psaltery and harp. Praise Him with the timbrel and dance; praise Him with stringed instruments and flutes!&rdquo;
            <br />
            <span className="not-italic text-[var(--color-secondary)]">— Psalm 150:3–5 (NKJV)</span>
          </blockquote>
          <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Musicians</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Play in the worship team (Sunday 9:30 am). Proficiency on instrument, practice commitment.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Vocalists</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Lead worship songs. Ability to sing in key, team spirit.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Sound Tech</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Operate sound desk during services. Basic training provided.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Lighting</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Operate lighting during services. Basic training provided.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Video Production</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Livestream, recording, editing. Basic video skills preferred.</p>
            </Card>
          </div>
          <div className="mt-[var(--space-lg)]">
            <Button href="#application" variant="primary">
              Join the Worship Team &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Next Gen */}
      <section id="next-gen" className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-md)]">Next Gen (Kids &amp; Youth) Team</h2>
        <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)]">Investing in the next generation.</p>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Kids Church Teacher</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Lead age-appropriate teaching (5–12). Blue Card required.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Kids Church Helper</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Assist teachers, manage activities. Blue Card required.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Youth Leader</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Mentor and teach youth (13–18). Blue Card preferred.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Nursery Care</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Care for babies and toddlers (0–4). Blue Card required.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Sunday School</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Teach younger children (3–5). Blue Card required.</p>
          </Card>
        </div>
        <div className="mt-[var(--space-lg)] rounded-[var(--radius-md)] border border-[var(--color-accent-gold)] bg-[var(--color-accent-gold)]/10 p-[var(--space-md)]">
          <p className="text-sm font-medium text-[var(--color-text-black)]">
            <strong>Blue Card Requirement:</strong> All roles involving children and youth require a valid Working with Children Check (Blue Card). We&apos;ll help you apply.
          </p>
        </div>
        <div className="mt-[var(--space-lg)]">
          <Button href="#application" variant="primary">
            Join the Next Gen Team &rarr;
          </Button>
        </div>
      </section>

      {/* Hospitality */}
      <section id="hospitality" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-md)]">Hospitality &amp; First Impressions Team</h2>
          <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)]">Making every person feel at home.</p>
          <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Welcome Team</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Greet at the door, hand out welcome packs. One Sunday/month.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Ushers</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Seat people, manage communion, offering. One Sunday/month.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Refreshments</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Prepare and serve post-service tea/coffee. One Sunday/month.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Parking</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Direct traffic, manage accessible parking. One Sunday/month.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Connect Desk</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Answer questions, help newcomers find their way. One Sunday/month.</p>
            </Card>
          </div>
          <div className="mt-[var(--space-lg)]">
            <Button href="#application" variant="primary">
              Join the Hospitality Team &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Prayer & Pastoral Care */}
      <section id="prayer" className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-md)]">Prayer &amp; Pastoral Care Team</h2>
        <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)]">Standing in the gap for our church.</p>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-4">
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Prayer Team</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Pray for people after services, pray for submitted requests. Compassion, confidentiality.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Hospital Visits</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Visit sick and hospitalised members. Pastoral sensitivity.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Meal Coordinators</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Prepare meals for families in crisis. Cooking skills, flexibility.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Pastoral Support</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Assist pastors with care and follow-up. Maturity, discretion.</p>
          </Card>
        </div>
        <div className="mt-[var(--space-lg)]">
          <Button href="#application" variant="primary">
            Join the Prayer Team &rarr;
          </Button>
        </div>
      </section>

      {/* Outreach & Missions */}
      <section id="outreach" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-md)]">Outreach &amp; Missions Team</h2>
          <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)]">Extending God&apos;s love beyond our walls.</p>
          <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Mareeba Markets</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Setup, food prep, serving, pack-down. 2nd &amp; 5th Saturday.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Community Outreach</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">School support, aged care, crisis response. As needed.</p>
            </Card>
            <Card hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">Missions Team</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Coordinate short-term trips, partner communication. Ongoing.</p>
            </Card>
          </div>
          <div className="mt-[var(--space-lg)]">
            <Button href="#application" variant="primary">
              Join the Outreach Team &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* Operations & Facilities */}
      <section id="operations" className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-md)]">Operations &amp; Facilities Team</h2>
        <p className="mb-[var(--space-lg)] text-[var(--color-text-primary)]">Keeping the house of God running.</p>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-4">
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Maintenance</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Building upkeep, repairs, grounds. Practical skills.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Administration</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Office support, data entry, communications. Organisational skills.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Tech Support</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">IT, AV, livestream equipment. Technical aptitude.</p>
          </Card>
          <Card hoverEffect={false}>
            <h3 className="font-semibold text-[var(--color-primary)]">Finance</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Counting, recording, reporting. Attention to detail.</p>
          </Card>
        </div>
        <div className="mt-[var(--space-lg)]">
          <Button href="#application" variant="primary">
            Join the Operations Team &rarr;
          </Button>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="bg-[var(--color-primary)] py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)] text-center text-[var(--color-accent-gold)]">How to Get Started — 5-Step Onboarding</h2>
          <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-5">
            {onboardingSteps.map((s, i) => (
              <div key={s.step} className="rounded-[var(--radius-lg)] bg-white/10 p-[var(--space-lg)] text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-gold)] text-sm font-bold text-[var(--color-text-black)]">{i + 1}</div>
                <h3 className="mt-[var(--space-sm)] font-semibold text-[var(--color-accent-gold)]">{s.step}</h3>
                <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-white)]/80">{s.description}</p>
                <p className="mt-[var(--space-xs)] text-xs text-[var(--color-text-white)]/50">{s.timeline}</p>
              </div>
            ))}
          </div>
          <p className="mt-[var(--space-xl)] text-center text-sm text-[var(--color-text-white)]/70">
            No experience required for most roles. We provide training, mentoring, and ongoing support.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="mx-auto max-w-2xl px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Apply to Serve</h2>
        <form className="space-y-[var(--space-md)]" action="/api/serve" method="POST">
          <div>
            <label htmlFor="serve-name" className="block text-sm font-medium text-[var(--color-text-primary)]">Your Name</label>
            <input type="text" id="serve-name" name="name" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="serve-email" className="block text-sm font-medium text-[var(--color-text-primary)]">Email</label>
            <input type="email" id="serve-email" name="email" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="serve-phone" className="block text-sm font-medium text-[var(--color-text-primary)]">Phone</label>
            <input type="tel" id="serve-phone" name="phone" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" />
          </div>
          <div>
            <label htmlFor="serve-team" className="block text-sm font-medium text-[var(--color-text-primary)]">Team Interest</label>
            <select id="serve-team" name="team" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none">
              <option value="">Select a team</option>
              <option value="worship">Worship &amp; Creative</option>
              <option value="next-gen">Next Gen (Kids/Youth)</option>
              <option value="hospitality">Hospitality &amp; First Impressions</option>
              <option value="prayer">Prayer &amp; Pastoral Care</option>
              <option value="outreach">Outreach &amp; Missions</option>
              <option value="operations">Operations &amp; Facilities</option>
            </select>
          </div>
          <div>
            <label htmlFor="serve-experience" className="block text-sm font-medium text-[var(--color-text-primary)]">Experience <span className="text-[var(--color-text-primary)]/50">(optional)</span></label>
            <textarea id="serve-experience" name="experience" rows={3} className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" placeholder="Brief description of relevant skills..." />
          </div>
          <div>
            <label htmlFor="serve-availability" className="block text-sm font-medium text-[var(--color-text-primary)]">Availability</label>
            <select id="serve-availability" name="availability" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none">
              <option value="">Select availability</option>
              <option value="sunday">Sunday mornings</option>
              <option value="wednesday">Wednesday evenings</option>
              <option value="saturday">Saturdays</option>
              <option value="flexible">Flexible / Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="serve-bluecard" className="block text-sm font-medium text-[var(--color-text-primary)]">Blue Card Status</label>
            <select id="serve-bluecard" name="bluecard" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none">
              <option value="">Select status</option>
              <option value="yes">Yes, I have one</option>
              <option value="no">No, I need to apply</option>
              <option value="na">Not applicable</option>
            </select>
          </div>
          <div className="pt-[var(--space-md)]">
            <Button type="submit" variant="primary" className="w-full">
              Submit Application &rarr;
            </Button>
          </div>
        </form>
      </section>

      {/* Host/Lead Group anchors for cross-page links */}
      <div id="host-group" className="scroll-mt-20" />

      {/* Leadership Pathways */}
      <section id="lead-group" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)] text-center">Leadership Pathways</h2>
          <p className="mx-auto mb-[var(--space-xl)] max-w-xl text-center text-[var(--color-text-primary)]">
            Ready to lead? We&apos;ll equip you.
          </p>
          <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-4">
            <Card hoverEffect={false} className="text-center">
              <h3 className="font-semibold text-[var(--color-primary)]">Life Group Leader</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Host and facilitate a life group in your home or at church</p>
            </Card>
            <Card hoverEffect={false} className="text-center">
              <h3 className="font-semibold text-[var(--color-primary)]">Serve Team Leader</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Lead a ministry team (Worship, Kids, Hospitality, etc.)</p>
            </Card>
            <Card hoverEffect={false} className="text-center">
              <h3 className="font-semibold text-[var(--color-primary)]">Prayer Coordinator</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Coordinate the prayer team and intercession ministry</p>
            </Card>
            <Card hoverEffect={false} className="text-center">
              <h3 className="font-semibold text-[var(--color-primary)]">Missions Coordinator</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Oversee short-term trips and partner communication</p>
            </Card>
          </div>
          <div className="mt-[var(--space-xl)] text-center">
            <Button href="#application" variant="primary">
              Apply for Leadership &rarr;
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
