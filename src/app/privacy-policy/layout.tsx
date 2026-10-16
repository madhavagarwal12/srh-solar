import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Governance",
  description:
    "SRH Green Energy Pvt. Ltd. (SRH Solar) privacy policy, consumer utility bill data protection, and National Solar Portal compliance.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
