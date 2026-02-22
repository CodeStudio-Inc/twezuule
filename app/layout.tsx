import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Twezuule Foundation",
    template: "%s | Twezuule Foundation",
  },
  description:
    "A youth-driven, disability-led organization empowering young people with disabilities to advocate for their rights and access health and livelihood opportunities.",
  metadataBase: new URL("https://twezuule.org"),
  openGraph: {
    title: "Twezuule Foundation",
    description:
      "Youth-driven, disability-led organization empowering young people with disabilities to advocate for their rights and access health and livelihood opportunities.",
    url: "https://twezuule.org",
    siteName: "Twezuule Foundation",
    images: [{ url: "/images/placeholder.svg", width: 1200, height: 700 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twezuule Foundation",
    description:
      "Youth-driven, disability-led organization empowering young people with disabilities to advocate for their rights and access health and livelihood opportunities.",
    images: ["/images/placeholder.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
