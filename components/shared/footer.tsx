"use client";

import Link from "next/link";

import { motion } from "motion/react";

import { Container } from "@/components/ui/container";

export const Footer = () => {
  return (
    <motion.footer
      className="border-t border-zinc-200 bg-zinc-50 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container>
        <div className="flex justify-center gap-6 text-sm text-zinc-600">
          <Link href="https://x.com/ditincodes" target="_blank">
            X (Twitter)
          </Link>
          <Link href="https://github.com/ditinagrawal" target="_blank">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/ditinagrawal" target="_blank">
            LinkedIn
          </Link>
        </div>
        <div className="mt-6 border-t border-zinc-300 pt-6 text-center text-sm text-zinc-600">
          Designed & Developed by{" "}
          <span className="font-medium text-zinc-800">Ditin Agrawal</span>
          <br />© {new Date().getFullYear()}. All rights reserved.
        </div>
      </Container>
    </motion.footer>
  );
};
