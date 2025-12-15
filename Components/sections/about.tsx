import React from "react";
import Section from "../section";
import Link from "next/link";
import { Download } from "lucide-react";

function About() {
  const soft_skills = ["Git", "Swagger", "Figma", "v0", "bolt.new"];
  const hard_skills = [
    "NextJS",
    "Tailwindcss",
    "React-Query",
    "Expo",
    "React Bits",
    "ShadcnUI",
  ];
  return (
    <Section classNameWrapper="space-y-3 flex flex-col justify-center items-center">
      <Link
        className="px-4 hover:scale-102 transition-transform py-2 bg-gradient-to-l from-zinc-700 via-zinc-900 to-zinc-950 text-white items-center inline-flex gap-2 rounded-lg"
        href={"/downloads/aminzare-resume.pdf"}
        target="_blank"
      >
        <Download size={18} />
        <h2>دانلود فایل رزومه من</h2>
      </Link>
      <div className="opacity-90 text-center">
        من درحال حاضر روی ساخت و توسعه چندین استارتاپ و محصول
        <br />
        در فیلدهای فرانت‌اند و مدیرمحصول کار میکنم.
        <br />
        درکنارش بصورت پاره‌وقت برای برندهای اینستاگرامی و کامیونیتی‌ها
        <br />
        تولیدمحتوا، طراحی گرافیکی و ادیت ویدیو انجام میدم.
      </div>
      <div className="w-full flex justify-center flex-wrap gap-2">
        {soft_skills.map((s, i) => (
          <div
            className="px-1.5 py-0.5 border border-zinc-400 hover:bg-black hover:border-black hover:text-white rounded-lg duration-300"
            key={i}
          >
            {s}
          </div>
        ))}
        {hard_skills.map((s, i) => (
          <div
            className="px-1.5 py-0.5 border hover:bg-violet-600 hover:text-white duration-300 hover:border-violet-600 border-violet-300 rounded-lg"
            key={i}
          >
            {s}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default About;
