import Section from "../section";
import CalculateAge from "../calculateAge";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

function Hero() {
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
    <Section>
      <h1 className="text-3xl mb-4 text-start md:text-4xl font-bold text-gray-900 dark:text-white">
        سلام، من امین هستم👋🏻
      </h1>
      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap md:w-1/2 justify-start text-xs md:text-base gap-2">
          <span className="px-3 py-1 from-zinc-200 via-zinc-100 to-zinc-300 bg-linear-to-br rounded-full font-medium">
            ✦ <CalculateAge /> ساله
          </span>
          <span className="px-3 py-1 from-zinc-200 via-zinc-100 to-zinc-300 bg-linear-to-br rounded-full font-medium">
            ✦ دیجیتال کریتور
          </span>
          <span className="px-3 py-1 from-zinc-200 via-zinc-100 to-zinc-300 bg-linear-to-br rounded-full font-medium">
            ✦ فرانت‌اند دولوپر
          </span>
          <span className="px-3 py-1 from-zinc-200 via-zinc-100 to-zinc-300 bg-linear-to-br rounded-full font-medium">
            ✦ کارآموز پروداکت منیجمنت
          </span>
        </div>

        <div className="relative">
          <div className="relative">
            <div className="size-28 md:size-24">
              <Image
                draggable="false"
                className="object-cover rounded-2xl md:rounded-3xl"
                alt="Profile Picture - امین"
                src={"https://github.com/aminzare2005.png"}
                fill
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
