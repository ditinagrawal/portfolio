import { Footer } from "@/components/blog/footer";
import { Navbar } from "@/components/blog/navbar";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";
import React from "react";
import { metadataKeywords } from "./metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
