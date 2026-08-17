export const siteConfig = {
  name: "Lina Studio Opava",
  bookingUrl: "https://www.isportsystem.cz",
  instagramUrl: "https://www.instagram.com/linastudio.opava",
  instagramHandle: "@linastudio.opava",
  email: "info@linastudio.cz",
  phone: "+420 777 123 456",
  phoneHref: "+420777123456",
  address: ["Olomoucká 406/2", "746 01 Opava"],
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
    image: "/images/studio-reformer.jpg",
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
    name: "Tereza Ševčíková",
    role: "Zakladatelka a lektorka",
    specialties: "Pilates, Barre",
    image: "/images/team-tereza.jpg",
  },
  {
    name: "Nikola",
    role: "Lektorka",
    specialties: "Pilates na reformeru",
    image: "/images/team-nikola.jpg",
  },
  {
    name: "Míša",
    role: "Lektorka",
    specialties: "Barre",
    image: "/images/team-misa.jpg",
  },
  {
    name: "Veronika",
    role: "Lektorka",
    specialties: "Pilates, Strečink",
    image: "/images/team-veronika.jpg",
  },
] as const;

export const galleryItems = [
  { image: "/images/studio-private.jpg", alt: "Světlé reformer studio", position: "center", logo: false },
  { image: "/images/detail-barre.jpg", alt: "Detail dřevěné baletní tyče", position: "center", logo: false },
  { image: "/images/hero-studio.jpg", alt: "Zrcadlový sál Lina Studio", position: "center", logo: false },
  { image: "/images/detail-balls.jpg", alt: "Modré pilates míče", position: "center", logo: false },
  { image: "/images/detail-matcha.jpg", alt: "Šálek matcha po lekci", position: "center", logo: false },
  { image: "/images/detail-plaque.jpg", alt: "Logo Lina Studio na světlé stěně", position: "center", logo: true },
] as const;
