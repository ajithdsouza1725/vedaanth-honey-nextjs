import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
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
    <html lang="en" className={`${poppins.variable} antialiased overflow-x-hidden`}>
      <body className="min-h-screen font-[family-name:var(--font-poppins)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
