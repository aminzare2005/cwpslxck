import React from "react";
import Section from "../section";
import Link from "next/link";
import { Download } from "lucide-react";

function About() {
  return (
    <Section classNameWrapper="space-y-3 flex flex-col justify-center items-center">
      <Link
        className="px-4 hover:scale-102 transition-transform py-2 bg-gradient-to-l from-zinc-700 via-zinc-900 to-zinc-950 text-white items-center inline-flex gap-2 rounded-lg"
        href={"/downloads/aminzare-resume.pdf"}
        target="_blank"
      >
        <Download size={18} />
        <h2>Download My Resume File</h2>
      </Link>
      <div className="opacity-90 text-center">
        I’m currently growing several startups and products
        <br />
        as frontend developer and product manager.
        <br />
        Alongside that, I work part-time with Instagram brands and communities
        <br />
        creating content, graphic design, and video editing.
      </div>
    </Section>
  );
}

export default About;
