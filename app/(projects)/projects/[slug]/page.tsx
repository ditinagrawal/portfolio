import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { promises as fs } from "node:fs";
import path from "node:path";

import { ProjectDetailWrapper } from "@/components/projects/project-detail-wrapper";
import { useMDXComponents } from "@/mdx-components";

export default async function ProjectSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const components = useMDXComponents({});
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`
  );

  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, "utf8");
  } catch {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<ProjectFrontMatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components,
  });

  return (
    <ProjectDetailWrapper
      title={frontmatter.title}
      description={frontmatter.description}
      date={frontmatter.date}
      image={frontmatter.image}
      techStack={frontmatter.techStack}
      liveDemo={frontmatter.liveDemo}
      sourceCode={frontmatter.sourceCode}
      content={content}
    />
  );
}
