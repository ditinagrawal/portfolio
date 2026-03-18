import { Link } from "next-view-transitions";
import Image from "next/image";

import { IconBrandGithub, IconChecks, IconWorld } from "@tabler/icons-react";

import type { Project } from "@/lib/resume";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={512}
          height={300}
          className="w-full object-cover object-top"
          draggable={false}
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-zinc-200 p-4">
        <h2 className="text-lg font-medium text-zinc-800">{project.title}</h2>
        <p className="text-sm text-zinc-600">{project.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
          <li className="flex items-center gap-2">
            <IconChecks className="size-4 shrink-0 text-emerald-700" /> Built with{" "}
            {project.techStack.map((Icon, i) => (
              <Icon key={i} />
            ))}
          </li>
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-center gap-2">
              <IconChecks className="size-4 shrink-0 text-emerald-700" /> {highlight}
            </li>
          ))}
        </ul>
        {(project.liveDemo || project.sourceCode) && (
          <div className="mt-auto flex items-center gap-x-4 pt-6">
            {project.liveDemo && (
              <Link
                href={project.liveDemo}
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconWorld className="size-5" /> Live Demo
              </Link>
            )}
            {project.sourceCode && (
              <Link
                href={project.sourceCode}
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconBrandGithub className="size-5" /> Source Code
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
