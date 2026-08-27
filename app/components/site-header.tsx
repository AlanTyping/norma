import Link from "next/link";

import type { ActiveNav } from "../lib/types";
import { MobileNavigation } from "./mobile-navigation";

type SiteHeaderProps = {
  active?: ActiveNav;
  variant?: "default" | "overlay";
};

type HeaderLink = {
  label: string;
  href: string;
  active: boolean;
};

export function SiteHeader({
  active = "home",
  variant = "default",
}: SiteHeaderProps) {
  const links: HeaderLink[] = [
    {
      label: "Proyectos",
      href: "/proyectos",
      active: active === "projects",
    },
    {
      label: "Estudio",
      href: "/estudio",
      active: active === "studio",
    },
    { label: "Servicios", href: "/#servicios", active: false },
    { label: "Proceso", href: "/#proceso", active: false },
    { label: "Contacto", href: "/#contacto", active: false },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-norma-rule bg-white text-black">
      <div className="mx-auto grid min-h-[78px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 md:px-10 lg:px-14">
        <Link
          href="/"
          aria-label="NØRMA, volver al inicio"
          className="norma-focus font-editorial text-[25px] leading-none tracking-[-0.08em] text-black"
        >
          NØRMA
        </Link>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/70 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`norma-focus whitespace-nowrap pb-2 transition-colors duration-200 hover:text-black ${
                link.active
                  ? "border-b-2 border-black text-black"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end">
          <Link
            href="/#contacto"
            className="norma-link norma-focus hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-black hover:text-black/70 md:inline-block"
          >
            Iniciar un proyecto
          </Link>
          <MobileNavigation
            links={links.map(({ label, href, active: isActive }) => ({
              label,
              href,
              active: isActive,
            }))}
            cta={{ label: "Iniciar un proyecto", href: "/#contacto" }}
          />
        </div>
      </div>
    </header>
  );
}
