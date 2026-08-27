import type { GalleryImage } from "../lib/types";
import { SiteImage } from "./site-image";

type ProjectGalleryProps = {
  items: GalleryImage[];
  label: string;
};

export function ProjectGallery({ items, label }: ProjectGalleryProps) {
  const feature = items.find((item) => item.placement === "feature");
  const left = items.find((item) => item.placement === "left");
  const right = items.find((item) => item.placement === "right");

  if (!feature || !left || !right) return null;

  return (
    <section
      aria-label={label}
      className="border-b border-norma-rule px-6 py-[clamp(88px,14vw,182px)] md:px-[5vw]"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="relative aspect-[1.95] overflow-hidden sm:aspect-[2.2]">
          <SiteImage image={feature.image} />
        </div>
        <div className="mx-auto mt-14 grid max-w-[990px] items-start gap-14 md:grid-cols-[1fr_0.86fr] md:gap-24">
          <div className="relative aspect-[0.72] overflow-hidden">
            <SiteImage image={left.image} />
          </div>
          <figure className="mt-0 md:mt-36">
            <div className="relative aspect-[1.04] overflow-hidden">
              <SiteImage image={right.image} />
            </div>
            {right.caption ? (
              <figcaption className="mt-4 text-right text-[10px] font-semibold uppercase tracking-[0.16em] text-norma-muted sm:mt-5 sm:text-[11px]">
                {right.caption}
              </figcaption>
            ) : null}
          </figure>
        </div>
      </div>
    </section>
  );
}
