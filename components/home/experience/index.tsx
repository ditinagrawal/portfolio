import { Button } from "@/components/ui/button";

export const Experience = () => {
  return (
    <section
      className="border-b border-dashed border-neutral-400 px-4 py-20 sm:px-10 md:px-20"
      id="experience"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-neutral-950">
            Work experience
          </h2>
          <p className="text-neutral-500">
            With a strong foundation in both frontend and backend development, I
            bring a passion for building robust, user-focused solutions. My
            experience spans collaborating with diverse teams, adapting quickly
            to new technologies, and delivering high-quality results. I thrive
            on solving complex problems and am always eager to take on projects
            that challenge me to grow and innovate.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-between gap-2 border-b border-dotted border-neutral-400 sm:flex-row sm:items-center">
            <div>2025 - 2025</div>
            <div className="flex items-center gap-4">
              <span className="flex-1">Next.js Developer</span>
              <Button className="border-purple-300 bg-purple-200 text-purple-600 hover:bg-purple-200/90">
                DreamLegal
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 border-b border-dotted border-neutral-400 sm:flex-row sm:items-center">
            <div>2022 - Present</div>
            <div className="flex items-center gap-4">
              <span className="flex-1">Full-stack Developer</span>
              <Button className="border-green-300 bg-green-200 text-green-600 hover:bg-green-200/90">
                Freelance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
