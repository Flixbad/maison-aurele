"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { salon } from "@/data/salon";
import { cn } from "@/lib/cn";

const links = [
  { href: "#univers", label: "Univers" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#methode", label: "Méthode" },
  { href: "#crew", label: "Crew" },
  { href: "#shots", label: "Shots" },
  { href: "#book", label: "Book" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled && "border-b-2 border-void bg-paper/90 backdrop-blur-md",
        )}
      >
        <div className="section-pad flex h-14 items-center justify-between md:h-16">
          <a
            href="#top"
            className="font-display text-lg font-extrabold tracking-tight md:text-xl"
          >
            {salon.short}
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-signal align-super" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-colors hover:bg-void hover:text-acid"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#book"
              data-cursor="GO"
              className="hidden bg-void px-4 py-2 font-mono text-[11px] tracking-wider text-acid uppercase sm:inline-block"
            >
              Book now
            </a>
            <button
              type="button"
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center border-2 border-void bg-acid lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="font-mono text-xs">{open ? "X" : "|||"}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-void text-paper lg:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="section-pad flex h-full flex-col justify-center gap-3 pt-16">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl font-extrabold tracking-tight"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <span className="mr-3 font-mono text-sm text-acid">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
