import type { Metadata } from "next";

import { EditorialSection } from "../../components/editorial-section";
import { ProjectHero } from "../../components/project-hero";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { casaDelta } from "../../lib/content";

export const metadata: Metadata = {
  title: "Casa Delta",
  description: "Casa Delta, proyecto residencial de NØRMA Arquitectura.",
};

export default function CasaDeltaPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-norma-blush text-norma-ink">
      <SiteHeader active="projects" />
      <main>
        <ProjectHero
          project={casaDelta}
          metaLayout="grid"
          objectPosition="center bottom"
        />
        <EditorialSection
          id="proyecto"
          title="El Proyecto"
          paragraphs={casaDelta.description}
          className="min-h-[560px]"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
