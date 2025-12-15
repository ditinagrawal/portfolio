import { promises as fs } from "node:fs";

import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";
import { Suspense } from "react";

import { useMDXComponents } from "@/mdx-components";

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const components = useMDXComponents({});
  const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf8");
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components,
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="prose-neutral prose dark:prose-invert mx-auto max-w-2xl">
        {content}
      </div>
    </Suspense>
  );
}
