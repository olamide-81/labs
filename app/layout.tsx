import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { studio } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(studio.url),
  title: {
    default: "Gratebridge Labs — Technology agency",
    template: "%s — Gratebridge Labs",
  },
  description: studio.description,
  openGraph: {
    title: "Gratebridge Labs — Technology agency",
    description: studio.description,
    siteName: studio.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratebridge Labs — Technology agency",
    description: studio.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} antialiased`}
    >
      <body className="bg-paper text-ink">
        <SmoothScroll>
          <Nav />
          <main id="content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
