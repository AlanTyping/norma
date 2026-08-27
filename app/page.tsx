import Link from "next/link";

import { ContactForm } from "./components/contact-form";
import { HeroParallax } from "./components/hero-parallax";
import { MetricStrip } from "./components/metric-strip";
import { ProcessList } from "./components/process-list";
import { ProjectCard } from "./components/project-card";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { Testimonial } from "./components/testimonial";
import { images, projects } from "./lib/content";

const homeMetrics = [
  { value: "10+", label: "Años de experiencia" },
  { value: "45+", label: "Proyectos realizados" },
  { value: "20k+", label: "m² proyectados" },
];

export default function Home() {
  const casaOlivos = projects.find((project) => project.slug === "casa-olivos");
  const casaDelta = projects.find((project) => project.slug === "casa-delta");
  const estudio24 = projects.find((project) => project.slug === "estudio-24");

  if (!casaOlivos || !casaDelta || !estudio24) return null;

  return (
    <div className="min-h-screen overflow-x-clip bg-norma-paper text-norma-ink">
      <SiteHeader active="home" />
      <main>
        <HeroParallax
          image={images.homeHero}
          headline="Arquitectura contemporánea pensada para vivir."
        />

        {/* Content layers over the fixed hero with parallax curtain depth */}
        <div className="relative z-10 bg-norma-paper shadow-[0_-24px_50px_rgba(0,0,0,0.22)]">
          <section id="estudio" className="border-b border-norma-rule px-6 py-[clamp(104px,12vw,170px)] md:px-[5vw]">
          <div className="mx-auto grid max-w-[1280px] gap-14 md:grid-cols-2 md:gap-36">
            <div>
              <h2 className="max-w-[560px] font-editorial text-[clamp(3.5rem,5vw,4.8rem)] leading-[0.88] tracking-[-0.045em]">
                Diseñar bien es entender primero.
              </h2>
              <div className="mt-12 flex flex-wrap gap-3" aria-label="Principios de diseño">
                {["Contexto", "Materialidad", "Habitabilidad"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#bdb8b5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="max-w-[560px] text-[16px] leading-[1.75] text-norma-muted sm:text-[17px]">
              <p className="m-0">
                Nuestra práctica se fundamenta en una lectura profunda del entorno. Creemos que la arquitectura contemporánea no debe imponerse, sino integrarse y resolver con precisión las necesidades del habitar humano.
              </p>
              <p className="mt-10">
                Cada proyecto es una investigación sobre la proporción, la luz y la materia, buscando resultados atemporales y funcionales que perduren en el tiempo, respetando siempre el contexto físico y cultural.
              </p>
            </div>
          </div>
        </section>

        <section id="proyectos" className="border-b border-norma-rule px-6 py-[clamp(104px,12vw,170px)] md:px-[5vw]">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <h2 className="font-editorial text-[clamp(3rem,4.2vw,4.3rem)] leading-none tracking-[-0.045em]">
                Proyectos Destacados
              </h2>
              <Link href="/proyectos" className="norma-link norma-focus text-[11px] font-semibold uppercase tracking-[0.13em]">
                Ver todos
              </Link>
            </div>
            <ProjectCard
              project={casaOlivos}
              image={images.featuredHouse}
              imageAspectClassName="aspect-[16/7] md:aspect-[21/9]"
              detail="Residencial, 280 m², 2026"
            />
            <div className="mt-24 grid gap-16 md:items-end md:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] md:gap-20">
              <ProjectCard
                project={casaDelta}
                image={images.staircase}
                imageAspectClassName="aspect-[4/5]"
                detail="Residencial, 215 m², 2025"
              />
              <ProjectCard
                project={estudio24}
                image={images.studioInterior}
                imageAspectClassName="aspect-[4/3]"
                className="md:mb-12"
                detail="Comercial, 180 m², 2025"
                infoPosition="top"
              />
            </div>
          </div>
        </section>

        <section id="servicios" aria-label="Datos de Norma">
          <MetricStrip metrics={homeMetrics} />
        </section>

        <ProcessList />

        <Testimonial
          quote="Desde el inicio sentimos que entendían lo que queríamos. El resultado superó nuestras expectativas en términos de luz y funcionalidad."
          author="— María y Federico, Casa Olivos"
        />

        <section id="contacto" className="border-b border-norma-rule px-6 py-[clamp(104px,12vw,170px)] md:px-[5vw]">
          <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-28">
            <div>
              <h2 className="max-w-[520px] font-editorial text-[clamp(3.7rem,5.3vw,5.1rem)] leading-[0.86] tracking-[-0.045em]">
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="mt-12 max-w-[430px] text-[16px] leading-[1.75] text-norma-muted sm:text-[17px]">
                Escribinos y coordinemos una primera reunión para conversar sobre tus ideas.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
