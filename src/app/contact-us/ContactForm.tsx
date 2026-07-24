"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

/* ============================================
   Abundant Life Centre Mareeba — Contact Form
   Client component with useState for form fields
   ============================================ */

const subjectOptions = [
  "General Enquiry",
  "Plan Your Visit",
  "Prayer Request",
  "Baptism/Membership",
  "Wedding",
  "Funeral",
  "Pastoral Care",
  "Missions",
  "Media",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="bg-[var(--color-accent-sage)]/20 py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--space-md)] md:px-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xl)]">Send Us a Message</h2>

        {submitted ? (
          <Card as="div" className="max-w-2xl">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">Message Sent</h3>
            <p className="mt-[var(--space-sm)] text-[var(--color-text-primary)]">
              Thank you for reaching out. We aim to respond within 24 hours (business days). For urgent pastoral care, call the church office directly.
            </p>
            <div className="mt-[var(--space-lg)]">
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Send Another Message
              </Button>
            </div>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-[var(--space-lg)]">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text-primary)]">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-accent-sage)] bg-white px-[var(--space-md)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text-primary)]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-accent-sage)] bg-white px-[var(--space-md)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text-primary)]">
                Phone <span className="text-[var(--color-text-primary)]/50">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-accent-sage)] bg-white px-[var(--space-md)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text-primary)]">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-accent-sage)] bg-white px-[var(--space-md)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
              >
                {subjectOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-[var(--space-xs)] block text-sm font-medium text-[var(--color-text-primary)]">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-accent-sage)] bg-white px-[var(--space-md)] py-[var(--space-sm)] text-[var(--color-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
              />
            </div>

            <p className="text-sm text-[var(--color-text-primary)]/70">
              We aim to respond within 24 hours (business days). For urgent pastoral care, call the church office directly.
            </p>

            <Button type="submit" variant="primary">
              Send Message &rarr;
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
