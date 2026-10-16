import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { COMPANY_DETAILS, FAQS_DATA } from "@/data/siteData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600"],
});

const BASE_URL = "https://srh-solar.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0d1f18",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SRH Solar — Leading Solar EPC & Rooftop Solutions in Jaipur, Rajasthan",
    template: "%s | SRH Solar",
  },
  description:
    "Top-rated Solar EPC company in Jaipur, Rajasthan. Offering On-Grid, Off-Grid, Hybrid solar systems, solar water pumps, and industrial rooftop power plants with PM Surya Ghar DBT subsidies up to ₹78,000.",
  keywords: [
    "Solar EPC Jaipur",
    "Rooftop Solar Rajasthan",
    "PM Surya Ghar Muft Bijli Yojana Subsidy",
    "On Grid Solar System Jaipur",
    "Off Grid Solar System",
    "Hybrid Solar Inverter",
    "Solar Water Pump Bright Solar",
    "Commercial Solar EPC Jaipur",
    "Solar Panel Installation Rajasthan",
    "JVVNL Solar Net Metering",
    "SRH Green Energy Pvt Ltd",
    "Solar Sizing Calculator India",
  ],
  authors: [{ name: "SRH Green Energy Pvt. Ltd.", url: BASE_URL }],
  creator: "SRH Green Energy Pvt. Ltd.",
  publisher: "SRH Green Energy Pvt. Ltd.",
  applicationName: "SRH Solar",
  category: "Renewable Energy",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/assets/images/srhlogo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/images/srhlogo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/assets/images/srhlogo.png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "SRH Solar",
    title: "SRH Solar — Leading Solar EPC & Rooftop Solutions in Jaipur, Rajasthan",
    description:
      "Cut electricity bills by up to 90% with Tier-1 solar rooftop installations, MNRE-certified inverters, and central subsidies up to ₹78,000 under PM Surya Ghar.",
    images: [
      {
        url: "/assets/images/banner-1.jpg",
        width: 1200,
        height: 630,
        alt: "SRH Solar Turnkey EPC Installation in Rajasthan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRH Solar — Best Solar Services EPC Company",
    description:
      "India's premium solar EPC company. Calculate solar savings, subsidies, and schedule a free roof assessment in Jaipur, Rajasthan.",
    images: ["/assets/images/banner-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness & SolarEnergyService
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SolarEnergyService",
    "@id": `${BASE_URL}/#organization`,
    name: "SRH Solar (SRH Green Energy Pvt. Ltd.)",
    alternateName: "SRH Solar",
    legalName: "SRH Green Energy Pvt. Ltd.",
    url: BASE_URL,
    logo: `${BASE_URL}/assets/images/srhlogo.png`,
    image: `${BASE_URL}/assets/images/banner-1.jpg`,
    description:
      "India's leading solar Engineering, Procurement, and Construction (EPC) firm headquartered in Jaipur, Rajasthan. Specializing in On-Grid, Off-Grid, and Hybrid solar solutions.",
    telephone: COMPANY_DETAILS.phoneNumbers[0],
    email: COMPANY_DETAILS.email,
    foundingDate: "2021",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 9, Mansarovar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302020",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.8530",
      longitude: "75.7673",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      COMPANY_DETAILS.socials.youtube,
      COMPANY_DETAILS.socials.instagram,
      COMPANY_DETAILS.socials.facebook,
    ],
  };

  // Schema.org WebSite with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "SRH Solar",
    description: "Official portal for SRH Solar engineering solutions and solar subsidy calculators.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: "en-IN",
  };

  // Schema.org FAQPage for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${playfair.variable} ${caveat.variable} bg-forest-900 text-white font-sans antialiased selection:bg-lime-400 selection:text-forest-950`}
      >
        {children}
      </body>
    </html>
  );
}
