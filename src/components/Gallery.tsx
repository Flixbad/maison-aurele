"use client";

import Image from "next/image";
import { gallery } from "@/data/salon";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

export function Gallery() {
  return (
    <section id="shots" className="border-b-2 border-void bg-paper-2 py-20 md:py-28">
      <div className="section-pad">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-[11px] tracking-wider text-mute uppercase">
                // shots
              </p>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                Lookbook
                <span className="stroke-text ml-3">chaos</span>
              </h2>
            </div>
            <p className="hidden max-w-[12rem] text-right font-mono text-[10px] tracking-wider text-mute uppercase md:block">
              Hover = couleur
            </p>
          </div>
        </Reveal>

        <div className="columns-2 gap-3 md:columns-3 md:gap-4">
          {gallery.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 0.05} className="mb-3 break-inside-avoid md:mb-4">
              <figure
                data-cursor={shot.tag}
                className={cn(
                  "group relative overflow-hidden border-2 border-void bg-void",
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-square",
                )}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                <figcaption className="absolute bottom-0 left-0 bg-acid px-2 py-1 font-mono text-[10px] tracking-wider uppercase opacity-0 transition group-hover:opacity-100">
                  {shot.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
