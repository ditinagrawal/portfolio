import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";

const Home = () => {
  return (
    <main className="relative h-full min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl border border-t-0 border-b-0 border-dashed border-neutral-400">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
