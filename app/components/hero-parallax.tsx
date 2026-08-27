"use client";

import { useEffect, useState } from "react";
import type { SiteImage as SiteImageType } from "../lib/types";
import { HeroHeadline } from "./hero-headline";
import { SiteImage } from "./site-image";

type HeroParallaxProps = {
  image: SiteImageType;
  headline: string;
};

export function HeroParallax({ image, headline }: HeroParallaxProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 700;
  const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

  // Parallax motion and subtle atmospheric fading
  const imageTranslateY = scrollY * 0.22;
  const overlayOpacity = 0.25 + progress * 0.4;
  const contentTranslateY = scrollY * 0.15;
  const contentOpacity = Math.max(1 - progress * 1.3, 0);

  return (
    <section
      id="inicio"
      className="sticky top-[78px] z-0 h-[clamp(560px,75vh,calc(100dvh-78px))] md:h-[calc(100dvh-78px)] md:max-h-[calc(100dvh-78px)] overflow-hidden bg-norma-ink text-white"
    >
      <div
        className="absolute inset-0 h-full w-full will-change-transform"
        style={{
          transform: `translate3d(0, ${imageTranslateY}px, 0) scale(${1.05 + progress * 0.04})`,
        }}
      >
        <SiteImage
          image={image}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Atmospheric darkening overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* Hero Headline & CTA with subtle parallax drift and fade */}
      <div
        className="absolute inset-x-6 bottom-12 z-10 flex flex-col items-center justify-center text-center md:bottom-16 will-change-transform"
        style={{
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        <HeroHeadline text={headline} />
      </div>
    </section>
  );
}
