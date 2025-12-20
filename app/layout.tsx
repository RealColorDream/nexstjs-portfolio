import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Développeur Web",
  description: "Portfolio présentant mon expérience professionnelle, mes compétences techniques et mes projets personnels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} bg-white dark:bg-black font-sans transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
