import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vedaanth Nectar Honey — Pure Raw Honey in Bangalore",
  description:
    "Straight from our farms to your home. Experience the pure taste of nature's golden nectar. Order fresh, raw honey delivered across Bangalore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${poppins.variable} antialiased`}>
      <body className="min-h-screen font-[family-name:var(--font-body)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
