import Link from "next/link";

import { Container } from "@/components/ui/container";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-x-2 text-lg text-zinc-800">
              <div className="size-2.5 animate-pulse rounded-full bg-emerald-500" />
              <span>Available for work</span>
            </div>
            <p className="mt-2 mb-6 text-sm text-zinc-600">
              If your site isn&apos;t helping you grow, I&apos;ll help you build
              one that looks sharp, builds trust, and converts better.
            </p>
            <Link
              href="mailto:ditin.dev@gmail.com"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-white transition-colors duration-300 hover:bg-zinc-800"
            >
              Book a free call
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-sm text-zinc-600 max-md:w-fit md:items-end">
            <Link href="https://x.com/ditinagrawal">X (Twitter)</Link>
            <Link href="https://github.com/ditinagrawal">GitHub</Link>
            <Link href="https://linkedin.com/in/ditinagrawal">LinkedIn</Link>
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-300 pt-6 text-center text-sm text-zinc-600">
          Designed & Developed by{" "}
          <span className="font-medium text-zinc-800">Ditin Agrawal</span>
          <br />© 2025. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
