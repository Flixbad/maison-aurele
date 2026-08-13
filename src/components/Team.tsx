"use client";

import Image from "next/image";
import { team } from "@/data/salon";
import { Reveal } from "./Reveal";

const rotates = ["-rotate-2", "rotate-1", "-rotate-1"];
const badges = ["bg-acid", "bg-sky text-paper", "bg-signal text-paper"];

export function Team() {
  return (
    <section id="crew" className="border-b-2 border-void py-20 md:py-28">
      <div className="section-pad">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 font-mono text-[11px] tracking-wider text-mute uppercase">
                // crew
              </p>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                Les mains
                <br />
                derrière le cut.
              </h2>
            </div>
            <p className="max-w-xs text-mute">
              Trois profils, zéro ego inutile. Chacun a sa zone. Tous ont le même
              standard.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className={`group ${rotates[i]} transition-transform hover:rotate-0`}>
                <div className="relative mb-4 aspect-[3/4] overflow-hidden border-2 border-void shadow-[8px_8px_0_0_#0c0d0f]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <span
                    className={`absolute top-3 right-3 border-2 border-void px-2 py-1 font-mono text-[10px] tracking-wider uppercase ${badges[i]}`}
                  >
                    0{i + 1}
                  </span>
                </div>
                <p className="font-mono text-[10px] tracking-wider text-mute uppercase">
                  {m.role}
                </p>
                <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-mute">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
