/* ============================================
   Abundant Life Centre Mareeba — Impact Section
   Missions and community impact cards
   ============================================ */

import Card from "@/components/Card";

const impactCards = [
  {
    title: "Community Markets",
    description:
      "Our markets bring the community together every 2nd and 5th Saturday, with all proceeds supporting local and international missions.",
    link: "/connect/events",
    linkText: "Market Dates",
  },
  {
    title: "Missions",
    description:
      "We support partners including IMLA and Living Waters, sharing the gospel locally and across the nations.",
    link: "/connect/missions",
    linkText: "Learn More",
  },
  {
    title: "Prayer Ministry",
    description:
      "Need prayer? Our team is here for you. Submit a confidential request and we'll stand with you in faith.",
    link: "/connect/prayer",
    linkText: "Submit a Request",
  },
];

export default function Impact() {
  return (
    <section
      className="py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <h2
          id="impact-heading"
          className="text-[var(--text-h2)] font-bold text-[var(--color-primary)] mb-[var(--space-lg)] text-center"
        >
          Our Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-xl)]">
          {impactCards.map((card) => (
            <Card key={card.title} as="div">
              <h3 className="text-[var(--text-h4)] font-semibold text-[var(--color-primary)] mb-[var(--space-sm)]">
                {card.title}
              </h3>
              <p className="text-[var(--text-body)] leading-[var(--leading-relaxed)] mb-[var(--space-md)]">
                {card.description}
              </p>
              <a
                href={card.link}
                className="text-[var(--color-primary)] font-semibold underline decoration-2 underline-offset-4 hover:text-[#005238] transition-colors"
              >
                {card.linkText} &rarr;
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
