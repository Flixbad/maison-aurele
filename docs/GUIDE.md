# Guide — Hostinger mutualisé

## Prérequis

- Node.js 20+ (uniquement sur ta machine, pas sur Hostinger)
- Accès FTP / Gestionnaire de fichiers Hostinger

## Générer le site

```bash
npm install
npm run build
```

Résultat : dossier `out/` à la racine du projet.

## Déployer

1. Connecte-toi à Hostinger
2. Ouvre **public_html** (domaine principal) ou le dossier du sous-domaine
3. Upload le **contenu** de `out/` :
   - `index.html`
   - `_next/`
   - `favicon.svg`
   - `.htaccess`
   - etc.
4. Ouvre ton domaine dans le navigateur

## Sous-dossier (ex. `/salon`)

Si tu places le site dans `public_html/salon/` :

1. Dans `next.config.ts`, ajoute :
   ```ts
   basePath: "/salon",
   ```
2. Rebuild (`npm run build`)
3. Upload le contenu de `out/` dans `public_html/salon/`

## Personnalisation

1. `src/data/salon.ts` — textes, tarifs, équipe, images
2. `src/app/globals.css` — couleurs (`--acid`, `--sky`, `--signal`…)
3. Rebuild + re-upload de `out/`
