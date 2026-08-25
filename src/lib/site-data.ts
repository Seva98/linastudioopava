export const siteConfig = {
  name: "Lina Studio Opava",
  bookingUrl: "https://app.zenamu.com/app/office/lina-studio-opava",
  instagramUrl: "https://www.instagram.com/lina_studio_opava",
  instagramHandle: "@lina_studio_opava",
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
    image: "/images/studio-reformers-wide.webp",
    alt: "Reformery připravené na lekci v Lina Studio",
  },
  {
    title: "Barre",
    description: "Baletní inspirace, síla, ladnost a zpevnění celého těla.",
    image: "/images/studio-barre-wide.webp",
    alt: "Zrcadlový sál s dřevěnými baletními tyčemi",
  },
  {
    title: "Pilates na podložce",
    description: "Klasické pilates na podložce. Stabilita, střed těla, flexibilita.",
    image: "/images/studio-barre-plants.webp",
    alt: "Klidná část sálu Lina Studio",
  },
  {
    title: "Individuální lekce",
    description: "Individuální přístup přizpůsobený vašim potřebám a cílům.",
    image: "/images/studio-reformers-detail.webp",
    alt: "Detail reformerů v Lina Studio",
  },
] as const;

export const teamMembers = [
  {
    name: "Karolína Valalíková",
    role: "Lektorka",
    specialties: "Barre, Pilates na reformeru",
    image: "/images/team-karolina-valalikova.webp",
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
    image: "/images/team-sara-nemeth.webp",
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
    image: "/images/team-mirek-danisovic.webp",
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
    image: "/images/team-katerina-ostapenko.webp",
    bio: [
      "Je profesionální tanečnice. Osm let studovala na Taneční konzervatoři v Brně a již sedmou sezonu působí v baletním souboru Slezského divadla v Opavě.",
      "Vedle své umělecké činnosti se věnuje také výuce dětí, které učí aeril hoop - akrobacii na kruhu a základy gymnastiky. Ve své práci klade důraz na správnou techniku, zdravé držení těla a individuální přístup ke každému. Věří, že pohyb by měl přinášet nejen radost, ale také přispívat k celkové pohodě a zdraví.",
      "Ve volném čase ráda cestuje, objevuje nová místa, odpočívá u dobré knihy nebo oblíbeného seriálu či filmu. Baví ji pečení a zkoušení nových receptů. Nově si oblíbila i zahradničení - zejména během letních divadelních prázdnin, kdy má více času věnovat se zvelebování své zahrádky. Je to pro ni skvělý způsob jak si odpočinout, načerpat novou energii a užít si čas na čerstvém vzduchu.",
    ],
  },
  {
    name: "Tereza Ševčík",
    role: "Majitelka a lektorka",
    specialties: "Barre, Pilates na reformeru",
    image: "/images/team-tereza.webp",
    bio: [
      "Už od svých čtyř let se aktivně věnuji sportu. Tehdy to byla moderní gymnastika, kde jsem každý víkend reprezentovala klub SKMG Havířov na závodech.",
      "Později, ve 12 letech, jsem nastoupila na Janáčkovu konzervatoř v Ostravě, obor klasický tanec – balet. Toto osmileté studium jsem úspěšně dokončila. Po celou dobu studia jsem tančila v Národním divadle moravskoslezském v baletních i muzikálových dílech, nejčastěji v inscenacích Louskáček, Labutí jezero, Giselle, Sněhurka a dalších.",
      "Během konzervatoře i krátce po ní jsem učila tanec a balet děti v ostravském Akcentu. Věděla jsem, že se pohybu budu věnovat vždy, samozřejmě pokud mi to mé tělo dovolí. Udělala jsem si kurz trenéra fitness a při studiu vysoké školy jsem aktivně vedla lekce v ostravských fitness centrech.",
      "V současné době učím ve studiu Lenky Krejčové v Praze a jsem majitelkou Lina Studia v Opavě. Lekce Barre a Pilates Reformer mě neskutečně naplňují a ráda bych vám předávala jen to nejlepší! Budu se na vás těšit.",
    ],
  },
] as const;

export const galleryItems = [
  { image: "/images/studio-reformers-detail.webp", alt: "Detail předního reformeru", position: "center" },
  { image: "/images/studio-barre-plants.webp", alt: "Zeleň u baletních tyčí", position: "35% center" },
  { image: "/images/studio-barre-wide.webp", alt: "Zrcadlový sál Lina Studio", position: "center" },
  { image: "/images/studio-reformers-wide.webp", alt: "Řada reformerů v sále", position: "65% center" },
  { image: "/images/studio-reformers-wide.webp", alt: "Detail uspořádání reformerů", position: "18% center" },
  { image: "/images/lina-brand-poster.png", alt: "Modrá grafika Lina Studio", position: "center bottom" },
] as const;

export const studioGalleryItems = [
  { image: "/images/studio-barre-wide.webp", alt: "Zrcadlový sál Lina Studio s baletními tyčemi", layout: "feature" },
  { image: "/images/studio-barre-plants.webp", alt: "Zeleň a baletní tyče v sále", layout: "portrait" },
  { image: "/images/studio-reformers-wide.webp", alt: "Reformery připravené na skupinovou lekci", layout: "standard" },
  { image: "/images/studio-reformers-detail.webp", alt: "Detail reformerů v Lina Studio", layout: "standard" },
  { image: "/images/lina-brand-poster.png", alt: "Modrá grafika Lina Studio", layout: "standard" },
] as const;
