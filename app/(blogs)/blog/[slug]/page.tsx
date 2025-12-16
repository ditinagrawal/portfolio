import { promises as fs } from "node:fs";

import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";
import { JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";

import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "next-view-transitions";

import { cn } from "@/lib/utils";
import { useMDXComponents } from "@/mdx-components";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const components = useMDXComponents({});
  const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { content, frontmatter } = await compileMDX<FrontMatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components,
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="py-20">
        <div className="mb-8 flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="min-w-0">
            <h4 className={cn(jetBrainsMono.className, "truncate")}>
              {frontmatter.title}
            </h4>
            <p className="text-sm text-zinc-500">{frontmatter.date}</p>
          </div>
          <Link href="/blog">
            <div className="bg-zinc-200/60 px-2 py-1 text-sm">
              <IconArrowLeft className="-mt-0.5 mr-1 inline-block size-4" />
              Back
            </div>
          </Link>
        </div>
        <div className="prose-zinc prose dark:prose-invert">{content}</div>
      </section>
    </Suspense>
  );
}
