"use client";

import { motion } from "framer-motion";

type AnimateTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  by?: "words" | "chars";
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AnimateText({
  text,
  className,
  as = "span",
  by = "words",
}: AnimateTextProps) {
  const words = text.split(" ");
  const chars = text.split("");

  const content =
    by === "words" ? (
      words.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginRight: "0.25em", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))
    ) : (
      <>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            variants={item}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </>
    );

  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: by === "words" ? 0.04 : 0.02 } },
      }}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
    >
      {content}
    </MotionTag>
  );
}
