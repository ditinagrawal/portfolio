"use client";

import { motion } from "motion/react";

const experiments = [
  {
    title: "Magnetic Cursor",
    description:
      "Custom cursor that magnetically attracts to interactive elements on hover.",
    stack: ["Canvas API", "Motion"],
  },
  {
    title: "Animated Tab Bar",
    description:
      "Fluid tab bar with a spring-animated indicator that follows the active tab.",
    stack: ["Motion", "Tailwind"],
  },
  {
    title: "Scroll-linked Typography",
    description:
      "Text that transforms in weight and opacity as you scroll through sections.",
    stack: ["Motion", "Next.js"],
  },
];

export default function LabPage() {
  return (
    <section className="space-y-16 py-20">
      <motion.div
        className="space-y-1"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold">Lab 🧪</h2>
        <p className="text-sm text-zinc-500">
          This is where I cook amazing UI/UX stuff.
        </p>
      </motion.div>

      <div className="space-y-6">
        <motion.p
          className="text-xs font-medium tracking-widest text-zinc-400 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          Currently building
        </motion.p>
        <div className="flex flex-col gap-4">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="group flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.15 + i * 0.08,
              }}
            >
              <div className="mt-1.5 size-2 shrink-0 rounded-full bg-amber-400" />
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-zinc-800">{exp.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
