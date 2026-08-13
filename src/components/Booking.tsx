"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

const slots = ["Homme", "Femme", "Couleur", "Soins", "Event"];

export function Booking() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="book" className="mesh border-b-2 border-void py-20 md:py-28">
      <div className="section-pad grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-2 font-mono text-[11px] tracking-wider text-mute uppercase">
            // book
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Prends
            <br />
            ton slot.
          </h2>
          <p className="mt-6 max-w-md text-mute">
            Tu décris l’envie. On te confirme sous 24h avec le styliste et le
            créneau.
          </p>
          <ul className="mt-8 space-y-3 font-mono text-xs tracking-wider uppercase">
            <li className="flex items-center gap-3">
              <span className="bg-acid px-2 py-0.5 text-void">01</span>
              Diagnostic couleur offert si besoin
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-sky px-2 py-0.5 text-paper">02</span>
              Essai event sur devis
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-signal px-2 py-0.5 text-paper">03</span>
              Cancel jusqu’à H-12
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex min-h-[380px] flex-col justify-center border-2 border-void bg-acid p-8 shadow-[12px_12px_0_0_#0c0d0f]">
              <p className="font-display text-4xl font-extrabold tracking-tight">
                Reçu.
              </p>
              <p className="mt-4 max-w-sm text-void/80">
                On te write back vite. Prépare tes refs si tu en as.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 w-fit border-2 border-void bg-void px-4 py-2 font-mono text-xs tracking-wider text-acid uppercase"
              >
                Encore
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="border-2 border-void bg-paper p-5 shadow-[12px_12px_0_0_#0c0d0f] md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block font-mono text-[10px] tracking-wider uppercase">
                    Prénom
                  </span>
                  <input
                    required
                    name="firstName"
                    className="w-full border-2 border-void bg-paper-2 px-3 py-2 outline-none focus:bg-acid/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block font-mono text-[10px] tracking-wider uppercase">
                    Nom
                  </span>
                  <input
                    required
                    name="lastName"
                    className="w-full border-2 border-void bg-paper-2 px-3 py-2 outline-none focus:bg-acid/40"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block font-mono text-[10px] tracking-wider uppercase">
                    Téléphone
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="w-full border-2 border-void bg-paper-2 px-3 py-2 outline-none focus:bg-acid/40"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block font-mono text-[10px] tracking-wider uppercase">
                    Univers
                  </span>
                  <select
                    name="category"
                    defaultValue={slots[0]}
                    className="w-full appearance-none border-2 border-void bg-paper-2 px-3 py-2 outline-none focus:bg-sky/20"
                  >
                    {slots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block font-mono text-[10px] tracking-wider uppercase">
                    Brief
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Longueur, refs, contraintes…"
                    className="w-full resize-none border-2 border-void bg-paper-2 px-3 py-2 outline-none placeholder:text-mute/50 focus:bg-acid/30"
                  />
                </label>
              </div>
              <button
                type="submit"
                data-cursor="SEND"
                className="mt-6 w-full bg-void py-4 font-mono text-xs tracking-wider text-acid uppercase hover:bg-signal hover:text-paper"
              >
                Envoyer la demande →
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
