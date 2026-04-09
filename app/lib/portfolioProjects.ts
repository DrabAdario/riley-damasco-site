import type { PortfolioCarouselItem } from "../components/PortfolioCarousel";

export const GITHUB_PAGES_ROW: PortfolioCarouselItem[] = [
  {
    title: "Dog Fight!",
    subtitle: "Turn-based dog web game",
    posterGradient:
      "linear-gradient(135deg, #431407 0%, #9a3412 42%, #f97316 100%)",
    href: "https://drabadario.github.io/dog-fight/",
    external: true,
  },
  {
    title: "Magic Garden",
    subtitle: "Browser game on GitHub Pages",
    posterGradient:
      "linear-gradient(135deg, #14532d 0%, #166534 40%, #4ade80 95%)",
    href: "https://drabadario.github.io/magic-garden/",
    external: true,
  },
  {
    title: "Writing Tools",
    subtitle: "Work in progress writing tools. More to come!",
    posterGradient:
      "linear-gradient(135deg,rgb(24, 20, 83) 0%,rgb(26, 22, 101) 40%,rgb(84, 74, 222) 95%)",
    href: "https://drabadario.github.io/writing-tools/",
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
