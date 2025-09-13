import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  IconBriefcaseFilled,
  IconCalendarEventFilled,
  IconDiamondFilled,
  IconHomeFilled,
  IconMailFilled,
  IconUserFilled,
} from "@tabler/icons-react";

export const Navbar = () => {
  return (
    <nav className="h-28 bg-white sm:px-4">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center border border-t-0 border-dashed border-neutral-400">
        <div className="fixed top-5 z-50 mx-auto w-[90%] max-w-sm rounded-xl bg-white/50 shadow backdrop-blur sm:w-full">
          <div className="flex items-center justify-around rounded-xl border p-2">
            <WithTooltip tooltip="Home" href="/">
              <IconHomeFilled className="size-6 text-neutral-700" />
            </WithTooltip>
            <Separator
              orientation="vertical"
              className="mx-2 bg-neutral-300 data-[orientation=vertical]:h-4"
            />
            <div className="flex items-center gap-2">
              <WithTooltip tooltip="About" href="#about">
                <IconUserFilled className="size-6 text-neutral-700" />
              </WithTooltip>
              <WithTooltip tooltip="Projects" href="#projects">
                <IconBriefcaseFilled className="size-6 text-neutral-700" />
              </WithTooltip>
              <WithTooltip tooltip="Services" href="#services">
                <IconDiamondFilled className="size-6 text-neutral-700" />
              </WithTooltip>
            </div>
            <Separator
              orientation="vertical"
              className="mx-2 bg-neutral-300 data-[orientation=vertical]:h-4"
            />
            <div className="flex items-center gap-2">
              <WithTooltip
                tooltip="Schedule a Meet"
                href="https://cal.com/ditinagrawal/15min"
                target={true}
              >
                <IconCalendarEventFilled className="size-6 text-neutral-700" />
              </WithTooltip>
              <WithTooltip
                tooltip="Write an Email"
                href="mailto:ditin.agrawal05@gmail.com"
              >
                <IconMailFilled className="size-6 text-neutral-700" />
              </WithTooltip>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface Props {
  children: React.ReactNode;
  tooltip: string;
  href: string;
  target?: boolean;
}

const WithTooltip = ({ children, tooltip, href, target }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          href={href}
          className={cn(buttonVariants({ variant: "link", size: "icon" }))}
          target={target ? "_blank" : undefined}
          rel={target ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};
