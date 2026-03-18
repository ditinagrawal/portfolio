"use client";

import { Link } from "next-view-transitions";
import { JetBrains_Mono } from "next/font/google";

import { IconCode } from "@tabler/icons-react";
import { motion } from "motion/react";

import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/lib/resume";
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export const Projects = () => {
  return (
    <section className="space-y-4 pt-32">
      <motion.h4
        className={cn(
          jetBrainsMono.className,
          "flex items-center gap-x-2 text-sm font-medium text-zinc-600"
        )}
        {...cardVariants}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <IconCode className="mt-0.5 size-4" /> My Cool Projects
      </motion.h4>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            {...cardVariants}
            transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        <Link
          href="/projects"
          className="mt-6 flex items-center justify-center text-sm text-zinc-800"
        >
          View All &rarr;
        </Link>
      </motion.div>
    </section>
  );
};
