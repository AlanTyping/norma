import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
];
const legalLinks = ["Privacidad", "Aviso Legal"];

export function SiteFooter() {
  return (
    <footer className="border-t border-norma-rule bg-norma-footer px-6 py-14 md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[1.35fr_0.7fr_0.7fr] md:gap-10">
        <div>
          <Link
            href="/"
            className="norma-focus font-editorial text-[28px] leading-none tracking-[-0.07em]"
          >
            NØRMA
          </Link>
          <p className="mt-6 max-w-[270px] text-[11px] leading-[1.6] text-norma-muted">
            © 2024 NØRMA Arquitectura. Todos los derechos reservados.
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
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em]">
            Legal
          </p>
          <nav
            aria-label="Enlaces legales"
            className="mt-6 flex flex-col items-start gap-3 text-[12px] text-norma-muted"
          >
            {legalLinks.map((label) => (
              <Link key={label} href="#" className="norma-link norma-focus">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
