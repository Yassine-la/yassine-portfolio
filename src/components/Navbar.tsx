"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/experience", label: "Expérience" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/formations", label: "Formations" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // ferme le menu quand on change de page
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Yassine Larbi
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-md px-3 py-2 text-sm transition",
                  active
                    ? "bg-white/12 border border-white/15"
                    : "hover:bg-white/10",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "rounded-md px-3 py-2 text-sm transition",
                    active
                      ? "bg-white/12 border border-white/15"
                      : "hover:bg-white/10",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}