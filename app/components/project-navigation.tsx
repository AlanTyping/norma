import Link from "next/link";
import type { ProjectDetailData } from "../lib/types";

type ProjectNavigationProps = {
  prev: ProjectDetailData;
  next: ProjectDetailData;
};

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  return (
    <nav
      aria-label="Navegación entre proyectos"
      className="border-t border-norma-rule bg-norma-paper px-6 py-12 md:px-10 lg:px-14"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <Link
          href={`/proyectos/${prev.slug}`}
          className="norma-focus group flex flex-col items-start gap-1"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-norma-muted transition-colors group-hover:text-norma-ink">
            ← Proyecto anterior
          </span>
          <span className="font-editorial text-[22px] leading-tight tracking-[-0.02em] text-norma-ink group-hover:underline">
            {prev.title}
          </span>
        </Link>

        <Link
          href="/proyectos"
          className="norma-link norma-focus text-[11px] font-semibold uppercase tracking-[0.16em] text-norma-muted self-start sm:self-center"
        >
          Todos los proyectos
        </Link>

        <Link
          href={`/proyectos/${next.slug}`}
          className="norma-focus group flex flex-col items-start sm:items-end gap-1 text-left sm:text-right"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-norma-muted transition-colors group-hover:text-norma-ink">
            Proyecto siguiente →
          </span>
          <span className="font-editorial text-[22px] leading-tight tracking-[-0.02em] text-norma-ink group-hover:underline">
            {next.title}
          </span>
        </Link>
      </div>
    </nav>
  );
}
