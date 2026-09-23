"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ThinkerStatue() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-xs shrink-0 md:max-w-sm"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -14, -6, -16, 0],
                rotate: [0, -0.8, 0.4, -0.5, 0],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }
        }
      >
        <div
          className="pointer-events-none absolute inset-8 rounded-full bg-[#C7D0C0]/25 blur-3xl"
          aria-hidden
        />
        <object
          data="/thinker.svg"
          type="image/svg+xml"
          width={420}
          height={520}
          className="relative h-auto w-full drop-shadow-[0_24px_48px_rgba(15,23,42,0.12)]"
          aria-label="The Thinker illustration"
        />
      </motion.div>
    </motion.div>
  );
}
