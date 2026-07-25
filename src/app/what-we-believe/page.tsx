import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — What We Believe
   URL: /what-we-believe
   Statement of Faith, worship, spiritual gifts, communion
   ============================================ */

export const metadata: Metadata = {
  title: "What We Believe — Pentecostal Statement of Faith",
  description:
    "Explore the core beliefs of Abundant Life Centre Mareeba: Trinity, salvation, Holy Spirit baptism, healing, spiritual gifts, and end times. Part of Australian Christian Churches (ACC).",
  openGraph: {
    title: "What We Believe — Pentecostal Statement of Faith | Abundant Life Centre Mareeba",
    description:
      "Explore the core beliefs of Abundant Life Centre Mareeba: Trinity, salvation, Holy Spirit baptism, healing, spiritual gifts, and end times.",
  },
};

const statementOfFaith = [
  {
    article: "The Bible",
    text: "The Bible is the inspired and only infallible and authoritative Word of God.",
    ref: "2 Tim 3:16; 2 Pet 1:19-21",
  },
  {
    article: "The Trinity",
    text: "There is one God, eternally existent in three Persons: God the Father, God the Son and God the Holy Spirit.",
    ref: "Mat 28:19; 2 Cor 13:14",
  },
  {
    article: "Jesus Christ",
    text: "In the Deity of our Lord Jesus Christ, His virgin birth, His sinless life, miracles, His vicarious and atoning death, His bodily resurrection, His ascension to the right hand of the Father, His personal future return to this earth in power and in glory to rule for a thousand years.",
  },
  {
    article: "The Blessed Hope",
    text: "In the blessed hope: The rapture of the church at Christ's coming. The resurrection of the saved and lost, the one to everlasting life and the other to everlasting damnation.",
    ref: "1 Thess 4:17; Dan 12:2; John 11:25-26",
  },
  {
    article: "Salvation",
    text: "The only way to be cleansed from sin is through repentance and faith in the precious blood of Christ.",
    ref: "Eph 1:7",
  },
  {
    article: "Regeneration",
    text: "Regeneration by the Holy Spirit is absolutely essential for personal salvation.",
    ref: "John 1:3; 3:3",
  },
  {
    article: "Baptism of the Holy Spirit",
    text: "The baptism of the Holy Spirit is given to believers who ask.",
    ref: "Acts 2:4; Luke 11:13",
  },
  {
    article: "Spiritual Gifts",
    text: "In the present day reality of the supernatural operations of the gifts of the Holy Spirit.",
    ref: "1 Cor 12:8-10",
  },
  {
    article: "Divine Healing",
    text: "The redemptive work of Christ on the cross provides healing for the body in answer to believing prayer.",
    ref: "Isaiah 53:4-5; Mat 8:17",
  },
  {
    article: "Baptism & Communion",
    text: "In the observance of Christian Baptism by immersion and the Lord's Supper.",
    ref: "Matt 28:19; Acts 2:38",
  },
];

export default function WhatWeBelievePage() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--color-primary)] py-[var(--space-4xl)] lg:py-[var(--space-5xl)]">
        <Image
          src="/abundant-life-website/images/hero/what-we-believe-hero.webp"
          alt="Bible verse background — I am the way the truth and the life John 14:6"
          fill
          priority
          className="object-cover -z-10"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 -z-[5]"
          style={{ backgroundColor: "color-mix(in oklab, #006747 65%, transparent)" }}
        />
        <div className="prose mx-auto max-w-[var(--container-max)] px-[var(--space-md)] text-center md:px-[var(--space-xl)]">
          <h1 className="text-[var(--color-text-white)]">
            What We Believe — Statement of Faith
          </h1>
          <p className="mx-auto mt-[var(--space-md)] max-w-2xl text-lg text-[var(--color-text-white)]/80">
            The foundation of our belief is the Holy Trinity: The Father, Son &amp; Holy Spirit. That Jesus died and was risen from the dead on the third day. We are part of Australian Christian Churches (ACC).
          </p>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)] text-center">Statement of Faith</h2>
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
          {statementOfFaith.map((item) => (
            <Card key={item.article} hoverEffect={false}>
              <h3 className="font-semibold text-[var(--color-primary)]">{item.article}</h3>
              <p className="mt-[var(--space-xs)] text-sm text-[var(--color-text-primary)]">{item.text}</p>
              {item.ref && (
                <p className="mt-[var(--space-xs)] text-xs text-[var(--color-secondary)]">{item.ref}</p>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Gathering Together */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">Gathering Together as Christ&apos;s Body</h2>
          <div className="space-y-[var(--space-md)] text-[var(--color-text-primary)] leading-relaxed">
            <p>
              One of the most fulfilling experiences in the life of a believer is to gather together to worship God with other Christians. The Bible uses expressions such as &ldquo;the Family of God&rdquo; and the &ldquo;Body of Christ&rdquo; to depict the beautiful relationship of love and commitment that Christians have for each other under the Lordship of Jesus, who is the head of the Church.
            </p>
            <p>
              As members of the Family of God, it is imperative that we gather together to fulfill our family role. The writer of the book of Hebrews stresses that we should not forsake our gathering together (Heb 10:25). We believe that nothing can substitute for the Body gathering together for the purpose of worship, ministry and fellowship.
            </p>
            <p>
              The purpose of our gathering is three-fold. Firstly, to minister to God in worship, praise and adoration. Secondly, to minister that we might be equipped to minister to the world. Thirdly, to fellowship with one another.
            </p>
          </div>
        </div>
      </section>

      {/* Worship */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-lg)]">Our Pattern of Worship</h2>
        <div className="space-y-[var(--space-md)] text-[var(--color-text-primary)] leading-relaxed">
          <p>
            Our pattern of worship is established for us in the Bible: &ldquo;But the hour is coming, and now is, when the true worshipers shall worship the Father in spirit and in truth; for such people, the Father seeks to be His worshipers. God is spirit and those who worship Him must worship in spirit and in truth&rdquo; (John 4:23-24).
          </p>
          <p>
            We believe that in order to worship God in spirit, we must worship Him with our entire being. So, we clap our hands, lift our voice and sing songs of praise unto God. Our worship forms are built on the Bible pattern.
          </p>
          <p>
            Along with audible and joyful praise and worship to God, the psalmist encourages us to have time in silent prayer and meditation: &ldquo;Be still and know that I am God&rdquo; (Ps 46:10).
          </p>
        </div>
      </section>

      {/* Communion */}
      <section className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
          <h2 className="mb-[var(--space-lg)]">Communion</h2>
          <p className="max-w-3xl text-[var(--color-text-primary)] leading-relaxed">
            A very essential part of our worship as the Body of Christ is in the sharing of communion. The communion bread represents Jesus&apos; broken body and the wine represents His shed blood. In partaking of these representative elements, Christians reflect on the supreme sacrifice Jesus Christ made when He died on the cross for our sin (Matt 26:26-29). The only qualification for enjoying communion with us is that you are a believer. As a believer, please join us in this celebration as we remember our Lord Jesus Christ.
          </p>
        </div>
      </section>

      {/* CTAs */}
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] py-[var(--space-3xl)] text-center md:px-[var(--space-xl)]">
        <div className="flex flex-wrap justify-center gap-[var(--space-md)]">
          <Button href="/plan-your-visit" variant="primary">
            Plan Your Visit &rarr;
          </Button>
          <Button href="/about-us" variant="outline">
            About Us &rarr;
          </Button>
        </div>
      </section>
    </main>
  );
}
