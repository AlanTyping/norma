import type { Metadata } from "next";

import { MaterialityBand } from "../../components/materiality-band";
import { EditorialSection } from "../../components/editorial-section";
import { ProjectGallery } from "../../components/project-gallery";
import { ProjectHero } from "../../components/project-hero";
import { ProjectProcess } from "../../components/project-process";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { Testimonial } from "../../components/testimonial";
import { casaOlivos, images } from "../../lib/content";

export const metadata: Metadata = {
  title: "Casa Olivos",
  description: "Casa Olivos, proyecto residencial de NØRMA Arquitectura.",
};

export default function CasaOlivosPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-norma-blush text-norma-ink">
      <SiteHeader active="projects" />
      <main>
        <ProjectHero
          project={casaOlivos}
          metaPlacement="below"
          objectPosition="center"
        />
        <EditorialSection
          id="proyecto"
          title="El Proyecto"
          paragraphs={casaOlivos.description}
        />
        {casaOlivos.materiality ? (
          <MaterialityBand
            data={casaOlivos.materiality}
            variant="casa"
            secondaryImage={images.facadeDetail}
          />
        ) : null}
        {casaOlivos.gallery ? (
          <ProjectGallery
            items={casaOlivos.gallery}
            label="Galería de Casa Olivos"
          />
        ) : null}
        {casaOlivos.process ? (
          <ProjectProcess
            image={casaOlivos.process.image}
            body={casaOlivos.process.body}
          />
        ) : null}
        {casaOlivos.testimonial ? (
          <Testimonial
            quote={casaOlivos.testimonial.quote}
            author={casaOlivos.testimonial.author}
            cta={casaOlivos.testimonial.cta}
            id="testimonio"
          />
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}
