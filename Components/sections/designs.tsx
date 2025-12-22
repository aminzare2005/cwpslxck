import Image from "next/image";
import Section from "../section";
import { Link2Icon } from "lucide-react";
import Link from "next/link";

function DesignsSection() {
  return (
    <Section classNameWrapper="-m-5" className="relative">
      <div className="w-full min-h-44 overflow-hidden group">
        <div className="absolute h-full w-full bg-gradient-to-b from-white/40 via-white/90 to-white p-3 z-10">
          <Link
            href={"/design"}
            className="w-full h-full flex justify-center items-end font-black text-2xl"
          >
            <div className="inline-flex items-center justify-center gap-1 p-4">
              <span className="group-hover:rotate-90 duration-1000">
                ✶
              </span>{" "}
              check my designs
            </div>
          </Link>
        </div>
        <div className="aspect-5/2 w-full overflow-hidden py-2">
          <Image
            alt="Gallery Section Screenshot"
            loading="lazy"
            width={500}
            height={500}
            draggable="false"
            src={"/assets/gallery.png"}
            className="w-full object-cover px-2 transition-all duration-1000 group-hover:translate-y-[-40%]"
          />
        </div>
      </div>
    </Section>
  );
}

export default DesignsSection;
