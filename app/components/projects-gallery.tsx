"use client";

import { useMemo, useState } from "react";

import type { ProjectCategory, ProjectCardData } from "../lib/types";
import { ProjectCard } from "./project-card";

const filters: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Residencial",
  "Comercial",
  "Reformas",
  "Interiorismo",
];

type ProjectsGalleryProps = {
  projects: ProjectCardData[];
};

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "Todos"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects],
  );
  const firstRow = filteredProjects.slice(0, 2);
  const secondRow = filteredProjects.slice(2, 4);

  return (
    <>
      <div className="border-b border-norma-rule px-[5vw]">
        <div
          aria-label="Filtrar proyectos"
          className="mx-auto flex max-w-[1280px] flex-wrap items-end gap-x-7 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-norma-muted"
          role="group"
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                className={`norma-focus pb-3 ${
                  selected
                    ? "border-b-2 border-norma-ink text-norma-ink"
                    : "hover:text-norma-ink"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
      <section aria-label="Proyectos seleccionados" className="px-[5vw]">
        <div className="mx-auto max-w-[1280px]">
          {filteredProjects.length === 0 ? (
            <p className="py-24 text-[15px] text-norma-muted">
              Todavía no hay proyectos en esta categoría.
            </p>
          ) : (
            <>
              <div className="mt-[5vw] grid grid-cols-1 gap-y-16 md:grid-cols-[minmax(0,2.8fr)_minmax(0,1fr)] md:gap-x-[8.5vw]">
                {firstRow.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    className={index === 1 ? "md:pt-[8.8vw]" : ""}
                  />
                ))}
              </div>
              {secondRow.length ? (
                <div className="mt-[6.3vw] grid grid-cols-1 gap-y-16 md:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)] md:gap-x-[8.5vw]">
                  {secondRow.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      className={index === 1 ? "md:-mt-[4vw]" : ""}
                    />
                  ))}
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  );
}
