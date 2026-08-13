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
    <section id="services" className="section-pad border-t border-line py-24 md:py-32">
      <Reveal>
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-[11px] tracking-[0.3em] text-copper uppercase">
            Prestations
          </p>
          <h2 className="font-display text-4xl text-parchment md:text-6xl">
            La carte
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {services.map((group, i) => (
              <button
                key={group.category}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 border px-4 py-3 text-left text-[11px] tracking-[0.22em] uppercase transition-colors",
                  active === i
                    ? "border-copper bg-copper/15 text-copper-bright"
                    : "border-line text-parchment-dim hover:border-line-strong hover:text-parchment",
                )}
              >
                {group.category}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-line"
            >
              {current.items.map((item) => (
                <div
                  key={item.name}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-6 md:grid-cols-[1fr_auto_auto] md:gap-8"
                >
                  <div>
                    <h3 className="font-display text-2xl text-parchment transition-colors group-hover:text-copper-bright md:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs tracking-wider text-parchment-dim md:hidden">
                      {item.duration}
                    </p>
                  </div>
                  <p className="hidden text-xs tracking-[0.18em] text-parchment-dim uppercase md:block">
                    {item.duration}
                  </p>
                  <p className="font-display text-xl text-copper-bright md:text-2xl">
                    {item.price}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
