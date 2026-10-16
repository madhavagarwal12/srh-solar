import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Insights & Engineering Guides — PM Surya Ghar & Tariffs",
  description:
    "Expert articles on solar policy, PM Surya Ghar central subsidies, Rajasthan DISCOM net-metering regulations, solar water pumping, and technical battery comparisons.",
  keywords: [
    "Solar Energy Blog India",
    "PM Surya Ghar Guide",
    "Rajasthan Net Metering Rules",
    "On Grid vs Off Grid Solar Comparison",
    "Solar Agricultural Water Pumps Guide",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Solar Insights & Engineering Guides | SRH Solar Knowledge Hub",
    description:
      "Deep technical guides and policy breakdowns to help Indian homeowners, farmers, and commercial facility managers maximize solar returns.",
    url: "https://srh-solar.vercel.app/blog",
    images: ["/assets/images/banner-1.jpg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
