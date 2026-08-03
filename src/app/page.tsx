import { About } from "@/components/About";
import { Competencies } from "@/components/Competencies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Competencies />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
