import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Turnkey EPC Conditions",
  description:
    "Engineering, Procurement, Commissioning (EPC) guidelines, 25-year module warranties, inverter terms, and DISCOM net-metering synchronization conditions.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
