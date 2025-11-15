import type React from "react";
import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const _playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aadidev Studio - Luxury Marble Temples & Stone Art",
  description:
    "Luxury marble temples, divine sculptures, and custom stone art by AADIDEV STUDIO. Serving 8 countries with 500+ projects of exquisite marble craftsmanship.",
  keywords: [
    "marble temples",
    "stone sculptures",
    "marble statues",
    "custom stone work",
    "marble flooring",
    "handicraft items",
    "marble countertops",
    "stone art",
    "Aadidev Studio",
    "Makrana marble",
  ],
  authors: [{ name: "Aadidev Studio" }],
  openGraph: {
    title: "Aadidev Studio - Luxury Marble Temples & Stone Art",
    description:
      "Luxury marble temples, divine sculptures, and custom stone art. Serving 8 countries with 500+ projects of exquisite marble craftsmanship.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadidev Studio - Luxury Marble Temples & Stone Art",
    description:
      "Luxury marble temples, divine sculptures, and custom stone art. Serving 8 countries with 500+ projects.",
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased pt-24">
        {/* ✅ Global Navbar */}
        <Navbar />

        {/* ✅ Page-specific content */}
        {children}

        {/* ✅ Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
