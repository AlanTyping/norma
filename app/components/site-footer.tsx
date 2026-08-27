import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-norma-rule bg-norma-footer px-6 py-14 md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[1.5fr_0.75fr_0.75fr] md:gap-10">
        <div>
          <Link
            href="/"
            className="norma-focus font-editorial text-[28px] leading-none tracking-[-0.07em]"
          >
            NØRMA
          </Link>
          <p className="mt-4 max-w-[320px] text-[12px] leading-[1.6] text-norma-muted">
            Estudio conceptual de arquitectura contemporánea. Proyecto de demostración desarrollado con Next.js y Tailwind CSS.
          </p>
          <p className="mt-4 text-[11px] text-norma-muted/80">
            © {currentYear} NØRMA Arquitectura. Todos los derechos reservados.
          </p>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em]">
            Social
          </p>
          <nav
            aria-label="Redes sociales"
            className="mt-6 flex flex-col items-start gap-3 text-[12px] text-norma-muted"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="norma-link norma-focus"
              >
                {link.label} ↗
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em]">
            Estudio
          </p>
          <div className="mt-6 flex flex-col items-start gap-2 text-[12px] text-norma-muted">
            <p className="m-0">San Isidro, Buenos Aires</p>
            <a
              href="mailto:contacto@norma.ar"
              className="norma-link norma-focus text-norma-ink font-medium"
            >
              contacto@norma.ar
            </a>
            <p className="m-0 mt-2 text-[11px] text-norma-muted/70">
              Lun – Vie: 09:00 — 18:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

