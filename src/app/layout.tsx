import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site-config";

export const viewport: Viewport = {
  themeColor: "#087EAA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "Om Sai Aqua | 20L Drinking Water Jar Supply & Delivery | Vishrantwadi, Pune",
    template: "%s | Om Sai Aqua",
  },
  description:
    "Reliable 20-litre drinking water can delivery, RO + UV alkaline water supply for homes, offices, and bulk events in Vishrantwadi, Dhanori Road, and nearby Pune areas. Direct contact: +91 8390612060 / +91 9689030301.",
  keywords: [
    "Drinking water supplier Vishrantwadi Pune",
    "20-litre water can delivery Vishrantwadi",
    "Water jar delivery Dhanori Road",
    "RO water supplier Pune",
    "Home drinking water delivery Pune",
    "Office water jar supply Dhanori Road",
    "Bulk drinking water supply events Pune",
    "Om Sai Aqua Deepak Khatave",
  ],
  authors: [{ name: "Om Sai Aqua" }],
  creator: "Om Sai Aqua",
  publisher: "Om Sai Aqua",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.domain,
    siteName: "Om Sai Aqua",
    title: "Om Sai Aqua | 20L Water Jar Delivery in Vishrantwadi, Pune",
    description:
      "Dependable 20L water can delivery for homes, offices, and special events across Vishrantwadi, Dhanori Road, and surrounding Pune locations. Call: +91 8390612060.",
    images: [
      {
        url: "/images/om-sai-aqua-logo.png",
        width: 1200,
        height: 800,
        alt: "Om Sai Aqua Official Brand Logo",
      },
      {
        url: "/images/hero-water-jar.jpg",
        width: 1200,
        height: 900,
        alt: "Om Sai Aqua 20L Drinking Water Can",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Sai Aqua | Pure Drinking Water Delivery | Vishrantwadi, Pune",
    description:
      "20L water can delivery for homes, offices, and events in Vishrantwadi & Dhanori Road, Pune. Call: +91 8390612060.",
    images: ["/images/om-sai-aqua-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/om-sai-aqua-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/om-sai-aqua-logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/om-sai-aqua-logo.png" />
      </head>
      <body className="min-h-screen bg-[#F4F8F9] text-[#182329] font-sans selection:bg-[#087EAA] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
