"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ActivityCard({
  title,
  description,
  image,
}: ActivityCardProps) {
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
      <Box position="relative" height={160} sx={{ overflow: "hidden" }}>
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
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height={48}
          className="bg-gradient-to-t from-[var(--bg-primary)] to-transparent"
        />
      </Box>

      {/* Content */}
      <CardContent className="p-6 flex flex-col gap-3 flex-grow" sx={{ padding: "24px !important" }}>
        <Typography
          variant="subtitle1"
          component="h3"
          className="font-semibold text-foreground leading-snug"
          sx={{ fontWeight: 600, color: "var(--text-primary)" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          className="text-muted leading-relaxed"
          sx={{ color: "var(--text-secondary)", lineHeight: 1.625 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
