"use client";

import { Card, CardContent, Typography, Chip, Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  role,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Card
      className="glass-card reveal overflow-hidden group"
      sx={{
        background: "transparent",
        boxShadow: "none",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "none",
      }}
    >
      {/* Image area */}
      <Box position="relative" height={192} sx={{ overflow: "hidden" }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            ".group:hover &": {
              transform: "scale(1.1)",
            },
          }}
        />
        {/* Gradient overlay on bottom */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height={64}
          className="bg-gradient-to-t from-[var(--bg-primary)] to-transparent"
        />
      </Box>

      {/* Content */}
      <CardContent className="p-6 flex flex-col gap-3 flex-grow" sx={{ padding: "24px !important" }}>
        <Typography
          variant="h6"
          component="h3"
          className="font-semibold text-foreground leading-snug"
          sx={{ fontWeight: 600, color: "var(--text-primary)" }}
        >
          {title}
        </Typography>

        <Chip
          label={role}
          size="small"
          className="self-start rounded-full bg-accent/10 text-accent border border-accent/20"
          sx={{
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            color: "var(--accent-1)",
            borderColor: "rgba(124, 58, 237, 0.2)",
            fontWeight: 500,
            fontFamily: "var(--font-inter)",
          }}
          variant="outlined"
        />

        <Typography
          variant="body2"
          className="text-muted leading-relaxed"
          sx={{ color: "var(--text-secondary)", lineHeight: 1.625 }}
        >
          {description}
        </Typography>

        {link && (
          <Box mt="auto">
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={
                <ArrowForwardIcon
                  className="transition-transform group-hover/link:translate-x-1"
                  sx={{ fontSize: 16 }}
                />
              }
              className="mt-auto group/link"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                color: "var(--accent-2)",
                p: 0,
                "&:hover": {
                  background: "transparent",
                  color: "var(--text-primary)",
                },
              }}
              disableRipple
            >
              View Project
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
