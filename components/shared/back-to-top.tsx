"use client";

import { useEffect, useState } from "react";

import { motion, useScroll, useSpring } from "motion/react";

import { IconArrowUp } from "@tabler/icons-react";

const RADIUS = 18;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setVisible(v > 0.05));
  }, [scrollYProgress]);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full bg-white shadow-sm"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.85 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <svg
        className="absolute inset-0"
        width="44"
        height="44"
        viewBox="0 0 44 44"
      >
        {/* track */}
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="#e4e4e7"
          strokeWidth="2"
        />
        {/* progress */}
        <motion.circle
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="#18181b"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ rotate: -90, transformOrigin: "22px 22px" }}
          pathLength={progress}
        />
      </svg>
      <IconArrowUp className="relative size-4 text-zinc-800" />
    </motion.button>
  );
}
