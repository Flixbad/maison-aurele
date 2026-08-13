"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { salon } from "@/data/salon";
import { cn } from "@/lib/cn";

const links = [
  { href: "#categories", label: "Univers" },
  { href: "#services", label: "Prestations" },
  { href: "#atelier", label: "Atelier" },
  { href: "#equipe", label: "Équipe" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="section-pad flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            className="font-display text-xl tracking-[0.08em] text-parchment md:text-2xl"
          >
            {salon.name}
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.22em] text-parchment-dim uppercase transition-colors hover:text-copper-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#rdv"
              className="hidden border border-copper/50 px-4 py-2 text-[11px] tracking-[0.2em] text-copper-bright uppercase transition-colors hover:border-copper-bright hover:bg-copper/10 sm:inline-block"
            >
              Prendre RDV
            </a>
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={cn(
                  "h-px w-6 bg-parchment transition-transform duration-300",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-6 bg-parchment transition-transform duration-300",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="section-pad flex h-full flex-col justify-center gap-6 pt-16">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-parchment sm:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#rdv"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit border border-copper px-5 py-3 text-xs tracking-[0.22em] text-copper-bright uppercase"
              >
                Prendre RDV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
