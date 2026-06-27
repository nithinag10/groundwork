"use client";

import { useEffect, useState } from "react";
import { BRAND, CAL_LINK } from "@/lib/site";

const LINKS = [
  { label: "Thesis", href: "#thesis" },
  { label: "What we do", href: "#what-we-do" },
  { label: "How we ship", href: "#how-we-ship" },
  { label: "Writing", href: "#writing" },
  { label: "Verticals", href: "#verticals" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-text"
        >
          {BRAND}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={CAL_LINK}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          Book a working session
        </a>
      </nav>
    </header>
  );
}
