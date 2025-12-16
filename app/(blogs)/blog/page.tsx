import { promises as fs } from "node:fs";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
    }),
  );

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  if (!posts || posts.length === 0) notFound();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="space-y-8 py-20">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Blogs 📚</h2>
          <p className="text-sm text-zinc-500">
            I love to share my knowledge with others.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="flex items-center justify-between rounded-lg border border-transparent px-4 py-2.5 transition-all duration-300 hover:border-zinc-200 hover:bg-zinc-50">
                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="truncate font-medium text-zinc-900">
                    {post.frontmatter.title}
                  </h3>
                  <p className="truncate text-sm text-zinc-500">
                    {post.frontmatter.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      {post.frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <time className="ml-4 shrink-0 text-xs text-zinc-400">
                      {formatDate(post.frontmatter.date)}
                    </time>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Suspense>
  );
}
