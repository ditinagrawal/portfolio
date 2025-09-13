import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../icons";
import projects from "./projects.json";

export const Projects = () => {
  return (
    <section
      className="border-b border-dashed border-neutral-400 px-4 py-20 sm:px-10 md:px-20"
      id="projects"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="flex items-center justify-center">
          <Icons.projects />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-neutral-950">
            Check out my latest projects
          </h2>
          <p className="text-neutral-500">
            Dive into my most recent creation, where design meets functionality.
            Each detail is crafted with care to deliver an engaging,
            user-focused experience.
          </p>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    image: string;
    link: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="rounded-3xl border-neutral-300 shadow-none sm:px-6">
      <CardHeader className="flex justify-center sm:pt-6">
        <Image
          src={project.image}
          alt="project1"
          width={650}
          height={650}
          className="w-full rounded-2xl"
        />
      </CardHeader>
      <CardContent className="space-y-4 sm:pb-6">
        <h3 className="text-2xl text-neutral-950">{project.name}</h3>
        <p className="text-neutral-500">{project.description}</p>
        <Link
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-2 border-neutral-300 tracking-wide text-neutral-950",
          )}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ExternalLink />{" "}
        </Link>
      </CardContent>
    </Card>
  );
};
