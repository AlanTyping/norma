import Link from "next/link";

import type { ProjectCardData, SiteImage } from "../lib/types";
import { SiteImage as ResponsiveImage } from "./site-image";

type ProjectCardProps = {
  project: ProjectCardData;
  className?: string;
  image?: SiteImage;
  imageAspectClassName?: string;
  detail?: string;
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
}: ProjectCardProps) {
  const projectImage = image ?? project.image;
  const projectHref =
    project.slug === "casa-del-bosque"
      ? "/proyectos"
      : `/proyectos/${project.slug}`;
  const projectLabel =
    project.slug === "casa-del-bosque"
      ? "Volver a la selección de proyectos"
      : `Ver proyecto ${project.title}`;

  return (
    <figure className={`m-0 min-w-0 ${className}`}>
      <Link
        href={projectHref}
        aria-label={projectLabel}
        className="norma-image-link norma-focus group block"
      >
        <div
          className={`relative w-full overflow-hidden bg-norma-soft ${
            imageAspectClassName ?? aspectClasses[project.aspect]
          }`}
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
        <figcaption className="mt-4">
          <h2 className="font-editorial text-[22px] leading-[1.04] tracking-[-0.025em] md:text-[25px]">
            {project.title}
          </h2>
          <p className="mt-1 text-[11px] leading-[1.2] text-norma-muted md:text-[12px]">
            {detail ?? project.location}
          </p>
        </figcaption>
      </Link>
    </figure>
  );
}
