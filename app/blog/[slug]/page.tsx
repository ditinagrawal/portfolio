import { docs, meta } from "@/.source";
import { Button } from "@/components/ui/button";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { DocsBody } from "fumadocs-ui/page";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AuthorCard } from "@/components/blog/author-card";
import { HashScrollHandler } from "@/components/blog/hash-scroll-handler";
import { MobileTableOfContents } from "@/components/blog/mobile-toc";
import { ReadMoreSection } from "@/components/blog/read-more-section";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { getAuthor, isValidAuthor } from "@/lib/authors";
import Wrapper from "./wrapper";

interface PageProps {
  params: Promise<{ slug: string }>;
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

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const page = blogSource.getPage([slug]);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const date = new Date(page.data.date);
  const formattedDate = formatDate(date);

  return (
    <Wrapper>
      <div className="relative min-h-screen">
        <HashScrollHandler />

        <div className="relative z-10 space-y-4 border-b border-dashed border-neutral-400">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 p-6">
            <div className="text-muted-foreground flex flex-wrap items-center gap-3 gap-y-5 text-sm">
              <Button variant="outline" asChild className="h-6 w-6">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to all articles</span>
                </Link>
              </Button>
              {page.data.tags && page.data.tags.length > 0 && (
                <div className="text-muted-foreground flex flex-wrap gap-3">
                  {page.data.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground flex h-6 w-fit items-center justify-center rounded-md border px-3 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <time className="text-muted-foreground font-medium">
                {formattedDate}
              </time>
            </div>

            <h1 className="text-4xl font-medium tracking-tighter text-balance md:text-5xl lg:text-6xl">
              {page.data.title}
            </h1>

            {page.data.description && (
              <p className="text-muted-foreground max-w-4xl md:text-lg md:text-balance">
                {page.data.description}
              </p>
            )}
          </div>
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl divide-x divide-dashed divide-neutral-400 px-4 md:px-0">
          <div className="pointer-events-none absolute left-1/2 mx-auto h-full w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 border-x border-dashed border-neutral-400 p-0 lg:w-full" />
          <main className="w-full overflow-hidden p-0">
            {page.data.thumbnail && (
              <div className="relative h-[500px] w-full overflow-hidden border border-transparent object-cover">
                <Image
                  src={page.data.thumbnail}
                  alt={page.data.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <div className="p-6 lg:p-10">
              <div className="prose dark:prose-invert prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance prose-lg max-w-none">
                <DocsBody>
                  <MDX />
                </DocsBody>
              </div>
            </div>
            <div className="mt-10">
              <ReadMoreSection
                currentSlug={[slug]}
                currentTags={page.data.tags}
              />
            </div>
          </main>

          <aside className="bg-muted/60 dark:bg-muted/20 hidden w-[350px] flex-shrink-0 p-6 lg:block lg:p-10">
            <div className="sticky top-20 space-y-8">
              {page.data.author && isValidAuthor(page.data.author) && (
                <AuthorCard author={getAuthor(page.data.author)} />
              )}
              <div className="border-border bg-card rounded-lg border p-6">
                <TableOfContents />
              </div>
            </div>
          </aside>
        </div>

        <MobileTableOfContents />
      </div>
    </Wrapper>
  );
}
