"use client";

import { motion } from "framer-motion";

export function OwlIllustration() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-xs shrink-0 md:max-w-sm"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-8 rounded-full bg-[#C7D0C0]/25 blur-3xl"
          aria-hidden
        />
        <object
          data="/owl.svg"
          type="image/svg+xml"
          width={420}
          height={520}
          className="relative h-auto w-full drop-shadow-[0_24px_48px_rgba(15,23,42,0.12)]"
          aria-label="Owl illustration"
        />
      </div>
    </motion.div>
  );
}
