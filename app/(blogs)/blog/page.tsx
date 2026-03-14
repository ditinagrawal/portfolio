import { Suspense } from "react";

import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { promises as fs } from "node:fs";
import path from "node:path";

import { BlogList } from "@/components/blog/blog-list";

type BlogPost = {
  slug: string;
  frontmatter: FrontMatter;
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogsDir = path.join(process.cwd(), "content", "blogs");
  const docs = await fs.readdir(blogsDir);
  const mdxFiles = docs.filter((doc) => doc.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(blogsDir, file);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { frontmatter } = await compileMDX<FrontMatter>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });
      return {
        slug: file.replace(".mdx", ""),
        frontmatter,
      };
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  if (!posts || posts.length === 0) notFound();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogList posts={posts} />
    </Suspense>
  );
}
