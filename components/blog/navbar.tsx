import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconHomeFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-dashed border-neutral-400 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <div className="mr-4 flex">
          <Link href="/">
            <IconHomeFilled className="size-6 text-neutral-700" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/ditinagrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithubFilled className="text-neutral-700" />
          </Link>
          <Link
            href="https://x.com/ditinagrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandXFilled className="text-neutral-700" />
          </Link>
          <Link
            href="https://linkedin.com/in/ditinagrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedinFilled className="text-neutral-700" />
          </Link>
        </div>
      </div>
    </header>
  );
};
