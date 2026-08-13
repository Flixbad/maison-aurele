"use client";

import Image from "next/image";
import { gallery } from "@/data/salon";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

export function Gallery() {
  return (
    <section id="lookbook" className="section-pad border-t border-line py-24 md:py-32">
      <Reveal>
        <div className="mb-14">
          <p className="mb-3 text-[11px] tracking-[0.3em] text-copper uppercase">
            Lookbook
          </p>
          <h2 className="font-display text-4xl text-parchment md:text-6xl">
            Ce que l&apos;on crée
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {gallery.map((shot, i) => (
          <Reveal
            key={shot.src}
            delay={i * 0.06}
            className={cn(
              shot.span === "tall" && "row-span-2",
              shot.span === "wide" && "col-span-2",
              i === 0 && "md:col-span-2 md:row-span-2",
            )}
          >
            <figure
              data-cursor="hover"
              className={cn(
                "group relative overflow-hidden bg-ink-lift",
                shot.span === "tall" || i === 0
                  ? "aspect-[3/4] min-h-full"
                  : "aspect-square",
                shot.span === "wide" && i !== 0 && "aspect-[2/1] md:aspect-[2/1]",
              )}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 to-transparent p-4 text-[10px] tracking-[0.2em] text-parchment uppercase opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {shot.alt}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
