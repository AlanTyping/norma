"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MobileNavigationLink = {
  label: string;
  href: string;
  active?: boolean;
};

type MobileNavigationProps = {
  links: MobileNavigationLink[];
  cta: {
    label: string;
    href: string;
  };
};

export function MobileNavigation({
  links,
  cta,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="norma-focus text-[10px] font-semibold uppercase tracking-[0.16em] text-black"
        aria-expanded={open}
        aria-controls="norma-mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Cerrar" : "Menú"}
      </button>
      <div
        id="norma-mobile-menu"
        className={`absolute inset-x-0 top-full z-20 border-b border-norma-rule bg-white px-6 py-6 transition-[visibility,opacity,transform] duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Navegación móvil"
          className="grid gap-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-black/70"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`norma-focus w-fit hover:text-black ${
                link.active ? "text-black underline underline-offset-8" : ""
              }`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            className="norma-focus mt-1 w-fit border-b border-black pb-2 text-black"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            {cta.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
