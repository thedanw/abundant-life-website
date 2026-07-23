/* ============================================
   Abundant Life Centre Mareeba — FAQ Section
   Common questions for first-time visitors
   ============================================ */

"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What time does the service start?",
    answer:
      "Our Sunday service runs from 9:30 am to 11:30 am. We recommend arriving a few minutes early to settle in.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're at 133 Walsh Street, Mareeba, QLD 4880. There is parking available on-site.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come as you are! There's no dress code — wear whatever is comfortable for you.",
  },
  {
    question: "Is there something for my kids?",
    answer:
      "Yes! We have children's activities during the service. Your family is welcome.",
  },
  {
    question: "How can I request prayer?",
    answer:
      "You can submit a confidential prayer request through our Prayer page, and our team will pray with you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-[var(--space-4xl)] px-[var(--space-lg)]"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <h2
          id="faq-heading"
          className="text-[var(--text-h2)] font-bold text-[var(--color-primary)] mb-[var(--space-lg)] text-center"
        >
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-[var(--color-accent-sage)]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left py-[var(--space-lg)] flex justify-between items-center gap-[var(--space-md)] cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="text-[var(--text-body-lg)] font-semibold text-[var(--color-text-primary)]">
                  {faq.question}
                </span>
                <span
                  className="text-[var(--color-primary)] text-[var(--text-h4)] font-bold shrink-0"
                  aria-hidden="true"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-[var(--space-lg)]">
                  <p className="text-[var(--text-body)] leading-[var(--leading-relaxed)] text-[var(--color-text-primary)]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
