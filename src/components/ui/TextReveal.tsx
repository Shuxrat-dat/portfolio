"use client";

import { motion, useReducedMotion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
  gradient?: boolean;
};

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as = "span",
  gradient = false,
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];
  const words = text.split(" ");

  return (
    <Component className={className} aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <motion.span
            className={`inline-block ${gradient ? "gradient-text" : ""}`}
            initial={reduced ? false : { y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
