# Maison Aurèle

Site vitrine Cut Lab — export statique prêt pour Hostinger mutualisé.

## Stack

- **Next.js** (App Router, `output: "export"`) + TypeScript
- **Tailwind CSS** v4
- **Framer Motion** · **Lenis**
- Polices : **Syne** · **Space Grotesk** · **IBM Plex Mono**

## Démarrage

```bash
npm install
npm run dev
```

## Build Hostinger (`out/`)

```bash
npm run build
```

Le dossier **`out/`** contient le site HTML/CSS/JS prêt à uploader.

### Upload Hostinger mutualisé

1. Lance `npm run build`
2. Ouvre le gestionnaire de fichiers Hostinger (ou FTP)
3. Va dans `public_html` (ou le sous-dossier de ton domaine)
4. Envoie **tout le contenu** de `out/` (pas le dossier `out` lui-même)
5. Vérifie que `.htaccess` est bien présent à la racine

Le site est 100 % statique : pas besoin de Node.js sur l’hébergement.

## Scripts

| Commande          | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Dev local                            |
| `npm run build`   | Génère `out/` (export Hostinger)     |
| `npm run export`  | Alias de `build`                     |
| `npm run start`   | Prévisualise `out/` en local         |
| `npm run lint`    | ESLint                               |

## Contenu éditable

```
src/data/salon.ts
```

## Arborescence

```
src/          # Code source
public/       # Favicon + .htaccess (copiés dans out/)
out/          # Build à uploader sur Hostinger
docs/         # Documentation
```

## Licence

MIT — voir `LICENSE`.
