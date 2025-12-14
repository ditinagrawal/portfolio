import { Link } from "next-view-transitions";

import {
  BunIcon,
  MotionIcon,
  NextjsIcon,
  PostgreSQLIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "@/components/shared/icons";

export const Hero = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="space-y-4 md:space-y-3">
        <h1 className="text-6xl font-bold tracking-tight text-zinc-800">
          Hi, I&apos;m Ditin.
        </h1>
        <p className="max-w-xl space-x-1.5 text-lg tracking-tight text-zinc-600">
          A self-taught developer having expertise in building beautiful and
          functional websites using <NextjsIcon /> <TypeScriptIcon />{" "}
          <TailwindCSSIcon /> <MotionIcon /> <PostgreSQLIcon /> <BunIcon />.
          <br />I also love to share my knowledge with others by writing
          <Link href="/blog" className="mx-1.5 text-zinc-800 underline">
            blogs
          </Link>
          and creating tutorials. I cook amazing UI/UX stuff in my{" "}
          <Link href="/lab" className="mx-1 text-zinc-800 underline">
            lab &rarr;
          </Link>
          .
        </p>
        <p className="text-sm text-zinc-500">
          It&apos;s been{" "}
          <span className="font-medium text-zinc-800">
            {new Date().getFullYear() - 2022} years
          </span>{" "}
          since I started my journey as a developer.
        </p>
      </div>
    </section>
  );
};
