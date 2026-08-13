"use client";

import Image from "next/image";
import { categories } from "@/data/salon";
import { Reveal } from "./Reveal";

export function Categories() {
  return (
    <section id="categories" className="section-pad relative py-24 md:py-32">
      <Reveal>
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.3em] text-copper uppercase">
              Univers
            </p>
            <h2 className="font-display text-4xl text-parchment md:text-6xl">
              Cinq ateliers,
              <br />
              une signature.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-parchment-dim md:text-base">
            Homme, femme, couleur, soins et événements — chaque univers a sa
            méthode, jamais une formule toute faite.
          </p>
        </div>
      </Reveal>

      <div className="grid auto-rows-[minmax(320px,auto)] gap-4 md:grid-cols-6">
        {categories.map((cat, i) => {
          const wide = i === 0 || i === 3;
          return (
            <Reveal
              key={cat.id}
              delay={i * 0.08}
              className={wide ? "md:col-span-4" : "md:col-span-2"}
            >
              <a
                href="#services"
                data-cursor="hover"
                className="group relative block h-full min-h-[320px] overflow-hidden bg-ink-lift md:min-h-[380px]"
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                <div className="absolute inset-0 bg-copper/0 transition-colors duration-500 group-hover:bg-copper/10" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="mb-2 text-[10px] tracking-[0.28em] text-copper-bright uppercase">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-display text-3xl text-parchment md:text-4xl">
                    {cat.label}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-parchment-dim opacity-90 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 md:text-[15px]">
                    {cat.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-parchment uppercase">
                    Voir les prestations
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
