import { Suspense } from "react";

import { compileMDX } from "next-mdx-remote/rsc";

import { promises as fs } from "node:fs";
import path from "node:path";

import { BlogDetailWrapper } from "@/components/blog/blog-detail-wrapper";
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
  const { content, frontmatter } = await compileMDX<FrontMatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogDetailWrapper
        title={frontmatter.title}
        date={frontmatter.date}
        content={content}
      />
    </Suspense>
  );
}
