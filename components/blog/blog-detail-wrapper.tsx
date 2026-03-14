"use client";

import { Link } from "next-view-transitions";
import { JetBrains_Mono } from "next/font/google";

import { IconArrowLeft } from "@tabler/icons-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function BlogDetailWrapper({
  title,
  date,
  content,
}: {
  title: string;
  date: string;
  content: React.ReactNode;
}) {
  return (
    <section className="py-20">
      <motion.div
        className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="min-w-0">
          <h4 className={cn(jetBrainsMono.className, "truncate")}>{title}</h4>
          <p className="text-sm text-zinc-500">{date}</p>
        </div>
        <Link href="/blog">
          <div className="bg-zinc-200/60 px-2 py-1 text-sm">
            <IconArrowLeft className="-mt-0.5 mr-1 inline-block size-4" />
            Back
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="prose-zinc prose dark:prose-invert"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
      >
        {content}
      </motion.div>
    </section>
  );
}
