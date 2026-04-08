import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import PortfolioCarousel from "../components/PortfolioCarousel";
import {
  GITHUB_PAGES_ROW,
  GAME_DEVELOPMENT_ROW,
  WORK_ROW,
} from "../lib/portfolioProjects";

export const metadata = {
  title: "Portfolio | Riley Damasco",
  description:
    "Projects and work — games, web apps, mods, and full-stack engineering.",
};

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
              Games and builds grouped by context — scroll each row or use the
              arrows on desktop.
            </Typography>
          </div>

          <div className="flex flex-col gap-14 sm:gap-16">
            <PortfolioCarousel label="Personal Projects" items={GITHUB_PAGES_ROW} />
            <PortfolioCarousel
              label="Game development"
              items={GAME_DEVELOPMENT_ROW}
            />
            <PortfolioCarousel label="Work" items={WORK_ROW} />
          </div>
        </div>
      </main>
    </>
  );
}
