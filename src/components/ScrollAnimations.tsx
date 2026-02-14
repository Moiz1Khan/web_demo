"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  useEffect(() => {
    let ctx: gsap.Context | null = null;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ctx = gsap.context(() => {
          // Hero content fade
          const hero = document.querySelector("[data-animate='hero']");
          if (hero) {
            gsap.from(hero, {
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.2,
            });
          }

          // Section reveals - simple fade
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              y: 24,
              duration: 0.5,
              ease: "power2.out",
            });
          });

          // Stagger cards
          gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
            const children = container.querySelectorAll("[data-stagger-item]");
            if (children.length > 0) {
              gsap.from(children, {
                scrollTrigger: {
                  trigger: container,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 20,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out",
              });
            }
          });

          // Scale-in cards
          gsap.utils.toArray<HTMLElement>("[data-scale-in]").forEach((el) => {
            gsap.from(el, {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
              opacity: 0,
              scale: 0.98,
              duration: 0.5,
              ease: "power2.out",
            });
          });
        });
      });
    });
    return () => ctx?.revert();
  }, []);

  return null;
}
