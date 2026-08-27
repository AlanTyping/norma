"use client";

import { useEffect, useState } from "react";
import type { GalleryImage } from "../lib/types";
import { SiteImage } from "./site-image";

type ProjectGalleryProps = {
  items: GalleryImage[];
  label: string;
};

export function ProjectGallery({ items, label }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const feature = items.find((item) => item.placement === "feature") ?? items[0];
  const left = items.find((item) => item.placement === "left") ?? items[1];
  const right = items.find((item) => item.placement === "right") ?? items[2];

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % items.length : 0));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + items.length) % items.length : items.length - 1,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, items.length]);

  if (!feature) return null;

  return (
    <>
      <section
        aria-label={label}
        className="border-b border-norma-rule px-6 py-[clamp(88px,14vw,182px)] md:px-[5vw]"
      >
        <div className="mx-auto max-w-[1120px]">
          <button
            type="button"
            onClick={() => setSelectedIndex(items.indexOf(feature))}
            className="group relative block aspect-[1.95] w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-norma-ink sm:aspect-[2.2]"
            aria-label={`Ver imagen ampliada: ${feature.image.alt}`}
          >
            <SiteImage image={feature.image} />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              Ampliar ↗
            </span>
          </button>

          {left && right ? (
            <div className="mx-auto mt-14 grid max-w-[990px] items-start gap-14 md:grid-cols-[1fr_0.86fr] md:gap-24">
              <button
                type="button"
                onClick={() => setSelectedIndex(items.indexOf(left))}
                className="group relative block aspect-[0.72] w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-norma-ink"
                aria-label={`Ver imagen ampliada: ${left.image.alt}`}
              >
                <SiteImage image={left.image} />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                  Ampliar ↗
                </span>
              </button>

              <figure className="mt-0 md:mt-36">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(items.indexOf(right))}
                  className="group relative block aspect-[1.04] w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-norma-ink"
                  aria-label={`Ver imagen ampliada: ${right.image.alt}`}
                >
                  <SiteImage image={right.image} />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
                  <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    Ampliar ↗
                  </span>
                </button>
                {right.caption ? (
                  <figcaption className="mt-4 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-norma-muted sm:mt-5 sm:text-[11px]">
                    {right.caption}
                  </figcaption>
                ) : null}
              </figure>
            </div>
          ) : null}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && items[selectedIndex] ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] h-[75vh] max-w-[85vw] overflow-hidden">
              <SiteImage
                image={items[selectedIndex].image}
                className="object-contain"
                sizes="90vw"
              />
            </div>

            <div className="mt-4 flex w-full items-center justify-between text-white/80">
              <p className="text-[12px] uppercase tracking-[0.14em]">
                {items[selectedIndex].caption ?? items[selectedIndex].image.alt}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-medium tracking-[0.16em]">
                  {selectedIndex + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="rounded-full border border-white/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Cerrar (Esc)
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

