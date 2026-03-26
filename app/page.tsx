"use client";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ActivityCard from "./components/ActivityCard";
import SectionReveal from "./components/SectionReveal";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Chip, Box } from "@mui/material";

const PROJECTS = [
  {
    title: "Space Astronaut Platformer",
    role: "Solo Developer",
    description:
      "A 2D platformer game featuring an astronaut exploring space. Built with Unity and C#.",
    image: "https://i.imgur.com/gzXTS2R.gif",
    link: "https://mywebspace.quinnipiac.edu/rmdamasco/200/FinalPro/",
  },
  {
    title: "LET US COOK (Rogue-like Game)",
    role: "Software Engineer",
    description:
      "Worked with a team of four software engineers to create a 2D top-down rogue-like game. Owned projectile and item subsystems, including software architecture and UI design. Used Git for version control.",
    image: "https://i.imgur.com/O2o2EFQ.png",
    link: "https://a-r-t.github.io/SER225-Project-Website/semesters/fall2023/teams/let-us-cook",
  },
  {
    title: "Enter The Gungeon Modding",
    role: "Open-source Software Developer",
    description:
      "Created two mods for the game Enter The Gungeon, adding new items, characters, and abilities. Learned how to investigate codebases with complex and sparse documentation. Created hand-drawn sprites for the project.",
    image: "https://i.imgur.com/P2DO3dE.png",
    link: "https://ellidelli.github.io/SER375ProjectsSite/projects/let_us_mod_etg",
  },
];

const ACTIVITIES = [
  {
    title: "VP of Events — QU Computing Club Hackathon",
    description:
      "Co-coordinated hackathons for the student body, with 19 teams and 50 participants. Connected with sponsors to secure prizes for winners, including M&T Tech, UNAPEN, and Connecticut Manufacturing.",
    image: "https://i.imgur.com/GcYRhsq.png",
  },
  {
    title: "Quinnipiac Computing Club",
    description:
      "Actively involved in organizing events, workshops, and coding competitions to foster a community of tech enthusiasts.",
    image: "https://i.imgur.com/5WBC8le.png",
  },
  {
    title: "Club Rock Climbing",
    description:
      "A passionate member of the club rock climbing team, where I enjoy challenging myself physically and mentally while building camaraderie with fellow climbers.",
    image: "https://i.imgur.com/Cdq9pZU.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-dvh flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Ambient glow orbs */}
        <div
          className="glow-orb w-[500px] h-[500px] bg-accent top-[-10%] left-[-10%]"
          style={{ animation: "pulse-glow 6s ease-in-out infinite" }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bg-accent-2 bottom-[-5%] right-[-5%]"
          style={{ animation: "pulse-glow 8s ease-in-out infinite 2s" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <Chip
            icon={<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-2" />}
            label="Available for opportunities"
            variant="outlined"
            size="small"
            sx={{
              textTransform: "uppercase",
              fontWeight: 500,
              letterSpacing: "0.025em",
              color: "var(--text-secondary)",
              borderColor: "var(--border-glass)",
              background: "var(--bg-card)",
              fontFamily: "var(--font-inter)",
              "& .MuiChip-icon": { marginLeft: "8px" }
            }}
          />

          <h1 className="hero-title text-5xl sm:text-7xl font-bold tracking-tight leading-[1.08]">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Riley Damasco</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
            A passionate computer science and security student with a knack for
            game design — building ambitious projects and leading teams.
          </p>

          <div className="flex gap-4 mt-2">
            <Button
              href="#projects"
              variant="contained"
              sx={{
                borderRadius: "9999px",
                px: 3,
                py: 1.5,
                textTransform: "none",
                fontWeight: 500,
                background: "var(--gradient-main)",
                boxShadow: "0 10px 15px -3px rgba(124, 58, 237, 0.2)",
                "&:hover": { opacity: 0.9, backgroundColor: "transparent" },
              }}
            >
              View My Work
            </Button>
            <Button
              href="#contact"
              variant="outlined"
              sx={{
                borderRadius: "9999px",
                px: 3,
                py: 1.5,
                textTransform: "none",
                fontWeight: 500,
                color: "var(--text-secondary)",
                borderColor: "var(--border-glass)",
                "&:hover": {
                  color: "var(--text-primary)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  background: "transparent",
                },
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <KeyboardArrowDownIcon
            className="w-8 h-8 text-muted"
            sx={{ color: "var(--text-secondary)", fontSize: "2rem" }}
          />
        </div>
      </section>

      {/* ═══════════════════════════ ABOUT ME ═══════════════════════════ */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col gap-4">
              <div className="accent-bar" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                About Me
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal className="mt-8">
            <div className="glass-card overflow-hidden">
              <Box
                component="img"
                src="https://i.imgur.com/F0Rp7vF.jpeg"
                alt="Riley Damasco Group Photo"
                sx={{
                  width: "100%",
                  height: { xs: 200, sm: 300 },
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />
              <div className="p-8 sm:p-10">
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  I love working on ambitious projects, and there&apos;s nothing
                  quite as satisfying as seeing an idea evolve into a fully
                  realized project. I take great pride in my work, and I&apos;m
                  always driven to push projects to their fullest potential.
                </p>
                <p className="text-base sm:text-lg text-muted leading-relaxed mt-4">
                  My approach is highly collaborative and idea-driven. I naturally
                  step into leadership roles, but I make it a point to ensure that
                  every team member has a voice. I believe that the best solutions
                  come when diverse ideas are shared and combined.
                </p>
                <p className="text-base sm:text-lg text-muted leading-relaxed mt-4">
                  When I&apos;m not immersed in coding or designing innovative
                  projects, you&apos;ll often find me rock climbing or at the gym.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════ PROJECTS ═══════════════════════════ */}
      <section id="projects" className="relative py-24 px-6">
        {/* Background orb */}
        <div
          className="glow-orb w-[600px] h-[600px] bg-accent top-0 right-[-20%]"
          style={{ animation: "pulse-glow 10s ease-in-out infinite" }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionReveal>
            <div className="flex flex-col gap-4 text-center items-center">
              <div className="accent-bar" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Projects
              </h2>
              <p className="text-muted max-w-md">
                A selection of things I&apos;ve built — from games to
                open-source mods.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal stagger className="mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════ ACTIVITIES ═══════════════════════════ */}
      <section id="activities" className="relative py-24 px-6">
        <div
          className="glow-orb w-[500px] h-[500px] bg-accent-2 bottom-0 left-[-15%]"
          style={{ animation: "pulse-glow 9s ease-in-out infinite 1s" }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionReveal>
            <div className="flex flex-col gap-4 text-center items-center">
              <div className="accent-bar" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Other Stuff I&apos;m Doing
              </h2>
              <p className="text-muted max-w-md">
                Beyond the code — hackathons, clubs, and staying active.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal stagger className="mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACTIVITIES.map((activity) => (
                <ActivityCard key={activity.title} {...activity} />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════ CONTACT ═══════════════════════════ */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <SectionReveal>
            <div className="flex flex-col gap-4 items-center">
              <div className="accent-bar" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="text-muted max-w-md">
                Interested in working together or just want to say hi? Reach out
                through any of these channels.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal stagger className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              {/* Email */}
              <a
                href="mailto:riley.damasco.04@gmail.com"
                className="reveal glass-card flex items-center gap-3 px-6 py-4 hover:!border-accent/30 transition-all group"
              >
                <EmailOutlinedIcon
                  className="w-5 h-5 text-accent transition-transform group-hover:scale-110"
                  sx={{ color: "var(--accent-1)" }}
                />
                <div className="text-left">
                  <div className="text-xs text-muted">Email</div>
                  <div className="text-sm font-medium text-foreground">
                    riley.damasco.04@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}



              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rileydamasco/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal glass-card flex items-center gap-3 px-6 py-4 hover:!border-blue-500/30 transition-all group"
              >
                <LinkedInIcon
                  className="w-5 h-5 text-blue-400 transition-transform group-hover:scale-110"
                  sx={{ color: "#60a5fa" }}
                />
                <div className="text-left">
                  <div className="text-xs text-muted">LinkedIn</div>
                  <div className="text-sm font-medium text-foreground">
                    Riley Damasco
                  </div>
                </div>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══════════════════════════ FOOTER ═══════════════════════════ */}
      <footer className="border-t border-card-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>© 2026 Riley Damasco. All rights reserved.</span>
          <span className="text-xs">
            Built with Next.js & Tailwind CSS
          </span>
        </div>
      </footer>
    </>
  );
}
