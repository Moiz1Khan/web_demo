"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        // Hide on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const dot = dotRef.current!;
        const ring = ringRef.current!;

        let mx = -100, my = -100;
        let rx = -100, ry = -100;
        let isHovering = false;
        let raf = 0;

        // Mouse tracking
        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
        };

        // Detect hoverable elements for ring morph
        const onEnter = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (t.closest("a, button, [role=button], input, textarea, select, label")) {
                isHovering = true;
            }
        };
        const onLeave = () => { isHovering = false; };

        const onDown = () => dot.classList.add("cursor-pressed");
        const onUp = () => dot.classList.remove("cursor-pressed");

        window.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseover", onEnter, { passive: true });
        document.addEventListener("mouseout", onLeave, { passive: true });
        document.addEventListener("mousedown", onDown, { passive: true });
        document.addEventListener("mouseup", onUp, { passive: true });

        // Single RAF loop — dot snaps instantly, ring eases behind
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const loop = () => {
            // Dot follows exactly
            dot.style.transform = `translate(${mx}px, ${my}px)`;

            // Ring smoothly trails
            rx = lerp(rx, mx, 0.12);
            ry = lerp(ry, my, 0.12);
            ring.style.transform = `translate(${rx}px, ${ry}px) ${isHovering ? "scale(2.2)" : "scale(1)"}`;

            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        // Hide default cursor on desktop only
        document.body.style.cursor = "none";

        return () => {
            cancelAnimationFrame(raf);
            document.body.style.cursor = "";
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onEnter);
            document.removeEventListener("mouseout", onLeave);
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("mouseup", onUp);
        };
    }, []);

    return (
        <>
            {/* Inner dot — snaps to cursor */}
            <div
                ref={dotRef}
                aria-hidden
                className="cursor-dot"
            />
            {/* Outer ring — trails with spring */}
            <div
                ref={ringRef}
                aria-hidden
                className="cursor-ring"
            />
        </>
    );
}
