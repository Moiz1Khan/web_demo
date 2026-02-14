"use client";

import Image from "next/image";

export type LogoItem = {
  name: string;
  src?: string | null;
};

type LogoCarouselProps = {
  items: LogoItem[];
  className?: string;
};

export function LogoCarousel({ items, className = "" }: LogoCarouselProps) {
  // Duplicate 2x: scroll 50% = one full set, then seamless reset
  const duplicated = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="animate-logo-scroll flex gap-8 md:gap-12 w-max">
        {duplicated.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center justify-center shrink-0 h-8 md:h-10 w-32 md:w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {item.src && item.src.trim() ? (
              <Image
                src={item.src}
                alt={item.name}
                width={160}
                height={40}
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="text-sm md:text-base font-medium text-muted-foreground whitespace-nowrap">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
