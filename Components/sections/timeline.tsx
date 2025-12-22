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
            <div className="text-lg font-bold">Where it began</div>
            <p>
              I bought a Premiere Pro course and started editing journey after
              few months of mobile edits.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-bold">Coding path</div>
            <p>
              During COVID, I started learning code to build an online
              game server.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-bold">Finding my interest</div>
            <p>
              My first income attempts turned into a few Instagram brands that
              got millions of views.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-bold">Time to earn</div>
            <p>
              I began learning modern frontend tech like nextjs & tailwind & expo
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-bold">Real career starts</div>
            <p>
              Joined different startups,
              <br />
              made connections, bootcamps, art school,
              <br />
              and product management.
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
              draggable='false'
              height={70}
              width={70}
              className="h-32 w-auto"
            />
          </div>
          <div className="timeline-middle text-2xl">✶</div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2026</time>
            <div className="text-lg font-bold">A defining year!</div>
            <p>Launching products, building teams, going all-in on business,
              <br />
              and maybe documenting on livestreams!
            </p>
          </div>
          {/* <hr /> */}
        </li>
      </ul>
    </Section>
  );
}

export default Timeline;
