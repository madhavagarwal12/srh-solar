import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Sizing & Subsidy Calculator — PM Surya Ghar ROI",
  description:
    "Calculate your exact rooftop solar capacity, monthly units generation, PM Surya Ghar subsidy (up to ₹78,000), 40% commercial depreciation, and 25-year cumulative savings with SRH Solar's calculator.",
  keywords: [
    "Solar Calculator India",
    "PM Surya Ghar Subsidy Calculator",
    "Solar Rooftop Sizing Calculator",
    "Rajasthan Solar Net Metering Savings",
    "Solar Payback Period Calculator",
    "Commercial Solar Depreciation Calculator",
  ],
  alternates: {
    canonical: "/calculator",
  },
  openGraph: {
    title: "Solar Sizing & Subsidy Calculator — PM Surya Ghar ROI | SRH Solar",
    description:
      "Instant, exact solar calculations based on your monthly electricity bill. Find out your payback period and government DBT subsidy eligibility.",
    url: "https://srh-solar.vercel.app/calculator",
    images: ["/assets/images/banner-1.jpg"],
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
