"use client";

import { Link } from "next-view-transitions";

import { motion } from "motion/react";

type Post = {
  slug: string;
  frontmatter: FrontMatter;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <section className="space-y-8 py-20">
      <motion.div
        className="space-y-1"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold">Blogs 📚</h2>
        <p className="text-sm text-zinc-500">
          I love to share my knowledge with others.
        </p>
      </motion.div>
      <div className="flex flex-col gap-y-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.1 + i * 0.06,
            }}
          >
            <Link href={`/blog/${post.slug}`}>
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
