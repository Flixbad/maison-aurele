export const salon = {
  name: "Maison Aurèle",
  tagline: "L'art de révéler votre silhouette.",
  phone: "555-0142",
  email: "contact@maison-aurele.com",
  address: "47 Boulevard de la Mode, Los Santos",
  hours: {
    week: "Mar — Sam · 09h — 20h",
    sunday: "Dimanche · Sur rendez-vous",
  },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
  ],
} as const;

export const categories = [
  {
    id: "femme",
    label: "Femme",
    subtitle: "Coupe · Brushing · Mise en forme",
    description:
      "Silhouettes précises, volumes maîtrisés et finitions couture pour sublimer chaque visage.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "homme",
    label: "Homme",
    subtitle: "Coupe · Barbe · Styling",
    description:
      "Découpes nettes, textures travaillées et entretien barbe dans un rituel millimétré.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "couleur",
    label: "Couleur",
    subtitle: "Coloration · Balayage · Gloss",
    description:
      "Nuances sur-mesure, balayages lumineux et techniques balayage / coloration sans compromis.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "soins",
    label: "Soins",
    subtitle: "Réparation · Hydratation · Brillance",
    description:
      "Protocoles reconstructeurs et rituels sensoriels pour une fibre forte et éclatante.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "mariage",
    label: "Événement",
    subtitle: "Mariage · Soirée · Shoot",
    description:
      "Coiffures d'exception pour vos moments clés — essayages, essais et jour J inclus.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
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
    role: "Fondatrice · Directrice artistique",
    bio: "15 ans d'expérience en haute coiffure. Obsession du détail et de la lumière.",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Léa Fontaine",
    role: "Coloriste senior",
    bio: "Maître des balayages et des nuances qui changent un regard.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Marcus Reed",
    role: "Barber & coupe homme",
    bio: "Précision millimétrée, textures modernes et entretien barbe premium.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1000&q=80",
    alt: "Coupe femme texturée",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=80",
    alt: "Coupe homme fade",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1000&q=80",
    alt: "Balayage blond",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    alt: "Brushing glossy",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1595475878913-8705e5e1e0c4?auto=format&fit=crop&w=1000&q=80",
    alt: "Coiffure événement",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
    alt: "Ambiance salon",
    span: "wide",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Un vrai atelier. On sort transformé, jamais stéréotypé. Aurèle lit le visage comme personne.",
    author: "Camille R.",
    detail: "Cliente · Coupe & couleur",
  },
  {
    quote:
      "La coupe homme la plus précise que j'ai eue en ville. Accueil impeccable, résultat net.",
    author: "Noah K.",
    detail: "Client · Coupe & barbe",
  },
  {
    quote:
      "Mon balayage a tenu des mois. Texture, lumière, entretien — tout est pensé.",
    author: "Sofia M.",
    detail: "Cliente · Balayage",
  },
] as const;

export const philosophy = [
  {
    title: "Sur-mesure",
    text: "Chaque coupe part de votre morphologie, de votre mode de vie et de la lumière qui vous va.",
  },
  {
    title: "Matière noble",
    text: "Produits haut de gamme, techniques durables et respect absolu de la fibre.",
  },
  {
    title: "Temps long",
    text: "On ne précipite rien. Le diagnostic, le geste, le rendu — chaque étape a sa place.",
  },
] as const;
