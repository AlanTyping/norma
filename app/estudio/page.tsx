import type { Metadata } from "next";

import { MetricStrip } from "../components/metric-strip";
import { ProjectCTA } from "../components/project-cta";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { SiteImage } from "../components/site-image";
import { TeamSection } from "../components/team-section";
import {
  additionalTeamMembers,
  images,
  teamMembers,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Estudio",
  description: "Conocé el estudio y el equipo de NØRMA Arquitectura.",
};

const studioMetrics = [
  { value: "10+", label: "Años de trayectoria" },
  { value: "45+", label: "Proyectos desarrollados" },
  { value: "20k+", label: "M² proyectados" },
  { value: "3", label: "Regiones (CABA, Norte, Interior)" },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-norma-paper text-norma-ink">
      <SiteHeader active="studio" />
      <main>
        <section id="estudio" className="border-b border-norma-rule px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
          <div className="mx-auto grid max-w-[1320px] items-center gap-16 md:grid-cols-[0.92fr_1.08fr] md:gap-20 lg:gap-28">
            <div className="max-w-[560px]">
              <h1 className="font-editorial text-[clamp(4.2rem,7.5vw,7.8rem)] leading-[0.82] tracking-[-0.07em]">
                Un estudio,
                <br />
                desde 2016
              </h1>
              <p className="mt-12 max-w-[390px] text-[13px] leading-[1.72] text-norma-muted">
                Con base en San Isidro, desarrollamos proyectos residenciales, comerciales y de interiorismo. Nuestra práctica se define por la disciplina, la precisión técnica y una estética atemporal.
              </p>
            </div>
            <figure className="border-l border-norma-rule pl-6 md:pl-9 lg:pl-12">
              <div className="relative aspect-[1.48] overflow-hidden">
                <SiteImage image={images.studioInterior} />
              </div>
            </figure>
          </div>
        </section>

        <MetricStrip metrics={studioMetrics} variant="ruled" />

        <section id="filosofia" className="border-b border-norma-rule bg-norma-soft px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
          <div className="mx-auto grid max-w-[1320px] gap-16 md:grid-cols-[0.72fr_1.28fr] md:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-norma-muted">
              Filosofía
            </p>
            <p className="max-w-[760px] font-editorial text-[clamp(2.6rem,4.5vw,5rem)] leading-[0.91] tracking-[-0.055em] md:text-right">
              Creemos en el espacio como estructura, no como vacío. Nuestro compromiso reside en la escucha atenta del cliente y la obsesión absoluta por el detalle constructivo, logrando proyectos que envejecen con dignidad.
            </p>
          </div>
        </section>

        <TeamSection
          members={teamMembers}
          additionalMembers={additionalTeamMembers}
        />

        <ProjectCTA
          title={
            <>
              ¿Querés construir algo con nosotros?
              <br />
              Hablemos.
            </>
          }
          label="Contactar al estudio"
          variant="link"
          href="mailto:hola@norma.ar"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
