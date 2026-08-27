"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      
      if (event.key === "Tab" && containerRef.current) {
        const focusableElements = containerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden" ref={containerRef}>
      <button
        type="button"
        className="norma-focus flex items-center gap-2 text-[12px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-black"
        aria-expanded={open}
        aria-controls="norma-mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Cerrar" : "Menú"}</span>
        <span className="text-[14px] md:text-[13px] leading-none" aria-hidden="true">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {/* Backdrop */}
      {open ? (
        <div
          aria-hidden="true"
          className="fixed inset-0 top-[78px] z-20 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        id="norma-mobile-menu"
        className={`absolute inset-x-0 top-full z-30 border-b border-norma-rule bg-white/98 px-6 py-8 shadow-xl backdrop-blur-md transition-all duration-300 ease-out ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Navegación móvil"
          className="grid gap-6 text-[14px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-black/80"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`norma-focus w-fit py-1 transition-colors hover:text-black ${
                link.active ? "border-b-2 border-black text-black" : ""
              }`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-norma-rule">
            <Link
              href={cta.href}
              className="norma-focus inline-block bg-norma-ink px-6 py-3 text-[12px] md:text-[11px] font-bold tracking-[0.16em] text-white"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              {cta.label}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

