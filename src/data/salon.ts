export const salon = {
  name: "Maison Aurèle",
  short: "AURÈLE",
  tagline: "On ne coiffe pas. On découpe une attitude.",
  phone: "555-0142",
  email: "contact@maison-aurele.com",
  address: "47 Boulevard de la Mode, Los Santos",
  hours: {
    week: "Mar — Sam · 09h — 20h",
    sunday: "Dimanche · Sur rendez-vous",
  },
  socials: [
    { label: "IG", href: "#" },
    { label: "TT", href: "#" },
  ],
} as const;

export const categories = [
  {
    id: "femme",
    label: "Femme",
    code: "01",
    subtitle: "Coupe · Brushing · Forme",
    description:
      "Lignes nettes, volumes architecturés, finitions qui tiennent la journée — pas le cliché Instagram.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    tint: "acid",
  },
  {
    id: "homme",
    label: "Homme",
    code: "02",
    subtitle: "Coupe · Barbe · Texture",
    description:
      "Fades millimétrés, textures mates, barbe sculptée. Zéro fluff, 100% structure.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=80",
    tint: "sky",
  },
  {
    id: "couleur",
    label: "Couleur",
    code: "03",
    subtitle: "Balayage · Flash · Gloss",
    description:
      "Nuances construites sur votre lumière naturelle. Pas de formule catalogue.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
    tint: "signal",
  },
  {
    id: "soins",
    label: "Soins",
    code: "04",
    subtitle: "Repair · Hydra · Shine",
    description:
      "Protocoles intensifs pour une fibre qui répond. Le rendu se voit avant le discours.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=80",
    tint: "acid",
  },
  {
    id: "mariage",
    label: "Event",
    code: "05",
    subtitle: "Mariage · Shoot · Night",
    description:
      "Coiffures scéniques, essais inclus, timing précis. Le jour J n’est pas une improvisation.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    tint: "sky",
  },
] as const;

export const services = [
  {
    category: "Femme",
    items: [
      { name: "Coupe signature", price: "85$", duration: "45 min" },
      { name: "Coupe + brushing", price: "110$", duration: "75 min" },
      { name: "Brushing volume", price: "55$", duration: "40 min" },
      { name: "Coiffure cocktail", price: "95$", duration: "60 min" },
    ],
  },
  {
    category: "Homme",
    items: [
      { name: "Coupe classic", price: "45$", duration: "30 min" },
      { name: "Coupe + barbe", price: "65$", duration: "45 min" },
      { name: "Rasage hot towel", price: "40$", duration: "30 min" },
      { name: "Styling express", price: "25$", duration: "15 min" },
    ],
  },
  {
    category: "Couleur",
    items: [
      { name: "Coloration racine", price: "95$", duration: "90 min" },
      { name: "Balayage lumineux", price: "160$", duration: "2h30" },
      { name: "Full color", price: "140$", duration: "2h" },
      { name: "Gloss brillance", price: "55$", duration: "30 min" },
    ],
  },
  {
    category: "Soins",
    items: [
      { name: "Rituel hydratation", price: "45$", duration: "30 min" },
      { name: "Protocole réparation", price: "75$", duration: "45 min" },
      { name: "Soin botox capillaire", price: "120$", duration: "60 min" },
      { name: "Massage cuir chevelu", price: "35$", duration: "20 min" },
    ],
  },
] as const;

export const team = [
  {
    name: "Aurèle Moreau",
    role: "Cut director",
    bio: "Obsessions : angles, lumière, morphologie. Zéro tendance jetable.",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Léa Fontaine",
    role: "Color alchemist",
    bio: "Balayages et flashs qui changent un visage sans le caricaturer.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Marcus Reed",
    role: "Barber unit",
    bio: "Fades, textures, barbe. Précision d’atelier, énergie street.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1000&q=80",
    alt: "Texture femme",
    tag: "FEMME",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=80",
    alt: "Fade homme",
    tag: "HOMME",
  },
  {
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1000&q=80",
    alt: "Balayage",
    tag: "COULEUR",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    alt: "Gloss",
    tag: "SHINE",
  },
  {
    src: "https://images.unsplash.com/photo-1595475878913-8705e5e1e0c4?auto=format&fit=crop&w=1000&q=80",
    alt: "Event hair",
    tag: "EVENT",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
    alt: "Studio",
    tag: "LAB",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Pas un salon soft. Un vrai labo. Je suis sorti avec une tête qui me ressemble enfin.",
    author: "Camille R.",
    detail: "Coupe & couleur",
  },
  {
    quote:
      "Marcus m’a réglé le fade au millimètre. Accueil direct, résultat surgical.",
    author: "Noah K.",
    detail: "Coupe & barbe",
  },
  {
    quote:
      "Mon balayage a tenu des mois. Zéro discours marketing — juste le rendu.",
    author: "Sofia M.",
    detail: "Balayage",
  },
] as const;

export const manifesto = [
  { n: "01", title: "Diagnostiquer", text: "Morphologie, texture, rythme de vie. Avant le premier coup de ciseau." },
  { n: "02", title: "Découper", text: "Des lignes qui tiennent. Pas des effets qui s’effondrent demain." },
  { n: "03", title: "Affûter", text: "Finition, produit, entretien. Vous repartez autonome." },
] as const;
