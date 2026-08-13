# Maison Aurèle

Site vitrine premium pour un atelier de coiffure haut de gamme.

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** v4
- **Framer Motion** — animations & révélations
- **Lenis** — smooth scroll
- Polices : **Bodoni Moda** + **Outfit**

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande        | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Serveur de développement |
| `npm run build` | Build production         |
| `npm run start` | Serveur production       |
| `npm run lint`  | ESLint                   |

## Contenu éditable

Les textes, tarifs, équipe et médias sont centralisés dans :

```
src/data/salon.ts
```

## Arborescence

```
src/
  app/           # Layout, page, styles, icon
  components/    # UI sections
  data/          # Contenu du salon
  lib/           # Utilitaires
assets/          # Médias locaux (optionnel)
docs/            # Documentation
```

## Design

Direction éditoriale mode : fond encre, accents cuivre, typographie Bodoni, hero full-bleed, catégories Homme / Femme / Couleur / Soins / Événement, carte prestations, lookbook, réservation.

## Licence

MIT — voir `LICENSE`.
