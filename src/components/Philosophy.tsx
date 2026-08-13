import { manifesto } from "@/data/salon";
import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section id="methode" className="border-b-2 border-void bg-void py-20 text-paper md:py-28">
      <div className="section-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-2 font-mono text-[11px] tracking-wider text-acid uppercase">
            // méthode
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Trois gestes.
            <br />
            Une coupe.
          </h2>
          <p className="mt-6 max-w-sm text-paper/70">
            Pas de discours spa. Un protocole clair — du diagnostic à la
            sortie, chaque étape a un job.
          </p>
          <div className="mt-10 inline-flex rotate-[-2deg] border-2 border-acid bg-signal px-4 py-2 font-mono text-xs tracking-wider text-paper uppercase">
            No fluff / All cut
          </div>
        </Reveal>

        <div className="space-y-4">
          {manifesto.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <article className="grid gap-4 border-2 border-paper/20 bg-paper/5 p-5 backdrop-blur-sm md:grid-cols-[100px_1fr] md:p-7">
                <div className="font-display text-5xl font-extrabold text-acid">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-paper/70">{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
