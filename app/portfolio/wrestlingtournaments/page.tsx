import { Typography, Box, Button, Chip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "WrestlingTournaments.com | Riley Damasco",
  description: "Full-stack case study for WrestlingTournaments.com",
};

/** Set to `false` when the case study is ready to publish. Full content stays in this file below. */
const WRESTLING_TOURNAMENTS_WIP = true;

export default function WrestlingTournamentsCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="glow-orb w-[700px] h-[700px] bg-accent top-[-20%] left-[-10%]" />

        <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
          
          {/* Back Button */}
          <div>
            <Link href="/portfolio" style={{ textDecoration: "none", display: "inline-block" }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ color: "var(--text-secondary)", textTransform: "none" }}
              >
                Back to Portfolio
              </Button>
            </Link>
          </div>

          {WRESTLING_TOURNAMENTS_WIP ? (
            <Box
              className="glass-card"
              sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 3, md: 6 },
                textAlign: "center",
                borderRadius: "16px",
              }}
            >
              <Chip
                label="WIP"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  background: "rgba(139, 92, 246, 0.2)",
                  color: "#c4b5fd",
                  border: "1px solid rgba(139, 92, 246, 0.45)",
                }}
              />
              <Typography variant="h3" fontWeight={800} className="gradient-text mb-3">
                WrestlingTournaments.com
              </Typography>
              <Typography variant="h6" color="var(--text-secondary)" sx={{ fontWeight: 500, mb: 2 }}>
                Work in progress
              </Typography>
              <Typography variant="body1" color="var(--text-secondary)" sx={{ maxWidth: 480, mx: "auto", lineHeight: 1.75 }}>
                This case study page is still being written. Check back soon for the full write-up, or explore other projects from the portfolio.
              </Typography>
            </Box>
          ) : (
            <>
          {/* Header */}
          <div>
            <Typography variant="h2" fontWeight={800} className="gradient-text mb-4 tracking-tight">
              WrestlingTournaments.com
            </Typography>
            <Typography variant="h5" color="var(--text-secondary)" sx={{ mb: 4, maxWidth: 800 }}>
              Full-stack engineering to scale a massive tournament management platform. Handling live brackets, athlete profiles, and real-time event updates.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 6 }}>
              {["Full-Stack", "React", "Next.js", "TypeScript", "UI/UX"].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{
                    background: "rgba(255,255,255,0.05)",
                    color: "white",
                    border: "1px solid var(--border-glass)",
                  }}
                />
              ))}
            </Box>
          </div>

          {/* Screenshot Placeholders */}
          <div className="flex flex-col gap-16">
            
            {/* Feature 1 */}
            <div className="flex flex-col gap-4">
              <Typography variant="h4" fontWeight={700}>
                Live Tournament Brackets
              </Typography>
              <Typography variant="body1" color="var(--text-secondary)" sx={{ maxWidth: 800, leading: 1.8 }}>
                [Insert description here about how you engineered the live bracket system, any frontend challenges solved, or backend optimizations made to keep the brackets real-time.]
              </Typography>
              
              {/* PLACEHOLDER 1 */}
              <Box 
                className="glass-card flex items-center justify-center border-dashed border-2 border-white/20"
                sx={{ 
                  width: "100%", 
                  height: { xs: 300, md: 500 }, 
                  borderRadius: "16px",
                  background: "rgba(0,0,0,0.4)",
                  mt: 2
                }}
              >
                <div className="text-center">
                  <Typography variant="h6" color="var(--text-secondary)">
                    [ Screenshot Placeholder 1 ]
                  </Typography>
                  <Typography variant="caption" color="var(--text-secondary)">
                    Drop your image into the code here!
                  </Typography>
                </div>
              </Box>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4">
              <Typography variant="h4" fontWeight={700}>
                Athlete Profiles & Leaderboards
              </Typography>
              <Typography variant="body1" color="var(--text-secondary)" sx={{ maxWidth: 800, leading: 1.8 }}>
                [Insert description here about your dynamic components, how you managed the athlete data, or refactoring efforts you made to improve performance and UI/UX.]
              </Typography>
              
              {/* PLACEHOLDER 2 */}
              <Box 
                className="glass-card flex items-center justify-center border-dashed border-2 border-white/20"
                sx={{ 
                  width: "100%", 
                  height: { xs: 300, md: 500 }, 
                  borderRadius: "16px",
                  background: "rgba(0,0,0,0.4)",
                  mt: 2
                }}
              >
                <div className="text-center">
                  <Typography variant="h6" color="var(--text-secondary)">
                    [ Screenshot Placeholder 2 ]
                  </Typography>
                  <Typography variant="caption" color="var(--text-secondary)">
                    Drop your image into the code here!
                  </Typography>
                </div>
              </Box>
            </div>

            {/* Feature 3 (Mobile/Compact Views) */}
            <div className="flex flex-col gap-4">
              <Typography variant="h4" fontWeight={700}>
                Mobile-First Responsive Design
              </Typography>
              <Typography variant="body1" color="var(--text-secondary)" sx={{ maxWidth: 800, leading: 1.8 }}>
                [Insert description about how you ensured the complex tables and grids remained perfectly usable on mobile phones.]
              </Typography>
              
              {/* PLACEHOLDER 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <Box 
                  className="glass-card flex items-center justify-center border-dashed border-2 border-white/20"
                  sx={{ 
                    width: "100%", 
                    height: 400, 
                    borderRadius: "16px",
                    background: "rgba(0,0,0,0.4)"
                  }}
                >
                  <Typography variant="h6" color="var(--text-secondary)">
                    [ Portrait Screenshot 1 ]
                  </Typography>
                </Box>
                <Box 
                  className="glass-card flex items-center justify-center border-dashed border-2 border-white/20"
                  sx={{ 
                    width: "100%", 
                    height: 400, 
                    borderRadius: "16px",
                    background: "rgba(0,0,0,0.4)"
                  }}
                >
                  <Typography variant="h6" color="var(--text-secondary)">
                    [ Portrait Screenshot 2 ]
                  </Typography>
                </Box>
              </div>
            </div>

          </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
