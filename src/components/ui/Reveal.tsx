"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  once?: boolean;
  as?: "div" | "section" | "article" | "li" | "span";
};

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 36 },
  down: { y: -24 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.96 },
  none: {},
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset[direction],
      filter: reduced ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.95,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </Component>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: reduced ? 0 : 24,
          filter: reduced ? "none" : "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
