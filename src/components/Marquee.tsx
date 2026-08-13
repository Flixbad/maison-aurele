export function Marquee() {
  const rowA = [
    "COUPE SIGNATURE",
    "BALAYAGE",
    "FADE",
    "BARBE",
    "GLOSS",
    "EVENT HAIR",
    "TEXTURE",
    "COLOR FLASH",
  ];
  const rowB = [
    "FEMME",
    "HOMME",
    "SOINS",
    "MARIAGE",
    "SHOOT",
    "VOLUME",
    "PRECISION",
    "ATTITUDE",
  ];

  const Loop = ({
    items,
    reverse,
    dark,
  }: {
    items: string[];
    reverse?: boolean;
    dark?: boolean;
  }) => {
    const loop = [...items, ...items];
    return (
      <div
        className={`overflow-hidden border-y-2 border-void py-3 ${
          dark ? "bg-void text-acid" : "bg-acid text-void"
        }`}
      >
        <div
          className={`flex w-max gap-8 whitespace-nowrap ${
            reverse ? "animate-marquee-rev" : "animate-marquee"
          }`}
        >
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-2xl font-extrabold tracking-tight md:text-3xl"
            >
              {item}
              <span className="mx-8 inline-block text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Loop items={rowA} />
      <Loop items={rowB} reverse dark />
    </div>
  );
}
