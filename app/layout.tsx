import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ditin Agrawal - Software Engineer | Full Stack Developer",
  description:
    "Ditin Agrawal is a passionate software engineer and full stack developer specializing in web applications. Available for work. Connect via portfolio and social links.",
  keywords: [
    "ditin agrawal",
    "software engineer",
    "full stack developer",
    "web developer",
    "portfolio",
    "link tree",
    "resume",
    "portfolio template",
    "javascript",
    "typescript",
    "react",
    "next.js",
    "node.js",
    "available for work",
    "freelance developer",
  ],
  authors: [{ name: "Ditin Agrawal", url: "https://portfolio.ditin.in" }],
  creator: "Ditin Agrawal",
  publisher: "Ditin Agrawal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portfolio.ditin.in"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.ditin.in",
    siteName: "Ditin Agrawal - Software Engineer",
    title: "Ditin Agrawal - Software Engineer | Full Stack Developer",
    description:
      "Ditin Agrawal is a passionate software engineer and full stack developer specializing in web applications. Available for work. Connect via portfolio, resume, and social links.",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Ditin Agrawal - Software Engineer Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ditinagrawal",
    creator: "@ditinagrawal",
    title: "Ditin Agrawal - Software Engineer | Full Stack Developer",
    description:
      "Ditin Agrawal is a passionate software engineer and full stack developer specializing in web applications. Available for work.",
    images: ["/og.webp"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
