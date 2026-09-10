import logoDark from "@/assets/logo-dark-bg.png";
import logoLight from "@/assets/logo-light-bg.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  light?: boolean;
  className?: string;
  size?: "header" | "footer" | "compact" | "badge";
  /** When false, renders just the mark (no wrapping link) — use inside an already-interactive/anchor element. */
  asLink?: boolean;
};

const logoSizes = {
  header: "h-12 w-[96px] md:h-14 md:w-[112px] lg:h-16 lg:w-[128px]",
  footer: "h-20 w-[160px] lg:h-24 lg:w-[190px]",
  /** Matches Stitch's slim architectural header (h-9 / 36px). */
  compact: "h-9 w-[72px]",
  /** Matches Stitch's small inline world-identifier badges (h-4 / 16px). */
  badge: "h-4 w-[32px]",
};

const LogoMark = ({ light, size }: { light: boolean; size: keyof typeof logoSizes }) => (
  <span className={cn("relative block shrink-0", logoSizes[size])}>
    {/* Both images stay mounted to avoid src-swap flicker while scrolling. */}
    <img
      src={logoDark}
      alt="Eclipse Mühendislik"
      draggable={false}
      className={`absolute inset-0 h-full w-full select-none object-contain ${light ? "opacity-100" : "opacity-0"}`}
    />
    <img
      src={logoLight}
      alt=""
      aria-hidden
      draggable={false}
      className={`absolute inset-0 h-full w-full select-none object-contain ${light ? "opacity-0" : "opacity-100"}`}
    />
  </span>
);

export const Logo = ({ light = false, className, size = "header", asLink = true }: LogoProps) => {
  if (!asLink) {
    return (
      <span className={cn("flex shrink-0 items-center", className)}>
        <LogoMark light={light} size={size} />
      </span>
    );
  }
  return (
    <a href="#top" className={cn("flex shrink-0 items-center", className)} aria-label="Eclipse Mühendislik">
      <LogoMark light={light} size={size} />
    </a>
  );
};
