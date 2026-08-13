import { salon } from "@/data/salon";

export function Footer() {
  return (
    <footer className="bg-void text-paper">
      <div className="section-pad grid gap-10 border-b-2 border-paper/15 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {salon.short}
            <span className="text-acid">.</span>
          </p>
          <p className="mt-4 max-w-sm text-paper/60">{salon.tagline}</p>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] tracking-wider text-acid uppercase">
            Spot
          </p>
          <p className="text-sm text-paper/70">{salon.address}</p>
          <p className="mt-3 text-sm text-paper/70">{salon.hours.week}</p>
          <p className="text-sm text-paper/70">{salon.hours.sunday}</p>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] tracking-wider text-acid uppercase">
            Line
          </p>
          <a href={`tel:${salon.phone}`} className="block text-sm hover:text-acid">
            {salon.phone}
          </a>
          <a
            href={`mailto:${salon.email}`}
            className="mt-2 block text-sm hover:text-acid"
          >
            {salon.email}
          </a>
          <div className="mt-5 flex gap-3">
            {salon.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="border border-paper/30 px-3 py-1 font-mono text-[11px] tracking-wider uppercase hover:border-acid hover:text-acid"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-pad flex flex-col gap-2 py-6 font-mono text-[10px] tracking-wider text-paper/40 uppercase sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {salon.name}</p>
        <p>Cut lab · No appointments = no entry</p>
      </div>
    </footer>
  );
}
