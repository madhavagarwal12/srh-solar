import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Engineering A Greener, Independent Future",
  description:
    "Learn about SRH Green Energy Pvt. Ltd. (SRH Solar): 5+ years of in-house EPC expertise, 2.5MW+ installed solar capacity, 450+ completed installations, and our 4 Pillars of Engineering Excellence.",
  keywords: [
    "About SRH Solar",
    "SRH Green Energy Pvt Ltd",
    "Solar EPC Company Jaipur",
    "Solar Engineers Rajasthan",
    "Certified Solar EPC Contractor",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About SRH Solar — 5+ Years In-House EPC Engineering Excellence",
    description:
      "Founded with a clear vision: making clean solar electricity affordable, reliable, and accessible for homes, businesses, and farms across India.",
    url: "https://srh-solar.vercel.app/about",
    images: ["/assets/images/IMG_20191016_171817.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
