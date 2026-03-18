"use client";

import { motion } from "motion/react";

import { ProjectCard } from "@/components/shared/project-card";
import { profile } from "@/lib/resume";

export default function ProjectsPage() {
  return (
    <section className="space-y-10 py-20">
      <motion.div
        className="space-y-1"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold">Projects 📑</h2>
        <p className="text-sm text-zinc-500">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {profile.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
