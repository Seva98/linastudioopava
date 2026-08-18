export const siteConfig = {
  name: "Lina Studio Opava",
  bookingUrl: "https://www.isportsystem.cz",
  instagramUrl: "https://www.instagram.com/linastudio.opava",
  instagramHandle: "@linastudio.opava",
  email: "info@linastudio.cz",
  phone: "+420 777 123 456",
  phoneHref: "+420777123456",
  address: ["Olomoucká 406", "746 01 Opava 1"],
  mapCoordinates: [49.9405867, 17.8974933],
} as const;

export const navigation = [
  { href: "/studio", label: "Studio" },
  { href: "/lekce", label: "Lekce" },
  { href: "/tym", label: "Tým" },
  { href: "/cenik", label: "Ceník" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const classItems = [
  {
    title: "Pilates na reformeru",
    description: "Posílí, protáhne a zlepší držení těla. Moderní metoda na reformeru.",
    image: "/images/studio-reformer-client-highres.png",
    alt: "Bílý pilates reformer v prosluněném studiu",
  },
  {
    title: "Barre",
    description: "Baletní inspirace, síla, ladnost a zpevnění celého těla.",
    image: "/images/class-barre.jpg",
    alt: "Cvičenka při lekci barre u dřevěné baletní tyče",
  },
  {
    title: "Pilates na podložce",
    description: "Klasické pilates na podložce. Stabilita, střed těla, flexibilita.",
    image: "/images/class-mat.jpg",
    alt: "Podložky a pomůcky připravené na lekci pilates",
  },
  {
    title: "Individuální lekce",
    description: "Individuální přístup přizpůsobený vašim potřebám a cílům.",
    image: "/images/studio-private.jpg",
    alt: "Klidné reformer studio připravené na individuální lekci",
  },
] as const;

export const teamMembers = [
  {
    name: "Karolína Valalíková",
    role: "Lektorka",
    specialties: "Barre, Pilates na reformeru",
    image: "/images/team-tereza.jpg",
    bio: [
      "Karolína je profesionální tanečnice, pedagožka a milovnice pohybu, který ji provází už od útlého dětství. Tanci se věnuje od svých čtyř let. Vystudovala Janáčkovu konzervatoř v Ostravě, obor klasický tanec, a od roku 2012 je členkou baletního souboru Slezského divadla Opava. Vedle své jevištní kariéry se s nadšením věnuje také výuce baletu pro děti.",
      "Ve svých lekcích barre a reformeru propojuje preciznost klasické baletní techniky s bohatými zkušenostmi z profesionální taneční praxe. Důraz klade na správné provedení pohybu, ladnost, sílu, stabilitu i radost z pohybu. Její lekce jsou vhodné pro každého, kdo chce zlepšit svou kondici, držení těla a objevit krásu pohybu inspirovaného baletem – bez ohledu na předchozí zkušenosti.",
      "Když zrovna netančí, nejraději tráví čas s knihou, svou rodinou a svými dvěma irskými setry.",
    ],
  },
  {
    name: "Sára Nemeth",
    role: "Lektorka",
    specialties: "Pilates",
    image: "/images/team-nikola.jpg",
    bio: [
      "Sára věří, že pohyb má být především radostí a přirozenou součástí každodenního života. Sport ji provází od dětství - od závodního tenisu a volejbalu až po běh, který ji naučil vytrvalosti a disciplíně.",
      "K pilates ji přivedla vlastní zkušenost s bolestmi zad a hledání šetrného, ale účinného způsobu, jak posílit tělo a obnovit jeho rovnováhu. Díky pilates objevila, že skutečná sílá vychází ze správného pohybu, stability a vědomé práce s tělem.",
      "Ve svých lekcích vytváří příjemné prostředí, ve kterém se každý může cítit dobře. Jejím cílem je pomoci klientům budovat zdravý vztah k pohybu, zlepšit kvalitu života a odcházet z lekcí s pocitem, že pro sebe udělali něco dobrého.",
    ],
  },
  {
    name: "Mirek Danišovič",
    role: "Lektor",
    specialties: "Pilates",
    image: "/images/team-mirek.jpg",
    bio: [
      "Mirek je profesionální tanečník, jeho život je od útlého dětství propojený s uměním a pohybem. Vystudoval taneční konzervatoř, kde získal pevné základy taneční techniky a pohybových principů.",
      "V současné době je členem baletního souboru Slezského divadla v Opavě a zároveň hostuje v muzikálových produkcích na českých a slovenských scénách. Během své profesionální kariéry měl možnost pracovat s různými tanečními styly a uměleckými projekty, které ho naučily vnímat tělo nejenom jako nástroj pohybu, ale i jako prostor pro výraz, emoci i osobnost.",
      "Pilates si získal jeho pozornost právě svou schopností propojit sílu, kontrolu, eleganci a vědomí pohyb. Vnímá ho jako přirozené pokračování toho, čemu se profesionálně věnuje celý život - kultivaci pohybu a hlubšímu porozumění vlastnímu tělu.",
    ],
  },
  {
    name: "Kateřina Ostapenko",
    role: "Lektorka",
    specialties: "Pilates",
    image: "/images/team-veronika.jpg",
    bio: [
      "Je profesionální tanečnice. Osm let studovala na Taneční konzervatoři v Brně a již sedmou sezonu působí v baletním souboru Slezského divadla v Opavě.",
      "Vedle své umělecké činnosti se věnuje také výuce dětí, které učí aeril hoop - akrobacii na kruhu a základy gymnastiky. Ve své práci klade důraz na správnou techniku, zdravé držení těla a individuální přístup ke každému. Věří, že pohyb by měl přinášet nejen radost, ale také přispívat k celkové pohodě a zdraví.",
      "Ve volném čase ráda cestuje, objevuje nová místa, odpočívá u dobré knihy nebo oblíbeného seriálu či filmu. Baví ji pečení a zkoušení nových receptů. Nově si oblíbila i zahradničení - zejména během letních divadelních prázdnin, kdy má více času věnovat se zvelebování své zahrádky. Je to pro ni skvělý způsob jak si odpočinout, načerpat novou energii a užít si čas na čerstvém vzduchu.",
    ],
  },
] as const;

export const galleryItems = [
  { image: "/images/studio-private.jpg", alt: "Světlé reformer studio", position: "center" },
  { image: "/images/detail-barre.jpg", alt: "Detail dřevěné baletní tyče", position: "center" },
  { image: "/images/hero-studio-client-highres.png", alt: "Zrcadlový sál Lina Studio", position: "center" },
  { image: "/images/detail-balls.jpg", alt: "Modré pilates míče", position: "center" },
  { image: "/images/detail-matcha.jpg", alt: "Šálek matcha po lekci", position: "center" },
  { image: "/images/lina-brand-poster.png", alt: "Modrá grafika Lina Studio", position: "center bottom" },
] as const;

export const pricingGroups = [
  {
    title: "Skupinové lekce",
    description: "Pilates na podložce a barre.",
    items: [
      { label: "Jednorázový vstup", price: "290 Kč" },
      { label: "Permanentka 5 vstupů", price: "1 350 Kč" },
      { label: "Permanentka 10 vstupů", price: "2 500 Kč" },
    ],
  },
  {
    title: "Pilates na reformeru",
    description: "Lekce v malé skupině.",
    items: [
      { label: "Jednorázový vstup", price: "450 Kč" },
      { label: "Permanentka 5 vstupů", price: "2 100 Kč" },
      { label: "Permanentka 10 vstupů", price: "3 900 Kč" },
    ],
  },
  {
    title: "Individuální lekce",
    description: "Lekce přizpůsobená vašim potřebám.",
    items: [
      { label: "Jedna osoba", price: "1 100 Kč" },
      { label: "Dvě osoby", price: "1 500 Kč" },
      { label: "Balíček 5 lekcí", price: "5 000 Kč" },
    ],
  },
] as const;

export const studioGalleryItems = [
  { image: "/images/hero-studio-client-highres.png", alt: "Prosluněný zrcadlový sál Lina Studio", layout: "feature" },
  { image: "/images/lina-brand-poster.png", alt: "Modrá grafika Lina Studio", layout: "portrait" },
  { image: "/images/studio-reformer-client-highres.png", alt: "Pilates reformer ve světlém studiu", layout: "standard" },
  { image: "/images/detail-barre.jpg", alt: "Detail dřevěné baletní tyče", layout: "standard" },
  { image: "/images/detail-balls.jpg", alt: "Modré pilates míče ve studiu", layout: "standard" },
  { image: "/images/studio-private.jpg", alt: "Studio připravené pro individuální lekci", layout: "wide" },
  { image: "/images/detail-matcha.jpg", alt: "Šálek matcha v klidném zákoutí studia", layout: "standard" },
  { image: "/images/class-mat.jpg", alt: "Podložky a pomůcky připravené na pilates", layout: "wide" },
  { image: "/images/detail-plaque.jpg", alt: "Detail světlého interiéru Lina Studio", layout: "standard" },
] as const;
