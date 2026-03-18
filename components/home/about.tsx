"use client";

import { Link } from "next-view-transitions";
import { Caveat } from "next/font/google";

import { IconArrowUpRight, IconBrandX } from "@tabler/icons-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const About = () => {
  return (
    <section className="py-28">
      <motion.div
        className="rounded-2xl bg-zinc-50 p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="leading-relaxed">
          <span className={cn(caveat.className, "text-3xl font-medium")}>
            Hey 👋🏻
          </span>{" "}
          So, you know my name now. Let me tell you more about myself. I live in
          Mathura, India 🇮🇳. I love to{" "}
          <span className={cn(caveat.className, "mx-0.5 text-2xl font-medium")}>
            code
          </span>
          , build random stuff and to teach others what I know. I love reading{" "}
          <span className="font-medium">books, shayaris, poetry</span> and
          watching movies, sometimes I write my own{" "}
          <span className="font-medium">shayaris</span> too.
          <br />I cook UI/UX stuff in my{" "}
          <Link
            href="/lab"
            className={cn("mx-1 text-xl text-zinc-800", caveat.className)}
          >
            lab <IconArrowUpRight className="inline-block size-4" />
          </Link>{" "}
          and sometimes i cook in kitchen too 🍕.
          <br />
          Want to know more about me? You can find me on the internet, send me a
          message on{" "}
          <Link
            href="https://x.com/ditinagrawal"
            target="_blank"
            className={"mx-1 text-zinc-800"}
          >
            <IconBrandX className="inline-block" />
          </Link>
        </p>
      </motion.div>
    </section>
  );
};
