import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

/* ============================================
   Abundant Life Centre Mareeba — About Us
   URL: /about-us
   Leadership, history, ACC affiliation
   ============================================ */

export const metadata: Metadata = {
  title: "About Us — Leadership, History & Vision",
  description:
    "Meet Pastors Darryl & Patricia Roos, discover the 40+ year story of Abundant Life Centre Mareeba, and learn about our ACC affiliation. Leadership first.",
  openGraph: {
    title: "About Us — Leadership, History & Vision | Abundant Life Centre Mareeba",
    description:
      "Meet Pastors Darryl & Patricia Roos, discover the 40+ year story of Abundant Life Centre Mareeba, and learn about our ACC affiliation.",
  },
};

export default function AboutUsPage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--color-primary)] py-[var(--space-4xl)] lg:py-[var(--space-5xl)]">
        <Image
          src="/abundant-life-website/images/hero/about-us-hero.webp"
          alt="Abundant Life Centre Mareeba church congregation"
          fill
          priority
          className="object-cover object-[center_35%] -z-10"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 -z-[5]"
          style={{ backgroundColor: "color-mix(in oklab, #006747 65%, transparent)" }}
        />
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            About Us — Our Story, Our Leadership
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            Abundant Life Centre Mareeba is part of Australian Christian Churches (ACC), a fellowship formed in Easter 1937 from the Assemblies of God Queensland and the Pentecostal Church of Australia. For over four decades, we&apos;ve been a Spirit-filled community in Far North Queensland, rooted in the Bible and led by the Holy Spirit.
          </p>
        </div>
      </section>

      {/* Our Leadership */}
      <section id="our-leadership" className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">Our Leadership</h2>
        <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
          On the 6th of January 1997, <strong>Ps Darryl &amp; Patricia Roos</strong> accepted the Senior Pastors role and continue to lead the house today. Their tenure shows God&apos;s faithfulness and the strength of the ALC family.
        </p>
      </section>

      {/* Our History */}
      <section id="our-history" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">Our History</h2>
          <div className="space-y-[var(--space-lg)] text-[var(--color-text-primary)] leading-relaxed">
            <p>
              In 1983, Ps Neville &amp; Jenney Wedrat, who pastored Tableland Christian Faith Centre in Atherton, burned with a vision to plant an Assemblies of God Church in Mareeba. Meetings commenced in August 1983 on Sundays at 4pm at the Mareeba State High School, led by Ps Neville, Ps Jenney, and their team.
            </p>
            <p>
              Many people passionately served, sowed, and prayed into this vision until in 1985, Ps Barry &amp; Linda Wedrat were released from Calvary Church in Townsville to take responsibility of the work in Mareeba. By May 1985, meetings moved to Sunday mornings at the Mareeba State Primary School. They served faithfully until God called them to Townsville City Church in mid-1990.
            </p>
            <p>
              Ps Dennis &amp; Jane Lumley accepted the invitation to Mareeba and arrived in April 1991. In 1992, the church was renamed &ldquo;Abundant Life Centre,&rdquo; anchored in the promise of John 10:10b: <em>&ldquo;I have come that they may have life, and that they may have it more abundantly.&rdquo;</em> We became a registered church on the 19th of August 1992. Dennis &amp; Jane faithfully served until January 1997, when they joined Cairns Christian Centre (Freshwater).
            </p>
          </div>
        </div>
      </section>

      {/* Our Affiliation */}
      <section id="our-affiliation" className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">Our Affiliation</h2>
        <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
          We are proud to be part of <strong>Australian Christian Churches (ACC)</strong>, the largest Pentecostal denomination in Australia. ACC is a fellowship of churches committed to the Great Commission, the power of the Holy Spirit, and the authority of God&apos;s Word.
        </p>
      </section>

      {/* CTAs */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
            <Button href="/plan-your-visit" variant="primary">
              Plan Your Visit &rarr;
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
