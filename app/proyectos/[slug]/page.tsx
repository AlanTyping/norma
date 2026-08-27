import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EditorialSection } from "../../../app/components/editorial-section";
import { MaterialityBand } from "../../../app/components/materiality-band";
import { ProjectCTA } from "../../../app/components/project-cta";
import { ProjectGallery } from "../../../app/components/project-gallery";
import { ProjectHero } from "../../../app/components/project-hero";
import { ProjectNavigation } from "../../../app/components/project-navigation";
import { ProjectProcess } from "../../../app/components/project-process";
import { SiteFooter } from "../../../app/components/site-footer";
import { SiteHeader } from "../../../app/components/site-header";
import { Testimonial } from "../../../app/components/testimonial";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projectDetails,
} from "../../../app/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: project.title,
    description: `${project.title}, obra ${project.meta.typology.toLowerCase()} en ${project.meta.location} realizada por NØRMA Arquitectura.`,
    openGraph: {
      title: `${project.title} — NØRMA Arquitectura`,
      description: project.description[0],
      images: [
        {
          url: project.hero.src,
          alt: project.hero.alt,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="min-h-screen overflow-x-clip bg-norma-blush text-norma-ink">
      <SiteHeader active="projects" />
      <main>
        <ProjectHero
          project={project}
          metaLayout={slug === "estudio-24" ? "rows" : "grid"}
          metaPlacement={slug === "casa-olivos" ? "below" : "overlay"}
          objectPosition="center"
        />

        <EditorialSection
          id="proyecto"
          title="El Proyecto"
          paragraphs={project.description}
        />

        {project.materiality ? (
          <MaterialityBand
            data={project.materiality}
            variant={slug === "casa-olivos" ? "casa" : "feature"}
          />
        ) : null}

        {project.gallery ? (
          <ProjectGallery
            items={project.gallery}
            label={`Galería de ${project.title}`}
          />
        ) : null}

        {project.process ? (
          <ProjectProcess
            image={project.process.image}
            body={project.process.body}
          />
        ) : null}

        {project.testimonial ? (
          <Testimonial
            quote={project.testimonial.quote}
            author={project.testimonial.author}
            cta={project.testimonial.cta}
            id="testimonio"
          />
        ) : null}

        <ProjectCTA
          title={
            <>
              ¿Tenés un proyecto en mente?
              <br />
              Conversemos.
            </>
          }
          label="Contactar al estudio"
        />

        <ProjectNavigation prev={prev} next={next} />
      </main>
      <SiteFooter />
    </div>
  );
}
