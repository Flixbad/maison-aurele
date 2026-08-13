"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/salon";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="section-pad border-t border-line py-24 md:py-32">
      <Reveal>
        <p className="mb-3 text-[11px] tracking-[0.3em] text-copper uppercase">
          Voix
        </p>
        <h2 className="font-display mb-12 text-4xl text-parchment md:mb-16 md:text-5xl">
          Ils nous font confiance
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <p className="font-display text-2xl leading-snug text-parchment md:text-4xl md:leading-snug">
                “{item.quote}”
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="block text-sm tracking-wide text-copper-bright">
                    {item.author}
                  </span>
                  <span className="mt-1 block text-xs text-parchment-dim">
                    {item.detail}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Témoignage ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all ${
                  i === index
                    ? "w-10 bg-copper"
                    : "w-4 bg-line-strong hover:bg-parchment-dim"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
