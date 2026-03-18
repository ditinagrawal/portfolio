import type { ComponentType, SVGProps } from "react";

import {
  AWSIcon,
  BunIcon,
  NextjsIcon,
  PostgreSQLIcon,
  RedisIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  UpstashIcon,
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
      id: "dropcircle",
      title: "DropCircle",
      description: "Simple, private, temporary file sharing.",
      image: "/projects/trust-wall.png",
      techStack: [
        NextjsIcon,
        TypeScriptIcon,
        TailwindCSSIcon,
        PostgreSQLIcon,
        AWSIcon,
        BunIcon,
      ],
      highlights: [
        "Implemented Cron Jobs for scheduled cleanup of expired files.",
        "Deployed on Vercel.",
      ],
      liveDemo: "https://dropcircle.ditin.in",
      sourceCode: "https://github.com/ditinagrawal/dropcircle",
      featured: true,
    },
    {
      id: "private-chat",
      title: "Private Chat",
      description: "A private, self-destructing chat room.",
      image: "/projects/drawmrr.png",
      techStack: [
        NextjsIcon,
        TypeScriptIcon,
        TailwindCSSIcon,
        RedisIcon,
        UpstashIcon,
        BunIcon,
      ],
      highlights: ["Each chat room expires and self-destructs after 10 minutes."],
      liveDemo: "https://chat-room.ditin.in",
      sourceCode: "https://github.com/ditinagrawal/private-chat",
    },
  ] satisfies Project[],
};

export const featuredProject = profile.projects.find((p) => p.featured)!;
export const projects = profile.projects.filter((p) => !p.featured);
