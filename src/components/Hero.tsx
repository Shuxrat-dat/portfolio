"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/content";
import { MagneticButton } from "./ui/MagneticButton";
import { Reveal } from "./ui/Reveal";
import { TextReveal } from "./ui/TextReveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative z-1 overflow-hidden pt-36 pb-24 md:pt-48 md:pb-32"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-24 right-[8%] h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-[12%] h-56 w-56 rounded-full bg-accent-2/10 blur-3xl"
        animate={{ opacity: [0.25, 0.55, 0.25], y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity, scale }} className="container">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 shadow-[0_0_40px_rgba(139,156,255,0.08)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Open to work · {profile.level}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="eyebrow">{profile.role}</p>
        </Reveal>

        <TextReveal
          as="h1"
          text={profile.name}
          delay={0.1}
          gradient
          className="mt-5 max-w-5xl text-[clamp(3.4rem,11vw,7.4rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white"
        />

        <motion.div
          className="mt-5 h-px max-w-xs origin-left bg-gradient-to-r from-accent via-accent-2 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <Reveal delay={0.28}>
            <p className="max-w-2xl text-xl leading-relaxed text-muted md:text-[1.55rem]">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.34} direction="left">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-mono text-sm text-muted backdrop-blur-xl">
              <div>
                <span className="text-ink">Опыт</span> · {profile.experience}
              </div>
              <div>
                <span className="text-ink">Локация</span> · {profile.location}
              </div>
              <div>
                <span className="text-ink">Фокус</span> · API · UI · Production
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-11 flex flex-wrap gap-3">
            <MagneticButton href="#portfolio">Смотреть проекты</MagneticButton>
            <MagneticButton href="#competencies" variant="ghost">
              Компетенции
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Написать мне
            </MagneticButton>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
