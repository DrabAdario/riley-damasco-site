import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import PortfolioCarousel, {
  type PortfolioCarouselItem,
} from "../components/PortfolioCarousel";

export const metadata = {
  title: "Portfolio | Riley Damasco",
  description:
    "Projects and work — games, web apps, mods, and full-stack engineering.",
};

const PROJECTS_ROW: PortfolioCarouselItem[] = [
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
  {
    title: "WrestlingTournaments.com",
    subtitle: "Tournament platform — full-stack case study",
    posterGradient:
      "linear-gradient(135deg, #0f172a 0%, #4c1d95 45%, #0e7490 100%)",
    href: "/portfolio/wrestlingtournaments/",
    external: false,
  },
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
    subtitle: "Browser game — GitHub Pages",
    posterGradient:
      "linear-gradient(135deg, #14532d 0%, #166534 40%, #4ade80 95%)",
    href: "https://drabadario.github.io/magic-garden/",
    external: true,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh pt-28 pb-20 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden">
        <div
          className="glow-orb w-[600px] h-[600px] bg-accent top-[-20%] left-[-10%]"
          aria-hidden
        />
        <div
          className="glow-orb w-[500px] h-[500px] bg-accent-2 bottom-[10%] right-[-10%]"
          style={{ animationDelay: "-5s" }}
          aria-hidden
        />

        <div className="max-w-[1600px] mx-auto flex flex-col gap-10 relative z-10">
          <div className="text-center sm:text-left px-1 sm:px-0">
            <Typography
              variant="h2"
              fontWeight={800}
              className="gradient-text mb-3 tracking-tight"
            >
              Portfolio
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "var(--text-secondary)",
                maxWidth: 560,
                mx: { xs: "auto", sm: 0 },
                fontWeight: 400,
              }}
            >
              A running list of things I&apos;ve shipped — scroll the row or use
              the arrows on desktop.
            </Typography>
          </div>

          <PortfolioCarousel label="Projects" items={PROJECTS_ROW} />
        </div>
      </main>
    </>
  );
}
