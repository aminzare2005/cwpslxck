import React from "react";
import Section from "../section";
import { hard_skills, soft_skills } from "@/constants/items";

function Skills() {
  return (
    <Section>
      <div className="w-full flex max-w-sm mx-auto justify-center flex-wrap gap-1">
        {hard_skills.map((s, i) => (
          <div
          className="px-1.5 py-1 bg-black text-white hover:scale-101 rounded-lg duration-300"
          key={i}
          >
            {s}
          </div>
        ))}
        {soft_skills.map((s, i) => (
          <div
          className="px-1.5 py-1 border bg-violet-600 text-white rounded-lg duration-300"
            key={i}
          >
            {s}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
