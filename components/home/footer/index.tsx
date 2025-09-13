import Link from "next/link";

import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="pt-20 pb-2">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/ditinagrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithubFilled className="text-neutral-800" />
          </Link>
          <Link
            href="https://x.com/ditinagrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandXFilled className="text-neutral-800" />
          </Link>
          <Link
            href="https://linkedin.com/in/ditinagrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedinFilled className="text-neutral-800" />
          </Link>
        </div>
        <div className="text-sm text-neutral-500">
          Copyright © Ditin Agrawal - All rights reserved
        </div>
      </div>
    </footer>
  );
};
