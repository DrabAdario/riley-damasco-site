"use client";

import { useRef } from "react";
import Link from "next/link";
import { Typography, IconButton, Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export type PortfolioCarouselItem = {
  title: string;
  subtitle: string;
  /** Remote image URL, or omit to use gradient + accent */
  image?: string;
  href: string;
  /** true = open in new tab; false = Next.js in-app (internal paths) */
  external: boolean;
  /** CSS gradient when no image */
  posterGradient?: string;
};

type PortfolioCarouselProps = {
  label: string;
  items: PortfolioCarouselItem[];
};

export default function PortfolioCarousel({ label, items }: PortfolioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const delta = Math.min(el.clientWidth * 0.85, 720) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="w-full">
      <Typography
        variant="h5"
        component="h2"
        fontWeight={700}
        sx={{ color: "var(--text-primary)", mb: 2, letterSpacing: "-0.02em" }}
      >
        {label}
      </Typography>

      <Box className="relative group/carousel">
        <IconButton
          aria-label="Scroll left"
          onClick={() => scrollByDir(-1)}
          className="!absolute left-0 top-1/2 -translate-y-1/2 z-20 !text-white hidden sm:flex
            opacity-0 group-hover/carousel:opacity-100 transition-opacity
            !bg-black/50 hover:!bg-black/70 !shadow-lg"
          size="small"
          sx={{ width: 40, height: 40 }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          aria-label="Scroll right"
          onClick={() => scrollByDir(1)}
          className="!absolute right-0 top-1/2 -translate-y-1/2 z-20 !text-white hidden sm:flex
            opacity-0 group-hover/carousel:opacity-100 transition-opacity
            !bg-black/50 hover:!bg-black/70 !shadow-lg"
          size="small"
          sx={{ width: 40, height: 40 }}
        >
          <ChevronRightIcon />
        </IconButton>

        <div
          ref={trackRef}
          className="carousel-track flex gap-3 overflow-x-auto pb-3 pt-1 pl-0 pr-2 sm:px-10 snap-x snap-mandatory scroll-smooth"
        >
          {items.map((item) => (
            <CarouselCard key={item.title} item={item} />
          ))}
        </div>
      </Box>
    </section>
  );
}

function CarouselCard({ item }: { item: PortfolioCarouselItem }) {
  const poster = (
    <article
      className="relative flex-shrink-0 w-[min(72vw,280px)] sm:w-[min(42vw,320px)] md:w-[300px] lg:w-[320px]
        aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg
        snap-start transition-transform duration-300 hover:scale-[1.04] hover:z-10 hover:shadow-xl hover:shadow-violet-500/10
        group/card cursor-pointer"
    >
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element -- external portfolio thumbnails (imgur, etc.)
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: item.posterGradient ?? "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0e7490 100%)",
          }}
        >
          <span className="text-4xl opacity-90 select-none" aria-hidden>
            ◆
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover/card:opacity-95 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex flex-col gap-0.5">
        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{ color: "#fff", lineHeight: 1.25, textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.35,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.subtitle}
        </Typography>
        {item.external && (
          <OpenInNewIcon
            className="!absolute top-3 right-3 !w-4 !h-4 !text-white/70 opacity-0 group-hover/card:opacity-100 transition-opacity"
            aria-hidden
          />
        )}
      </div>
    </article>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-1)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] rounded-xl"
      >
        {poster}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className="block outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-1)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] rounded-xl"
    >
      {poster}
    </Link>
  );
}
