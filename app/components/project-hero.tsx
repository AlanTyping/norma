import type { ProjectDetailData } from "../lib/types";
import { ProjectMeta } from "./project-meta";
import { SiteImage } from "./site-image";

type ProjectHeroProps = {
  project: ProjectDetailData;
  showMeta?: boolean;
  metaLayout?: "grid" | "rows";
  metaPlacement?: "overlay" | "below";
  objectPosition?: string;
};

export function ProjectHero({
  project,
  showMeta = true,
  metaLayout = "grid",
  metaPlacement = "overlay",
  objectPosition = "center",
}: ProjectHeroProps) {
  return (
    <>
      <section
        aria-labelledby={`${project.slug}-hero-title`}
        className="relative isolate h-[min(60vw,760px)] min-h-[560px] overflow-hidden bg-norma-ink text-white"
      >
        <SiteImage
          image={project.hero}
          className="brightness-[0.72] saturate-[0.9]"
          objectPosition={objectPosition}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-[5vw] bottom-[clamp(28px,5vw,62px)] flex items-end justify-between gap-12">
          <h1
            id={`${project.slug}-hero-title`}
            className="max-w-[720px] shrink-0 font-editorial text-[clamp(4.5rem,7.2vw,7.6rem)] leading-[0.84] tracking-[-0.075em]"
          >
            {project.title}
          </h1>
          {showMeta && metaPlacement === "overlay" ? (
            <div
              className={`w-full max-w-[500px] shrink ${
                metaLayout === "rows" ? "md:max-w-[290px]" : ""
              }`}
            >
              <ProjectMeta
                meta={project.meta}
                overlay
                layout={metaLayout}
              />
            </div>
          ) : null}
        </div>
      </section>
      {showMeta && metaPlacement === "below" ? (
        <div className="px-6 md:px-[5vw]">
          <div className="mx-auto max-w-[1280px]">
            <ProjectMeta meta={project.meta} />
          </div>
        </div>
      ) : null}
    </>
  );
}
