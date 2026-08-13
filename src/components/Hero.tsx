"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { salon } from "@/data/salon";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2200&q=85"
          alt="Ambiance Maison Aurèle"
          fill
          priority
          className="object-cover object-[center_28%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
      </motion.div>

      <div className="section-pad relative z-10 w-full pb-16 pt-32 md:pb-24">
        <motion.p
          className="mb-5 text-[11px] tracking-[0.35em] text-copper-bright uppercase"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Haute coiffure · Los Santos
        </motion.p>

        <motion.h1
          className="font-display max-w-5xl text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.9] tracking-[-0.02em] text-parchment"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {salon.name}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-base text-parchment-dim md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          {salon.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#rdv"
            className="bg-copper px-7 py-3.5 text-[11px] tracking-[0.22em] text-ink uppercase transition-colors hover:bg-copper-bright"
          >
            Réserver
          </a>
          <a
            href="#categories"
            className="border border-line-strong px-7 py-3.5 text-[11px] tracking-[0.22em] text-parchment uppercase transition-colors hover:border-parchment/50"
          >
            Découvrir
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-6 bottom-10 hidden text-[10px] tracking-[0.3em] text-parchment-dim uppercase md:block">
        Scroll
      </div>
    </section>
  );
}
