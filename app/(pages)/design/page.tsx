import { GALLERY_ITEMS } from "@/constants/items";
import Image from "next/image";

export default function DesignsPage() {
  return (
    <div className="px-5 py-8 mx-auto">
      <div className="columns-2 gap-4 space-y-4">
        {[...GALLERY_ITEMS].reverse().map((item) => (
          <div key={item.url} className="break-inside-avoid">
            <Image
              alt={item.title}
              src={item.url}
              width={200}
              height={200}
              className="w-full h-auto rounded-xl"
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
