"use client";

import { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "about", isHash: true },
  { label: "Projects", href: "projects", isHash: true },
  { label: "Activities", href: "activities", isHash: true },
  { label: "Portfolio", href: "portfolio", isHash: false },
  { label: "Contact", href: "contact", isHash: true },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return; // Only track sections if on home page
    
    const sections = NAV_LINKS.filter(l => l.isHash).map((l) =>
      document.querySelector(`#${l.href}`)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const getHref = (link: typeof NAV_LINKS[0]) => {
    if (link.isHash) {
      return isHome ? `#${link.href}` : `/#${link.href}`;
    }
    return `/${link.href}`;
  };

  const isActive = (link: typeof NAV_LINKS[0]) => {
    if (link.isHash) {
      return isHome && active === link.href;
    }
    const base = `/${link.href}`;
    return pathname === base || pathname === `${base}/`;
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      className={`transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
      sx={{
        background: scrolled ? "var(--glass-bg)" : "transparent",
        backdropFilter: scrolled ? "var(--glass-blur)" : "none",
        borderBottom: scrolled ? "var(--glass-border)" : "none",
      }}
    >
      <Toolbar sx={{ maxWidth: 1152, width: "100%", mx: "auto", minHeight: "var(--nav-height) !important" }}>
        {/* Logo / Name */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          className="gradient-text tracking-tight"
          onClick={() => setMobileOpen(false)}
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          RD
        </Typography>

        {/* Desktop links */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <Button
              key={link.label}
              component={Link}
              href={getHref(link)}
              className={`link-hover transition-colors ${
                isActive(link) ? "!text-foreground" : "text-muted"
              }`}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                color: isActive(link) ? "var(--text-primary)" : "var(--text-secondary)",
                "&:hover": { background: "transparent" },
              }}
              disableRipple
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Mobile hamburger */}
        <IconButton
          edge="end"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{ display: { sm: "none" }, color: "var(--text-primary)" }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile menu */}
      {mobileOpen && (
        <Box
          className="glass border-t border-white/5"
          sx={{ display: { sm: "none" }, flexDirection: "column", alignItems: "center", py: 3 }}
        >
          {NAV_LINKS.map((link) => (
            <Button
              key={link.label}
              component={Link}
              href={getHref(link)}
              onClick={() => setMobileOpen(false)}
              sx={{
                display: "block",
                width: "100%",
                textTransform: "none",
                fontWeight: 500,
                color: isActive(link) ? "var(--text-primary)" : "var(--text-secondary)",
                "&:hover": { color: "var(--text-primary)", background: "rgba(255,255,255,0.05)" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
}
