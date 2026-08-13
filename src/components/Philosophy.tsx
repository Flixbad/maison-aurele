import { philosophy } from "@/data/salon";
import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section id="atelier" className="section-pad relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,137,90,0.12),transparent_55%)]" />

      <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[0.3em] text-copper uppercase">
            L&apos;atelier
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-parchment md:text-6xl">
            Moins de tendance.
            <br />
            Plus de vous.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-parchment-dim md:text-lg">
            Maison Aurèle n&apos;est pas une chaîne. C&apos;est un atelier où le
            diagnostic précède le ciseau, où la couleur se construit en
            conversation, et où chaque client repart avec une silhouette qui lui
            appartient vraiment.
          </p>
        </Reveal>

        <div className="relative space-y-0 border-t border-line">
          {philosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="border-b border-line py-8">
                <div className="mb-3 flex items-baseline gap-4">
                  <span className="font-display text-sm text-copper">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl text-parchment md:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-md pl-10 text-sm leading-relaxed text-parchment-dim md:text-base">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
