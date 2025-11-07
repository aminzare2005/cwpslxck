import React from "react";
import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

function Education() {
  return (
    <Section title="Education" className="grid grid-cols-1">
      <div className="flex flex-col w-full group justify-center items-center gap-2 bg-white p-6 border border-black/10 rounded-xl hover:translate-y-[1px] duration-300">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/be5t.jpg"
              alt={""}
              width={60}
              height={60}
              draggable="false"
              className="size-12 rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-semibold">AI Product Management</span>
              <span className="tracking-wider text-sm font-extralight opacity-85">
                Touring bootcamp - be5t.ir
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="opacity-85">
            in this bootcamp i learned basics of Product Management and AIPM,
            and as a team we built a chatbot app under mentorship of industry
            experts
          </p>
          <Link
            className="self-start hidden py-1 gap-1 justify-start text-blue-500 items-center text-sm"
            target="_blank"
            href={"https://be5t.ir"}
          >
            <Link2Icon size={18} />
            {"Visit "}
            be5t.ir
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Education;
