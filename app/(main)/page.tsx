import Hero from "@/Components/sections/hero";
import About from "@/Components/sections/about";
import Skills from "@/Components/sections/skills";
import Work from "@/Components/sections/work";
import Status from "@/Components/sections/status";
import Timeline from "@/Components/sections/timeline";
import Connect from "@/Components/sections/connect";
import Projects from "@/Components/sections/projects";
import Education from "@/Components/sections/education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Education />
      <Status />
      <Timeline />
      <Connect />
    </>
  );
}
