"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/salon";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="border-b-2 border-void py-20 md:py-28">
      <div className="section-pad">
        <Reveal>
          <p className="mb-2 font-mono text-[11px] tracking-wider text-mute uppercase">
            // feedback
          </p>
          <h2 className="font-display mb-12 text-4xl font-extrabold tracking-tight md:text-5xl">
            Ils ont testé
            <span className="ml-2 inline-block -rotate-2 bg-sky px-2 text-paper">
              le lab
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative border-2 border-void bg-paper p-6 shadow-[10px_10px_0_0_#d4ff1e] md:p-12">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.author}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-display text-2xl leading-snug font-extrabold tracking-tight md:text-4xl">
                  “{item.quote}”
                </p>
                <footer className="mt-8 flex flex-wrap items-center gap-4">
                  <cite className="not-italic">
                    <span className="block font-mono text-sm tracking-wider uppercase">
                      {item.author}
                    </span>
                    <span className="text-sm text-mute">{item.detail}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Avis ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-10 border-2 border-void px-4 font-mono text-xs transition-colors ${
                    i === index ? "bg-void text-acid" : "bg-paper hover:bg-acid"
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
