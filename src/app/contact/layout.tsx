import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Book Free Rooftop Solar Survey | Jaipur, Rajasthan",
  description:
    "Schedule an on-site structural engineering roof assessment or connect directly via WhatsApp (+91 9602609608). Visit our head office in Mansarovar, Jaipur.",
  keywords: [
    "Book Solar Rooftop Survey Jaipur",
    "Solar EPC Company Contact",
    "SRH Solar Jaipur Address",
    "Free Solar Inspection Rajasthan",
    "Solar Consultation WhatsApp",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book Free Solar Rooftop Survey | SRH Solar Jaipur",
    description:
      "Get a customized 3D solar layout, structural load verification, and government subsidy consultation for your home or factory.",
    url: "https://srh-solar.vercel.app/contact",
    images: ["/assets/images/contact-us-image.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
