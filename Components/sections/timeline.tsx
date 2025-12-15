import React from "react";
import Section from "../section";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";

function Timeline() {
  return (
    <Section>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical md:-mb-8">
        <li>
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-bold">شروع همه چیز</div>
            <p>
              یه دوره آموزشی پریمیر پرو خریدم و مسیر تدوین رو بصورت جدی بعد از
              چند مدت ادیت با موبایل استارت زدم
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-bold">مسیر برنامه نویسی</div>
            <p>
              توی تعطیلات کرونا من سراغ یادگیری برنامه نویسی برای ساخت سرور گیم
              آنلاین رفتم
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-bold">تلاش برای پیداکردن علاقه</div>
            <p>
              نتیجه اولین تلاش‌ها برای کسب درامد شد چندتا برند اینستاگرامی که
              میلیون‌ها ایمپرشن گرفتن
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-bold">زمان درآمدزایی</div>
            <p>
              شروع به یادگیری تکنولوژی‌های مدرن فرانت کردم و به Next و Tailwind
              مسلط شدم
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-bold">آغاز مسیر شغلی واقعی</div>
            <p>
              جوین شدن به استارتاپ‌های مختلف،
              <br />
              ایجاد کانکشن، بوتکمپ، فعالیت های هنری، آغاز مسیر پروداکت
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start md:block hidden md:mb-10">
            <Image
              src={"/assets/new-year.gif"}
              alt="New Year Gif"
              height={70}
              width={70}
              className="h-32 w-auto"
            />
          </div>
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2026</time>
            <div className="text-lg font-bold">سال سرنوشت ساز!</div>
            <p>
              لانچ پروداکت‌های مختلف، تیم سازی، ورود جدی به دنیای کسب و کارها
            </p>
          </div>
          {/* <hr /> */}
        </li>
      </ul>
    </Section>
  );
}

export default Timeline;
