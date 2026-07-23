import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Prayer Page
   URL: /connect/prayer
   Confidential prayer request form and prayer ministry info
   ============================================ */

export const metadata: Metadata = {
  title: "Prayer Requests — Confidential Prayer Ministry",
  description:
    "Submit a confidential prayer request to our dedicated prayer team. We pray for healing, family, salvation, finances, and guidance. All requests handled with strict confidentiality.",
  openGraph: {
    title: "Prayer Requests — Confidential Prayer Ministry | Abundant Life Centre Mareeba",
    description:
      "Submit a confidential prayer request to our dedicated prayer team. All requests handled with strict confidentiality.",
  },
};

const prayerCategories = [
  { category: "Healing", description: "Physical, emotional, mental wholeness — God's healing power (James 5:14–15)" },
  { category: "Family", description: "Restoration, unity, protection, salvation of loved ones" },
  { category: "Salvation", description: "Those far from God — for hearts to be softened and eyes opened" },
  { category: "Financial", description: "Provision, wisdom, breakthrough in debt or employment" },
  { category: "Guidance", description: "Decision-making, clarity, direction from the Holy Spirit" },
  { category: "Grief", description: "Comfort, peace, and the presence of God in loss" },
  { category: "Other", description: "Anything else on your heart — no request is too small" },
];

const faqs = [
  {
    q: "Is my prayer request confidential?",
    a: "Yes. All requests are held in strict confidence. Only the prayer team sees them. Nothing is shared publicly without your explicit permission.",
  },
  {
    q: "Can I submit an anonymous request?",
    a: "Yes. You don't need to provide your name or contact details. If you'd like follow-up, please include an email or phone number.",
  },
  {
    q: "How long will you pray for my request?",
    a: "Our prayer team prays for active requests for 30 days. If you need ongoing prayer, please resubmit or contact the office.",
  },
  {
    q: "How do I join the prayer team?",
    a: "Contact the church office or speak with Ps Patricia Roos after a Sunday service. We'll invite you to the next monthly prayer meeting.",
  },
  {
    q: "What if I need urgent prayer?",
    a: "Call the church office: +61 7 4092 5004. For after-hours emergencies, we recommend Lifeline: 13 11 14.",
  },
  {
    q: "Do you pray for healing?",
    a: "Yes. We believe in divine healing (James 5:14–15; Isaiah 53:4–5). Our prayer team prays for physical, emotional, and spiritual wholeness.",
  },
];

export default function PrayerPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="bg-[var(--color-primary)] py-[var(--space-4xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            Prayer — We&apos;ll Pray With You
          </h1>
          <blockquote className="mx-auto max-w-xl border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] text-left italic text-[var(--color-text-white)]/80">
            &ldquo;If two of you agree on earth about anything that they may ask, it shall be done for them by My Father who is in heaven.&rdquo;
            <br />
            <span className="not-italic text-[var(--color-accent-gold)]">— Matthew 18:19 (NKJV)</span>
          </blockquote>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            We believe in the power of prayer. Our dedicated prayer team will uphold your request with faith and confidentiality. You&apos;re not alone — We&apos;ll agree together with you for breakthrough.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">How It Works</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-3">
          <Card hoverEffect={false} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-[var(--color-text-white)]">1</div>
            <h3 className="mt-[var(--space-md)] font-semibold text-[var(--color-primary)]">Submit</h3>
            <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">Fill out the form below. Choose a category so we can pray specifically.</p>
          </Card>
          <Card hoverEffect={false} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-[var(--color-text-white)]">2</div>
            <h3 className="mt-[var(--space-md)] font-semibold text-[var(--color-primary)]">Intercede</h3>
            <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">Our prayer team receives your request and prays over it.</p>
          </Card>
          <Card hoverEffect={false} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-[var(--color-text-white)]">3</div>
            <h3 className="mt-[var(--space-md)] font-semibold text-[var(--color-primary)]">Follow Up</h3>
            <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">If you&apos;ve asked for follow-up, a team member will contact you.</p>
          </Card>
        </div>
        <p className="mt-[var(--space-lg)] text-center text-sm font-medium text-[var(--color-secondary)]">
          All requests are confidential and won&apos;t be published on any public media.
        </p>
      </section>

      {/* Prayer Request Form */}
      <section id="prayer-form" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)] text-center">Submit a Prayer Request</h2>
          <form className="space-y-[var(--space-md)]" action="/api/prayer" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-primary)]">Your Name <span className="text-[var(--color-text-primary)]/50">(optional — anonymous requests accepted)</span></label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)]">Email <span className="text-[var(--color-text-primary)]/50">(optional — only if you want follow-up)</span></label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)]">Phone <span className="text-[var(--color-text-primary)]/50">(optional — for urgent pastoral care)</span></label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-[var(--color-text-primary)]">Category</label>
              <select id="category" name="category" className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none">
                <option value="">Select a category</option>
                {prayerCategories.map((c) => (
                  <option key={c.category} value={c.category.toLowerCase()}>{c.category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="request" className="block text-sm font-medium text-[var(--color-text-primary)]">Your Request</label>
              <textarea id="request" name="request" rows={5} className="mt-1 block w-full rounded-[var(--radius-md)] border-2 border-[var(--color-accent-sage)] px-[var(--space-md)] py-[var(--space-sm)] text-sm text-[var(--color-text-primary)] transition-colors focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(0,103,71,0.15)] focus:outline-none" placeholder="Share what's on your heart..." />
            </div>
            <div className="flex items-center gap-[var(--space-sm)]">
              <input type="checkbox" id="confidential" name="confidential" defaultChecked className="h-4 w-4 rounded border-[var(--color-accent-sage)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
              <label htmlFor="confidential" className="text-sm text-[var(--color-text-primary)]">Keep confidential (only shared with prayer team)</label>
            </div>
            <div className="pt-[var(--space-md)]">
              <Button type="submit" variant="primary" className="w-full">
                Submit My Request &rarr;
              </Button>
            </div>
          </form>
          <p className="mt-[var(--space-md)] text-center text-xs text-[var(--color-text-primary)]/50">
            Your request is held in strict confidence. Only the prayer team sees it.
          </p>
        </div>
      </section>

      {/* Prayer Categories */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Prayer Categories</h2>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
          {prayerCategories.map((c) => (
            <Card key={c.category} hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">{c.category}</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">{c.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Biblical Basis */}
      <section className="bg-[var(--color-primary)] py-[var(--space-3xl)]">
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="text-[var(--color-accent-gold)]">The Biblical Basis for Prayer</h2>
          <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
            <blockquote className="border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] italic text-[var(--color-text-white)]/80">
              &ldquo;Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will save the sick, and the Lord will raise him up.&rdquo;
              <br />
              <span className="not-italic text-[var(--color-accent-gold)]">— James 5:14–15 (NKJV)</span>
            </blockquote>
            <blockquote className="border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] italic text-[var(--color-text-white)]/80">
              &ldquo;If two of you agree on earth about anything that they may ask, it shall be done for them by My Father who is in heaven.&rdquo;
              <br />
              <span className="not-italic text-[var(--color-accent-gold)]">— Matthew 18:19 (NKJV)</span>
            </blockquote>
            <blockquote className="border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] italic text-[var(--color-text-white)]/80">
              &ldquo;Pray without ceasing.&rdquo;
              <br />
              <span className="not-italic text-[var(--color-accent-gold)]">— 1 Thessalonians 5:17 (NKJV)</span>
            </blockquote>
            <blockquote className="border-l-4 border-[var(--color-accent-gold)] pl-[var(--space-md)] italic text-[var(--color-text-white)]/80">
              &ldquo;The effective, fervent prayer of a righteous man avails much.&rdquo;
              <br />
              <span className="not-italic text-[var(--color-accent-gold)]">— James 5:16b (NKJV)</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Join the Prayer Team */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Join the Prayer Team</h2>
        <p className="mx-auto mb-[var(--space-xl)] max-w-xl text-center text-[var(--color-text-primary)]">
          Called to intercede? We&apos;re always looking for faithful prayer warriors to join our team.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-4">
          <Card hoverEffect={false} className="text-center">
            <h3 className="font-semibold text-[var(--color-primary)]">Commitment</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Pray for submitted requests weekly</p>
          </Card>
          <Card hoverEffect={false} className="text-center">
            <h3 className="font-semibold text-[var(--color-primary)]">Training</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Brief orientation on confidentiality and prayer protocol</p>
          </Card>
          <Card hoverEffect={false} className="text-center">
            <h3 className="font-semibold text-[var(--color-primary)]">Gathering</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">Monthly prayer meeting (first Wednesday, 7:00 pm)</p>
          </Card>
          <Card hoverEffect={false} className="text-center">
            <h3 className="font-semibold text-[var(--color-primary)]">Heart</h3>
            <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">A passion for seeing God move in people&apos;s lives</p>
          </Card>
        </div>
        <div className="mt-[var(--space-xl)] text-center">
          <Button href="/connect/serve#prayer-team" variant="primary">
            Join the Prayer Team &rarr;
          </Button>
        </div>
      </section>

      {/* Testimonies */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-xl)] text-center">Prayer Testimonies</h2>
          <p className="mb-[var(--space-xl)] text-center text-sm text-[var(--color-text-primary)]/70">
            God is answering prayer. Here are some recent answers (shared with permission):
          </p>
          <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
            <Card hoverEffect={false}>
              <blockquote className="italic text-[var(--color-text-primary)]">
                &ldquo;I submitted a prayer request for my son&apos;s salvation. Within three months, he started attending church with me. God is faithful!&rdquo;
              </blockquote>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-secondary)]">— Anonymous</p>
            </Card>
            <Card hoverEffect={false}>
              <blockquote className="italic text-[var(--color-text-primary)]">
                &ldquo;The prayer team prayed for my healing after surgery. I recovered faster than expected. Thank you, Jesus!&rdquo;
              </blockquote>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-secondary)]">— Name Withheld</p>
            </Card>
          </div>
          <p className="mt-[var(--space-lg)] text-center text-sm text-[var(--color-text-primary)]/70">
            Have a testimony to share? <a href="/contact-us?subject=prayer-testimony" className="font-medium text-[var(--color-primary)] underline">Let us know</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-2xl space-y-[var(--space-md)]">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-[var(--radius-md)] border border-[var(--color-accent-sage)] p-[var(--space-md)]">
              <summary className="cursor-pointer font-medium text-[var(--color-primary)] transition-colors group-open:text-[var(--color-primary)]">
                {faq.q}
              </summary>
              <p className="mt-[var(--space-sm)] text-sm text-[var(--color-text-primary)]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
