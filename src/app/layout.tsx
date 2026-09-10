import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Raw Honey in Karnataka | Pure & Unheated | Vedaanth Nectar Honey",
  description:
    "Buy 100% pure raw honey in Karnataka — harvested in the Chitradurga hills, never heated, lab-tested for purity. ✓ Free delivery ✓ No COD ✓ Order on WhatsApp.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased overflow-x-hidden`}>
      <body className="min-h-screen font-[family-name:var(--font-manrope)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
