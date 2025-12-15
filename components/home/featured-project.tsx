import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import {
  IconBrandGithub,
  IconChecks,
  IconMedal,
  IconWorld,
} from "@tabler/icons-react";

import {
  AWSIcon,
  BunIcon,
  NextjsIcon,
  PostgreSQLIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/shared/icons";
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const FeaturedProject = () => {
  return (
    <section className="space-y-4">
      <h4
        className={cn(
          jetBrainsMono.className,
          "flex items-center gap-x-2 text-sm font-medium text-zinc-600",
        )}
      >
        <IconMedal className="mt-0.5 size-4" /> Featured Project
        <svg
          className="w-8 -scale-x-100 rotate-12 fill-zinc-600"
          viewBox="0 0 219 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#featured-project)">
            <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z"></path>
          </g>
          <defs>
            <clipPath id="featured-project">
              <rect width="219" height="41"></rect>
            </clipPath>
          </defs>
        </svg>
      </h4>
      <div>
        <div className="grid grid-cols-1 gap-y-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 md:grid-cols-2 md:gap-y-0">
          <div className="p-4">
            <h2 className="text-lg font-medium text-zinc-800 text-shadow-2xs">
              DropCircle
            </h2>
            <p className="text-sm text-zinc-600">
              Simple, private, temporary file sharing.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <IconChecks className="size-4 text-emerald-700" /> Built with{" "}
                <NextjsIcon /> <TypeScriptIcon /> <TailwindCSSIcon />{" "}
                <PostgreSQLIcon /> <AWSIcon /> <BunIcon />
              </li>
              <li className="flex items-center gap-2">
                <IconChecks className="size-4 text-emerald-700" /> Implemented
                Cron Jobs for scheduled <br /> cleanup of expired files.
              </li>
              <li className="flex items-center gap-2">
                <IconChecks className="size-4 text-emerald-700" />
                Deployed on <VercelIcon /> Vercel.
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-x-4">
              <Link
                href="https://dropcircle.ditin.in"
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconWorld className="size-5" /> Live Demo
              </Link>
              <Link
                href="https://github.com/ditinagrawal/dropcircle"
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-800"
              >
                <IconBrandGithub className="size-5" /> Source Code
              </Link>
            </div>
          </div>
          <Image
            src="/projects/dropcircle.png"
            alt="DropCircle"
            width={512}
            height={512}
            className="scale-105 -rotate-z-2 md:scale-110"
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};
