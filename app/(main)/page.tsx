import Hero from "@/Components/sections/hero";
import About from "@/Components/sections/about";
import Work from "@/Components/sections/work";
import Status from "@/Components/sections/status";
import Timeline from "@/Components/sections/timeline";
import Connect from "@/Components/sections/connect";
import Projects from "@/Components/sections/projects";
import Education from "@/Components/sections/education";
import DesignsSection from "@/Components/sections/designs";
import Socials from "@/Components/sections/socials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Status />
      <Education />
      <Projects />
      <DesignsSection />
      <Timeline />
      <Socials />
      <Connect />
    </>
  );
}
