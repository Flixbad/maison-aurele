"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/salon";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="tarifs" className="checker border-b-2 border-void py-20 md:py-28">
      <div className="section-pad">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 font-mono text-[11px] tracking-wider text-mute uppercase">
                // tarifs
              </p>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                La grille
                <span className="ml-3 bg-acid px-2">brute</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {services.map((g, i) => (
                <button
                  key={g.category}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "border-2 border-void px-4 py-2 font-mono text-[11px] tracking-wider uppercase transition-colors",
                    active === i
                      ? "bg-void text-acid"
                      : "bg-paper hover:bg-sky hover:text-paper",
                  )}
                >
                  {g.category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.category}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="border-2 border-void bg-paper"
            >
              {current.items.map((item, i) => (
                <div
                  key={item.name}
                  className={cn(
                    "grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5 md:grid-cols-[80px_1fr_auto_auto] md:gap-8 md:px-6",
                    i !== current.items.length - 1 && "border-b-2 border-void",
                  )}
                >
                  <span className="font-mono text-xs text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight md:text-3xl">
                    {item.name}
                  </h3>
                  <span className="hidden font-mono text-xs tracking-wider text-mute uppercase md:block">
                    {item.duration}
                  </span>
                  <span className="bg-void px-3 py-1 font-display text-lg font-extrabold text-acid md:text-2xl">
                    {item.price}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
