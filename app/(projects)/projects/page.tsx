import { ProjectCard } from "@/components/shared/project-card";

export default function ProjectsPage() {
  return (
    <section className="space-y-10 py-20">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Projects 📑</h2>
        <p className="text-sm text-zinc-500">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
