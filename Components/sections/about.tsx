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
    </Section>
  );
}

export default About;
