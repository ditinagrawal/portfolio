import Image from "next/image";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="px-4 py-12 sm:p-10 md:p-20" id="hero">
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
      </div>
      <div className="w-full py-0 pt-20">
        <div className="flex items-center justify-center gap-16">
          <Image
            src="/assets/hero-1.png"
            alt="hero-1"
            width={300}
            height={300}
            priority
            className="blur-[1px] transition-all duration-300 hover:scale-110 hover:blur-none"
          />
          <Image
            src="/assets/hero-2.png"
            alt="hero-2"
            width={390}
            height={390}
            priority
            className="scale-115 blur-[1px] transition-all duration-300 hover:scale-125 hover:blur-none"
          />
          <Image
            src="/assets/hero-3.png"
            alt="hero-3"
            width={300}
            height={300}
            priority
            className="blur-[1px] transition-all duration-300 hover:scale-110 hover:blur-none"
          />
        </div>
      </div>
    </section>
  );
};
