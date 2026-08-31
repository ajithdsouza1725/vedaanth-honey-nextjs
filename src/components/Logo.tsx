"use client";

/**
 * Vedaanth Nectar Honey brand icon — honey jar with dipper + hexagons.
 * Matches the official brand logo line-art style.
 */
export function BrandIcon({
  size = 44,
  color = "currentColor",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 50 58"
      width={size}
      height={size * (58 / 50)}
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Dipper handle — extends upper-right from coils */}
      <line x1="28" y1="6" x2="42" y2="1" strokeWidth="2.8" />

      {/* Dipper coils (4 horizontal ridges) */}
      <ellipse cx="23" cy="6" rx="6" ry="1.8" />
      <ellipse cx="23" cy="10" rx="6" ry="1.8" />
      <ellipse cx="23" cy="14" rx="5.5" ry="1.6" />
      <ellipse cx="23" cy="18" rx="5" ry="1.4" />

      {/* Dipper stick — from coils down to jar rim */}
      <line x1="23" y1="4" x2="23" y2="24" />

      {/* Jar rim / lid — wider bar */}
      <rect x="9" y="24" width="30" height="5" rx="2.5" />

      {/* Jar body */}
      <rect x="11" y="29" width="26" height="24" rx="4" />

      {/* Two connected hexagons on jar */}
      <path d="M21 41 L24 39 L27 41 L27 44.5 L24 46.5 L21 44.5 Z" strokeWidth="1.8" />
      <path d="M27 44.5 L30 42.5 L33 44.5 L33 48 L30 50 L27 48 Z" strokeWidth="1.8" />
    </svg>
  );
}

export function BrandLogo({
  variant = "dark",
  iconSize = 36,
  className = "",
}: {
  variant?: "dark" | "light" | "yellow";
  iconSize?: number;
  className?: string;
}) {
  const colors = {
    dark: { icon: "#333", text: "#1a1a1a", sub: "#555" },
    light: { icon: "#fff", text: "#fff", sub: "rgba(255,255,255,0.7)" },
    yellow: { icon: "#FFB000", text: "#FFB000", sub: "rgba(255,176,0,0.7)" },
  };
  const c = colors[variant];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BrandIcon size={iconSize} color={c.icon} />
      <div className="flex flex-col">
        <span
          className="font-bold leading-none tracking-tight"
          style={{ color: c.text, fontSize: iconSize * 0.56, fontFamily: "var(--font-body), sans-serif" }}
        >
          Vedaanth
        </span>
        <span
          className="font-medium leading-none mt-0.5"
          style={{
            color: c.sub,
            fontSize: iconSize * 0.31,
            letterSpacing: "0.02em",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Nectar Honey
        </span>
      </div>
    </div>
  );
}
