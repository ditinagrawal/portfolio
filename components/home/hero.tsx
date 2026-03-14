"use client";

import { Link } from "next-view-transitions";

import { motion } from "motion/react";

import {
  BunIcon,
  MotionIcon,
  NextjsIcon,
  PostgreSQLIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "@/components/shared/icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" as const, delay },
});

export const Hero = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="space-y-4 md:space-y-3">
        <motion.h1
          className="text-6xl font-bold tracking-tight text-zinc-800"
          {...fadeUp(0)}
        >
          Hi, I&apos;m Ditin.
        </motion.h1>
        <motion.p
          className="max-w-xl space-x-1.5 text-lg tracking-tight text-zinc-600"
          {...fadeUp(0.1)}
        >
          A self-taught developer having expertise in building beautiful and
          functional websites using <NextjsIcon /> <TypeScriptIcon />{" "}
          <TailwindCSSIcon /> <MotionIcon /> <PostgreSQLIcon /> <BunIcon />.
          <br />I also love to share my knowledge with others by writing
          <Link href="/blog" className="mx-1.5 text-zinc-800 underline">
            blogs
          </Link>
          and creating tutorials. I cook amazing UI/UX stuff in my{" "}
          <Link href="/lab" className="mx-1 text-zinc-800 underline">
            lab &rarr;
          </Link>
          .
        </motion.p>
        <motion.p className="text-sm text-zinc-500" {...fadeUp(0.2)}>
          It&apos;s been{" "}
          <span className="font-medium text-zinc-800">
            {new Date().getFullYear() - 2022} years
          </span>{" "}
          since I started my journey as a developer.
        </motion.p>
      </div>
    </section>
  );
};
