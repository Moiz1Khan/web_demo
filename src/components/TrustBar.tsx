"use client";

import Image from "next/image";

const BANK_LOGOS = [
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697590/Screenshot_2026-02-21_231253_yi7c0z.png",
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697534/Screenshot_2026-02-21_231159_prjr20.png",
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697483/Screenshot_2026-02-21_231108_coyp1e.png",
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697417/Screenshot_2026-02-21_231005_oxx393.png",
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697349/Screenshot_2026-02-21_230852_qbw2yy.png",
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697242/Screenshot_2026-02-21_230657_wilp84.png",
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697076/Screenshot_2026-02-21_230415_rptjfe.png",
  "https://res.cloudinary.com/dxfejax3u/image/upload/v1771697031/Screenshot_2026-02-21_230133_tnifpu.png",
];

export function TrustBar() {
  return (
    <section className="py-8 md:py-10 border-b border-border/50 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-center text-lg md:text-xl font-semibold text-foreground mb-6">
          We work with the best banks in the United Arab Emirates.
        </h3>
        
        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...BANK_LOGOS, ...BANK_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 md:mx-6 h-16 md:h-20 w-32 md:w-40 relative"
              >
                <Image
                  src={logo}
                  alt={`Bank logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mt-6">
          We compare rates from 15+ UAE lenders to get you the best deal.
        </p>
      </div>
    </section>
  );
}
