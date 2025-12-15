import { JetBrains_Mono } from "next/font/google";

import { IconTools } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import {
  AWSIcon,
  BunIcon,
  NextjsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  ReactQueryIcon,
  ShadcnUI,
  TailwindCSSIcon,
  TypeScriptIcon,
  VercelIcon,
} from "@/components/shared/icons";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const TechStack = () => {
  return (
    <section className="py-28">
      <div className="space-y-8">
        <h4
          className={cn(
            jetBrainsMono.className,
            "flex items-center gap-x-2 text-sm font-medium text-zinc-600",
          )}
        >
          <IconTools className="mt-0.5 size-4" /> My Cool Stack
        </h4>
        <div className="flex flex-wrap gap-6">
          <ReactIcon className="size-8" />
          <NextjsIcon className="size-8" />
          <TypeScriptIcon className="size-8" />
          <TailwindCSSIcon className="size-8" />
          <ShadcnUI className="size-8" />
          <PostgreSQLIcon className="size-8" />
          <PrismaIcon className="size-8" />
          <AWSIcon className="size-8" />
          <ReactQueryIcon className="size-8" />
          <BunIcon className="size-8" />
          <VercelIcon className="size-8" />
        </div>
      </div>
    </section>
  );
};
