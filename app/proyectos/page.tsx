import type { Metadata } from "next";

import { ProjectCTA } from "../components/project-cta";
import { ProjectsGallery } from "../components/projects-gallery";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { projects } from "../lib/content";

export const metadata: Metadata = {
  title: "Proyectos seleccionados",
  description: "Una selección de proyectos recientes de NØRMA Arquitectura.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-norma-blush text-norma-ink">
      <SiteHeader active="projects" />
      <main>
        <section className="px-6 pt-20 md:px-[5vw] md:pt-[9vw]">
          <div className="mx-auto max-w-[1280px]">
            <h1 className="max-w-[980px] font-editorial text-[clamp(3.25rem,6.4vw,5.2rem)] leading-[0.97] tracking-[-0.055em]">
              Proyectos Seleccionados
            </h1>
            <p className="mt-6 max-w-[690px] text-[15px] leading-[1.52] text-norma-muted sm:text-[18px]">
              Una selección de nuestro trabajo reciente, explorando la intersección entre la materialidad, el espacio y la luz. Cada proyecto es una respuesta específica a su contexto.
            </p>
          </div>
        </section>
        <div className="mt-14 md:mt-[5.2vw]">
          <ProjectsGallery projects={projects} />
        </div>
        <ProjectCTA
          title={
            <>
              ¿Discutimos su
              <br />
              próximo proyecto?
            </>
          }
        />
      </main>
      <SiteFooter />
    </div>
  );
}
