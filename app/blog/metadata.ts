import { siteConfig } from "@/lib/site";
import { Metadata } from "next";

export const metadataKeywords = [
  "Blog",
  "React",
  "Ditin Agrawal",
  "Ditin Agrawal Blog",
  "Ditin Agrawal Blog Template",
  "Ditin Agrawal Blog Template Next.js",
  "Ditin Agrawal Blog Template Tailwind",
  "Ditin Agrawal Blog Template Shadcn",
  "Next.js Blog",
  "React Blog",
  "Web Development",
  "Tutorials",
  "MDX Blog",
  "Modern Blog Template",
];

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: metadataKeywords,
  authors: [
    {
      name: "Ditin Agrawal",
      url: "https://portfolio.ditin.in",
    },
  ],
  creator: "Ditin Agrawal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@ditinagrawal",
  },
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
};
