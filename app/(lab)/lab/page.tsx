"use client";

import { IconFlask } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function LabPage() {
  return (
    <section className="flex flex-col items-center justify-center py-60">
      <motion.div
        className="flex flex-col items-center gap-4 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex size-16 items-center justify-center rounded-2xl bg-zinc-100">
          <IconFlask className="size-8 text-zinc-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-800">Lab</h2>
        <p className="max-w-sm text-sm text-zinc-500">
          This page is under development. Something cool is cooking — check back
          soon!
        </p>
      </motion.div>
    </section>
  );
}
