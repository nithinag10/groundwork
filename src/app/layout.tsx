import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BRAND, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND} — We don't advise on the future. We install it.`,
  description:
    "AI transformation, execution-led. We embed senior engineers and ship production AI into your stack in weeks — India & GCC.",
  openGraph: {
    title: `${BRAND} — We don't advise on the future. We install it.`,
    description:
      "AI transformation, execution-led. We embed senior engineers and ship production AI into your stack in weeks — India & GCC.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — We don't advise on the future. We install it.`,
    description:
      "AI transformation, execution-led. We embed senior engineers and ship production AI into your stack in weeks — India & GCC.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
