import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/SkipLink";
import "./globals.css";

/* ============================================
   Abundant Life Centre Mareeba — Root Layout
   Font: DM Sans (all typography)
   ============================================ */

const dmSans = DM_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abundant Life Centre Mareeba | Church in Mareeba, QLD",
    template: "%s | Abundant Life Centre Mareeba",
  },
  description:
    "Welcome to Abundant Life Centre Mareeba — a spirit-filled, evangelical church in the heart of Mareeba, Queensland. Join us for worship, community, and encounters with God.",
  keywords: [
    "church",
    "Mareeba",
    "QLD",
    "Christian",
    "Pentecostal",
    "worship",
    "community",
    "Abundant Life",
  ],
  authors: [{ name: "Abundant Life Centre Mareeba" }],
  icons: {
    icon: [
      { url: "/abundant-life-website/images/brand/AbundantLife-Emblem.svg", type: "image/svg+xml" },
    ],
    apple: "/abundant-life-website/images/brand/AbundantLife-Emblem.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Abundant Life Centre Mareeba",
    title: "Abundant Life Centre Mareeba | Church in Mareeba, QLD",
    description:
      "Welcome to Abundant Life Centre Mareeba — a spirit-filled, evangelical church in the heart of Mareeba, Queensland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <head>
        {/* SEO: Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "Abundant Life Centre Mareeba",
              alternateName: "ALC Mareeba",
              description:
                "A spirit-filled, evangelical church in the heart of Mareeba, Queensland. Join us for worship, community, and encounters with God.",
              url: "https://www.abundantlifemareeba.org.au",
              logo: "https://www.abundantlifemareeba.org.au/images/brand/AbundantLife-Logo_landscape.svg",
              image: "https://www.abundantlifemareeba.org.au/images/hero/",
              telephone: "+61-7-4092-1383",
              email: "office@abundantlifemareeba.org.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "133-137 Walsh Street",
                addressLocality: "Mareeba",
                addressRegion: "QLD",
                postalCode: "4880",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -17.0,
                longitude: 145.42,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "09:00",
                  closes: "10:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "18:00",
                  closes: "19:30",
                },
              ],
              sameAs: [
                "https://www.facebook.com/abundantlifemareeba",
                "https://www.youtube.com/@abundantlifemareeba",
                "https://www.instagram.com/abundantlifemareeba",
              ],
            }),
          }}
        />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/abundant-life-website/images/brand/AbundantLife-Emblem.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/abundant-life-website/images/brand/AbundantLife-Emblem-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/abundant-life-website/images/brand/AbundantLife-Emblem-180.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
