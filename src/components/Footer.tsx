"use client";

import { profile } from "@/data/content";
import { Magnetic } from "./ui/Magnetic";

export function Footer() {
  return (
    <footer className="relative z-1 border-t border-white/8 py-8">
      <div className="container flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic strength={0.2}>
            <a
              href={profile.contacts.githubHref}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="transition hover:text-ink"
            >
              GitHub
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href={profile.contacts.telegramHref}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className="transition hover:text-ink"
            >
              Telegram
            </a>
          </Magnetic>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
            Full Stack · Middle
          </span>
        </div>
      </div>
    </footer>
  );
}
