import type { PortfolioCarouselItem } from "../components/PortfolioCarousel";

export const GITHUB_PAGES_ROW: PortfolioCarouselItem[] = [
  {
    title: "Dog Fight!",
    subtitle: "Turn-based dog web game",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop&q=80",
    href: "https://drabadario.github.io/dog-fight/",
    external: true,
  },
  {
    title: "Magic Garden",
    subtitle: "Browser game on GitHub Pages",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80",
    href: "https://drabadario.github.io/magic-garden/",
    external: true,
  },
  {
    title: "Magic Monster Generation",
    subtitle: "Generate your own magic monster!",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    href: "https://drabadario.github.io/writing-tools/bestiary",
    external: true,
  },
  {
    title: "Quick Character Generator",
    subtitle: "Generate backstories and personality traits.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    href: "https://drabadario.github.io/writing-tools/character-workshop",
    external: true,
  },
  {
    title: "Read aloud tool.",
    subtitle: "simple text to speech app!",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80",
    href: "https://drabadario.github.io/writing-tools/read-aloud",
    external: true,
  },
];

export const GAME_DEVELOPMENT_ROW: PortfolioCarouselItem[] = [
  {
    title: "Space Astronaut Platformer",
    subtitle: "2D Unity platformer — solo dev",
    image: "https://i.imgur.com/gzXTS2R.gif",
    href: "https://mywebspace.quinnipiac.edu/rmdamasco/200/FinalPro/",
    external: true,
  },
  {
    title: "LET US COOK",
    subtitle: "Team rogue-like — projectiles & items",
    image: "https://i.imgur.com/O2o2EFQ.png",
    href: "https://a-r-t.github.io/SER225-Project-Website/semesters/fall2023/teams/let-us-cook",
    external: true,
  },
  {
    title: "Enter The Gungeon Modding",
    subtitle: "Open-source mods — items, characters, sprites",
    image: "https://i.imgur.com/P2DO3dE.png",
    href: "https://ellidelli.github.io/SER375ProjectsSite/projects/let_us_mod_etg",
    external: true,
  },
];

export const WORK_ROW: PortfolioCarouselItem[] = [
  {
    title: "WrestlingTournaments.com",
    subtitle: "Tournament platform — full-stack case study",
    posterGradient:
      "linear-gradient(135deg, #0f172a 0%, #4c1d95 45%, #0e7490 100%)",
    href: "/portfolio/wrestlingtournaments/",
    external: false,
  },
];

/** All projects in the same order as the portfolio page sections (for homepage carousel). */
export const ALL_PROJECTS_CAROUSEL_ITEMS: PortfolioCarouselItem[] = [
  ...GITHUB_PAGES_ROW,
  ...GAME_DEVELOPMENT_ROW,
  ...WORK_ROW,
];
