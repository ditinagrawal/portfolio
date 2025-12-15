import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { FeaturedProject } from "@/components/home/featured-project";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { TechStack } from "@/components/home/tech-stack";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <FeaturedProject />
      <Projects />
      <About />
      <Experience />
      <TechStack />
    </Container>
  );
}
