import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar EPC Services — On-Grid, Off-Grid, Hybrid & Solar Water Pumps",
  description:
    "Explore SRH Solar's complete turnkey EPC offerings: grid-tied rooftop solar, off-grid battery systems, hybrid energy storage, solar agricultural pumps, street lighting, and commercial power plants.",
  keywords: [
    "On Grid Solar System Jaipur",
    "Off Grid Solar Photovoltaic System",
    "Hybrid Solar System Rajasthan",
    "Solar Power Water Pump Bright Solar",
    "Solar Street Lighting Jaipur",
    "Turnkey Solar EPC Contractor Rajasthan",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Solar EPC Services — On-Grid, Off-Grid, Hybrid & Solar Pumps | SRH Solar",
    description:
      "Engineered for maximum kilowatt-hour yield and extreme weather durability. Backed by 25-year performance warranties and DISCOM net-metering approvals.",
    url: "https://srh-solar.vercel.app/services",
    images: ["/assets/images/Grid-connected-PV-system.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
