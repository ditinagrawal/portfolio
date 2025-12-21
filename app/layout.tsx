import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ViewTransitions } from "next-view-transitions";

import { ReactLenis } from "@/lib/lenis";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ditin Agrawal - A Full Stack Developer",
  description:
    "Ditin Agrawal is a full stack web developer with a passion for creating beautiful and functional websites.",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <ReactLenis root>
          <body className={`${inter.className} antialiased`}>{children}</body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
