import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { FeaturedProject } from "@/components/home/featured-project";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { TechStack } from "@/components/home/tech-stack";
import { Contributions } from "@/components/shared/contributions";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProject />
      <Experience />
      <Projects />
      <About />
      <TechStack />
      <Contributions />
    </div>
  );
}
