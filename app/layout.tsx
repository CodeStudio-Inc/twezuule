import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const headingFont = Sora({
  variable: "--font-sora",
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
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <Navbar />
        <main id="main-content" className="min-h-screen overflow-x-clip">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
