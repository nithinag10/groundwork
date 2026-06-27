"use client";

import { motion, useReducedMotion } from "framer-motion";

// The signature element (brand.md §4): visualizes the whole thesis —
// the industry's deliverable (strategy phase, struck through) resolving
// into ours (live in production). One clean ~1.5s sequence on load.
export function Signature() {
  const reduce = useReducedMotion();

  // Reduced motion: render the final resolved state, no animation.
  const struck = reduce ? { scaleX: 1 } : { scaleX: [0, 1] };
  const reveal = reduce
    ? { opacity: 1, y: 0 }
    : { opacity: [0, 1], y: [8, 0] };

  return (
    <div className="w-full max-w-md font-mono text-sm">
      {/* What they deliver */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-md border border-border bg-bg-elev/60 p-4"
      >
        <div className="eyebrow mb-2 normal-case tracking-[0.14em]">
          what they deliver
        </div>
        <div className="relative inline-block text-text-muted">
          Q4 · Strategy &amp; alignment phase
          <motion.span
            aria-hidden
            initial={false}
            animate={struck}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.5, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-text-muted"
          />
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: reduce ? 0 : 0.9 }}
        className="py-2 text-center text-text-muted"
        aria-hidden
      >
        ↓
      </motion.div>

      {/* What we deliver */}
      <motion.div
        initial={false}
        animate={reveal}
        transition={{ duration: 0.5, delay: reduce ? 0 : 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-md border border-accent/30 bg-bg-elev p-4"
      >
        <div className="eyebrow mb-2 normal-case tracking-[0.14em]">
          what we deliver
        </div>
        <div className="flex items-center gap-2 text-accent">
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          Live in production · shipped in 3 wks
        </div>
      </motion.div>
    </div>
  );
}
