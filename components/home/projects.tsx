"use client";

import { Link } from "next-view-transitions";

import { motion } from "motion/react";

import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/lib/resume";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export const Projects = () => {
  return (
    <section className="pt-32">
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
