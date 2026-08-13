"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { salon } from "@/data/salon";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const rot = useTransform(sx, [-200, 200], [-8, 8]);
  const imgX = useTransform(sx, [-200, 200], [16, -16]);
  const imgY = useTransform(sy, [-160, 160], [12, -12]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="mesh relative min-h-[100svh] overflow-hidden pt-20 pb-8"
    >
      <div className="section-pad relative grid min-h-[calc(100svh-5rem)] items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 border-2 border-void bg-paper px-3 py-1 font-mono text-[11px] tracking-wider uppercase"
          >
            <span className="h-2 w-2 animate-pulse bg-signal" />
            Cut lab · Los Santos · Open
          </motion.div>

          <motion.h1
            className="font-display text-[clamp(3.2rem,12vw,9rem)] leading-[0.82] font-extrabold tracking-[-0.04em]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">MAISON</span>
            <span className="relative inline-block">
              <span className="relative z-10">AURÈLE</span>
              <motion.span
                aria-hidden
                className="absolute -inset-x-2 -inset-y-1 -z-0 bg-acid"
                style={{ rotate: rot }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-md text-lg text-mute md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {salon.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#book"
              data-cursor="GO"
              className="bg-void px-6 py-3.5 font-mono text-xs tracking-wider text-acid uppercase"
            >
              Book a cut
            </a>
            <a
              href="#univers"
              data-cursor="VIEW"
              className="border-2 border-void bg-paper px-6 py-3.5 font-mono text-xs tracking-wider uppercase hover:bg-sky hover:text-paper"
            >
              Voir les univers
            </a>
          </motion.div>

          <div className="mt-14 flex flex-wrap gap-6 font-mono text-[11px] tracking-wider text-mute uppercase">
            <span>Femme</span>
            <span className="text-void">/</span>
            <span>Homme</span>
            <span className="text-void">/</span>
            <span>Couleur</span>
            <span className="text-void">/</span>
            <span>Event</span>
          </div>
        </div>

        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
          style={{ x: imgX, y: imgY }}
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -top-4 -left-4 z-20 border-2 border-void bg-signal px-3 py-1 font-mono text-[10px] tracking-wider text-paper uppercase">
            Session live
          </div>
          <div className="absolute -right-3 -bottom-3 z-20 h-24 w-24 border-2 border-void bg-acid p-2 font-mono text-[10px] leading-tight uppercase md:h-28 md:w-28">
            <span className="block font-display text-2xl font-extrabold">24h</span>
            conf. RDV
          </div>
          <div className="relative h-full overflow-hidden border-2 border-void bg-void shadow-[12px_12px_0_0_#0c0d0f]">
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
              alt="Cut lab Maison Aurèle"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky/20 via-transparent to-acid/25 mix-blend-multiply" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute top-[18%] right-[8%] hidden xl:block">
        <div className="animate-spin-slow font-display text-[11rem] leading-none font-extrabold text-void/5 select-none">
          CUT
        </div>
      </div>
    </section>
  );
}
