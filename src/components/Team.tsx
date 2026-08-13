import Image from "next/image";
import { team } from "@/data/salon";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equipe" className="section-pad border-t border-line py-24 md:py-32">
      <Reveal>
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.3em] text-copper uppercase">
              Équipe
            </p>
            <h2 className="font-display text-4xl text-parchment md:text-6xl">
              Les mains derrière
              <br />
              la signature.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-parchment-dim">
            Trois profils, une même obsession : le rendu impeccable et le
            conseil honnête.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.1}>
            <article className="group">
              <div className="relative mb-5 aspect-[3/4] overflow-hidden bg-ink-lift">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-60" />
              </div>
              <p className="mb-1 text-[10px] tracking-[0.25em] text-copper uppercase">
                {member.role}
              </p>
              <h3 className="font-display text-2xl text-parchment md:text-3xl">
                {member.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-parchment-dim">
                {member.bio}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
