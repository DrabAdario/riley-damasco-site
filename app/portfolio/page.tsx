import { Typography, Grid, Card, Box, Chip, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "In-Depth Portfolio | Riley Damasco",
  description: "Explore the comprehensive portfolio spanning full-stack engineering, game design, and cybersecurity.",
};

const CATEGORIES = [
  {
    title: "Software Engineering",
    description: "Full-stack web applications, scalable backends, architectural design, and complex data structures using Next.js, React, Node, and Python.",
    icon: <CodeIcon fontSize="large" sx={{ color: "var(--accent-1)" }} />,
    link: "/portfolio/software",
    tags: ["Full-Stack", "Frontend", "Backend", "APIs"],
    delay: 0,
  },
  {
    title: "Game Design & Dev",
    description: "Interactive experiences, 3D modeling, physics engines, and mechanic design. Built using Unity, Unreal Engine, C#, and C++.",
    icon: <SportsEsportsIcon fontSize="large" sx={{ color: "var(--accent-2)" }} />,
    link: "/portfolio/games",
    tags: ["Unity3D", "Unreal", "Mechanics", "AI"],
    delay: 0.1,
  },
  {
    title: "Cybersecurity",
    description: "Penetration testing, network security architecture, cryptography challenges, and threat modeling projects.",
    icon: <SecurityIcon fontSize="large" sx={{ color: "var(--accent-3)" }} />,
    link: "/portfolio/security",
    tags: ["Penetration Testing", "Cryptography", "Network"],
    delay: 0.2,
  },
  {
    title: "WrestlingTournaments.com",
    description: "Full-stack engineering scaling a massive tournament management platform. Handling live brackets, athlete profiles, and real-time event updates.",
    icon: <PublicIcon fontSize="large" sx={{ color: "var(--text-primary)" }} />,
    link: "/portfolio/wrestlingtournaments",
    tags: ["Full-Stack", "React", "Scalability", "Live Data"],
    delay: 0.3,
  },
];

export default function PortfolioNavigationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div
          className="glow-orb w-[600px] h-[600px] bg-accent top-[-20%] left-[-10%]"
        />
        <div
          className="glow-orb w-[500px] h-[500px] bg-accent-2 bottom-[10%] right-[-10%]"
          style={{ animationDelay: "-5s" }}
        />

        <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
          
          {/* Header Section */}
          <div className="text-center">
            <Typography variant="h2" fontWeight={800} className="gradient-text mb-4 tracking-tight">
              In-Depth Portfolio
            </Typography>
            <Typography variant="h6" color="var(--text-secondary)" sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}>
              Select a domain below to explore my specialized projects, methodologies, and technical deep-dives.
            </Typography>
          </div>

          {/* Categories Grid */}
          <Grid container spacing={4}>
            {CATEGORIES.map((category) => (
              <Grid size={{ xs: 12, md: 6 }} key={category.title}>
                <div className="h-full">
                  <Card
                    className="glass-card flex flex-col h-full group hover:border-[var(--accent-1)] transition-colors duration-300"
                    sx={{
                      background: "transparent",
                      color: "var(--text-primary)",
                      p: { xs: 4, md: 5 },
                      borderRadius: "24px",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-1)]/5 to-[var(--accent-2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
                      {category.icon}
                      <Typography variant="h5" fontWeight={700}>
                        {category.title}
                      </Typography>
                    </Box>

                    <Typography variant="body1" color="var(--text-secondary)" sx={{ mb: 4, flexGrow: 1, leading: 1.7 }}>
                      {category.description}
                    </Typography>

                    <Box sx={{ mb: 5, display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {category.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border-glass)",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>

                    <Link href={category.link} style={{ textDecoration: "none", display: "inline-block", alignSelf: "flex-start" }}>
                      <Button
                        endIcon={<ArrowForwardIcon className="transition-transform group-hover:translate-x-1" />}
                        sx={{
                          color: "var(--text-primary)",
                          fontWeight: 600,
                          textTransform: "none",
                          fontSize: "1rem",
                          "&:hover": { background: "transparent", color: "var(--accent-1)" },
                        }}
                        disableRipple
                      >
                        Explore {category.title}
                      </Button>
                    </Link>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}
