import type { MDXComponents } from "mdx/types";

import { Code } from "@/components/ui/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: Code,
  };
}
