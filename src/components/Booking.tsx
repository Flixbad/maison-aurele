"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

const slots = ["Homme", "Femme", "Couleur", "Soins", "Événement"];

export function Booking() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="rdv" className="section-pad relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-ink-soft" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,137,90,0.18),transparent_45%)]" />

      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-3 text-[11px] tracking-[0.3em] text-copper uppercase">
            Réservation
          </p>
          <h2 className="font-display text-4xl text-parchment md:text-6xl">
            Votre prochain
            <br />
            rendez-vous.
          </h2>
          <p className="mt-6 max-w-md text-parchment-dim">
            Indiquez vos envies — nous confirmons sous 24h avec un créneau et
            le styliste idéal.
          </p>
          <ul className="mt-10 space-y-3 text-sm text-parchment-dim">
            <li className="flex gap-3">
              <span className="text-copper">—</span>
              Consultation offerte pour les couleurs complexes
            </li>
            <li className="flex gap-3">
              <span className="text-copper">—</span>
              Essai mariage disponible sur devis
            </li>
            <li className="flex gap-3">
              <span className="text-copper">—</span>
              Annulation jusqu&apos;à 12h avant
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          {sent ? (
            <div className="flex min-h-[360px] flex-col justify-center border border-copper/40 bg-ink/40 p-8 md:p-10">
              <p className="font-display text-3xl text-parchment">Demande envoyée.</p>
              <p className="mt-4 text-parchment-dim">
                Merci — l&apos;équipe vous recontacte très vite pour finaliser
                votre créneau.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 w-fit text-[11px] tracking-[0.22em] text-copper-bright uppercase underline-offset-4 hover:underline"
              >
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="border border-line bg-ink/40 p-6 backdrop-blur-sm md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-[10px] tracking-[0.22em] text-parchment-dim uppercase">
                    Prénom
                  </span>
                  <input
                    required
                    name="firstName"
                    className="w-full border-b border-line-strong bg-transparent py-2 text-parchment outline-none transition-colors focus:border-copper"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[10px] tracking-[0.22em] text-parchment-dim uppercase">
                    Nom
                  </span>
                  <input
                    required
                    name="lastName"
                    className="w-full border-b border-line-strong bg-transparent py-2 text-parchment outline-none transition-colors focus:border-copper"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[10px] tracking-[0.22em] text-parchment-dim uppercase">
                    Téléphone
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="w-full border-b border-line-strong bg-transparent py-2 text-parchment outline-none transition-colors focus:border-copper"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[10px] tracking-[0.22em] text-parchment-dim uppercase">
                    Univers
                  </span>
                  <select
                    name="category"
                    className="w-full appearance-none border-b border-line-strong bg-transparent py-2 text-parchment outline-none focus:border-copper"
                    defaultValue={slots[0]}
                  >
                    {slots.map((s) => (
                      <option key={s} value={s} className="bg-ink text-parchment">
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[10px] tracking-[0.22em] text-parchment-dim uppercase">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Longueur souhaitée, références, contraintes…"
                    className="w-full resize-none border-b border-line-strong bg-transparent py-2 text-parchment outline-none placeholder:text-parchment-dim/40 focus:border-copper"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-copper py-4 text-[11px] tracking-[0.25em] text-ink uppercase transition-colors hover:bg-copper-bright"
              >
                Envoyer la demande
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
