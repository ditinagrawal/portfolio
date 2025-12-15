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
      <div>
        {filesWithoutExtension.map((file) => (
          <Link key={file} href={`/blog/${file}`}>
            {file}
          </Link>
        ))}
      </div>
    </Suspense>
  );
}
