import type { ComponentType, SVGProps } from "react";

import {
  BunIcon,
  CloudflareIcon,
  ConvexIcon,
  NextjsIcon,
  ShadcnUI,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "@/components/shared/icons";

export type TechIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: TechIcon[];
  highlights: string[];
  liveDemo?: string;
  sourceCode?: string;
  featured?: boolean;
};

export const profile = {
  projects: [
    {
      id: "trustwall",
      title: "TrustWall",
      description: "Collect Reviews. Show proof. Build trust. Convert.",
      image: "/projects/trust-wall.png",
      techStack: [
        NextjsIcon,
        TypeScriptIcon,
        TailwindCSSIcon,
        ConvexIcon,
        CloudflareIcon,
        BunIcon,
      ],
      highlights: [
        "Collect, organize, and display text and video reviews across your funnel.",
        "Convert more with authentic proof.",
      ],
      liveDemo: "https://trust-wall.com",
      featured: true,
    },
    {
      id: "drawmrr",
      title: "DrawMrr",
      description: "Turn MRR Numbers Into Share-Ready Visuals.",
      image: "/projects/drawmrr.png",
      techStack: [
        NextjsIcon,
        TypeScriptIcon,
        TailwindCSSIcon,
        ShadcnUI,
        BunIcon,
      ],
      highlights: [
        "Sketch your MRR journey as a hand-drawn progress bar.",
        "Export to grab a PNG, JPG, animated GIF, or video.",
      ],
      liveDemo: "https://drawmrr.com",
    },
  ] as Project[],
};

export const featuredProject = profile.projects.find((p) => p.featured)!;
export const projects = profile.projects.filter((p) => !p.featured);
