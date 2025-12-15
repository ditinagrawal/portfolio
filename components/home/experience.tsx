import { JetBrains_Mono } from "next/font/google";

import {
  AWSIcon,
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  LaravelIcon,
  MySQLIcon,
  NextjsIcon,
  PhpIcon,
  PostgreSQLIcon,
  PrismaIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "@/components/shared/icons";
import { cn } from "@/lib/utils";
import { IconBriefcase2 } from "@tabler/icons-react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const Experience = () => {
  return (
    <section className="space-y-6">
      <h4
        className={cn(
          jetBrainsMono.className,
          "flex items-center gap-x-2 text-sm font-medium text-zinc-600",
        )}
      >
        <IconBriefcase2 className="mt-0.5 size-4" /> Experience
      </h4>
      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-semibold text-zinc-800">Bytework</h3>
          <div className="mt-2.5">
            <h4 className="font-medium text-zinc-700">Full Stack Developer</h4>
            <p className="text-zinc-600">Intern | 12.2025 - Now</p>
          </div>
          <ul className="mt-3 list-inside list-disc text-sm text-zinc-600">
            <li>
              Building multiple static and dynamic websites for various clients
              and use cases.
            </li>
            <li>
              Creating dynamic dashboards including both frontend and backend
              development.
            </li>
          </ul>
          <div className="mt-4 space-x-2">
            <HTMLIcon /> <CSSIcon /> <JavaScriptIcon /> <PhpIcon />
            <LaravelIcon /> <MySQLIcon />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zinc-800">Dreamlegal</h3>
          <div className="mt-2.5">
            <h4 className="font-medium text-zinc-700">Next.js Developer</h4>
            <p className="text-zinc-600">Intern | 02.2025 - 03.2025</p>
          </div>
          <ul className="mt-3 list-inside list-disc text-sm text-zinc-600">
            <li>
              Maintained the company website, contributing to both frontend and
              backend development.
            </li>
            <li>
              Built new features and APIs to enhance user interface &
              experience.
            </li>
          </ul>
          <div className="mt-4 space-x-2">
            <NextjsIcon /> <TypeScriptIcon /> <TailwindCSSIcon />
            <PostgreSQLIcon /> <PrismaIcon /> <AWSIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
