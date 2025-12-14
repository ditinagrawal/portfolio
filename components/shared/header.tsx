import Image from "next/image";

import { IconMail } from "@tabler/icons-react";
import { Link } from "next-view-transitions";

import { Container } from "@/components/ui/container";

export const Header = () => {
  return (
    <header className="fixed top-0 z-99999 h-16 w-full border-b border-zinc-200 bg-zinc-50">
      <Container className="flex h-full items-center">
        <nav className="flex w-full items-center justify-between">
          <div className="flex items-end gap-x-6">
            <Link href="/">
              <Image
                src="/avatar.png"
                alt="logo"
                width={1024}
                height={1024}
                className="size-10 rounded-full bg-zinc-100"
              />
            </Link>
            <div className="flex items-center gap-x-4 text-sm font-medium text-zinc-500">
              <Link
                href="/work"
                className="transition-colors duration-300 hover:text-zinc-800"
              >
                Work
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
          <div>
            <Link
              href="mailto:ditin.dev@gmail.com"
              className="flex cursor-pointer items-center gap-x-1 rounded-md bg-zinc-200 px-2.5 py-1 text-sm font-medium text-zinc-800 transition-colors duration-300 hover:bg-zinc-300"
            >
              <IconMail className="size-4" />
              E-Mail
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};
