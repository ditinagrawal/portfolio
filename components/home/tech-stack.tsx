"use client";

import { JetBrains_Mono } from "next/font/google";

import { IconTools } from "@tabler/icons-react";
import { motion } from "motion/react";

import {
  AWSIcon,
  BunIcon,
  NextjsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  ReactQueryIcon,
  ShadcnUI,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/shared/icons";
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const icons = [
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  TailwindCSSIcon,
  ShadcnUI,
  PostgreSQLIcon,
  PrismaIcon,
  AWSIcon,
  ReactQueryIcon,
  BunIcon,
  VercelIcon,
];

export const TechStack = () => {
  return (
    <section className="pb-24">
      <div className="space-y-8">
        <motion.h4
          className={cn(
            jetBrainsMono.className,
            "flex items-center gap-x-2 text-sm font-medium text-zinc-600"
          )}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <IconTools className="mt-0.5 size-4" /> My Cool Stack
        </motion.h4>
        <div className="flex flex-wrap gap-6">
          {icons.map((Icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.04 }}
            >
              <Icon className="size-8" />
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
