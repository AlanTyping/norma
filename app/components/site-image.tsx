import Image from "next/image";

import type { SiteImage as SiteImageData } from "../lib/types";

type SiteImageProps = {
  image: SiteImageData;
  className?: string;
  sizes?: string;
  objectPosition?: string;
  priority?: boolean;
};

export function SiteImage({
  image,
  className = "",
  sizes,
  objectPosition = "center",
  priority = false,
}: SiteImageProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes ?? image.sizes ?? "100vw"}
      priority={priority}
      quality={85}
      className={`norma-image object-cover ${
        image.treatment === "grayscale" ? "grayscale" : ""
      } ${className}`}
      style={{ objectPosition }}
    />
  );
}

