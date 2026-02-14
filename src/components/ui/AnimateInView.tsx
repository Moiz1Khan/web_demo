"use client";

import { motion } from "framer-motion";

type AnimateInViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
  amount?: number;
  stagger?: number;
};

const directions = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

export function AnimateInView({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  amount = 0.3,
  stagger,
}: AnimateInViewProps) {
  const { x, y } = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: stagger,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
