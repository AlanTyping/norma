import Link from "next/link";

import type { ProjectCardData, SiteImage } from "../lib/types";
import { SiteImage as ResponsiveImage } from "./site-image";

type ProjectCardProps = {
  project: ProjectCardData;
  className?: string;
  image?: SiteImage;
  imageAspectClassName?: string;
  detail?: string;
  infoPosition?: "top" | "bottom";
};

const aspectClasses = {
  wide: "aspect-[1.22]",
  portrait: "aspect-[0.68]",
  square: "aspect-[1.02]",
};

export function ProjectCard({
  project,
  className = "",
  image,
  imageAspectClassName,
  detail,
  infoPosition = "bottom",
}: ProjectCardProps) {
  const projectImage = image ?? project.image;
  const projectHref = `/proyectos/${project.slug}`;
  const projectLabel = `Ver proyecto ${project.title}`;


  return (
    <figure className={`m-0 min-w-0 w-full ${className}`}>
      <Link
        href={projectHref}
        aria-label={projectLabel}
        className="norma-image-link norma-focus group flex flex-col w-full"
      >
        {infoPosition === "top" && (
          <figcaption className="mb-4 w-full text-left order-1">
            <h2 className="font-editorial text-[22px] leading-[1.04] tracking-[-0.025em] md:text-[25px] text-balance">
              {project.title}
            </h2>
            <p className="mt-1 text-[11px] leading-[1.3] text-norma-muted md:text-[12px] text-pretty">
              {detail ?? project.location}
            </p>
          </figcaption>
        )}
        
        <div
          className={`relative w-full overflow-hidden bg-norma-soft ${
            infoPosition === "top" ? "order-2" : "order-1"
          } ${imageAspectClassName ?? aspectClasses[project.aspect]}`}
        >
          <ResponsiveImage
            image={projectImage}
            sizes={
              project.aspect === "wide"
                ? "(min-width: 768px) 70vw, 100vw"
                : "(min-width: 768px) 35vw, 100vw"
            }
          />
        </div>
        
        {infoPosition === "bottom" && (
          <figcaption className="mt-4 w-full text-left order-2">
            <h2 className="font-editorial text-[22px] leading-[1.04] tracking-[-0.025em] md:text-[25px] text-balance">
              {project.title}
            </h2>
            <p className="mt-1 text-[11px] leading-[1.3] text-norma-muted md:text-[12px] text-pretty">
              {detail ?? project.location}
            </p>
          </figcaption>
        )}
      </Link>
    </figure>
  );
}
