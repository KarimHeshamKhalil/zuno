import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://zuno-puce.vercel.app";
const SITE_NAME = "ZUNO — Find Your Dream Home";
const SITE_DESC =
  "Prestige Realty by ZUNO — browse verified villas, apartments, penthouses and family homes across Texas, New York, California and Florida. Tour verified listings with local experts.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ZUNO — Find Your Dream Home | Prestige Realty",
    template: "%s | ZUNO Realty",
  },
  description: SITE_DESC,
  keywords: [
    "real estate",
    "homes for rent",
    "apartments",
    "villas",
    "ZUNO",
    "Prestige Realty",
    "Texas homes",
  ],
  authors: [{ name: "ZUNO Realty" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ZUNO Realty",
    title: SITE_NAME,
    description: SITE_DESC,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZUNO — Find Your Dream Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f4efe3] text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
