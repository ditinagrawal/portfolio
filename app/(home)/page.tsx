import { Hero } from "@/components/home/hero";
import { FeaturedProject } from "@/components/home/featured-project";
import { Container } from "@/components/ui/container";

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <FeaturedProject />
    </Container>
  );
}
