/* eslint-disable @next/next/no-img-element */

import type { SiteImage as SiteImageData } from "../lib/types";

type SiteImageProps = {
  image: SiteImageData;
  className?: string;
  sizes?: string;
  objectPosition?: string;
};

export function SiteImage({
  image,
  className = "",
  sizes,
  objectPosition = "center",
}: SiteImageProps) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      sizes={sizes ?? image.sizes ?? "100vw"}
      loading="lazy"
      decoding="async"
      className={`norma-image absolute inset-0 h-full w-full object-cover ${
        image.treatment === "grayscale" ? "grayscale" : ""
      } ${className}`}
      style={{ objectPosition }}
    />
  );
}
