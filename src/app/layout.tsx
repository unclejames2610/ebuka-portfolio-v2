import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebuka's Portfolio",
  description: "Front-end web and mobile software developer.",
  keywords: [
    "web developer",
    "mobile developer",
    "software developer",
    "ebuka",
    "udeala",
    "chukwuebuka",
    "portfolio",
    "chukwuebuka udeala",
    "ebuka udeala",
    "ebuka's portfolio",
    "frontend",
    "frontend web developer",
    "frontend developer",
    "next",
    "next.js",
    "react",
    "react.js",
    "tailwind",
  ],
  icons: {
    icon: "/letterE.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
