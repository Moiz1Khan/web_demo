"use client";

import { motion } from "framer-motion";

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
