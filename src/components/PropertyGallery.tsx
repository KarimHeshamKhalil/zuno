"use client";

import Image from "next/image";
import { useState } from "react";

export default function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-neutral-200 shadow-sm sm:aspect-[16/8]">
        {images.map((src, i) => (
          <Image
            key={src + i}
            src={src}
            alt={`${title} photo ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            priority={i === 0}
            className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
          />
        ))}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={() =>
              setActive((a) => (a - 1 + images.length) % images.length)
            }
            aria-label="Previous photo"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow transition hover:scale-105"
          >
            ←
          </button>
          <button
            onClick={() => setActive((a) => (a + 1) % images.length)}
            aria-label="Next photo"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow transition hover:scale-105"
          >
            →
          </button>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur">
          {active + 1} / {images.length}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            aria-label={`View photo ${i + 1}`}
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl transition-all ${
              i === active
                ? "ring-[3px] ring-[#f0672c] ring-offset-2 ring-offset-[#f4efe3]"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 25vw, 250px"
              className="object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
