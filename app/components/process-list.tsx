import Link from "next/link";

const steps = [
  "01. Conversamos",
  "02. Proyectamos",
  "03. Definimos",
  "04. Acompañamos",
  "05. Entregamos",
];

export function ProcessList() {
  return (
    <section id="proceso" className="border-b border-norma-rule px-6 py-[clamp(96px,12vw,170px)] md:px-[5vw]">
      <div className="mx-auto grid max-w-[1280px] gap-14 md:grid-cols-[0.72fr_1.28fr] md:gap-32">
        <div>
          <h2 className="font-editorial text-[clamp(2.8rem,4vw,4rem)] leading-none tracking-[-0.035em]">
            Nuestro Proceso
          </h2>
          <p className="mt-10 max-w-[390px] text-[16px] leading-[1.75] text-norma-muted sm:text-[17px]">
            Una metodología rigurosa para garantizar precisión y calidad en cada etapa del desarrollo arquitectónico.
          </p>
        </div>
        <div className="mt-1">
          {steps.map((step) => (
            <Link
              key={step}
              href="/#contacto"
              className="norma-process-link norma-focus flex min-h-[76px] items-center justify-between gap-8 border-t border-norma-rule py-4 last:border-b"
            >
              <span className="font-editorial text-[clamp(2.2rem,3vw,3.2rem)] leading-none tracking-[-0.025em]">
                {step}
              </span>
              <span aria-hidden="true" className="norma-arrow text-[27px] leading-none text-norma-muted">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
