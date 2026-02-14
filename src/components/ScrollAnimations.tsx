"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax hero background - deeper, more dramatic
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: -25,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section"),
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      });

      // Hero content - staggered word-level reveal
      const hero = document.querySelector("[data-animate='hero']");
      if (hero) {
        gsap.from(hero, {
          y: 100,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      // Section reveals - vertical slide with scale
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          scale: 0.98,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Stagger cards - trigger when section enters viewport
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
        const children = container.querySelectorAll("[data-stagger-item]");
        if (children.length > 0) {
          gsap.from(children, {
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
          });
        }
      });

      // Scale-in cards (calculator, etc.)
      gsap.utils.toArray<HTMLElement>("[data-scale-in]").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          scale: 0.94,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.4)",
        });
      });

      // Magnetic-style hover on primary CTAs (subtle pull)
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.addEventListener("mousemove", (e: Event) => {
          const ev = e as MouseEvent;
          const rect = el.getBoundingClientRect();
          const x = (ev.clientX - rect.left) / rect.width - 0.5;
          const y = (ev.clientY - rect.top) / rect.height - 0.5;
          gsap.to(el, {
            x: x * 8,
            y: y * 8,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
