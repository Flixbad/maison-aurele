import { salon } from "@/data/salon";

export function Marquee() {
  const items = [
    "Coupe signature",
    "Balayage",
    "Barbe premium",
    "Soins rituels",
    "Mariage",
    "Coloration",
    "Brushing volume",
    "Styling homme",
  ];
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-ink-soft py-4">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xl tracking-wide text-parchment-dim md:text-2xl"
          >
            <span className="mr-10 text-copper">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="section-pad border-t border-line pt-20 pb-10">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl text-parchment md:text-4xl">
            {salon.name}
          </p>
          <p className="mt-4 max-w-sm text-sm text-parchment-dim">
            Atelier de coiffure haut de gamme. Silhouettes précises, couleurs
            lumineuses, accueil confidentiel.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-[0.25em] text-copper uppercase">
            Adresse
          </p>
          <p className="text-sm text-parchment-dim">{salon.address}</p>
          <p className="mt-4 text-sm text-parchment-dim">{salon.hours.week}</p>
          <p className="text-sm text-parchment-dim">{salon.hours.sunday}</p>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-[0.25em] text-copper uppercase">
            Contact
          </p>
          <a
            href={`tel:${salon.phone}`}
            className="block text-sm text-parchment transition-colors hover:text-copper-bright"
          >
            {salon.phone}
          </a>
          <a
            href={`mailto:${salon.email}`}
            className="mt-2 block text-sm text-parchment transition-colors hover:text-copper-bright"
          >
            {salon.email}
          </a>
          <div className="mt-6 flex gap-4">
            {salon.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-[11px] tracking-[0.2em] text-parchment-dim uppercase transition-colors hover:text-copper-bright"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-parchment-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {salon.name}. Tous droits réservés.</p>
        <p className="tracking-[0.15em] uppercase">Sur rendez-vous uniquement</p>
      </div>
    </footer>
  );
}
