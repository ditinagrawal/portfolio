import Image from "next/image";

import { Button, buttonVariants } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  IconBrandAstro,
  IconBrandAws,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
} from "@tabler/icons-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      className="border-b border-dashed border-neutral-400 px-4 py-12 sm:p-10 md:p-20"
      id="hero"
    >
      <div className="mx-auto flex max-w-3xl flex-col justify-center gap-6">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full shadow-sm"
          priority
        />
        <h1 className="text-3xl text-neutral-950 sm:text-5xl">
          Hey, I&apos;m{" "}
          <span className="font-semibold italic">Ditin Agrawal.</span>
          <br />
          Dreamer & 👨🏻‍💻 Developer
        </h1>
        <p className="max-w-3xl text-neutral-500">
          I develop with passion, dream with ambition, and bring ideas to life.
          With a knack for creativity and an eye for detail, I specialize in
          crafting user-centered experiences that inspire and engage.
        </p>
        <div className="flex flex-col justify-start gap-4 sm:flex-row">
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "cursor-pointer bg-[#333] font-bold tracking-wide text-white text-shadow-md",
            )}
          >
            See my work
          </Link>
          <Button
            className="border-green-300 bg-green-200 font-bold tracking-wide text-green-600 hover:bg-green-200/90"
            size="lg"
          >
            <span className="flex size-3 items-center justify-center rounded-full bg-green-300">
              <span className="size-2 rounded-full bg-green-600" />
            </span>
            Available for Work
          </Button>
        </div>
        <div className="mt-6 flex flex-col gap-6 py-6">
          <h2 className="text-xl font-medium text-neutral-900">Tech Stack</h2>
          <Slider speedOnHover={20} gap={24}>
            <IconBrandJavascript className="size-12 text-neutral-800" />
            <IconBrandReact className="size-12 text-neutral-800" />
            <IconBrandTypescript className="size-12 text-neutral-800" />
            <IconBrandNextjs className="size-12 text-neutral-800" />
            <IconBrandAstro className="size-12 text-neutral-800" />
            <IconBrandTailwind className="size-12 text-neutral-800" />
            <IconBrandNodejs className="size-12 text-neutral-800" />
            <IconBrandMongodb className="size-12 text-neutral-800" />
            <IconBrandMysql className="size-12 text-neutral-800" />
            <IconBrandPrisma className="size-12 text-neutral-800" />
            <IconBrandAws className="size-12 text-neutral-800" />
            <IconBrandVercel className="size-12 text-neutral-800" />
          </Slider>
        </div>
      </div>
    </section>
  );
};
