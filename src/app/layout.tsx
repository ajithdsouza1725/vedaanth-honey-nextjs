import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vedaanth Nectar Honey — Pure Raw Honey in Bangalore",
  description:
    "Straight from our farms to your home. Experience the pure taste of nature's golden nectar. Order fresh, raw honey delivered across Bangalore.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-screen font-[family-name:var(--font-manrope)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
