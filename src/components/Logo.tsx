"use client";

import Image from "next/image";

export function BrandLogo({
  variant = "dark",
  iconSize = 36,
  className = "",
}: {
  variant?: "dark" | "light" | "yellow";
  iconSize?: number;
  className?: string;
}) {
  const logoSrc = {
    dark: "/images/logo/logo-dark.png",
    light: "/images/logo/logo-white.png",
    yellow: "/images/logo/logo-yellow.png",
  };

  const height = iconSize;
  const width = Math.round(height * 2.4);

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src={logoSrc[variant]}
        alt="Vedaanth Nectar Honey"
        fill
        className="object-contain"
        sizes={`${width}px`}
        priority
      />
    </div>
  );
}
