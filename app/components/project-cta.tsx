import Link from "next/link";
import type { ReactNode } from "react";

type ProjectCTAProps = {
  title: ReactNode;
  href?: string;
  label?: string;
  variant?: "button" | "link";
};

export function ProjectCTA({
  title,
  href = "/#contacto",
  label = "Iniciar un proyecto",
  variant = "button",
}: ProjectCTAProps) {
  return (
    <section className="flex min-h-[340px] items-center justify-center border-b border-norma-rule bg-norma-blush px-6 py-20 text-center md:min-h-[45vw]">
      <div>
        <h2 className="font-editorial text-[clamp(3.1rem,6.6vw,5.35rem)] leading-[0.94] tracking-[-0.055em]">
          {title}
        </h2>
        {variant === "link" ? (
          <Link
            href={href}
            className="norma-link norma-focus mt-8 inline-flex items-center pb-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
          >
            {label}
            <span aria-hidden="true" className="ml-2 text-[17px] leading-none">
              →
            </span>
          </Link>
        ) : (
          <Link
            href={href}
            className="norma-focus mt-8 inline-flex h-12 items-center justify-center bg-norma-ink px-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-norma-muted md:h-14 md:px-8 md:text-[11px]"
          >
            {label}
            <span aria-hidden="true" className="ml-3 text-[18px] leading-none">
              →
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
