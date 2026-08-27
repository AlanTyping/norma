import Link from "next/link";

type HeroHeadlineProps = {
  text: string;
  ctaText?: string;
  ctaHref?: string;
};

export function HeroHeadline({
  text,
  ctaText = "Ver proyectos",
  ctaHref = "/proyectos",
}: HeroHeadlineProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative inline-block max-w-[620px] px-2">
        {/* Animated separator lines */}
        <span
          aria-hidden="true"
          className="hero-reveal-line hero-reveal-line-left"
        />
        <span
          aria-hidden="true"
          className="hero-reveal-line hero-reveal-line-right"
        />

        {/* Revealed hero text */}
        <p className="hero-reveal-text font-editorial text-[17px] font-normal leading-[1.35] tracking-[0.02em] text-white/95 sm:text-[19px] md:text-[22px]">
          {text}
        </p>
      </div>

      {ctaText && ctaHref ? (
        <Link
          href={ctaHref}
          className="norma-focus mt-5 inline-flex items-center justify-center bg-white px-6 py-2.5 text-[10px] font-normal uppercase tracking-[0.16em] text-black transition-colors duration-200 hover:bg-white/85"
        >
          {ctaText}
        </Link>
      ) : null}
    </div>
  );
}
