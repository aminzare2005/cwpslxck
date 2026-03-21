import React from "react";
import Section from "../section";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/constants/items";

function Gallery() {
  return (
    <Section
      classNameWrapper="grid grid-cols-1 md:grid-cols-2 w-full gap-2 pt-4"
      title="Gallery"
    >
      {GALLERY_ITEMS.map((item) => (
        <div key={item.url}>
          <Image
            src={item.url}
            alt={item.title}
            width={300}
            height={300}
            loading="lazy"
            className="w-full"
          />
        </div>
      ))}
    </Section>
  );
}

export default Gallery;
