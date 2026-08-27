import type { Metadata } from "next";

import { EditorialSection } from "../../components/editorial-section";
import { MaterialityBand } from "../../components/materiality-band";
import { ProjectCTA } from "../../components/project-cta";
import { ProjectHero } from "../../components/project-hero";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { estudio24 } from "../../lib/content";

export const metadata: Metadata = {
  title: "Estudio 24",
  description: "Estudio 24, proyecto comercial de NØRMA Arquitectura.",
};

export default function Estudio24Page() {
  return (
    <div className="min-h-screen overflow-x-clip bg-norma-blush text-norma-ink">
      <SiteHeader active="projects" />
      <main>
        <ProjectHero
          project={estudio24}
          metaLayout="rows"
          objectPosition="center"
        />
        <EditorialSection
          id="proyecto"
          title="El Proyecto"
          paragraphs={estudio24.description}
        />
        {estudio24.materiality ? (
          <MaterialityBand data={estudio24.materiality} />
        ) : null}
        <ProjectCTA
          title="¿Visualiza un espacio similar?"
          label="Hablemos sobre su proyecto"
          variant="link"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
