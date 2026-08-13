"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { categories } from "@/data/salon";
import { Reveal } from "./Reveal";

const tintMap = {
  acid: "bg-acid",
  sky: "bg-sky text-paper",
  signal: "bg-signal text-paper",
} as const;

export function Categories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-45%"]);

  return (
    <section id="univers" className="overflow-hidden border-b-2 border-void py-20 md:py-28">
      <div className="section-pad mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="mb-2 font-mono text-[11px] tracking-wider text-mute uppercase">
            // univers
          </p>
          <h2 className="font-display max-w-xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Cinq zones.
            <br />
            Zéro compromis.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-mute">
            Scrolle latéralement — chaque carte est un atelier avec son propre
            rythme.
          </p>
        </Reveal>
      </div>

      <div ref={trackRef} className="relative">
        <motion.div style={{ x }} className="flex w-max gap-4 px-[clamp(1rem,3.5vw,3.5rem)]">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#tarifs"
              data-cursor={cat.label.toUpperCase()}
              className="group relative block w-[78vw] max-w-[420px] shrink-0 overflow-hidden border-2 border-void bg-paper md:w-[380px]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="400px"
                />
                <div
                  className={`absolute top-3 left-3 border-2 border-void px-2 py-1 font-mono text-[10px] tracking-wider uppercase ${tintMap[cat.tint]}`}
                >
                  {cat.code}
                </div>
              </div>
              <div className="border-t-2 border-void p-5">
                <p className="font-mono text-[10px] tracking-wider text-mute uppercase">
                  {cat.subtitle}
                </p>
                <h3 className="font-display mt-1 text-3xl font-extrabold tracking-tight">
                  {cat.label}
                </h3>
                <p className="mt-3 text-sm text-mute">{cat.description}</p>
                <span className="mt-4 inline-block font-mono text-[11px] tracking-wider uppercase group-hover:text-signal">
                  → Prestations
                </span>
              </div>
              <span className="pointer-events-none absolute right-3 bottom-24 font-display text-7xl font-extrabold text-void/10">
                0{i + 1}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
