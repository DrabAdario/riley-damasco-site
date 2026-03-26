import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riley Damasco — Software Developer & Game Designer",
  description:
    "Personal portfolio of Riley Damasco — a passionate computer science and security student with a knack for game design, building ambitious projects and leading teams.",
  keywords: [
    "Riley Damasco",
    "Software Developer",
    "Game Designer",
    "Computer Science",
    "Portfolio",
  ],
  openGraph: {
    title: "Riley Damasco — Software Developer & Game Designer",
    description:
      "Personal portfolio of Riley Damasco — CS student, game designer, and collaborative leader.",
    type: "website",
    url: "https://rileydamasco.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col relative">{children}</body>
    </html>
  );
}
