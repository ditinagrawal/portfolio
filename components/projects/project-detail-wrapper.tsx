"use client";

import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

import {
  IconArrowLeft,
  IconBrandGithub,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type ProjectDetailProps = {
  title: string;
  description: string;
  date: string;
  image: string;
  techStack: string[];
  liveDemo?: string;
  sourceCode?: string;
  content: React.ReactNode;
};

export function ProjectDetailWrapper({
  title,
  description,
  date,
  image,
  techStack,
  liveDemo,
  sourceCode,
  content,
}: ProjectDetailProps) {
  return (
    <section className="py-20">
      {/* Header */}
      <motion.div
        className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="min-w-0">
          <h1 className={cn(jetBrainsMono.className, "truncate text-xl font-semibold")}>
            {title}
          </h1>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        <Link href="/projects">
          <div className="bg-zinc-200/60 px-2 py-1 text-sm">
            <IconArrowLeft className="-mt-0.5 mr-1 inline-block size-4" />
            Back
          </div>
        </Link>
      </motion.div>

      {/* Banner Image */}
      <motion.div
        className="mb-8 overflow-hidden rounded-xl border border-zinc-200"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
      >
        <Image
          src={image}
          alt={title}
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
          draggable={false}
        />
      </motion.div>

      {/* Meta: Tech Stack + Links */}
      <motion.div
        className="mb-8 flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      >
        {/* Tech stack pills */}
        <div className="flex flex-wrap items-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-x-4">
          {liveDemo && (
            <Link
              href={liveDemo}
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-600 transition-colors duration-300 hover:bg-zinc-100 hover:text-zinc-800"
            >
              <IconWorld className="size-4" /> Live Demo
            </Link>
          )}
          {sourceCode && (
            <Link
              href={sourceCode}
              target="_blank"
              className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-600 transition-colors duration-300 hover:bg-zinc-100 hover:text-zinc-800"
            >
              <IconBrandGithub className="size-4" /> Source Code
            </Link>
          )}
        </div>
      </motion.div>

      {/* MDX Content */}
      <motion.div
        className="prose-zinc prose dark:prose-invert"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
      >
        {content}
      </motion.div>
    </section>
  );
}
