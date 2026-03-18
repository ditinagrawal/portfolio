"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { IconCheck, IconCopy, IconMail } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { Container } from "@/components/ui/container";

const EMAIL = "ditin.dev@gmail.com";

export const Header = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.header
      className="fixed top-0 z-99999 h-16 w-full border-b border-zinc-200 bg-zinc-50"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Container className="flex h-full items-center">
        <nav className="flex w-full items-end justify-between">
          <div className="flex items-end gap-x-6">
            <Link href="/">
              <Image
                src="/avatar.png"
                alt="logo"
                width={1024}
                height={1024}
                className="size-10 rounded-full bg-zinc-100"
                priority
                draggable={false}
              />
            </Link>
            <div className="flex items-center gap-x-4 text-sm font-medium text-zinc-500">
              <Link
                href="/projects"
                className="transition-colors duration-300 hover:text-zinc-800"
              >
                Projects
              </Link>
              <Link
                href="/lab"
                className="transition-colors duration-300 hover:text-zinc-800"
              >
                Lab
              </Link>
              <Link
                href="/blog"
                className="transition-colors duration-300 hover:text-zinc-800"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-1.5">
            <Link
              href="mailto:ditin.dev@gmail.com"
              className="flex cursor-pointer items-center gap-x-1 rounded-md bg-zinc-200/60 px-2.5 py-1 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:bg-zinc-200"
            >
              <IconMail className="size-4" />
              E-Mail
            </Link>
            <button
              onClick={copyEmail}
              className="relative flex cursor-pointer items-center justify-center rounded-md bg-zinc-200/60 p-1.5 text-zinc-700 transition-colors duration-300 hover:bg-zinc-200"
              aria-label="Copy email"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <IconCheck className="size-4 text-emerald-600" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <IconCopy className="size-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
};
