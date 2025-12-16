import { promises as fs } from "node:fs";

import path from "node:path";

import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function BlogPage() {
  const docs = await fs.readdir(path.join(process.cwd(), "content", "blogs"));
  if (!docs || docs.length === 0) notFound();
  const files = docs.filter((doc) => doc.endsWith(".mdx"));
  const filesWithoutExtension = files.map((file) => file.replace(".mdx", ""));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="space-y-10 py-20">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Blogs 📚</h2>
          <p className="text-sm text-zinc-500">
            I love to share my knowledge with others.
          </p>
        </div>
        <div className="space-y-1">
          {filesWithoutExtension.map((title) => (
            <Link key={title} href={`/blog/${title}`}>
              <div className="rounded-md p-4 text-zinc-800 underline underline-offset-2 transition-colors duration-300 hover:bg-zinc-100">
                {(() => {
                  const x = title.replace(/-/g, " ");
                  return x.charAt(0).toUpperCase() + x.slice(1);
                })()}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Suspense>
  );
}
