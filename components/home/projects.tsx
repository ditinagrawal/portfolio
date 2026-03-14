"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";

import { IconBrandGithub, IconChecks, IconWorld } from "@tabler/icons-react";
import { motion } from "motion/react";

import {
  BunIcon,
  NextjsIcon,
  RedisIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  UpstashIcon,
} from "@/components/shared/icons";

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export const Projects = () => {
  return (
    <section className="pt-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Project 1 */}
        <motion.div
          className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50"
          {...cardVariants}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="overflow-hidden">
            <Image
              src="/projects/private-chat.png"
              alt="Private-Chat"
              width={512}
              height={512}
              className="scale-125"
            />
          </div>
          <div className="border-t border-zinc-200 p-4">
            <h2 className="text-lg font-medium text-zinc-800">Private Chat</h2>
            <p className="text-sm text-zinc-600">
              A private, self-destructing chat room.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <IconChecks className="size-4 text-emerald-700" /> Built with{" "}
                <NextjsIcon /> <TypeScriptIcon /> <TailwindCSSIcon />{" "}
                <RedisIcon /> <UpstashIcon /> <BunIcon />
              </li>
              <li className="flex items-center gap-2">
                <IconChecks className="size-4 text-emerald-700" /> Each chat
                room expires and <br />
                self-destructs after 10 minutes.
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-x-4">
              <Link
                href="https://chat-room.ditin.in"
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconWorld className="size-5" /> Live Demo
              </Link>
              <Link
                href="https://github.com/ditinagrawal/private-chat"
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconBrandGithub className="size-5" /> Source Code
              </Link>
            </div>
          </div>
        </motion.div>
        {/* Project 2 */}
        <motion.div
          className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50"
          {...cardVariants}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute top-2 left-3 z-999 rounded-lg bg-amber-500/80 px-2.5 py-0.5 text-sm font-medium text-zinc-900">
            Building... 🚧
          </div>
          <div className="overflow-hidden blur-xs">
            <Image
              src="/projects/private-chat.png"
              alt="Private-Chat"
              width={512}
              height={512}
              className="scale-125"
            />
          </div>
          <div className="border-t border-zinc-200 p-4 blur-xs">
            <h2 className="text-lg font-medium text-zinc-800">Private Chat</h2>
            <p className="text-sm text-zinc-600">
              A private, self-destructing chat room.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <IconChecks className="size-4 text-emerald-700" /> Built with{" "}
                <NextjsIcon /> <TypeScriptIcon /> <TailwindCSSIcon />{" "}
                <RedisIcon /> <UpstashIcon /> <BunIcon />
              </li>
              <li className="flex items-center gap-2">
                <IconChecks className="size-4 text-emerald-700" /> Each chat
                room expires and <br />
                self-destructs after 10 minutes.
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-x-4">
              <Link
                href="https://chat-room.ditin.in"
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconWorld className="size-5" /> Live Demo
              </Link>
              <Link
                href="https://github.com/ditinagrawal/private-chat"
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconBrandGithub className="size-5" /> Source Code
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        <Link
          href="/projects"
          className="mt-6 flex items-center justify-center text-sm text-zinc-800"
        >
          View All &rarr;
        </Link>
      </motion.div>
    </section>
  );
};
