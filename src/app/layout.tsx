import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { COMPANY_DETAILS } from "@/data/siteData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["italic", "normal"],
  weight: ["400", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${COMPANY_DETAILS.brandName} — Best Solar Services EPC Company | Jaipur, Rajasthan`,
  description:
    "India's premium EPC & O&M solar company. Providing On-Grid, Off-Grid, Hybrid solar systems, solar water pumps, and street lights with PM Surya Ghar subsidies.",
  keywords: [
    "Solar EPC Jaipur",
    "Rooftop Solar Rajasthan",
    "PM Surya Ghar Muft Bijli Yojana",
    "On Grid Solar System",
    "Off Grid Solar System",
    "Solar Water Pump Bright Solar",
    "Commercial Solar Plant Jaipur",
  ],
  icons: {
    icon: "/assets/images/srhlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${playfair.variable} ${caveat.variable} bg-forest-900 text-white font-sans antialiased selection:bg-lime-400 selection:text-forest-950`}
      >
        {children}
      </body>
    </html>
  );
}
