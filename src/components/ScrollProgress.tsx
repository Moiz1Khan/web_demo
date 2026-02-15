"use client";

import { useEffect, useState } from "react";
import { throttle } from "@/lib/utils";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    }
    const throttled = throttle(updateProgress, 50);

    updateProgress();
    window.addEventListener("scroll", throttled, { passive: true });
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  return (
    <div
      className="scroll-progress transition-[width] duration-75 ease-out"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
}
