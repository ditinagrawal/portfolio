import { docs, meta } from "@/.source";
import { BlogCard } from "@/components/blog/blog-card";
import { TagFilter } from "@/components/blog/tag-filter";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { Suspense } from "react";

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const allPages = blogSource.getPages() as BlogPage[];
  const sortedBlogs = allPages.sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  });

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedBlogs.flatMap((blog) => blog.data.tags || [])),
    ).sort(),
  ];

  const selectedTag = resolvedSearchParams.tag || "All";
  const filteredBlogs =
    selectedTag === "All"
      ? sortedBlogs
      : sortedBlogs.filter((blog) => blog.data.tags?.includes(selectedTag));

  const tagCounts = allTags.reduce(
    (acc, tag) => {
      if (tag === "All") {
        acc[tag] = sortedBlogs.length;
      } else {
        acc[tag] = sortedBlogs.filter((blog) =>
          blog.data.tags?.includes(tag),
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 flex min-h-[250px] flex-col justify-center gap-6 border-b border-dashed border-neutral-400 p-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-medium tracking-tighter md:text-5xl">
              Blog
            </h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Insights, tutorials, and updates of latest technologies.
            </p>
          </div>
        </div>
        {allTags.length > 0 && (
          <div className="mx-auto w-full max-w-7xl">
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              tagCounts={tagCounts}
            />
          </div>
        )}
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-0">
        <Suspense fallback={<div>Loading articles...</div>}>
          <div
            className={`relative grid grid-cols-1 overflow-hidden border-x border-dashed border-neutral-400 md:grid-cols-2 lg:grid-cols-3 ${
              filteredBlogs.length < 4 ? "border-b" : "border-b-0"
            }`}
          >
            {filteredBlogs.map((blog) => {
              const date = new Date(blog.data.date);
              const formattedDate = formatDate(date);

              return (
                <BlogCard
                  key={blog.url}
                  url={blog.url}
                  title={blog.data.title}
                  description={blog.data.description}
                  date={formattedDate}
                  thumbnail={blog.data.thumbnail}
                  showRightBorder={filteredBlogs.length < 3}
                />
              );
            })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
